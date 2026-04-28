"use client"

export const ProductsList = () => {
  return (
    <div className="text-black">
      <p className="text-2xl">Products List</p>
      <div className="w-[750px] h-[750px] rounded-lg bg-white mt-3 overflow-y-auto p-4 flex flex-col  gap-3">
        {/* template */}
        <div className="border rounded-lg p-1">
          <span className="flex justify-around items-center">
            <p>Mahfujur Rahman</p>
            <p>Price : 100tk</p>
            <p>Quantity : 10</p>

            <div className="flex items-center gap-4">
              <button className="px-3 py-1.5 bg-black text-white rounded-lg ">update</button>
              <button className="px-3 py-1.5 bg-black text-white rounded-lg ">delete</button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
