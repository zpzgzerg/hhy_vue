<template>
  <v-app>
    <login-page v-if="!isLogin" @loginProcess="loginCheck" />
    <template v-else>
      <top-bar />
      <menu-drawer />
      <main-view />
    </template>
    <footer-bar />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      isLogin : false,
    }
  },
  components: {
    TopBar: () => import('@/components/common/TopBar'),
    MenuDrawer: () => import('@/components/common/MenuDrawer'),
    MainView: () => import('@/components/common/MainView'),
    FooterBar: () => import('@/components/common/FooterBar'),
    LoginPage: () => import('@/views/LoginPage'),
  },
  methods: {
    loginCheck() {
      this.isLogin = true;
    }
  }
}
</script>
