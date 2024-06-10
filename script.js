let ArrProdutos =[
    {
        id: 1,
        name: "KOBE 9",
        preco: 1400,
        image: "image/shoes1.png",
        rating: 5
    },

    {
        id: 2,
        name: "ZOOM KD9",
        preco: 550,
        image: "image/shoes2.png",
        rating: 5
    },

    {
        id: 3,
        name: "ZOOM Structure",
        preco: 700,
        image: "image/shoes.png",
        rating: 5
    },

    {
        id: 4,
        name: "AIR MAX 2015",
        preco: 680,
        image: "image/shoes4.png",
        rating: 5
    },

    {
        id: 5,
        name: "HUARACHE",
        preco: 750,
        image: "image/shoes5.png",
        rating: 3
    },

    {
        id: 6,
        name: "FREE RN",
        preco: 645,
        image: "image/shoes6.png",
        rating: 5
    },

    {
        id: 7,
        name: "AIR ZOOM",
        preco: 499,
        image: "image/red_shoes1.png",
        rating: 5
    },

    {
        id: 8,
        name: "AIR MAX 90",
        preco: 599,
        image: "image/shoes8.png",
        rating: 5
    },
]


const body = document.querySelector('body')
produtos = document.querySelector('.box'),
    cestaCarrinho = document.querySelector('.fa-solid.fa-cart-shopping'),
    fecharCarrinho = document.querySelector('.fechar'),
    listaProdutos = document.querySelector('.listaProdutos'),
    quantidade = document.querySelector('.span-cart'),
    total = document.querySelector(".total");

let checkList = [];

cestaCarrinho.onclick= () =>{
    body.classList.add("ativo");
};
fecharCarrinho.onclick=()=>{
    body.classList.remove("ativo");
};


function OnInIt(){
    ArrProdutos.forEach((item, key) =>{
        let div = document.createElement("div");
        div.classList.add("card")

    let star = ""
    for(i = 0; i<item.rating;i++){
        star += `<i class="fa-solid fa-star"></i>`
    }

        div.innerHTML = `
                <div class="small_card">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                </div>
                <div class=image>
                    <img src="${item.image}">
                </div>
                <div class="produtos_text">
                    <h2>${item.name}</h2>
                    <h3>R$ ${item.preco}</h3>
                    <div> ${star} </div>
                    <button class="btn" onclick="adicionarAoCarrinho(${key})">Adicionar ao Carrinho</button>
                </div>

            </div>
        `;

        produtos.appendChild(div);
    })

}
OnInIt()

function adicionarAoCarrinho(Id){
    if(checkList[Id] == null){
        checkList[Id] = ArrProdutos[Id];
        checkList[Id].quantidade = 1;
    }else{
        checkList[Id].quantidade += 1;
    }
    
    
    reloadCart();

}

function reloadCart(){
    listaProdutos.innerHTML="";
    let count = 0;
    let totalPrice = 0;

    checkList.forEach((item,key)=>{
        totalPrice += parseInt(item.preco * item.quantidade)
        count += item.quantidade;
        let li = document.createElement("li");
        li.innerHTML=`
        <img src="${item.image}">
        <div>${item.name}</div>
        <div>R$ ${item.preco}</div>
        <div>
        <button onclick= "mudarQuantidade(${key},${item.quantidade - 1})"> - </button>
        <div class="count"> ${item.quantidade} </div>
        <button onclick= "mudarQuantidade(${key},${item.quantidade + 1})"> + </button>
        </div>
        `


        listaProdutos.appendChild(li);
    });
    total.innerHTML = `<a href="https://link.mercadopago.com.br/tdegean"><small>Subtotal (${count} itens) </small> R$ ${totalPrice}</a>`;
    quantidade.innerHTML = count;
}

function mudarQuantidade(key, quantidade){
    if(quantidade == 0){
        delete checkList[key];
    }else{
        checkList[key].quantidade=quantidade;
    }
    reloadCart();
}

function functio(small){
    var full = document.getElementById("imagebox")
    full.src = small.src
}