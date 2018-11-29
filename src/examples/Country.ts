interface Country extends Context {
    type: 'fdc3.country',
    id: {
        ISOALPHA2?: string;
        ISOALPHA3?: string;
    }
}