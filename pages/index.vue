<template lang="pug">
v-main(class="bg")
  Canvas
  v-container(class="pt-10 white" style="position: relative; z-index: 1;")
    div(class="about ma-2 pa-3" style="border-left: solid 1px black;")
      div(class="profile bdr")
        h2(v-intersect.once="onIntersect") プロフィール
        v-scroll-x-transition(origin="top center -100")
          p(v-show="isIntersecting" class="pa-10") 2000年生まれ埼玉県在住、フリーランスのWebデザイナー兼フロントエンドエンジニアを目指しています。Webサービスのバックエンドを考慮したフロントエンドを設計できるのが強みです。
            br
            | 約半年間IT企業で働く
      div(class="created-service")
        h2(v-intersect.once="onIntersect") 開発したWebサービス
        v-scale-transition(origin="left")
          v-container(class="pa-10")
            v-row(justify="start")
              v-card(max-width="344" outlined v-for="(createdService, n) in about.createdServices" :key="n" v-show="isIntersecting")
                v-list-item(three-line)
                  v-list-item-content
                    div(class="text-overline mb-4") OVERLINE
                    v-list-item-title(class="text-h5 mb-1" v-text="createdService.title")
                    v-list-item-subtitle(v-text="createdService.detail")
                  v-list-item-avatar(tile size="80" color="grey")
                    v-img(:src="`${createdService.url}/favicon.ico`" :alt="`${createdService.title}Logo`" height="100" width="100")
                v-card-actions
                  v-btn(outlined rounded text nuxt variant="primary" :href="createdService.url") Go somewhere
      div(class="infomation")
        h2 インフォメーション
        h3 形態
        p フリーランス
        h3
          v-icon(icon="globe" font-scale="0.8")
          | 所在地
        p 埼玉県内
        h3 開発スキル/環境
        h4 Web系
        h5(v-intersect.once="onIntersect") フロンエンド
        v-scroll-x-transition(origin="top center -30")
          v-list(v-show="isIntersecting")
            v-list-item-group
              v-list-item(v-for="(frontendSkill, n) in about.frontendSkills" :key="n")
                v-list-item-title {{ frontendSkill.name }}
                v-list-item-subtitle {{ frontendSkill.detail }}
        h5(v-intersect.once="onIntersect") バックエンド
        v-scroll-x-transition(origin="top center -30")
          v-list(v-show="isIntersecting")
            v-list-item-group
              v-list-item(v-for="(backendSkill, n) in about.backendSkills" :key="n")
                v-list-item-title {{ backendSkill.name }}
                v-list-item-subtitle {{ backendSkill.detail }}
        h5 デスクトップアプリケーション
        v-list
          v-list-item-group
            v-list-item(v-for="(desktopSkill, n) in about.desktopSkills" :key="n")
              v-list-item-title {{ desktopSkill.name }}
              v-list-item-subtitle {{ desktopSkill.detail }}
        h5 インフラ
        v-list
          v-list-item-group
            v-list-item(v-for="(infrastructureSkill, n) in about.infrastructureSkills" :key="n")
              v-list-item-title {{ infrastructureSkill.name }}
              v-list-item-subtitle {{ infrastructureSkill.detail }}
        h5 開発ツール
        v-list
          v-list-item-group
            v-list-item(v-for="(developmentTool, n) in about.developmentTools" :key="n")
              v-list-item-title {{ developmentTool.name }}
              v-list-item-subtitle {{ developmentTool.detail }}
        h5 CMS
        v-list
          v-list-item-group
            v-list-item(v-for="(cms, n) in about.cmss" :key="n")
              v-list-item-title {{ cms.name }}
              v-list-item-subtitle {{ cms.detail }}
        h4 お受けできる仕事
        h5 Webサイト制作
        v-list
          v-list-item-group
            v-list-item(v-for="(websiteProduction, n) in about.websiteProductions" :key="n")
              v-list-item-title {{ websiteProduction.name }}
        h5 Webサービス制作
        v-list
          v-list-item-group
            v-list-item(v-for="(webserviceProduction, n) in about.webserviceProductions" :key="n")
              v-list-item-title {{ webserviceProduction.name }}
</template>

<script>
import { BIcon, BIconGlobe } from 'bootstrap-vue'
export default {
  name: 'IndexPage',
  components: {
    BIcon,
    BIconGlobe
  },
  data: () => ({
    isIntersecting: false,
    isIntersecting2: false,
    isIntersecting3: false,
    isSlideRight: false,
    max: 100,
    about: {
      createdServices: [
        {
          title: 'Athenaie',
          detail: 'Athenaieは シミュレートツール検索ツールです。',
          url: 'https://www.athenaie.net'
        }
      ],
      frontendSkills: [
        { name: 'Nuxt.js', detail: '個人開発経験あり' },
        { name: 'Vue.js', detail: '個人開発経験あり' },
        { name: 'TypeScript', detail: '個人開発経験あり' },
        { name: 'JavaScript', detail: '個人開発経験あり' },
        { name: 'CSS', detail: '個人開発経験あり' },
        { name: 'HTML', detail: '個人開発経験あり' },
      ],
      backendSkills: [
        { name: 'Laravel', detail: '個人開発経験あり' },
        { name: 'PHP', detail: '個人開発経験あり' },
      ],
      desktopSkills: [
        { name: 'Vusial Basic', detail: '実務経験あり' },
        { name: 'Vusial Basic .Net', detail: '実務経験あり' },
        { name: 'Vusial Basic Application', detail: '個人開発経験あり' },
        { name: 'C#', detail: '個人開発経験あり' },
        { name: 'C', detail: 'スクールレベル' }
      ],
      infrastructureSkills: [
        { name: 'Amazon Web Service', detail: '個人利用経験あり' },
        { name: 'Docker', detail: '個人利用経験あり' }
      ],
      developmentTools: [
        { name: 'GitHub', detail: '個人利用経験あり' }
      ],
      cmss: [
        { name: 'WordPress', detail: '個人開発経験あり' },
      ],
      websiteProductions: [
      { name: 'ホームページ' },
      { name: 'キャンペーンサイト' },
      { name: 'メディアサイト' },
      { name: 'ブログ' },
      { name: '運用保守' },
      ],
      webserviceProductions: [
      { name: '会員制サイト' },
      { name: '運用保守' },
      ]
    }  
  }),
  methods: {
    onIntersect (entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting >= 1
      console.log(entries, observer)
    }
  }
}
</script>
<style scoped>
h2 {
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  background-color: whitesmoke;
  margin-bottom: 5px;
}
h3 {
  border-left: solid 2px grey;
  border-bottom: solid 1px whitesmoke;
  margin-bottom: 5px;
}
h4 {
  border-bottom: double 2px whitesmoke;
  margin-bottom: 5px;
}
.bg {
    /* 背景グラデーションの作成 */
  background: linear-gradient(
    to bottom,
    hsl(0, 0%, 95%),
    hsl(0, 0%, 85%),
    hsl(0, 0%, 75%)
  );
  background-size: 400% 400%;
  animation: AnimationName 5s ease infinite;
}
@keyframes AnimationName {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
}
</style>