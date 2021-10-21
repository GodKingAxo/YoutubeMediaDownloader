import express, { json, static } from "express";
const app = express();

app.use(json());
app.use(static("public"));

app.get("/", function(request,response){
    response.sendFile(__dirname, + "index.html");
});
app.get("/videoInfo", async function(request, response) {
    const videoURL = request.query.videoURL;
    const info = await ytdl.getInfo(videoURL);
    response.status(200).json(info)
})
app.listen(5000);