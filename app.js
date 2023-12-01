
var  pizzariaTony = require ('./modulo/pizzaria_tony.js')

const listarCategorias = () => {
    let categorias = pizzariaTony.categorias
    let categoriasArray = []
    
    categorias.forEach((categoria) => {
        
        let categoriaInfo = {
            id: categoria.id,
            nome: categoria.nomeCategoria,
            imagem: categoria.icone 
        }    
        
        categoriasArray.push(categoriaInfo)

    })

    let categoriasJSON = { categoriasArray }
    return categoriasJSON
}

 const produtosBemAvaliados = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    
     produtos.forEach((pizza) => {
        
         if(pizza.avaliacao == 5){

             let pizzaJSON = {
                 nome: pizza.nomeProduto,
                 id: pizza.id,
                 avaliacao: pizza.avaliacao
             }

             produtosArray.push(pizzaJSON)

         }

     })

     let produtosJSON = { produtosArray }
     return produtosJSON
 }

const produtoEspecifico = (id) => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    let idProduto = id
    let status = false
    
    produtos.forEach((pizza) => {
        
        if(pizza.id == idProduto){

            let pizzaJSON = {
                nome: pizza.nomeProduto,
                id: pizza.id,
            }
            
            status = true
            produtosArray.push(pizzaJSON)

        }

    })

    let produtosJSON = { produtosArray }

    if(status){
        return produtosJSON
    } else {
        return false
    }
}


const listarProdutos = () => {
    let produtos = pizzariaTony.produtos
    let produtosArray = []
    
    produtos.forEach((produtos) => {
        
        let produtosInfo = {
            id: produtos.id,
            preco: produtos.precoProduto,
            nomeProduto: produtos.nomeProduto,
            descricao: produtos.descricao
        }    
        
        produtosArray.push(produtosInfo)

    })

    let produtosJSON = { produtosArray }
    return produtosJSON
}

//console.log (listarCategorias());
//console.log(produtoEspecifico(2));
//console.log (produtosBemAvaliados())
console.log (listarProdutos());