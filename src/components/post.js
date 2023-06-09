import Image from "next/image";

export default function Post() {
  return (
    <>
      <div className="flex mx-auto bg-black rounded-lg my-1 max-w-lg md:max-w-2xl">
        <div className="flex items-start px-4 py-6">
          <Image
            className="w-12 h-12 rounded-full object-cover mr-4"
            src="/media/anisa.png"
            width={500}
            height={500}
            alt="avatar"
          />
          <div className="bg-pink-400">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-200 -mt-1">
                Brad Adams
                <Image
                  src="/media/verified.png"
                  width={25}
                  height={25}
                  alt="verified"
                  className="mx-2 mb-1 inline-flex"
                />
              </h2>
              <small className="text-sm text-gray-200">22h ago</small>
            </div>
            <p className="text-slate-400 pb-6 text-sm">Joined 12 SEP 2012. </p>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-200 font-bold">
              Looking for artists for a new adventure
            </span>
            <p className="mt-1 text-gray-200 text-sm pb-6">
              Lorem ipsum, dolor sit amet conse. Saepe optio minus rem dolor sit
              amet!
            </p>
            <div className="flex items-center">
              <Image
                src="/media/artist.png"
                width={500}
                height={500}
                alt="artists"
              />
            </div>
            <div className="mt-4 flex items-center">
              <div className="flex mr-2 text-gray-200 text-sm">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>12</span>
              </div>
              <div className="flex text-gray-200 text-sm mr-8">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span>8</span>
              </div>
              <div className="flex text-gray-200 text-sm mr-4">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span>share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Image
          src="/media/artist.png"
          width={500}
          height={500}
          alt="artists"
          className="mx-auto"
        />
      </div>
      <div className="mt-4 flex items-center">
        <div className="flex mr-2 text-gray-200 text-sm">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-1"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>12</span>
        </div>
        <div className="flex text-gray-200 text-sm mr-8">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-1"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <span>8</span>
        </div>
        <div className="flex text-gray-200 text-sm mr-4">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 mr-1"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <span>share</span>
        </div>
      </div>
    </>
  );
}
