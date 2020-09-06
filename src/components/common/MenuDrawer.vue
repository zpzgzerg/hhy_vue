<template>
  <div>
    <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
    >
      <v-list class="py-0">
        <template v-for="item in items">
          <v-list-group
              v-if="item.children"
              :key="item.text"
              v-model="item.model"
              active-class="primary white--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
                v-for="(child, i) in item.children"
                :key="i"
                link
                :to="child.to"
                active-class="primary white--text"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
              v-else
              :key="item.text"
              link
              :to="item.to"
              active-class="primary white--text"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-divider class="mb-2" />
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-chevron-up', 'icon-alt': 'mdi-chevron-down',
        text: '매출관리',
        children: [
          { icon: 'mdi-minus', to: '/sale_calendar', text: '매출내역 캘린더' },
          { icon: 'mdi-minus', to: '/sale_card_list', text: '신용카드 거래내역' },
          { icon: 'mdi-minus', to: '/sale_cash_list', text: '현금영수증 거래내역' },
        ],
      },
      {
        icon: 'mdi-chevron-up', 'icon-alt': 'mdi-chevron-down',
        text: '입금관리',
        children: [
          { icon: 'mdi-minus', to: '/deposit_calendar', text: '입금 캘린더', },
          { icon: 'mdi-minus', to: '/deposit_list', text: '입금내역', },
          { icon: 'mdi-minus', to: '/deposit_boru_list', text: '입금보류내역', },
        ],
      },
      {
        icon: 'mdi-chevron-up', 'icon-alt': 'mdi-chevron-down',
        text: '부가서비스',
        children: [
          { icon: 'mdi-minus', to: '/tax_list', text: '세무신고자료', },
          { icon: 'mdi-minus', to: '/oil_list', text: '유종별거래집계', },
          { icon: 'mdi-minus', to: '/cardbin_list', text: '카드BIN 조회', },
          { icon: 'mdi-minus', to: '/notice_list', text: '공지사항', },
        ],
      },
      { to: '/hhy_board', text: '호호유보드' },
    ],
  }),
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    }
  }
}
</script>

<style scoped>

</style>
