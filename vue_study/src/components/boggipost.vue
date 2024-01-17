<template>
<div>
    <h4>{{ title }}</h4>
    <h4>{{ example }}</h4>
    <h4>{{ sayHello }}</h4>
    <h4>{{ option }}</h4>
    <button @click="change()">이름변경</button>
</div>
</template>
<script>

export default{ 
    name:'',
    // props:['title','example','optoin'],
    props:{
        title:{
            // 데이터 타입
            type:String,
            // 이 값은 꼭 필요(안)하다
            // true라 지정해놓고 부모가 지정 안하면 오류먹음
            // required:false,
            // 부모 컴포넌트에서 값을 줌 : 그 값 호출
            // 값을 안 줌 : defualt 값이 나옴
            default:'부모가 값을 안 줄 때 자식이 내보내는 값',
        },
        option:{
            type:Object,
            required:true
        }
    },
    computed:{
        sayHello(){
            return this.title + ' 입니당'
        }
    },
    components:{},
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        // 자식컴포넌트에서 props를 바꾸는 것은 위험요소가 많음(부모가 바뀌면 같이 바뀌기 때문) => 오류남
        // 그럼에도 불구하고 바꾸고 싶다!
        // 위처럼 computed에서 바꾸기
        // 다시 재할당 하기
        change(){
            this.title = '이름변경';
        }
    }
}
</script>
<style>
</style>