#!/usr/bin/env node
// Ensure every planned item records its dependency list explicitly.
// Missing `deps` means the later reconciliation cannot distinguish "planned
// empty" from "plan evidence absent". The only mechanical repair is to make
// that omission explicit as `deps: []`; malformed non-array values stay errors.

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const write = args.includes('--write');
const files = args.filter((arg) => arg !== '--write');
if (!files.length) {
  console.error('usage: node tools/manifest-deps.mjs [--write] <batch.pages.json> [...]');
  process.exit(2);
}

const parsed = [];
const missing = [];
const errors = [];
let itemCount = 0;

for (const file of files) {
  let manifest;
  try { manifest = JSON.parse(readFileSync(file, 'utf8')); }
  catch (cause) { errors.push(`${file}: ${cause.message}`); continue; }
  if (!Array.isArray(manifest)) { errors.push(`${file}: expected a page array`); continue; }
  parsed.push({ file, manifest });
  for (const page of manifest) {
    if (!Array.isArray(page?.items)) {
      errors.push(`${file}: page ${page?.id ?? '?'} needs an items array`);
      continue;
    }
    for (const item of page.items) {
      itemCount += 1;
      if (!item || typeof item !== 'object' || Array.isArray(item) || typeof item.id !== 'string') {
        errors.push(`${file}: page ${page?.id ?? '?'} contains an item without an object id`);
      } else if (!Object.hasOwn(item, 'deps')) {
        missing.push({ file, id: item.id, item });
      } else if (!Array.isArray(item.deps)) {
        errors.push(`${file}: ${item.id} deps must be an array`);
      }
    }
  }
}

for (const error of errors) console.error(`ERROR ${error}`);
if (errors.length) {
  console.log(`manifest-deps: ${itemCount} item(s), ${missing.length} missing, ${errors.length} error(s)`);
  process.exit(1);
}

if (!write && missing.length) {
  for (const row of missing) console.error(`ERROR ${row.file}: ${row.id} needs an explicit deps array`);
  console.log(`manifest-deps: ${itemCount} item(s), ${missing.length} missing, 0 error(s)`);
  process.exit(1);
}

if (write && missing.length) {
  const dirty = new Set();
  for (const row of missing) { row.item.deps = []; dirty.add(row.file); }
  for (const row of parsed) {
    if (dirty.has(row.file)) writeFileSync(row.file, `${JSON.stringify(row.manifest, null, 2)}\n`);
  }
}

console.log(`manifest-deps: ${itemCount} item(s), ${write ? missing.length : 0} normalized, 0 error(s)`);
