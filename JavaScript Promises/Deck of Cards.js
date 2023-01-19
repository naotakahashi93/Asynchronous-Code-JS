
let deckAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let deckID = null

axios.get(`${deckAPI}`)
.then(deck => {
    console.log("deckID", deck.data.deck_id);
    deckID = deck.data.deck_id})

function cardClick(){
$("#card-section").empty()
 axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
.then(chosencards =>{
    console.log("Picked Card", chosencards, chosencards.data.cards)
    for (card in chosencards.data.cards){
        console.log(`card ${card}`, chosencards.data.cards[card].value, chosencards.data.cards[card].suit)
    $("#card-section").append(`
    <img src=${chosencards.data.cards[card].image}>
    `)
    if (chosencards.data.remaining == 0){
        $("#card-section").append(`<p> No more cards! </p>
        `)
    }
    }
}
)
}

// $(document).on("click", "#givecard", cardClick())

$("#givecard").on("click", function(e){
    e.preventDefault;
    cardClick()})