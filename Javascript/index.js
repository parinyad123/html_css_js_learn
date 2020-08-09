let content2 = document.getElementById('content-2'); // ทำให้ html ใช้ js ได้ ด้วย doc..getE..
let textHtml = '<b>MacOS</b>';
content2.innerHTML = textHtml;

let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');
function showMessage() {
    message.innerHTML = 'Time out';
}
// ทำให้ปุ่มทำงาน addEventListener(เหตุการณ์ , คำสั่ง)
// ไม่่ใช่ () ที่ showMessage  เพราะไม่ต้องการให้้ทำงานเลย จะทำงานเมื่อปุ่มถูกกด
discountButton.addEventListener('click',showMessage);