const language= document.getElementById("language");
for (const code in countries) {
    console.log(code)
    const option = document.createElement("option");
    option.innerHTML=`
    <option>${countries[code]}</option>
    `;
    language.appendChild(option)
}

