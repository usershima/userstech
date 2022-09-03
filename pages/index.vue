<template lang="pug">
  v-container(
    class="pt-10 white"
    id="scroll-target"
  )
    div(
      class="about ma-2 pa-3"
      style="border-left: solid 1px black;"
    )
      v-scroll-x-reverse-transition
        div(id="profile")
          h2 プロフィール
          p(
            class="pa-10"
            v-text="profile"
          )
      v-scroll-x-reverse-transition
        div(
          id="infomation"
          class="mt-10"
          style="min-height: 100px;"
          v-if="isInfomation"
        )
          h2 インフォメーション
          h3
            v-icon(icon="globe" font-scale="0.8")
            | 所在地
          p 埼玉県内
          h3 開発スキル/環境
          h4 Web系
          h5 フロントエンド
          v-list
            v-list-item-group
              v-list-item(v-for="(frontendSkill, n) in about.frontendSkills" :key="n")
                v-list-item-title {{ frontendSkill.name }}
                v-list-item-subtitle {{ frontendSkill.detail }}
          h5 バックエンド
          v-list
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
      v-container(
        style="height: 1000px;"
        v-if="!isInfomation"
      )
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    isCreatedService: false,
    isInfomation: false,
    profile: '約半年間、VB.NET、SQLを使用するOracle Databaseの環境で業務アプリケーションの保守。\
      また、JavaScriptを使用したWebサイトのフロントエンドの保守。\
      この他に、独学でWEBサイト・デスクトップアプリともにフロントエンドとバックエンドを設計・実装、\
      WordPressなどのCMSを使用してブログを運営していたことがあります。\
      この経験から、フロントエンドとバックエンドの技術的なコミュニケーションが取りやすいのと、WEBにおけるSEOを意識した設計が強みです。',
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
        { name: 'JavaScript', detail: '実務経験あり（1年未満）' },
        { name: 'CSS', detail: '実務経験あり（1年未満）' },
        { name: 'HTML', detail: '実務経験あり（1年未満）' },
      ],
      backendSkills: [
        { name: 'Laravel', detail: '個人開発経験あり' },
        { name: 'PHP', detail: '個人開発経験あり' },
        { name: 'SQL', detail: '実務経験あり（1年未満）'},
        { name: 'Oracle', detail: '実務経験あり（1年未満）'},
        { name: 'MySQL', detail: '個人開発経験あり'}
      ],
      desktopSkills: [
        { name: 'Vusial Basic', detail: '実務経験あり（1年未満）' },
        { name: 'Vusial Basic .Net', detail: '実務経験あり（1年未満）' },
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
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    onScroll () {
      let profile = document.getElementById('profile')
      if (profile) {
        let isProfileBottom = profile.getBoundingClientRect().bottom
        if (isProfileBottom <= 200) {
          this.isInfomation = true
        } else {
          this.isInfomation = false
        }
      }
    },
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
  padding: 0.5rem 1rem;
  margin-bottom: 5px;
}
h4 {
  position: relative;
  border-bottom: solid 2px whitesmoke;
  margin-bottom: 5px;
  padding: 0.5rem 1rem;
}
h4::before {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 10%;
  content: '';
  height: 2px;
  background: grey;
}
.is-height {
  height: 700px;
}
.transition-box {
  min-height: 50px;
}
.transition-box-open {
  visibility: visible;
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