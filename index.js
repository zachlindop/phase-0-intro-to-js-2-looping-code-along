const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

const name = ['Lisa', 'Kaitlin', 'Jan']
const event = ['surprise']

function writeCards(name, event){
    let newArr = []
    for (let i = 0; i < name.length; i++){
    newArr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }

    return newArr;
}

function countDown(number){
let i = 10;
    while(i >= 0){
        console.log(i--);
    }
    return i
}    