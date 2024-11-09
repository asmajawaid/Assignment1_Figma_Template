import Image from "next/image";


export default function Header() {
  return (
    <>
      <div className="flex justify-between px-4 shadow-2xl bg-gray-500">
        <div>Logo</div>

        <div className="flex gap-4">
          <div className="curser-pointer">Home</div>
          <div className="curser-pointer">About</div>
          <div className="curser-pointer">Services</div>
          <div className="curser-pointer">Contact us</div>
        </div>
      </div>
    </>
  );
}
