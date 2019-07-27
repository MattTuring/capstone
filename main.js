var headers =
[
"Blockchain",
"Centralised versus decentralised systems",
"Block",
"Mining",
"Cryptocurreny",
"DApp"
]
var paragraphs = ["It is a record system for data. All data is defined at the start of the chain and rules for issuing data. Data ownership can be transfered to new owners, but new data cannot be created. As of now, all transactions pertaining to the data are public (with one or two exceptions).","A centralised system is one in which a central controller exercises control over the lower-level components of the system directly or through the use of a power hierarchy. <br/> <br/>A decentralised system, on the other hand, is one in which complex behaviour emerges through the work of lower level components operating on local information, not the instructions of any commanding influence.","A block is a batch of transactions grouped together into a package, the blockchain network takes in the bloack and adds it onto the chain of previous transactions to update the blockchain.","The process of adding the block of transactions ot chain as well as issuing more currecny in exchange for someone adding transactions to the chain.","Each blockchain holds a native asset, generally known as a cryptocurreny. Every cryptocurreny has a unique purpose, design, or consensus algorithm (the rules used to do the accounting.)","DApp is an abbreviated form for decentralized application. A DApp has its backend code running on a decentralized peer-to-peer network. Contrast this with an app where the backend code is running on centralized servers."]

var slideNumber = 0


function arrowRight() {
  if (slideNumber <= 5) {
document.getElementById('headers').innerHTML = headers[slideNumber];
document.getElementById('paragraphs').innerHTML = paragraphs[slideNumber];
slideNumber = slideNumber + 1; } else {
  {
    slideNumber = 0;
    document.getElementById('headers').innerHTML = headers[slideNumber];
    document.getElementById('paragraphs').innerHTML = paragraphs[slideNumber];
  }
}

}

function arrowLeft() {
  if (slideNumber >= 0) {
  document.getElementById('headers').innerHTML = headers[slideNumber];
  document.getElementById('paragraphs').innerHTML = paragraphs[slideNumber];
  slideNumber = slideNumber - 1; } else {
    slideNumber = 5;
    document.getElementById('headers').innerHTML = headers[slideNumber];
    document.getElementById('paragraphs').innerHTML = paragraphs[slideNumber];
  }
}
