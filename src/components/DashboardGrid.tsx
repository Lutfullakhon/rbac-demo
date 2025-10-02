import React from 'react'

export const DashboardGrid: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className='dashboard-grid'>{children}</div>
}
