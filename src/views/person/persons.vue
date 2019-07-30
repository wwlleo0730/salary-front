<template>
  <div>


    <el-table 
      :data="list"
      v-loading="listLoading"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      style="width: 100%">

      <el-table-column
        prop="badge"
        label="工号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="depart"
        label="部门">
      </el-table-column>
    </el-table>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Persons extends Vue {

  private list: any = null;
  private listLoading: boolean = true;
  
  created() {
    this.fetchData();
  }

  // 方法
  private fetchData() {
    
    this.$http.get("/persons").then((response: any) => {

        console.log(response.data);

        this.list = response.data.content;
        this.listLoading = false;

    });

    // this.$http({url:"/persons",method:'get'})
      
    //   .then( ({ data }) => {

    //     this.tableData = res.data.content;
    //     console.log(this.tableData);
    // });
        
       
  }
}
</script>