<script>
import Message from "@/components/core/message/message.vue";
import "./styles.css";

export default {
  name: "Dashboard",
  components: {
    Message,
  },
  data() {
    return {
      burgers: null,
      burger_id: null,
      statusList: [],
      msg: null,
    };
  },
  methods: {
    dispatchMessage(message = "Atualizado!") {
      this.msg = message;
      const timeout = setTimeout(() => (this.msg = ""), 2000);
      clearTimeout(timeout);
    },
    prepareBurgerData(data) {
      if (!data) return;
      this.burgers = data;
    },
    prepareStatusData(data) {
      if (!data) return;
      this.statusList = data;
    },
    async getRequests() {
      try {
        const response = await fetch("http://localhost:3000/burgers");
        const responseJson = await response.json();
        this.prepareBurgerData(responseJson);
      } catch (err) {
        console.error(err);
      }
    },
    async getStatus() {
      try {
        const response = await fetch("http://localhost:3000/status");
        const responseJson = await response.json();
        this.prepareStatusData(responseJson);
      } catch (err) {
        console.error(err);
      }
    },
    async deleteBurger(id) {
      try {
        await fetch(`http://localhost:3000/burgers/${id}`, {
          method: "DELETE",
        });

        this.getRequests();
      } catch (err) {
        console.log(err);
      }
    },
    async updateStatusBurger(event, id) {
      const optionValue = event.target.value;
      const dataJson = JSON.stringify({ status: optionValue });

      try {
        await fetch(`http://localhost:3000/burgers/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataJson,
        });

        this.dispatchMessage(
          `Pedido Nº${id} Atualizou os status para ${optionValue}!`
        );
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getRequests();
    this.getStatus();
  },
};
</script>

<template>
  <div class="container">
    <div>
      <h1 class="title">Gerenciar Pedidos:</h1>
      <Message :msg="msg" />
    </div>

    <div class="burger-table">
      <div class="burger-table__header">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
      <div class="burger-table__body">
        <div
          class="burger-table__row"
          v-for="burger in burgers"
          :key="burger.id"
        >
          <div>{{ burger.id }}</div>
          <div>{{ burger.nome }}</div>
          <div>{{ burger.pao }}</div>
          <div>{{ burger.carne }}</div>
          <div>
            <ul>
              <li v-for="(opcional, index) in burger.opcionais" :key="index">
                {{ opcional }}
              </li>
            </ul>
          </div>
          <div>
            <select
              name="status"
              class="status"
              @change="updateStatusBurger($event, burger.id)"
            >
              <option value="">Selecione</option>
              <option
                v-for="status in statusList"
                :key="status.id"
                :value="status.tipo"
                :selected="burger.status === status.tipo"
              >
                {{ status?.tipo }}
              </option>
            </select>
            <button class="delete-btn" @click="deleteBurger(burger.id)">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
