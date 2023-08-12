const pokemons =[
    {index:'1', name:'Bulbasaur',type:'Grass, poison',region:'Global',rarity:'4', evolution:'1'},
    {index:'2', name:'Ivysaur',type:'Grass, poison',region:'Global',rarity:'5',evolution:'2'},
    {index:'3', name:'Venusaur',type:'Grass, poison',region:'Global',rarity:'6',evolution:'3'},
    {index:'4', name:'Charmander',type:'Fire',region:'Global',rarity:'4',evolution:'1'},
    {index:'5', name:'Charmeleon',type:'Fire',region:'Global',rarity:'5',evolution:'2'},
    {index:'6', name:'Charizard',type:'Fire, fly',region:'Global',rarity:'6',evolution:'3'},

    {index:'7', name:'Squirtle',type:'Water',region:'Global',rarity:'4',evolution:'1'},
    {index:'8', name:'Wartortle',type:'Water',region:'Global',rarity:'5',evolution:'2'},
    {index:'9', name:'Blastoise',type:'Water',region:'Global',rarity:'6',evolution:'3'},
    {index:'10', name:'Caterpie',type:'Bug',region:'Global',rarity:'1',evolution:'1'},
    {index:'11', name:'Metapod',type:'Bug',region:'Global',rarity:'3',evolution:'2'},
    {index:'12', name:'Butterfree',type:'Bug, fly',region:'Global',rarity:'4',evolution:'3'},

    {index:'13', name:'Weedle',type:'Bug, poison',region:'Global',rarity:'1',evolution:'1'},
    {index:'14', name:'Kakuna',type:'Bug, poison',region:'Global',rarity:'3',evolution:'2'},
    {index:'15', name:'Beedrill',type:'Bug, poison',region:'Global',rarity:'4',evolution:'3'},
    {index:'16', name:'Pidgey',type:'Normal, fly',region:'Global',rarity:'1',evolution:'1'},
    {index:'17', name:'Pidgeotto',type:'Normal, fly',region:'Global',rarity:'3',evolution:'2'},
    {index:'18', name:'Pidgeot',type:'Normal, fly',region:'Global',rarity:'4',evolution:'3'},

    {index:'19', name:'Ratta',type:'Normal',region:'Global',rarity:'1',evolution:'1'},
    {index:'20', name:'Raticate',type:'Normal',region:'Global',rarity:'4',evolution:'2'},
    ]
const x = ["001","002","003","004","005","006","007","008","009"];
 var block =document.createElement("div");
 var temp = document.getElementById("temp");
 document.body.insertBefore(block, temp);
 

function searchNum(){
    var inputNum;
    inputNum = document.getElementById("myInputNum").value;
    inNum= Number(inputNum);
    var num =inNum.toString();
    
      if (isNaN(inputNum)) {
        i=document.createTextNode("only can input number");
        block.replaceChildren();
        block.appendChild(i);

      } else if (inputNum<0||inputNum>20) {
        o=document.createTextNode("out of range");
        block.replaceChildren();
        block.appendChild(o);
      } else if (inputNum==0){
        block.replaceChildren();
        
      } else if (x.includes(inputNum.toString()) ) {
        block.replaceChildren();
        p = document.createElement("img")
        p.src =`pokemon/${pokemons[inNum-1].index}.png`;
        p.alt =`image of pokemon #${pokemons[inNum-1].index}`

        n =document.createElement("div");
        n.textContent="name: " + pokemons[inNum-1].name;

        t =document.createElement("div");
        t.textContent="type: " + pokemons[inNum-1].type;

        r =document.createElement("div");
        r.textContent="region: " + pokemons[inNum-1].region;

        ra =document.createElement("div");
        ra.textContent="rarity: " + pokemons[inNum-1].rarity;

        e =document.createElement("div");
        e.textContent="evoltuion: " + pokemons[inNum-1].evolution;

        
        block.appendChild(p);
        block.appendChild(n);
        block.appendChild(t);
        block.appendChild(r);
        block.appendChild(ra);
        block.appendChild(e);
      } else {
       
        block.replaceChildren();
        ul=document.createElement("ul");
        
        block.appendChild(ul);
     for(i=0;i<pokemons.length;i++) {  
     if (pokemons[i].index.toString().includes(num)) {
       //console.log(i,pokemons[i].index.toString())
       b=document.createElement("li");

       p = document.createElement("img")
       p.src =`pokemon/${pokemons[i].index}.png`;
       p.alt =`image of pokemon #${pokemons[i].index}`;
 
         n =document.createElement("div");
         n.textContent="name: " + pokemons[i].name;
 
         t =document.createElement("div");
         t.textContent="type: " + pokemons[i].type;
 
         r =document.createElement("div");
         r.textContent="region: " + pokemons[i].region;
 
         ra =document.createElement("div");
         ra.textContent="rarity: " + pokemons[i].rarity;
 
         e =document.createElement("div");
         e.textContent="evoltuion: " + pokemons[i].evolution;
 
         
         b.appendChild(p);
         b.appendChild(n);
         b.appendChild(t);
         b.appendChild(r);
         b.appendChild(ra);
         b.appendChild(e);
        
         
         ul.appendChild(b);
         ul.style.listStyleType="none";
     }
 }


      }     
}

function searchPokemon(){
    var input;
    var inputNum2;
    input = document.getElementById("myInput").value;
    inputNum2 = parseFloat( document.getElementById("myInputNum").value);
    console.log(input);
   if (!isNaN(input)) {
    i2=document.createTextNode("only can input string");
    block.replaceChildren();
    block.appendChild(i2);
  } else if (input.length>20 || input.length<0) {
    o2=document.createTextNode("the character should less than 20 or more 0");
    block.replaceChildren();
    block.appendChild(o2);
  } else {

    block.replaceChildren();
    ul2=document.createElement("ul");
    for (i = 0; i < pokemons.length; i++) {
        if(pokemons[i].name.includes(input.toString())) {
          cs=document.createElement("li");

            p = document.createElement("img");
            p.src =`pokemon/${pokemons[i].index}.png`;
            p.alt =`image of pokemon #${pokemons[i].index}`;

            n =document.createElement("div");
            n.textContent="name: " + pokemons[i].name;
    
            t =document.createElement("div");
            t.textContent="type: " + pokemons[i].type;
    
            r =document.createElement("div");
            r.textContent="region: " + pokemons[i].region;
    
            ra =document.createElement("div");
            ra.textContent="rarity: " + pokemons[i].rarity;
    
            e =document.createElement("div");
            e.textContent="evoltuion: " + pokemons[i].evolution;
    
            
            cs.appendChild(p);
            cs.appendChild(n);
            cs.appendChild(t);
            cs.appendChild(r);
            cs.appendChild(ra);
            cs.appendChild(e);
            
            ul2.appendChild(cs);
            ul2.style.listStyleType="none";
            block.appendChild(ul2);
        }
           
        
    }

  }
  

  
}




