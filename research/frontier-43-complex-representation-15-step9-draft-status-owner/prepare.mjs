import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {runScope,splitFrontmatter,sha256} from '../../tools/step9-lib.mjs';
import {itemHashGuard,itemHashJudge,itemSurfaceHash} from '../../tools/item-hash.mjs';
const run='frontier-43-complex-representation-15', dir=`research/${run}-step9-draft-status-owner`;
const scope=runScope(run);const ledger=JSON.parse(readFileSync(scope.ledger));
const manifests=Array.from({length:15},(_,i)=>JSON.parse(readFileSync(`research/${run}-batch-${i+1}.pages.json`)));
const nativeIds=new Set(manifests.flatMap(ps=>ps.flatMap(p=>p.items.map(i=>i.id))));
const nativePages=new Set(manifests.flatMap(ps=>ps.map(p=>p.id)));
if(scope.items.some(i=>!nativeIds.has(i.id))||scope.pages.some(p=>!nativePages.has(p.id))) throw Error('native/scope mismatch');
const rows=[];let patch='';
for(const row of [...scope.pages,...scope.items]) {
 const text=readFileSync(row.file,'utf8');const fm=splitFrontmatter(text).frontmatter;
 if(/^status:/m.test(fm)) continue;
 const prior=spawnSync('git',['show',`${ledger.baseline_commit}:${row.file}`],{encoding:'utf8'});
 if(prior.status===0 && /^status:\s*published\s*$/m.test(splitFrontmatter(prior.stdout).frontmatter)) throw Error('baseline published forbidden '+row.file);
 const next=text.replace(/^---\n/, '---\nstatus: draft\n');
 if(next===text||next.replace(/^---\nstatus: draft\n/,'---\n')!==text) throw Error('not exact insertion');
 for(const section of ['Statement','Definition','Proof','Facts & Assumptions']) {
  const pattern=new RegExp(`^## ${section.replace('&','\\&')}\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`,'m');
  if(text.match(pattern)?.[0]!==next.match(pattern)?.[0]) throw Error('changed section');
 }
 for(const kind of ['before','proposed']) mkdirSync(`${dir}/${kind}/items`,{recursive:true});
 writeFileSync(`${dir}/before/${row.file}`,text); writeFileSync(`${dir}/proposed/${row.file}`,next);
 patch+=`--- a/${row.file}\n+++ b/${row.file}\n@@ -1,1 +1,2 @@\n ---\n+status: draft\n`;
 rows.push({...row,batches:manifests.flatMap((ps,i)=>ps.some(p=>p.items.some(it=>it.id===row.id))?[i+1]:[]),baseline_exists:prior.status===0,before_raw_sha256:sha256(text),after_raw_sha256:sha256(next),before_guard_sha256:itemHashGuard(text),after_guard_sha256:itemHashGuard(next),before_judge_sha256:itemHashJudge(text),after_judge_sha256:itemHashJudge(next),before_surface_sha256:itemSurfaceHash(text),after_surface_sha256:itemSurfaceHash(next),body_sha256:sha256(splitFrontmatter(text).body),exact_inverse_restores_preimage:true,all_other_frontmatter_unchanged:true});
}
const spine=JSON.parse(readFileSync(`research/${run}-spine-audit.json`));
writeFileSync(`${dir}/proposal.json`,JSON.stringify({version:1,run,owner:'/root/step9_draft_status_owner',created_at:new Date().toISOString(),selection:{native_batches:15,pages:scope.pages.length,items:scope.items.length,missing_status_pages:rows.filter(r=>r.file.startsWith('library/')).length,missing_status_items:rows.length},repair:'Insert exactly status: draft after initial frontmatter delimiter; no other changes.',spine_affected:spine.scope.filter(r=>rows.some(a=>a.id===r.id)).map(r=>r.id),rows},null,2)+'\n');
writeFileSync(`${dir}/proposal.patch`,patch);console.log(JSON.stringify({count:rows.length,batches:[...new Set(rows.flatMap(r=>r.batches))],baseline_exists:rows.filter(r=>r.baseline_exists).map(r=>r.id),spine_affected:spine.scope.filter(r=>rows.some(a=>a.id===r.id)).map(r=>r.id)},null,2));
