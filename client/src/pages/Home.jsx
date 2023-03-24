import React ,{Suspense}  from 'react';
import {Canvas} from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { AIEyes } from '../3D/AiEyes';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
       <section>
        <div className=" bg-black px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Canvas className="canvas">
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={0.5}/>
              <directionalLight position={[-2,5,2]} intensity={1} />
              <Suspense fallback={null}>
              <AIEyes/>
              </Suspense>
             </Canvas>
            </div>
            <div className="text-center lg:py-24">
              <h2 className="text-3xl text-white  font-bold sm:text-4xl"><b className='text-amber-500'>AI</b> image generation</h2>
              <p className="mt-4  text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>
      
            </div>
          </div>
        </div>
      </section>

      <section className='bg-black'>
        <div className="max-w-screen-xl  px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-300 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className=" text-xl font-bold text-gray-900 sm:text-3xl font-bold">Examples</h2>
                  <p className="mt-4 text-gray-500">
                  Examples of images that anyone can produce for free with the help of artificial intelligence.
                  </p>
                </header>
                
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" className="block group">
                    <img src="https://cdn-images-1.medium.com/max/800/1*cmz4S760KzMGjAew9zb7QQ.jpeg" alt="" className="object-cover w-full rounded aspect-square" />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                      Astronaut in space on a horse
                      </h3>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="block group">
                    <img src="https://discoursedigital.com/web/image/22201-d6b9d4fb/dall-e-2c.jpg" alt="" className="object-cover w-full rounded aspect-square" />
                    <div className="mt-3">
                      <h3 className="font-medium text-white group-hover:underline group-hover:underline-offset-4">
                      Panda scientist
                      </h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home