import React, {useEffect} from 'react';
import flag from './flag.png';
import {SessionInfo, SessionType} from "../Types/SessionInfo";

interface InfoBarProps {
    data: SessionInfo
}

function InfoBar({data}: InfoBarProps) {
    const [statusSource, setStatusSource] = React.useState<string>("/StatusPills/Status_AllClear.svg");

    useEffect(() => {
        console.log(data)
        switch (data?.trackStatus) {
            case 1:
                setStatusSource("/StatusPills/Status_Clear.svg");
                break;
            case 2:
                setStatusSource("/StatusPills/Status_Yellow.svg");
                break;
            case 3:
                setStatusSource("/StatusPills/Status_Unkown.svg");
                break;
            case 4:
                setStatusSource("/StatusPills/Status_SC.svg");
                break;
            case 5:
                setStatusSource("/StatusPills/Status_Red.svg");
                break;
            case 6:
                setStatusSource("/StatusPills/Status_VSC.svg");
                break;
            case 7:
                setStatusSource("/StatusPills/Status_VSC.svg");
                break;
            default:
                setStatusSource("/StatusPills/Status_Unkown.svg");
                break;
        }
    }, [data])

    return (
        <>
            <div className="flex flex-row h-28 text-white p-6 justify-between">
                <div className="flex flex-row gap-5 h-full">
                    <img src={flag} alt="flag" className="rounded-2xl"/>
                    <div className="flex flex-col">
                        <div className="flex font-bold text-3xl">
                            {data?.name}
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex font-light text-gray-300 text-lg">
                                {data?.sessionType}
                            </div>
                            <div className="flex font-light text-gray-300 text-lg">
                                {data?.sessionType === SessionType.RACE ? "Lap " + data?.currentLap + "/" + data?.totalLaps : data?.sessionTimeLeft}
                            </div>
                            <img src={statusSource} alt="status" className="h-fit align-middle"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-14 h-full">
                    <div className="flex flex-col">
                        <div className="flex text-lg font-light text-gray-300 justify-center">
                            Pressure
                        </div>
                        <div className="flex font-bold text-lg justify-center">
                            {data?.weather?.pressure} psi
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="flex text-lg font-light text-gray-300 justify-center">
                            Humidity
                        </div>
                        <div className="flex font-bold text-lg justify-center">
                            {data?.weather?.humidity}%
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="flex text-lg font-light text-gray-300 justify-center">
                            Wind
                        </div>
                        <div className="flex font-bold text-lg justify-center">
                            {data?.weather?.windSpeed} m/s
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <div className="flex text-lg font-light text-gray-300 justify-center">
                            Air Temp
                        </div>
                        <div className="flex font-bold text-lg justify-center">
                            {data?.weather?.airTemperature} °C
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex text-lg font-light text-gray-300 justify-center">
                            Track Temp
                        </div>
                        <div className="flex font-bold text-lg justify-center">
                            {data?.weather?.trackTemperature} °C
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InfoBar;
