<template lang="pug">
  v-container
    v-navigation-drawer(
      app
      right
      disable-route-wather
      v-model="isNav"
    )
      v-container
        v-row(class="mt-4 pr-4")
          v-spacer
          v-btn(@click="isNav = !isNav" icon)
            v-icon(large) mdi-window-close
        v-list
          v-list-item-group
            v-list-item(
              :href="navOutItem.href"
              v-for="(navOutItem, n) in navOut"
              :key="`o-${n}`"
            )
              v-list-item-icon
                v-icon(v-text="navOutItem.icon")
              v-list-item-title(v-text="navOutItem.subject")
            v-list-item(
              nuxt
              :to="navItem.to"
              v-for="(navItem, n) in nav"
              :key="`i-${n}`"
            )
              v-list-item-icon
                v-icon(v-text="navItem.icon")
              v-list-item-title(v-text="navItem.subject")
    v-app-bar(
      app
      color="#ffffff"
    )
      v-app-bar-title
        NuxtLink(
          to="/"
          class="font-weight-medium text-h4 black--text text-decoration-none"
          style="font-family: cambria;"
        ) UsersTech
      v-spacer
      v-app-bar-nav-icon(
        v-if="!isNav"
        @click.stop="isNav = !isNav")
</template>
<script>
export default {
  data: () => ({
    isNav: false,
    navOut: [
      { icon: 'mdi-email', subject: 'お問い合わせ', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfThQwymvSlbktGt_L2lZdqqlR6WHSO7R1Nj77ZHlY0Bt9F5Q/viewform?usp=sf_link' },
      { icon: 'mdi-source-repository', subject: 'Repository', href: 'https://github.com/usershima/userstech' }
    ],
    nav: [
      { icon: 'mdi-new-box', subject: '新着情報', to: '/news' }
    ]
  })
}
</script>