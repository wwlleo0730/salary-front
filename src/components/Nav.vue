<template>
  <div>
    <el-menu
      :show-timeout="200"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
     
        <el-menuItem v-for="l in list" :index="l.index" :key="l.index">
             <router-link :to="l.path">{{l.name}}</router-link>
        </el-menuItem>
      
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Route } from "vue-router";

@Component
export default class Nav extends Vue {
  list: Array<object> = [
    {
      index: "1",
      path: "/",
      name: "Excel上传"
    },
    {
      index: "2",
      path: "/person",
      name: "员工列表"
    }
  ];

  activeIndex: string = "1";

  handleSelect(val: string, oldVal: string) {
    console.log(val);
    this.activeIndex = val;
  }
}
</script>
