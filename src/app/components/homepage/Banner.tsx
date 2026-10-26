import BannerImage from "@/app/assets/hero_img.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl bg-linear-to-br from-green-50 via-gray-50 to-emerald-100 px-6 py-10 shadow-sm sm:px-10 md:grid-cols-2 md:gap-6 md:px-14 lg:px-20 lg:py-12">
      {/* Left section */}
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
          Discover Your Next Read
        </span>

        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Books to freshen up{" "}
          <span className="text-green-700">your bookshelf.</span>
        </h1>

        <p className="max-w-md text-base leading-7 text-gray-600 sm:text-lg">
          Explore inspiring stories, discover new ideas, and find your next
          favorite book.
        </p>

        <button className="btn btn-success rounded-lg px-6 text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          View The List
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Right section */}
      <div className="flex items-center justify-center">
        <div className="relative rounded-2xl bg-white/60 p-4 shadow-sm sm:p-6">
          <Image
            src={BannerImage}
            width={400}
            height={400}
            alt="A featured book displayed on the banner"
            priority
            className="h-auto w-56 object-contain sm:w-72 md:w-full md:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
