function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

var deck = [
    new card ('The Fool','', '000fool'),
    new card ('The Magician','','001magician'),
    new card ('The High Priestess','','002highpriestess'),
    new card ('The Empress','','003enoress'),
    new card ('The Emperor','','004emperor'),
    new card ('The Hierophant','','005hierophant'),
    new card ('The Lovers','','006lovers'),
    new card ('The Chariot','','007chariot'),
    new card ('Justice','','008justice'),
    new card ('The Hermit','','009hermit'),
    new card ('Wheel of Fortune','', '010fortune'),
    new card ('Strength','','011strength'),
    new card ('The Hanged Man','','012hanged'),
    new card ('Death','','013death'),
    new card ('Temperance','','014temperance'),
    new card ('The Devil','','015devil'),
    new card ('The Tower','','016tower'),
    new card ('The Star','','017star'),
    new card ('The Moon','','018moon'),
    new card ('The Sun','','019sun'),
    new card ('Judgement','','020judgement'),
    new card ('The World','','021world'),
    new card ('Ace of Cups','','cups001'),
    new card ('Two of Cups','','cups002'),
    new card ('Three of Cups','','cups003'),
    new card ('Four of Cups','','cups004'),
    new card ('Five of Cups','','cups005'),
    new card ('Six of Cups','','cups006'),
    new card ('Seven of Cups','','cups007'),
    new card ('Eight of Cups','','cups008'),
    new card ('Nine of Cups','','cups009'),
    new card ('Ten of Cups','','cups010'),
    new card ('Page of Cups','','cups011'),
    new card ('Knight of Cups','','cups012'),
    new card ('Queen of Cups','','cups013'),
    new card ('King of Cups','','cups014'),
    new card ('Ace of Pentacles','','pent001'),
    new card ('Two of Pentacles','','pent002'),
    new card ('Three of Pentacles','','pent003'),
    new card ('Four of Pentacles','','pent004'),
    new card ('Five of Pentacles','','pent005'),
    new card ('Six of Pentacles','','pent006'),
    new card ('Seven of Pentacles','','pent007'),
    new card ('Eight of Pentacles','','pent008'),
    new card ('Nine of Pentacles','','pent009'),
    new card ('Ten of Pentacles','','pent010'),
    new card ('Page of Pentacles','','pent011'),
    new card ('Knight of Pentacles','','pent012'),
    new card ('Queen of Pentacles','','pent013'),
    new card ('King of Pentacles','','pent014'),
    new card ('Ace of Swords','','sword001'),
    new card ('Two of Swords','','sword002'),
    new card ('Three of Swords','','sword003'),
    new card ('Four of Swords','','sword004'),
    new card ('Five of Swords','','sword005'),
    new card ('Six of Swords','','sword006'),
    new card ('Seven of Swords','','sword007'),
    new card ('Eight of Swords','','sword008'),
    new card ('Nine of Swords','','sword009'),
    new card ('Ten of Swords','','sword010'),
    new card ('Page of Swords','','sword011'),
    new card ('Knight of Swords','','sword012'),
    new card ('Queen of Swords','','sword013'),
    new card ('King of Swords','','sword014'),
    new card ('Ace of Wands','','wands001'),
    new card ('Two of Wands','','wands002'),
    new card ('Three of Wands','','wands003'),
    new card ('Four of Wands','','wands004'),
    new card ('Five of Wands','','wands005'),
    new card ('Six of Wands','','wands006'),
    new card ('Seven of Wands','','wands007'),
    new card ('Eight of Wands','','wands008'),
    new card ('Nine of Wands','','wands009'),
    new card ('Ten of Wands','','wands010'),
    new card ('Page of Wands','','wands011'),
    new card ('Knight of Wands','','wands012'),
    new card ('Queen of Wands','','wands013'),
    new card ('King of Wands','','wands014'),
    
]

function getRandom(num){
    var randomnumber = 
    Math.floor(Math.random() * num);
    return randomnumber;

}

document.getElementById ("draw").onclick = function() {
    var index = getRandom(78);
    var currentCard = deck[index];


document.getElementById("display").innerHTML = '<img src = "TWU Tarot/' + 
  currentCard.image + '.png"><h3>' +
  currentCard.name + '</h3><p>' +
  currentCard.description + '</p>';
};



var underline = document.getElementById("underline");
window.addEventListener("load", (event) => {
      underline.style.height = "15px";
});