export interface Departure {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string;
    gate: string;
    delay?: number;
    scheduled: Date;
    estimated: Date;
    actual: Date;
    estimated_runway: Date;
    actual_runway: Date;
}

export interface Arrival {
    airport: string;
    timezone: string;
    iata: string;
    icao: string;
    terminal: string;
    gate: string;
    baggage?: any;
    delay?: number;
    scheduled: Date;
    estimated: Date;
    actual?: Date;
    estimated_runway?: Date;
    actual_runway?: Date;
}

export interface Airline {
    name: string;
    iata: string;
    icao: string;
}

export interface Codeshared {
    airline_name: string;
    airline_iata: string;
    airline_icao: string;
    flight_number: string;
    flight_iata: string;
    flight_icao: string;
}

export interface Flight {
    number: string;
    iata: string;
    icao: string;
    codeshared: Codeshared;
}

export interface FlightData {
    flight_date: string;
    flight_status: string;
    departure: Departure;
    arrival: Arrival;
    airline: Airline;
    flight: Flight;
    aircraft?: any;
    live?: any;
}