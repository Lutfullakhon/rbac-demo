import React, { useEffect, useState } from 'react'
import { login as apiLogin } from '../api/mockAuth'
import { decodeMockToken } from '../utils/jwt'
import type { User } from '../types'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<string | null>(() =>
		localStorage.getItem('token')
	)

	const [user, setUser] = useState<User | null>(() => {
		const t = localStorage.getItem('token')
		if (!t) return null
		const payload = decodeMockToken(t)
		if (!payload) return null
		if (payload.exp && Date.now() > payload.exp) {
			localStorage.removeItem('token')
			return null
		}
		return payload as User
	})

	useEffect(() => {
		if (token) localStorage.setItem('token', token)
		else localStorage.removeItem('token')
	}, [token])

	const login = async (email: string, password: string) => {
		const res = await apiLogin(email, password)
		setToken(res.token)
		setUser(res.user)
	}

	const logout = () => {
		setToken(null)
		setUser(null)
		localStorage.removeItem('token')
	}

	return (
		<AuthContext.Provider value={{ user, token, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
