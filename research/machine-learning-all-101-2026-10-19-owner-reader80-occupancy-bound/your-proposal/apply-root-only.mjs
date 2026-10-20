// Root only. Never run as delegated repairer. No native ledger, state, hash or gate operations.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const base=path.dirname(new URL(import.meta.url).pathname),read=n=>JSON.parse(fs.readFileSync(path.join(base,n)));
const args=process.argv.slice(2);if(args.length!==1||!['--inspect','--apply-reviewed'].includes(args[0]))throw Error('Root review required: --inspect or --apply-reviewed');
const sourceOps=read('source-operations.json'),scalarOps=read('scalar-contract-operations.json'),guards=read('source-context-guards.json');
const get=(x,p)=>p.reduce((a,k)=>a[k],x);
function checkContext(){for(const g of guards)assert(fs.readFileSync(g.target).equals(fs.readFileSync(g.before_path)),`Source/page drift: ${g.target}`);for(const g of read('manifest-context-guards.json'))assert.deepStrictEqual(get(JSON.parse(fs.readFileSync(g.target)),g.path),g.before);}
checkContext();const sourceTarget=sourceOps[0].target,contractTarget=scalarOps[0].target;
const sourceRaw=fs.readFileSync(sourceTarget),contractRaw=fs.readFileSync(contractTarget);let candidate=sourceRaw.toString();
for(const o of sourceOps){assert.equal(o.target,sourceTarget);assert.equal(candidate.split(o.before).length-1,o.occurrences);candidate=candidate.replace(o.before,()=>o.after);}
assert.equal(candidate,fs.readFileSync(path.join(base,'proposed',sourceTarget),'utf8'));
const data=JSON.parse(contractRaw);for(const o of scalarOps){assert.equal(o.target,contractTarget);assert.deepStrictEqual(get(data,o.path),o.before);get(data,o.path.slice(0,-1))[o.path.at(-1)]=o.after;}
let nextContract=contractRaw.toString();
const groups=new Map();for(const o of scalarOps){const token=JSON.stringify(o.before),value=JSON.stringify(o.after);if(!groups.has(token))groups.set(token,{value,count:0});assert.equal(groups.get(token).value,value);groups.get(token).count++;}
for(const [token,g]of groups){assert.equal(nextContract.split(token).length-1,g.count,'Quotation token count differs from owned scalar operations');nextContract=nextContract.split(token).join(g.value);}
assert.deepStrictEqual(JSON.parse(nextContract),data);
if(args[0]==='--inspect'){console.log('All 21 context source/page guards, lemma manifest-row guard, two unique source edits and three scalar quote CAS pass. No writes.');process.exit(0);}
// Prepare both successors, then recheck current raw bytes and all context before serialized renames.
const tmpSource=`${sourceTarget}.occupancy-root-${process.pid}.tmp`,tmpContract=`${contractTarget}.occupancy-root-${process.pid}.tmp`;
try{fs.writeFileSync(tmpSource,candidate,{flag:'wx',mode:fs.statSync(sourceTarget).mode});fs.writeFileSync(tmpContract,nextContract,{flag:'wx',mode:fs.statSync(contractTarget).mode});checkContext();assert(fs.readFileSync(sourceTarget).equals(sourceRaw));assert(fs.readFileSync(contractTarget).equals(contractRaw));fs.renameSync(tmpSource,sourceTarget);fs.renameSync(tmpContract,contractTarget);}finally{for(const p of [tmpSource,tmpContract])if(fs.existsSync(p))fs.unlinkSync(p);}
console.log('Root applied only the reviewed quantifier/Given clarification and three Statement quote mirrors. Native history, metadata stamps, decisions and state remain unchanged; root owns current recertification.');
