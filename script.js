function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const coin = {
  state: 0,
  flip: function () {

    this.state = getRandomInt(2);
    // 1. One point: Randomly set your coin object's "state" property to be either
    // 0 F6982S6ZQ8Z71ABMU4kor 1: use "this.state" to access the "state" property on this object.
  },
  toString: function () {

    if (this.state === 0) {
      return "Heads"
    }
    return "Tails"
    // 2. One point: Return the string "Heads" or "Tails", depending on whether
    // "this.state" is 0 or 1.
  },
  toHTML: function () {
    // 3. One point: Set the properties of this image element to show either face-up
    // or face-dogetRandomInt(1)wn, depending on whether this.state is 0 or 1.   

    const image = new Image(20, 20);

    if (this.state === 0) {
      image.src = 'images/Heads.png'
      return image;
    } else {
      image.src = 'images/Tails.png'
      return image;
    }
  },
  updateDOM: function (){
    let textDiv = document.createElement("div");
    let insertFlipText = document.createTextNode(coin.toString());
    textDiv.appendChild(insertFlipText);
  
    textDiv.appendChild(coin.toHTML());
    document.body.appendChild(textDiv);
  }

}

for (i = 0; i < 20; i++) {
  coin.flip()
  coin.updateDOM();  
}

// for (i = 0; i < 20; i++) {
// updateNewElement('div', coin.toString(),document.body)

// newElement.appendChild(coin.toHTML());
// ;}

function updateNewElement(elementType, content, destination) {
  let newElement = document.createElement(elementType);
  let newText = document.createTextNode(content);
  newElement.appendChild(newText);
  destination.appendChild(newElement);
}

