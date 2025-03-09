window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script132 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [135, 135, 135];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl1_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script133 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [135, 135, 135];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl2_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script134 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [135, 135, 135];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl3_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script135 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [210, 110, 210];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl4_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script136 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [175, 175, 125];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl5_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script137 = function()
{
  const inputs = document.querySelectorAll('.acc-textinput');

// Define an array with maximum character lengths for each input field
const maxLengths = [270, 270];

inputs.forEach((input, index) => {
    // Set maxlength based on the index
    if (index < maxLengths.length) {
        input.setAttribute('maxlength', maxLengths[index]);
    }

    // Define the Storyline variable name
    const storylineVar = `sl6_charCount${index + 1}`;

    // Add event listener to track input
    input.addEventListener('input', () => {
        const charCount = input.value.length; // Get character count
        setVar(storylineVar, charCount); // Update Storyline variable
    });
});

}

window.Script138 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script139 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script140 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script141 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script142 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script143 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script144 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script145 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script146 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script147 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script148 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script149 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script150 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script151 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script152 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script153 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script154 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script155 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script156 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script157 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script158 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script159 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script160 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script161 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script162 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script163 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script164 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script165 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script166 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script167 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script168 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script169 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script170 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script171 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script172 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script173 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script174 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script175 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script176 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
Question1 = player.GetVar("P1_Q1");
Question2 = player.GetVar("P1_Q2");
Question3 = player.GetVar("P1_Q3");
Question4 = player.GetVar("P2_Q1");
Question5 = player.GetVar("P2_Q2");
Question6 = player.GetVar("P2_Q3");
Question7 = player.GetVar("P3_Q1");
Question8 = player.GetVar("P3_Q2");
Question9 = player.GetVar("P3_Q3");
Question10 = player.GetVar("P4_Q1");
Question11 = player.GetVar("P4_Q2");
Question12 = player.GetVar("P4_Q3");
Question13 = player.GetVar("P5_Q1");
Question14 = player.GetVar("P5_Q2");
Question15 = player.GetVar("P5_Q3");
Question16 = player.GetVar("P6_Q1");
Question17 = player.GetVar("P6_Q2");

Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'SBS.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const Q1Field = form.getTextField('field1');
  const Q2Field = form.getTextField('field2');
  const Q3Field = form.getTextField('field3');
  const Q4Field = form.getTextField('field4');
  const Q5Field = form.getTextField('field5');
  const Q6Field = form.getTextField('field6');
  const Q7Field = form.getTextField('field7');
  const Q8Field = form.getTextField('field8');
  const Q9Field = form.getTextField('field9');
  const Q10Field = form.getTextField('field10');
  const Q11Field = form.getTextField('field11');
  const Q12Field = form.getTextField('field12');
  const Q13Field = form.getTextField('field13');
  const Q14Field = form.getTextField('field14');
  const Q15Field = form.getTextField('field15');
  const Q16Field = form.getTextField('field16');
  const Q17Field = form.getTextField('field17');  
  
//Fill in form
  curDate.setText(date);
  Q1Field.setText(Question1);
  Q2Field.setText(Question2);
  Q3Field.setText(Question3);
  Q4Field.setText(Question4);
  Q5Field.setText(Question5);
  Q6Field.setText(Question6);
  Q7Field.setText(Question7);
  Q8Field.setText(Question8);
  Q9Field.setText(Question9);
  Q10Field.setText(Question10);
  Q11Field.setText(Question11);
  Q12Field.setText(Question12);
  Q13Field.setText(Question13);
  Q14Field.setText(Question14);
  Q15Field.setText(Question15);
  Q16Field.setText(Question16);
  Q17Field.setText(Question17);  
  var filename = "GPS.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

window.Script177 = function()
{
  //Retrieve Player Variables

var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); 
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;

var player = GetPlayer();
E1Q1R1 = player.GetVar("S1Q1R1");
E1Q1R2 = player.GetVar("S1Q1R2");
E1Q1R3 = player.GetVar("S1Q1R3");
E1Q1R4 = player.GetVar("S1Q1R4");
E1Q1R5 = player.GetVar("S1Q1R5");
E1Q2R1 = player.GetVar("S1Q2R1");
E1Q2R2 = player.GetVar("S1Q2R2");
E1Q2R3 = player.GetVar("S1Q2R3");
E1Q2R4 = player.GetVar("S1Q2R4");
E1Q2R5 = player.GetVar("S1Q2R5");
E1Q3R1 = player.GetVar("S1Q3R1");
E1Q3R2 = player.GetVar("S1Q3R2");
E1Q3R3 = player.GetVar("S1Q3R3");
E1Q3R4 = player.GetVar("S1Q3R4");
E1Q3R5 = player.GetVar("S1Q3R5");
E1Q4R1 = player.GetVar("S1Q4R1");
E1Q4R2 = player.GetVar("S1Q4R2");
E1Q4R3 = player.GetVar("S1Q4R3");
E1Q4R4 = player.GetVar("S1Q4R4");
E1Q4R5 = player.GetVar("S1Q4R5");
E1Q5R1 = player.GetVar("S1Q5R1");
E1Q5R2 = player.GetVar("S1Q5R2");
E1Q5R3 = player.GetVar("S1Q5R3");
E1Q5R4 = player.GetVar("S1Q5R4");
E1Q5R5 = player.GetVar("S1Q5R5");
E1Q6R1 = player.GetVar("S1Q6R1");
E1Q6R2 = player.GetVar("S1Q6R2");
E1Q6R3 = player.GetVar("S1Q6R3");
E1Q6R4 = player.GetVar("S1Q6R4");
E1Q6R5 = player.GetVar("S1Q6R5");
E1Q7R1 = player.GetVar("S1Q7R1");
E1Q7R2 = player.GetVar("S1Q7R2");
E1Q7R3 = player.GetVar("S1Q7R3");
E1Q7R4 = player.GetVar("S1Q7R4");
E1Q7R5 = player.GetVar("S1Q7R5");
E1Q8R1 = player.GetVar("S1Q8R1");
E1Q8R2 = player.GetVar("S1Q8R2");
E1Q8R3 = player.GetVar("S1Q8R3");
E1Q8R4 = player.GetVar("S1Q8R4");
E1Q8R5 = player.GetVar("S1Q8R5");
E1Q9R1 = player.GetVar("S1Q9R1");
E1Q9R2 = player.GetVar("S1Q9R2");
E1Q9R3 = player.GetVar("S1Q9R3");
E1Q9R4 = player.GetVar("S1Q9R4");
E1Q9R5 = player.GetVar("S1Q9R5");
E1Q10R1 = player.GetVar("S1Q10R1");
E1Q10R2 = player.GetVar("S1Q10R2");
E1Q10R3 = player.GetVar("S1Q10R3");
E1Q10R4 = player.GetVar("S1Q10R4");
E1Q10R5 = player.GetVar("S1Q10R5");
E2Q1R1 = player.GetVar("S2Q1R1");
E2Q1R2 = player.GetVar("S2Q1R2");
E2Q1R3 = player.GetVar("S2Q1R3");
E2Q1R4 = player.GetVar("S2Q1R4");
E2Q1R5 = player.GetVar("S2Q1R5");
E2Q2R1 = player.GetVar("S2Q2R1");
E2Q2R2 = player.GetVar("S2Q2R2");
E2Q2R3 = player.GetVar("S2Q2R3");
E2Q2R4 = player.GetVar("S2Q2R4");
E2Q2R5 = player.GetVar("S2Q2R5");
E2Q3R1 = player.GetVar("S2Q3R1");
E2Q3R2 = player.GetVar("S2Q3R2");
E2Q3R3 = player.GetVar("S2Q3R3");
E2Q3R4 = player.GetVar("S2Q3R4");
E2Q3R5 = player.GetVar("S2Q3R5");
E2Q4R1 = player.GetVar("S2Q4R1");
E2Q4R2 = player.GetVar("S2Q4R2");
E2Q4R3 = player.GetVar("S2Q4R3");
E2Q4R4 = player.GetVar("S2Q4R4");
E2Q4R5 = player.GetVar("S2Q4R5");
E2Q5R1 = player.GetVar("S2Q5R1");
E2Q5R2 = player.GetVar("S2Q5R2");
E2Q5R3 = player.GetVar("S2Q5R3");
E2Q5R4 = player.GetVar("S2Q5R4");
E2Q5R5 = player.GetVar("S2Q5R5");


Constructpdf();

async function Constructpdf() {
//Dynamically load pdf-lib JavaScript module
  await loadMods();
//Call the fillForm asynch function
  await fillForm();
}
async function loadMods() {
await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
}

async function fillForm() {
//Read pdf form
  const { PDFDocument } = PDFLib;
  const formUrl = 'EVA.pdf';
  const formPdfBytes = await fetch(formUrl).then (res => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(formPdfBytes);
  const form = pdfDoc.getForm();
//Get field names
  const curDate = form.getTextField("Date");
  const E1Q1R1F = form.getTextField('S1-Q1R1');
  const E1Q1R2F = form.getTextField('S1-Q1R2');
  const E1Q1R3F = form.getTextField('S1-Q1R3');
  const E1Q1R4F = form.getTextField('S1-Q1R4');
  const E1Q1R5F = form.getTextField('S1-Q1R5');
  const E1Q2R1F = form.getTextField('S1-Q2R1');
  const E1Q2R2F = form.getTextField('S1-Q2R2');
  const E1Q2R3F = form.getTextField('S1-Q2R3');
  const E1Q2R4F = form.getTextField('S1-Q2R4');
  const E1Q2R5F = form.getTextField('S1-Q2R5');
  const E1Q3R1F = form.getTextField('S1-Q3R1');
  const E1Q3R2F = form.getTextField('S1-Q3R2');
  const E1Q3R3F = form.getTextField('S1-Q3R3');
  const E1Q3R4F = form.getTextField('S1-Q3R4');
  const E1Q3R5F = form.getTextField('S1-Q3R5');
  const E1Q4R1F = form.getTextField('S1-Q4R1');
  const E1Q4R2F = form.getTextField('S1-Q4R2');
  const E1Q4R3F = form.getTextField('S1-Q4R3');
  const E1Q4R4F = form.getTextField('S1-Q4R4');
  const E1Q4R5F = form.getTextField('S1-Q4R5');
  const E1Q5R1F = form.getTextField('S1-Q5R1');
  const E1Q5R2F = form.getTextField('S1-Q5R2');
  const E1Q5R3F = form.getTextField('S1-Q5R3');
  const E1Q5R4F = form.getTextField('S1-Q5R4');
  const E1Q5R5F = form.getTextField('S1-Q5R5');
  const E1Q6R1F = form.getTextField('S1-Q6R1');
  const E1Q6R2F = form.getTextField('S1-Q6R2');
  const E1Q6R3F = form.getTextField('S1-Q6R3');
  const E1Q6R4F = form.getTextField('S1-Q6R4');
  const E1Q6R5F = form.getTextField('S1-Q6R5');
  const E1Q7R1F = form.getTextField('S1-Q7R1');
  const E1Q7R2F = form.getTextField('S1-Q7R2');
  const E1Q7R3F = form.getTextField('S1-Q7R3');
  const E1Q7R4F = form.getTextField('S1-Q7R4');
  const E1Q7R5F = form.getTextField('S1-Q7R5');
  const E1Q8R1F = form.getTextField('S1-Q8R1');
  const E1Q8R2F = form.getTextField('S1-Q8R2');
  const E1Q8R3F = form.getTextField('S1-Q8R3');
  const E1Q8R4F = form.getTextField('S1-Q8R4');
  const E1Q8R5F = form.getTextField('S1-Q8R5');
  const E1Q9R1F = form.getTextField('S1-Q9R1');
  const E1Q9R2F = form.getTextField('S1-Q9R2');
  const E1Q9R3F = form.getTextField('S1-Q9R3');
  const E1Q9R4F = form.getTextField('S1-Q9R4');
  const E1Q9R5F = form.getTextField('S1-Q9R5');  
  const E1Q10R1F = form.getTextField('S1-Q10R1');
  const E1Q10R2F = form.getTextField('S1-Q10R2');
  const E1Q10R3F = form.getTextField('S1-Q10R3');
  const E1Q10R4F = form.getTextField('S1-Q10R4');
  const E1Q10R5F = form.getTextField('S1-Q10R5');
  const E2Q1R1F = form.getTextField('S2-Q1R1');
  const E2Q1R2F = form.getTextField('S2-Q1R2');
  const E2Q1R3F = form.getTextField('S2-Q1R3');
  const E2Q1R4F = form.getTextField('S2-Q1R4');
  const E2Q1R5F = form.getTextField('S2-Q1R5');
  const E2Q2R1F = form.getTextField('S2-Q2R1');
  const E2Q2R2F = form.getTextField('S2-Q2R2');
  const E2Q2R3F = form.getTextField('S2-Q2R3');
  const E2Q2R4F = form.getTextField('S2-Q2R4');
  const E2Q2R5F = form.getTextField('S2-Q2R5');
  const E2Q3R1F = form.getTextField('S2-Q3R1');
  const E2Q3R2F = form.getTextField('S2-Q3R2');
  const E2Q3R3F = form.getTextField('S2-Q3R3');
  const E2Q3R4F = form.getTextField('S2-Q3R4');
  const E2Q3R5F = form.getTextField('S2-Q3R5');
  const E2Q4R1F = form.getTextField('S2-Q4R1');
  const E2Q4R2F = form.getTextField('S2-Q4R2');
  const E2Q4R3F = form.getTextField('S2-Q4R3');
  const E2Q4R4F = form.getTextField('S2-Q4R4');
  const E2Q4R5F = form.getTextField('S2-Q4R5');
  const E2Q5R1F = form.getTextField('S2-Q5R1');
  const E2Q5R2F = form.getTextField('S2-Q5R2');
  const E2Q5R3F = form.getTextField('S2-Q5R3');
  const E2Q5R4F = form.getTextField('S2-Q5R4');
  const E2Q5R5F = form.getTextField('S2-Q5R5');
  
  
//Fill in form
  curDate.setText(date);
  E1Q1R1F.setText(E1Q1R1);
  E1Q1R2F.setText(E1Q1R2);
  E1Q1R3F.setText(E1Q1R3);
  E1Q1R4F.setText(E1Q1R4);
  E1Q1R5F.setText(E1Q1R5);
  E1Q2R1F.setText(E1Q2R1);
  E1Q2R2F.setText(E1Q2R2);
  E1Q2R3F.setText(E1Q2R3);
  E1Q2R4F.setText(E1Q2R4);
  E1Q2R5F.setText(E1Q2R5);  
  E1Q3R1F.setText(E1Q3R1);
  E1Q3R2F.setText(E1Q3R2);
  E1Q3R3F.setText(E1Q3R3);
  E1Q3R4F.setText(E1Q3R4);
  E1Q3R5F.setText(E1Q3R5);  
  E1Q4R1F.setText(E1Q4R1);
  E1Q4R2F.setText(E1Q4R2);
  E1Q4R3F.setText(E1Q4R3);
  E1Q4R4F.setText(E1Q4R4);
  E1Q4R5F.setText(E1Q4R5);  
  E1Q5R1F.setText(E1Q5R1);
  E1Q5R2F.setText(E1Q5R2);
  E1Q5R3F.setText(E1Q5R3);
  E1Q5R4F.setText(E1Q5R4);
  E1Q5R5F.setText(E1Q5R5);  
  E1Q6R1F.setText(E1Q6R1);
  E1Q6R2F.setText(E1Q6R2);
  E1Q6R3F.setText(E1Q6R3);
  E1Q6R4F.setText(E1Q6R4);
  E1Q6R5F.setText(E1Q6R5);  
  E1Q7R1F.setText(E1Q7R1);
  E1Q7R2F.setText(E1Q7R2);
  E1Q7R3F.setText(E1Q7R3);
  E1Q7R4F.setText(E1Q7R4);
  E1Q7R5F.setText(E1Q7R5);  
  E1Q8R1F.setText(E1Q8R1);
  E1Q8R2F.setText(E1Q8R2);
  E1Q8R3F.setText(E1Q8R3);
  E1Q8R4F.setText(E1Q8R4);
  E1Q8R5F.setText(E1Q8R5);  
  E1Q9R1F.setText(E1Q9R1);
  E1Q9R2F.setText(E1Q9R2);
  E1Q9R3F.setText(E1Q9R3);
  E1Q9R4F.setText(E1Q9R4);
  E1Q9R5F.setText(E1Q9R5);  
  E1Q10R1F.setText(E1Q10R1);
  E1Q10R2F.setText(E1Q10R2);
  E1Q10R3F.setText(E1Q10R3);
  E1Q10R4F.setText(E1Q10R4);
  E1Q10R5F.setText(E1Q10R5);
  E2Q1R1F.setText(E2Q1R1);
  E2Q1R2F.setText(E2Q1R2);
  E2Q1R3F.setText(E2Q1R3);
  E2Q1R4F.setText(E2Q1R4);
  E2Q1R5F.setText(E2Q1R5);
  E2Q2R1F.setText(E2Q2R1);
  E2Q2R2F.setText(E2Q2R2);
  E2Q2R3F.setText(E2Q2R3);
  E2Q2R4F.setText(E2Q2R4);
  E2Q2R5F.setText(E2Q2R5);  
  E2Q3R1F.setText(E2Q3R1);
  E2Q3R2F.setText(E2Q3R2);
  E2Q3R3F.setText(E2Q3R3);
  E2Q3R4F.setText(E2Q3R4);
  E2Q3R5F.setText(E2Q3R5);  
  E2Q4R1F.setText(E2Q4R1);
  E2Q4R2F.setText(E2Q4R2);
  E2Q4R3F.setText(E2Q4R3);
  E2Q4R4F.setText(E2Q4R4);
  E2Q4R5F.setText(E2Q4R5);  
  E2Q5R1F.setText(E2Q5R1);
  E2Q5R2F.setText(E2Q5R2);
  E2Q5R3F.setText(E2Q5R3);
  E2Q5R4F.setText(E2Q5R4);
  E2Q5R5F.setText(E2Q5R5);
  
  var filename = "Evaluation.pdf"
//Save form
  const pdfBytes = await pdfDoc.save();
//Download the form
await import('https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js')
.then(({default: saveAs}) => {
  const blob = new Blob([pdfBytes], {type: 'application/octet-stream'});
  saveAs(blob, filename);
})
.catch((err) => {
  console.log(err);
});
  }
}

};
