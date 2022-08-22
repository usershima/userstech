<template lang="pug">
v-app
  TheHeader
  v-main(class="bg")
    Nuxt
  TheFooter
</template>

<style>
.main {
  text-align: auto;
}
.bg {
    /* 背景グラデーションの作成 */
  background: linear-gradient(
    to bottom,
    hsl(0, 0%, 95%),
    hsl(0, 0%, 75%),
    hsl(0, 0%, 55%)
  );
  background-size: 400% 400%;
  animation: AnimationName 5s ease infinite;
}
</style>