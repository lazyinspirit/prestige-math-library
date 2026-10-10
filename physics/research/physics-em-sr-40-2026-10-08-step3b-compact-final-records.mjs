import {existsSync,readFileSync,writeFileSync,mkdirSync,copyFileSync,readdirSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {loadStep3,recordStep3,checkStep3} from '../../tools/physics-support/step3-decisions.mjs';
import {orderedItems} from '../../tools/physics-support/item-dependency-levels.mjs';
const root=resolve('physics'),run='physics-em-sr-40-2026-10-08',research=join(root,'research');
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const snapshot=loadStep3(root,run),order=orderedItems(snapshot.pages);
if(snapshot.items.size!==473||snapshot.pairs.size!==40||order.length!==473)throw Error('Unexpected frontier');
const prior=order.map(({id})=>{const owner=join(research,`${run}-step3b-owner-${id}.json`),review=join(research,`${run}-step3b-review-${id}.json`);const path=existsSync(owner)?owner:review;if(!existsSync(path))throw Error(`Missing original decision ${id}`);const row=read(path);if(row.run!==run||row.target!==id||row.phase!=='item'||!['accept','repaired'].includes(row.decision)||(row.owner!==true&&row.version===1&&row.confidence!==1))throw Error(`Unresolved original decision ${id}`);return {id,path,row};});
// Archive the actual existing records; do not manufacture historical decisions.
const archive=join(research,`${run}-step3b-compact-final-before`);mkdirSync(archive,{recursive:true});
for(const {path}of prior){const target=join(archive,path.split('/').at(-1));if(existsSync(target)&&sha(target)!==sha(path))throw Error('Archive already differs');if(!existsSync(target))copyFileSync(path,target);}
writeFileSync(join(archive,'index.json'),JSON.stringify({run,items:prior.map(x=>({id:x.id,path:x.path,sha256:sha(x.path)}))},null,2)+'\n');
// Inputs are frozen. This converts existing closed authoring outcomes and
// rebinds metadata; it performs no new mathematical or physical review.
const inputs=readdirSync(research).filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).map(n=>join(research,n));
const pins=inputs.map(path=>({path,sha256:sha(path)}));
let written=0;
for(const {id,row}of prior){const repaired=row.decision==='repaired';recordStep3(root,{run,phase:'item',item:id,owner:row.owner,decision:row.decision,defects:repaired?['metadata']:[],reason:repaired?'Synchronized final authoring metadata after the recorded repair.':'Retained completed authoring on the final metadata.'});written++;if(written%100===0)console.log(`Compact bookkeeping ${written}/473`);}
if(pins.some(x=>sha(x.path)!==x.sha256))throw Error('Manifest changed during bookkeeping');
const final=checkStep3(loadStep3(root,run),'final');if(!final.closed)throw Error(`Final bookkeeping has ${final.work.length} unresolved items/scopes`);
writeFileSync(join(research,`${run}-step3b-compact-final-check.json`),JSON.stringify({run,...final,bookkeepingOnly:true,rewritten:written,archive},null,2)+'\n');
console.log(JSON.stringify({run,rewritten:written,accepted:final.accepted,closed:final.closed}));
