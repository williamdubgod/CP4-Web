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

