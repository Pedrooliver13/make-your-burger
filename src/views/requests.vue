<script>
import { Dashboard } from "@/components/core";

export default {
  name: "Requests",
  components: {
    Dashboard,
  },
};
</script>

<template>
  <div class="content">
    <Dashboard />
  </div>
</template>

<style scoped>
.content {
  min-height: 86vh;
}
</style>
