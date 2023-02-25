module.exports = function toReadable (number) {
    const obj = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five', 
        '6': 'six',
        '7': 'seven',
        '8': 'eight', 
        '9': 'nine',      
    }        
    let str = number.toString();
    let arr = str.split('')
    let res = ''
    let value = []



    for(let i = 0; i < arr.length; i++) {
        for(let key in obj){
            if(key == arr[i])  value.push(obj[key])
        }
    }
    let strValue = value.join(' ')

    

    if(value[value.length - 2] == 'one' && value[value.length -1] == 'zero') {
        strValue = strValue.replace(/one zero/, "ten")
    }
    else if(value[value.length - 2] == 'one' && value[value.length -1] == 'one') {
        strValue = strValue.replace(/one one$/, "eleven")
    }
    else if(value[value.length - 2] == 'one' && value[value.length -1] == 'two') {
        strValue = strValue.replace(/one two/, "twelve")
    }
    else if(value[value.length - 2] == 'one' && value[value.length -1] == 'three') {
        strValue = strValue.replace(/one three/, "thirteen")
    } 
    else if(value[value.length - 2] == 'one' && value[value.length -1] == 'five') {
        strValue = strValue.replace(/one five/, "fifteen")
    } 
    else if (value[value.length - 2] == 'one'){
        strValue = strValue.replace(/one.*/, `${value[value.length - 1]}teen`)
    }


    else if (value[value.length - 2] == 'two' && value[value.length - 1] == 'zero'){
        strValue = strValue.replace(/two zero/g, 'twenty')
    }
    else if (value[value.length - 2] == 'two' && value[value.length - 1] == 'two'){
        strValue = strValue.replace(/two two$/, 'twenty two')
    }
    else if (value[value.length - 2] == 'two'){
        strValue = strValue.replace(/two.*/, 'twenty')
    }


    else if (value[value.length - 2] == 'three' && value[value.length - 1] == 'zero'){
        strValue = strValue.replace(/three.*/, 'thirty')
    }
    else if (value[value.length - 2] == 'three' && value[value.length - 1] == 'three'){
        strValue = strValue.replace(/three three$/, 'thirty three')
    }
    else if (value[value.length - 2] == 'three'){
        strValue = strValue.replace(/three/g, 'thirty')
    }


    else if (value[value.length - 2] == 'four' && value[value.length - 1] == 'zero'){
        strValue = strValue.replace(/four.*/, 'forty')
    }
    else if (value[value.length - 2] == 'four' && value[value.length - 1] == 'four'){
        strValue = strValue.replace(/four four$/, 'forty four')
    }
    else if (value[value.length - 2] == 'four'){
        strValue = strValue.replace(/four/g, 'forty')
    }


    else if (value[value.length - 2] == 'five' && value[value.length - 1] == 'five'){
        strValue = strValue.replace(/five five$/, 'fifty five')
    }
    else if (value[value.length - 2] == 'five'){
        strValue = strValue.replace(/five/g
        , 'fifty')
    }


    else if (value[value.length - 2] == 'six' && value[value.length - 1] == 'zero'){
        strValue = strValue.replace(/six.*/, 'sixty')
    }
    else if (value[value.length - 2] == 'six' && value[value.length - 1] == 'six'){
        strValue = strValue.replace(/six six$/, 'sixty six')
    }
    else if (value[value.length - 2] == 'six'){
        strValue = strValue.replace(/six/g, 'sixty')
    }


    else if (value[value.length - 2] == 'seven' && value[value.length - 1] == 'zero'){
        strValue = strValue.replace(/seven.*/, 'seventy')
    }
    else if (value[value.length - 2] == 'seven' && value[value.length - 1] == 'seven'){
        strValue = strValue.replace(/seven seven$/, 'seventy seven')
    }
    else if (value[value.length - 2] == 'seven'){
        strValue = strValue.replace(/seven/g, 'seventy')
    }


    else if (value[value.length - 2] == 'eight' && value[value.length - 1] == 'zero'){
        strValue = strValue.replace(/eight.*/, 'eighty')
    }
    else if (value[value.length - 2] == 'eight' && value[value.length - 1] == 'eight'){
        strValue = strValue.replace(/eight eight$/, 'eighty eight')
    }
    else if (value[value.length - 2] == 'eight'){
        strValue = strValue.replace(/eight/g, 'eighty')        
    }


    else if (value[value.length - 2] == 'nine' && value[value.length - 1] == 'zero'){
        strValue = strValue.replace(/nine.*/, 'ninety')
    }
    else if (value[value.length - 2] == 'nine' && value[value.length - 1] == 'nine'){
        strValue = strValue.replace(/nine nine$/, 'ninety nine')
    }
    else if (value[value.length - 2] == 'nine'){
        strValue = strValue.replace(/nine/g, 'ninety')
    }



    if(value.length == 3){
        strValue = strValue.replace(/^\w+/, `${value[0]} hundred`)
    }
    return strValue
    }
