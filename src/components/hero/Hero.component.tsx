import Button from "@/components/button/Button.component";
import Heading from "@/components/heading/Heading.component";
import { fromBottomToTop, fromLeftToRight } from "@constants/animationOptions";

import WithTransition from "../with-transition/WithTransition";

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:pb-48 lg:py-44">
          <div className="text-center">
            <Heading
              text="Irakli Kverenchkhiladze"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            />

            <WithTransition options={fromBottomToTop}>
              <div className="mb-8 mt-2 flex justify-center">
                <div className="relative w-40 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 sm:w-auto">
                  <span>Fullstack Developer</span>
                </div>
              </div>
            </WithTransition>

            <WithTransition options={fromLeftToRight}>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </WithTransition>

            <WithTransition options={fromBottomToTop}>
              <Button>Let's Talk</Button>
            </WithTransition>
          </div>
        </div>
      </div>
    </>
  );
}
