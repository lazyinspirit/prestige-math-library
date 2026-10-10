#!/usr/bin/env node
// Usage: proof-contract-coverage.mjs --run RUN --contracts FILE [--root REPO] [--json]
// The shared implementation parses and validates these arguments.
import { fileURLToPath } from 'node:url';
import { coverageCli } from '../proof-contract-coverage.mjs';
coverageCli(fileURLToPath(new URL('../../physics/', import.meta.url)));
