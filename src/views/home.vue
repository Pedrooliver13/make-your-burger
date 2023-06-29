<script>
import { Banner, BurgerForm } from "@/components/core";

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
