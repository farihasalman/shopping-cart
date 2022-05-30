function fetchProducts(done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function createProductCard(product){
    return $(`
        <div class="col-4 card m-1">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-manufacturer">${product.manufacturer}</div>
            <br>
            <div class="row">
                <div class="col product-price"><b>Rs. ${product.price}</b></div>
                <button class="col btn btn-primary m-2">Buy</button>
            </div>
        </div>
    `)
}
