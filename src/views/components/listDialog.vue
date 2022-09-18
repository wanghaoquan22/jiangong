<template>
  <div class="main_dialog">
    <!-- 列表框 -->
    <Modal
      v-model="isListShow"
      title="科技资源智能录入"
      :mask-closable="false"
      :draggable="true"
      :sticky="true"
      width="800"
    >
      <!-- 专利列表
      <i-button @click="showNext">编辑</i-button> -->
      <div class="list_dialog">
        <Table
          width="768"
          minHeight="500"
          border
          :columns="columns"
          :data="tempList"
        >
        <template #patentName="{ row }">
          <b>{{ row.patentName }}</b>
        </template>
        <template #patentType="{ row }">
          {{ patentTypeList[row.patentType] }}
        </template>
        <template #patentStatus="{ row }">
          {{ patentStatusList[row.patentStatus] }}
        </template>
        <template #action="{ row, index }">
          <div class="action_box">
            <Button style="margin-right: 10px" type="warning" size="small" @click="edit(row, index)">编辑</Button>
            <Tooltip v-if="row.edited" content="复原到上传时" placement="top">
              <Button style="margin-right: 10px" type="primary" size="small" @click="restore(row, index)">复原</Button>
            </Tooltip>
            <Button type="error" size="small" @click="del(row, index)">删除</Button>
          </div>
        </template>
        </Table>
      </div>
      <template #footer>
        <div style="text-align: center">
          <Button style="margin-right: 50px" type="primary" @click="sureHandle" :disabled="!list.length">确认导入</Button>
          <Button @click="isListShow = false">取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消</Button>
        </div>
      </template>
    </Modal>

    <edit-dialog ref="editDialog" @save="editSave"></edit-dialog>
  </div>
</template>

<script>
import editDialog from "./editDialog.vue";

export default {
  components: {
    editDialog,
  },
  data() {
    return {
      editIndex: null,
      patentTypeList: {
        '1': '类型1',
        '2': '类型厄尔',
        '3': '类型三'
      },
      patentStatusList: {
        '1': '状态1',
        '2': '状态厄尔',
        '3': '状态三'
      },
      isListShow: false,
      tempItem: {},
      tempList: [],
      list: [
        {
          patentId: "1c32c6a4-e408-4cbe-94b1-84a7ce649250",
          fileId: "505c6c82-4da5-479d-a1a1-87170341a65a",
          patentName: "休息服务驿站",
          patentStatus: "2",
          patentType: 3,
          patentNo: "ZL201730520762.9",
          patentUser: "程昱",
          certificateNo: "4647883",
          applyData: "2017年10月26日",
          patentee: "上海市政工程设计研究总院(集团)有限公司",
          address: "200092上海市杨浦区中山北二路901号",
          announcementDate: "2018年05月15日",
          announcementNo: "2018年05月15日",
          createTime: "2022-09-18T07:27:48.000+0000",
          createBy: null,
          updateTime: null,
          updateBy: null,
        },
        {
          patentId: "1eb461f6-db26-4bd6-bc46-af07c367c727",
          fileId: "df601e51-1e88-45f5-9fbe-a2b0c435d825",
          patentName: null,
          patentStatus: "1",
          patentType: null,
          patentNo: null,
          patentUser: null,
          certificateNo: null,
          applyData: null,
          patentee: null,
          address: null,
          announcementDate: null,
          announcementNo: null,
          createTime: null,
          createBy: null,
          updateTime: null,
          updateBy: null,
        },
        {
          patentId: "38178988-ed3e-4e3c-a173-e39b7cfe1a71",
          fileId: "11b08868-7885-4a69-b294-e4febb8168f9",
          patentName: null,
          patentStatus: "1",
          patentType: null,
          patentNo: null,
          patentUser: null,
          certificateNo: null,
          applyData: null,
          patentee: null,
          address: null,
          announcementDate: null,
          announcementNo: null,
          createTime: null,
          createBy: null,
          updateTime: null,
          updateBy: null,
        },
        {
          patentId: "4b5e035a-600b-4126-b1e5-3ef702c5ca5f",
          fileId: "31ba5080-23f2-4146-9974-4c5d64d74119",
          patentName: "一种固液介质分离处理池",
          patentStatus: "2",
          patentType: 1,
          patentNo: "ZL201610003217.7",
          patentUser: "许嘉炯;王昊;王如华;王广平;彭夏军;闫东晗",
          certificateNo: "3051207",
          applyData: "2016年01月04日",
          patentee: "上海市政工程设计研究总院(集团)有限公司",
          address: "200092上海市杨浦区中山北二路901号",
          announcementDate: "2018年08月28日",
          announcementNo: "2018年08月28日",
          createTime: "2022-09-18T07:27:49.000+0000",
          createBy: null,
          updateTime: null,
          updateBy: null,
        },
        {
          patentId: "64dd67fa-a994-4c7b-9401-217481599fb3",
          fileId: "52b5b0fa-d2b9-49bc-99c3-07b253fe218a",
          patentName: "公共服务用房(石洞小站)",
          patentStatus: "2",
          patentType: 3,
          patentNo: "ZL201730527670.3",
          patentUser: "程昱",
          certificateNo: "4647345",
          applyData: "2017年10月31日",
          patentee: "上海市政工程设计研究总院(集团)有限公司",
          address: "200092上海市杨浦区中山北二路901号",
          announcementDate: "2018年05月15日",
          announcementNo: "2018年05月15日",
          createTime: "2022-09-18T07:27:41.000+0000",
          createBy: null,
          updateTime: null,
          updateBy: null,
        },
        {
          patentId: "8b377252-fa4b-494d-a5f5-10747acb8a45",
          fileId: "9ffdf57d-a7e8-4732-824c-695abda31e57",
          patentName: "一种固液介质分离处理池",
          patentStatus: "2",
          patentType: 1,
          patentNo: "ZL201610003217.7",
          patentUser: "许嘉炯;王昊;王如华;王广平;彭夏军;闫东晗",
          certificateNo: "3051207",
          applyData: "2016年01月04日",
          patentee: "上海市政工程设计研究总院(集团)有限公司",
          address: "200092上海市杨浦区中山北二路901号",
          announcementDate: "2018年08月28日",
          announcementNo: "2018年08月28日",
          createTime: "2022-09-18T07:27:45.000+0000",
          createBy: null,
          updateTime: null,
          updateBy: null,
        },
        {
          patentId: "c635b414-1138-4811-81fc-2331a934f0b4",
          fileId: "00df33e4-7f11-4e6d-9884-d9637f425e6f",
          patentName: null,
          patentStatus: "1",
          patentType: null,
          patentNo: null,
          patentUser: null,
          certificateNo: null,
          applyData: null,
          patentee: null,
          address: null,
          announcementDate: null,
          announcementNo: null,
          createTime: null,
          createBy: null,
          updateTime: null,
          updateBy: null,
        },
      ],
      columns: [
        {
          type: 'index',
          height: 48,
          width: 60,
          align: 'center',
          fixed: "left",
        },
        {
          title: "专利名称",
          // key: "patentName",
          width: 200,
          fixed: "left",
          align: 'center',
          slot: 'patentName'
        },
        {
          title: "专利类型",
          slot: "patentType",
          align: 'center',
          width: 100,
        },
        {
          title: "专利状态",
          slot: "patentStatus",
          align: 'center',
          width: 100,
        },
        {
          title: "申请号/专利授权号",
          key: "patentNo",
          align: 'center',
          width: 180,
        },
        {
          title: "申请日",
          key: "applyData",
          align: 'center',
          width: 150,
        },
        {
          title: "授权公告日",
          key: "announcementDate",
          align: 'center',
          width: 150,
        },
        {
          title: "申请人/专利权人（多家单位用分号隔开）",
          key: "patentee",
          width: 200,
        },
        {
          title: "发明人（分号隔开）",
          key: "patentUser",
          align: 'center',
          width: 210,
        },
        {
          title: "操作",
          slot: 'action',
          // fixed: "right",
          width: 186,
        },
      ],
    };
  },
  methods: {
    show(list) {
      console.log("list", list);
      this.tempList = JSON.parse(JSON.stringify(this.list));
      // console.log(this.tempList === this.list)
      this.isListShow = true;
    },
    hide() {
      this.isListShow = false;
    }, 

    showNext() {
      this.$refs.editDialog.show();
    },
    edit(item, i) {
      this.$refs.editDialog.show(item);
      this.editIndex = i
    },
    editSave(item) {
      this.tempList[this.editIndex] = item
      this.tempList[this.editIndex].edited = true
      console.log('this.tempList', this.tempList)
    },
    restore(item, i) {
      this.tempList[i] = this.list[i]
      this.tempList[i].edited = false
    },
    del(item, i) {
      this.$Modal.confirm({
        title: '删除提示',
        content: '<p>确定要删除吗？</p>',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          this.tempList.splice(i, 1);
          this.list.splice(i, 1);
          this.$Message.success(`删除成功${item.patentName ? '《' + item.patentName + '》' : ''}`);
        },
      });
    },
    // 确认导入
    sureHandle() {

    },
  },
};
</script>
<style lang="less" scoped>
  /deep/ .action_box {
    display: flex;
    // justify-content: space-between;
  }
</style>