<template>
  <v-main>
    <v-container
        class="fill-height"
        fluid
    >
      <v-row
          align="center"
          justify="center"
      >
        <v-col
            cols="12"
            sm="8"
            md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
                color="primary"
                dark
                flat
            >
              <v-toolbar-title>로그인 폼</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                    label="아이디"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                ></v-text-field>

                <v-text-field
                    id="password"
                    label="패스워드"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/main" @click="loginProcess">로그인</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  methods: {
    loginProcess() {
      this.$emit('loginProcess');
    },
  }
}
</script>
