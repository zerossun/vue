<template>
<div>
    <button @click="truth">진실의 탐지기</button>
    <h1 v-show="bRender">거짓의 문장</h1>
    <h1 v-show="!bRender">진실의 문장</h1>
    <button @click="money">give me the money</button>
    <div>${{ money1 }}</div>
    <button @click="cul(), two()">두시가 왔다는 증거</button>
    <div>{{ cul1 }}{{ two1 }}</div>
    <select v-model="selected" @change="chageSelect">
        <!-- select 첫 텍스트 보이고 싶다면 v-model로 데이터 설정 후, :selected ='true'작성 -->
        <option :selected="true" value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
    </select>
    <input type="text" v-model="textValue" @keyup.enter="keyup"/>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <div>{{ fullName }}</div>
    <input type="text" v-model.number="x1"/>
    <input type="text" v-model.number="x2"/>
    <input type="text" v-model.number="y"/>
</div>
</template>
<script>
import { toHandlers } from 'vue';


export default{ 
    name:'example',
    components:{},
    data(){
        return{
            sampleData:'',
            bRender: false,
            money1:1,
            cul1:'',
            two1:'',
            selected:"서울",
            textValue:'',
            firstName:'유',
            lastName:'재석',
            x1:'',
            x2:'',
            y:0,
            a:{
                b:1
            }
        };
    },
    setup(){},
// 특정한 로지 수정할 때 적합
    watch:{
        x1(){
            this.y = this.x1 + this.x2;
        },
        x2(){
            this.y = this.x1 + this.x2;
        },
        a:{
            toHandlers(nextValue, prevValue){
                console.log(`new:${nextValue}, old:${prevValue}`)
            },
            deep:true,
        }
    },
    // cmoputed : 계산된 데이터(아래처럼 합쳐서 갑주는 그런 거)
    // 장점 : 값이 한번만 계산됨
    // 단점 : 재사용,가독성 떨어짐, 여러번 사용하면 시간 오래걸림
    computed:{
        fullName(){
            // 앞에 return 꼭 붙여주기
            return this.firstName + this.lastName;
        }
        },
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        truth(){
            this.bRender = !this.bRender;
        },
        money(){
            this.money1++;
        },
        cul(){
           this.cul1 = '컬'
        },
        two(){
            this.two1 = '투'
        },
        chageSelect(){
         alert('qwerty')
        },
        keyup(){
            // 자주 사용하는 프리디파인
            //tab, delete, esc, space, up, down, left, right
            alert(this.textValue)
        }
    }
}
</script>
<style>
</style>