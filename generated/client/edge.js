
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


const dirname = '/'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/squirrelpython/deno-provolume/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.5.0",
  "engineVersion": "0362da9eebca54d94c8ef5edd3b2e90af99ba452",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXMiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgIFN0cmluZyBAdW5pcXVlCiAgZGVzY3JpcHRpb24gU3RyaW5nCn0K'
config.inlineSchemaHash = 'd3342b5b8db1f5c11d54b26d4bec2b26f364e8e6f66c190cf78360dfb6179895'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

