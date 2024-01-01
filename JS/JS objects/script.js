let item = {
    name:'phone',
    price:25000,
    quantity:1,
    categories:['ee','cc'],
    dimensions:{
        length:7,
        breadth:3.5,
        height:0.5


    },
    buy:function(){
        console.log('item added to cart')
    },
    addtoList(){
        console.log('item added to list')
    }

}
console.log(item)
item.returnable=true
console.log(item)
item.buy()
item.addtoList()