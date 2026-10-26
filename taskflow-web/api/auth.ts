import apiClient from "./client";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar_url: string | null;
}

export interface LoginResponse {
  access_token: string;
  user: AuthUser;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export async function login(
  credentials: LoginCredentials,
): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>(
    "/auth/login",
    credentials,
  );

  return response.data;
}
