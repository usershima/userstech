<template lang="pug">
div
  v-navigation-drawer(app v-model="isNav" right disable-route-wather)
    v-container
      v-row(class="mt-4 pr-4")
        v-spacer
        v-btn(@click="isNav = !isNav" icon)
          v-icon(large) mdi-window-close
      v-list
        v-list-item-group
          v-list-item(href="https://docs.google.com/forms/d/e/1FAIpQLSfThQwymvSlbktGt_L2lZdqqlR6WHSO7R1Nj77ZHlY0Bt9F5Q/viewform?usp=sf_link")
            v-list-item-icon
              v-icon mdi-email
            v-list-item-title お問い合わせ
  v-app-bar(app color="#ffffff")
    v-app-bar-title
      NuxtLink(to="/" class="font-weight-medium text-h4 black--text text-decoration-none" style="font-family: cambria;") UsersTech
    v-spacer
    v-app-bar-nav-icon(v-if="!isNav" @click.stop="isNav = !isNav")
</template>
<script>
export default {
  data: () => ({
    isNav: false
  })
}
</script>