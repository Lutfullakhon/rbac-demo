import React from 'react'
import { useAuth } from '../context/useAuth'
import { DashboardGrid } from '../components/DashboardGrid'
import { DashboardCard } from '../components/DashboardCard'
import {
	Users,
	Wallet,
	Building2,
	ClipboardList,
	Calendar,
	Home as HomeIcon,
	CreditCard,
	FileText,
	MessageSquare,
	Archive,
	Clock,
} from 'lucide-react'

const Home: React.FC = () => {
	const { user } = useAuth()

	const roleLabel = (r?: string) => {
		switch (r) {
			case 'company_admin':
				return 'Администратор компании'
			case 'manager':
				return 'Менеджер по аренде'
			case 'client':
				return 'Клиент'
			case 'support':
				return 'Служба поддержки'
			default:
				return 'Пользователь'
		}
	}

	const renderRoleDashboard = () => {
		switch (user?.role) {
			case 'company_admin':
				return (
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
				)
			case 'manager':
				return (
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
				)
			case 'client':
				return (
					<DashboardGrid>
						<DashboardCard
							title='Аренда'
							value='Квартира на Ленина'
							actionLabel='Детали'
							icon={<HomeIcon />}
						/>
						<DashboardCard
							title='Платежи'
							value='20 000 ₽ ожидается'
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
				)
			case 'support':
				return (
					<DashboardGrid>
						<DashboardCard
							title='Открытые тикеты'
							value='7 в работе'
							actionLabel='Список'
							icon={<MessageSquare />}
						/>
						<DashboardCard
							title='В ожидании ответа'
							value='3 клиента ждут'
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
				)
			default:
				return (
					<DashboardGrid>
						<DashboardCard
							title='Профиль'
							value={user?.email || ''}
							actionLabel='Открыть'
							icon={<Users />}
						/>
					</DashboardGrid>
				)
		}
	}

	return (
		<div className='card'>
			<h2>
				Добро пожаловать, {roleLabel(user?.role)} {user?.name}!
			</h2>
			<p style={{ marginBottom: 16 }}>
				Это ваша персональная стартовая панель.
			</p>
			{renderRoleDashboard()}
		</div>
	)
}

export default Home
