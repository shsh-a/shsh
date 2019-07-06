<template>
    <div  id="keto" class="container">
        <h1>Diet plan</h1>
        <table>
            <tr>
                <th>
                    Item
                </th>    <th>Food</th><th>Amount</th><th>Carbs</th><th>Protien</th><th>Fat</th><th>Calories</th><th>Price</th>
            </tr>
            <tr v-for="(item, index) in items">
                <td>
                    {{index+1}}
                </td>
                <td>{{item.food}}</td><td>{{item.amount}} gm</td><td>{{item.carbs}} gm</td><td>{{item.protien}} gm</td><td>{{item.fat}} gm</td>
                <td>{{item.calories}}</td><td>{{item.price}}</td>
            </tr>
            <tr class="total">
                <th>
                </th>
                <th>Total</th><th>{{total.amount}} gm</th><th>{{total.carbs}} gm</th><th>{{total.protien}} gm</th><th>{{total.fat}} gm</th>
                <th>{{total.calories}}</th><th>{{total.price}}</th>
            </tr>

            <tr class="controls">
                <td>
                </td>
                <td  >
                    <input type="Text" placeholder="Food" v-model="item['food']" />
                </td>
                <td>
                    <input type="number" placeholder="Amount"  v-model="item['amount']"/>
                </td>
                <td>
                    <input type="number" placeholder="Carbs"  v-model="item['carbs']" />
                </td>
                <td>
                    <input type="number" placeholder="Protien"  v-model="item['protien']" />
                </td>
                <td>
                    <input type="number" placeholder="Fat"  v-model="item['fat']" />
                </td>
                <td>
                    <input type="number" placeholder="Calories"  v-model="item['calories']" />
                </td>
                <td>
                    <input type="number" placeholder="Price"  v-model="item['price']" />
                </td>
            </tr>
        </table>
        <div class="controls">
            <button class="btn btn-primary" @click="add"> Add </button>
            <button class="btn btn-primary" @click="remove"> Remove </button>
            <button class="btn btn-primary" @click="clear"> Clear </button>
        </div>
        <div >
            <h1> Daily target</h1>
            <div class="row">
                <div class="col-md-1">
                    <h5>Calories</h5>
                </div>
                <div class="col-md-4">
                    <b-progress  :value="total.calories" :max="maxCal" height="10px" class=" bar" ></b-progress>
                </div>
                <div class="col-md-4">
                    <label><h6>{{total.calories}} /</h6>  </label>
                    <input type="number" placeholder="Max calories"  v-model="maxCal" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-1">
                    <h5>Carbs</h5>
                </div>
                <div class="col-md-4">
                    <b-progress  :value="total.carbs" :max="maxCarbs" height="10px" class=" bar" ></b-progress>
                </div>
                <div class="col-md-4">
                    <label><h6>{{total.carbs}} /</h6>  </label>
                    <input type="number" placeholder="Max calories"  v-model="maxCarbs" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-1">
                    <h5>Protien</h5>
                </div>
                <div class="col-md-4">
                    <b-progress  :value="total.protien" :max="maxProtien" height="10px" class=" bar" ></b-progress>
                </div>
                <div class="col-md-4">
                    <label><h6>{{total.protien}} /</h6>  </label>
                    <input type="number" placeholder="Max calories"  v-model="maxProtien" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-1">
                    <h5>Fat</h5>
                </div>
                <div class="col-md-4">
                    <b-progress  :value="total.fat" :max="maxFat" height="10px" class=" bar" ></b-progress>
                </div>
                <div class="col-md-4">
                    <label><h6>{{total.fat}} /</h6>  </label>
                    <input type="number" placeholder="Max calories"  v-model="maxFat" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Keto',
    data(){
        return{
            items:[
                {food:'butter',amount:50, fat:50, protien:50, carbs:15, price:90, calories:600},
                {food:'ghee',amount:25, fat:0, protien:0, carbs:0, price:0, calories:0},
                {food:'ghee',amount:35, fat:0, protien:0, carbs:0, price:0, calories:0}
            ],
            item: {},
            maxCal: 1300,
            maxCarbs:20,
            maxProtien:60,
            maxFat:130,
        }
    },
    computed:{
        total:function(){
            let total = {};
            this.items.forEach(function(item){
                let keys = Object.keys(item);
                keys.forEach(function(key){
                    if(key=='food')
                    return;
                    if(total[key] == undefined)
                    {
                        total[key] = 0;
                    }
                    total[key]  += item[key];
                });
            });
            return total;
        }
    },
    methods:{
        remove:function(){
            this.items.pop();
        },
        clear: function(){
            this.items = [];
        },
        add: function(){
            for(let index in this.item)
            {
                if(index == 'food'){
                    continue;
                }
                this.item[index] = parseInt(this.item[index]);
                if(isNaN(this.item[index]) || this.item[index] < 0)
                this.item[index] = 0;
            }
            this.items.push(JSON.parse(JSON.stringify(this.item)));
        }
    }
}
</script>
<style>
.controls{
    margin-left: 100px;
    
}
.bar{
    margin: 10px;
}
#keto{
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.8);
}
.total{
    border-top: 1px solid white;
}
table{
    text-align: center;
}
input{
    width:90px;
    border: none;
    padding: 5px;
    background-color: inherit;
    color: white;
    border-bottom: 1px solid gray;
    text-align: center;
}
</style>
