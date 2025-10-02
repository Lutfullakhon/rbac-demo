import React from 'react'
import { DashboardGrid } from '../components/DashboardGrid'
import { DashboardCard } from '../components/DashboardCard'
import { ClipboardList, Users, Calendar } from 'lucide-react'

const ManagerPage: React.FC = () => {
	return (
		<div className='card'>
			<h2 style={{ color: 'var(--color-manager)' }}>Панель менеджера</h2>
			<p>Работа с клиентами, просмотры объектов, управление заявками.</p>

			<DashboardGrid>
				<DashboardCard
					title='Заявки'
					value='12 новых'
					actionLabel='Открыть'
					icon={<ClipboardList />}
				/>
				<DashboardCard
					title='Клиенты'
					value='42 активных'
					actionLabel='Список'
					icon={<Users />}
				/>
				<DashboardCard
					title='Календарь'
					value='3 встречи'
					actionLabel='Посмотреть'
					icon={<Calendar />}
				/>
			</DashboardGrid>
		</div>
	)
}

export default ManagerPage
