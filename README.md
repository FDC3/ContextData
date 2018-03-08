# ContextData
Context data object specifications, schemas, and examples

* Extending APIs from one App to another is powerful...
* However, it requires building to a specific API ahead of time
* Standard context and intent definitions let us create workflows on the fly

FDC3 Context Data defines a standard way to pass common identifiers between apps to create a seamless workflow.  FDC3 Context Data is not a symbology solution and is not focused on modeling financial objects.  The focus is on providing a standard envelope and a standard set of identifiers that can be used to set a lowest common denominator for interop.

## Context Envelope Structure
```javascript
{
object: (string) //object type
definition: (string) //url
version: (string) //version # (semver)
data: (array) //the context payload
}
```
## Example Context Object
```javascript
{ “object” : ”fdc3-context”, 
  “definition” : ” https://fdc3.org...”, 
  “version” : ”1.0.0”,
  “data” : [ 
    { 
      “type” : ”security”,
      “name” : ”Apple”,
      “id” : {
        “ticker” : ”aapl”,
        “ISIN” : “US0378331005”,
        “CUSIP” : “037833100”,
        “FIGI” : ”BBG000B9XRY4”,
        “default“ : “aapl”
    }}
]}
```
