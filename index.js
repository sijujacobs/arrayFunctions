
(() => {
    let shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }];

    let total = shoppingCart.reduce(function (acc, curr) {
        console.log('acc : ', acc, ', curr : ', curr);
        return acc + curr.qty * curr.price;
    }, 0);

    console.log('total : ', total);

})()