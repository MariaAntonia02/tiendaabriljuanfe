let empleados=Array(
    {
        id:1,
        nombre:" Mariany Paola Sanchez Gaviria",
        cargo: "Creadora de lineas,Maquilladora",
        telefono: "3135960399",
        correo:"Paola.gaviria.sanchez@gmail.com",
        salario:"50000000",
        contactoEmergencia:"315478965",
        foto:"./img/empelado1.jpg",
    },
    {
        id:2,
        nombre:" Maria Camila Sanchez",
        cargo: "Maquilladora",
        telefono: "31375860399",
        correo:"soy.maquillaje293j4@gmail.com",
        salario:"3000000",
        contactoEmergencia:"3154854868",
        foto:"./img/img2.jpg.jpg",
    },
    {
        id:3,
        nombre:"Miriam Piedad Londoño ",
        cargo: "Maquilladora Artistica ",
        telefono: "320660399",
        correo:"piedad.gaviroa3@gmail.com",
        salario:"4000000",
        contactoEmergencia:"354852458",
        foto:"./img/img3.jpg",

    },
    {
        id:4,
        nombre:" Olga Tello Ortiz",
        cargo: "Secretaria ",
        telefono: "547850399",
        correo:"antonia.sanchez@gmail.com",
        salario:"3000000",
        contactoEmergencia:"3145896584",
        foto:"./img/img4.jpg",
    
    },
    {
         id:5,
        nombre:"Sanadra Villalobos",
        cargo: "Asesora de imagen",
        telefono: "3254560399",
        correo:"sandra.tello23@gmail.com",
        salario:"7000000",
        contactoEmergencia:"315487465",
        foto:"./img/img5.jpg",
    },
    {
        id:6,
        nombre:" Andrea Serna",
        cargo: "Fotografa Grafica",
        telefono: "3206587021",
        correo:"andrea.serna@gmail.com",
        salario:"8000000",
        contactoEmergencia:"315478965",
        foto:"./img/img6.jpg",
    },
    {
        id:7,
        nombre:"Erika Sarez",
        cargo: "Creadora de contenido",
        telefono: "3206243450",
        correo:"erika.yusaga203@gmail.com",
        salario:"7000000",
        contactoEmergencia:"3165874520",
        foto:"./img/img7.jpg",
    },
    {
        id:8,
        nombre:"Carolona Giraldo",
        cargo: "Asesora de lineas",
        telefono: "345875234",
        correo:"caro.gioraldo203@gmail.com",
        salario:"7000000",
        contactoEmergencia:"354587520",
        foto:"./img/img88.webp",
    },
    {
        id:9,
        nombre:"Catalina Escobar",
        cargo: "Agente comercial",
        telefono: "3274243450",
        correo:"cataescobar12@gmail.com",
        salario:"8000000",
        contactoEmergencia:"350452143",
        foto:"./img/img9.htm",
    },
    {
        id:10,
        nombre:"Paola Jara",
        cargo: "Fotografa Social",
        telefono: "3157896120",
        correo:"paolajara2@gmail.com",
        salario:"7000000",
        contactoEmergencia:"315752143",
        foto:"./img/11.jpg",

    },
    {
        id:11,
        nombre:"Shakira Tellez",
        cargo: "Presentadora  de proyectos",
        telefono: "315795450",
        correo:"shakirasanc12@gmail.com",
        salario:"7500000",
        contactoEmergencia:"314582143",
        foto:"./img/12.jpg",
    },
    {
        id:12,
        nombre:"Victora Bueno",
        cargo: "Asesora Comercia",
        telefono: "3274254750",
        correo:"victoriabueno12@gmail.com",
        salario:"8000000",
        contactoEmergencia:"35157143",
        foto:"./img/12.jpg",
    },
    {
        id:13,
        nombre:"Tatiana Perez",
        cargo: "Limpiadora de maquillaje",
        telefono: "3126243450",
        correo:"tatianaperez98@gmail.com",
        salario:"1300000",
        contactoEmergencia:"350452143",
        foto:"./img/13.jpg",
    },
    {
        id:14,
        nombre:"Natalia Ortega",
        cargo:"Modelo",
        telefono:"3175243450",
        correo:"princvesamd5@gmail.com",
        salario:"8000000",
        contactoEmergencia:"315472143",
        foto:"./img/15.jpg",
    },
    {
        id:15,
        nombre:"Guadalupe Santana",
        cargo: "Modelo Rostro",
        telefono: "3254243450",
        correo:"guadaluopesanta@gmail.com",
        salario:"9000000",
        contactoEmergencia:"345352143",
        foto:"./img/16.jpg",
    },
    {
        id:16,
        nombre:"Susana Estada",
        cargo: "Aseadora",
        telefono: "3254243450",
        correo:"susanaestrada12@gmail.com",
        salario:"1300000",
        contactoEmergencia:"310552143",
        foto:"./img/17.jpg",
    },
    {
        id:17,
        nombre:"Maria Antonia Taborda",
        cargo: "Preparadora de set",
        telefono: "3154243450",
        correo:"marianattaborda@gmail.com",
        salario:"3000000",
        contactoEmergencia:"310752143",
        foto:"./img/18.jpg",
    },
    {
        id:18,
        nombre:"Maria Angel Moscoso",
        cargo: "Gerente el logistica",
        telefono: "31254243450",
        correo:"mariaangel82@gmail.com",
        salario:"8000000",
        contactoEmergencia:"315478542",
        foto:"./img/19.jpg",
    },
    {
        id:19,
        nombre:"Wendy Sanchez",
        cargo: "Asesora de imagen ",
        telefono: "3114243450",
        correo:"wendysanchez@gmail.com",
        salario:"6000000",
        contactoEmergencia:"3148652147",
        foto:"./img/20.jpeg",
    },
    {
    id:20,
    nombre:"Yury Alzate",
    cargo: "Maquilladora Profesional",
    telefono: "3154243450",
    correo:"yuryalzate@gmail.com",
    salario:"7000000",
    contactoEmergencia:"310852143",
    foto:"./img/img2.jpg",
},


    
)
//creando una referencia al contenedor empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos

//1. debo recorrer la base de satos para el problema 
empleados.forEach(function(empleado){
    

    let columna=document.createElement("div")
    columna.classList.add("col")

    
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre



    //se asocian las estructuras en orden logico 
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
    



})