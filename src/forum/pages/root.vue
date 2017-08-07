<template>
  <div id="root">
    <top-header></top-header>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import topHeader from './_partials/header';

  export default {
    name: 'PageRoot',
    components: {
      topHeader
    }
  };
</script>
