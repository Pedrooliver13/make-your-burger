<template>
  <DefaultLayout />
</template>

<script>
import { DefaultLayout } from "./components/layout";
import "./styles/theme.css";
import "./styles/global.css";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
};
</script>
