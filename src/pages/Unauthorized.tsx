// pages/Unauthorized.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized: React.FC = () => {
	return (
		<div style={{ padding: 20 }}>
			<h2>Доступ запрещён</h2>
			<p>У вас нет прав для просмотра этой страницы.</p>
			<p>
				<Link to='/'>Вернуться на главную</Link>
			</p>
		</div>
	)
}

export default Unauthorized
