// Exact inactive maintenance, after root read the three editorial upstream diffs.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync,chmodSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {originalImportPath,verifyMathematicsImports} from '../tools/physics-support/physics-imports.mjs';
import {sourceSectionText,splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-first-native-battery-findings/late-import-drift`,out=`${base}/application`,sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(readFileSync(p));
if(!process.argv.includes('--outside-writers-drained')||existsSync(out))throw Error('Require actual global drain/unused archive');
function inactive(){if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native sources/controller active');}inactive();
const diagnosis=read(`${base}/diagnosis.json`),receiptPath='research/math-imports.json',receiptBefore=readFileSync(receiptPath),receipt=JSON.parse(receiptBefore);
const expected=['items/def-invertible-matrix-and-general-linear-group.md','items/thm-riesz-fischer-completeness-of-l-p.md','items/def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators.md'];
if(diagnosis.changes.length!==3||expected.some(p=>!diagnosis.changes.some(e=>e.path===p)))throw Error('Unreviewed drift scope');
const prepared=diagnosis.changes.map(e=>{const pin=receipt.files.find(p=>p.path===e.path),before=readFileSync(e.path),after=readFileSync(e.source);if(pin.sha256!==e.pin_sha256||sha(before)!==e.pin_sha256||sha(after)!==e.original_sha256||readItem(e.source).status!=='published')throw Error('Changed import/original '+e.path);return{...e,before,after};});
const byId=new Map(prepared.map(e=>[e.path.slice(6,-3),e])),contracts=[];
const normalize=s=>s.replace(/\s+/g,' ').trim();
function mirror(value,key='',supplier=null,section=null,changes=[]){
 if(Array.isArray(value))return value.map(v=>mirror(v,key,supplier,section,changes));
 if(value&&typeof value==='object'){const own=value.source??value.supplier??supplier,sec=value.source_section??section;return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,mirror(v,k,own,sec,changes)]));}
 if(typeof value!=='string'||!['quote','exact_statement'].includes(key)||!byId.has(supplier))return value;
 const entry=byId.get(supplier),before=sourceSectionText(splitFrontmatter(entry.before.toString()).body,section),after=sourceSectionText(splitFrontmatter(entry.after.toString()).body,section);
 if(!before||!after||!normalize(before).includes(normalize(value)))throw Error('Previously invalid exact quotation '+supplier);
 if(normalize(after).includes(normalize(value)))return value;
 // Root verified mathematical conditions/conclusions unchanged; old prose link
 // expansions and a non-proof diagram changed. Preserve complete new context.
 changes.push({supplier,section,key,old_quote_sha256:sha(value),new_quote_sha256:sha(after.trim())});return after.trim();
}
for(const name of readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.proof-contracts\\.json$`).test(n))){const path=`research/${name}`,before=readFileSync(path),changes=[],doc=mirror(JSON.parse(before),'',null,null,changes);if(changes.length)contracts.push({path,before,after:Buffer.from(JSON.stringify(doc,null,2)+'\n'),changes});}
mkdirSync(`${out}/before`,{recursive:true});
function preserve(path,bytes){const dest=`${out}/before/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});writeFileSync(dest,bytes??readFileSync(path));}
preserve(receiptPath,receiptBefore);preserve('research/plan-spec.json');
for(const name of ['state.json','owner-gate-request.json','owner-gate-receipt.json']){const p=`.physics-autopilot/${run}/${name}`;if(existsSync(p))preserve(p);}
for(const name of readdirSync('research').filter(n=>n.startsWith(`${run}-step1-`)&&n.endsWith('.json')))preserve(`research/${name}`);
for(const e of prepared)preserve(e.path,e.before);for(const e of contracts)preserve(e.path,e.before);
inactive();if(!readFileSync(receiptPath).equals(receiptBefore))throw Error('Receipt changed');
for(const e of prepared)if(sha(readFileSync(e.source))!==e.original_sha256||sha(readFileSync(e.path))!==e.pin_sha256)throw Error('Original changed before copy');
for(const e of prepared){chmodSync(e.path,0o644);writeFileSync(e.path,e.after);chmodSync(e.path,0o444);receipt.files.find(p=>p.path===e.path).sha256=e.original_sha256;}
for(const e of contracts){if(!readFileSync(e.path).equals(e.before))throw Error('Quote writer overlap');writeFileSync(e.path,e.after);}
const temp=`${receiptPath}.${process.pid}.tmp`;writeFileSync(temp,JSON.stringify(receipt,null,2)+'\n');renameSync(temp,receiptPath);
const report={at:new Date().toISOString(),run,operation:'inactive exact required-original snapshot maintenance',changes:prepared.map(({before,after,...e})=>e),contract_quotes:contracts.map(e=>({path:e.path,before_sha256:sha(e.before),after_sha256:sha(e.after),changes:e.changes})),original_mathematics_modified:false,source_interpretation:{GL:'Only duplicated prose removed; two-sided inverse, unit group and n=0 unchanged.',RieszFischer:'Only prose link-title expansions shortened; countable-choice assumption, arbitrary measure, full1<=p<=infinity completeness and a.e.-subsequence conclusion unchanged. Entire actual proof is byte-identical.',TL:'Only explanatory noncrossing cup-cap illustration corrected; exact recurrence, unit-denominator scope and all algebraic assertions unchanged. No argument relies on the diagram.'},actual_reading:'Root read all three complete current local interfaces and full Riesz proof, complete diffs, and the complete three directly citing current frontier carriers: matrix-harmonic Definition and TL boundary Definition/projector-entropy proof. No external full-text reading or new supplier audit is asserted.',frontier_item_bodies_changed:false,verification:{pending:true},readiness:false,full_native_gate:false};
writeFileSync(`${out}/receipt.json`,JSON.stringify(report,null,2)+'\n');
try{report.verification={passed:true,pins:verifyMathematicsImports(root,{run,planning:true}),required_originals_checked:true};}catch(e){report.verification={passed:false,error:e.message};writeFileSync(`${out}/receipt.json`,JSON.stringify(report,null,2)+'\n');throw e;}
inactive();writeFileSync(`${out}/receipt.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({exact_reimports:prepared.length,quote_contract_files:contracts.length,verification:report.verification}));
