Listening
/app/node_modules/pg-pool/index.js:45
    Error.captureStackTrace(err);
          ^

error: no pg_hba.conf entry for host "10.100.55.221", user "postgres", database "postgres", no encryption
    at /app/node_modules/pg-pool/index.js:45:11
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  length: 161,
  severity: 'FATAL',
  code: '28000',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: undefined,
  schema: undefined,
  table: undefined,
  column: undefined,
  dataType: undefined,
  constraint: undefined,
  file: 'auth.c',
  line: '543',
  routine: 'ClientAuthentication'
}

Node.js v20.5.1