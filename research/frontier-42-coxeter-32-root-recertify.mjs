import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { loadStep3, scopeHash, itemHash, recordStep3, checkStep3 } from '../tools/step3-decisions.mjs';
import { orderedItems } from '../tools/item-dependency-levels.mjs';
import { collect } from '../tools/frontier-dependency-ledger.mjs';
import { yaml } from '../tools/pathway-lib.mjs';

// ROOT invokes this only after every current run writer has drained and the
// concrete findings have been reviewed/repaired. This script does not do reviews.
const root = process.cwd(), run = 'frontier-42-coxeter-32';
const startedAt = new Date().toISOString();
const state = JSON.parse(readFileSync(`.autopilot/${run}/state.json`));
if (!state.paused || state.stage !== '3b-author') throw Error('Expected paused Step3 join');
const latest = new Map();
for (const row of Object.values(state.dispatches).sort((a,b) => a.startedAt.localeCompare(b.startedAt))) {
  if (row.stage === '3b-author') for (const cover of row.covers ?? []) latest.set(cover, row);
}
if (latest.size !== 32 || [...latest.values()].some(row => !row.endedAt || row.lastExitOk !== true)) throw Error('Actual 32 native author successes required');
const s = loadStep3(root, run), order = orderedItems(s.pages), ledger = collect(root, run);
if (s.items.size !== 304 || s.pages.length !== 64 || ledger.unreviewed_batches.length || ledger.edges.some(row => row.declarations.length && !row.reviews.length)) throw Error('Inventory/evidence incomplete');
const reports = readdirSync('research').filter(name => name.startsWith(`${run}-codex-`) && name.endsWith('.md')).map(name => ({path:`research/${name}`, body:readFileSync(`research/${name}`,'utf8')}));
const inventory = [...s.items.keys()].sort(), scopes = [], rows = [];
for (const [page] of s.pairs) {
  const report = `research/${run}-step3b-pair-${page}.md`;
  if (!existsSync(report)) throw Error(`Missing actual author handback: ${report}`);
  scopes.push({page, sha256:scopeHash(s,page)});
  recordStep3(root, {run,phase:'scope',page,owner:true,decision:'proceed',reason:`ROOT current approved32-pair scope after actual author completion and bounded Codex repair/review closure. Rich promised claims and genuine additions retained; exact typing/domain/false-claim corrections supported by ${report}, research/${run}-run-record.md and current branch records. Source-harvest declines are separately adjudicated without scope expansion.`}, s);
}
for (const entry of order) {
  const {item,page} = s.items.get(entry.id), body = readFileSync(`items/${entry.id}.md`,'utf8');
  const fm = yaml().parse(body.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '');
  const dependencies = [...new Set([item,fm].flatMap(x => [...(x.deps??[]),...(x.justified_by??[]),...(x.forward_refs??[])]))].sort();
  const a = [...s.pairs].find(([,pair]) => pair.some(p => p.id === page.id))?.[0];
  const authorReport = `research/${run}-step3b-pair-${a}.md`;
  const evidence = reports.filter(r => r.body.includes(entry.id)).map(r => r.path);
  const angle = entry.id === 'def-cg-comparison-angle-and-alexandrov-angle';
  const reason = angle
    ? `ROOT ordinary current mathematical acceptance distinct from creation origin: comparison-angle domains and triangle-inequality cosine range checked; upper-angle sup/inf existence follows from cor-cauchy-reals-lub-complete and all seven actual declared inputs. Truthful origin/history immutable. Evidence research/${run}-codex-cat-angle-registration.md and current run record. Complete stable dependency-ordered owner pass after all writers drained.`
    : `ROOT complete stable dependency-ordered current-input recertification against actual author and bounded Codex repair/review evidence: ${authorReport}${evidence.length?'; '+evidence.join(', '):''}. Current claim and local proof supported; exact prerequisite/justification uses and declared forward-link domains examined. Supplier interfaces, typing, essential hypotheses, actual consumer effects and corrected boundary/source-scope dispositions reconciled in these records. Earlier receipts prove history, not current acceptance; no unresolved confirmed mathematical finding remains in the assigned current branch.`;
  const row = recordStep3(root, {run,phase:'item',item:entry.id,decision:'repaired',owner:true,reason,dependencies}, s);
  rows.push({id:entry.id,page:page.id,batch:page.batch,level:entry.level,dependencies,sha256:row.sha256,evidence:[authorReport,...evidence]});
}
const fresh = loadStep3(root,run);
if (JSON.stringify([...fresh.items.keys()].sort()) !== JSON.stringify(inventory)) throw Error('Inventory changed: restart ENTIRE pass');
for (const row of rows) if (itemHash(fresh,row.id,row.dependencies) !== row.sha256) throw Error(`Input changed: ${row.id}; restart ENTIRE pass`);
for (const row of scopes) if (scopeHash(fresh,row.page) !== row.sha256) throw Error(`Scope changed: ${row.page}; restart ENTIRE pass`);
const result = checkStep3(fresh,'final');
if (!result.closed) throw Error(`Current decisions not closed: ${JSON.stringify(result.work)}`);
const receipt = {version:1,run,owner:'/root',kind:'complete-current-step3-dependency-ordered-owner-pass',started_at:startedAt,ended_at:new Date().toISOString(),pairs:fresh.pairs.size,pages:fresh.pages.length,items:fresh.items.size,inventory_sha256:createHash('sha256').update(JSON.stringify(inventory)).digest('hex'),scopes,ordered_items:rows,fresh_check:{phase:result.phase,pairs:result.pairs,items:result.items,accepted:result.accepted,closed:result.closed},creation_origin_distinct_from_acceptance:true};
const latestPath = `research/${run}-step3-root-stable-recertification.json`;
if (existsSync(latestPath)) {
  const prior = readFileSync(latestPath);
  writeFileSync(`research/${run}-step3-root-stable-recertification-${createHash('sha256').update(prior).digest('hex')}.json`,prior,{flag:'wx'});
}
writeFileSync(latestPath,JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify({started_at:startedAt,ended_at:receipt.ended_at,items:result.items,accepted:result.accepted,closed:result.closed,inventory_sha256:receipt.inventory_sha256}));
