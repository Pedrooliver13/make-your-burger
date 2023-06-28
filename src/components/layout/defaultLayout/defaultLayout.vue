<script>
import { NavBar, Footer } from "../../core";

export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your burger",
    };
  },
};
</script>

<template>
  <div>
    <NavBar :logo_src="logo_src" :app_name="app_name" />
    <router-view></router-view>
    <Footer />
  </div>
</template>
