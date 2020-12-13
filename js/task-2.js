const countProps = function (obj) {
  const totalKeys = Object.keys(obj)

  return totalKeys.length
}

console.log(countProps({}))

console.log(countProps({ name: "Mango", age: 2 }))

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
