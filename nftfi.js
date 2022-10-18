document.addEventListener('keypress', logKey);

function logKey(e) {
  console.log("hey");

  const buttons = document.querySelector(".collapse-panels");

  const text = '<div tabindex="0" class="term-collapse-panel expanded lend"> <div class="title accent-color-background"> <div> <span>Hedge Calculator </span> </div> <svg width="12px" height="7px" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="chevron null"> <title>Fill 1 </title> <g id="chevron" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-294.000000, -3646.000000)" fill="currentColor" id="Fill-1"> <polygon transform="translate(300.000000, 3649.500000) rotate(-180.000000) translate(-300.000000, -3649.500000) " points="299.999919 3647.63284 305.207774 3653 306 3652.18354 300 3646 294 3652.18354 294.792226 3653"> </polygon> </g> </g> </svg> </div> <div class="collapse-content"> <div class="content"> <div class="form"> <div class="question">How much of the principal to hedge? </div> <div class="inline"> <div class="accent-color hedge-amount  amount-field"> <div class="currency-icon">&nbsp;% </div> <input aria-label="hedge" type="text" inputmode="decimal" maxlength="8" value=""> <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="cancel-icon link-color"> <path fill="currentColor" d="M9,0 C4.03647429,0 0,4.03713 0,9 C0,13.9628571 4.03713,18 9,18 C13.9628571,18 18,13.9628571 18,9 C18,4.03713 13.9628571,0 9,0 Z M9,16.1994857 C5.03026714,16.1994857 1.80051429,12.9697714 1.80051429,9 C1.80051429,5.03026714 5.03026714,1.80051429 9,1.80051429 C12.9697714,1.80051429 16.1994857,5.03026714 16.1994857,9 C16.1994857,12.9697714 12.9697714,16.1994857 9,16.1994857 Z M13.2363,6.03592714 L10.2722014,9 L13.2363,11.9640857 L11.9639571,13.2364286 L8.99987143,10.27233 L6.03579857,13.2364286 L4.76346857,11.9640857 L7.72668,9 L4.76260714,6.03592714 L6.03493714,4.76359714 L8.99987143,7.72767 L11.9639571,4.76359714 L13.2363,6.03592714 Z"> </path> </svg>  </div> <div class="premium-amount  amount-field" style="width:130%">  <p style="margin-top:6px;margin-bottom:3px">Hedging premium: 0.502 ETH</p><p style="margin:0px">Net loan profit: 0.502 ETH</p>   </div> </div> </div> </div> </div> </div>'
  buttons.insertAdjacentHTML('beforeend', text);

  const buttonsClone = buttons.cloneNode(true);
  buttonsClone.querySelector('.title').innerText = "Hedge Calculator";
    buttonsClone.querySelector('.title').style.marginTop = "-0.5rem";

  document.querySelector(".collapse-panels").appendChild(buttonsClone);
}