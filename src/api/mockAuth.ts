import { createMockToken } from '../utils/jwt';
import type { User } from '../types';

type LoginResult = { token: string; user: User };

const users: Array<User & { password: string }> = [
  { id: 1, name: 'Иван Иванов', email: 'admin@test.com', password: 'admin123', role: 'company_admin', organization: 'Компания' },
  { id: 2, name: 'Мария Менеджер', email: 'manager@test.com', password: 'manager123', role: 'manager', organization: 'Компания' },
  { id: 3, name: 'Петр Клиент', email: 'client@test.com', password: 'client123', role: 'client', organization: 'Клиент' },
  { id: 4, name: 'Ольга Поддержка', email: 'support@test.com', password: 'support123', role: 'support', organization: 'Компания' },
];

export function login(email: string, password: string): Promise<LoginResult> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = users.find(u => u.email === email && u.password === password);
      if (!found) return reject(new Error('Неверный email или пароль'));

      // ✅ strongly typed payload
      const payload: User = {
        id: found.id,
        name: found.name,
        email: found.email,
        role: found.role,
        organization: found.organization,
        exp: Date.now() + 1000 * 60 * 60, // expiration in ms (1 hour)
      };

      const token = createMockToken(payload);

      resolve({ token, user: payload });
    }, 500); // simulate latency
  });
}
