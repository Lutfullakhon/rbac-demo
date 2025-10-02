import type { User } from '../types';

export function base64EncodeUnicode(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}

export function base64DecodeUnicode(str: string): string {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    // fallback
    return atob(str);
  }
}

/**
 * Create a mock JWT-like token from a User payload
 */
export function createMockToken(payload: User): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const headerB64 = base64EncodeUnicode(JSON.stringify(header));
  const payloadB64 = base64EncodeUnicode(JSON.stringify(payload));
  const signature = 'mock-signature'; // in a real app you'd sign this
  return `${headerB64}.${payloadB64}.${signature}`;
}

/**
 * Decode a mock JWT-like token back into a User
 */
export function decodeMockToken(token: string): User | null {
  const parts = token.split('.');
  if (parts.length < 2) return null;
  try {
    const payload = base64DecodeUnicode(parts[1]);
    return JSON.parse(payload) as User;
  } catch {
    return null;
  }
}
