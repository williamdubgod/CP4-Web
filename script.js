//ex 1-

let escola = {
    curso: ["Ciência da Computação", "Direito", "ADM"],
    aluno: ["João", "Maria", "Pedro"],
    professor: ["Cidade", "Josefe", "Alen"],
    turma: ["A", "B", "C"],
    periodo: ["Matutino", "Vespertino", "Noturno"]
  };

  function alunoEstudando(nomeAluno) {
    console.log(`O Aluno: ${nomeAluno} está estudando`);
    document.write(`O Aluno: ${nomeAluno} está estudando <br>`)
  }
  
  let aluno = "William"
  alunoEstudando(aluno)

  let buscaAluno = escola.aluno.find(function(aluno) {
    return aluno === "Maria";
  });

  console.log(buscaAluno);
  document.write(`O aluno selecionado foi: ${buscaAluno}<br>`)

//ex 2-

let funcionarios = [
    {
      nome: "Carlos",
      idade: 30,
      sexo: "Masculino",
      cargo: "Desenvolvedor",
      salario: 5000,
      descontos: 1000,
      dataAdmissao: "04-04-2009",
      dataDemissao: "31-12-2021"
    },
    {
      nome: "Vanessa",
      idade: 25,
      sexo: "Feminino",
      cargo: "Designer",
      salario: 4000,
      descontos: 800,
      dataAdmissao: "01-03-2015",
      dataDemissao: "04-02-2017"
    },
    {
      nome: "Theo",
      idade: 35,
      sexo: "Masculino",
      cargo: "Gerente",
      salario: 8000,
      descontos: 1500,
      dataAdmissao: "01-01-2019",
      dataDemissao: "30-10-2020"
    }
  ];

  let funcionariosContratados = funcionarios.filter(function(funcionario) {
    let dataAdmissao = new Date(funcionario.dataAdmissao);
    return dataAdmissao.getFullYear() >= 2000 && dataAdmissao.getFullYear() <= 2010;
  });

  let funcionariosDemitidos = funcionarios.filter(function(funcionario) {
    let dataDemissao = funcionario.dataDemissao;
    return dataDemissao > '2018';
  });

  funcionariosContratados.forEach(function(funcionario) {
    console.log(funcionario.nome);
    document.write(`Os seguintes funcionários foram admitidos entre 2000 e 2010: ${funcionario.nome} <br>`)
  });

  funcionariosDemitidos.forEach(function(funcionario) {
    console.log(funcionario.nome);
    document.write(`Os seguintes funcionários foram demitidos após 2018: ${funcionario.nome} <br>`)
  });

  let dadosFuncionarios = funcionarios.map(function(funcionario) {
    return {
      nome: funcionario.nome,
      salario: funcionario.salario,
      desconto: funcionario.descontos
    }
  });
  
  funcionarios.map(function(funcionario) {
    let { nome, salario, descontos } = funcionario;
    console.log(`Nome: ${nome} - Salário: ${salario} - Descontos: ${descontos}`);
    document.write(`Nome: ${nome} - Salário: ${salario} - Descontos: ${descontos}<br>`)
  });

  let totalDescontos = funcionarios.reduce(function(total, funcionario) {
    return total + funcionario.descontos;
  }, 0);
  
  console.log("Total de descontos: " + totalDescontos);
  document.write(`Total de descontos: ${totalDescontos} <br>`)

//ex 3-

function somaTradicional(a, b, c) {
  let soma = a + b;
  let resultado = soma / c;
  return resultado;
}

console.log(somaTradicional(10, 20, 2)); //

const somaArrow = (a, b, c) => (a + b) / c;

console.log(somaArrow(10, 20, 2));

//ex 4-

let cliques = 0;
const paragrafo = document.getElementById("cliques");
const botao = document.getElementById("botao");

// function contarCliques() {
//   cliques++;
//   paragrafo.textContent = `Fui clicado ${cliques} vezes`;
// }

// botao.addEventListener("click", contarCliques);

const contarCliques = () => {
    cliques++;
    paragrafo.textContent = `Fui clicado ${cliques} vezes`;
}

botao.addEventListener("click", contarCliques);

//ex 5-

const notas = [3, 8, 5, 6, 7, 9, 8];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;
console.log(`A média foi: ${media.toFixed(2)}`);

if (media >= 6) {
  console.log("Aluno aprovado!");
} else {
  console.log("Aluno reprovado!");
}

//ex 6-

function Login() {

  let usuario = document.querySelector("#usuario").value
  let senha = document.querySelector("#senha").value

  if(usuario === 'admin' && senha === '1234' ) {
      alert("Seja Bem-vindo!")
  } else {
      alert("Usuário ou senha incorretos.")
  }
}

//ex 7-

let idade = prompt("Digite a sua idade:");

if (idade <= 12) {
  console.log("Você é uma criança.");
  alert("Você é uma criança.")
} else if (idade <= 18) {
  console.log("Você é um adolescente.");
  alert("Você é um adolescente.")
} else if (idade <= 60) {
  console.log("Você é um adulto.");
  alert("Você é um adulto.")
} else {
  console.log("Você é um idoso.");
  alert("Você é um idoso.")
}

//ex 8-

// O operador '%' em JavaScript significa módulo, e representa o resto de uma divisão, exemplos:

//exemplo 1-
let resto = 7 % 2
console.log(resto); //o resto foi: 1

// //exemplo 2- Saber se o numero é par ou ímpar.
let numero = 8

if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }

// nesse caso o resto da divisão de 8 por 2 é 0, logo 8 é par, se fosse 7 o resto seria 1, portanto seria ímpar