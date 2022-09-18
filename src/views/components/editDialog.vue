<template>
  <div class="chat_dialog">
    <!-- 编辑框 -->
    <Modal
      v-model="isEditShow"
      title="Welcome"
      :mask-closable="false"
      :footer-hide="true"
    >
      编辑框s
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditShow: false
    }
  },
  methods: {
    show() {
      this.isEditShow = true
    },
    hide() {
      this.isEditShow = false
    },
  }
}
</script>
<style lang="less" scoped>

</style>
