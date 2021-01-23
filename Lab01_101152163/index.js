const csv = require('csv-parser');
const fs = require('fs');
const { fileURLToPath } = require('url');
const results = []

fs.createReadStream('input_countries.csv')
.pipe(csv({}))
.on('data',(data)=> results.push(data))
.on('end',()=>
{
    if(fs.existsSync('Canada.txt'))
    {
        fs.unlinkSync('Canada.txt')
        console.log('Canada Deleted.')
    }
    if(fs.existsSync('USA.txt'))
    {
        fs.unlinkSync('USA.txt')
        console.log('USA deleted')
    }

    for(i in results)
    {
       if(results[i].country.toString() == 'Canada')
     {
         printer = []
         printer.push(results[i])
        
        fs.appendFile("Canada.txt",JSON.stringify(printer),err=>
        {
                   
            if(err) throw err;
            console.log('Canada File Created...')
        })
     }
    }
    
    
    

    for(j in results)
    {
       if(results[j].country.toString() == 'United States')
     {
         printer2 = []
         printer2.push(results[j])
        
        fs.appendFile("USA.txt",JSON.stringify(printer2),err=>
        {
                   
            if(err) throw err;
            console.log('USA file Created...')
        })
    }
    
    
    }
})

