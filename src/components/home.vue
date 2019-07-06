<template>
<div  class="container">

    <router-link :to="{ name: 'finance', params: {} }">Calculate how long till you last wihtout paycheck</router-link>
    <router-link :to="{ name: 'keto', params: {} }">Calculate how long till you last wihtout paycheck</router-link>

</div>
</template>
<script>
export default{
    name: 'Home',

}

</script>

<style>

</style>
