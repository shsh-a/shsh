<template>
    <div id="finance" class="container">
        <h4>Visualize your savings and spendings</h4>

            <div class="row">
                <div class="col">
                    <apexchart width="380" type="radialBar" :options="options" :series="series"></apexchart>
                </div>
                <div class="col">
                    <div>
                        <table class="table-bordered">
                            <tr>
                                <th>
                                    -
                                </th>
                                <th>
                                    Amount
                                </th>
                            </tr>
                            <tr v-for="pair in pairs">
                                <td>
                                    {{pair.label}}
                                </td>
                                <td>
                                    {{ pair.amount.toLocaleString() }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group" v-if="notAdded">
                        <label> Income
                            <input v-model="total" type="number"  />
                        </label>
                        <button class="btn btn-primary"
                        @click="addTotal" > Add</button>
                    </div>
                    <div class="form-group" v-if="!notAdded && !limit"  >
                        <label> Name <input v-model="name" type="text" /></label> <br />
                        <label>Amount <input v-model="amount" type="number" /></label> <br />
                        <button class="btn btn-primary" @click="addToArray"> Add</button>
                        <button class="btn btn-primary" v-bind:disabled="series.length <= 1" @click="undo"> Undo</button>
                    </div>

                </div>
                <div class="col">

                    {{message}}


            <BrokeTrends
            :savings="savings"
            :expenses = "expenses"
            ></BrokeTrends>
            </div>
        </div>


    </div>
</template>
<script>
import BrokeTrends from './modules/broke.vue';
export default {
    name: 'Finance',
    components: { BrokeTrends },
    data: function(){
        return {
            total: 0,
            notAdded:true,
            expenses: 0,
            name:'',
            amounts:[],
            amount:0,
            options: {
                labels: []
            },
            series: [],
            savings: 0,
            message:'',
            limit:0,
            finished:0,
        }
    },
    methods:{
        addToArray: function(){
            if(this.name.length == 0 || this.amount == 0){
                alert("Enter valid amount. ");
                return;
            }
            let amount = this.amount/this.total * 100;
            if( parseInt(this.amount) > parseInt(this.savings)){
                alert("That is more money than you have.");
                return;
            }
            this.total = parseInt(this.total);

            this.expenses += parseInt(this.amount);
            this.amounts.push(this.amount);
            this.savings =  this.total - this.expenses;
            this.series.push(parseInt(amount));
            this.options.labels.push(this.name);
            if(this.savings <= 0)
            {
                this.limit = 1;
                this.message = "No money left. ";
            }
        },
        addTotal: function(){
            this.total = parseInt(this.total);
            this.series.push(100);
            this.options.labels.push("Income");
            this.amounts.push(this.total);
            this.notAdded = false;
            this.savings = this.total;
        },
        undo: function(){
            this.series.pop();
            this.options.labels.pop();
            let amount = parseInt(this.amounts.pop());
            this.expenses -= amount;
            this.savings = this.savings + amount;
        }
    },
    computed:{
        pairs(){
            return this.amounts.map((amount, i)=>{
                return{
                    amount: parseInt(amount),
                    label: this.options.labels[i]
                }
            });
        }
    }
}
</script>
<style >
button{
    margin: 5px;
}
label{
    margin: 5px;
}
table,tr,td,th{
    margin: 10px;
    padding: 10px;
}
#finance{
    background-color: rgba(0, 0, 0, 0.8);
    padding: 40px;
}
</style>
