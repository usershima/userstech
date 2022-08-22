<template lang="pug">
  v-container(class="white")
    v-row(justify="center" no-gutters class="mb-6")
      h1 新着情報
    div(v-for="content in contents" :key="content.id")
      v-divider
      h2 {{ content.title }}
      div 
        | 公開日：
        | {{ content.publishedAt }}
      p {{ content.content }}
</template>
<script>
import axios from 'axios';
export default {
  async asyncData() {
    const { data: { contents } } = await axios
      .get('https://rb5gkryl70.execute-api.ap-northeast-1.amazonaws.com/news');
    contents.forEach((content, index, array) => {
      let date = new Date(content.publishedAt);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let processedDate = `${year}/${month}/${day}`;
      array[index].publishedAt = processedDate;
    })
    return { contents };
  }
}
</script>