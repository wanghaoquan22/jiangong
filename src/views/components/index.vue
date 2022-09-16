<template>
  <div class="demo">
    <!-- 提示按钮 -->
    <div class="tips_box" @click="showChat">
      <img src="@/assets/imgs/girl.png" alt="" />
    </div>
    <!-- 对话框 -->
    <transition name="slide-up">
      <div class="chat_box transition-box" v-show="isChatShow">
        <Icon
          class="icon"
          type="ios-close"
          size="28"
          color="red"
          @click="hideChat"
        ></Icon>
        <div class="cont">
          <div class="cont_header">
            <img src="/src/assets/imgs/girl.png" alt="" />
            <div class="right">
              <p>Hello，我是小建。</p>
              <p>是您科技工作的智能助手。</p>
            </div>
          </div>
          <p>我可以：</p>
          <i-button @click="showUpload">录入专利</i-button>
        </div>
      </div>
    </transition>

    <!-- 上传框 -->
    <Modal
      v-model="isUploadShow"
      title="Welcome"
      :mask-closable="false"
      :footer-hide="true"
      :draggable="true"
      :sticky="true"
    >
      上传文件
      <i-button @click="showList">上传文件</i-button>
    </Modal>

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
      <i-button @click="editItem">编辑</i-button>
    </Modal>
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
  name: 'Demo',
  data() {
    return {
      isChatShow: false,
      isUploadShow: false,
      isListShow: false,
      isEditShow: false,
    }
  },
  mounted() {},
  methods: {
    showChat() {
      this.isChatShow = true
    },
    hideChat() {
      this.isChatShow = false
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
.chat_box {
  position: fixed;
  bottom: 100px;
  right: 0;
  border: 1px solid #ccc;
  height: 300px;
  width: 250px;
  transition: all 0.3s linear;
  background-color: #fff;
  box-sizing: border-box;
  .icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .cont {
    margin-top: 30px;
    .cont_header {
      display: flex;
      font-size: 14px;
      align-items: center;
      img {
        width: 60px;
        margin-right: 20px;
      }
    }
  }
}
</style>
