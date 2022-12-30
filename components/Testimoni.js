import Image from 'next/image';
import {BsCameraVideo, BsBookFill, BsCodeSlash} from 'react-icons/bs'
import {FcAdvertising} from 'react-icons/fc'
import {MdOutlineDesignServices} from 'react-icons/md'
import {SiCodeberg} from 'react-icons/si'
export default function Testimoni({}) {
  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 space-y-10 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] hover:-mt-3 transition-all duration-300 bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl">
                <div   className="text-[#14A800]  text-center mb-8 flex h-[70px] w-full  items-center justify-center rounded-2xl">
                <Image
                  src="/assets/Design.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                  loading="lazy"
                />

                </div>
                  
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Graphic Design
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] hover:-mt-3 transition-all duration-300 bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl">
                <div   className="text-[#14A800]  text-center mb-8 flex h-[70px] w-full  items-center justify-center rounded-2xl">
                <Image
                  src="/assets/webDesign.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                  loading="lazy"
                />
                </div>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">Web Design</h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] hover:-mt-3 transition-all duration-300 bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl">
                <div   className="text-[#14A800]  text-center mb-8 flex h-[70px] w-full  items-center justify-center rounded-2xl">

                <Image
                  src="/assets/Courses.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                  loading="lazy"
                />
                
                </div>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Online Courses
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] hover:-mt-3 transition-all duration-300 bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl">
                <div   className="text-[#14A800]  text-center mb-8 flex h-[70px] w-full  items-center justify-center rounded-2xl">

                <Image
                  src="/assets/production.png"
                  width={100}
                  height={100}
                  alt="Standard Plan"
                  loading="lazy"
                />  
                </div>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">Production</h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] hover:-mt-3 transition-all duration-300 bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl">
                <div   className="text-[#14A800]  text-center mb-8 flex h-[70px] w-full  items-center justify-center rounded-2xl">

                <Image
                  src="/assets/Advertising.png"
                  width={100}
                  height={100}
                  alt="Standard Plan"
                  loading="lazy"
                />  
               
                </div>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  advertising agency 
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-[20px] hover:-mt-3 transition-all duration-300 bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-full items-center justify-center rounded-2xl">
                <div   className="text-[#14A800]  text-center mb-8 flex h-[70px] w-full  items-center justify-center rounded-2xl">

                <Image
                  src="/assets/software.png"
                  width={100}
                  height={100}
                  alt="Standard Plan"
                  loading="lazy"
                />  
               
                </div>
                </div>
                <h4 className="text-dark mb-3 text-xl font-semibold">
                  Software Developement
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
