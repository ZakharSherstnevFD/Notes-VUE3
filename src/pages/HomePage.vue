<template>
  <div class="md-body">
    <TheForm @onSubmit="handleSubmit" />
    <TheList @onRemove="handleRemove" :items="notes" />
  </div>
  <p>{{ value }}</p>
</template>

<script>
import TheForm from "@/components/notes/TheForm.vue";
import TheList from "@/components/notes/TheList.vue";
export default {
  components: { TheForm, TheList },
  data() {
    return {
      value: "",
      notes: ["egg"],
    };
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>
