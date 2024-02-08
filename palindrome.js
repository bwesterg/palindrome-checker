const checkButton = function check(){
    var inputText = document.getElementById("newWord").value;
    var cleaned = inputText.replace(/\W/g, '').toLowerCase();
    var reversed = cleaned.split('').reverse().join('');
    var myResult = document.getElementById("result");
    var myAnswer = document.getElementById("answer");


    if (cleaned === reversed){
        myAnswer.classList.remove("angrybox");
        myAnswer.classList.add("funbox");
        myResult.innerHTML = `"${inputText}" <span class="is">IS</span> a palindrome \n
            after removing non-alphanumeric symbols and converting to lowercase`;

    } else {
        myAnswer.classList.add("angrybox");
        myResult.innerHTML = `"${inputText}" is <span class="not">NOT</span> a palindrome`;
    }
};

const myBox = document.getElementById("my-box");
myBox.setAttribute("onclick","alert('blah');");
