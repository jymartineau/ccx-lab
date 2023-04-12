import Head from "next/head";
import Post from "@/components/post";
import Image from "next/image";

export default function CcxHome() {
  return (
    <>
      <Head>
        <title>CCX FANDOM CONTENT</title>
        <meta name="description" content="User generated content for all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-2 py-6 mx-auto bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 ">
        <h1 className="text-4xl text-white">CCX</h1>
        <div class="flex flex-col bg-black rounded-lg">
          <div className="flex flex-row px-2 py-4">
            <Image
              className="w-12 h-12 rounded-full object-cover mr-4"
              src="/media/anisa.png"
              width={500}
              height={500}
              alt="avatar"
            />
            <div className="flex">
              <div className="flex ">
                <h2 className="bg-yellow-300 text-lg font-semibold text-gray-200 -mt-1">
                  Brad Adams
                  <Image
                    src="/media/verified.png"
                    width={25}
                    height={25}
                    alt="verified"
                    className="mx-2 mb-1 inline-flex"
                  />
                </h2>
                <small className="text-sm text-gray-200 bg-pink-200">
                  22h ago
                </small>
              </div>
              <p className="flex pt-4 text-slate-400 text-sm bg-pink-200">
                Joined 12 SEP 2012.
              </p>
            </div>
          </div>
          <div className="bg-black p-3">
            <Image
              src="/media/artist.png"
              width={500}
              height={500}
              alt="artists"
              className="mx-auto"
            />
          </div>
          <div className="bg-black">03</div>
        </div>

        <Post />
      </div>
    </>
  );
}
