

//SEQUENTIAL REQUESTS
// async function get3Pokemon(){
//     const pokies1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
//     const pokies2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
//     const pokies3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
//     console.log(pokies1.data)
//     console.log(pokies2.data)
//     console.log(pokies3.data)
// }


//PARALLEL REQUESTS - use this if you dont reall care in the order that things happen in
 async function get3Pokemon(){
     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
     console.log(prom1)
     const pokies1 = await prom1
     const pokies2 = await prom2
     const pokies3 = await prom3
     console.log(prom1)

     console.log(pokies1.data)
     console.log(pokies2.data)
     console.log(pokies3.data)
 }

get3Pokemon()

//Example of slower functions

function changeBodyColor(color, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        }, time)
    })
}


// This example is sequential one after the other will operate
// async function lightShow(){
//
//     await changeBodyColor('teal',1000)
//     await changeBodyColor('pink',1000)
//     await changeBodyColor('green',1000)
//     await changeBodyColor('black',1000)
// }
//
// lightShow()

// This example is parallel all at the same time
//The screen changes to the last color straight away
//Actually all colours are showing at the same time

async function lightShow(){

    const p1 = changeBodyColor('teal',1000)
    const p2 = changeBodyColor('pink',1000)
    const p3 = changeBodyColor('green',1000)
    const p4 = changeBodyColor('blue',1000)
    await p1
    await p2
    await p3
    await p4

}

lightShow()
