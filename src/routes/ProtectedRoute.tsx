// routes/ProtectedRoute.tsx
import React, { type JSX } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

const ProtectedRoute: React.FC<{
	children: JSX.Element
	allowedRoles?: string[]
}> = ({ children, allowedRoles }) => {
	const { token, user } = useAuth()
	const location = useLocation()

	if (!token || !user) {
		return <Navigate to='/login' replace state={{ from: location }} />
	}

	if (allowedRoles && !allowedRoles.includes(user.role)) {
		return <Navigate to='/unauthorized' replace />
	}

	return children
}

export default ProtectedRoute
