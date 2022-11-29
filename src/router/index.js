import { createRouter, createWebHistory } from 'vue-router'
import { HOME, APEX_CHART, HIGH_CHART } from './routes'
import HomeView from '@/page/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: HOME,
			component: HomeView
		},
		{
			path: '/apexchart',
			name: APEX_CHART,
			component: () => import('@/page/ApexchartView.vue')
		},
		{
			path: '/highchart',
			name: HIGH_CHART,
			component: () => import('@/page/HighchartView.vue')
		}
	]
})

export default router
