import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
				<Link to='/'>Home</Link>
				{user?.role === 'company_admin' && <Link to='/admin'>Admin</Link>}
				{user?.role === 'manager' && <Link to='/manager'>Manager</Link>}
				{user?.role === 'client' && <Link to='/client'>Client</Link>}
				{user?.role === 'support' && <Link to='/support'>Support</Link>}
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
