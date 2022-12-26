import React, { useMemo } from "react";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import Image from "next/image";
import Notary from '../../public/assets/Notary.png'
import School from '../../public/assets/Schoolsystem.png'
import pos from '../../public/assets/pos.jpeg'
import SeoHead from "../../components/SeoHead";
function index() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
          <SeoHead title='Projects aqabkaict' />

       <ScrollAnimationWrapper>
      <motion.div
        class="bg-white mt-36"
        id="ourWork"

        >
        <h3
          className="text-2xl sm:text-3xl text-center lg:text-4xl font-medium text-black-600 leading-relaxed"
        >
          Our work 
        </h3>
        <div class="mx-auto max-w-2xl   py-6 px-4 sm:py-21 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>

          <div class="grid  grid-cols-1 md:grid-cols-2 gap-x-10  gap-y-10">
             
            

            <a  class="group shadow-lg p-1.5">
              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  src={Notary}
                  layout="responsive"
              quality={100}
              height={300}
              loading="lazy"

              width={460}
                  alt="Person using a pen to cross a task off a productivity paper card."
                  class=" w-full hover:scale-125	 transition-all duration-500 ease-in-out transform  object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">NOTARY MANAGEMENT</h3>
              <a aria-label="Chat on WhatsApp" href="https://wa.me/616771010">
              <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-sm capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange w-full">

                Order Now 
                </button></a>
            </a>

            <a  class="group shadow-lg p-1.5">
              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                 <Image
                 src={School}
                 layout="responsive"
                 quality={100}
                 height={300}
                 width={460}
                 loading="lazy"

                 alt="Person using a pen to cross a task off a productivity paper card."
                 class="h-full w-full hover:scale-125	 transition-all duration-500 ease-in-out transform  object-cover object-center group-hover:opacity-75"
                 /> 
              </div>
              <h3 class="mt-4 text-sm text-gray-700">SCHOOL MANAGEMENT SYSTEM</h3>
              <a aria-label="Chat on WhatsApp" href="https://wa.me/616771010">
              <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-sm capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange w-full">
                Order Now 
                </button></a>
            </a>
            <a  class="group shadow-lg p-1.5">
              <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                 <Image
                 src={pos}
                 layout="responsive"
                 quality={100}
                 height={360}
                 width={460}
                 loading="lazy"

                 alt="Person using a pen to cross a task off a productivity paper card."
                 class="h-full w-full hover:scale-125	 transition-all duration-500 ease-in-out transform  object-cover object-center group-hover:opacity-75"
                 /> 
              </div>
              <h3 class="mt-4 text-sm text-gray-700">POINT OF SALE SYSTEM</h3>
              <a aria-label="Chat on WhatsApp" href="https://wa.me/616771010">
              <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-sm capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange w-full">
                Order Now 
                </button></a>
            </a>
            
          </div>
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
    </>
 
  );
}

export default index;
