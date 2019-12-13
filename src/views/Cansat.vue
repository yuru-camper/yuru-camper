<template>
  <div>
    <v-img src="../assets/cansat/Cansat.jpg" max-height="600px" class="mb-12"></v-img>
    <v-layout justify-center>
      <v-flex lg5 md8 xs10>
        <v-card flat  class="grey lighten-5 title">
          <p>Cansatは宇宙工学の教育に用いられる小型の模擬人工衛星です。</p>
          <p>私は新潟大学のCansatを製作するプロジェクト(NiCs)で、主に機体の制御を担当しました。ラジコンやドローンなどは普通人間が操作しますが、宇宙探査機には自立制御が求められます。</p>
          <p>この機体の特徴は丸みを帯びたタイヤと前面のカメラです。今までの機体はGPS情報だけでゴールを目指していたのですが、それだけだと誤差が大きいせいでゴールに辿り着くことができませんでした。なのでこの機体では、ゴールまでの距離がGPSの誤差範囲内に入ったらカメラを使って機体を制御します。</p>
        </v-card>
        <v-img src="../assets/cansat/kitai.jpg" class="my-12"></v-img>
      </v-flex>
    </v-layout>
    
  </div>
</template>
