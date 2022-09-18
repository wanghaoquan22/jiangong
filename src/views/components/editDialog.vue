<template>
  <div class="chat_dialog">
    <!-- 编辑框 -->
    <Modal
      v-model="isEditShow"
      title="编辑弹框"
      :mask-closable="false"
      width="800"
    >
      编辑框s


      <template #footer>
        <div style="text-align: center">
          <Button style="margin-right: 50px" type="primary" @click="sureHandle">保&nbsp;&nbsp;&nbsp;存</Button>
          <Button @click="isEditShow = false">取&nbsp;&nbsp;&nbsp;消</Button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditShow: false,
      tempItem: null,
    }
  },
  methods: {
    show(item) {
      this.isEditShow = true
      this.tempItem = JSON.parse(JSON.stringify(item))
    },
    hide() {
      this.isEditShow = false
    },

    sureHandle() {
      this.$emit('save', this.this.tempItem)
    },
  }
}
</script>
<style lang="less" scoped>

</style>
