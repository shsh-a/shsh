<template>
    <div>
        <b-navbar fixed="bottom">
            <b-navbar-brand class="text-white">shsh.xyz</b-navbar-brand>
            <b-navbar-nav>
                <router-link :to="{ name: 'home', params: {} }"><button class="btn btn-info"><</button></router-link>
            </b-navbar-nav>
        </b-navbar>
        <div id='content'>

        </div>
        <div id="app">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    components: {  },
    data: function(){
        return {
        }
    },
    methods:{
    },
}
</script>
<style >
#content{
    margin: 100px;
}
body{
    background-image: url('assets/bg.jpg');
    color:#fff;
    font-family: Ubuntu;
}


</style>
