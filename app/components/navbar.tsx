export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex px-24 py-5 justify-around max-w-[1440px] w-full items-center">
        <div className="">Loan Aid</div>
        <div className="flex w-full max-w-[800px] border rounded-full px-6 py-4 h-14 items-center gap-6 justify-between">
          <div className="px-4 py-2 cursor-pointer hover:text-primary_green font-semibold font-onest hover:border-b">Home</div>
          <div className="px-4 py-2 cursor-pointer hover:text-primary_green font-semibold font-onest hover:border-b">About</div>
          <div className="px-4 py-2 cursor-pointer hover:text-primary_green font-semibold font-onest hover:border-b">Service</div>
          <div className="px-4 py-2 cursor-pointer hover:text-primary_green font-semibold font-onest hover:border-b">Categories</div>
          <div className="px-4 py-2 cursor-pointer hover:text-primary_green font-semibold font-onest hover:border-b">Testimonials</div>
          <div className="px-4 py-2 cursor-pointer hover:text-primary_green font-semibold font-onest hover:border-b">Blog</div>
        </div>
        <a
          href="/contactus"
          className="font-onest py-4 px-6 rounded-full bg-primary_green text-white font-semibold"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
