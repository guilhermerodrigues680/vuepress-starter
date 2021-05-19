<template>
  <!-- <component v-if="dynamicComponent" :is="dynamicComponent"></component> -->
  <div class="other-component">
    ola! {{ text }}
    <button @click="click()">Teste</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      // dynamicComponent: null
      text: 'Mundo'
    }
  },

  async mounted () {
    // /**@type {Swal} */
    // let Swal;
    // try {
    //   import('sweetalert2')

    // } catch (error) {

    // }

    // Swal.fire("ok!")

    // import('./lib-that-access-window-on-import').then(module => {
    //   this.dynamicComponent = module.default
    // })
  },

  methods: {
    click() {
      alert('ok!!');
    }
  }
}
</script>

<style scoped>
.other-component {
  min-height: 72px;
  margin: 1.6rem 0;
  padding: 1.6rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  border-color: rgb(209, 213, 219);
  display: flex;
  align-items: center;
}
</style>
