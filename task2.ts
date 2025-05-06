const nim = "054592243"
const lastTwoNim = parseInt(nim.slice(-2))

let first: number

if (lastTwoNim > 20) {
  first = parseInt(nim.slice(-1))
} else {
  first = lastTwoNim
}

const lastNim = parseInt(nim.slice(-1))

if (lastNim % 2 !== 0) {
  let i = first
  while (i <= 20) {
    console.log(i)
    i++
  }
} else {
  let i = first
  do {
    console.log(i)
    i++
  } while (i <= 20)
}
