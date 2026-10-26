import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

export type JwtPayload = {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
};

type AuthenticatedRequest = Request & {
  user: JwtPayload;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): JwtPayload => {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();

    return request.user;
  },
);
