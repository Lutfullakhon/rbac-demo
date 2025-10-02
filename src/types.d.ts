export type Role = 'company_admin' | 'manager' | 'client' | 'support';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  organization?: string;
  exp?: number; // millis timestamp
}
  