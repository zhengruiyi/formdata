var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

/* START HERE */

// Sample of how to loop over the formData
for(let i=0; i<formData.length; i++){

  // Check your dev tools console for what the items in formData have
  // console.log(formData[i])

  // Creating a form input and setting the type and placeholder attributes
  let input = document.createElement("input")
  let select = document.createElement("select")
  if(formData[i].type !== "select"){
    input.type = formData[i].type
    input.placeholder = formData[i].label
    fill.appendChild(input)
  }else{
    select.type = formData[i].type;
    select.placeholder = formData[i].label
    fill.appendChild(select)
    let options = document.createElement("option")
    options.textContent = formData[i].label;
    select.appendChild(options);
    for(let j = 0; j < formData[i].options.length; j++){
      options = document.createElement("option")
      select.appendChild(options)
      options.textContent = formData[i].options[j].label;
    }
  }
}
