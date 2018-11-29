interface InstrumentList extends Context {
  $type: 'fdc3.instrumentList',
  id: {
    instrumentListId?: string;
  },
  instruments: Instrument[]
}
