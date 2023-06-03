export default function Footer(): JSX.Element {
  return (
    <footer className="w-full rounded-lg bg-white shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Flowbite
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Spacework
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
