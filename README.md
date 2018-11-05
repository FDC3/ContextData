# ContextData
Context data object specifications, schemas, and examples:

* Extending APIs from one App to another is powerful...
* However, it requires building to a specific API ahead of time
* Standard context and intent definitions let us create workflows on the fly

FDC3 Context Data defines a standard way to pass common identifiers and data between apps to create a seamless workflow.  FDC3 Context Data is not a symbology solution and is not specifically focused on modeling financial objects.  The focus is on providing a standard payload structure that can be used to establish a lowest common denominator for interoperability.

Context objects are used when [declaring]() and [raising]() intents, and when [broadcasting]() context to other applications.

## Context Object

Context can be summarised as:
* Having a unique _$type_ identifier, used for routing.
* Optionally providing a name.
* Optionally providing a map of equivalent identifiers.
* Any other properties or metadata.
```typescript
interface Context {
    $type: string;
    name?: string;
    id?: {
        [x:string]: string;
    },
    [x: string]: any;
}
```
## Example Context Object

An instrument could for example be derived as (note that the name is required and the type is fixed):

```typescript
interface Instrument extends Context {
    $type: 'fdc3.instrument',
    name: string;
    id: {
        ticker?: string;
        ISIN?: string;
        CUSIP?: string;
    }
}
```

E.g. as a JSON payload:

```json
{
    "$type" : "fdc3.instrument",
    "name" : "Apple",
    "id" : 
    {  
        "ticker" : "aapl",
        "ISIN" : "US0378331005",
        "CUSIP" : "037833100"
    },
    "country": "US"
}
```
 It is important to note that the context data specification allows extra identifiers and properties to be added as needed for each interop use case. In the example above, "country" could represent extra metadata in addition to the agreed instrument representation.
