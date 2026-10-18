import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,copyFileSync,rmSync,existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join,dirname,resolve} from 'node:path';
import {spawn} from 'node:child_process';
const tools=dirname(new URL(import.meta.url).pathname);
function fixture(t,entry){
 const root=mkdtempSync(join(tmpdir(),'large-gate-json-'));t.after(()=>rmSync(root,{recursive:true,force:true}));for(const d of ['tools','items','library','research'])mkdirSync(join(root,d));
 const copied=new Set(),copy=name=>{if(copied.has(name))return;copied.add(name);const src=join(tools,name),target=join(root,'tools',name);mkdirSync(dirname(target),{recursive:true});copyFileSync(src,target);for(const m of readFileSync(src,'utf8').matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)){const child=resolve(dirname(src),m[1]);if(existsSync(child))copy(child.slice(tools.length+1));}};copy(entry);return root;
}
// Delay consumption until the child encounters backpressure. This is the real
// pipe behavior behind truncated native JSON, not a text-format snapshot test.
async function piped(root,entry,args=[]){
 return await new Promise((resolve,reject)=>{const child=spawn(process.execPath,[join(root,'tools',entry),...args],{cwd:root,stdio:['ignore','pipe','pipe']});let stdout='',stderr='';child.on('error',reject);child.stderr.on('data',b=>stderr+=b);setTimeout(()=>child.stdout.on('data',b=>stdout+=b),60);child.on('close',code=>resolve({code,stdout,stderr}));});
}
const source=(id,deps=[])=>`---\nid: ${id}\nkind: lemma\nstatus: draft\ndeps: ${JSON.stringify(deps)}\n---\n\n## Statement\n\nA complete synthetic fixture assertion.\n`;
test('large depcheck success and error JSON both drain fully through a backpressured native-style pipe',async t=>{
 const root=fixture(t,'depcheck.mjs'),ids=Array.from({length:3000},(_,i)=>`lem-json-${i}-`+'long-name-'.repeat(15)+'end');
 for(const id of ids)writeFileSync(join(root,'items',id+'.md'),source(id));writeFileSync(join(root,'scope.json'),JSON.stringify(ids));
 for(const failed of [false,true]){if(failed)writeFileSync(join(root,'items',ids.at(-1)+'.md'),source(ids.at(-1),['lem-missing-prerequisite']));const r=await piped(root,'depcheck.mjs',['--json','--items-file','scope.json']);assert.equal(r.stderr,'');assert.equal(r.code,failed?1:0);assert.ok(r.stdout.length>400000);const doc=JSON.parse(r.stdout);assert.equal(doc.summary.item_checks.length,ids.length);assert.equal(doc.summary.item_checks.includes(ids.at(-1)),true);assert.equal(doc.summary.errors,failed?1:0);if(failed)assert.equal(doc.errors[0].code,'dep-unresolved');}
});
test('large extcheck failure JSON retains every forbidden external dependency',async t=>{
 const root=fixture(t,'extcheck.mjs'),ids=Array.from({length:5000},(_,i)=>`lem-external-${i}-`+'long-name-'.repeat(8)+'end');writeFileSync(join(root,'items','lem-consumer.md'),source('lem-consumer').replace('deps: []',`deps: []\nexternal_refs: ${JSON.stringify(ids)}`));const r=await piped(root,'extcheck.mjs',['--json']);assert.equal(r.stderr,'');assert.equal(r.code,1);assert.ok(r.stdout.length>500000);const doc=JSON.parse(r.stdout);assert.equal(doc.errors.filter(r=>r.code==='external-dangling').length,ids.length);assert.ok(doc.errors.some(r=>r.msg.includes(ids.at(-1))));
});
test('large citation advisory and strict-error JSON keep every exact diagnostic',async t=>{
 const root=fixture(t,'citation-fidelity.mjs');for(const id of ['lem-consumer','lem-supplier'])writeFileSync(join(root,'items',id+'.md'),source(id));const citations=Array.from({length:6000},(_,i)=>({fact:'F'+i,source:'lem-supplier',source_section:'Statement',quote:`Missing exact fixture excerpt ${i} `+'detailed '.repeat(15)}));writeFileSync(join(root,'contracts.json'),JSON.stringify({contracts:{'lem-consumer':{citations}}}));
 for(const strict of [false,true]){const r=await piped(root,'citation-fidelity.mjs',['contracts.json','--json',...(strict?['--fail-on-missing-quote']:[])]);assert.equal(r.stderr,'');assert.equal(r.code,strict?1:0);assert.ok(r.stdout.length>1000000);const doc=JSON.parse(r.stdout);assert.equal(doc.quote_not_found.length,citations.length);assert.equal(doc.quote_not_found.at(-1).fact,'F5999');}
});
test('large finite-smoke failure JSON keeps all errors without invoking any mathematical checker',async t=>{
 const root=fixture(t,'finite-smoke.mjs'),finite_smoke=Array.from({length:8000},(_,i)=>({check:'deliberately-unknown-'+i+'-'+'detail-'.repeat(10)}));writeFileSync(join(root,'contracts.json'),JSON.stringify({version:1,scope:['lem-consumer'],contracts:{'lem-consumer':{finite_smoke}}}));const r=await piped(root,'finite-smoke.mjs',['contracts.json','--json']);assert.equal(r.stderr,'');assert.equal(r.code,1);assert.ok(r.stdout.length>1000000);const doc=JSON.parse(r.stdout);assert.equal(doc.errors.length,finite_smoke.length);assert.ok(doc.errors.at(-1).message.includes('7999'));assert.deepEqual(doc.outcomes,[]);
});
for(const mode of ['unreadable','bad-shape','empty-success'])test(`finite-smoke flush change preserves ${mode} control flow and exit predicate`,async t=>{
 const root=fixture(t,'finite-smoke.mjs');writeFileSync(join(root,'contracts.json'),mode==='unreadable'?'not JSON':JSON.stringify(mode==='bad-shape'?null:{version:1,scope:[],contracts:{}}));const r=await piped(root,'finite-smoke.mjs',['contracts.json','--json']);assert.equal(r.stderr,'');assert.equal(r.code,mode==='empty-success'?0:1);const doc=JSON.parse(r.stdout);assert.equal(doc.errors.length,mode==='empty-success'?0:1);if(mode!=='empty-success')assert.equal(doc.errors[0].code,mode==='unreadable'?'contract-read':'contract-shape');
});
