<template>
    <div>
        <div class="ma-12"></div>
        <v-container>
            <v-layout justify-center class="md-3" wrap>
                <v-flex v-for="(item, i) in WorkList" :key="i" lg2 md4 xs8 class="ma-4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="grey lighten-5 pa-2" :to="item.link" :elevation="hover ? 12 : 2">
                            <v-img :src="item.src" height="250px"></v-img>
                            <p class="text-center display-1">
                                {{ item.title }}
                            </p>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
    export default {
        data: () => ({
            WorkList: [{
                    src: require('../assets/cansat/Cansat.jpg'),
                    title: 'Cansat',
                    link: '/Cansat'
                },
                {
                    src: require('../assets/DeepLearning.svg'),
                    title: 'Deep Learning',
                    link: '/DeepLearning'
                },
                {
                    src: require('../assets/shodo/fourteen.jpg'),
                    title: '書道',
                    link: '/Shodo'
                },
                {
                    src: require('../assets/photos/aru.jpg'),
                    title: 'Photos',
                    link: '/Photos'
                },
                {
                    src: require('../assets/others.svg'),
                    title: 'Others',
                    link: '/Others'
                },
            ]
        })
    }

</script>
