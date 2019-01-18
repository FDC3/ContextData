---
layout: default
sidebar: true
---

### Context Envelope Structure
```javascript
{
object: (string) //object type
definition: (string) //url
version: (string) //version # (semver)
data: (array) //the context payload
}
```
### Example Context Object
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
