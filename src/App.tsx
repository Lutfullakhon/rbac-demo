// App.tsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'
import ManagerPage from './pages/ManagerPage'
import ClientPage from './pages/ClientPage'
import SupportPage from './pages/SupportPage'
import Unauthorized from './pages/Unauthorized'
import ProtectedRoute from './routes/ProtectedRoute'
import NavBar from './components/NavBar'
import { useAuth } from './context/useAuth'

const App: React.FC = () => {
	const { user } = useAuth()

	return (
		<div>
			{user && <NavBar />}
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/unauthorized' element={<Unauthorized />} />

				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin'
					element={
						<ProtectedRoute allowedRoles={['company_admin']}>
							<AdminPage />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/manager'
					element={
						<ProtectedRoute allowedRoles={['manager']}>
							<ManagerPage />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/client'
					element={
						<ProtectedRoute allowedRoles={['client']}>
							<ClientPage />
						</ProtectedRoute>
					}
				/>

				<Route
					path='/support'
					element={
						<ProtectedRoute allowedRoles={['support']}>
							<SupportPage />
						</ProtectedRoute>
					}
				/>

				<Route path='*' element={<Navigate to={user ? '/' : '/login'} />} />
			</Routes>
		</div>
	)
}

export default App
