export type Lap = {
    number: number;
    totalTime: number;
    sectors: sector[];
    isInvalid: boolean;
    isOutlap: boolean;
    isInLap: boolean;
    isPersonalBest: boolean;
    isSessionBest: boolean;
}

export type sector = {
    sectorNumber: number;
    sectorTime: number;
    isPersonalBest: boolean;
    isSessionBest: boolean;
}