exports.kalkulator = (req,res) => {
    let message = "";
    res.render("kalkulator", {message : message})
}

exports.proses = (req,res) => {
    let operator = req.body.operator
    let angka1 = parseInt(req.body.angka1)
    let angka2 = parseInt(req.body.angka2)
   
   
    switch (operator) {
        case '+':
            hasil= angka1 + angka2
            break;
        case '-':
            hasil= angka1 - angka2
            break;
        case '*' :
            hasil= angka1 * angka2
            break;
        case '/':
            hasil= angka1 / angka2        
            break;
    }

    console.log(hasil)
    
    res.send(`<center><h1>Total dari ${angka1} ${operator} ${angka2} Adalah ${hasil}</h1></center>`)
}