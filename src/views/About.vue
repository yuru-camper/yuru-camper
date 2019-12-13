<template>
  <div>
    <v-layout justify-center>
      <Profile class="mt-12"></Profile>
    </v-layout>
    <v-layout justify-center class="mt-12">
      <v-card flat width="600px" class="grey lighten-5">
        <div v-for="(dict, i) in IntroductionList" :key="i">
          <v-row>
            <v-col>
              <span class="title grey--text text--darken-2">
                {{ dict.item }}
              </span>
            </v-col>
            <v-col>
              <span class="title grey--text text--darken-3 font-weight-regular">
                {{ dict.content }}
              </span>
            </v-col>
          </v-row>
          <v-divider class="my-5"></v-divider>
        </div>
      </v-card>
    </v-layout>

  </div>
</template>


<script>
  import Profile from '../components/Profile'

  export default {
    name: 'About',
    components: {
      Profile
    },
    data: () => ({
      IntroductionList: [
        {
          item: 'Birthplace',
          content: '山形県鶴岡市'
        },
        {
          item: 'Affiliation',
          content: '新潟大学工学部機能材料工学科'
        },
        {
          item: 'Skill',
          content: 'Python, Chainer, HTML, CSS, JavaScript, Vue.js, 書道'
        },
        {
          item: 'Hobby',
          content: 'キャンプ, カメラ, Deep Learning, 読書'
        }
      ]
    })
  }

</script>
