<template lang="pug">
.slider
  client-only
    Slick(:options="slickOptions")
      .slider-item(v-for="i in 3" :key="i")
        img(src="https://placehold.jp/150x150.png")
</template>

<script>
import '~/node_modules/slick-carousel/slick/slick.css'

export default {
  components: {
    Slick: () => process.browser ? import('vue-slick') : null,
  },
  data: () => ({
    slickOptions: {
      swipe: true, // スワイプできるか
      slidesToShow: 1, // スライドを何個表示するか
      infinite: true, // ループさせるか
      vertical: false, // 縦に表示するか
      verticalSwiping: false, // 縦にスワイプできるか
      draggable: true, // マウスでドラッグできるか
      arrows: true, // アローを使うか
      prevArrow: '<div class="slide-prev"></div>', // 戻るアローのdomを指定
      nextArrow: '<div class="slide-next"></div>' // 次へアローのdomを指定
    }
  })
}
</script>

<style scoped>
.slider {
  width: 94%;
  margin: 0 auto;
}

.slider img {
  width: 60vw;
  height: auto;
}

.slider .slick-slide {
  transform: scale(0.8);
  transition: all 0.5s;
  opacity: 0.5;
}

.slider .slick-slide.slick-center {
  transform: scale(1);
  opacity: 1;
}

.slick-prev,
.slick-next {
  position: absolute;
  top: 42%;
  cursor: pointer;
  outline: none;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  height: 15px;
  width: 15px;
}

.slick-prev {
  left: -1.5%;
  transform: rotate(-135deg);
}

.slick-next {
  right: -1.5%;
  transform: rotate(45deg);
}

.slick-dots {
  text-align: center;
  margin: 20px 0 0;
}

.slick-dots li {
  display: inline-block;
  margin: 0 5px;
}

.slick-dots button {
  color: transparent;
  outline: none;
  width: 8px;
  height: 8px;
  display: block;
  border-radius: 50%;
  background: #ccc;
}

.slick-dots .slick-active button {
  background: #333;
}

body {
  background: #eee;
}

h2,
p {
  text-align: center;
  padding: 20px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: #333;
}

a:hover,
a:active {
  text-decoration: none;
}

</style>