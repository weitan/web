<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TopHeader from '@/components/top-header';

export default {
  name: 'app',
  components: {
    'top-header': TopHeader,
  },
};
</script>

<style lang="scss">
  @import './css/index';
</style>
