<template>
  <v-dialog v-model="dialog" persistent max-width="1200px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="me-2"
      >
        수정하기
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">수정 폼</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="6">
                <v-text-field label="이름*" v-model="propsdata.name" :rules="requireRules" required></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field label="Email*" v-model="propsdata.email" :rules="emailRules" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="제목*" v-model="propsdata.title" :rules="requireRules" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="내용*" v-model="propsdata.contents" :rules="requireRules" required></v-textarea>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>* 표시는 필수 입력</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <ConfirmBox btn-style="blue darken-1"
                    :dialog.sync="confirm_dialog"
                    :vaild="true"
                    @confirmEvent="submitForm"
                    @validEvent="vaildForm">
          <div slot="actName">수정</div>
          <div slot="actTitle">수정하시겠습니까?</div>
        </ConfirmBox>
        <v-btn color="red darken-1" text @click="closeForm">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ConfirmBox from "@/components/common/ConfirmBox";
import axios from "axios";

export default {
  props: {
    propsdata: {},
  },
  components: {
    ConfirmBox
  },
  data () {
    return {
      confirm_dialog: false,
      dialog: false,
      valid: true,
      requireRules: [
        v => !!v || '필수값입니다.',
      ],
      emailRules: [
        v => !!v || '필수값입니다.',
        v => /.+@.+\..+/.test(v) || '이메일 형식에 맞지 않습니다.',
      ],
    }
  },
  methods: {
    async submitForm() {
      await axios.put(`http://localhost:8080/hhy_board/${this.data.id}`, this.data)
          .then(response => {
            console.log(response);
            this.$router.push(`/hhy_board/${this.data.id}`);
          })
          .catch(error => console.log(error));
    },
    vaildForm() {
      this.confirm_dialog = this.$refs.form.validate();
    },
    closeForm() {
      this.$refs.form.resetValidation()
      this.dialog = false;
    }
  }
}
</script>
