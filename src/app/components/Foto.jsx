export function Foto() {
  return(
    <>
      <div className="w-login h-10 mt-24 mb-2 rounded-t-xl flex justify-center items-center self-center z-10 Mitr">
        <img src="./src/assets/image/photoprofile.jpg" className="w-8 h-8 rounded-full border border-black" />
        <p className="ml-2 font-bold">Username</p>
      </div>
      <img src="./src/assets/image/photo1.jpg" className="w-login h-image self-center rounded-lg z-10" />
      <div className="w-login h-10 mt-2 rounded-b-xl flex justify-center items-center self-center z-10" id="crear">
        <div id="like">
          <i id="icono1" className="fa-regular fa-heart text-black text-xl"></i>
        </div>
        <p className="ml-2 text-xl">999</p>
      </div>
      <hr className="mt-8 w-4/12 self-center border-black z-10"></hr>
    </>
  )
}