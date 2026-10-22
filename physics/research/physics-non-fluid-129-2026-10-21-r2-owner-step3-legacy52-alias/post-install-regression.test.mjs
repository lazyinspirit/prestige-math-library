import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync,writeFileSync,mkdtempSync,mkdirSync,cpSync} from 'node:fs';import{join}from'node:path';import{createHash}from'node:crypto';import{fileURLToPath}from'node:url';
import{ownerReviewedFindingAlias as candidate}from'../../tools/physics-support/step3-owner-finding-alias.mjs';import{ownerReviewedFindingAlias as original}from'./original-step3-owner-finding-alias.mjs';
const base=fileURLToPath(new URL('.',import.meta.url)),data=JSON.parse(readFileSync(join(base,'invocation.json'))),run=data.run;
const sha=x=>createHash('sha256').update(x).digest('hex'),canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x,h=x=>sha(JSON.stringify(canon(x))),aliasPath=`research/${run}-step3-owner-same-defect-aliases.json`;
function fixture(){const root=mkdtempSync(join(base,'test-fixture-'));cpSync(join(base,'fixture'),root,{recursive:true});return{root,args:structuredClone(data),receipt:JSON.parse(readFileSync(join(root,aliasPath)))};}
function seal(f){writeFileSync(join(f.root,aliasPath),JSON.stringify(f.receipt,null,2)+'\n');f.args.decision.same_defect_receipt_sha256=sha(readFileSync(join(f.root,aliasPath)));}
function edit(f,g,fn){const p=join(f.root,g.path),x=JSON.parse(readFileSync(p));fn(x);writeFileSync(p,JSON.stringify(x,null,2)+'\n');g.sha256=sha(readFileSync(p));f.receipt.inputs[g.path]=g.sha256;}
function check(f,tool=candidate){return tool(f.root,run,f.args.group,f.args.prior,f.args.decision,f.args.target,h);}
test('authentic v2 same source with two genuinely bound carrier triples: legacy rejects, candidate accepts',()=>{let f=fixture();assert.equal(check(f,original),false);assert.equal(check(f),true)});
const negatives={
 'wrong outer receipt SHA':f=>{f.args.decision.same_defect_receipt_sha256='0'.repeat(64)},
 'different public source raw archive even with resealed guards':f=>{let e=f.receipt.aliases[0],p=join(f.root,e.observed_raw_archive.path);writeFileSync(p,readFileSync(p,'utf8')+'\nchanged');e.observed_raw_archive.sha256=sha(readFileSync(p));f.receipt.inputs[e.observed_raw_archive.path]=e.observed_raw_archive.sha256;seal(f)},
 'synthetic observed_source on legacy reader':f=>{f.args.prior.target.observed_source={snapshot:'pre',item_sha256:'0'.repeat(64)}},
 'synthetic observed_source on legacy refuter':f=>{f.args.target.observed_source={snapshot:'post',item_sha256:'0'.repeat(64)}},
 'version3 scope despite resealed guard':f=>{edit(f,f.receipt.aliases[0].frozen_scope_guard,x=>{x.version=3});seal(f)},
 'forged reader snapshot fingerprint with resealed guard':f=>{edit(f,f.receipt.aliases[0].observed_snapshot_guards[0],x=>{x.hashes[f.receipt.aliases[0].subject].contract_sha256='0'.repeat(64)});seal(f)},
 'changed alias contract with resealed guard':f=>{edit(f,f.receipt.aliases[0].alias_contract_archive,x=>{x.contracts[f.receipt.aliases[0].subject].citations[0].quote+=' forged';});seal(f)},
 'changed observed manifest with resealed guard':f=>{edit(f,f.receipt.aliases[0].observed_manifest_archive,x=>{x.find(p=>p.items.some(i=>i.id===f.receipt.aliases[0].subject)).items.find(i=>i.id===f.receipt.aliases[0].subject).title+=' forged';});seal(f)},
 'authorization did not bind that original source':f=>{edit(f,f.receipt.aliases[0].native_continuation_authorization,x=>{x.continuations[0].subjects.find(i=>i.id===f.receipt.aliases[0].subject).sha256='0'.repeat(64)});seal(f)},
 'scope original finding changed despite guard reseal':f=>{edit(f,f.receipt.aliases[0].frozen_scope_guard,x=>{x.reader_findings.find(i=>i.obligation==='reader:52:4').evidence+=' forged';});seal(f)},
 'original reader file changed even if local guard resealed':f=>{let g=f.receipt.aliases[0].frozen_file_guards[0];edit(f,g,x=>{x.coverage_note+=' forged';});seal(f)},
 'mismatched severity':f=>{f.args.target.severity='nonfatal'},
 'mismatched location':f=>{f.args.target.location+=' different'},
 'different canonical alias finding':f=>{f.args.target.observed_sha256='f'.repeat(64)},
 'same fingerprint cannot use distinct carrier bypass':f=>{f.args.target.observed_sha256=f.args.prior.target.observed_sha256},
 'current source changed':f=>{let p=join(f.root,f.receipt.aliases[0].current_source.path);writeFileSync(p,readFileSync(p,'utf8')+'\nchanged')},
 'unreviewed owner classification':f=>{edit(f,f.receipt.aliases[0].scientific_owner_receipt,x=>{x.classification_approved=false});seal(f)},
 'missing actual current repair excerpts':f=>{f.receipt.aliases[0].reviewed_source_excerpts=['x'.repeat(90),'y'.repeat(90)];seal(f)},
 'cross item alias':f=>{f.args.target.id='def-wrong-subject'}
};
for(const[name,mutate]of Object.entries(negatives))test('reject '+name,()=>{const f=fixture();mutate(f);assert.equal(check(f),false)});
test('candidate leaves all preexisting kinds byte-for-byte in place apart from new-kind dispatch',()=>{const a=readFileSync(join(base,'original-step3-owner-finding-alias.mjs'),'utf8'),b=readFileSync(join(base,'step3-owner-finding-alias.candidate.mjs'),'utf8');assert(b.includes(a.slice(a.indexOf('    const locationAlias ='),a.indexOf('// Page findings'))));});
