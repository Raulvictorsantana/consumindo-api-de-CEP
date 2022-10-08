let cep = document.querySelector("#cep")

let showdata= (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value= result[campo]
            
        }
    }
};

 cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","") 
    const options ={
        method:'GET', 
        mode:'cors',
        cache:'default'
    }
    fetch(` http://viacep.com.br/ws/${search}/json/`,options)
    .then(Response=>{Response.json()
        .then(data=>showdata(data))
    })
    .catch(e=>(console.log("deu erro")))
    
 })   