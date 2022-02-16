function tabuada() {
    var numero = document.getElementById("txttabuada")
    var tab = document.getElementById("seltab")

    if(numero.value.length == 0){
        window.alert("Por favor, digite um número!")
    }else{
        var num = Number(numero.value)
        tab.innerHTML = " "

        for(var n = 1; n <= 10; n++){
            var item = document.createElement("option")
            item.text = `${num} x ${n} = ${n * num}`
            tab.appendChild(item)
        }
    }
}