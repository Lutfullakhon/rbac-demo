import React from 'react'

interface Props {
	title: string
	value: string | number
	actionLabel: string
	onAction?: () => void
	icon?: React.ReactNode
}

export const DashboardCard: React.FC<Props> = ({
	title,
	value,
	actionLabel,
	onAction,
	icon,
}) => {
	return (
		<div className='dashboard-card'>
			<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
				{icon}
				<h3>{title}</h3>
			</div>
			<p style={{ margin: '6px 0 12px', fontSize: 14 }}>{value}</p>
			<button onClick={onAction}>{actionLabel}</button>
		</div>
	)
}
