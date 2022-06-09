window.onload = () => {
  const btnEntrar = document.getElementById("entrar");
  const btnCadastro = document.getElementById("cadastrar");
  const btnFacebook = document.getElementById("facebook");
  const btnGoogle = document.getElementById("google");
  const btneye = document.querySelector(".lnr-eye");
  const inputEmail = document.querySelector(".email");
  const textEmail = document.getElementById("text-email");
  const inputEmailSignup = document.getElementById("emailSignup");
  const textEmailSignup = document.getElementById("text-email-signup");
  const inputCpf = document.getElementById("cpf");
  const textCpf = document.getElementById("cpf-error");
  const buttonLogin = document.getElementById("entrar-btn");
  const buttonSiginup = document.getElementById("signup-button");
  const widthSize = window.screen.width;

  btnEntrar.onclick = () => {
    const formClassHide = document.getElementById("formSignup");
    const formClasShow = document.getElementById("formLogin");

    btnGoogle.innerHTML = "Continuar com Google";
    btnFacebook.innerHTML = "Continuar com Facebook";
    formClassHide.classList.add("hide");
    formClasShow.classList.remove("hide");
    buttonSiginup.classList.add("hide");
    buttonLogin.classList.remove("hide");
    buttonLogin.classList.add("btn-login");
  };

  btnCadastro.onclick = () => {
    const formClassHide = document.getElementById("formLogin");
    const formClasShow = document.getElementById("formSignup");

    btnGoogle.innerHTML = "Cadastrar com Google";
    btnFacebook.innerHTML = "Cadastrar com Facebook";
    formClassHide.classList.add("hide");
    formClasShow.classList.remove("hide");
    buttonSiginup.classList.remove("hide");
    buttonSiginup.classList.add("btn-login");
    buttonLogin.classList.add("hide");
  };

  $("#cpf").mask("000-000-000-00");
  $("#cep").mask("99.999-999");

  btneye.addEventListener("click", function () {
    let input = document.querySelector("#password");
    if (input.getAttribute("type") == "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });

  function verifica() {
    if (document.forms[0].email.value.length == 0) {
      alert("Por favor, informe o seu EMAIL.");
      document.frmEnvia.email.focus();
      return false;
    }
    return true;
  }

  inputEmail.onblur = () => {
    if (
      document.forms[0].email.value == "" ||
      document.forms[0].email.value.indexOf("@") == -1 ||
      document.forms[0].email.value.indexOf(".") == -1
    ) {
      inputEmail.style.borderBottomColor = "rgb(211, 47, 47)";
      inputEmail.style.borderRadius = "0";

      textEmail.classList.remove("hide");
      textEmail.classList.add("error");
      return false;
    } else {
      textEmail.classList.remove("error");
      textEmail.classList.add("hide");
    }
  };

  inputEmailSignup.onblur = () => {
    if (
      document.forms[0].email.value == "" ||
      document.forms[0].email.value.indexOf("@") == -1 ||
      document.forms[0].email.value.indexOf(".") == -1
    ) {
      inputEmailSignup.style.borderBottomColor = "rgb(211, 47, 47)";
      inputEmailSignup.style.borderRadius = "0";

      textEmailSignup.classList.remove("hide");
      textEmailSignup.classList.add("error");
      return false;
    } else {
      textEmailSignup.classList.remove("error");
      textEmailSignup.classList.add("hide");
    }
  };

  inputCpf.onblur = () => {
    var Soma;
    var Resto;
    Soma = 0;

    let current = NumberOnly(inputCpf.value);

    if (current == "00000000000") {
      textCpf.classList.remove("hide");
      textCpf.classList.add("error");
    }

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(current.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(current.substring(9, 10))) {
      textCpf.classList.remove("hide");
      textCpf.classList.add("error");
    }

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(current.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(current.substring(10, 11))) {
      textCpf.classList.remove("hide");
      textCpf.classList.add("error");
    }

    textCpf.classList.remove("error");
    textCpf.classList.add("hide");
  };

  function ZenkakuToHankaku(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  }

  function NumberOnly(str) {
    return ZenkakuToHankaku(str).replace(/[^0-9\.]+/g, "");
  }
};
