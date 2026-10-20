import assert from 'node:assert/strict';
import fs from 'node:fs';import {createHash} from 'node:crypto';import {execFileSync} from 'node:child_process';import {mkdtempSync} from 'node:fs';import {tmpdir} from 'node:os';import {join} from 'node:path';
import * as current from '../../tools/step6-ledger-fragment.mjs';
import * as next from '../machine-learning-all-101-2026-10-19-owner-ledger-fragment-boundary-fix/your-proposal/tools/step6-ledger-fragment.mjs';
const sha=x=>createHash('sha256').update(x).digest('hex'),run='review-demo',ids=new Set(['thm-owned']),mode={version:2,kind:'published-local-repair-marker-additions'};
const marker=run+'-thm-owned',inner='\n\nRun '+run+' thm-owned '+ 'a'.repeat(64)+'\n\nRepeated paragraph.\n\nRepeated paragraph.\n\n',block=`<!-- local-published-repair:${marker}:begin -->${inner}<!-- local-published-repair:${marker}:end -->`;
const spec={...mode,run,path:'research/published-consumer-supplier-ledger.md',authorized_by:'owner',authorization:'Review only authenticated exact block addition fixture.',base_owned_records:[],target_owned_records:[block],evidence:[],record_receipts:[]};
let v1=0,foreign=0,compositions=0,rejections=0;
// Independently compare all real record texts/spans and V1 behavior over a matrix.
const leads=['','\ufeff','# Header\n\n','Unicode Ω😀\n\n'],rows=['| x |','| '+run+' thm-owned |','| α😀 |\n| β |','| x |\r\n| y |'],ends=['','\n','\n\n','\r\n','\r\n\r\n','\n \t','\r','\n\t\n'];
for(const lead of leads)for(const row of rows)for(const end of ends){
 const base=lead+row+end;
 assert.deepEqual(next.fragmentRecords(base,run,ids),current.fragmentRecords(base,run,ids));v1++;
 const old=current.fragmentRecords(base,run,ids,mode),fixed=next.fragmentRecords(base,run,ids,mode);
 assert.deepEqual(fixed,old.filter(r=>r.start!==r.end||r.end!==base.length));
 assert.ok(fixed.every(r=>!r.owned));foreign++;
 try{const result=next.composeFragment(base,spec,run,ids);assert.ok(result.text.startsWith(base));let inverse=result.text;for(const i of [...result.insertions].reverse())inverse=inverse.slice(0,i.at)+inverse.slice(i.at+i.text.length);assert.deepEqual(Buffer.from(inverse),Buffer.from(base));assert.deepEqual(next.fragmentRecords(result.text,run,ids,mode).filter(r=>!r.owned).map(r=>next.recordSignature(r.text)),fixed.map(r=>next.recordSignature(r.text)));assert.equal(next.composeFragment(result.text,spec,run,ids).already_integrated,true);compositions++;}
 catch(e){assert.match(e.message,/foreign residual/);rejections++;}
}
// Authenticate one real fixture and ensure foreign context never becomes owned.
const root=mkdtempSync(join(tmpdir(),'independent-ledger-review-'));
try{
 fs.mkdirSync(join(root,'research'));const path=`research/${run}-receipt.json`,receipt={version:1,kind:'recorded-local-published-repair',run,id:'thm-owned',recorded_at:'2026-10-20T00:00:00Z',content_sha256:'a'.repeat(64),ledger_marker:marker,ledger_sha256:sha(inner)};const raw=JSON.stringify(receipt);fs.writeFileSync(join(root,path),raw);
 const authorized={...spec,evidence:[{path,sha256:sha(raw)}],record_receipts:[{marker,path,sha256:sha(raw)}]},working='| '+run+' thm-owned foreign table |\n\n'+block;
 next.validateFragment(authorized,run,ids,working,{root});
 assert.equal(next.fragmentRecords(working,run,ids,mode).filter(r=>r.owned).length,1);
 for(const changed of [working.replace('Repeated paragraph.','Changed paragraph.'),working.replace(':end -->',':end --!>'),working+'\n\n'+block,working.replace(':begin -->',':begin\r -->')])assert.throws(()=>next.validateFragment(authorized,run,ids,changed,{root}));
 assert.throws(()=>next.validateFragment(authorized,run,new Set(),working,{root}));
 fs.appendFileSync(join(root,path),' ');assert.throws(()=>next.validateFragment(authorized,run,ids,working,{root}),/changed or unbound/);
}finally{fs.rmSync(root,{recursive:true,force:true});}
// Independent direct append oracle against each real Git base, no helper execution.
const actualRun='machine-learning-all-101-2026-10-19',ledger='research/published-consumer-supplier-ledger.md',git=args=>execFileSync('git',args,{maxBuffer:40000000}),working=fs.readFileSync(ledger),workingHash=sha(working),head=git(['rev-parse','HEAD']).toString().trim(),index=git(['rev-parse',':'+ledger]).toString().trim(),blocks=next.fragmentRecords(working.toString('utf8'),actualRun,new Set(),mode).filter(r=>r.owned).map(r=>r.text),actualSpec={...spec,run:actualRun,target_owned_records:blocks};
assert.equal(blocks.length,265);const actual=[];
for(const [label,oid]of [['head',head+':'+ledger],['index',index]]){
 const base=git(label==='head'?['show',oid]:['cat-file','blob',oid]),s=base.toString('utf8'),separator=s.length&&!s.endsWith('\n\n')?(s.endsWith('\n')?'\n':'\n\n'):'';
 const expected=Buffer.concat([base,Buffer.from(separator+blocks.join('\n\n')+'\n\n')]),result=next.composeFragment(s,actualSpec,actualRun,new Set());
 assert.deepEqual(Buffer.from(result.text),expected);assert.equal(result.insertions.length,1);assert.equal(result.insertions[0].at,s.length);
 actual.push({label,base_sha256:sha(base),result_sha256:sha(expected),direct_append_byte_oracle:true});
}
assert.equal(sha(fs.readFileSync(ledger)),workingHash);assert.equal(git(['rev-parse','HEAD']).toString().trim(),head);assert.equal(git(['rev-parse',':'+ledger]).toString().trim(),index);
const state=JSON.parse(fs.readFileSync(`.autopilot/${actualRun}/state.json`));assert.equal(state.paused,true);assert.equal(state.stage,'5.8-gate');assert.equal(Object.values(state.dispatches).filter(d=>d.startedAt&&!d.endedAt).length,0);
console.log(JSON.stringify({v1_identical_cases:v1,real_foreign_record_identical_cases:foreign,exact_composition_cases:compositions,real_residual_rejection_cases:rejections,additional_authentication_tamper_cases:6,actual,native:{stage:state.stage,paused:state.paused,open_dispatches:0},working_sha256:workingHash},null,2));
