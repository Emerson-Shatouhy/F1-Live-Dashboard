export type SessionInfo = {
    name: string;
    flagUrl: string;
    sessionType: SessionType;
    trackStatus: TrackStatus;
    sessionTimeLeft: number;
    currentLap: number;
    totalLaps: number;
    weather: Weather;
};

export enum SessionType {
    PRACTICE1 = 'Practice 1',
    PRACTICE2 = 'Practice 2',
    PRACTICE3 = 'Practice 3',
    QUALIFYING = 'Qualifying',
    RACE = 'Race',
    SPRINT_QUALIFYING = 'Sprint Qualifying',
    SPRINT = 'Sprint',
}

export enum TrackStatus {
    AllClear = 1,
    Yellow = 2,
    Unknown = 3,
    SCDeployed = 4,
    Red = 5,
    VSCDeployed = 6,
    VSCEnding = 7,
}

export type Weather = {
    airTemperature: number;
    trackTemperature: number;
    humidity: number;
    windSpeed: number;
    windDirection: number;
    pressure: number;
}