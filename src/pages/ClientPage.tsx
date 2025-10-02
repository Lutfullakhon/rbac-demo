import React from 'react'
import { DashboardGrid } from '../components/DashboardGrid'
import { DashboardCard } from '../components/DashboardCard'
import { Home, CreditCard, FileText } from 'lucide-react'

const ClientPage: React.FC = () => {
	return (
		<div className='card'>
			<h2 style={{ color: 'var(--color-client)' }}>Личный кабинет клиента</h2>
			<p>Информация об аренде, платежах и документах.</p>

			<DashboardGrid>
				<DashboardCard
					title='Аренда'
					value='Квартира на Ленина'
					actionLabel='Детали'
					icon={<Home />}
				/>
				<DashboardCard
					title='Платежи'
					value='Ожидается: 20 000 ₽'
					actionLabel='Оплатить'
					icon={<CreditCard />}
				/>
				<DashboardCard
					title='Документы'
					value='5 файлов'
					actionLabel='Открыть'
					icon={<FileText />}
				/>
			</DashboardGrid>
		</div>
	)
}

export default ClientPage
