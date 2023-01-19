
let deckAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let deckID = null

async function getDeck(){
    let res = await axios.get(`${deckAPI}`);
    console.log("deck id:", res.data.deck_id)
    deckID = res.data.deck_id
}


async function part1(){
    let deck = await axios.get(`${deckAPI}`);
    console.log("deccccckk", deck.data.deck_id)
    let thisDeck = deck.data.deck_id
    let res1 = await axios.get(`https://deckofcardsapi.com/api/deck/${thisDeck}/draw/?count=1`);
    console.log("Picked Card:", res1.data.cards[0].value, res1.data.cards[0].suit)
    let res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${thisDeck}/draw/?count=1`);
    console.log("Picked Card:", res2.data.cards[0].value, res2.data.cards[0].suit)
}
 part1()

async function part3(){
    let deck = await axios.get(`${deckAPI}`);
    console.log("deccccckk", deck.data.deck_id)
    let thisDeck = deck.data.deck_id;

    $("#givecard").on("click", async function(e){
            e.preventDefault;
            $("#card-section").empty()
            let res1 = await axios.get(`https://deckofcardsapi.com/api/deck/${thisDeck}/draw/?count=1`);
    for (card in res1.data.cards){
        console.log(`card ${card}`, res1.data.cards[card].value, res1.data.cards[card].suit)
        $("#card-section").append(`
        <img src=${res1.data.cards[card].image}>
        `)
        if (res1.data.remaining == 0){
        $("#card-section").append(`<p> No more cards! </p>
            `)
            }
        }
            })
    
}
part3()

// function cardClick(){
// $("#card-section").empty()
//  axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
// .then(chosencards =>{
//     console.log("Picked Card", chosencards, chosencards.data.cards)
//     for (card in chosencards.data.cards){
//         console.log(`card ${card}`, chosencards.data.cards[card].value, chosencards.data.cards[card].suit)
//     $("#card-section").append(`
//     <img src=${chosencards.data.cards[card].image}>
//     `)
//     if (chosencards.data.remaining == 0){
//         $("#card-section").append(`<p> No more cards! </p>
//         `)
//     }
//     }
// }
// )
// }

// $(document).on("click", "#givecard", cardClick())

// $("#givecard").on("click", function(e){
//     e.preventDefault;
//     cardClick()})