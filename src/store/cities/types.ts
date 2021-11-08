export interface City {
    [key: string | number]: any
}

export interface CitiesState {
    cities: Array<City>;
    addCityError: string
}

export interface Coords {
    lat: string,
    lon: string
}
