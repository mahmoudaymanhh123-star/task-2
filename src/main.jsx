import { CiHeart, CiSearch, CiMenuBurger } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { createRoot } from "react-dom/client";
import { IoIosArrowUp } from "react-icons/io";
import "./index.css";
import img1 from "./assets/Logo.svg";
import img2 from "./assets/image1.png";
import img3 from "./assets/image2.png";
import img4 from "./assets/image3.png";
import img5 from "./assets/Logo2.png";

createRoot(document.getElementById("root")).render(
  <div className="min-h-dvh w-full" data-theme="light">
    <header className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-0">
        <img className="w-16.25" src={img1} alt="cyber" />

        <div className="relative hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="input bg-[#F5F5F5] pl-12"
          />
          <CiSearch className="absolute left-5 top-3" />
        </div>

        <nav className="hidden gap-13 lg:flex">
          <a className="font-roboto font-medium">Home</a>
          <a className="font-roboto font-medium">About</a>
          <a className="font-roboto font-medium">Contact US</a>
          <a className="font-roboto font-medium">Blog</a>
        </nav>

        <div className="hidden items-center gap-7.5 lg:flex">
          <CiHeart />
          <FaShoppingCart />
          <IoPerson />
        </div>

        <CiMenuBurger className="text-2xl lg:hidden" />
      </div>
    </header>

    <main className="container mx-auto px-3 py-5 sm:px-5">
      <div className="flex gap-5">
        <aside className="hidden w-[220px] shrink-0 text-sm text-black lg:block">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className=" font-roboto text-[16px] font-medium leading-6">Categories</span>
            <IoIosArrowUp />
          </div>

          <div className="my-3 flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-400">
            <CiSearch className="text-lg" />
            <span>Search</span>
          </div>

          <div className="space-y-1">
            <div className="flex h-6 items-center gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="size-3.5 accent-black"
              />
              <span className="font-roboto text-[16px] font-medium leacding-6">
                smartphones
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                laptops
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                skincare
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                sunglasses
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                motorcycle
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                lighting
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                furniture
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                men shirts
              </span>
            </div>
            <div className="flex h-6 items-center gap-2">
              <input type="checkbox" className="size-3.5 accent-black" />
              <span className="font-roboto text-[16px] font-medium leading-6">
                women bags
              </span>
            </div>
          </div>

          <button className="mt-5 w-full rounded-lg bg-black py-3 text-white">
            Apply
          </button>
        </aside>

        <section className="min-w-0 grow">
          <div className="mb-4 flex items-center justify-between px-1">
            <span className="font-roboto text-sm text-gray-500">
              Available Products: 
              <span className="font-roboto text-[16px] font-medium leading-6 text-black">{' '} 85</span>
            </span>

            <button className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm lg:hidden">
              Filters
              <span aria-hidden="true">☷</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F6F6] p-3 sm:gap-4 sm:p-5">
              <img
                className="h-32 w-full rounded-md object-contain sm:h-50"
                src={img2}
                alt="Apple iPhone 14 Pro"
              />
              <h2 className="font-roboto text-sm font-medium leading-5  sm:leading-6">
                Apple iPhone 14 Pro 512GB Gold (MQ233)
              </h2>
              <h3 className="font-roboto text-sm font-semibold ">
                $1437
              </h3>
              <button className="mt-auto rounded-lg bg-black px-2 py-3 text-sm font-medium text-white ">
                Add To Cart
              </button>
            </div>

            <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F6F6] p-3 sm:gap-4 sm:p-5">
              <img
                className="h-32 w-full rounded-md object-contain sm:h-50"
                src={img3}
                alt="Apple iPhone 11 White"
              />
              <h2 className="font-roboto text-sm font-medium leading-5  sm:leading-6">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <h3 className="font-roboto text-sm font-semibold ">
                $510
              </h3>
              <button className="mt-auto rounded-lg bg-black px-2 py-3 text-sm font-medium text-white ">
                Add To Cart
              </button>
            </div>

            <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F6F6] p-3 sm:gap-4 sm:p-5">
              <img
                className="h-32 w-full rounded-md object-contain sm:h-50"
                src={img4}
                alt="Apple iPhone 11 Blue"
              />
              <h2 className="font-roboto text-sm font-medium leading-5  sm:leading-6">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <h3 className="font-roboto text-sm font-semibold ">
                $550
              </h3>
              <button className="mt-auto rounded-lg bg-black px-2 py-3 text-sm font-medium text-white ">
                Add To Cart
              </button>
            </div>

            <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F6F6] p-3 sm:gap-4 sm:p-5">
              <img
                className="h-32 w-full rounded-md object-contain sm:h-50"
                src={img2}
                alt="Apple iPhone 14 Pro"
              />
              <h2 className="font-roboto text-sm font-medium leading-5  sm:leading-6">
                Apple iPhone 14 Pro 512GB Gold (MQ233)
              </h2>
              <h3 className="font-roboto text-sm font-semibold ">
                $1437
              </h3>
              <button className="mt-auto rounded-lg bg-black px-2 py-3 text-sm font-medium text-white ">
                Add To Cart
              </button>
            </div>

            <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F6F6] p-3 sm:gap-4 sm:p-5">
              <img
                className="h-32 w-full rounded-md object-contain sm:h-50"
                src={img3}
                alt="Apple iPhone 11 White"
              />
              <h2 className="font-roboto text-sm font-medium leading-5  sm:leading-6">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <h3 className="font-roboto text-sm font-semibold ">
                $510
              </h3>
              <button className="mt-auto rounded-lg bg-black px-2 py-3 text-sm font-medium text-white ">
                Add To Cart
              </button>
            </div>

            <div className="flex min-w-0 flex-col gap-3 rounded-2xl bg-[#F6F6F6] p-3 sm:gap-4 sm:p-5">
              <img
                className="h-32 w-full rounded-md object-contain sm:h-50"
                src={img4}
                alt="Apple iPhone 11 Blue"
              />
              <h2 className="font-roboto text-sm font-medium leading-5  sm:leading-6">
                Apple iPhone 11 128GB White (MQ233)
              </h2>
              <h3 className="font-roboto text-sm font-semibold ">
                $550
              </h3>
              <button className="mt-auto rounded-lg bg-black px-2 py-3 text-sm font-medium text-white ">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 py-8 text-sm sm:gap-2">
            <span className="px-2 text-gray-500">‹</span>
            <span className="rounded bg-black px-2.5 py-1 text-white">1</span>
            <span className="px-2 font-roboto text-[16px] font-medium leacding-6">
              2
            </span>
            <span className="px-2 font-roboto text-[16px] font-medium leacding-6">
              3
            </span>
            <span className="px-1 font-roboto text-[16px] font-medium leacding-6">
              …
            </span>
            <span className="px-2 font-roboto text-[16px] font-medium leacding-6">
              12
            </span>
            <span className="px-2 font-roboto text-[16px] font-medium leacding-6 text-gray-500">
              ›
            </span>
          </div>
        </section>
      </div>
    </main>

    <footer className="mt-4 w-full bg-[#111111] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
        <div>
          <img className="w-16.25 pb-6 " src={img5} alt="cyber" />
          <p className=" font-roboto text-[14px] font-medium leading-[171%] text-[#CFCFCF] md:mx-0">
            We are a residential interior design firm located in Portland.
            <br />
            Our boutique-studio offers more than
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold">Services</h3>
          <div className="space-y-4 text-sm text-[#CFCFCF]">
            <div>Bonus program</div>
            <div>Gift cards</div>
            <div>Credit and payment</div>
            <div>Service contracts</div>
            <div>Non-cash account</div>
            <div>Payment</div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold">
            Assistance to the buyer
          </h3>
          <div className="space-y-4 text-sm text-[#CFCFCF]">
            <div>Find an order</div>
            <div>Terms of delivery</div>
            <div>Exchange and return of goods</div>
            <div>Guarantee</div>
            <div>Frequently asked questions</div>
            <div>Terms of use of the site</div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-5xl justify-center gap-6 text-sm font-bold md:justify-start">
        <span>♥</span>
        <span>f</span>
        <span>♪</span>
        <span>◎</span>
      </div>
    </footer>
  </div>,
);
