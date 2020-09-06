<template>
  <div>
    <v-card elevation="0" flat>
      <v-toolbar flat color="white">
        <v-toolbar-title>{{data.title}}</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-toolbar-title class="caption font-weight-bold" align="end">{{data.name}} ({{data.email}})<br>{{data.reg_dt}}</v-toolbar-title>
      </v-toolbar>
      <v-divider class="ma-0" />
      <v-card-text style="height: 200px;">
        {{data.contents}}
      </v-card-text>
    </v-card>
    <v-row justify="end" class="me-0 mt-4">
      <v-btn dark to="/hhy_board" class="me-2">목록으로</v-btn>
      <BoardUpdate :propsdata="data"></BoardUpdate>
      <ConfirmBox btn-style="red darken-1"
                  :dialog.sync="confirm_dialog"
                  :vaild="false"
                  @confirmEvent="deleteItem">
        <div slot="actName">삭제</div>
        <div slot="actTitle">정말 삭제하시겠습니까?</div>
      </ConfirmBox>
    </v-row>
  </div>
</template>

<script>
import BoardUpdate from "@/components/board/BoardUpdate";
import ConfirmBox from "@/components/common/ConfirmBox";
import axios from "axios";

export default {
  components: {
    BoardUpdate,
    ConfirmBox,
  },
  data() {
    return {
      data: {},
      confirm_dialog: false,
    }
  },
  methods: {
    async deleteItem() {
      await axios.delete(`http://localhost:8080/hhy_board/${this.data.id}`)
      .then(response => {
        console.log(response);
        this.$router.push('/hhy_board');
      })
      .catch(error => console.log(error));
    }
  },
  async mounted() {
    await axios.get(`http://localhost:8080/hhy_board/${this.$route.params.id}`)
        .then(response => this.data = response.data)
        .catch(error => console.log(error));
  },
}
</script>
