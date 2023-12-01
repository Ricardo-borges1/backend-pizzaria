var usuario = [
    {
    nome: 'Celso Arruda',
    email: 'celso123@hotmail.com',
    senha: 'celso123',
    confirmacaoSenha: 'celso123',
    telefone: '11998467848',
    id: 1,
    icone: "Image",
    localizacao: [
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
    id: 2,
    icone: "Image",
    localizacao: [
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
    id:3,
    icone: "Image",
    localizacao: [
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
    id:4,
    icone: "Image",
    localizacao: [
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
       nomeCategoria:'Pizza inteira',
       icone:'./img/xxxxxxxx'
    },
    {
       id: 2,
       nomeCategoria:'Pizza brotinho',
       icone:'./img/xxxxxxxx'
    },
    {
       id:3,
       nomeCategoria:'Bebidas',
       icone:'./img/xxxxxxxx'
    },
    {
       id: 4,
       nomeCategoria:'Sobremesas',
       icone:'./img/xxxxxxxx'
    }
   ]

var produtos = [
    {
        id: 1,
        nomeProduto: 'Pizza de calabreza com queijo',
        preço: 16.00,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        avaliacao: 5,
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id:5,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '15/03/2022',
                usuario: {id:2}
            }
        ]
    },

    {
        id:2,
        nomeProduto: 'Pizza de peperoni com queijo',
        preço: 19.00,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        avaliacao: 4,
        categoria: [
            {
                categorias: {id:1}
                
            }
        ],
        comentario: [
            {
                id:7,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '16/01/2022',
                usuario: {id:4}
            }
        ]
    },

    {
        id: 3,
        nomeProduto: 'Pizza de calabreza com queijo',
        preço: 16.00,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        avaliacao: 3,
        categoria: [
            {
                categorias: {id:1}
            }
        ],
        comentario: [
            {
                id:9,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '19/07/2023',
                usuario: {id:1}
            }
        ]
    },

    {
        id: 4,
        nomeProduto: 'Pizza de peperoni com queijo e tomate',
        preço: 19.00,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        avaliacao: 4,
        categoria: [
            {
                categorias: {id:1}
                
            }
        ],
        comentario: [
            {
                id:2,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '17/08/2022',
                usuario: {id:4}
            }
        ]
    },

    {
        id: 5,
        nomeProduto: 'Pizza brotinho com queijo e tomate',
        preço: 12.00,
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        avaliacao: 5,
        categoria: [
            {
                categorias: {id:2}
                
            }
        ],
        comentario: [
            {
                id:2,
                mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                data: '21/09/2023',
                usuario: {id:2}
            }
        ]
    },

]

module.exports = {
    categorias,usuario,produtos
}
