<template>
    <div>
        <div>
            <table class="table-bordered">
                <tr>
                    <td>
                        Money left
                    </td>
                    <td>
                         {{savings.toLocaleString()}}
                    </td>
                </tr>
                <tr>
                    <td>
                        Money spent
                    </td>
                    <td>
                    {{ expenses.toLocaleString() }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Homeless without income in
                    </td>
                    <td>
                         {{ timeLeft }}
                    </td>
                </tr>
                <tr>
                    <td>
                        Savings after 1 year
                    </td>
                    <td>
                        {{oneYear.toLocaleString()}}
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default{
    name: 'BrokeTrends',
    props: [ 'savings', 'expenses'],
    computed: {
        timeLeft : function(){
            let months = this.savings/this.expenses;
            if(months >=0 && months !== Infinity ){
                let days = (months - parseInt(months)) * 30;
                return  parseInt(months)+ ' months '+ parseInt(days) + ' days';

            }
            else {
                return 0;
            }
    },
    oneYear: function(){
    return this.savings*12;

     }
    }
}
</script>
<style>
</style>
