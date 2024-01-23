import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// app.get("/hello",(req,res,next)=>{
//   return res.send("Hello");
// })
connectToDatabase()
    .then(() => {
    app.listen(5000, () => console.log("Server is listening on port 5000"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map