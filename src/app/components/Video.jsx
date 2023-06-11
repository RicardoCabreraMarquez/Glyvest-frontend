export function Video() {
  return(
    <>
      <div className="w-login h-10 mt-14 mb-2 rounded-t-xl flex justify-center items-center self-center Mitr z-10">
        <img src=".image/photoprofile.jpg" className="w-8 h-8 rounded-full border border-black"/>
        <p className="ml-2 font-bold">Username</p>
      </div>
      <video src="./image/video1.mp4" className="w-login h-image self-center rounded-lg z-10" autoPlay></video>
      <div className="w-login h-10 mt-2 rounded-b-xl flex justify-center items-center self-center z-10" id="crear">
        <div id="like">
          <i id="icono2" className="fa-regular fa-heart text-black text-xl"></i>
        </div>
        <p className="ml-2 text-xl">999</p>
      </div>
      <hr className="mt-8 w-4/12 self-center border-black z-10"></hr>
    </>
    
  )
}