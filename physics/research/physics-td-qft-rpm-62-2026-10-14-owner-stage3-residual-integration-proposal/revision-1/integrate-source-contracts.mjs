// Root only; this author has not executed it. Decisions, ledger and native history are excluded.
import fs from 'node:fs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
import crypto from 'node:crypto';
import {splitFrontmatter,sourceSectionText,sectionText,SOURCE_SECTIONS,numberedProofSteps} from '../../../tools/physics-support/facts-block.mjs';
if(process.cwd()!=='/Users/ianx/Projects/prestige-math-library/physics')throw Error('Execute from exact physics workspace');
const RUN='physics-td-qft-rpm-62-2026-10-14',BASE=`research/${RUN}-owner-stage3-residual-integration-proposal/revision-1`;
const args=process.argv.slice(2),get=k=>args[args.indexOf(k)+1],apply=args.includes('--apply');
if(!args.includes('--index')||apply===args.includes('--dry-run')||apply&&!args.includes('--target-writers-drained'))throw Error('Use --index INDEX --dry-run OR --apply --target-writers-drained');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex'),norm=x=>String(x??'').replace(/\s+/g,' ').trim();
const keys=['dev','ino','size','mtimeMs','ctimeMs'],cache=new Map(),docs=new Map(),writes=new Map(),errors=[];
const safe=p=>{if(typeof p!=='string'||p.startsWith('/')||p.split('/').includes('..'))throw Error('Unsafe path '+p);return p;};
const read=p=>{safe(p);if(!cache.has(p)){const a=fs.statSync(p),bytes=fs.readFileSync(p),b=fs.statSync(p);if(keys.some(k=>a[k]!==b[k]))throw Error('Read race '+p);cache.set(p,{bytes,stat:b,hash:sha(bytes)});}return cache.get(p);};
const json=p=>JSON.parse(read(p).bytes.toString()),guard=(p,h)=>{if(!/^[a-f0-9]{64}$/.test(h??'')||read(p).hash!==h)throw Error('Exact raw guard mismatch '+p);};
const before=t=>{if(t.field_guard){if(t.path!=='research/plan-spec.json'||!t.before_file||!Array.isArray(t.field_guard)||t.field_guard.length!==7)throw Error('Invalid exact plan field projection');guard(t.before_file,t.before_sha256);const raw=json(t.path),pages=Array.isArray(raw)?raw:raw.pages;for(const g of t.field_guard){const homes=pages.filter(p=>p.id===g.page),rows=homes.flatMap(p=>(p.items??[]).filter(x=>x?.id===g.id));if(homes.length!==1||rows.length!==1||JSON.stringify(rows[0])!==JSON.stringify(g.row_before)||JSON.stringify(Object.fromEntries(['id','order','requires'].filter(k=>Object.hasOwn(homes[0],k)).map(k=>[k,homes[0][k]])))!==JSON.stringify(g.page_header_before))throw Error('Owned plan row/header differs '+g.id);}return;}if(t.before_file){if(!read(t.path).bytes.equals(read(t.before_file).bytes))throw Error('Archived current shared preimage differs '+t.path);}else guard(t.path,t.before_sha256);};
const attempt=(label,f)=>{try{f();}catch(e){errors.push({label,error:e.message});}};
const doc=p=>{if(!docs.has(p))docs.set(p,structuredClone(json(p)));return docs.get(p);};
const index=json(get('--index'));if(index.run!==RUN||index.released!==true||index.decisions_ledger_outside_context_excluded!==true)throw Error('Wrong/unreleased metadata-only index');
const targetDrain=()=>{const s=JSON.parse(fs.readFileSync(`.physics-autopilot/${RUN}/state.json`,'utf8'));if(s.run!==RUN)throw Error('Wrong native run');const live=Object.values(s.dispatches??{}).filter(d=>(d.covers??[]).some(b=>index.target_batches.includes(String(b)))&&d.startedAt&&!d.endedAt);if(live.length)throw Error('Actual target worker active: '+live.map(d=>d.label).join(', '));};
attempt('target writer handoff',targetDrain);
for(const r of index.receipts)attempt('scientific release receipt',()=>guard(r.path,r.sha256));
for(const [id,g]of Object.entries(index.source_guards))attempt('released source '+id,()=>{if(g.path!==`items/${id}.md`)throw Error('Wrong source identity path');guard(g.path,g.sha256);});
const inventory=new Map();for(const b of index.target_batches)attempt('target inventory '+b,()=>{const p=`research/${RUN}-batch-${b}.pages.json`;for(const page of json(p))for(const row of page.items??[]){if(!row.id||inventory.has(row.id))throw Error('Invalid/duplicate native inventory');inventory.set(row.id,{batch:b,page:page.id});}});
const fields=new Set(['citations','derivations','boundaries','routine_steps','supplier_excerpts']);
for(const t of index.targets)attempt('partial owning contract '+t.path,()=>{
 before(t);if(t.packet_sha256)guard(t.packet,t.packet_sha256);const packet=json(t.packet),part=packet.by_path?.[t.path];if(!part)throw Error('Missing exact proposed document');
 const current=doc(t.path);
 for(const [id,patch]of Object.entries(part.contracts??{})){
  const home=inventory.get(id);if(!home||!index.source_guards[id]||!t.approved_ids.includes(id)||t.path!==`research/${RUN}-batch-${home.batch}.proof-contracts.json`||!current.scope?.includes(id)||!current.contracts?.[id])throw Error('Wrong owning existing scope '+id);
  for(const [field,value]of Object.entries(patch)){if(field==='risk_review'){if(id!=='thm-tdmath-ornstein-uhlenbeck-model'||typeof value.owner_premise_clarification!=='string'||value.owner_premise_clarification.length<80)throw Error('Unapproved risk review change');const prior=current.contracts[id].risk_review;if(!prior||Object.entries(prior).some(([k,v])=>JSON.stringify(value[k])!==JSON.stringify(v))||Object.keys(value).some(k=>!(k in prior)&&k!=='owner_premise_clarification'))throw Error('Native risk review fields must remain unchanged');}else if(!fields.has(field))throw Error('Unapproved partial field '+field);current.contracts[id][field]=structuredClone(value);}
  const body=splitFrontmatter(read(`items/${id}.md`).bytes.toString()).body,steps=new Set(numberedProofSteps(body).map(s=>s.id));
  for(const b of patch.boundaries??[]){const c=b.case_scope;if(!c)continue;if(!SOURCE_SECTIONS.has(c.source_section)||c.current_raw_sha256!==index.source_guards[id].sha256||!sourceSectionText(body,c.source_section)?.includes(c.source_excerpt))throw Error('Illegal/stale owner-approved public case binding '+id);}
  for(const q of patch.citations??[]){const p=`items/${q.source}.md`,publicText=sourceSectionText(splitFrontmatter(read(p).bytes.toString()).body,q.source_section);if(!publicText||!q.quote||!norm(publicText).includes(norm(q.quote)))throw Error('Stale/illegal current citation '+id+'/'+q.fact);if(!Array.isArray(q.uses)||!q.uses.length||q.uses.some(s=>!steps.has(String(s))))throw Error('Citation uses do not name current subject steps '+id+'/'+q.fact);}
  for(const d of patch.derivations??[])if(!steps.has(String(d.step)))throw Error('Derivation step not current '+id+'/'+d.step);
 }
});
for(const t of index.mirror_targets)attempt('existing mirror preimage '+t.path,()=>{before(t);doc(t.path);});
for(const m of index.mirrors)attempt('exact approved source mirror '+m.id,()=>{
 const home=inventory.get(m.id),guarded=index.source_guards[m.id];if(!home||!guarded)throw Error('Missing released owning source');
 const parsed=splitFrontmatter(read(guarded.path).bytes.toString()),body=parsed.body,sourceMeta=yaml().parse(parsed.fm)??{},approved={...m.fields};for(const [f,s]of Object.entries(m.current_source_sections??{}))approved[f]=sourceSectionText(body,s)?.trim();
 if(Object.keys(approved).some(k=>!['statement','proof','deps','dependency_roles','provenance'].includes(k)))throw Error('Unapproved mirror field');
 for(const k of ['deps','dependency_roles','provenance'])if(approved[k]!==undefined&&JSON.stringify(approved[k])!==JSON.stringify(sourceMeta[k]))throw Error('Source frontmatter mirror differs '+m.id+'/'+k);
 if(approved.statement!==undefined){const s=['Statement','Definition','Postulate','Example','Remark'].map(k=>sourceSectionText(body,k)).find(x=>x&&norm(x)===norm(approved.statement));if(!s)throw Error('Approved public mirror differs from current source');}
 if(approved.proof!==undefined&&norm(sectionText(body,'Proof'))!==norm(approved.proof))throw Error('Approved proof transcript differs from current source');
 const mf=`research/${RUN}-batch-${home.batch}.pages.json`;if(!index.mirror_targets.some(t=>t.path===mf))throw Error('Missing guarded owning MF');
 for(const p of [mf,'research/plan-spec.json']){const d=doc(p),pages=Array.isArray(d)?d:d.pages,page=pages.filter(x=>x.id===home.page);if(page.length!==1)throw Error('Missing existing mirror page');const rows=page[0].items.filter(x=>x.id===m.id);if(rows.length!==1)throw Error('Missing existing mirror item');for(const [k,v]of Object.entries(approved))rows[0][k]=structuredClone(v);}
});
for(const [p,d]of docs){const b=Buffer.from(JSON.stringify(d,null,2)+'\n');if(!b.equals(read(p).bytes))writes.set(p,b);}
const currency=()=>{for(const [p,r]of cache){const s=fs.statSync(p);if(keys.some(k=>s[k]!==r.stat[k]))throw Error('Input changed '+p);}targetDrain();};
attempt('final input currency',currency);
const out=`${BASE}/executions/${new Date().toISOString().replace(/[:.]/g,'-')}`;fs.mkdirSync(out,{recursive:true});const report={run:RUN,errors,planned_writes:[...writes.keys()],source_writes:false,decision_ledger_state_writes:false,native_acceptance:false,shared_writes:false};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2)+'\n');
if(errors.length){console.error(JSON.stringify({status:'refused-before-writes',errors:errors.length,report:out+'/report.json'}));process.exitCode=1;}
else if(!apply)console.log(JSON.stringify({status:'dry-run',report:out+'/report.json'}));
else{const staged=[],committed=[];try{for(const [p,b]of writes){const tmp=p+'.stage3-metadata-'+process.pid+'.tmp',archive=out+'/'+p.replaceAll('/','__')+'.before';fs.writeFileSync(archive,read(p).bytes,{flag:'wx'});fs.writeFileSync(tmp,b,{flag:'wx'});staged.push({p,tmp,archive});}currency();for(const s of staged){if(!fs.readFileSync(s.p).equals(read(s.p).bytes))throw Error('Target changed before atomic commit '+s.p);fs.renameSync(s.tmp,s.p);committed.push(s);}report.shared_writes=true;fs.writeFileSync(out+'/receipt.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:'applied',receipt:out+'/receipt.json'}));}catch(e){const recovery=[];for(const s of committed.reverse())try{if(!fs.readFileSync(s.p).equals(writes.get(s.p))){recovery.push({path:s.p,error:'Concurrent edit preserved',archive:s.archive});continue;}const tmp=s.p+'.rollback-'+process.pid;fs.writeFileSync(tmp,fs.readFileSync(s.archive),{flag:'wx'});fs.renameSync(tmp,s.p);}catch(x){recovery.push({path:s.p,error:x.message,archive:s.archive});}for(const s of staged)if(fs.existsSync(s.tmp))fs.unlinkSync(s.tmp);fs.writeFileSync(out+'/rollback.json',JSON.stringify({error:e.message,recovery},null,2)+'\n');throw e;}}
