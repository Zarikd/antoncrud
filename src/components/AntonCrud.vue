<template>
  <div>
    <input v-model="mystring" type="text" />
    <button @click="create">Ok</button>

    <div v-for="(str, key) of stringArray" :key="key">
      {{ str }}
      <button @click="localStartUpdate" :index="key">update</button>
      <button @click="localDelete" :index="key">delete</button>
    </div>

    <input v-model="localUpdatedString" type="text" />
    <button @click="update">update</button>
  </div>
</template>  


<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "AntonCrud",
  computed: {
    ...mapGetters("antonCrud", [
      "stringArray",
      "newStringEntry",
      "updatedString",
    ]),
    mystring: {
      get() {
        return this.newStringEntry;
      },
      set(value) {
        this.setNewStringEntry(value);
      },
    },
    localUpdatedString: {
      get() {
        return this.updatedString;
      },
      set(value) {
        this.setUpdatedString(value);
      },
    },
  },
  methods: {
    ...mapMutations("antonCrud", [
      "setNewStringEntry",
      "setUpdatedString",
      "startUpdate",
      "update",
      "delete",
    ]),
    ...mapActions("antonCrud", ["create"]),

    localStartUpdate(e) {
      const index = e.target.getAttribute("index");
      this.startUpdate(index);
    },
    localDelete(e) {
      const index = parseInt(e.target.getAttribute("index"));
      this.delete(index);
    },
  },
};
</script>

<style scoped>
</style>
