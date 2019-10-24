<template>
  <div id="app">
    <el-container>
      <el-header style="text-align: right; font-size: 12px ; height:60px">
        <Nav></Nav>
      </el-header>
      <!-- <router-link to="/">主页</router-link>
      <router-link to="/main">主页</router-link>
      <router-link to="/admin">管理页</router-link> -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Footer,
    Nav
  }
})
export default class App extends Vue {
  mounted() {
    this.init();
  }

  async init() {
    const res: any = await this.$http.get("/hello/10");
    if (res.status !== 200) {
      alert("serve error!");
    }
  }
}
</script>

<style>
body {
  padding: 10px;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
