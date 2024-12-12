const adicionar = document.getElementById("add");
const remover = document.getElementById("remove");
const contador = document.querySelector(".contador");
const voltar = document.getElementById("comeback");

let numero = 0;
let num = 0;

adicionar.onclick = () => {
  numero++;
  contador.textContent = numero.toString();
};

remover.onclick = () => {
  numero--;
  contador.textContent = numero.toString();
};

voltar.onclick = () => {
  numero = 0;
  contador.textContent = numero;
};

const add = document.getElementById("ad");
const remove = document.getElementById("rem");
const conta = document.querySelector(".conta");
const volta = document.getElementById("come");

add.onclick = () => {
  num++;
  conta.textContent = num.toString();
};

remove.onclick = () => {
  num--;
  conta.textContent = num.toString();
};

volta.onclick = () => {
  num = 0;
  conta.textContent = num;
};

const resultado = document.querySelector(".resultado");
const mostrador = document.querySelector(".result");

let gen = 0;

resultado.onclick = () => {
  const soma = numero + num;
  mostrador.textContent = `${soma}`;
};
