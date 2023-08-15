function AndarAleatorio(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Elevador() {
  let andarAtual = AndarAleatorio(1, 5)
  let andarRandomizado = AndarAleatorio(1, 5)

  alert(
    `Você está no ${andarAtual}º andar.\nE você apertou o botão do elevador.`
  )

  if (andarAtual > andarRandomizado) {
    alert(`O elevador está no ${andarRandomizado}º andar.`)
    while (andarAtual !== andarRandomizado) {
      andarRandomizado = AndarAleatorio(andarAtual, andarRandomizado - 1)
      alert(`O elevador está no ${andarRandomizado}º andar.`)
    }
  } else if (andarAtual < andarRandomizado) {
    alert(`O elevador está no ${andarRandomizado}º andar.`)
    while (andarAtual !== andarRandomizado) {
      andarRandomizado = AndarAleatorio(andarAtual, andarRandomizado + 1)
      alert(`O elevador está no ${andarRandomizado}º andar.`)
    }
  } else {
    alert("O elevador chegou no seu andar.")
  }

  let andarEscolher = parseInt(
    prompt(
      `Escolha um andar para ir:\n\n1º Andar\n2º Andar\n3º Andar\n4º Andar\n5º Andar`
    )
  )

  let andarChamado = AndarAleatorio(1, 5)
}

Elevador()
