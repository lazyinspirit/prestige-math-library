// DRAFT: Root executes only after reviewing exact proposals and draining writers.
// No validators, scientific review assertions, hash resealing or native transitions.
import { readFileSync, writeFileSync, mkdirSync, renameSync, realpathSync, lstatSync } from 'node:fs';
import { resolve, dirname, relative, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import { isDeepStrictEqual as same } from 'node:util';
const here = dirname(fileURLToPath(import.meta.url)), root = resolve(here, '../../..');
const { yaml } = await import(pathToFileURL(join(root, 'tools/physics-support/pathway-lib.mjs')));
const Y = yaml(), argv = process.argv.slice(2), apply = argv.includes('--apply');
const check = (ok, why) => { if (!ok) throw Error(why); };
check(argv.includes('--stage') !== apply, 'Use --stage OR --apply --root-reviewed --writers-drained');
if (apply) for (const flag of ['--root-reviewed', '--writers-drained']) check(argv.includes(flag), `Missing ${flag}`);
const plan = JSON.parse(readFileSync(join(here, 'plan.json')));
check(plan.version === 1 && plan.run === 'fluid-dynamics-all-47-2026-10-23', 'Wrong integration draft');
const newItem = argv.includes('--include-new-item') ? JSON.parse(readFileSync(join(here,'new-item-proposal.json'))) : null;
if (newItem) {
  check(newItem.id==='lem-fd-c1-boundary-surface-integrals' && newItem.run===plan.run && newItem.batch==='3' && newItem.page==='fd-f01','Wrong exact new-item proposal');
  if (apply) check(newItem.approved_by_root===true,'Root must explicitly adopt the complete new-item proposal');
}
const guardHashes={...plan.preimage_guards};
for(const[path,sha256]of Object.entries(newItem?.preimage_guards??{})){check(!guardHashes[path]||guardHashes[path]===sha256,'Draft/new-item guard conflict');guardHashes[path]=sha256;}
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const split = text => { const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/); check(match, 'Missing FM'); return { meta:Y.parse(match[1]), body:match[2] }; };
function guarded(path) {
  const full = resolve(root,path);
  check(!relative(root,full).startsWith('..') && lstatSync(full).isFile() && realpathSync(full) === full, `Not regular/local: ${path}`);
  const bytes = readFileSync(full); check(hash(bytes) === guardHashes[path], `Stale ${path}; original guard retained; Root must inspect actual delta and regenerate explicit proposals`); return bytes;
}
for (const path of Object.keys(guardHashes)) guarded(path);
const approved = new Set(plan.approved_operation_ids ?? []);
check(approved.size === plan.approved_operation_ids.length, 'Duplicate approval');
for (const id of approved) check(plan.operations.some(op=>op.id===id), `Unknown operation ${id}`);
if (apply) check(approved.size > 0 || newItem?.approved_by_root===true, 'Root must explicitly select reviewed operations');
const original = new Map(), staged = new Map();
for (const op of plan.operations) {
  if (!approved.has(op.id)) continue;
  if (!original.has(op.path)) { const text = guarded(op.path).toString(); original.set(op.path,text); staged.set(op.path,text); }
  if (op.kind === 'source-frontmatter') {
    check(plan.scope.some(id=>op.path===`items/${id}.md`), 'Source outside exact controlled owned inventory');
    const owners = Object.keys(plan.preimage_guards).filter(path=>new RegExp(`^research/${plan.run}-batch-\\d+\\.pages\\.json$`).test(path))
      .flatMap(path=>{const doc=JSON.parse(guarded(path));return (Array.isArray(doc)?doc:doc.pages).flatMap(page=>page.items??[]).filter(row=>row.id===split(op.before).meta.id);});
    check(owners.length===1 && owners[0].reference===op.path, 'Not one exact authored source carrier');
    check(staged.get(op.path)===op.before, 'Source preimage changed');
    const before=split(op.before), after=split(op.after);
    check(before.body===after.body, 'Source proof/public body mutation forbidden');
    for (const key of new Set([...Object.keys(before.meta),...Object.keys(after.meta)]))
      if (!op.changed_fields.includes(key)) check(same(before.meta[key],after.meta[key]),`Unlicensed FM field ${key}`);
    check(op.changed_fields.every(key=>['sources','deps','dependency_roles','provenance'].includes(key)), 'Unlicensed FM mutation');
    staged.set(op.path,op.after);
  } else {
    check(op.kind==='json-field' && Array.isArray(op.pointer) && op.pointer.length>0, 'Unknown mutation');
    const contract = new RegExp(`^research/${plan.run}-batch-\\d+\\.proof-contracts\\.json$`).test(op.path);
    const manifest = new RegExp(`^research/${plan.run}-batch-\\d+\\.pages\\.json$`).test(op.path) || op.path==='research/plan-spec.json';
    check(contract || manifest, 'No state, frozen observations, imports or native hashes may change');
    const doc=JSON.parse(staged.get(op.path));let owner=doc;
    for (const key of op.pointer.slice(0,-1)) { check(owner!=null && Object.hasOwn(owner,key), 'Missing exact pointer'); owner=owner[key]; }
    const field=op.pointer.at(-1);check(same(owner[field],op.before),`Field preimage changed ${op.id}`);
    if (manifest) check(plan.scope.includes(owner.id) && ['statement','sources','deps','dependency_roles','provenance'].includes(field), 'Only exact owned metadata/public mirrors');
    if (contract) check(op.pointer[0]==='contracts' && (['citations','derivations','routine_steps','supplier_excerpts'].includes(op.pointer[2])
      || (op.pointer[2]==='boundaries' && op.pointer[4]==='case_scope' && field==='source_excerpt')
      || (op.pointer[2]==='boundaries' && op.pointer.length===5 && ['evidence','reason'].includes(field))), 'No historical boundary/review/verification bindings may be replaced');
    owner[field]=structuredClone(op.after);staged.set(op.path,JSON.stringify(doc,null,2)+'\n');
  }
}
if(newItem) {
  const newId=newItem.id, newPath=`items/${newId}.md`;
  check(hash(guarded(newPath))===newItem.source_preimage_guard_raw,'New item source guard changed');
  check(newItem.manifest_row.id===newId && newItem.manifest_row.kind==='lemma' && newItem.manifest_row.domain==='mathematics'
    && newItem.manifest_row.reference===newPath && newItem.manifest_row.deps.length===13,'Exact established mathematical new-item row required');
  const stageText=path=>{if(!original.has(path)){const text=guarded(path).toString();original.set(path,text);staged.set(path,text);}return staged.get(path);};
  for(const op of newItem.operations) {
    const text=stageText(op.path);
    if(op.kind==='new-source-frontmatter-deps-roles-only') {
      check(op.path===newPath && text===op.before,'Wrong new-source FM preimage');
      const before=split(op.before),after=split(op.after);
      check(before.body===after.body,'New-source body mutation forbidden');
      for(const key of new Set([...Object.keys(before.meta),...Object.keys(after.meta)]))if(!['deps','dependency_roles'].includes(key))check(same(before.meta[key],after.meta[key]),'Unlicensed new-source FM field');
      check(same(after.meta.deps,newItem.manifest_row.deps)&&same(after.meta.dependency_roles,newItem.manifest_row.dependency_roles),'New source/row dependency mismatch');
      check(before.meta.deps.every(id=>after.meta.deps.includes(id)) && after.meta.deps.filter(id=>!before.meta.deps.includes(id)).every(id=>['def-countable-choice','lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals'].includes(id)),'Only actual conditional F6 dependencies may be added');
      staged.set(op.path,op.after);continue;
    }
    if(op.kind==='page-frontmatter-items-only') {
      check(op.path==='library/fluid-dynamics/fd-f01.md' && text===op.before,'Wrong inventory page preimage');
      const before=split(op.before),after=split(op.after);
      check(before.body===after.body && before.meta.page==='fd-f01','Page body/identity changed');
      for(const key of new Set([...Object.keys(before.meta),...Object.keys(after.meta)]))if(key!=='items')check(same(before.meta[key],after.meta[key]),'Page requires or other metadata changed');
      check(!before.meta.items.includes(newId) && same(after.meta.items.filter(id=>id!==newId),before.meta.items)
        && after.meta.items.filter(id=>id===newId).length===1 && after.meta.items.indexOf(newId)+1===after.meta.items.indexOf('post-fd-continuum-balances'),'Only before-Postulate inventory insertion allowed');
      staged.set(op.path,op.after);continue;
    }
    check(op.path===`research/${plan.run}-batch-3.pages.json` || op.path==='research/plan-spec.json'
      || op.path===`research/${plan.run}-batch-3.proof-contracts.json`,'New item outside exact owned placement');
    const doc=JSON.parse(text);let owner=doc;for(const key of op.pointer.slice(0,-1))owner=owner[key];const key=op.pointer.at(-1);
    if(op.kind==='add-authored-contract') {
      check(op.path.endsWith('.proof-contracts.json')&&same(op.pointer,['contracts',newId])&&!Object.hasOwn(owner,key),'New contract already exists/wrong path');
      check(op.after.derivations?.length===8&&!JSON.stringify(op.after).includes('template_review'),'Actual eight-step author worksheet required; no invented independent template reviews');
      owner[key]=structuredClone(op.after);
    } else {
      check(op.kind==='inventory-insert-before'&&Array.isArray(owner[key])&&Array.isArray(op.before)&&Array.isArray(op.after),'Unknown new-item mutation');
      const idOf=row=>typeof row==='string'?row:row.id,current=owner[key];
      check(same(current.map(idOf),op.before.map(idOf))&&!current.some(row=>idOf(row)===newId),'Inventory identities/order changed');
      check(same(op.after.filter(row=>idOf(row)!==newId),op.before)&&op.after.filter(row=>idOf(row)===newId).length===1,'New inventory proposal removed or altered existing rows');
      const index=current.findIndex(row=>idOf(row)===op.anchor);check(index>=0,'Missing exact insertion anchor');
      const addition=op.after.find(row=>idOf(row)===newId);check(typeof addition==='string'?addition===newId:same(addition,newItem.manifest_row),'New row differs from reviewed proposal');
      current.splice(index,0,structuredClone(addition)); // retain already staged existing-item mirrors
    }
    staged.set(op.path,JSON.stringify(doc,null,2)+'\n');
  }
  const actualNew=split(staged.get(newPath)??guarded(newPath).toString()).meta;
  check(same(actualNew.deps,newItem.manifest_row.deps)&&same(actualNew.dependency_roles,newItem.manifest_row.dependency_roles),'Final new item FM/manifest/plan mismatch');
}
// Historical review objects, case/status dispositions, page requires and source
// proof bodies stay exact. Actual scientist boundary evidence may be updated; the
// optional guarded new-item branch adds precisely one inventory member.
const changed=[...staged].filter(([path,text])=>text!==original.get(path));
console.log(JSON.stringify({draft:true,apply,selected_operations:approved.size,changed_files:changed.map(([path])=>path),original_guards_preserved:true,include_new_item:Boolean(newItem),native_owner_create_or_certification_performed:false,no_scientific_acceptance:true},null,2));
if (apply) {
  const archive=join(here,'before-root-apply-'+randomUUID());mkdirSync(archive);
  for(const[path]of changed){const target=join(archive,path);mkdirSync(dirname(target),{recursive:true});writeFileSync(target,guarded(path),{flag:'wx'});}
  for(const path of Object.keys(guardHashes))guarded(path);
  for(const[path,text]of changed){guarded(path);const target=resolve(root,path),temp=target+'.root-metadata-'+randomUUID();writeFileSync(temp,text,{flag:'wx'});renameSync(temp,target);}
  console.log(`Exact adopted metadata proposals applied; raw preimages: ${archive}. Root owns numeric labels, rehashing, recertification and actual scientific dispositions.`);
}
