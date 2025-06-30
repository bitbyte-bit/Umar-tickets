
const head=document.createElement('heder');
head.style.width = '100%';
head.style.textTransform='uppercase';
head.style.padding = '40px 0 20px 0';
head.style.display = 'flex';
head.style.flexDirection = 'column';
head.style.alignItems = 'center';
head.style.background = 'transparent';

// Gradient "umar technologies" text
const title = document.createElement('h1');
title.textContent = 'umar technologies';
title.style.fontSize = '2.5rem';
title.style.fontWeight = 'bold';
title.style.background = 'linear-gradient(90deg, #00c6ff, #0072ff, #ff6a00, #ffb347)';
title.style.webkitBackgroundClip = 'text';
title.style.webkitTextFillColor = 'transparent';
title.style.backgroundClip = 'text';
title.style.textFillColor = 'transparent';
title.style.margin = '0 0 24px 0';


const rotatingBorder = document.createElement('div');
rotatingBorder.style.display = 'flex';
rotatingBorder.style.alignItems = 'center';
rotatingBorder.style.justifyContent = 'center';
rotatingBorder.style.width = '350px';
rotatingBorder.style.height = '80px';
rotatingBorder.style.border = '4px solid';
rotatingBorder.style.borderImage = 'linear-gradient(135deg, #00c6ff, #ffb347, #ff6a00, #0072ff, #00c6ff) 1';
rotatingBorder.style.borderRadius = '20px';
rotatingBorder.style.marginBottom = '20px';
rotatingBorder.style.animation = 'spinBorder linear infinite';

const ticketText = document.createElement('span');
ticketText.textContent = 'asmin general meeting ticket';
ticketText.style.fontSize = '1.3rem';
ticketText.style.fontWeight = '600';
ticketText.style.letterSpacing = '1px';
ticketText.style.background = 'linear-gradient(90deg, #0072ff, #ff6a00)';
ticketText.style.webkitBackgroundClip = 'text';
ticketText.style.webkitTextFillColor = 'transparent';
ticketText.style.backgroundClip = 'text';
ticketText.style.textFillColor = 'transparent';

rotatingBorder.appendChild(ticketText);
head.appendChild(title);
head.appendChild(rotatingBorder);
document.body.prepend(head);

// Add keyframes for rotating border
const style = document.createElement('style');
style.textContent = `
@keyframes spinBorder {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
}
`;
document.head.appendChild(style);

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
label.className='popup';
label.textContent = 'Enter your WhatsApp number (with country code):';
label.style.marginBottom = '10px';

const input = document.createElement('input');
input.type = 'tel';
input.placeholder = '+256-744-759-181';
input.style.marginBottom = '10px';
input.style.padding = '8px';
input.style.fontSize = '16px';

const submitBtn = document.createElement('button');
submitBtn.textContent = 'Get Ticket';
submitBtn.className='tick';
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
button.textContent = 'click to receive your ticket';
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
    const message = encodeURIComponent(`Your ticket number is: ${randomNumber}`);
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
    window.open(url, '_blank');
};
let ticketGenerated = false;
let ticketNumber = null;

const alreadyPopup = document.createElement('div');
alreadyPopup.style.position = 'fixed';
alreadyPopup.style.top = '0';
alreadyPopup.style.left = '0';
alreadyPopup.style.width = '100vw';
alreadyPopup.style.height = '100vh';
alreadyPopup.style.background = 'rgba(0,0,0,0.5)';
alreadyPopup.style.display = 'none';
alreadyPopup.style.alignItems = 'center';
alreadyPopup.style.justifyContent = 'center';
alreadyPopup.style.zIndex = '2000';

const alreadyContent = document.createElement('div');
alreadyContent.style.background = '#fff';
alreadyContent.style.padding = '30px';
alreadyContent.style.borderRadius = '8px';
alreadyContent.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
alreadyContent.style.display = 'flex';
alreadyContent.style.flexDirection = 'column';
alreadyContent.style.alignItems = 'center';

const alreadyText = document.createElement('span');
alreadyText.textContent = 'You already have your ticket.';
alreadyText.style.fontSize = '18px';
alreadyText.style.marginBottom = '16px';

const closeBtn = document.createElement('button');
closeBtn.textContent = 'Close';
closeBtn.style.padding = '8px 16px';
closeBtn.onclick = function() {
    alreadyPopup.style.display = 'none';
};

alreadyContent.appendChild(alreadyText);
alreadyContent.appendChild(closeBtn);
alreadyPopup.appendChild(alreadyContent);
document.body.appendChild(alreadyPopup);

// Update button click handler
button.onclick = function () {
    if (!whatsappNumber) return;
    if (!ticketGenerated) {
        ticketNumber = Math.floor(Math.random() * 1000000); // 0 - 999999
        const message = encodeURIComponent(`Your ticket number is: ${ticketNumber}`);
        const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`;
        window.open(url, '_blank');
        ticketGenerated = true;
    } else {
        alreadyPopup.style.display = 'flex';
    }
};
