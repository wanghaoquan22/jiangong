<template>
  <div class="chat_dialog">
    <!-- 列表框 -->
    <Modal
      v-model="isListShow"
      title="Welcome"
      :mask-closable="false"
      :footer-hide="true"
      :draggable="true"
      :sticky="true"
    >
      专利列表
      <i-button @click="showNext">编辑</i-button>
    </Modal>

    <edit-dialog ref="editDialog"></edit-dialog>
  </div>
</template>

<script>
import editDialog from './editDialog.vue'

export default {
  components: {
    editDialog,
  },
  data() {
    return {
      isListShow: false
    }
  },
  methods: {
    show() {
      this.isListShow = true
    },
    hide() {
      this.isListShow = false
    },

    showNext() {
      this.$refs.editDialog.show()
    }
  }
}
</script>
<style lang="less" scoped>

</style>
