<template>
  <div class="demo">
    <!-- 提示按钮 -->
    <div class="tips_box" @click="showChat">
      <img src="../../assets/girl.png" alt="" />
    </div>
    <chat-dialog ref="chatDialog"></chat-dialog>

    <list-dialog ref="listDialog"></list-dialog>
  </div>
</template>

<script>
import chatDialog from './chatDialog.vue'
import listDialog from './listDialog.vue'

export default {
  name: 'Demo',
  components: {
    chatDialog,
    listDialog,
  },
  data() {
    return {
      isUploadShow: false,
      isListShow: false,
      isEditShow: false,
    }
  },
  mounted() {},
  methods: {
    showChat() {
      // this.$refs.chatDialog.show()
      this.$refs.listDialog.show()
    },
    showUpload() {
      this.isUploadShow = true
    },
    showList() {
      this.isListShow = true
    },
    editItem() {
      this.isEditShow = true
    },
  },
}
</script>
<style lang="less" scoped>
.demo {
  font-size: @font-size;
  // text-align: center;
  margin: 300px 0 0 0;
}
.tips_box {
  position: fixed;
  bottom: 100px;
  right: 0;
  // border: 1px solid #ccc;
  height: 100px;
  width: 100px;
  transform: translateX(50%);
  transition: all 0.3s linear;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    transform: translateX(0%);
  }
  img {
    display: block;
    width: 100%;
  }
}

</style>
