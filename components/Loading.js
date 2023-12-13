import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <p className="text-2xl text-gray-500 font-bold">Ankara Jeneratör</p>
        <ReactLoading type="spin" color="#000" height={100} width={100} />
    </div>
  );
};

export default Loading;