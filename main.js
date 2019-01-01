let inner = document.getElementById('inner');
let input = document.getElementById('number');
let resultText = document.getElementById('resultText');

input.addEventListener('input', getFactFetch);
//***********************AJAX*********************************/

// function getFactAjax(){
//     let number = input.value;
//     let url = 'http://numbersapi.com/'+number;
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);

//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){
//             inner.style.display = 'block';
//             resultText.textContent = this.responseText;
//         }
//     }

//     xhr.send();
// }

//***********************Fetch*********************************/

function getFactFetch(){
    let number = input.value;
    let url = `http://numbersapi.com/${number}/year`
    fetch(url)
    .then(response => response.text())
    .then(data => {
        if(number != ''){
            inner.style.display = 'block';
            resultText.textContent = data;  
        } else {
            inner.style.display = 'none';
        }
    })
    .catch(error => console.log(error));
}
