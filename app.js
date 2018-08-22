document.getElementById('generate-name').addEventListener('submit',loadNames)


function loadNames(e){


e.preventDefault(e)

const country = document.querySelector('.country').value
const genre = document.querySelector('.genre').value
const amount = document.getElementById('quantity').value;


//Build the URl
let url = 'http://uinames.com/api/'

if( country !== ''){
  url += `?region=${country}&`


}
if( genre !== ''){
  url += `?gender=${genre}&`


}

if(amount !== ''){
    url += `amount=${amount}&`;

}



// Ajax Call
    const xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('GET', url, true );

    // Execute the function
    xhr.onload = function() {
         if(this.status === 200) {
              const names = JSON.parse( this.responseText );

              // Insert into the HTML

              let html = '<h2>Generated Names</h2>';
              html += '<ul class="list">';
              names.forEach(function(name){
                   html += `
                        <li>${name.name}</li>
                   `;
              });
              html += '</ul>';

              document.querySelector('#results').innerHTML = html;
         }
    }

    // Send the request
    xhr.send();



}
