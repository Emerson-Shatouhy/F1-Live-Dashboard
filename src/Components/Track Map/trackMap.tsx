import React from 'react';

function TrackMap() {
    return (
        <>
            <div
                className="flex flex-col bg-black text-white border-t-2 border-gray-500 p-6 w-full h-screen">
                <img src={"/MapSVG/greatbritain.svg"} alt="Silverstone" className="h-full"/>
            </div>
        </>
    );
}

export default TrackMap;
