import {Team} from "./Team";
import {Lap, sector} from "./Lap";

export type Driver = {
    name: string;
    team: Team;
    carNumber: number;
    shortName: string;
    headshotUrl: string;
    namePill: string;
    country: string;
    pitStops: number;
    laps: Lap[];
    bestSectors: sector[];
    bestLap: Lap;
    position: number;
    gapToLeader: number;
    gapToNext: number;
    DRSStatus: DRSStatus;
    currentTyreCompound: TyreCompound;
    currentTyreAgeLaps: number;
    driverStatus: DriverStatus;
};

export enum DriverStatus {
    ON_TRACK = 'On Track',
    IN_PITS = 'In Pits',
    FINISHED = 'Finished',
    DNF = 'DNF',
    DQ = 'DQ',
    NOT_CLASSIFIED = 'Not Classified',
    NOT_STARTED = 'Not Started',
    UNKNOWN = 'Unknown',
}

export enum TyreCompound {
    SOFT = 'Soft',
    MEDIUM = 'Medium',
    HARD = 'Hard',
    INTERMEDIATE = 'Intermediate',
    WET = 'Wet',
    UNKNOWN = 'Unknown',
}

export enum DRSStatus {
    ALLOWED = 'Allowed',
    ENABLED = 'Enabled',
    DISABLED = 'Disabled',
    UNKNOWN = 'Unknown',
}