import React, { useState } from 'react'
import { useLocation, useNavigate, type Location } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

type LocationState = {
	from?: { pathname: string }
}

const Login: React.FC = () => {
	const { login } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()
	const location = useLocation() as Location & { state: LocationState }
	const from = location.state?.from?.pathname || '/'

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError(null)
		if (!email || !password) {
			setError('Введите email и пароль')
			return
		}
		setLoading(true)
		try {
			await login(email, password)
			navigate(from, { replace: true })
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message)
			} else {
				setError('Ошибка входа')
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='card'>
			<h2 style={{ marginBottom: 20, textAlign: 'center' }}>Вход</h2>
			<form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
				<label>
					<div>Email</div>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						type='email'
					/>
				</label>
				<label>
					<div>Пароль</div>
					<input
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
					/>
				</label>
				<button type='submit' disabled={loading}>
					{loading ? 'Входим...' : 'Войти'}
				</button>
				{error && <div style={{ color: 'red', fontSize: 14 }}>{error}</div>}
			</form>

			<hr style={{ margin: '20px 0' }} />

			<div style={{ fontSize: 14, lineHeight: 1.6 }}>
				<strong>Тестовые пользователи:</strong>
				<ul>
					<li>admin@test.com / admin123 → company_admin</li>
					<li>manager@test.com / manager123 → manager</li>
					<li>client@test.com / client123 → client</li>
					<li>support@test.com / support123 → support</li>
				</ul>
			</div>
		</div>
	)
}

export default Login
