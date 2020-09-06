import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage'),
    },
    {
      path: '/hhy_board',
      component: () => import('@/views/board/HhyBoardLt'),
    },
    {
      path: '/hhy_board/:id',
      component: () => import('@/views/board/HhyBoardDt'),
    },
    {
      path: '/sale_calendar',
      component: () => import('@/views/sale/SaleCalendarPage'),
    },
    {
      path: '/sale_card_list',
      component: () => import('@/views/sale/SaleCardListPage'),
    },
    {
      path: '/sale_cash_list',
      component: () => import('@/views/sale/SaleCashListPage'),
    },
    {
      path: '/deposit_calendar',
      component: () => import('@/views/deposit/DepositCalendarPage'),
    },
    {
      path: '/deposit_list',
      component: () => import('@/views/deposit/DepositListPage'),
    },
    {
      path: '/deposit_boru_list',
      component: () => import('@/views/deposit/DepositBoruListPage'),
    },
    {
      path: '/tax_list',
      component: () => import('@/views/etc/TaxListPage'),
    },
    {
      path: '/oil_list',
      component: () => import('@/views/etc/OilListPage'),
    },
    {
      path: '/cardbin_list',
      component: () => import('@/views/etc/CardBinListPage'),
    },
    {
      path: '/notice_list',
      component: () => import('@/views/etc/NoticeListPage'),
    },
  ]
});

export default router;
