<template lang="pug">
  canvas(id="canvas" style="position: fixed; top: 0; left: 0; height: 100%; width: 100%; z-index: 0;")
</template>
<script>

export default {
  mounted() {
    anime({
      targets: '.loop',
      translateX: 270,
      loop: 3,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.loop-infinity',
      translateX: 270,
      loop: true,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.loop-reverse',
      translateX: 270,
      loop: 3,
      direction: 'reverse',
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.loop-reverse-infinity',
      translateX: 270,
      direction: 'reverse',
      loop: true,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.loop-alternate',
      translateX: 270,
      loop: 3,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.loop-alternate-infinity',
      translateX: 270,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }
}
</script>