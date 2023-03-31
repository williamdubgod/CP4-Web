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