export const state = () => ({
    siteName: 'SUMAS',
    navItems: [
      { title: 'Home', to: '/', icon: 'mdi-home-outline', },
      { title: 'Inventory', to: '/inventory', icon: 'mdi-cart-outline', },
      { title: 'Sales', to: '/sales', icon: 'mdi-shopping-outline', },
      { title: 'Staff', to: '/staff', icon: 'mdi-account-group-outline', },
      { title: 'Report', to: '/report', icon: 'mdi-book-open-page-variant-outline', },
      ],
    
})
export const getters = {
    siteName: (state) => state.siteName,
    navItems: (state) => state.navItems,
}
