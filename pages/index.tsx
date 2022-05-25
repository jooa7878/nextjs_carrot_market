import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <span className="font-semibold text-3xl">Select Item</span>
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex justify-between odd:bg-blue-50 even:bg-yellow-50"
              >
                <span className="text-gray-500 my-2">Grey Chair</span>
                <span className="font-semibold">$19</span>
              </div>
            ))}
          </ul>
          <ul>
            {["a", "b", "c", ""].map((c, i) => (
              <li key={i} className="bg-red-500 py-2 empty:hidden">
                {c}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
            <span className="">Total</span>
            <span className="font-semibold">$19</span>
          </div>
          <button
            className="mt-5 bg-blue-500 text-white p-3 text-center w-full rounded-xl mx-auto 
        hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:text-red-500
        "
          >
            checkout
          </button>
        </div>

        <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
          <div className="bg-blue-500 p-6 pb-14">
            <span className="text-white text-2xl">Profile</span>
          </div>
          <div className="rounded-3xl p-6 bg-white relative -top-5">
            <div className="flex relative -top-16 items-end justify-between">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Orders</span>
                <span className="font-medium">$340</span>
              </div>
              <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-200 transition-colors" />
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500">Spent</span>
                <span className="font-medium">$340</span>
              </div>
            </div>
            <div className="relative flex flex-col items-center -mt-10 -mb-5">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-500">미국</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <div className="flex mb-5 justify-between items-center">
            <span>⬅️</span>
            <div className="space-x-3">
              <span>★4.9</span>
              <span className="shadow-xl p-2 rounded-md">❤️</span>
            </div>
          </div>
          <div className="bg-zinc-400 h-72 mb-5" />
          <div className="flex flex-col">
            <span className="font-medium text-xl">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="mt-3 mb-5 flex justify-between items-center">
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
                <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
                <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
              </div>
              <div className="flex items-center space-x-5">
                <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  -
                </button>
                <span>1</span>
                <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-2xl">$450</span>
              <span className="bg-blue-500 text-center py-2 px-7 text-xs text-white rounded-lg p-3">
                Add To Cart
              </span>
            </div>
          </div>
        </div>
        {/* <form className="flex flex-col space-y-2 p-5">
          <input
            type="text"
            required
            placeholder="Username"
            className="border p-1 peer border-gray-400- rounded-lg"
          />
          <span className="hidden peer-invalid:block peer-invalid:text-red-500">
            This input is invalid
          </span>
          <span className="hidden peer-valid:block peer-valid:text-teal-500">
            good
          </span>
          <input type="submit" value="login" className="bg-white" />
        </form> */}
      </div>
      {/* <div className="flex flex-col space-y-2 p-5">
        <input
          type="file"
          className="file:transition-colors file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:border-0 file:rounded-xl file:p-1 file:text-white file:bg-purple-400"
        />
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit
          asperiores tenetur numquam, qui maxime obcaecati illo ullam veritatis
          repudiandae fugiat vel hic iusto temporibus quisquam repellat
          distinctio voluptates magnam.
        </p>
      </div> */}
    </>
  );
};

export default Home;
