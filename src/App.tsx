import React, {useEffect} from 'react';
import InfoBar from "./Components/InfoBar";
import TimingBoard from "./Components/Timing Board/TimingBoard";
import {SessionInfo, TrackStatus, Weather} from "./Types/SessionInfo";
import TrackMap from "./Components/Track Map/trackMap";
import {Team} from "./Types/Team";
import {Lap, sector} from "./Types/Lap";
import {Driver, DriverStatus, DRSStatus, TyreCompound} from "./Types/Driver";
import axios from "axios";

function App() {
    // @ts-ignore
    const [sessionInfo, setSessionInfo] = React.useState<SessionInfo>(null);
    const [drivers, setDrivers] = React.useState<Driver[]>([]);
    useEffect(() => {
        let weather: Weather;
        axios.get("http://localhost:3030/api/weather").then((response) => {
            const data = response.data[response.data.length - 1];
            weather = {
                airTemperature: data.AirTemp,
                humidity: data.Humidity,
                pressure: data.Pressure,
                trackTemperature: data.TrackTemp,
                windDirection: data.WindDirection,
                windSpeed: data.WindSpeed,
            }
        });
        axios.get("http://localhost:3030/api/sessionInfo").then((response) => {
            const data = response.data[response.data.length - 1];
            console.log(data);
            setSessionInfo({
                name: data.Meeting.Name,
                flagUrl: "test",
                sessionType: data.Name,
                trackStatus: TrackStatus.Unknown,
                totalLaps: 25,
                currentLap: 10,
                sessionTimeLeft: 0,
                weather: weather,
            })
        });
        axios.get("http://localhost:3030/api/driverList").then((response) => {
            const data = response.data[0];
            const drivers: Driver[] = [];
            Object.keys(data).forEach((key) => {
                const tempDriver: Driver = {
                    name: data[key].Name,
                    team: team,
                    carNumber: data[key].RacingNumber,
                    shortName: data[key].Tla,
                    headshotUrl: data[key].HeadshotUrl,
                    namePill: `/DriverPills/${data[key].Tla}.svg`,
                    country: "null",
                    pitStops: 0,
                    position: data[key].Line,
                    laps: [
                        lap],
                    bestSectors: [
                        sector
                    ],
                    bestLap: lap,
                    currentTyreCompound: TyreCompound.SOFT,
                    DRSStatus: DRSStatus.UNKNOWN,
                    gapToNext: 1.01,
                    gapToLeader: 1.01,
                    driverStatus: DriverStatus.UNKNOWN,
                    currentTyreAgeLaps: 0,
                }
                if (tempDriver.carNumber !== undefined)
                    drivers.push(tempDriver);
            })
            // sort drivers by position
            drivers.sort((a, b) => {
                return a.position - b.position;
            })
            setDrivers(drivers);
        })
    }, []);
    const team: Team = {
        name: "Red Bull Racing",
        color: "#0600EF",
    }

    const sector: sector = {
        sectorNumber: 1,
        sectorTime: 94.42,
        isPersonalBest: true,
        isSessionBest: true,
    }
    const lap: Lap = {
        number: 1,
        totalTime: 94.44,
        sectors: [
            sector,
            sector,
            sector
        ],
        isInvalid: false,
        isOutlap: false,
        isInLap: false,
        isPersonalBest: true,
        isSessionBest: true,
    }


    return (
        <div className="flex flex-col h-full bg-black">
            <InfoBar data={sessionInfo}/>
            <div className="flex flex-row h-full w-full bg-black">
                <div className="w-3/5">
                    <TimingBoard Drivers={drivers}/>
                </div>
                <div className="w-2/5">
                    <TrackMap/>
                </div>
            </div>
        </div>
    );
}

export default App;
