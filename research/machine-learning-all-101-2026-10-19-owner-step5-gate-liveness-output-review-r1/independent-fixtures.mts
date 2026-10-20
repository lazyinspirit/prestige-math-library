import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,copyFileSync,readdirSync,statSync,renameSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {runGate} from '/home/lazyinspirit/Projects/prestige-math-library/tools/autopilot/src/gates.mts';
import {frontierGateBattery,projectFrontierGate} from '/home/lazyinspirit/Projects/prestige-math-library/tools/step5-frontier-gate.mjs';
import {freezeFrontier} from '/home/lazyinspirit/Projects/prestige-math-library/tools/step5-rounds.mjs';
const repo='/home/lazyinspirit/Projects/prestige-math-library';
const report=join(repo,'research/machine-learning-all-101-2026-10-19-owner-step5-gate-liveness-output-review-r1');
const proposal=join(repo,'research/machine-learning-all-101-2026-10-19-owner-step5-gate-liveness-output-escalation/your-proposal');
const root=mkdtempSync(join(tmpdir(),'gate-output-review-r1-'));
const run='output-review';
const rows=[];
const hash=(x:any)=>createHash('sha256').update(x).digest('hex');
function fixture(name:string,producer:string){
 const cwd=join(root,name);mkdirSync(join(cwd,'tools'),{recursive:true});mkdirSync(join(cwd,'items'));mkdirSync(join(cwd,'research',run+'-step5-v2'),{recursive:true});
 // Real copies only. Recursively copy static relative JS imports required by the producer.
 const done=new Set();function cp(src:string,dst:string){if(done.has(src))return;done.add(src);mkdirSync(dirname(dst),{recursive:true});copyFileSync(src,dst);const text=readFileSync(src,'utf8');for(const m of text.matchAll(/(?:from\s+|import\s*)['"](\.\.?\/[^'"]+\.mjs)['"]/g))cp(join(dirname(src),m[1]),join(dirname(dst),m[1]));}
 cp(join(repo,'tools/defect-ledger.mjs'),join(cwd,'tools/defect-ledger.mjs'));
 copyFileSync(producer,join(cwd,'tools/defect-ledger.mjs'));
 for(const id of ['thm-in','thm-out'])writeFileSync(join(cwd,'items',id+'.md'),'---\nid: '+id+'\nstatus: draft\n---\n');
 writeFileSync(join(cwd,'research',run+'-step5-v2/frontier.json'),JSON.stringify(freezeFrontier({run,batches:[{id:'1',items:['thm-in']}]})));
 writeFileSync(join(cwd,'research/adj.jsonl'),'');
 return cwd;
}
function ledger(cwd:string,entries:any[]){const bytes=entries.map(r=>JSON.stringify(r)).join('\n')+'\n';writeFileSync(join(cwd,'research/defect-ledger.jsonl'),bytes);writeFileSync(join(cwd,'research/DEFECT-LEDGER.md'),'> GENERATED from `research/defect-ledger.jsonl` @ '+hash(bytes).slice(0,12)+' by reviewer\n');}
function row(id:string,subject='thm-in'){return {defect_id:id,run,at:'2026-10-21',class:'accuracy',subclass:'invalid-inference',severity:'nonfatal',location:'proof-step',subject,caught_at_stage:'owner',caught_by_role:'owner',disposition:'nonfatal-recorded'};}
async function gate(name:string,cwd:string,args:string[]=[],custom?:string){const g={id:'defect-ledger',argv:custom?[process.execPath,'-e',custom,'--']:[process.execPath,'tools/defect-ledger.mjs','check','--run',run,'--adjudications','research/adj.jsonl',...args],liveness:{pattern:'(\\d+) defect row\\(s\\) checked',min:1,unit:'defect rows'}};const [scoped]=frontierGateBattery({repo:cwd,run},[g]);const result=await runGate(scoped,{cwd});const exact=JSON.stringify(result);writeFileSync(join(report,name+'.json'),exact);rows.push({name,ok:result.ok,code:result.code,rawCode:result.rawCode,checked:result.checked,why:result.why,outputBytes:Buffer.byteLength(result.output??''),sha256:hash(exact)});return result;}
const baseline=fixture('baseline',join(proposal,'baseline/tools/defect-ledger.mjs'));
const fixed=fixture('fixed',join(proposal,'proposed/tools/defect-ledger.mjs'));
const outsiders=Array.from({length:900},(_,i)=>({...row('out-'+i,'thm-out'),subclass_note:'OUTSIDE-'+i+'-'+'x'.repeat(1800)}));
for(const cwd of [baseline,fixed])ledger(cwd,[row('in'),...outsiders]);
const old=await gate('baseline-large',baseline);assert.equal(old.code,0);assert.equal(old.ok,false);assert.match(old.why,/liveness unreadable/);
const good=await gate('fixed-large',fixed);assert.equal(good.ok,true);assert.equal(good.checked,1);const excluded=JSON.parse(good.output.split('\n').find((line:string)=>line.startsWith('Step 5 outside findings')).split(': ').slice(1).join(': '));assert.equal(excluded.length,900);assert.deepEqual(excluded.map((r:any)=>r.evidence),outsiders);assert.equal(good.rawOutput,good.output);assert.equal(good.rawCode,0);
ledger(fixed,outsiders);const zero=await gate('zero-with-outside',fixed);assert.equal(zero.ok,false);assert.match(zero.why,/vacuous/);
ledger(fixed,[row('in'),...outsiders]);
const badrows=Array.from({length:900},(_,i)=>({...row('bad-'+i),class:'INVALID-'+i+'-'+('y'.repeat(1800))}));ledger(fixed,[...badrows,...outsiders]);
const invalid=await gate('large-both-streams-errors',fixed);assert.equal(invalid.ok,false);assert.equal(invalid.code,1);assert.match(invalid.output,/bad-899: class/);assert.match(invalid.output,/900 defect row\(s\) checked/);assert.match(invalid.output,/900 error\(s\)/);
ledger(fixed,[row('in'),...outsiders]);writeFileSync(join(fixed,'research/adj.jsonl'),'{bad json\n');const malformed=await gate('malformed-adjudication',fixed);assert.equal(malformed.ok,false);assert.equal(malformed.code,1);assert.match(malformed.output,/unparseable adjudication JSON/);
writeFileSync(join(fixed,'research/adj.jsonl'),'');renameSync(join(fixed,'research/adj.jsonl'),join(fixed,'research/adj.saved'));const missing=await gate('missing-adjudication',fixed);assert.equal(missing.ok,false);assert.equal(missing.code,1);assert.match(missing.output,/no adjudication ledger/);renameSync(join(fixed,'research/adj.saved'),join(fixed,'research/adj.jsonl'));
for(const [name,script] of [
 ['missing-summary',`process.stdout.write('no summary\\n')`],
 ['malformed-summary',`process.stdout.write('defect-ledger: NaN defect row(s) checked\\n')`],
 ['nonzero-valid-summary',`process.stdout.write('defect-ledger: 1 defect row(s) checked\\n');process.exitCode=1`],
 ['runtime-stderr-nonzero',`process.stderr.write('runtime exception\\n');process.exitCode=2`],
] as const){const r=await gate(name,fixed,[],script);assert.equal(r.ok,false);if(name.includes('summary') && name !== 'nonzero-valid-summary')assert.match(r.why,/liveness unreadable/);else assert.equal(r.code,name==='nonzero-valid-summary'?1:2);}
// Genuine producer runtime errors remain nonzero, including complete >pipe-buffer stderr.
const huge='runtime '+('z'.repeat(1500000));const raw=await runGate({id:'raw-pipe',argv:[process.execPath,'-e',`process.stdout.write('a'.repeat(1500000));process.stderr.write('runtime '+'z'.repeat(1500000));process.exitCode=2`]},{});assert.equal(raw.ok,false);assert.equal(raw.code,2);assert.equal(raw.output.length,3000008);writeFileSync(join(report,'raw-two-streams.json'),JSON.stringify({ok:raw.ok,code:raw.code,bytes:raw.output.length,sha256:hash(raw.output)}));
const stderrScoped=await runGate({id:'proof-contract',argv:[process.execPath,'-e',`process.stdout.write(JSON.stringify({errors:[]}));process.stderr.write('runtime diagnostic');`],projectResult:(raw:any)=>projectFrontierGate('proof-contract',raw,freezeFrontier({run,batches:[{id:'1',items:['thm-in']}]}),['thm-in','thm-out'])},{});assert.equal(stderrScoped.ok,false);assert.match(stderrScoped.why,/stderr diagnostic remains blocking/);writeFileSync(join(report,'stderr-scope-guard.json'),JSON.stringify(stderrScoped));
writeFileSync(join(report,'summary.json'),JSON.stringify({root,rows,passed:true},null,2));console.log(JSON.stringify({root,tests:rows.length,passed:true,results:rows}));
