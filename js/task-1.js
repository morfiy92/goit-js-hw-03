const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
}

user.mood = "happy"
console.table(user)

user.hobby = "skydiving"
console.table(user)

user.premium = "false"
console.table(user)

const userKeys = Object.keys(user)

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`)
}
