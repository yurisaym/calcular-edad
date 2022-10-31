const datadeNacimento = document.getElementById('datadeNacimento')
const edade = document.getElementById('edade')

const calcularEdade = datadeNacimento => {
  const dataAtual = new Date()
  const anoAtual = parseInt(dataAtual.getFullYear())
  const mesAtual = parseInt(dataAtual.getMonth()) + 1
  const diaAtual = parseInt(dataAtual.getDay())

  //2022-08-01//
  const anoNacimento = parseInt(String(datadeNacimento).substring(0, 4))
  const mesNacimento = parseInt(String(datadeNacimento).substring(5, 7))
  const diaNacimento = parseInt(String(datadeNacimento).substring(8, 10))

  let edade = anoAtual - anoNacimento
  if (mesAtual < mesNacimento) {
    edade--
  } else if (mesAtual === mesNacimento) {
    if (diaAtual < diaNacimento) {
      edade--
    }
  }
  return edade
}

window.addEventListener('load', function () {
  datadeNacimento.addEventListener('change', function () {
    if (this.value) {
      edade.innerText = `a edade é: ${calcularEdade(this.value)}anos`
    }
  })
})
