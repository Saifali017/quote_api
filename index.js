AOS.init();
const qotes = document.getElementById("quotes")
const author = document.getElementById("author")
const newquote = document.getElementById("newquote")
const tweet = document.getElementById("tweet")

let realdata = "";
let quotesdata="";

const tweetnow=()=>{
    let tpost=`https://twitter.com/intent/tweet?text=${quotesdata.text}`;
    window.open(tpost);
}

const getnewquote = () => {
    let rnum = Math.floor(Math.random() * 10)
    quotesdata=realdata[rnum];
    qotes.innerText = `${realdata[rnum].text}`
    quotesdata.author === null
    ?(author.innerText= "unknown")
    :(author.innerText = `${realdata[rnum].author}`)
    
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realdata = await data.json();
        getnewquote();
       
    } catch (error) {}
}
tweet.addEventListener("click",tweetnow);
newquote.addEventListener("click",getnewquote);
getQuotes();