# Online Judge Connector

This is a template project to facilitate the implementation of a new Online Judge Connector following the Online Judge Integration Protocol (OJIP)

You will need to implement the following HTTP routes:

**Pay attention for the format of the requests return**

Request:
Returns a list with all the available problems.

```
GET /problems
```

Response:

```json
[{
  "id": "{connectorName}_{problemId}",
  "name": "string",
  "level": "number",
  "topics": ["string"]
}]
```

Request:

Returns the user requested or Not Found and a custom error message if it does not exists.

```
GET /users/:user
```

Response:

```json
{
  "name": "string",
  "level": "number"
}
```

**Note that it is crucial to mantain the problems levels and the users levels in the same scale**

Request:

```
GET /users/:user/submissions
```

Response:

```json
[{
  "problemId": "{connectorName}_{problemId}",
  "momentInSeconds": "long", 
  "verdict": "enumeration of (SOLVED, TRIED)"
}]
```
