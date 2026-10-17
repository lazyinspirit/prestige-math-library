import fs from 'node:fs';
import cp from 'node:child_process';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const {splitFrontmatter,sectionText,sourceSectionText,numberedProofSteps}=await import(pathToFileURL(resolve('tools/physics-support/facts-block.mjs')));
const {frontmatterList}=await import(pathToFileURL(resolve('tools/physics-support/frontmatter-list.mjs')));
const run='physics-remaining-80-2026-10-17',reportPath=`research/${run}-step5-v2/step5-v2-impact-initial-r1-u3.json`;
const pack=JSON.parse(fs.readFileSync(`research/${run}-step5-v2/impact-initial-1.json`));
const report=JSON.parse(fs.readFileSync(reportPath));
const assigned=new Set(pack.assignments['3']);
const repaired=new Set(report.reviews.filter(r=>r.disposition==='repaired').map(r=>r.id));
const publicChanged=new Set(['pthm-csm-dk-qualified-hamiltonian-statistical-predictions','thm-csm-dk-compact-iid-propagation-of-chaos','pthm-emg-total-matter-field-exchange','pthm-emg-xs-mp-model','texp-emg-xs-two-center-model','thm-tgr-photon-planck-flux']);
const norm=s=>s.replace(/\s+/g,' ').trim();
const item=id=>splitFrontmatter(fs.readFileSync(`items/${id}.md`,'utf8'));
const patchFiles=[],metadataIds=new Set(),checks=[];
for(let n=1;n<=80;n++){
 const contractPath=`research/${run}-batch-${n}.proof-contracts.json`;
 if(!fs.existsSync(contractPath))continue;
 const before=fs.readFileSync(contractPath,'utf8'),doc=JSON.parse(before);
 const ids=Object.keys(doc.contracts??{}).filter(id=>assigned.has(id));
 if(!ids.length)continue;
 for(const id of ids){
  const c=doc.contracts[id],carrier=item(id);
  for(const citation of c.citations??[]){
   const exact=sourceSectionText(item(citation.source).body,citation.source_section);
   if(!norm(exact).includes(norm(citation.quote))){
    if(!exact.trim())throw Error(`No exact section: ${id} ${citation.source}`);
    citation.quote=exact.trim();metadataIds.add(id);
   }
  }
  if(repaired.has(id)){
   const steps=new Map(numberedProofSteps(carrier.body).map(s=>[s.id,s]));
   for(const entry of [...c.derivations??[],...c.routine_steps??[]]){
    const step=steps.get(entry.step);if(!step)throw Error(`Missing step ${id} ${entry.step}`);
    if(norm(entry.claim)!==norm(step.claim))entry.claim=step.claim;
    for(const tag of step.inputs)if(!entry.inputs.includes(tag))entry.inputs.push(tag);
   }
  }
  if(id==='thm-tgr-photon-planck-flux'){
   for(const source of ['lem-finite-rank-operators-are-compact','thm-norm-limit-of-compact-operators-is-compact','def-trace-class-operator','def-trace-of-a-trace-class-operator','thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues']){
    const source_section=source.startsWith('def-')?'Definition':'Statement';
    if(!c.citations.some(x=>x.fact==='F9'&&x.source===source))c.citations.push({fact:'F9',source,source_section,quote:sourceSectionText(item(source).body,source_section).trim(),uses:['3.1']});
   }
  }
 }
 const after=JSON.stringify(doc,null,2)+'\n';
 if(JSON.stringify(doc)!==JSON.stringify(JSON.parse(before))){if(!process.argv.includes('--dry-run'))fs.writeFileSync(contractPath,after);patchFiles.push(contractPath);for(const id of ids)if(JSON.stringify(JSON.parse(before).contracts[id])!==JSON.stringify(doc.contracts[id]))metadataIds.add(id);}
 const manifestPath=`research/${run}-batch-${n}.pages.json`;
 const oldManifest=fs.readFileSync(manifestPath,'utf8'),pages=JSON.parse(oldManifest);
 for(const page of pages)for(const row of [...page.items??[],...page.examples??[]]){
  if(!repaired.has(row.id))continue;
  const carrier=item(row.id);
  if(publicChanged.has(row.id))row.statement=sectionText(carrier.body,'Statement').trim();
  if(['thm-tgr-photon-planck-flux','texp-emg-xs-null-curvature'].includes(row.id)){
   row.deps=frontmatterList(carrier.fm,'deps');
   row.dependency_roles={...row.dependency_roles};
   for(const dep of row.deps)if(!row.dependency_roles[dep])row.dependency_roles[dep]='mathematical-premise';
  }
  if(typeof row.strategy==='string'&&/^\d+\.\d+\s/.test(row.strategy)){
   const first=numberedProofSteps(carrier.body)[0];
   if(first&&row.strategy.startsWith(first.id+' '))row.strategy=first.id+' '+first.text;
  }
 }
 const newManifest=JSON.stringify(pages,null,2)+'\n';
 if(JSON.stringify(pages)!==JSON.stringify(JSON.parse(oldManifest))){if(!process.argv.includes('--dry-run'))fs.writeFileSync(manifestPath,newManifest);patchFiles.push(manifestPath);}
 if(!process.argv.includes('--dry-run')){
  const args=['tools/physics-support/proof-contract.mjs',contractPath,'--strict','--items',ids.join(','),'--json'];
  const result=cp.spawnSync('node',args,{encoding:'utf8',maxBuffer:10000000});
  if(result.status!==0)throw Error(`${contractPath}: ${result.stdout}\n${result.stderr}`);
  checks.push({command:'node '+args.join(' '),exit_code:0,items:ids});
 }
}
console.log(JSON.stringify({dry_run:process.argv.includes('--dry-run'),patchFiles,metadataIds:[...metadataIds],checks},null,2));
if(!process.argv.includes('--dry-run')){
 report.repair_notes.metadata_files=patchFiles;
 report.repair_notes.checks.push(...checks);
 for(const review of report.reviews)if(metadataIds.has(review.id)){
  review.reason+=' Reconciled the owning contract exact supplier quotations and affected derivations with the current inspected interfaces.';
  if(review.disposition==='unaffected')review.metadata_repair_only=true;
 }
 fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
}
