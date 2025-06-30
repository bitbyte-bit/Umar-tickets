
const popup = document.createElement('div');
popup.style.position = 'fixed';
popup.style.top = '0';
popup.style.left = '0';
popup.style.width = '100vw';
popup.style.height = '100vh';
popup.style.background = 'rgba(0,0,0,0.5)';
popup.style.display = 'flex';
popup.style.alignItems = 'center';
popup.style.justifyContent = 'center';
popup.style.zIndex = '1000';

const popupContent = document.createElement('div');
popupContent.style.background = '#fff';
popupContent.style.padding = '30px';
popupContent.style.borderRadius = '8px';
popupContent.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
popupContent.style.display = 'flex';
popupContent.style.flexDirection = 'column';
popupContent.style.alignItems = 'center';

const label = document.createElement('label');
label.textContent = 'Enter your WhatsApp number (with country code):';
label.style.marginBottom = '10px';

const input = document.createElement('input');
input.type = 'tel';
input.placeholder = '+1234567890';
input.style.marginBottom = '10px';
input.style.padding = '8px';
input.style.fontSize = '16px';

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
submitBtn.style.padding = '8px 16px';
submitBtn.style.fontSize = '16px';

popupContent.appendChild(label);
popupContent.appendChild(input);
popupContent.appendChild(submitBtn);
popup.appendChild(popupContent);
document.body.appendChild(popup);

let whatsappNumber = null;

// Main page content
const mainDiv = document.createElement('div');
mainDiv.style.display = 'flex';
mainDiv.style.flexDirection = 'column';
mainDiv.style.alignItems = 'center';
mainDiv.style.justifyContent = 'center';
mainDiv.style.height = '100vh';

const button = document.createElement('button');
button.textContent = 'rceive ticket';
button.style.padding = '16px 32px';
button.style.fontSize = '20px';
button.disabled = true;

mainDiv.appendChild(button);
document.body.appendChild(mainDiv);

// Handle popup submit
submitBtn.onclick = function () {
    const value = input.value.trim();
    if (!/^\+\d{8,15}$/.test(value)) {
        alert('Please enter a valid WhatsApp number with country code.');
        return;
    }
    whatsappNumber = value;
    popup.style.display = 'none';
    button.disabled = false;
};

// Handle button click
button.onclick = function () {
    if (!whatsappNumber) return;
    const randomNumber = Math.floor(Math.random() * 1000000); // 0 - 999999
    const message = encodeURIComponent(`Your ticket is: ${randomNumber}`);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    window.open(url, '_blank');
};