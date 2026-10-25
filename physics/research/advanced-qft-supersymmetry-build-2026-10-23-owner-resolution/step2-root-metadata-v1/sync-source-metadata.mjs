// Root's current-source metadata mirrors; this grants no scientific acceptance.
import fs from 'node:fs';
import { yaml } from '../../../../tools/physics-support/pathway-lib.mjs';
import { sectionText } from '../../../../tools/physics-support/facts-block.mjs';
const run = 'advanced-qft-supersymmetry-build-2026-10-23';
if (!process.argv.includes('--write')) throw Error('Explicit --write required');
const state = JSON.parse(fs.readFileSync(`.physics-autopilot/${run}/state.json`));
if (!state.paused || state.stage !== '2-scope-review'
    || Object.values(state.dispatches).some(row => row.startedAt && !row.endedAt))
  throw Error('Paused, drained Step2 required');
const heads = { definition:'Definition', algorithm:'Definition', theorem:'Statement',
  lemma:'Statement', proposition:'Statement', corollary:'Statement',
  'physics-theorem':'Statement', 'thought-experiment':'Statement', example:'Example',
  counterexample:'Statement refuted', 'false-statement':'Statement',
  'open-problem':'Open problem', postulate:'Postulate', remark:'Remark', experiment:'Observations' };
const fields = ['kind','title','domain','library','deps','dependency_roles','provenance',
  'sources','generation','justified_by','external_refs','forward_refs','empirical_result',
  'empirical_premises','physical_scope','scope','axiom_strength','axiom_base','axiom_use',
  'dependency_level','proof_strategy'];
function parse(path) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/.exec(fs.readFileSync(path,'utf8'));
  if (!m) throw Error(`Missing frontmatter: ${path}`);
  const doc = yaml().parseDocument(m[1],{uniqueKeys:true});
  if (doc.errors.length) throw Error(`Invalid YAML: ${path}`);
  return {data:doc.toJS(),body:m[2]};
}
const outputs = [], byPage = new Map(), changes = [];
for (let batch=1; batch<=69; batch++) {
  const path = `research/${run}-batch-${batch}.pages.json`;
  const pages = JSON.parse(fs.readFileSync(path));
  for (const page of pages) {
    const actual = parse(`library/${page.category}/${page.id}.md`).data;
    const requires = [...new Set([...(actual.requires??[]),...(actual.prerequisites??[])])];
    const removed = page.requires.filter(id=>!requires.includes(id));
    for (const id of removed) if (!(page.id==='qftx-s3-partition-functions'&&id==='qftx-anomaly-matching-and-frontier')
        && !(page.id==='qftx-susy-algebra-and-multiplets'&&id==='qftx-nonabelian-yang-mills-model'))
      throw Error(`Unreviewed page prerequisite removal: ${page.id} -> ${id}`);
    if (JSON.stringify(page.requires)!==JSON.stringify(requires)) changes.push({page:page.id,requires});
    page.requires = requires;
    for (const item of page.items) {
      const {data,body} = parse(`items/${item.id}.md`);
      const core = sectionText(body,heads[data.kind]).trim();
      if (!core) throw Error(`Missing current public section: ${item.id}`);
      for (const key of fields) {
        if (data[key]!==undefined) item[key]=data[key];
        else if (['justified_by','external_refs','forward_refs','empirical_result','empirical_premises','physical_scope','scope'].includes(key)) delete item[key];
      }
      if (typeof item.statement!=='string'||!item.statement.trim()||!core.includes(item.statement.trim())) item.statement=core;
    }
    byPage.set(page.id,page);
  }
  outputs.push([path,pages]);
}
const plan = JSON.parse(fs.readFileSync('research/plan-spec.json'));
let matched=0;
for (const page of plan.pages) if (byPage.has(page.id)) {
  page.items=byPage.get(page.id).items; page.requires=byPage.get(page.id).requires; matched++;
}
if (matched!==138) throw Error('Original page ownership mismatch');
for (const [path,rows] of outputs) fs.writeFileSync(path,JSON.stringify(rows,null,2)+'\n');
fs.writeFileSync('research/plan-spec.json',JSON.stringify(plan,null,2)+'\n');
console.log(JSON.stringify({items:[...byPage.values()].reduce((n,p)=>n+p.items.length,0),pages:matched,page_changes:changes,scientific_acceptance:false,gates:false}));
