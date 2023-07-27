import {
  ServerIcon,
  BuildingStorefrontIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Headshot from '@/public/images/headshot.jpg';

const ProjectGoalsPage = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white py-24 sm:py-32'>
      <div
        className='absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56'
        aria-hidden='true'
      >
        <div
          className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <p className='text-lg font-semibold leading-8 tracking-tight text-red-600'>
            Full Stack Project
          </p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Custom Built CMS + E-Commerce Storefront
          </h1>
          <p className='mt-6 text-xl leading-8 text-gray-700'>
            After spending a while focusing on Front End Projects using Content
            Management Systems like Sanity, WordPress, and Wix, I decided to try
            building one instead.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12'>
          <div className='relative lg:order-last lg:col-span-5'>
            <svg
              className='absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='e87443c8-56e4-4c20-9111-55b82fa704e3'
                  width={200}
                  height={200}
                  patternUnits='userSpaceOnUse'
                >
                  <path d='M0.5 0V200M200 0.5L0 0.499983' />
                </pattern>
              </defs>
              <rect
                width='100%'
                height='100%'
                strokeWidth={0}
                fill='url(#e87443c8-56e4-4c20-9111-55b82fa704e3)'
              />
            </svg>
            <figure className='border-l border-red-600 pl-8'>
              <blockquote className='text-xl font-semibold leading-8 tracking-tight text-gray-900'>
                <p>
                  “This project helped me gain a deeper understanding and
                  appreciation for relational databases while learning new and
                  exciting tools like Prisma ORM.”
                </p>
              </blockquote>
              <figcaption className='mt-8 flex gap-x-4'>
                <Image
                  src={Headshot}
                  alt='Dylan Rotich headshot'
                  height={100}
                  width={100}
                  className='mt-1 h-10 w-10 flex-none rounded-full bg-gray-50'
                />
                <div className='text-sm leading-6'>
                  <div className='font-semibold text-gray-900'>
                    Dylan Rotich
                  </div>
                  <div className='text-gray-600'>
                    <a
                      href='https://www.github.com/RotichD'
                      target='blank'
                      className='flex items-center'
                    >
                      <svg
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        className='h-4 w-4 mr-1'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                          clipRule='evenodd'
                        />
                      </svg>
                      @RotichD
                    </a>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className='max-w-xl text-base leading-7 text-gray-700 lg:col-span-7'>
            <h2 className='text-3xl font-bold tracking-tight'>Goals:</h2>
            <ul role='list' className='mt-8 max-w-xl space-y-8 text-gray-600'>
              <li className='flex gap-x-3'>
                <CircleStackIcon
                  className='mt-1 h-5 w-5 flex-none text-red-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Create CMS.
                  </strong>{' '}
                  Learn how to use Prisma ORM w/ PlanetScale MySql managed db.
                  Practice table relationships and schema building.
                </span>
              </li>
              <li className='flex gap-x-3'>
                <BuildingStorefrontIcon
                  className='mt-1 h-5 w-5 flex-none text-red-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    E-Commerce Store.
                  </strong>{' '}
                  Fully responsive shop powered by TailwindCSS and HeadlessUI.
                </span>
              </li>
              <li className='flex gap-x-3'>
                <ServerIcon
                  className='mt-1 h-5 w-5 flex-none text-red-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Implement New Tech.
                  </strong>{' '}
                  <ol>
                    <li>Prisma ORM</li>
                    <li>Clerk Authentication</li>
                    <li>Cloudinary</li>
                  </ol>
                </span>
              </li>
            </ul>

            <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
              Future Plans?
            </h2>
            <p className='mt-6'>
              I'd like to enhance the database models to handle more than one
              size and color per product. On the Front End of the store it would
              be nice to have the ability to choose between sizes and colors.
              I'd also like to implement a functioning rating system that users
              contribute to. Manage state with Redux or Recoil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGoalsPage;
