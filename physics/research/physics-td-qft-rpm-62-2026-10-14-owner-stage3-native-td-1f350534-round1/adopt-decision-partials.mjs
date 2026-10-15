// Private root-only decision adoption. Official ledger append must precede this.
import {readFileSync,writeFileSync,statSync,mkdirSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,dirname,join} from 'node:path';
const cwd=process.cwd(), a=process.argv.indexOf('--index');
if(a<0||!process.argv.includes('--apply')||!process.argv.includes('--affected-carriers-drained'))throw Error('requires --index PATH --apply --affected-carriers-drained');
const indexPath=resolve(cwd,process.argv[a+1]), packet=JSON.parse(readFileSync(indexPath,'utf8'));
if(packet.released!==true||packet.round!==1||packet.source_edits!==false)throw Error('not released round1');
const sha=b=>createHash('sha256').update(b).digest('hex');
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const equal=(a,b)=>JSON.stringify(canonical(a))===JSON.stringify(canonical(b));
const snapshot=path=>{const p=resolve(cwd,path),raw=readFileSync(p),s=statSync(p);return {p,raw,sha:sha(raw),ino:s.ino,size:s.size,mtime:s.mtimeMs};};
const unchanged=s=>{const n=statSync(s.p);return n.ino===s.ino&&n.size===s.size&&n.mtimeMs===s.mtime&&sha(readFileSync(s.p))===s.sha;};
const guards=[],planned=[],errors=[];
for(const g of packet.source_guards){const s=snapshot(g.path);guards.push(s);if(s.sha!==g.sha256)errors.push('source guard '+g.path);}
const ledger=snapshot('physics/research/defect-ledger.jsonl');guards.push(ledger);
const rows=ledger.raw.toString().split(/\r?\n/).filter(Boolean).map(x=>JSON.parse(x));
for(const row of packet.ledger_append_proposals){const actual=rows.filter(x=>x.defect_id===row.defect_id);if(actual.length!==1||!equal(actual[0],row))errors.push('official append missing/different '+row.defect_id);}
const fields=new Set(['verdict','owner_resolution','evidence','change_kind','historical_delta_unknown','defect_ids','route','same_defect_as','same_defect_evidence']);
for(const [path,p] of Object.entries(packet.by_path)){
 const s=snapshot(path);guards.push(s);if(s.sha!==p.before_sha256){errors.push('decision guard '+path);continue;}
 const scope=snapshot(p.scope_guard.path);guards.push(scope);if(scope.sha!==p.scope_guard.sha256)errors.push('frozen scope '+path);
 const doc=JSON.parse(s.raw);
 for(const patch of p.patches){const matches=doc.decisions.filter(x=>x.obligation===patch.obligation);if(matches.length!==1||matches[0].id!==patch.id||!equal(matches[0],patch.before)){errors.push('decision preimage '+patch.obligation);continue;}
  for(const [key,val] of Object.entries(patch.fields)){if(!fields.has(key))errors.push('unapproved decision field '+key);else matches[0][key]=val;}
 }
 for(const row of p.append??[]){if(doc.decisions.some(x=>x.obligation===row.obligation)){errors.push('duplicate supplemental '+row.obligation);continue;}if(row.route!=='gate'||row.obligation!=='gate:'+row.defect_ids?.[0]||row.defect_ids.length!==1){errors.push('supplemental shape '+row.obligation);continue;}const actual=rows.filter(x=>x.defect_id===row.defect_ids[0]);if(actual.length!==1||actual[0].subject!==row.id||actual[0].disposition!=='fixed')errors.push('supplemental canonical row '+row.obligation);doc.decisions.push(row);}
 planned.push({s,after:Buffer.from(JSON.stringify(doc,null,2)+'\n')});
}
const out=join(dirname(indexPath),'root-decision-executions',new Date().toISOString().replaceAll(':','-'));mkdirSync(out,{recursive:true});
if(errors.length){writeFileSync(join(out,'refusal.json'),JSON.stringify({applied:false,errors},null,2)+'\n');throw Error(errors.join('\n'));}
for(const s of guards)if(!unchanged(s))throw Error('concurrent guard '+s.p);
for(const {s} of planned)writeFileSync(join(out,s.p.split('/').at(-1)+'.before'),s.raw);
const written=[];try{for(const {s,after} of planned){if(!unchanged(s))throw Error('target changed '+s.p);const tmp=s.p+'.td-owner-tmp';writeFileSync(tmp,after);if(!unchanged(s))throw Error('target changed before rename '+s.p);renameSync(tmp,s.p);written.push({s,after});}}catch(e){const preserved=[];for(const {s,after} of written){if(sha(readFileSync(s.p))===sha(after))writeFileSync(s.p,s.raw);else preserved.push(s.p);}writeFileSync(join(out,'mutation-failure.json'),JSON.stringify({applied:false,error:String(e),concurrent_targets_preserved:preserved},null,2)+'\n');throw e;}
writeFileSync(join(out,'receipt.json'),JSON.stringify({run:packet.run,round:1,applied:true,index_path:indexPath,index_sha256:sha(readFileSync(indexPath)),writes:planned.map(({s,after})=>({path:s.p,before_sha256:s.sha,after_sha256:sha(after)})),source_edits:false,ledger_writes:false,alias_context_writes:false,native_observations_preserved:true,unproposed_fields_preserved:true,native_stamping_required:true},null,2)+'\n');console.log(join(out,'receipt.json'));
