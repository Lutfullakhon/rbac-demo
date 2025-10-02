import React from 'react'
import { DashboardGrid } from '../components/DashboardGrid'
import { DashboardCard } from '../components/DashboardCard'
import { Users, Building2, Wallet } from 'lucide-react'

const AdminPage: React.FC = () => {
	return (
		<div className='card'>
			<h2 style={{ color: 'var(--color-admin)' }}>Панель администратора</h2>
			<p>Управление объектами, пользователями и финансовыми операциями.</p>

			<DashboardGrid>
				<DashboardCard
					title='Пользователи'
					value='120'
					actionLabel='Управлять'
					icon={<Users />}
				/>
				<DashboardCard
					title='Финансы'
					value='1.2M ₽'
					actionLabel='Подробнее'
					icon={<Wallet />}
				/>
				<DashboardCard
					title='Объекты'
					value='58'
					actionLabel='Просмотреть'
					icon={<Building2 />}
				/>
			</DashboardGrid>
		</div>
	)
}

export default AdminPage
