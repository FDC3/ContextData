# FDC3 Context Objects - Version 0.0.1 #
## Context Object Overview ##

* To interoperate, Apps need to exchange commonly recognized context structures that can indicate topic with any number of identifiers or mappings to different systems.  
* Exchanging context is the most basic entry point to desktop interoperability.  The barriers to adoption for this interaction must be kept as low as possible.
* Best approach is to transmit as many known identifiers as possible and recipients take what they can understand and ignore the rest.
* Rendering of context is best left to end points, and it should be left to end points to provide the reference data required for that rendering.
* Metadata provided with context identifiers should have the following goals:
  * Facilitate routing of the context to Apps that can accept it.
  * Allow providing for some basic, human readable cues for end-user lead ambiguity resolution.

## Other Standards ##
FDC3 recognizes that there are other object definitions for providing context between applications.  Most, if not all of these definitions though are platform specific.  FDC3, as a rule, sets out to be platform agnostic and focused on creating bridges between the various walled gardens on the financial desktop.  

## The Context Envelope ##

```javascript
{
	"object": (string), //object type
	"definition": (string) //uri of object type definition
	"version": (string) //version # (semver)
	"data": (array) //the context payload
}
```

### Examples ###
#### FDC3 Context Object ####
```javascript
{
   "object" : "fdc3-context",
   "definition" : "https://fdc3.org/context/1.0.0/",
   "version" : "1.0.0",
   "data" :
       [
          {
             "type" : "security",
    	 "name" : "Apple",
	 "id" : 
               {  
                  "ticker" : "aapl"
                   "ISIN" : "US0378331005",
                   "CUSIP" : "037833100",
                   "FIGI" : "BBG000B9XRY4",
                   "default" : "aapl"
               }
          }
      ]
}
```

#### Including a Symphony Financial Object in a FDC3 payload ####
```javascript
{
  object:"org.symphonyoss",
  version:"0.2",
  url:"https://symphonyoss.atlassian.net/wiki/x/RgBnAQ",
  data:[
  {
    "type":         "org.symphonyoss.fin.security",
    "version":      "0.2",
    "shortname":    "AAPL",
    "longname":     "Apple Inc.",
    "localname":    "Apple Inc.",
    "country":      "US",
    "id":
    [
        {"type":     "org.symphonyoss.fin.security.id.isin",
         "value":    "US0378331005"},
        {"type":     "org.symphonyoss.fin.security.id.cusip",
         "value":    "037833100"},
        {"type":     "org.symphonyoss.fin.security.id.openfigi",
         "value":    "BBG000B9XRY4"},
        {"type":     "org.symphonyoss.fin.security.id.ticker",
         "value":    "APPL"
        },
        {"type":     "com.factset.symbology.regionalticker",
            "value":    "AAPL-US"}
    ]
   }
  ]
}
```

## Context Data Payload ##
### Properties ###
* **type** - A type for the context - used for resolution, filtering and matching an app context to the supported contexts of other Apps on the desktop.
* **name** -  human readable name for the context (generally to be used for display)
* **id** - a dictionary of identifiers for the context item
* **primary** - (optional) indicates if a context item is the primary item in a multi-context list

For most context types, name plus an ID dictionary is sufficient.  Some context types support additional qualifiers that provide value for selecting and disambiguating.  The Security type supports a ‘class’ property for designating the asset class, Quote type supports the ‘exchange’ property for designating the exchange that the issue is traded on.   
### Common Types & Identifiers ###
* Organization
  * LEI
  * PERMID
* Security
  * ticker
  * exchange
  * CUSIP
  * ISIN
  * SEDOL
  * RIC
  * BBG
  * PERMID
  * FIGI
* Industry
  * GICS
  * NAICS
* Geo
  * ISO-2
  * ISO-3
  * geocode
* Person
  * name
  * PERMID
* Contact
  * name
  * email
  
#### Note ####
Where an identifier is the name of an existing standard, external to FDC3, it's represented in all caps. For example: FIGI, PERMID, CUSIP, ISO-2. When an identifer is a more general concept, it is represented in all lower case.  For example: ticker, name, geocode, email.

### Proprietary Identifiers ###
All standard identifier names are reserved names. Applications may use their own identifiers ad hoc. For example:
```javascript
id:{
    "CUSIP":"1234",
    "foo":"bar"
}
```
The identifier “foo” is proprietary, an application that can use it is free to do so. However, since multiple applications may want to use the "foo” name and may use it to mean different things, there is a need for applications to ensure that their identifiers use naming conventions that will avoid collision. The recommended approach here is to prefix the identifier name with a prefix of “appname.identifier”. For example, if the app above were “my-app”, the id block would look like this:
```javascript
id:{
    "CUSIP":"1234",
    "my-app.foo":"bar"
}
```

## Examples ##

### IBM as an Organization ###
```javascript
{
   "object" : "fdc3-context",
   "definition" : "https://fdc3.org/context/1.0.0/",
   "version" : "1.0.0",
   "data" :
   [
     {
	"name":"International Business Machines",
	"type":"Organization",
	"id":{
		"default" : "ibm",
		"PERMID" : "4295904307",
		"LEI" : "VGRQXHF3J8VDLUA7XE92"
	}
      }
   ]
}
```

### IBM Bond as a Security ###
```javascript
{
   "object" : "fdc3-context",
   "definition" : "https://fdc3.org/context/1.0.0/",
   "version" : "1.0.0",
   "data" :
   [
	{
		"name":"IBM 6.25% of '19",
                "type":"Security",
                "id" : {
		"default" : "IBM 6.25% of '19",
  	        "CUSIP" : "090241201"
                }
        }
   ]
}
```
### Person and Organization ###
```javascript
{
   "object" : "fdc3-context",
   "definition" : "https://fdc3.org/context/1.0.0/",
   "version" : "1.0.0",
   "data" : [
    {

	"name":"Virginia (Ginni) M. Rometty",
        "type":"Person",
        "id":{
		"default" : "Virginia Rometty",
	        "PERMID" : "34415504516"
            }
	},
        {
	"name":"International Business Machines",
	"type":"Organization",
	"id":{
		"default":"ibm"
	}
    }

   ]
}
```
### Industry ###
```javascript
{
   "object" : "fdc3-context",
   "definition" : "https://fdc3.org/context/1.0.0/",
   "version" : "1.0.0",
   "data" :
   [
          {
	    "name":"Information Technology",
	    "type":"Industry",
	    "id":{
		"default":"Information Technology",
		"GICS":"45"
	        }
          }
   ]
}

### Geo ###
{
   "object" : "fdc3-context",
   "definition" : "https://fdc3.org/context/1.0.0/",
   "version" : "1.0.0",
   "data" :
   [
      {
	"name":"United States of America",
	"type":"Geo",
	"id":{
		"default":"USA",
		"ISO ALPHA-2":"US",
		"ISO ALPHA-3":"USA"
	}
     }
  ]
}
```
### Contact ###
```javascript
{
   "object" : "fdc3-context",
   "definition" : "https://fdc3.org/context/1.0.0/",
   "version" : "1.0.0",
   "data" :
   [
      {
	"name":"Nick Kolba",
	"type":"Contact",
	"id":{
		"default":"Nick Kolba",
		"email":"nick@openfin.co",
		"twitter":"nkolba",
		"phone":"9171234567"
	}
      }
   ]
}
```
