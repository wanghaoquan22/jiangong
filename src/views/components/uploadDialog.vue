<template>
  <div>
    <!-- 上传框 -->
    <Modal
      v-model="isUploadShow"
      title="科技资源智能录入"
      :mask-closable="false"
      :draggable="true"
      :sticky="true"
      width="800"
    >
    <template #footer>
      <div style="text-align: center">
        <Button style="margin-right: 50px" type="primary" @click="deal" :disabled="!arrList.length">开始处理</Button>
        <Button @click="isUploadShow = false">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</Button>
      </div>
    </template>
      <div class="main_dialog">
        <div class="radio">
          文件类型：
          <RadioGroup v-model="fileType">
            <!-- <Radio label="智能识别"></Radio> -->
            <Radio :label="1">
              <span>专利证书</span>
            </Radio>
            <!-- <Radio label="专利受理通知书"></Radio> -->
          </RadioGroup>
        </div>
        <div class="upload">
          <Upload
            :multiple="true"
            type="drag"
            name="files"
            :before-upload="beforeUpload"
            :on-progress="onProgerss"
            :on-format-error="onFormatError"
            :on-success="onSuccess"
            :on-remove="onRemove"
            action="http://106.15.4.241:8669/file/add">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击或将文件拖拽到这里上传</p>
                <p>支持扩展名：.pdf .jpg .jpeg .png</p>
            </div>
          </Upload>
        </div>
      </div>
    </Modal>

    <list-dialog ref="listDialog"></list-dialog>
  </div>
</template>

<script>
import listDialog from './listDialog.vue'
import { fetchPost } from '../../api/index.js'

export default {
  components: {
    listDialog,
  },
  data() {
    return {
      isUploadShow: false,
      fileType: 1,
      arrList: [],
    }
  },
  methods: {
    show() {
      this.isUploadShow = true
    },
    hide() {
      this.isUploadShow = false
    },

    showNext() {
      this.$refs.listDialog.show()
    },
    beforeUpload(e) {
      console.log('beforeUpload', e)
    },
    onProgerss(e) {
      console.log('onProgerss', e)
    },
    onFormatError(e) {
      console.log('onFormatError', e)
    },
    onSuccess(e) {
      this.arrList.push(e[0])
      console.log('成功', this.arrList)
    },
    onRemove(e) {
      this.arrList = this.arrList.filter(item => item.fileName !== e.name)
      console.log('成功', this.arrList)
    },
    deal() {
      console.log('fileType', this.fileType)
      let arr = []
      this.arrList.forEach(e => arr.push(e.id))
      fetchPost('http://106.15.4.241:8669/ocr/', {list: arr})
        .then(res => {
          console.log(res)
          this.showNext()
        })
        .catch(err => {
          console.log('err', err)
        })
    },
  }
}
</script>
<style lang="less" scoped>
  .main_dialog {
    padding: 0px 100px;
  }
  /deep/ .ivu-upload-list {
    max-height: 300px;
    overflow: auto;
    border-radius: 4px;
  }
  .upload {
    margin-top: 20px;
  }
</style>
