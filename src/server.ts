import { app } from "./app";
const port = process.env.PORT || 3032;
app.listen(port, ()=>console.log(`Server is running on port: ${port}...`));