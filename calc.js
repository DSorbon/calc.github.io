function createFormCalc (){
        let form = document.createElement('div');
        form.classList.add('form');

        form.innerHTML = `
        <label class="lbl"></label><br>
        <input class="output" type="text" value="sadsadsa"><br>

        <button class="btn btn1" id="backclear">-></button>
        <button class="btn btn1" id="clear">C</button>
        <button class="btn btn1" id="operator">%</button>
        <button class="btn btn1" id="operator">/</button><br>

        <button class="btn btn1" id="num">7</button>
        <button class="btn btn1" id="num">8</button>
        <button class="btn btn1" id="num">9</button>
        <button class="btn btn1" id="operator">*</button><br>

        <button class="btn btn1" id="num">4</button>
        <button class="btn btn1" id="num">5</button>
        <button class="btn btn1" id="num">6</button>
        <button class="btn btn1" id="operator">-</button><br>

        <button class="btn btn1" id="num">1</button>
        <button class="btn btn1" id="num">2</button>
        <button class="btn btn1" id="num">3</button>
        <button class="btn btn1" id="operator">+</button><br>

        <button class="btn btn1" id="num">0</button>
        <button class="btnm" id="operator">=</button>
         `;
         document.querySelector('.app').appendChild(form);
};
createFormCalc()

function calc(){
    var ad = document.querySelector('.output')
    var numb = document.querySelectorAll('#num')
    ad.value+=numb;
}
document.querySelector('#num').addEventListener("click", calc)