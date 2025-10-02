import React from 'react'
import { DashboardGrid } from '../components/DashboardGrid'
import { DashboardCard } from '../components/DashboardCard'
import { MessageSquare, Clock, Archive } from 'lucide-react'

const SupportPage: React.FC = () => {
	return (
		<div className='card'>
			<h2 style={{ color: 'var(--color-support)' }}>Панель поддержки</h2>
			<p>Обработка запросов и тикетов.</p>

			<DashboardGrid>
				<DashboardCard
					title='Открытые тикеты'
					value='7 в работе'
					actionLabel='Список'
					icon={<MessageSquare />}
				/>
				<DashboardCard
					title='В ожидании ответа'
					value='3 клиента'
					actionLabel='Ответить'
					icon={<Clock />}
				/>
				<DashboardCard
					title='История'
					value='102 закрыто'
					actionLabel='Просмотр'
					icon={<Archive />}
				/>
			</DashboardGrid>
		</div>
	)
}

export default SupportPage
