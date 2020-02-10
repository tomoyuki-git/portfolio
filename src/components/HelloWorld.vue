<template>
  <v-layout
    column
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center pa-12">
        <h1>About</h1>
        <v-avatar size="100">
          <img
            src="https://neet-survive.com/wp-content/uploads/2019/06/W2PWaPtp.jpg"
            alt="Tomo"
          >
        </v-avatar>
        <p>はじめまして。</p>
        <v-btn href="tomoyuki153@gmail.com">メールで連絡する</v-btn>
      </div>
      <PortfolioSection :section-items="skillItems">
        Skill
      </PortfolioSection>
      <PortfolioSection :section-items="workItems">
        Work
      </PortfolioSection>
    </v-flex>
  </v-layout>
</template>

<script>
import PortfolioSection from '@/components/PortfolioSection.vue'

export default {
  components: {
    PortfolioSection,
  },
  data () {
    return {
      skillItems: [
        {'title': 'Vue.js', 'text': 'VueVueVue'},
        {'title': 'Wordpress', 'text': 'Wordpressのブログの運営'},
        {'title': 'AWS', 'text': 'Symbolのノードの立ち上げ'},
      ],
      workItems: [
        {'title': 'Media', 'text': 'MediaMediaMedia'},
        {'title': 'App', 'text': 'AppAppApp'},
      ]
    }
  },
}
</script>