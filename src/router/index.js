import { createRouter, createWebHistory } from 'vue-router'
import { HOME, APEX_CHART, VUE_CHART } from './routes'
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
			path: '/vuechart',
			name: VUE_CHART,
			component: () => import('@/page/VuechartView.vue')
		}
	]
})

export default router
