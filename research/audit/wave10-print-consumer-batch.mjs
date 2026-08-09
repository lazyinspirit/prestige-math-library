#!/usr/bin/env node

import { readFileSync } from 'node:fs';

const index = Number(process.argv[2]);
if (!Number.isInteger(index) || index < 0) throw new Error('usage: node research/audit/wave10-print-consumer-batch.mjs <index>');
const manifest = JSON.parse(readFileSync('research/audit/wave10-audit-manifest.json', 'utf8'));
const wave = new Set(JSON.parse(readFileSync('research/audit/wave10-real-analysis.pages.json', 'utf8')).flatMap((page) => page.items.map((entry) => entry.id)));
const dependencies = new Set(manifest.edges.filter((edge) => !wave.has(edge.target)).map((edge) => edge.target));
const spine = new Set(JSON.parse(readFileSync('research/audit/wave10-spine-audit.json', 'utf8')).scope.map((entry) => entry.id));
const required = JSON.parse(readFileSync('research/audit/wave10-impact-template.json', 'utf8')).required_review;
const alreadyRead = new Set([...wave, ...dependencies, ...spine]);
const remaining = required.filter((id) => !alreadyRead.has(id));
const batches = [];
let current = [];
let lines = 0;
for (const id of remaining) {
  const text = readFileSync(`items/${id}.md`, 'utf8');
  const count = text.split(/\n/).length;
  if (current.length && lines + count > 450) {
    batches.push(current);
    current = [];
    lines = 0;
  }
  current.push({ id, text });
  lines += count;
}
if (current.length) batches.push(current);
if (!batches[index]) throw new Error(`batch ${index} absent; valid range 0..${batches.length - 1}`);
for (const { id, text } of batches[index]) process.stdout.write(`\n===== CONSUMER ${id} =====\n${text}`);
