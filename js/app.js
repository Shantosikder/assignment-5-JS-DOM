let number = 0;
function getInput(inputId) {
	const getinputField = document.getElementById(inputId);
	const getinputString = getinputField.value;
	const getinput = parseFloat(getinputString);
	getinputField.value = "";
	return getinput;
}

function inputText(id){
    const getInputField = document.getElementById(id);
	const getInputString = getInputField.innerText;
	getInputField.value = "";
	return getInputString;
}

function row(elementText, calc) {
	const thead = document.getElementById("table-headerId");
	const tableR = document.createElement("tr");
	number++;
	tableR.innerHTML = `
<td>${number}</td>
<td>${elementText}</td>
<td>${calc} cm<sup>2</sup></td>
<td>${`<button id="calculate-btn-3" class="w-[110px] h-[40px] bg-[#1090D8] rounded-lg text-[15px] font-bold text-white text-center">Covert to m<sub>2</sub></button>`}</td>

`;
	thead.appendChild(tableR);
}

function randColor() {
	const color = "#" + Math.floor(Math.random() * 16543635).toString(16);
	return color;
}

//  Rnadom Colour Start
document.getElementById("card-1").addEventListener("mouseenter", function(){
    document.getElementById('card-1').style.backgroundColor = randColor();
    
});

document.getElementById("card-2").addEventListener("mouseenter", function(){
    document.getElementById('card-2').style.backgroundColor = randColor();
    
});
document.getElementById("card-3").addEventListener("mouseenter", function(){
    document.getElementById('card-3').style.backgroundColor = randColor();
    
});
document.getElementById("card-4").addEventListener("mouseenter", function(){
    document.getElementById('card-4').style.backgroundColor = randColor();
    
});
document.getElementById("card-5").addEventListener("mouseenter", function(){
    document.getElementById('card-5').style.backgroundColor = randColor();
    
});
document.getElementById("card-6").addEventListener("mouseenter", function(){
    document.getElementById('card-6').style.backgroundColor = randColor();
    
});
// Random Color End 
document.getElementById('btn-caculate-1').addEventListener('click', function(){
   const inputFieldOne =  getInput('frist-input');
   const inputFieldTwo =  getInput('second-input');
   const result = 0.5 * inputFieldOne * inputFieldTwo;
   const finalResult = result.toFixed(2);
   const elementText = inputText('card-header');
   row(elementText, finalResult);
});

document.getElementById('btn-caculate-2').addEventListener('click', function(){
   const inputFieldOne =  getInput('thInput');
   const inputFieldTwo =  getInput('frInput');
   const result = 0.5 * inputFieldOne * inputFieldTwo;
   const finalResult = result.toFixed(2);
   const elementText = inputText('cardHeader');
   row(elementText, finalResult);
});

document.getElementById('btn-caculate-3').addEventListener('click', function(){
   const inputFieldOne =  getInput('fiInput');
   const inputFieldTwo =  getInput('sixInput');
   const result = 0.5 * inputFieldOne * inputFieldTwo;
   const finalResult = result.toFixed(2);
   const elementText = inputText('cardheader-3');
   row(elementText, finalResult);
});
document.getElementById('btn-caculate-4').addEventListener('click', function(){
   const inputFieldOne =  getInput('sevInput');
   const inputFieldTwo =  getInput('eigInput');
   const result = 0.5 * inputFieldOne * inputFieldTwo;
   const finalResult = result.toFixed(2);
   const elementText = inputText('cardheader-4');
   row(elementText, finalResult);
});
document.getElementById('btn-caculate-5').addEventListener('click', function(){
   const inputFieldOne =  getInput('nineInput');
   const inputFieldTwo =  getInput('tenInput');
   const result = 0.5 * inputFieldOne * inputFieldTwo;
   const finalResult = result.toFixed(2);
   const elementText = inputText('cardheader-5');
   row(elementText, finalResult);
});
document.getElementById('btn-caculate-6').addEventListener('click', function(){
   const inputFieldOne =  getInput('eleInput');
   const inputFieldTwo =  getInput('twoeInput');
   const result = 0.5 * inputFieldOne * inputFieldTwo;
   const finalResult = result.toFixed(2);
   const elementText = inputText('cardheader-6');
   row(elementText, finalResult);
});

document.getElementById('btn-blog').addEventListener('click', function(){
window.location.href = '../question.html';
});


