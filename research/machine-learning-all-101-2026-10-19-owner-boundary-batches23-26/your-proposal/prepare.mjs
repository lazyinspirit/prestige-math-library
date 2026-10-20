import fs from 'node:fs';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
import {dispositions} from './dispositions.mjs';
const base=fileURLToPath(new URL('.',import.meta.url)),run='machine-learning-all-101-2026-10-19',batches=process.argv.slice(2).map(Number),sha=s=>crypto.createHash('sha256').update(s).digest('hex'),hash=p=>sha(fs.readFileSync(p));
const invpath=`research/${run}-owner-boundary-audit-diagnosis/affected-by-batch.json`,nativepath=`research/${run}-owner-step2-native-full-failures/native-original.json`,inv=JSON.parse(fs.readFileSync(invpath)),native=JSON.parse(fs.readFileSync(nativepath)),nativedoc=JSON.parse(native.failures.find(f=>f.id==='boundary-audit').output);
const selected=inv.filter(b=>batches.includes(b.batch)),ids=new Set(selected.flatMap(b=>b.items.map(i=>i.id))),ops=[],guards=[],archives=[];
fs.mkdirSync(base+'before/items',{recursive:true});fs.mkdirSync(base+'proposed-contracts',{recursive:true});
for(const batch of selected){
 const path=batch.contract,raw=fs.readFileSync(path),doc=JSON.parse(raw);if(!fs.existsSync(base+'before/'+path.split('/').at(-1)))fs.writeFileSync(base+'before/'+path.split('/').at(-1),raw);
 for(const item of batch.items){
  const sourceRaw=fs.readFileSync(item.source),text=sourceRaw.toString(),source_guard={path:item.source,raw_sha256:sha(sourceRaw),item_guard_sha256:itemHashGuard(text)};
  if(!fs.existsSync(base+'before/items/'+item.id+'.md'))fs.writeFileSync(base+'before/items/'+item.id+'.md',sourceRaw);
  guards.push({...source_guard,finite_smoke_sha256:sha(JSON.stringify(doc.contracts[item.id].finite_smoke??[]))});
  const flagged=new Set([...item.template_rows,...item.contradicted].map(x=>x.case)),rows=doc.contracts[item.id].boundaries;
  for(const axis of flagged){
   const index=rows.findIndex(r=>r.case===axis);if(index<0)throw Error('missing '+item.id+axis);
   const before=structuredClone(rows[index]),after=structuredClone(before),config=dispositions[item.id],specific=config[axis]??(axis.startsWith('iff-')?config.iff:undefined);if(!specific)throw Error('unreviewed '+item.id+axis);
   const why=typeof specific==='string'?specific:specific.reason;
   if(axis.startsWith('iff-')&&config.iff){
    // The original no-biconditional disposition is sound. Retain its wording
    // and bind the substantive item-specific directional read explicitly.
    after.template_review={upheld:true,by:'owner-boundary-batches23-26',reason:why,item_sha256:itemHashGuard(text),row_sha256:sha(JSON.stringify({case:before.case,status:before.status,text:before.reason??before.evidence??''}))};
   }else{
    after.reason=why;if(typeof specific==='object'&&specific.status)after.status=specific.status;
    if(item.contradicted.some(c=>c.case===axis)&&after.status==='not_applicable')after.reviewed={upheld:true,by:'owner-boundary-batches23-26',reason:why};
   }
   if(after.status==='checked')after.evidence=/^kind: (?:definition|algorithm)$/m.test(text)?'Definition: '+why:why;
   if(after.status==='checked')for(const m of why.matchAll(/\bstep(?:s)?\s+(\d+\.\d+)/g))if(!text.includes(m[1]))throw Error('missing step '+m[1]);
   rows[index]=after;ops.push({operation:'replace-exact-boundary-object',path,contract_key:item.id,field:'boundaries',index,case:axis,before,after,source_guard,review_basis:why});
  }
 }
 fs.writeFileSync(base+'proposed-contracts/'+path.split('/').at(-1),JSON.stringify(doc,null,2)+'\n');
 archives.push({path:base+'before/'+path.split('/').at(-1),raw_sha256:hash(base+'before/'+path.split('/').at(-1))});
}
const report={version:1,run,cycle:1,scope_batches:batches,source_read_scope:ids.size,source_read:'Each assigned current source was read fully once for the flagged axes and actual local hypotheses/proof outcomes; this is not a complete new mathematical recertification.',operations:ops,source_guards:guards,archives,finite_smoke_preserved:true,unknown_boundary_keys_preserved:true,native_evidence:{path:nativepath,raw_sha256:hash(nativepath)},inventory_evidence:{path:invpath,raw_sha256:hash(invpath)},source_changes:[],actual_carrier_changes:[],native_gates_run:false,distinct_source_gaps:[]};
const suffix=batches.join('-');fs.writeFileSync(base+`field-cas-${suffix}.json`,JSON.stringify(report,null,2)+'\n');
fs.writeFileSync(base+`scoped-native-findings-${suffix}.json`,JSON.stringify({templates:nativedoc.templates.filter(t=>t.items.some(id=>ids.has(id))).map(t=>({...t,rows:t.rows.filter(r=>ids.has(r.id)),items:t.items.filter(id=>ids.has(id))})),contradicted:nativedoc.contradicted.filter(c=>ids.has(c.id))},null,2)+'\n');
console.log(JSON.stringify({packet:`field-cas-${suffix}.json`,items:ids.size,operations:ops.length}));
