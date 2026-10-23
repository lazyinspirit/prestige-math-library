// Root-only adoption draft. No native subject seal, routing, dispatch or validator.
import fs from 'node:fs';import {dirname,resolve,relative,join} from 'node:path';import {fileURLToPath} from 'node:url';import {createHash,randomUUID} from 'node:crypto';import assert from 'node:assert/strict';
export function stageDecisionAmendments(proposal,documents){
 const staged=new Map([...documents].map(([path,doc])=>[path,structuredClone(doc)]));
 for(const row of proposal.changes){
  const doc=staged.get(row.path);assert.ok(doc&&Array.isArray(doc.decisions),'Missing actual decision document');
  const matches=doc.decisions.map((x,i)=>[x,i]).filter(([x])=>x.obligation===row.obligation);assert.equal(matches.length,1,'Missing/duplicate bound obligation');
  const [actual,index]=matches[0];assert.deepEqual(actual,row.before,'Bound decision changed after proposal; root reconciliation required');
  assert.equal(actual.id,row.id);assert.equal(actual.verdict,'accepted_repair');assert.equal(actual.route,'touched');
  const next=row.after_proposal;assert.equal(next.verdict,'amended_repair');
  for(const key of new Set([...Object.keys(actual),...Object.keys(next)]))if(!['verdict','owner_resolution','evidence'].includes(key))assert.deepEqual(next[key],actual[key],`Unlicensed decision/stamp field: ${key}`);
  assert.equal(row.source_changed,false);assert.equal(row.manifest_changed,false);assert.equal(row.contract_changed,true);
  assert.equal(row.current_carrier.item_sha256,row.reader_post_carrier.item_sha256);assert.equal(row.current_carrier.manifest_sha256,row.reader_post_carrier.manifest_sha256);
  doc.decisions[index]=structuredClone(next);
 }
 return staged;
}
async function main(){
 const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,'../../..'),args=process.argv.slice(2),apply=args.includes('--apply'),sha=x=>createHash('sha256').update(x).digest('hex');
 assert.notEqual(args.includes('--stage'),apply,'Use --stage OR --apply --root-reviewed --routing-integrated --writers-drained');
 if(apply)for(const flag of ['--root-reviewed','--routing-integrated','--writers-drained'])assert.ok(args.includes(flag),`Missing ${flag}`);
 const bytes=fs.readFileSync(join(here,'proposal.json'));assert.equal(sha(bytes),'49d90917eb7ba07d214a88c5210f2d7ad8faca143bfe54f41ab3c950feb55e46','Proposal changed; root must explicitly review/rebind');const p=JSON.parse(bytes);
 assert.equal(p.run,'fluid-dynamics-all-47-2026-10-23');assert.equal(p.changes.length,6);
 function local(path){const full=resolve(root,path);assert.ok(!relative(root,full).startsWith('..')&&fs.lstatSync(full).isFile()&&fs.realpathSync(full)===full,`Not a local regular exact realpath: ${path}`);return full;}
 function inputs(){for(const[path,hash]of Object.entries(p.preimage_guards))assert.equal(sha(fs.readFileSync(local(path))),hash,`Stale source/manifest/contract/immutable authority: ${path}`);}
 inputs();const docs=new Map(),originals=new Map();
 for(const row of p.changes){assert.ok([13,22,25].some(b=>row.path===`research/${p.run}-alpha-batch-${b}-3a-decisions.json`),'Only three selected decision files authorized');if(!docs.has(row.path)){const raw=fs.readFileSync(local(row.path),'utf8');originals.set(row.path,raw);docs.set(row.path,JSON.parse(raw));}}
 const staged=stageDecisionAmendments(p,docs);
 console.log(JSON.stringify({root_only:true,apply,amendments:p.changes.length,files:[...staged.keys()],unrelated_added_or_reordered_decisions_preserved:true,subject_seals_changed:false,native_operations:0},null,2));
 if(!apply)return;
 const archive=join(here,'root-adoption-'+randomUUID());fs.mkdirSync(archive);
 // Actual entire decision preimages are captured AFTER root routing integration.
 for(const[path,raw]of originals){assert.equal(fs.readFileSync(local(path),'utf8'),raw,'Concurrent decision write');fs.writeFileSync(join(archive,path.split('/').at(-1)),raw,{flag:'wx'});}
 fs.writeFileSync(join(archive,'proposal.json'),bytes,{flag:'wx'});inputs();
 for(const[path,doc]of staged){assert.equal(fs.readFileSync(local(path),'utf8'),originals.get(path),'Concurrent decision write');const full=local(path),tmp=full+'.first-battery-amend-'+randomUUID();fs.writeFileSync(tmp,JSON.stringify(doc,null,2)+'\n',{flag:'wx'});fs.renameSync(tmp,full);}
 console.log(`Adopted six worksheet-only amendments; complete actual decision preimages: ${archive}. Root native subject sealing remains required.`);
}
if(process.argv[1]&&fs.realpathSync(process.argv[1])===fileURLToPath(import.meta.url))await main();
