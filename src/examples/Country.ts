interface Country extends Context {
  type: 'fdc3.country',
  name?: string;
  id: {
    'ISOAlpha2'?: string;
    'ISOAlpha3'?: string;
  }
}
