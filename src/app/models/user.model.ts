export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  nickname: string;
  password: string;
  isAdmin?: boolean;
  token?: string;
}
