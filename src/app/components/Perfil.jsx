export function Perfil() {
  return(
    <div className="h-screen w-full float-left flex justify-center 2xl:w-perfil Mitr">
        <img className="w-48 h-48 rounded-full mt-24 border border-black absolute" src="./image/photoprofile.jpg" />
        <div className="w-weditmovil h-56 bg-gray-100 border border-black mt-48 rounded-xl xl:w-profile lg:w-profilemovil">
            <div className="w-full flex justify-center mt-36">
                <p className="text-xl mr-14 lg:mr-36 sm:mr-20"><span className="font-bold">0</span> Siguiendo</p>
                <p className="text-xl"><span className="font-bold">0</span> Seguidores</p>
                <button onClick="editarperfil()" className="border border-black w-16 ml-14 text-xl rounded-md transition-all duration-00 hover:bg-black hover:text-white lg:ml-36 sm:ml-20"><i className="fa-solid fa-user-tag"></i></button>
            </div>
            <p className="text-center mt-24 text-xl">Fotos/Videos</p>
            <hr className="w-28 m-auto border-black" />
            <div className="grid sm:grid-cols-1 justify-center lg:grid-cols-3 mt-10">
                <div className="place-self-center mx-2">
                    <img className="w-login rounded-md lg:w-72" src="../image/photo1.jpg" />
                </div>
                <div className="place-self-center mx-2 ">
                    <video className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/video1.mp4" autoPlay></video>
                </div>
                <div className="place-self-center mx-2">
                    <img className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/photo2.jpg" />
                </div>
            </div>
            <div className="grid sm:grid-cols-1 mt-0 justify-center lg:grid-cols-3 lg:mt-10">
                <div className="place-self-center mx-2">
                    <img className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/photo3.jpg" />
                </div>
                <div className="place-self-center mx-2 ">
                    <img className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/photo4.jpg" />
                </div>
                <div className="place-self-center mx-2">
                    <video className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/video2.mp4" autoPlay></video>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 mt-0 justify-center lg:grid-cols-3 lg:mt-10">
                <div className="place-self-center mx-2">
                    <video className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/video3.mp4" autoPlay></video>
                </div>
                <div className="place-self-center mx-2 ">
                    <img className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/photo5.jpg" />
                </div>
                <div className="place-self-center mx-2">
                    <img className="w-login mt-10 rounded-md lg:w-72 lg:mt-0" src="../image/photo6.jpg" />
                </div>
            </div>
        </div>
    </div>
  )
}