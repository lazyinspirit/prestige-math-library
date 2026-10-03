// Mechanical phase-format verifier for library items.
// Run from the content repo root (the app repo's tsx supplies the TS loader):
//   node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts [item.md ...]
// Bare invocation checks every proof-bearing item under items/.
// Normative checker: worker/src/precheck.ts (do not substitute the stale
// test-fixture pc-reference.cjs — its tag vocabulary predates choose/suffices/C#).
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { splitFrontmatter } from './facts-block.mjs';
import { NONPROOF_KINDS } from './physics-content.mjs';
import { precheckSource } from './paths.mjs';

// The normative checker lives in the app repo, whose location is resolved at run
// time rather than hardcoded (tools/physics-support/paths.mjs). A static import cannot take a
// computed path, so this is a top-level dynamic import; tsx resolves the .ts.
const { proposedPrecheck } = await import(pathToFileURL(precheckSource()).href);

const BODY_MARKER = /\n## (Proof|Refutation|Verification|Counterexample)\n/;

/** Extract the checkable text: facts declarations + steps. New format = the
 *  "## Facts & Assumptions" section onward with markdown headings stripped;
 *  old format = the body after the proof-section heading. */
function checkableText(md: string): string | null {
  const fa = md.split(/\n## Facts & Assumptions\n/);
  if (fa.length >= 2) return fa[fa.length - 1].replace(/^## .*$/gm, '').trim();
  const m = md.split(BODY_MARKER);
  if (m.length >= 3) return m[m.length - 1].trim();
  return null;
}
const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const files = argv.filter(arg => arg !== '--json').length
  ? argv.filter(arg => arg !== '--json')
  : readdirSync('items').filter(f => f.endsWith('.md')).map(f => join('items', f));

let failed = 0, checked = 0;
const results: Array<Record<string, unknown>> = [];
for (const file of files) {
  const md = readFileSync(file, 'utf8');
  const kind = parseFrontmatter(splitFrontmatter(md).fm).kind;
  if (NONPROOF_KINDS.has(kind)) {
    checked++;
    if (/^## (Proof|Refutation|Verification|Counterexample)\s*$/m.test(md)) { failed++; results.push({ file, status: 'fail', error: 'nonproof item has a proof section' }); }
    else { results.push({ file, status: 'pass', check: 'nonproof-structure' }); if (!asJson) console.log(`PASS ${file} (nonproof structure)`); }
    continue;
  }
  const text = checkableText(md);
  const item_id = file.replaceAll('\\', '/').split('/').at(-1)?.replace(/\.md$/, '');
  if (text === null) {
    results.push({ file, item_id, status: 'not-applicable' });
    continue; // no phase-format body (def/rem/ex without Verification)
  }
  const strategy = md.match(/^proof_strategy:\s*(\S+)/m)?.[1];
  if (!strategy) {
    results.push({ file, item_id, status: 'fail', error: 'phase body but no proof_strategy in frontmatter' });
    if (!asJson) console.log(`FAIL ${file}: phase body but no proof_strategy in frontmatter`);
    failed++; continue;
  }
  const r = proposedPrecheck(text, strategy);
  checked++;
  if (r.err) {
    results.push({ file, item_id, status: 'fail', strategy, error: r.err });
    if (!asJson) console.log(`FAIL ${file}: ${r.err}`);
    failed++;
  }
  else if (r.repaired) {
    results.push({ file, item_id, status: 'repair', strategy, proposed_proof: r.proof ?? '' });
    if (!asJson) {
      console.log(`REPAIR ${file}: passes only after auto-repair — adopt the canonical form:`);
      console.log((r.proof ?? '').split('\n').map(l => '  | ' + l).join('\n'));
    }
    failed++;
  } else {
    results.push({ file, item_id, status: 'pass', strategy });
    if (!asJson) console.log(`PASS ${file} (${strategy})`);
  }
}
if (asJson) console.log(JSON.stringify({ summary: { files: files.length, checked, failed }, results }, null, 2));
else console.log(`\n${checked} checked, ${failed} failing${failed ? '' : ' — all clean'}`);
process.exit(failed ? 1 : 0);
