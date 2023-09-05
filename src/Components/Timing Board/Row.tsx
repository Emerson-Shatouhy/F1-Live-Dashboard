import React from 'react';
import {Driver, DRSStatus, TyreCompound} from "../../Types/Driver";

interface RowProps {
    driver: Driver,
}

function Row({driver}: RowProps) {
    const [driverPillSource, setDriverPillSource] = React.useState<string>("/DriverPills/UNKOWN.svg");
    const [drsStatus, setDrsStatus] = React.useState<string>("/DRSPills/DRS_Disabled.svg");
    const [tyreCompound, setTyreCompound] = React.useState<string>("/TireIcons/Unkown_Tire.svg");

    React.useEffect(() => {
        if (driver.namePill !== null)
            setDriverPillSource(driver.namePill);
        else
            setDriverPillSource("/DriverPills/UNKOWN.svg");
        switch (driver.DRSStatus) {
            case DRSStatus.DISABLED:
                setDrsStatus("/DRSPills/DRS_Disabled.svg");
                break;
            case DRSStatus.ENABLED:
                setDrsStatus("/DRSPills/DRS_Enabled.svg");
                break;
            case DRSStatus.ALLOWED:
                setDrsStatus("/DRSPills/DRS_Allowed.svg");
                break;
            default:
                setDrsStatus("/DRSPills/DRS_Disabled.svg");
                break;
        }
        switch (driver.currentTyreCompound) {
            case TyreCompound.SOFT:
                setTyreCompound("/TireIcons/Soft_Tire.svg");
                break;
            case TyreCompound.MEDIUM:
                setTyreCompound("/TireIcons/Medium_Tire.svg");
                break;
            case TyreCompound.HARD:
                setTyreCompound("/TireIcons/Hard_Tire.svg");
                break;
            case TyreCompound.INTERMEDIATE:
                setTyreCompound("/TireIcons/Inter_Tire.svg");
                break;
            case TyreCompound.WET:
                setTyreCompound("/TireIcons/Wet_Tire.svg");
                break;
            default:
                setTyreCompound("/TireIcons/Unkown_Tire.svg");
                break;
        }
    }, [driver])
    return (
        <>
            <div className="flex flex-row gap-8 border-gray-800 border-2 rounded-lg p-2 items-center">
                <div className="flex flex-row gap-3">
                    <div className="flex flex-col justify-center text-2xl border-r-2 border-gray-700 px-3">
                        {driver.position < 10 ? `0${driver.position}` : driver.position}
                    </div>
                    <img src={driverPillSource} alt={driver.shortName} className="h-10"/>
                </div>
                <div className="flex flex-row justify-between pl-8 text-xl gap-6 w-1/2">
                    <div className="flex flex-col justify-center">
                        {driver.position !== 1 ? ` +${driver.gapToLeader}` : "Leader"}
                    </div>
                    <div className="flex flex-col text-center justify-center">
                        {driver.position !== 1 ? "+" + driver.gapToNext : "Interval"}
                    </div>
                    <img src={drsStatus} alt={driver.DRSStatus} className="flex flex-col justify-center"/>
                    <div className="flex flex-col gap-0 text-center">
                        <img src={tyreCompound} alt={driver.currentTyreCompound} className="h-7"/>
                        {driver.currentTyreAgeLaps ? `${driver.currentTyreAgeLaps}` : "00"}
                    </div>
                </div>
                <div className="flex flex-row w-1/2 gap-6 text-xl justify-between px-4">
                    <div className="flex flex-col gap-0 text-center text-purple-500">
                        {driver.laps[0].totalTime}
                    </div>
                    <div className="flex flex-col gap-0 text-center text-orange-300">
                        {driver.laps[0].sectors[0].sectorTime}
                    </div>
                    <div className="flex flex-col gap-0 text-center text-orange-300">
                        {driver.laps[0].sectors[1].sectorTime}
                    </div>
                    <div className="flex flex-col gap-0 text-center text-green-400">
                        {driver.laps[0].sectors[2].sectorTime}
                    </div>
                    <div className="flex flex-col gap-0 text-center">
                        {driver.pitStops}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Row;
