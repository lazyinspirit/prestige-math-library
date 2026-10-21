// Research-only: never writes contracts, sources, hashes, state, or gate output.
import fs from 'node:fs';
import path from 'node:path';
import { numberedProofSteps, splitFrontmatter } from '../../../../tools/facts-block.mjs';

const RUN = 'inverse-problems-knot-theory-all-109-2026-10-19';
const S2 = `research/${RUN}-supervision-20261020/step2-supervision`;
const args = process.argv.slice(2);
const option = (name, fallback) => {
  const i = args.indexOf(name); return i < 0 ? fallback : args[i + 1];
};
const planPath = option('--plan', `${S2}/battery2-format/core-plan.json`);
const conservationPath = option('--conservation', `${S2}/battery2-format/per-row-conservation.json`);
const outputDir = option('--out', `${S2}/battery2-locator-migration/preliminary-preview`);
const decisionsPath = option('--decisions', null);
const decisions = decisionsPath ? readDecisions(decisionsPath) : [];
const cleanupsPath=option('--text-cleanups',null);
const cleanups=cleanupsPath ? JSON.parse(fs.readFileSync(cleanupsPath,'utf8')).cleanups : [];
function readDecisions(p) { const d=JSON.parse(fs.readFileSync(p,'utf8')); if (!Array.isArray(d.decisions)) throw Error('Explicit decisions array required'); return d.decisions; }
if (!outputDir.startsWith(`${S2}/battery2-locator-migration/`) || outputDir.includes('..')) throw Error('Research output directory required');
if (args.some(x => /^--(?:apply|hash|gate)(?:=|$)/.test(x))) throw Error('No mutation, hash, or gate mode exists');
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const clone = x => structuredClone(x);
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const plan = read(planPath), conservation = read(conservationPath);
const records = new Map(conservation.map(r => [`${r.item}\0${r.before_row}`, r]));
const contractHomes = new Map();
for (const name of fs.readdirSync('research').filter(n => new RegExp(`^${RUN}-batch-\\d+\\.proof-contracts\\.json$`).test(n))) {
  const file = `research/${name}`, doc = read(file);
  for (const [id, entry] of Object.entries(doc.contracts ?? {})) {
    if (contractHomes.has(id)) throw Error(`Duplicate contract home: ${id}`);
    contractHomes.set(id, { file, entry });
  }
}
const holds = [], changes = [], hashRebind = [], skippedExternal = [];
function localKind(text, start, end) {
  const pre = text.slice(0, start), post = text.slice(end);
  if (/https?:\/\/\S*$/.test(pre)) return 'external';
  if (/(?:Theorem|Lemma|Proposition|Corollary|Definition|Remark|Section|§|Equation)\s*$/i.test(pre)) return 'external';
  if (/(?:cited|external|supplier|source)\s+(?:proof|step|verification)\s*$/i.test(pre)) return 'ambiguous';
  if (/^\s+(?:of|in)\s+\[\[/.test(post)) return 'ambiguous';
  if (/\b(?:steps?|Proof|Verification|Counterexample|Construction)\s*(?:(?:\d+\.\d+)\s*(?:[-–—,;/]|and|to|through)\s*)*$/i.test(pre)) return 'local';
  if (/\b(?:in|at)\s*$/i.test(pre)) return 'local';
  return 'ambiguous';
}
function mirrorText(text, map, context) {
  if (typeof text !== 'string') return text;
  return text.replace(/\b\d+\.\d+\b/g, (old, offset) => {
    if (!map[old] || old === map[old]) return old;
    const kind = localKind(text, offset, offset + old.length);
    const evidence = { ...context, old, proposed: map[old], offset, complete_before_text:text, context: text.slice(Math.max(0, offset-65), offset+old.length+65), conserved_row:records.get(`${context.id}\0${old}`) ?? null };
    const decision=decisions.find(d=>d.id===context.id && d.case===context.case && d.field===context.field && d.offset===offset && d.complete_before_text===text && d.old===old && d.new===map[old]);
    if (decision) {
      if (decision.by!=='/root' || !decision.reason || !['map-actual-local-locator','preserve-external-number'].includes(decision.action)) throw Error('Decision lacks root authority or exact disposition');
      return decision.action==='map-actual-local-locator' ? map[old] : old;
    }
    if (kind === 'external') { skippedExternal.push(evidence); return old; }
    if (kind === 'ambiguous') { holds.push({ type: 'ambiguous-local-locator', ...evidence }); return old; }
    return map[old];
  });
}
function tokens(steps) {
  const ids = new Set(steps.map(s => s.id));
  return new Map(steps.map(s => {
    const t = new Set();
    for (const m of s.text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)) {
      if (m[2]) t.add(m[2]); else if (/^steps?\s/i.test(m[0]) || ids.has(m[1])) t.add(m[1]);
    }
    return [s.id,t];
  }));
}
function rowRecord(s, old) {
  const input = [...s.inputs], have = new Set(input.map(x=>x.replace(/^step\s+/,'')));
  for (const token of s.tokens) if (!have.has(token)) input.push(/^\d/.test(token) ? `step ${token}` : token);
  // Preserve historical row id, routine/derivation role, and all other keys.
  return { ...old, step:s.id, claim:s.claim, inputs:input };
}
for (const file of plan.files) {
  const id = file.id, home = contractHomes.get(id);
  if (!home) { holds.push({type:'missing-contract',id}); continue; }
  const map = plan.row_maps[file.canonical] ?? plan.row_maps[id];
  if (!map) { holds.push({type:'missing-map',id}); continue; }
  const beforeText = fs.readFileSync(file.preimage,'utf8');
  const afterText = fs.readFileSync(file.proposed_after,'utf8');
  let oldBody=splitFrontmatter(beforeText).body;
  // Explicit root-authorized recognition of six ALREADY EXISTING arguments.
  // This changes only a virtual parser input, never the old source or history.
  if (id==='def-knot-floer-cobordism-map') oldBody=oldBody.replace(/^## Well-definedness[^\n]*$/m,'## Verification');
  const beforeSteps = numberedProofSteps(oldBody);
  const afterSteps = numberedProofSteps(splitFrontmatter(afterText).body);
  const bt=tokens(beforeSteps), at=tokens(afterSteps), newRows = new Map(afterSteps.map(s=>[s.id,{...s,tokens:at.get(s.id)}]));
  const before = home.entry, after = clone(before);
  const normalize=s=>s.replace(/∎/g,'').replace(/\s+/g,' ').trim();
  for (const [old, next] of Object.entries(map)) {
    const witness=records.get(`${id}\0${old}`);
    if (!witness || witness.after_row!==next || !newRows.has(next)) holds.push({type:'missing-conserved-row-witness',id,old,next});
    else {
      const oldSource=beforeSteps.find(s=>s.id===old);
      if (!oldSource || normalize(`${old} ${oldSource.text}`)!==normalize(witness.complete_before_row) || normalize(`${next} ${newRows.get(next).text}`)!==normalize(witness.complete_after_row)) holds.push({type:'conservation-witness-not-exact-current-row',id,old,next});
    }
  }
  for (const key of ['derivations','routine_steps']) {
    after[key] = (before[key] ?? []).map(row => {
      const next=map[row.step], source=next && newRows.get(next);
      if (!source) { holds.push({type:'unmapped-contract-row',id,key,step:row.step}); return row; }
      return rowRecord(source,row);
    });
    if (!(key in before)) delete after[key];
  }
  if (id==='def-knot-floer-cobordism-map' && !(before.derivations?.length) && !(before.routine_steps?.length)) {
    if (afterSteps.length!==6 || beforeSteps.length!==6) throw Error('Root six-row recognition scope mismatch');
    after.derivations=afterSteps.map(s=>rowRecord({...s,tokens:at.get(s.id)},{id:`step-${s.id.replace('.','-')}`}));
  }
  for (const c of after.citations ?? []) {
    const oldUses=beforeSteps.filter(s=>bt.get(s.id).has(c.fact)).map(s=>s.id);
    const newUses=afterSteps.filter(s=>at.get(s.id).has(c.fact)).map(s=>s.id);
    const explicitSixRowRecognition = id==='def-knot-floer-cobordism-map' && Array.isArray(c.uses) && c.uses.length===0;
    if (!same(c.uses,oldUses) && !explicitSixRowRecognition) { holds.push({type:'citation-preimage-uses-not-current-old-proof',id,fact:c.fact,source:c.source,contract:c.uses,actual_old:oldUses}); continue; }
    if (!same(oldUses.map(x=>map[x]).sort(),[...newUses].sort())) { holds.push({type:'citation-usage-not-pure-row-map',id,fact:c.fact,source:c.source,oldUses,newUses}); continue; }
    c.uses=newUses; // Citation source/section/quote are deliberately immutable.
  }
  for (const row of after.boundaries ?? []) {
    for (const typed of ['proof_step','step_anchors']) if (typed in row) {
      const update=value=>typeof value==='string' ? value.replace(/\b\d+\.\d+\b/g,old=>{
        if (!map[old]) { holds.push({type:'unmapped-typed-local-boundary-anchor',id,case:row.case,field:typed,old}); return old; }
        return map[old];
      }) : value;
      row[typed]=Array.isArray(row[typed]) ? row[typed].map(update) : update(row[typed]);
    }
    for (const key of ['reason','evidence']) if (key in row) row[key]=mirrorText(row[key],map,{id,case:row.case,field:key});
    for (const stamp of ['template_review','reviewed']) {
      if (row[stamp]?.reason) row[stamp].reason=mirrorText(row[stamp].reason,map,{id,case:row.case,field:`${stamp}.reason`});
    }
    for (const cleanup of cleanups.filter(c=>c.id===id && c.case===row.case)) {
      const keys=cleanup.field.split('.');
      const target=keys.length===1 ? row : row[keys[0]];
      const key=keys.at(-1);
      if (!target || target[key]!==cleanup.exact_before_after_locators || cleanup.by!=='/root' || !cleanup.reason) {
        holds.push({type:'root-specific-text-cleanup-preimage-mismatch',id,case:row.case,field:cleanup.field});
      } else target[key]=cleanup.exact_after;
    }
    if (row.template_review) hashRebind.push({id,case:row.case,contract_file:home.file,existing_template_review:clone(before.boundaries.find(b=>b.case===row.case).template_review),final_source:file.canonical,source_candidate:file.proposed_after,row_text_changed:!same(row,before.boundaries.find(b=>b.case===row.case)),root_only:'After all source/metadata/contract mirrors are final, rebind existing item_sha256 and exact row_sha256({case,status,text:reason??evidence}). Preserve reviewer, case-specific reason and provenance; no new review or stamp is authorized.'});
  }
  if (!same(before,after)) changes.push({id,contract_file:home.file,before_entry:before,after_entry:after,source_preimage:file.preimage,source_after:file.proposed_after,row_map:map});
}
fs.mkdirSync(outputDir,{recursive:true});
const emit=(n,d)=>fs.writeFileSync(path.join(outputDir,n),JSON.stringify(d,null,2)+'\n');
emit('entry-mirror-proposals.json',changes);
emit('holds.json',holds);
const groups=new Map();
for (const h of holds.filter(h=>h.type==='ambiguous-local-locator')) {
  const key=JSON.stringify([h.id,h.case,h.old,h.proposed]);
  if (!groups.has(key)) groups.set(key,{id:h.id,case:h.case,old_row:h.old,new_row:h.proposed,conserved_row:h.conserved_row,occurrences:[],decision:'HOLD: actual-local versus external context not yet resolved'});
  groups.get(key).occurrences.push(Object.fromEntries(['field','offset','complete_before_text','context'].map(k=>[k,h[k]])));
}
emit('grouped-ambiguous-holds.json',{grouping:'Exact id/case/old-row/new-row; every authored complete text and field/offset retained separately. No historical review strings modified.',occurrences:holds.filter(h=>h.type==='ambiguous-local-locator').length,groups:groups.size,items:new Set([...groups.values()].map(g=>g.id)).size,holds:[...groups.values()]});
emit('existing-template-root-rebind.json',hashRebind);
emit('external-numbering-preserved.json',skippedExternal);
emit('summary.json',{status:'preliminary-not-root-adoption',plan:planPath,conservation:conservationPath,source_files:plan.files.length,entry_changes:changes.length,holds:holds.length,existing_template_rebinds:hashRebind.length,external_numbers_preserved:skippedExternal.length,canonical_or_contract_writes:0,hashes_computed:0,gates_or_controls_executed:0,note:'Research preview only. Final source freeze and all holds require exact root decisions; no indefinite decimal replacement or accepted-body audit.'});
console.log(JSON.stringify({outputDir,changes:changes.length,holds:holds.length,rebinds:hashRebind.length}));
