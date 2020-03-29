<template>
    <header id="header">
        <slot></slot> <h1>{{ title }}</h1><span>{{$store.state.city.city_weath}}</span>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
        title : {
            type : String,
            default : '乐淘电影'
        }
    },
    data(){
        return{}
    },
    methods:{

    },
}
  
</script>

<style scoped>
#header{width:100%; height:50px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header span{position: absolute;top: 0;right: 10px; font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
