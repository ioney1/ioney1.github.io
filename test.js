//create constructor for coding languages
function Language(skills) {
  this.skills = skills;
}

//function for popup HTML
Language.prototype.popup = function () {
  //popup div
  let output = `<div class="skills-popup" style="position:absolute;">`;

  //new div for each technology in language group
  for (let i = 0; i < this.skills.length; i++){

    output += `
    <div class="d-flex flex-row align-items-center">
      <p class="col-4">${this.skills[i][0]}</p>
      <div class="col-8 progress">
        <div class="progress-bar" style="width:${this.skills[i][1]}%; background-color: white;"></div>
      </div>
    </div>`;

  };

  //closing tag for popup div 
  output += `
  </div>`;

  return output;
}

//create objects for each language using constructor
const lHTML = new Language([["Pure HTML", 76], ["Bootstrap", 30]]);
const lCSS = new Language([["Pure CSS", 76], ["SASS", 20]]);
const lJS = new Language([["JavaScript", 60], ["jQuery", 30]]);

console.log(typeof lHTML.popup())



