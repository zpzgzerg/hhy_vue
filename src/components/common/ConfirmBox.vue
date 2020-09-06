<template>
  <div>
    <v-btn :color='btnStyle' dark class="me-2" @click="validAction"><slot name="actName"></slot></v-btn>
    <v-dialog
        v-model="confirm_dialog"
        max-width="300"
    >
      <v-card>
        <v-card-title h1><slot name="actTitle"></slot></v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="confirmAction"
          >
            <slot name="actName"></slot>
          </v-btn>

          <v-btn
              color="green darken-1"
              text
              @click="confirm_dialog = false"
          >
            취소
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  computed: {
    confirm_dialog: {
      get: function(){
        return this.dialog;
      },
      set: function(newValue){
        this.$emit('update:dialog', newValue)
      }
    },
  },
  props: {
    btnStyle: String,
    dialog: Boolean,
    vaild: Boolean,
  },
  methods: {
    confirmAction() {
      this.$emit('confirmEvent');
    },
    validAction() {
      if(this.vaild) {
        this.$emit('validEvent');
      } else {
        this.$emit('update:dialog', true);
      }
    },
  }
}
</script>
