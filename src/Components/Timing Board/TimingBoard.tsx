import React from 'react';
import Row from "./Row";
import {Driver} from "../../Types/Driver";

interface TimingBoardProps {
    Drivers: Driver[],
}

function TimingBoard({Drivers}: TimingBoardProps) {
    return (
        <>
            <div className="h-auto flex flex-col text-white border-t-2 border-gray-500 p-6 w-full gap-2">
                {Drivers.map((driver: Driver) => {
                    return (
                        <Row driver={driver}/>
                    )
                })}
            </div>
        </>
    );
}

export default TimingBoard;
