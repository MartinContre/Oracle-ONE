const input_txt = document.getElementById("input_txt");
const btn_encrypt = document.getElementById("encrypt");
const btn_decrypt = document.getElementById("decrypt");
const no_content_msg = document.getElementById("no_content");
const btn_copy = document.getElementById("copybtn");
const text_encrypt = document.getElementById("text_encrypt");

const ENCRYPT_MAP = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

function encrypt() {
    text_encrypt.textContent = "";
    let msg = input_txt.value.toLowerCase().replace(/[^\w\s]/gi, '');

    input_txt.value = msg;
    
    let array_text = msg.split("").map((char) => ENCRYPT_MAP[char] || char);

    let encrypt_string = array_text.join("");
    text_encrypt.textContent = encrypt_string;
    checkOut(encrypt_string);
}

function decryptString(text) {
    return text.replace(/ai/g, "a")
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function decrypt() {
    text_encrypt.textContent = "";
    let decrypt_msg = input_txt.value;

    if (/ai|enter|imes|ober|ufat/.test(decrypt_msg)) {
            let array_decrypt = decrypt_msg.split(" ").map(decryptString);
            let derypt_string = array_decrypt.join(" ");
            text_encrypt.textContent = derypt_string;
            checkOut(derypt_string);
    } else {
        no_content_msg.textContent = "La cadena no esta encriptada";
        no_content_msg.style.display = "flex";
        btn_copy.style.display = "none";
    }
}

function checkOut(cadena) {
    if(cadena) {
        no_content_msg.style.display = "none"
        btn_copy.style.display = "block";
    }
}

function copyTxt() {
    let txtCopy = text_encrypt.textContent;
    navigator.clipboard.writeText(txtCopy)
}

input_txt.addEventListener('input', () => {
    if (input_txt.value === '') {
      text_encrypt.textContent = '';
      no_content_msg.style.display = "flex"
      btn_copy.style.display = "none";
    }
  });

btn_encrypt.onclick = encrypt;
btn_decrypt.onclick = decrypt;
btn_copy.onclick = copyTxt;
