<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Напишите задачу" />
      <button class="btn btnPrimary" type="submit">Создать задачу</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.value);
      this.value = "";
    },
  },
};
</script>

<style>
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
}
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
