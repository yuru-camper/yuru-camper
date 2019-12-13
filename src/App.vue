<template>
  <v-app>
    <Header></Header>
    <router-view style="margin-top: 55px;"></router-view>
  </v-app>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'App',
    components: {
      Header,
    },
    data: () => ({
      //
    }),
  };

</script>
