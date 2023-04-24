document.getElementById("getSchemeBtn").addEventListener("click", function () {
  const mode = document.querySelector("select").value;
  const seed = document.querySelector("input").value.slice(1);

  setColorScheme(mode, seed);
});

function setColorScheme(mode, seed) {
  fetch(`https://www.thecolorapi.com/scheme?mode=${mode}&hex=${seed}`)
    .then((request) => request.json())
    .then((data) => {
      schemesHex = data.colors.map(function (color) {
        return color.hex.value;
      });
      setSchemeHtml(schemesHex);
    });
}

function setSchemeHtml(schemesHex) {
  console.log(document.getElementById("color-schemes"));
  document.getElementById("color-schemes").innerHTML = `
        <style>

            .strips {
                height: 300px;
            }

            #strip1{
                background: ${schemesHex[0]};
            }
            
            #strip2{
                background: ${schemesHex[1]};
            }
            
            #strip3{
                background: ${schemesHex[2]};
            }
            
            #strip4{
                background: ${schemesHex[3]};
            }
            
            #strip5{
                background: ${schemesHex[4]};
            }
        </style>

        <div class="color-strip"><div class="strips" id="strip1" data-hex="${schemesHex[0]}"></div><p data-hex="${schemesHex[0]}">${schemesHex[0]}</p></div>
        <div class="color-strip"> <div class="strips" id="strip2" data-hex="${schemesHex[1]}"></div><p data-hex="${schemesHex[1]}">${schemesHex[1]}</p></div>
        <div class="color-strip"> <div class="strips" id="strip3" data-hex="${schemesHex[2]}"></div><p data-hex="${schemesHex[2]}">${schemesHex[2]}</p></div>
        <div class="color-strip"> <div class="strips" id="strip4" data-hex="${schemesHex[3]}"></div><p data-hex="${schemesHex[3]}">${schemesHex[3]}</p></div>
        <div class="color-strip"> <div class="strips" id="strip5" data-hex="${schemesHex[4]}"></div><p data-hex="${schemesHex[4]}">${schemesHex[4]}</p></div>
`;
}
