// Mechanical phase-format verifier for library items.
// Run from the content repo root (the app repo's tsx supplies the TS loader):
//   node tools/tsx-run.mjs tools/precheck.mts [item.md ...]
// Bare invocation checks every proof-bearing item under items/.
// Normative checker: worker/src/precheck.ts (do not substitute the stale
// test-fixture pc-reference.cjs — its tag vocabulary predates choose/suffices/C#).
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';
import { precheckSource } from '../../../../tools/paths.mjs';

// The normative checker lives in the app repo, whose location is resolved at run
// time rather than hardcoded (tools/paths.mjs). A static import cannot take a
// computed path, so this is a top-level dynamic import; tsx resolves the .ts.
const { proposedPrecheck } = await import(pathToFileURL(precheckSource()).href);

const BODY_MARKER = /\n## (Proof|Refutation|Verification|Counterexample)\n/;

/** Extract the checkable text: facts declarations + steps. New format = the
 *  "## Facts & Assumptions" section onward with markdown headings stripped;
 *  old format = the body after the proof-section heading. */
// Bibliography and editorial notes are outside the phase proof. Keep every
// declaration and proof step, and trim metadata only after the last proof heading.
function phaseText(md: string): string {
  const headings = [...md.matchAll(/^## (Proof|Refutation|Verification|Counterexample)\s*$/gm)];
  const last = headings.at(-1)?.index;
  if (last === undefined) return md;
  const tail = md.slice(last);
  const end = tail.search(/^## (Remarks|Sources|Source notes|References|Bibliography)\s*$/m);
  return end < 0 ? md : md.slice(0, last + end);
}
function checkableText(md: string): string | null {
  md = phaseText(md);
  const fa = md.split(/\n## Facts & Assumptions\n/);
  if (fa.length >= 2) return fa[fa.length - 1].replace(/^## .*$/gm, '').trim();
  const m = md.split(BODY_MARKER);
  if (m.length >= 3) return m[m.length - 1].trim();
  return null;
}

import { createHash } from 'node:crypto';
import { writeFileSync } from 'node:fs';
const run='frontier-44-special-representation-examples-28';
const manifests=readdirSync('research').filter(f=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(f));
const selected=manifests.flatMap(f=>JSON.parse(readFileSync('research/'+f,'utf8')).flatMap((p:any)=>p.items.map((i:any)=>({id:i.id,page:p.id,batch:f.match(/batch-(\d+)/)?.[1]}))));
if(selected.length!==875||new Set(selected.map((x:any)=>x.id)).size!==875)throw Error('Wrong frontier inventory');
const failures:any[]=[];let applicable=0;
for (const i of selected) {
 const path='items/'+i.id+'.md',md=readFileSync(path,'utf8'),text=checkableText(md);if(text===null)continue;
 const strategy=md.match(/^proof_strategy:\s*(\S+)/m)?.[1];if(!strategy){failures.push({...i,path,error:'phase body but no proof_strategy'});continue;}
 applicable++;const r=proposedPrecheck(text,strategy);if(r.err||r.repaired)failures.push({...i,path,strategy,error:r.err??'auto-repair-required',proposed_proof:r.proof??null,before_raw_sha256:createHash('sha256').update(md).digest('hex'),checkable_text:text});
}
const output={version:1,run,mode:'Read-only copied wrapper extraction and normative proposedPrecheck parser, selected manifest875 only, no native gate',selected:selected.length,applicable,failures};
writeFileSync('research/'+run+'-owner-greeting-recovery-20261011/final-scope-currency/precheck-single-current/parser-findings.json',JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify({selected:selected.length,applicable,failures:failures.map(({id,error,strategy}:any)=>({id,error,strategy}))}));
