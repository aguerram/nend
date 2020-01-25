import nanoexpress from "nanoexpress"
const PORT = 3000 || process.env?.PORT;

const app = nanoexpress()


app.listen(PORT,'0.0.0.0')
console.log(`Server started on port : ${PORT}`)

