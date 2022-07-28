const axios = require('axios');
const cron = require('node-cron');
const IntegracaoCategorias =() => {
    
cron.schedule("* 6 * * *",async ()=>{
    try {
        console.log("teste")
        const {data} = await axios.get('http://localhost:3000/categorias')
        
        for(var i = 0;i <5;i++){
            const postgress = await axios.get(`http://localhost:3001/categorias/${data[i].codigo}`)
            if(postgress.data === null){
                console.log("entrou no if",data[i])
                const teste = await axios.post('http://localhost:3001/categorias',data[i])
            }
            console.log("Data post:",postgress.data)
      
            console.log("Saiu do if",data[i].id)
        }
        
        return 
       } catch (error) {
        return error
       }
} );

}

const IntegracaoProdutos =()=>{
    
cron.schedule("5 6 * * *",async ()=>{
    try {
        const {data} = await axios.get('http://localhost:3000/produtos')
        for(var i=0;i < data.length;i++){
            const postgress = await axios.get(`http://localhost:3001/p/${data[i].codigo}`)
            if(postgress.data === null){
                console.log("entrou no if",data[i])
                const teste = await axios.post('http://localhost:3001/produtos',data[i])
                console.log(teste)
            }
            console.log("Saiu do if",data[i].id)
     
        }
    } catch (error) {
        return error
    }
} );
}

module.exports = {
    IntegracaoProdutos,IntegracaoCategorias
}
