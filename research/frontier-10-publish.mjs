// frontier-10 publishing commit — flip drafts, stamp the owner audit.
//
// Owner authorised publication on 2026-08-11 at the step-10 pause.
//
// Scope is the BATCH MANIFESTS, never "every draft in items/": 51 pre-existing
// `rem-*` deferred-catalogue items are drafts by design and must not be touched.
//
// --apply to write; default is a dry run.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';

const apply = process.argv.includes('--apply');
const AUDITED = '2026-08-11';

const ids = new Set();
for (const f of readdirSync('research').filter((x) => /^frontier-10-batch-\d+\.pages\.json$/.test(x))) {
  for (const page of JSON.parse(readFileSync(`research/${f}`, 'utf8'))) {
    for (const it of page.items ?? []) ids.add(typeof it === 'string' ? it : it.id);
  }
}

let flipped = 0, alreadyPublished = 0, missing = [];
for (const id of ids) {
  const path = `items/${id}.md`;
  if (!existsSync(path)) { missing.push(id); continue; }
  let t = readFileSync(path, 'utf8');

  if (/^status:\s*published/m.test(t)) { alreadyPublished++; continue; }
  if (!/^status:\s*draft/m.test(t)) { missing.push(`${id} (unexpected status)`); continue; }

  t = t.replace(/^status:\s*draft/m, 'status: published');

  // `audited` goes inside the existing verification block, after precheck.
  if (/^\s+audited:/m.test(t)) {
    t = t.replace(/^(\s+)audited:.*/m, `$1audited: ${AUDITED}`);
  } else if (/^verification:\n/m.test(t)) {
    t = t.replace(/^(verification:\n(?:[ \t]+.*\n)*)/m, (block) => `${block}  audited: ${AUDITED}\n`);
  } else {
    missing.push(`${id} (no verification block)`);
    continue;
  }
  if (apply) writeFileSync(path, t);
  flipped++;
}

console.log(`scope ${ids.size} item(s) from the batch manifests`);
console.log(`  to flip draft -> published: ${flipped}`);
console.log(`  already published (enrichment context): ${alreadyPublished}`);
if (missing.length) { console.log(`  PROBLEMS (${missing.length}):`); for (const m of missing) console.log(`    ${m}`); }
if (!apply) console.log('\nDRY RUN — nothing written. Pass --apply.');
