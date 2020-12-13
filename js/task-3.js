const findBestEmployee = function (employees) {
  const listEmployees = Object.keys(employees)

  let productiveEmployee = listEmployees[0]

  for (const key of listEmployees) {
    if (employees[key] > employees[productiveEmployee]) productiveEmployee = key
  }

  return productiveEmployee
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
)

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
)

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
)
