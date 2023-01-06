<template>
  <div>
    
    <input v-model="mystring" type="text" />
    <button @click="create">Ok</button>
    
    <div v-for="(str, key) of stringArray" :key="key">
        {{str}}
        <button @click="startUpdate" :index="key">update</button>
        <button @click="_delete" :index="key">delete</button>
    </div>
    
    <input v-model="updatedString" type="text" />
    <input v-model="updatedId" type="text" />
    <button @click="update">update</button>

  </div>
</template>  


<script>
export default {
  name: 'AntonCrud',
  data ()  {
    return {
      stringArray: [],
      mystring: '',
      updatedString: '',
      updatedId: -1,

    }
  },
  methods: {
    create () {
      this.stringArray.push(this.mystring);
      this.mystring = '';
    },
    startUpdate (e) {
      const index = e.target.getAttribute('index');
      this.updatedId = parseInt(index);
      this.updatedString = this.stringArray[this.updatedId];
    },
    update () {
      this.stringArray[this.updatedId] = this.updatedString;
      this.updatedId = -1;
      this.updatedString = '';
    },
    _delete (e) {
      const index = parseInt(e.target.getAttribute('index'));
      this.stringArray.splice(index, 1);
    }
    
  }
}
</script>

<style scoped>
</style>
