<template>
  <v-row justify="end" class="me-0 mt-0">
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          등록하기
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">등록 폼</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="6">
                  <v-text-field label="이름*" v-model="data.name" :rules="requireRules" required></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Email*" v-model="data.email" :rules="emailRules" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="제목*" v-model="data.title" :rules="requireRules" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea label="내용*" v-model="data.contents" :rules="requireRules" required></v-textarea>
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
            <div slot="actName">등록</div>
            <div slot="actTitle">등록하시겠습니까?</div>
          </ConfirmBox>
          <v-btn color="red darken-1" text @click="closeForm">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ConfirmBox from "@/components/common/ConfirmBox";
import axios from "axios";

export default {
  data () {
    return {
      confirm_dialog: false,
      dialog: false,
      data: {
        name: '',
        email: '',
        title: '',
        contents: '',
      },
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
      await axios.post('http://localhost:8080/hhy_board', this.data)
          .then(response => {
            console.log(response);
            this.$router.push(`/hhy_board/${response.data.id}`);
          })
          .catch(error => console.log(error));
    },
    vaildForm() {
      this.confirm_dialog = this.$refs.form.validate();
    },
    closeForm() {
      this.$refs.form.reset();
      this.dialog = false;
    }
  },
  components: {
    ConfirmBox
  }
}
</script>
