
//Objeto usado para criar uma nova classe com base no id do usuario que criou a classe
//Ao ser criado, essa classe será retornada ao front com o id dela.
const classTest = {
    "teacherId": "61228c873bd167b478aa5ab5",
    "teacher": "Sr Winglerson",
    "class": "Sexologia II",
    "maxStudents": 20,
    "students": [],
    "price": 60,
    "dateClass": [
        {
            "weekday": "mon",
            "hasClass": true,
            "startHour": "15:00",
            "endHour":"17:00"
        },
        {
            "weekday": "mon",
            "hasClass": false,
            "startHour": "XX:XX",
            "endHour":"XX:XX"
        },
        {
            "hasClass": true,
            "weekday": "mon",
            "startHour": "08:00",
            "endHour":"10:00"
        }
    ]
}

//objeto q vem do front de validação de senha login
const loginUser = {
    "username": "admin123",
    "password": "admin123"
}

//objeto q vem do front para cadastro de usuario
const signUser = {
    "name":"usuario",
    "email": "usuario@usuario.com",
    "profileImg": "https//www.qualquer-url-de-image.com/imagem.jpg",
    "username": "usuario123",
    "password": "usuario123",
    "phone": "+5521900001111"
}

//objeto usado no back para inserir no banco
const user = {
    "credentials": {
        "public": {
            "name": "admin",
            "email": "admin@admin.com",
            "phone":"+5521988887777",
            "profileImg":"https//www.qualquer-url-de-image.com/imagem.jpg"
        },
        "private": {
            "username":"admin123",
            "password":"admin123"
        }   
    },
    "teaching": [],
    "learning": [],

}
