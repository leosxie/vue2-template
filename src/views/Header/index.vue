<template>
    <div class="header">
        <div v-show="isShowSearch">
            <div class="place">位置</div>
        </div>
        <div class="title" v-show="!isShowSearch">
                <a  v-show="isBack" class="back t-icon" ><span class="iconfont icon icon-xiangzuojiantou"></span></a>
                <a  v-show="isShare" class="share t-icon" ><span class="iconfont icon icon-fenxiang-1"></span></a>
             <p>所处位置</p>
        </div>
    </div>
</template>

<script>
    export default{
        


    }


</script>