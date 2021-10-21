const infoBtn = document.getElementById("infoBtn");

infoBtn.addEventListener("click", () => {
    const host = "http://127.0.0.1:5500/index.html"
    let videoURL = document.getElementById("videoURL").value.trim();
    if(videoURL.length == 0) {
        alert("Please enter a valid youtube link");
        return;
    }

    fetch(host+"videoInfo?videoURL ="+videoURL).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    }).catch(function(error){
        alert("Something went wrong")
    })
})