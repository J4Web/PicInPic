const videoElement = document.getElementById('video');
const button= document.getElementById('btn');


// Prompting the user to select the mediaStream, thn play pic in pic

const selectMediaStream= async ()=>
{
    try
    {
    const mediaStream= await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject  = mediaStream;
    videoElement.onloadedmetadata=()=>
    {
        videoElement.play();
    }


    }
    catch(err){
        console.error("Whoops MediaSelect Error", err);
    }
}

button.addEventListener('click', async ()=>{
    //Diable button
    button.disabled= true;
    //Start pic in pic
    await videoElement.requestPictureInPicture();
    //Reset btn
    button.disabled=false;
});


//onLoad
selectMediaStream();

