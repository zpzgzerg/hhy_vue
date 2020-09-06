<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="data_list"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-0"
        @page-count="pageCount = $event"
        :loading="loading" loading-text="게시물을 읽어오고 있습니다. 잠시만 기다려주세요."
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>게시판 목록</v-toolbar-title>
          <v-divider
              class="mx-4"
              inset
              vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <BoardRegist></BoardRegist> <!-- 등록 컴포넌트 -->
        </v-toolbar>
        <v-divider class="ma-0" />
      </template>
      <template v-slot:item.title="{ item }">
        <router-link :to="`/hhy_board/${item.id}`">{{item.title}}</router-link>
      </template>
    </v-data-table>
    <div class="text-center pt-4">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BoardRegist from "@/components/board/BoardRegist";

export default {
  data () {
    return {
      loading: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 20,
      selected: [],
      data_list: [],
      headers: [
        {
          text: '번호',
          class: 'text-align: center;',
          sortable: false,
          value: 'id',
          align: 'center'
        },
        { text: '제목', value: 'title' },
        { text: '이름', value: 'name', align: 'center' },
        { text: '이메일', value: 'email', align: 'center' },
        { text: '등록일', value: 'reg_dt', align: 'center' },
      ],
    }
  },
  components: {
    BoardRegist,
  },
  async mounted() {
    this.loading = true;
    await axios.get('http://localhost:8080/hhy_board')
        .then(response => {
          this.data_list = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
  },
}
</script>
