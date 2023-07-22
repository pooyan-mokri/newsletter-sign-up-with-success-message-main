const submit = document.getElementById('submit');

submit.addEventListener('click', emailSubmition);

function emailSubmition(e) {
  e.preventDefault();
  const alert = document.querySelector('span.alert');
  const inputEmail = document.querySelector('#email');
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value.match(mailformat)) {
    const mainCard = document.querySelector('.card');
    mainCard.style.display = 'none';
    const confirmationCard = document.createElement('div');
    confirmationCard.classList.add('confirmation-card');
    confirmationCard.innerHTML = `
    <img src="./assets/images/icon-list.svg" alt=""  class="confirm-icon">
    <h1>Thanks for subscribing!</h1>
    <p>A confirmation email has been sent to <strong>${inputEmail.value}</strong>. 
      Please open it and click the button inside to confirm your subscription.
    </p>
    <div id="backToHome" onclick="backToHome()" class="btn">Dismiss Message</div>
    `;

    const main = document.getElementById('main');
    main.appendChild(confirmationCard);
    return;
  }
  inputEmail.classList.add('input-error');
  alert.style.display = 'inline-block';
  return false;
}

function backToHome() {
  document.querySelector('.confirmation-card').remove();
  document.querySelector('.card').style.display = 'flex';
}
