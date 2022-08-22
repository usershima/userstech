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
          id="created"
          class="mt-10"
          style="min-height: 100px;"
          v-if="isCreatedService"
        )
          h2 開発したWebサービス
          v-container(class="pa-10")
            v-row(justify="start")
              v-card(max-width="344" outlined v-for="(createdService, n) in about.createdServices" :key="n")
                v-list-item(three-line)
                  v-list-item-content
                    div(class="text-overline mb-4") OVERLINE
                    v-list-item-title(class="text-h5 mb-1" v-text="createdService.title")
                    v-list-item-subtitle(v-text="createdService.detail")
                  v-list-item-avatar(tile size="80" color="grey")
                    v-img(:src="`${createdService.url}/favicon.ico`" :alt="`${createdService.title}Logo`" height="100" width="100")
                v-card-actions
                  v-btn(outlined rounded text nuxt variant="primary" :href="createdService.url") Go somewhere
      v-container(
        style="height: 1000px;"
        v-if="!isCreatedService"
      )
      v-scroll-x-reverse-transition
        div(
          id="infomation"
          class="mt-10"
          style="min-height: 100px;"
          v-if="isInfomation"
        )
          h2 インフォメーション
          h3 形態
          p フリーランス
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
    profile: '私はWEBサイト・デスクトップアプリともにフロントエンドとバックエンドを設計・実装した経験がありますので、双方の技術的なコミュニケーションが取りやすいのが強みだと思っています。またWordPressなどのCMSを使用してブログを運営していたこともありSEOを意識した設計も得意です。開発経験としては、Webサイト制作やWebサービス運用の実務経験こそありませんが、約二年間、個人でWebサイト制作、またGitHubやDockerなどの開発ツールを利用してWebサービスを運用してまいりました。そのWebサービスではNuxt.jsなどのフレームワークを使用したSPAやSSR、SSG、またAWS LambdaなどのAPIサービスを利用して運用をしていましたのでそのような技術も得意です。',
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
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    onScroll () {
      let profile = document.getElementById('profile')
      let created = document.getElementById('created')
      if (profile) {
        let isProfileBottom = profile.getBoundingClientRect().bottom
        if (isProfileBottom <= 200) {
          this.isCreatedService = true
        } else {
          this.isCreatedService = false
        }
      }
      if (created) {
        let isCreatedBottom = created.getBoundingClientRect().bottom
        if (isCreatedBottom <= 200) {
          this.isInfomation = true
        } else {
          this.isInfomation = false
        }
      }
      //if (this.$refs.profile !== undefined) {
      //  if (this.$refs.profile.getBoundingClientRect().bottom <= 200) {
      //    this.isCreatedService = true
      //  }
      //}
      //if (this.$refs.created !== undefined) {
      //  if (this.$refs.created.getBoundingClientRect().bottom <= 200) {
      //    this.isInfomation = true
      //  }
      //}
      //if (this.$refs.profile !== undefined) {
      //  if (this.$refs.profile.getBoundingClientRect().bottom >= 200) {
      //    this.isCreatedService = false
      //  }
      //}
      //if (this.$refs.created !== undefined) {
      //  if (this.$refs.created.getBoundingClientRect().bottom >= 200) {
      //    this.isInfomation = false
      //  }
      //}
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
  margin-bottom: 5px;
}
h4 {
  border-bottom: double 2px whitesmoke;
  margin-bottom: 5px;
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