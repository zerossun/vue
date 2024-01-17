<template>
<div>
    <select v-model="item">
        <option :value="itme.v" :key="i" v-for="(itme,i) in optoins">{{ itme.t }}</option>
    </select>   
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>제품가격</th>
                <th>배송비</th>
                <th>제품카테고리</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(item,i) in productList">
                <td>{{ item.product_name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.delivery }}</td>
                <td>{{ item.category }}</td>
            </tr>
            
        </tbody>
    </table>
    <!-- 
        [넣고 싶은 기능]
        1. 버튼을 클릭했을 때 해당 버튼에 active 클래스 들어가게
        2. 다른 버튼을 클릭하면 반대로
        3. 이거를 삼항연산자로 최대한 코드를 줄이고 싶다.></div>
     -->
    <p>이상 버튼 해결</p>
    <button class="normal" :class="isDone? 'active' : 'default'" @click="btnOut" >버튼 A</button>
    <button class="normal" :class="isDone? 'active' : 'default'" @click="btnOn">버튼 B</button>
    <input v-if="show"/>
    <Boggipost :example="example"></Boggipost>
    <div>
        <p>{{ example }}</p>
    </div>
</div>
</template>
<script>
import Boggipost from './boggipost.vue';


export default{ 
    name:'',
    components:{ Boggipost },
    data(){
        return{
            example:'예심당',
            optoins:[
                {v:'02', t:'서울'},
                {v:'21', t:'부산'},
                {v:'064', t:'제주'},
            ],
            item:'02',
            productList:[
                {product_name:'기계식 키보드', price:85000, delivery:5000, category:'전자기기'},
                {product_name:'마우스', price:25000, delivery:2500, category:'전자기기'},
            ],
            show:false,
            active:'active',
            isDone :false
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        btnOn(e){
            this.show = true;
        },
        btnOut(e){
            this.show = false;
        }
   }
}
</script>
<style>
.normal{
display: flex;
width: 158px;
padding: 16px 24px;
flex-direction: column;
align-items: center;
gap: 8px;
border-radius: 10px;
}
.default{
border: 1px solid var(--system-guide-color-grey_line, #E5E5E5);
background: var(--system-guide-color-white, #FFF);}
.active{
border: 1px solid var(--system-guide-color-red_main, #E30613);
background: var(--system-guide-color-red_light, #FFE4E6);
color: #E30613;
}
</style>