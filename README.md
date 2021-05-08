# Judge Connector

This is a template project to facilitate the implementation of a new Judge Connector following the Judge Integration Protocol (JIP)

You will need to implement the following REST routes:

Request:

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

Request:

```
GET /users/:user/submissions
```

Response:

```json
{
  "problemId": "judge_problemId",
  "momentInSeconds": "long",
  "verdict": "enumeration of (SOLVED, TRIED)"
}
```
