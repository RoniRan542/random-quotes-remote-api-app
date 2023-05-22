document.addEventListener("DOMContentLoaded",() => {
  const quote = document.getElementById("text");
  const author = document.getElementById("author");
  const button = document.getElementById("new-quote");
  const colorSet = ["black", "white", "blue","yellow"];
  
  const getRandomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if(response.ok){
        quote.innerText = data.content;
        author.innerText = data.author;
    }else{
        quote.innerText = "An error occured";
          console.log(data);
    }
    const colorIdx = Math.floor(Math.random() * colorSet.length);
                                console.log(colorIdx);
    document.body.style.backgroundColor = colorSet[colorIdx];
  }
  button.addEventListener("click", getRandomQuote);

  // call updateQuote once when page loads
  getRandomQuote();
})
