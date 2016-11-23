<template>
    <div class="com-app">
    
        <com-header ></com-header>
            <transition :name="transitionName" >
               <router-view class="child-view"></router-view>
            </transition>
        <com-footer></com-footer>
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script >

import Header from '../Header/index.vue';
import Footer from '../Foot/index.vue';
export default {
        data:function(){
            return {
                transitionName: 'slide-left'
            }
        },
        created:function(){
            if(this.$route.name==undefined){
                this.$router.push('index');
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        computed:{
            
        },
        components:{
            comHeader:Header,
            comFooter:Footer
        }
    }
</script>