// Root-owned integration of the explicitly released first-battery QFT packet.
import {readFileSync,writeFileSync,mkdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {parseFrontmatter} from '../../tools/physics-support/content-policy-lib.mjs';
import {splitFrontmatter,sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
const run='physics-td-qft-rpm-62-2026-10-14';
const base=`research/${run}-owner-native-gate-qft-round-1`;
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const hash=x=>createHash('sha256').update(x).digest('hex');
const release=read(`${base}/final-release.json`);
if(release.writer_drained!==true||release.remaining_qft_obligations.length)throw Error('QFT handoff incomplete');
for(const p of release.authoritative_proposals)if(hash(readFileSync(p.path))!==p.sha256)throw Error(`Stale proposal ${p.path}`);
for(const s of release.sources)if(hash(readFileSync(s.source))!==s.final_raw_sha256)throw Error(`Stale source ${s.id}`);
const writes=new Map(),contracts=read(`${base}/proposals/all-qft-contract-replacements.json`);
const normalize=s=>String(s).replace(/\s+/g,' ').trim();
let replaced=0;
for(const p of contracts.proposals){
 const doc=read(p.target);
 for(const[id,c]of Object.entries(p.contracts)){
  if(!doc.scope.includes(id)||!doc.contracts[id])throw Error(`Unowned contract ${id}`);
  for(const citation of c.citations??[]){
   const section=sourceSectionText(splitFrontmatter(readFileSync(`items/${citation.source}.md`,'utf8')).body,citation.source_section);
   if(!section||!normalize(section).includes(normalize(citation.quote)))throw Error(`Stale quote ${id}/${citation.fact}/${citation.source}`);
  }
  doc.contracts[id]={...doc.contracts[id],...c};replaced++;
 }
 writes.set(p.target,JSON.stringify(doc,null,2)+'\n');
}
for(const batch of [39,42,55]){
 const p=`${base}/proposals/batch-${batch}.coverage.json`;
 writes.set(`research/${run}-batch-${batch}.coverage.json`,JSON.stringify(read(p),null,2)+'\n');
}
const snapshot=loadStep1Record(process.cwd(),run),manifests=new Map(),planPath='research/plan-spec.json',plan=read(planPath);
for(const s of read(release.exact_current_source_references_path)){
 const raw=readFileSync(s.source,'utf8');
 if(hash(raw)!==s.final_raw_sha256)throw Error(`Stale references ${s.id}`);
 const actual=parseFrontmatter(splitFrontmatter(raw).fm).sources;
 if(JSON.stringify(actual)!==JSON.stringify(s.sources))throw Error(`Reference export mismatch ${s.id}`);
 const batch=snapshot.items.get(s.id)?.page.batch;
 if(!batch)throw Error(`Missing source owner ${s.id}`);
 const path=`research/${run}-batch-${batch}.pages.json`;
 if(!manifests.has(path))manifests.set(path,read(path));
 const row=manifests.get(path).flatMap(p=>p.items).find(i=>i.id===s.id);row.sources=actual;
}
for(const[p,doc]of manifests){
 writes.set(p,JSON.stringify(doc,null,2)+'\n');
 for(const page of doc){
  const planned=plan.pages.find(p=>p.id===page.id);
  if(!planned)throw Error(`Missing canonical page ${page.id}`);
  planned.items=page.items.map(i=>({...i}));
 }
}
writes.set(planPath,JSON.stringify(plan,null,2)+'\n');
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),archive=`research/${run}-owner-native-qft-integration/${stamp}`;
mkdirSync(archive,{recursive:true});const records=[];
for(const[p,txt]of writes){const before=readFileSync(p);writeFileSync(`${archive}/${p.replaceAll('/','__')}.before`,before);records.push({path:p,before_sha256:hash(before),after_sha256:hash(txt)});}
for(const[p,txt]of writes){writeFileSync(`${p}.tmp`,txt);renameSync(`${p}.tmp`,p);}
writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,at:new Date().toISOString(),owner:'/root',release:`${base}/final-release.json`,release_sha256:hash(readFileSync(`${base}/final-release.json`)),contracts:replaced,coverage_batches:[39,42,55],source_references:7,writes:records,source_edits:false,native_gate_authorization:false},null,2)+'\n');
console.log(JSON.stringify({contracts:replaced,writes:writes.size,receipt:`${archive}/receipt.json`}));
