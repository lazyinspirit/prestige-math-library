// ROOT ONLY. Private proposal implementation; author has not executed it.
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';import {createRequire} from 'node:module';
import {splitFrontmatter,sourceSectionText,numberedProofSteps,SOURCE_SECTIONS} from '../../tools/physics-support/facts-block.mjs';
const RUN='physics-td-qft-rpm-62-2026-10-14',BASE='research/'+RUN+'-owner-stage3-native-qft-repairs-round1',args=process.argv.slice(2),apply=args.includes('--apply');
if(!apply||!args.includes('--affected-carriers-drained')||!args.includes('--owners-released'))throw Error('ROOT: --apply --affected-carriers-drained --owners-released');
if(process.cwd()!=='/Users/ianx/Projects/prestige-math-library/physics')throw Error('Wrong cwd');
const yaml=createRequire('/Users/ianx/Projects/prestige-intelligence/web/package.json')('yaml'),cache=new Map(),staged=new Map(),errors=[],sk=['ino','dev','size','mtimeMs','ctimeMs'];
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');const canon=v=>Array.isArray(v)?v.map(canon):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canon(v[k])])):v;const same=(a,b)=>JSON.stringify(canon(a))===JSON.stringify(canon(b));
const safe=p=>{if(typeof p!=='string'||path.isAbsolute(p)||p.split('/').includes('..'))throw Error('Unsafe path '+p);return p};
const read=p=>{safe(p);if(!cache.has(p)){const a=fs.statSync(p),bytes=fs.readFileSync(p),b=fs.statSync(p);if(sk.some(k=>a[k]!==b[k]))throw Error('Read raced '+p);cache.set(p,{bytes,stat:b,sha:null})}return cache.get(p)};
const hash=p=>read(p).sha??=sha(read(p).bytes),json=p=>JSON.parse(read(p).bytes.toString()),tryOne=(label,fn)=>{try{fn()}catch(e){errors.push({label,error:e.message})}},norm=s=>String(s??'').replace(/\s+/g,' ').trim();
const index=json(BASE+'/contracts.index.json'),proposal=json(index.proposal_path);if(index.run!==RUN||index.released!==true||index.root_only!==true||index.source_writes!==false||index.decisions_ledger_excluded!==true)throw Error('Unreleased/wrong scope');
const bytesGuard=(p,a)=>{if(!read(p).bytes.equals(read(a).bytes))throw Error('Byte guard differs '+p)};
tryOne('exact owner packet',()=>bytesGuard(index.proposal_path,index.proposal_archive));
for(const[p,g]of Object.entries(index.source_byte_guards))tryOne('source/provider '+p,()=>{bytesGuard(p,g.before_file);hash(p)});
const batches=new Set(Object.keys(proposal.by_path).map(p=>p.match(/-batch-(\d+)\.proof-contracts\.json$/)?.[1]));
const writerCheck=()=>{const s=JSON.parse(fs.readFileSync('.physics-autopilot/'+RUN+'/state.json','utf8'));if(s.run!==RUN)throw Error('Wrong native run');const live=Object.entries(s.dispatches).filter(([,d])=>d.startedAt&&!d.endedAt&&['reader','alpha','beta'].includes(d.role)&&(d.covers??[]).some(b=>batches.has(String(b))));if(live.length)throw Error('Affected writer live '+live.map(([k])=>k).join(','))};tryOne('writer barrier',writerCheck);
const source=id=>{const p='items/'+id+'.md';if(!index.source_byte_guards[p])throw Error('Unguarded source/provider '+id);const v=splitFrontmatter(read(p).bytes.toString());if(yaml.parse(v.fm)?.id!==id)throw Error('Source id mismatch '+id);return v.body};
for(const[p,target]of Object.entries(proposal.by_path))tryOne(p,()=>{
 if(!/^research\/physics-td-qft-rpm-62-2026-10-14-batch-\d+\.proof-contracts\.json$/.test(p))throw Error('Unapproved target');bytesGuard(p,target.before_file);const old=json(p),next=structuredClone(old);
 for(const[id,fields]of Object.entries(target.contracts)){
  if(!old.scope?.includes(id)||!Object.hasOwn(old.contracts,id))throw Error('Existing owning contract/scope missing '+id);
  const body=source(id),steps=new Set(numberedProofSteps(body).map(x=>String(x.id))),c=old.contracts[id];
  for(const[f,v]of Object.entries(fields)){
   if(!['citations','boundaries','risk_review'].includes(f))throw Error('Unapproved partial field '+f);
   if(f==='citations'){
    if(v.length!==c.citations.length)throw Error('Citation inventory changed');
    for(let j=0;j<v.length;j++){
     const a=c.citations[j],z=v[j];for(const k of new Set([...Object.keys(a),...Object.keys(z)]))if(!['quote','uses','reviewed'].includes(k)&&!same(a[k],z[k]))throw Error('Citation identity/manual field changed '+id+'/'+j+'/'+k);
     if(!SOURCE_SECTIONS.has(z.source_section)||!z.quote?.trim()||!norm(sourceSectionText(source(z.source),z.source_section)).includes(norm(z.quote)))throw Error('Current legal quote mismatch '+id+'/'+z.fact+'/'+z.source);
     if(!z.uses?.length||z.uses.some(s=>!steps.has(String(s))))throw Error('Use does not bind current step '+id+'/'+z.fact);
     if(!same(z.uses,a.uses)&&!(id==='def-qft-free-dirac-model'&&z.fact==='F3'&&z.source==='lem-qft-free-dirac-car-locality'&&same(z.uses,['1.2','2.1'])))throw Error('Unapproved use change');
     if(!same(z.reviewed,a.reviewed)&&!(z.reviewed?.upheld===true&&z.reviewed.reason?.length>=80))throw Error('Unsupported case-specific citation review');
    }
   }else if(f==='boundaries'){
    if(v.length!==c.boundaries.length)throw Error('Boundary inventory changed');for(let j=0;j<v.length;j++){const a=c.boundaries[j],z=v[j];for(const k of new Set([...Object.keys(a),...Object.keys(z)]))if(k!=='reviewed'&&!same(a[k],z[k]))throw Error('Boundary/manual/scope field changed');if(!same(z.reviewed,a.reviewed)&&!(z.case==='empty'&&z.reviewed?.upheld===true&&z.reviewed.reason?.length>=80))throw Error('Unsupported boundary detector disposition')}
   }else{
    const oldReview=structuredClone(c.risk_review);delete oldReview.prior_reviews;const last=v.prior_reviews?.at(-1);if(!same(last,oldReview)||!same(v.prior_reviews.slice(0,-1),c.risk_review.prior_reviews??[])||v.status!=='complete'||!v.reviewer?.trim()||v.notes?.length<80)throw Error('Native risk review/history not preserved');
    for(const k of Object.keys(c.risk_review))if(!['status','reviewer','notes','prior_reviews'].includes(k)&&!same(v[k],c.risk_review[k]))throw Error('Unknown risk field altered');
   }
   next.contracts[id][f]=structuredClone(v);
  }
  for(const k of Object.keys(c))if(!Object.hasOwn(fields,k)&&!same(next.contracts[id][k],c[k]))throw Error('Unproposed/manual finite/history field changed');
 }
 staged.set(p,Buffer.from(JSON.stringify(next,null,2)+'\n'));
});
const currency=()=>{for(const[p,r]of cache){const now=fs.statSync(p);if(sk.some(k=>now[k]!==r.stat[k]))throw Error('Cached input currency changed '+p)}writerCheck()};tryOne('precommit currency',currency);
const out=BASE+'/contract-executions/'+new Date().toISOString().replace(/[:.]/g,'-');fs.mkdirSync(out,{recursive:true});const report={run:RUN,errors,source_writes:false,shared_writes:false,gate_acceptance:false,writes:[...staged].map(([p,b])=>({path:p,before_raw_sha256:hash(p),after_raw_sha256:sha(b)}))};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2)+'\n');
if(errors.length){console.error(JSON.stringify({status:'refused-before-writes',errors:errors.length,report:out+'/report.json'}));process.exitCode=1}else{
 const pending=[],done=[];const current=()=>{const committed=new Set(done.map(x=>x.p));for(const[p,r]of cache){if(committed.has(p)){if(!fs.readFileSync(p).equals(staged.get(p)))throw Error('Committed target edited concurrently '+p)}else if(sk.some(k=>fs.statSync(p)[k]!==r.stat[k]))throw Error('Input changed '+p)}writerCheck()};
 try{for(const[p,b]of staged){const a=out+'/'+p.replaceAll('/','__')+'.before',tmp=p+'.qft-gate-'+process.pid+'.tmp';fs.writeFileSync(a,read(p).bytes,{flag:'wx'});fs.writeFileSync(tmp,b,{flag:'wx'});pending.push({p,tmp,a})}current();for(const x of pending){current();if(!fs.readFileSync(x.p).equals(read(x.p).bytes))throw Error('Shared target preimage changed '+x.p);fs.renameSync(x.tmp,x.p);done.push(x)}current();report.shared_writes=true;report.status='applied';fs.writeFileSync(out+'/receipt.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:'applied',receipt:out+'/receipt.json'}))}
 catch(e){const manual=[];for(const x of done.reverse()){if(!fs.readFileSync(x.p).equals(staged.get(x.p))){manual.push(x);continue}const tmp=x.p+'.rollback-'+process.pid;fs.writeFileSync(tmp,read(x.p).bytes,{flag:'wx'});if(!fs.readFileSync(x.p).equals(staged.get(x.p))){fs.unlinkSync(tmp);manual.push(x);continue}fs.renameSync(tmp,x.p)}for(const x of pending)if(fs.existsSync(x.tmp))fs.unlinkSync(x.tmp);fs.writeFileSync(out+'/rollback.json',JSON.stringify({error:e.message,manual_recovery:manual},null,2)+'\n');throw e}
}
