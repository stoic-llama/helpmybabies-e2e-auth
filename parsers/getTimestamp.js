function formattedDateNow()
{
   var result = "" 
   var d = new Date(Date.now())

   // format ---> 'YYYY-MM-DDThh:mm:ss.SSS'

   result = result + d.getFullYear()
            + "-"
            + String(d.getMonth() + 1).padStart(2, '0') // (d.getMonth()+1)
            + "-"
            + d.getDate().toString().padStart(2,0) 
            + " "
            + d.getHours().toString().padStart(2,0)
            + ":"
            + d.getMinutes().toString().padStart(2,0)
            + ":"
            + d.getSeconds().toString().padStart(2,0)
            // + "."
            // + d.getMilliseconds().toString().padStart(3,0)

   return result;
}

module.exports = { formattedDateNow } 