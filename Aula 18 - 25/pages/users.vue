<template>
  <section class="container">
    <div class="main-content">
      <logo/>
      <h1 class="title">
       This is the User Page
      </h1>
      <h2 class="subtitle">
        Oh Yeah
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import DeHeader from '~/components/DeHeader.vue'
export default {
  components: {
    Logo,
    DeHeader
  }
}
</script>