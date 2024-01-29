<template>
<div>
    <div>
        <select v-model="citySearch">
            <option
            v-for="(item, i) in cityList"
            :key="i"
            :value="item.num"
            >
            {{ item.city }}
        </option>
        </select>
        <input type="text" v-model="userName" @keyup.enter="searchUserList"/>
        <button type="button" @click="searchUserList">조회</button>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>직업</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="(person, i) in userList"
                :key="i"
                >
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>

export default{ 
    name:'test1',
    components:{},
    data(){
        return{
            cityList:[
                {city:'서울',num:'02'},
                {city:'광주',num:'062'},
                {city:'제주',num:'064'},
            ],
            citySearch:'제주',
            userName:'',
            userList:[]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        searchUserList(){
            const params ={
            citySearch: this.citySearch,
            userName: this.userName
            }
            this.userList = this.getUserList();
        },
        // 이 부분이 서버를 데신함
        getUserList(params){
            console.log(params);

            let list = [
                {name:'유재석', age:50, job:'연예인'},
                {name:'하하', age:40, job:'연예인'},
                {name:'양세찬', age:37, job:'연예인'},
                {name:'김종국', age:46, job:'연예인'}
            ]
            return list;
        }
    }
}
</script>
<style>
</style>