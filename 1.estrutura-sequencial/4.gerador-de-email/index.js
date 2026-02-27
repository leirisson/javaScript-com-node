const usuarios = ['Leirison souza dos santos', 'maria da silva', 'francisco dos santos']


usuarios.forEach(usuario => {
        let arrayNome = usuario.toLocaleLowerCase().split(" ")
        let tamanhonome = arrayNome.length - 1
        const email = `${arrayNome[0]}.${arrayNome[tamanhonome]}@tecstore.com`
        console.log(email) 
});
// const arrayNome = nome.toLocaleLowerCase().split(" ")
// let tamanhonome = arrayNome.length - 1
// const email = `${arrayNome[0]}.${arrayNome[tamanhonome]}@tecstore.com`
// console.log(email)