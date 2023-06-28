<script>
import { Banner, BurgerForm } from "../components/core";

export default {
  name: "Home",
  components: {
    Banner,
    BurgerForm,
  },
};
</script>

<template>
  <div>
    <Banner />

    <section>
      <h1 class="title">Escolha os ingredientes:</h1>
      <BurgerForm />
    </section>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 20px;
  font-weight: bold;
  font-size: 30px;
}
</style>
