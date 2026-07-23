// Mechanical phase-format verifier for library items.
// Run from the content repo root (worker's tsx supplies the TS loader):
//   npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/precheck.mts [item.md ...]
// Bare invocation checks every proof-bearing item under items/.
// Normative checker: worker/src/precheck.ts (do not substitute the stale
// test-fixture pc-reference.cjs — its tag vocabulary predates choose/suffices/C#).
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { proposedPrecheck } from '/root/Projects/prestige-intelligence/worker/src/precheck.ts';

const BODY_MARKER = /\n## (Proof|Refutation|Verification|Counterexample)\n/;
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync('items').filter(f => f.endsWith('.md')).map(f => join('items', f));

let failed = 0, checked = 0;
for (const file of files) {
  const md = readFileSync(file, 'utf8');
  const m = md.split(BODY_MARKER);
  if (m.length < 3) continue; // no phase-format body (def/rem/ex without Verification)
  const strategy = md.match(/^proof_strategy:\s*(\S+)/m)?.[1];
  if (!strategy) { console.log(`FAIL ${file}: phase body but no proof_strategy in frontmatter`); failed++; continue; }
  const r = proposedPrecheck(m[m.length - 1].trim(), strategy);
  checked++;
  if (r.err) { console.log(`FAIL ${file}: ${r.err}`); failed++; }
  else if (r.repaired) {
    console.log(`REPAIR ${file}: passes only after auto-repair — adopt the canonical form:`);
    console.log((r.proof ?? '').split('\n').map(l => '  | ' + l).join('\n'));
    failed++;
  } else console.log(`PASS ${file} (${strategy})`);
}
console.log(`\n${checked} checked, ${failed} failing${failed ? '' : ' — all clean'}`);
process.exit(failed ? 1 : 0);
