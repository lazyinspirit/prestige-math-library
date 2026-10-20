#!/usr/bin/env node
// Check only authored subjects in this run's manifests, never external suppliers.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { inspectStatement, statementRuntime } from './statement-first.mjs';
import { readStatementPolicy } from './statement-first-policy.mjs';
export async function checkStatementFrontier(root, run, domain) {
  if (!readStatementPolicy(root, run, domain)) throw Error('Missing run-local statement-first policy');
  const names = readdirSync(join(root, 'research')).filter(name =>
    name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length)));
  if (!names.length) throw Error('No statement-first frontier manifests');
  const ids = new Set();
  for (const name of names) {
    const pages = JSON.parse(readFileSync(join(root, 'research', name), 'utf8'));
    if (!Array.isArray(pages) || !pages.length) throw Error(`Empty/malformed manifest ${name}`);
    for (const page of pages) {
      if (!Array.isArray(page.items) || !page.items.length) throw Error(`Empty item inventory ${name}:${page.id}`);
      for (const row of page.items) {
        const id = typeof row === 'string' ? row : row.id;
        if (!/^[a-z]+-[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(id ?? '')) throw Error(`Invalid frontier item ${name}`);
        if (ids.has(id)) throw Error(`Duplicate frontier item ${id} in ${name}`);
        ids.add(id);
      }
    }
  }
  if (!ids.size) throw Error('Empty statement-first item scope');
  const imported = domain === 'physics' && existsSync(join(root, 'research/math-imports.json'))
    ? new Set(JSON.parse(readFileSync(join(root, 'research/math-imports.json'), 'utf8')).files.map(row => row.path)) : new Set();
  const {yaml} = await statementRuntime(), errors = [];
  for (const id of [...ids].sort()) {
    const path = `items/${id}.md`;
    if (imported.has(path)) throw Error(`Imported supplier cannot be an authored editorial subject: ${id}`);
    const source = readFileSync(join(root, path), 'utf8');
    const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
    if (!match) throw Error(`Missing frontmatter: ${id}`);
    const data = yaml.parse(match[1]);
    if (!data || data.id !== id || typeof data.kind !== 'string') throw Error(`Invalid item identity: ${id}`);
    errors.push(...await inspectStatement(id, data.kind, match[2]));
  }
  return {items: ids.size, errors};
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2), get = flag => args[args.indexOf(flag) + 1];
  const domain = get('--domain'), run = get('--run');
  if (!['math', 'physics'].includes(domain) || !args.includes('--run')) throw Error('Use --run RUN --domain math|physics');
  const result = await checkStatementFrontier(process.cwd(), run, domain);
  for (const error of result.errors) console.error(`ERROR statement-first: ${error}`);
  console.log(`statement-first: ${result.items} item(s) checked; ${result.errors.length} defect(s)`);
  process.exitCode = result.errors.length ? 1 : 0;
}
