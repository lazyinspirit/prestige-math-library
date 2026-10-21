import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,cpSync,readFileSync,writeFileSync,mkdirSync,rmSync,symlinkSync,existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,dirname,resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {LENS_REVERSION_PINS as pins,LENS_REVERSION_POLICY as policy} from './step3-owner-lens-reversion-successor.mjs';
import {sourceIdenticalReversionContinuity as check} from './step3-owner-source-identical-reversion.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19',ID='def-lens-space-surgery-orientation-convention';
// Raw native prompts and operational archives are optional local fixtures, not
// synthetic authority. Present-but-invalid evidence still fails the real guard.
const requiredFixturePaths=[...Object.values(pins).map(p=>p.path),
 `items/${ID}.md`,`research/${RUN}-batch-68.pages.json`,
 `research/${RUN}-batch-68.proof-contracts.json`,'research/defect-ledger.jsonl'];
const missingFixturePaths=requiredFixturePaths.filter(p=>!existsSync(resolve(p)));
const actual={skip:missingFixturePaths.length
 ? `optional actual-native lens68 fixture unavailable (${missingFixturePaths.length} required paths missing)`
 : false};

const canonical=x=>Array.isArray(x)?x.map(canonical):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])])):x;
const hash=x=>createHash('sha256').update(JSON.stringify(canonical(x))).digest('hex');
const raw=x=>createHash('sha256').update(x).digest('hex');
function fixture(t){
 const root=mkdtempSync(join(tmpdir(),'lens68-reversion-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const copy=p=>{mkdirSync(dirname(join(root,p)),{recursive:true});cpSync(resolve(p),join(root,p));};
 for(const p of Object.values(pins))copy(p.path);
 for(const p of [`items/${ID}.md`,`research/${RUN}-batch-68.pages.json`,`research/${RUN}-batch-68.proof-contracts.json`,'research/defect-ledger.jsonl'])copy(p);
 const json=p=>JSON.parse(readFileSync(join(root,p),'utf8'));
 const decision=json(pins.native_decisions.path).decisions.find(d=>d.id===ID),before=json(pins.pre_snapshot.path).hashes[ID];
 const target={obligation:`touched:68:${ID}`,id:ID,batch:'68',route:'touched',added:false};
 const manifest=json(`research/${RUN}-batch-68.pages.json`).flatMap(p=>p.items.filter(i=>i.id===ID).map(i=>({...i,__step4_page_id:p.id})))[0];
 const current={item_sha256:raw(readFileSync(join(root,`items/${ID}.md`))),manifest_sha256:hash(manifest),contract_sha256:hash(json(`research/${RUN}-batch-68.proof-contracts.json`).contracts[ID])};
 const entry={version:1,policy,run:RUN,id:ID,obligation:decision.obligation,owner_identity:'/root',reason:'Authenticated native lens reversion preserves exact pre-reader source and full manifest while retaining only the two reviewed and explicitly pinned boundary-evidence corrections.',target_sha256:hash(target),pre_carrier_sha256:hash(before),current_carrier_sha256:hash(current),independent_execution_coverage_adopted:false,...structuredClone(pins)};
 return{root,run:RUN,decision,before,current,target,entry,check(){return check(this.root,this.run,this.decision,this.target,this.before,this.current,this.entry);},json(p,fn){const x=json(p);fn(x);writeFileSync(join(root,p),JSON.stringify(x));},rebind(){const c=json(`research/${RUN}-batch-68.proof-contracts.json`).contracts[ID];this.current.contract_sha256=hash(c);this.entry.current_carrier_sha256=hash(this.current);}};
}
test('absent opt-in remains fail closed',()=>assert.equal(check('/absent','r',{}, {},{}, {},undefined),false));
test('actual native source reversion admits exactly two boundary evidence rows',actual,t=>{const f=fixture(t);assert.equal(f.check(),true);assert.equal(f.decision.verdict,'reverted_change');assert.equal(f.before.item_sha256,f.current.item_sha256);assert.notEqual(f.before.contract_sha256,f.current.contract_sha256);});
const changes={
 'wrong run':f=>f.run='machine-learning-all-101-2026-10-19',
 'wrong policy':f=>f.entry.policy+='-other',
 'wrong version':f=>f.entry.version=2,
 'unknown entry field':f=>f.entry.waiver=true,
 'wrong owner':f=>f.entry.owner_identity='/root/other',
 'coverage claim':f=>f.entry.independent_execution_coverage_adopted=true,
 'changed verdict':f=>f.decision.verdict='accepted_repair',
 'changed confidence':f=>f.decision.repair_confidence=0.9,
 'changed native evidence':f=>f.decision.evidence+=' extra',
 'changed native defect':f=>f.decision.defect_ids=['other'],
 'wrong item':f=>f.target.id='def-other',
 'wrong batch':f=>f.target.batch='69',
 'direct target':f=>f.target.direct=true,
 'stabilized target':f=>f.target.stabilized=true,
 'added target':f=>f.target.added=true,
 'wrong target fingerprint':f=>f.entry.target_sha256='0'.repeat(64),
 'wrong pre carrier':f=>f.before.contract_sha256='0'.repeat(64),
 'wrong current carrier':f=>f.current.contract_sha256='0'.repeat(64),
 'source changed':f=>writeFileSync(join(f.root,`items/${ID}.md`),'different'),
 'manifest changed':f=>f.json(`research/${RUN}-batch-68.pages.json`,d=>d[0].items.find(i=>i.id===ID).title+=' different'),
 'third boundary changed and rebound':f=>{f.json(`research/${RUN}-batch-68.proof-contracts.json`,d=>d.contracts[ID].boundaries[2].evidence+=' extra');f.rebind();},
 'zero row changed and rebound':f=>{f.json(`research/${RUN}-batch-68.proof-contracts.json`,d=>d.contracts[ID].boundaries[1].evidence+=' extra');f.rebind();},
 'endpoints row changed and rebound':f=>{f.json(`research/${RUN}-batch-68.proof-contracts.json`,d=>d.contracts[ID].boundaries[4].evidence+=' extra');f.rebind();},
 'template review changed and rebound':f=>{f.json(`research/${RUN}-batch-68.proof-contracts.json`,d=>d.contracts[ID].boundaries[4].template_review.upheld=false);f.rebind();},
 'other contract field changed and rebound':f=>{f.json(`research/${RUN}-batch-68.proof-contracts.json`,d=>d.contracts[ID].citations.push({source:'other'}));f.rebind();},
 'risk review added and rebound':f=>{f.json(`research/${RUN}-batch-68.proof-contracts.json`,d=>d.contracts[ID].risk_review={status:'complete'});f.rebind();},
 'ledger disposition changed':f=>{const p=join(f.root,'research/defect-ledger.jsonl');const rows=readFileSync(p,'utf8').split('\n').filter(Boolean).map(x=>JSON.parse(x));rows.find(x=>x.defect_id===f.decision.defect_ids[0]).disposition='fixed';writeFileSync(p,rows.map(x=>JSON.stringify(x)).join('\n')+'\n');},
 'duplicate ledger row':f=>{const p=join(f.root,'research/defect-ledger.jsonl');const text=readFileSync(p,'utf8');const row=text.split('\n').find(x=>x.includes('ipkt109-b68-3a-lens-zero-convention'));writeFileSync(p,text+row+'\n');},
 'unsafe source archive':f=>f.entry.pre_source.path='../source',
 'symlink live source':f=>{const p=join(f.root,`items/${ID}.md`);rmSync(p);symlinkSync(join(f.root,f.entry.pre_source.path),p);},
};
for(const[name,mutate]of Object.entries(changes))test('reject '+name,actual,t=>{const f=fixture(t);mutate(f);assert.equal(f.check(),false);});
for(const key of Object.keys(pins))test('reject tampered authenticated '+key+' even with rebound supplied digest',actual,t=>{const f=fixture(t);const p=join(f.root,f.entry[key].path);writeFileSync(p,readFileSync(p,'utf8')+'\n');f.entry[key].sha256=raw(readFileSync(p));assert.equal(f.check(),false);});
test('root restamping only subject seal preserves immutable native semantics',actual,t=>{const f=fixture(t);f.decision.subject_sha256=hash(f.current);assert.equal(f.check(),true);});
