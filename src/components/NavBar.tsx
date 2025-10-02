import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

const NavBar: React.FC = () => {
	const { user, logout } = useAuth()
	const navigate = useNavigate()

	const handleLogout = () => {
		logout()
		navigate('/login')
	}

	return (
		<nav>
			<div>
				<NavLink
					to='/'
					className={({ isActive }) =>
						`navbar-link ${isActive ? 'active' : ''}`
					}
				>
					Home
				</NavLink>
				{user?.role === 'company_admin' && (
					<NavLink
						to='/admin'
						className={({ isActive }) =>
							`navbar-link ${isActive ? 'active' : ''}`
						}
					>
						Admin
					</NavLink>
				)}
				{user?.role === 'manager' && (
					<NavLink
						to='/manager'
						className={({ isActive }) =>
							`navbar-link ${isActive ? 'active' : ''}`
						}
					>
						Manager
					</NavLink>
				)}
				{user?.role === 'client' && (
					<NavLink
						to='/client'
						className={({ isActive }) =>
							`navbar-link ${isActive ? 'active' : ''}`
						}
					>
						Client
					</NavLink>
				)}
				{user?.role === 'support' && (
					<NavLink
						to='/support'
						className={({ isActive }) =>
							`navbar-link ${isActive ? 'active' : ''}`
						}
					>
						Support
					</NavLink>
				)}
			</div>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<span>{user?.name}</span>
				<button onClick={handleLogout} style={{ marginLeft: 12 }}>
					Logout
				</button>
			</div>
		</nav>
	)
}

export default NavBar
