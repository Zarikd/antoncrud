<template>
  <div>
    <input v-model="mystring" type="text" />
    <button @click="create">Ok</button>

    <div v-for="(entry, key) of stringArray" :key="key">
      {{ entry.stringValue }}
      <button @click="localStartUpdate" :id="entry._id">update</button>
      <button @click="localDelete" :id="entry._id">delete</button>
    </div>

    <input v-model="localUpdatedString" type="text" />
    <button @click="update">update</button>
  </div>
</template>  


<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "AntonCrud",
  mounted() {
    this.read();
  },
  computed: {
    ...mapGetters("antonCrud", [
      "stringArray",
      "newStringEntry",
      "updatedObject",
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
        return this.updatedObject ? this.updatedObject.stringValue : "";
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
    ]),
    ...mapActions("antonCrud", ["create", "read", "update", "delete"]),

    localStartUpdate(e) {
      const id = e.target.getAttribute("id");
      this.startUpdate(id);
    },
    localDelete(e) {
      const id = e.target.getAttribute("id");
      this.delete(id);
    },
  },
};
</script>

<style scoped>
</style>
