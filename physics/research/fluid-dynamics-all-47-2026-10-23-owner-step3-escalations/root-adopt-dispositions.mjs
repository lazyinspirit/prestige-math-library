import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash} from 'node:crypto';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step3-escalations`,dir=`${base}/root-dispositions/guarded-proposals-root-direction-2`,read=p=>JSON.parse(fs.readFileSync(p)),sha=x=>createHash('sha256').update(x).digest('hex'),proposal=read(`${dir}/proposal.json`),guards=read(`${dir}/preimage-guards.json`);
const out=`${base}/root-disposition-integration.json`;assert.ok(!fs.existsSync(out));
for(const g of guards.inputs)assert.equal(sha(fs.readFileSync(g.path)),g.raw_sha256_guard,`Stale draft ${g.path}`);
assert.ok(fs.existsSync(`research/${run}-step3-owner-creation-lem-fd-c1-boundary-surface-integrals.json`));assert.equal(read(`research/${run}-step3-auditor-certifications.json`).items.length,1);
const archive=`${base}/before-root-dispositions`;fs.mkdirSync(archive);const changes=[],documents=new Map(),rows=[];
const aliasSha=sha(fs.readFileSync(`research/${run}-step3-owner-same-defect-aliases.json`));
for(const issue of proposal.issues){
 const row=structuredClone(issue.proposed_ledger_row);row.at=new Date().toISOString();
 row.correction+=' Root now adopts this actual scientific disposition after guarded205+6 metadata integration,96 current individual boundary-case reviews and genuine native owner-creation/certification for the added surface lemma. Independent observations and all reading limits remain unchanged; no native gate pass is asserted.';
 row.evidence=row.evidence.map(x=>typeof x==='object'&&x.note?.includes('proposed root disposition')?{...x,note:'Root adopted final same-owner scientific repair evidence; original finding remains immutable.'}:x);
 rows.push(row);
 for(const patch of issue.decisions){const path=`research/${run}-alpha-batch-${patch.batch}-3a-decisions.json`;if(!documents.has(path))documents.set(path,{before:fs.readFileSync(path,'utf8'),after:read(path)});const d=documents.get(path).after,index=d.decisions.findIndex(x=>x.obligation===patch.obligation);assert.ok(index>=0);assert.deepEqual(d.decisions[index],patch.before);
  const next=structuredClone(patch.proposed_after);next.owner_resolution+=' Root has adopted the final scientific resolution and actual metadata integration; earlier proposed/pending wording is retained as history, with this acceptance now explicit. All source observations/routing and severity labels in frozen findings stay unchanged.';
  if(patch.obligation==='refuter:22:3'){next.same_defect_as='reader:22:1';next.same_defect_evidence='The two immutable observations identify the same unsupported A2 finite-integral calculus on the exact same source bytes, with distinct contract-carrier hashes. Root authenticated the archived source, actual original findings, current repaired source, exact excerpts and same-owner proof/consumer review through the guarded classification receipt; neither original carrier triple is rewritten.';next.same_defect_receipt_sha256=aliasSha;}
  assert.notEqual(next.verdict,'escalated');d.decisions[index]=next;changes.push({path,obligation:patch.obligation,before:patch.before,after:next});
 }
}
assert.equal(rows.length,14);assert.equal(changes.length,26);
const ledgerPath='research/defect-ledger.jsonl',ledger=fs.readFileSync(ledgerPath,'utf8'),ids=new Set(ledger.trim().split('\n').map(x=>JSON.parse(x).defect_id));for(const row of rows)assert.ok(!ids.has(row.defect_id));
for(const[path,d]of documents)fs.writeFileSync(`${archive}/${path.split('/').at(-1)}`,d.before,{flag:'wx'});fs.writeFileSync(`${archive}/defect-ledger.jsonl`,ledger,{flag:'wx'});
for(const[path,d]of documents)assert.equal(fs.readFileSync(path,'utf8'),d.before);assert.equal(fs.readFileSync(ledgerPath,'utf8'),ledger);
fs.appendFileSync(ledgerPath,(ledger.endsWith('\n')?'':'\n')+rows.map(x=>JSON.stringify(x)).join('\n')+'\n');
for(const[path,d]of documents)fs.writeFileSync(path,JSON.stringify(d.after,null,2)+'\n');
fs.writeFileSync(out,JSON.stringify({version:1,run,owner:'/root',at:new Date().toISOString(),operation:'Actual root adoption of14 append-only ledger dispositions and26 native decisions after completed scientific repairs. Frozen findings/reports/receipts/snapshots unchanged; no gate pass.',archive,ledger_preimage_sha256:sha(ledger),rows,changes,gates_attempted:0},null,2)+'\n',{flag:'wx'});console.log({ledger_rows:rows.length,decisions:changes.length,files:documents.size});
