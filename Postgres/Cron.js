const axios = require('axios');
const cron = require('node-cron');
const IntegracaoCategorias =() => {
    
cron.schedule("* 6 * * *",async ()=>{
    try {
        const {data} = await axios.get('http://localhost:3000/categorias')
        
        for(var i = 0;i <5;i++){
            const postgress = await axios.get(`http://localhost:3001/categorias/${data[i].codigo}`)
            if(postgress.data === null){
                const teste = await axios.post('http://localhost:3001/categorias',data[i])
            }
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
                const teste = await axios.post('http://localhost:3001/produtos',data[i])
              
            }
     
        }
    } catch (error) {
        return error
    }
} );
}

module.exports = {
    IntegracaoProdutos,IntegracaoCategorias
}