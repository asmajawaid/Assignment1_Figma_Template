import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex h-[465px] w-11/12">

          <div className="flex flex-col flex-1 gap-4 justify-center px-4">
            <h1 className="font-bold text-[44px]"> Welcome To Our Website</h1>
            <p className="font-normal text-[32px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
              totam pariatur odit eligendi, quas incidunt voluptatem accusamus
              illum doloribus ratione optio aperiam provident nesciunt velit
              ducimus autem eos! Assumenda, saepe?
            </p>
            <button className="text-white w-[237px] h-[66px] p-4 bg-black">
              Contact Us
            </button>
          </div>
          
          {/* image */}
          <div className="flex-1">
            <div>
              <Image
                src="/images/banner-image.png"
                alt="banner image"
                width={502}
                height={465}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
