var usuarios = [
    {
    nome: 'Celso Arruda',
    email: 'celso123@hotmail.com',
    senha: 'celso123',
    confirmacaoSenha: 'celso123',
    telefone: '11998467848',
    id: '1',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'Perto de algum lugar',
            bairro: 'Jardim Xurupita',
            cidade: 'Itapevi',
            pais : 'Brasil'
        }
    ]
    },

    {
    nome: 'Ricardo Borges',
    email: 'ricardo@hotmail.com',
    senha: 'rick123',
    confirmacaoSenha: 'rick123',
    telefone: '11998249607',
    id: '2',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'Joaquim das Neves',
            bairro: 'Vila Caldas',
            cidade: 'Carapicuiba',
            pais : 'Brasil'
        }
    ]
    },

    {
    nome: 'Leticia Cobucci',
    email: 'cobucci21@gmail.com',
    senha: 'cobucci1',
    confirmacaoSenha: 'cobucci1',
    telefone: '11998447322',
    id:'3',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'Rua da Fazendinha',
            bairro: 'Jardim Tonato',
            cidade: 'Jandira',
            pais : 'Brasil'
        }
    ]
    },

    {

    nome: 'Edna Almeida',
    email: 'Edna@hotmail.com',
    senha: 'fund2',
    confirmacaoSenha: 'fund2',
    telefone: '11998465838',
    id:'4',
    imagem:'./img/xxxxxxxxxxxx',
    endereco: [
        {
            rua:'São Matheus',
            bairro: 'Vila Ester',
            cidade: 'guarulhos',
            pais : 'Brasil'
        }
    ]
    },
]

var categorias = [
 {
    id: 1,
    nome:'Pizza inteira',
    icone:'./img/xxxxxxxx'
 },
 {
    id: 2,
    nome:'Pizza brotinho',
    icone:'./img/xxxxxxxx'
 },
 {
    id:3,
    nome:'Bebidas',
    icone:'./img/xxxxxxxx'
 },
 {
    id: 4,
    nome:'Sobremesas',
    icone:'./img/xxxxxxxx'
 },
{
    id:5,
    nome:'Frutas',
    icone:'./img/xxxxxxx'
},
{
    id:6,
    nome:'sorvete',
    icone:'./img/xxxxxxxxx'
}
]

var produtos = [
    {
        id: 1,
        nomeProduto:'Pizza de calabreza com queijo',
        preco: 16.00,
        descricao: "Pizza de calabreza queijo, tomate seco ",
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1}
        }
        ],
        comentarios: [
            {
            id: 4444,
            message: 'Pizza muito boa!!!!',
            data: '21-08-2018',
            usuario: {
                id:2, nome:"Ricardo Borges"}
        }
        ]
    },

    {
        id: 2,
        nomeProduto:'Pizza de peperoni com queijo',
        preco: 19.00,
        descricao: "Pizza de peperoni queijo, tomate seco",
        avaliacao: 5,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1, nome:'Pizza inteira'}
        }
        ],
        comentarios: [
            {
            id: 4443,
            message: 'Ótima pizza uma delícia, chegou quentinha ',
            data: '20-03-2018',
            usuario: {
                id:1,
                nome:'Celso Arruda',
                     }
        }
        ]
    },
    {
        id: 3,
        nomeProduto:'Pizza de calabreza com queijo e borda recheada',
        preco: 19.00,
        descricao: "Pizza de peperoni queijo, tomate seco, borda recheada de catupiry ou cheddar",
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1, nome:'Pizza inteira'}
        }
        ],
        comentarios: [
            {
            id: 4449,
            message: 'Chegou bem rápida, e a borda bem recheada',
            data: '20-04-2018',
            usuario: {
                id:1,
                nome:'Celso Arruda',
                     }
        }
        ]
    },
    {
        id: 4,
        nomeProduto:'Pizza brotinho ocm queijo e tomate',
        descricao: "Pizza brotinho de 4 pedaços e borda recheada",
        preco:12.00,
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:2, nome:'Pizza brotinho' }
        }
        ],
        comentarios: [
            {
            id: 4445,
            message: '',
            data: '20-04-2018',
            usuario: {
                id:1,
                nome:'Celso Arruda',
                     }
        }
        ]
    },
    {
        id:5,
        nomeProduto:'Pizza de peperone com queijo e tomate',
        descricao: "Pizza de peperoni queijo, tomate seco, borda recheada de catupiry ou cheddar",
        preco: 16.00,
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:1, nome:'Pizza inteira'}
        }
        ],
        comentarios: [
            {
            id: 4445,
            message: '',
            data: '20-04-2018',
            usuario: {
                id:1,
                nome:'Celso Arruda',
                     }
        }
        ]
    },
    {
        id: 6,
        nomeProduto:'Coca-Cola 3L',
        descricao: "Refrigerante 3 litros embalagem econômica",
        preco: 14.99,
        avaliacao: 2,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:3, nome:'Bebidas'}
        }
        ],
        comentarios: [
            {
            id: '',
            message: '',
            data: '',
            usuario: {
                id:'',
                nome:'',
                     }
        }
        ]
    },
    {
        id: 7,
        nomeProduto:'Cerveja Heineken',
        descricao: "Heineken Lager Beer",
        preco: 17.99,
        avaliacao: 5,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:3, nome:'Bebidas'}
        }
        ],
        comentarios: [
            {
            id: '',
            message: '',
            data: '',
            usuario: {
                id:'',
                nome:'',
                     }
        }
        ]
    },
    {
        id: 8,
        nomeProduto:'Guaraná 2L',
        descricao: "Refrigerante garrafa",
        preco: 10.00,
        avaliacao: 3,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:3, nome:'Bebidas'}
        }
        ],
        comentarios: [
            {
            id: '',
            message: '',
            data: '',
            usuario: {
                id:'',
                nome:'',
                     }
        }
        ]
    },
    {
        id: 9,
        nomeProduto:'Skol',
        descricao: "Cerveja de lata",
        preco: 7.00,
        avaliacao: 4,
        imagem:'./img/xxxxxxxxxxxx',
        categorias: [
            {
            categoria: {id:3, nome:'Bebidas'}
        }
        ],
        comentarios: [
            {
            id: '',
            message: '',
            data: '',
            usuario: {
                id:'',
                nome:'',
                     }
        }
        ]
    }


]

module.exports = {
    categorias,usuarios,produtos
}
