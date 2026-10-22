import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {frontierMathematicsImportScope} from '../tools/physics-support/frontier-import-scope.mjs';
import {markdownFiles,readItem} from '../tools/physics-support/physics-content.mjs';
import {readOriginalItemIdentity} from '../tools/physics-support/original-item-index.mjs';
import {originalImportPath} from '../tools/physics-support/physics-imports.mjs';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision} from '../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',dir=join(root,'.physics-autopilot',run);
const state=JSON.parse(readFileSync(join(dir,'state.json')));
if(existsSync(join(dir,'controller.lock'))||Object.values(state.dispatches).some(d=>!d.endedAt))throw Error('Writers not drained');
const hash=b=>createHash('sha256').update(b).digest('hex');
const receipt=JSON.parse(readFileSync('research/math-imports.json'));
const originals={items:markdownFiles(join(receipt.source_root,'items')).map(readOriginalItemIdentity),pages:markdownFiles(join(receipt.source_root,'library')).filter(f=>!f.split('/').at(-1).startsWith('_')).map(f=>({...readItem(f),path:relative(receipt.source_root,f)}))};
const scope=frontierMathematicsImportScope(root,run,{planning:true,receipt,originals});
const changes=[];
for(const pin of receipt.files){if(hash(readFileSync(pin.path))!==pin.sha256)throw Error('Local pin altered '+pin.path);if(scope.paths.has(pin.path)&&!pin.path.endsWith('/_category.md')){const current=hash(readFileSync(originalImportPath(receipt,pin)));if(current!==pin.sha256)changes.push({...pin,current_sha256:current});}}
if(process.argv.includes('--imports-only')){
 const result={run,at:new Date().toISOString(),inactive:true,scope_paths:scope.paths.size,changes,readiness_sweep_not_attempted:true};
 writeFileSync(`research/${run}-owner-step3-drained-import-scan.json`,JSON.stringify(result,null,2)+'\n');
 console.log(JSON.stringify({scope_paths:scope.paths.size,changes,readiness_sweep_not_attempted:true}));
 process.exit(0);
}
const s=loadStep1Record(root,run),items=[];
for(const [id] of s.items){const row=step1Decision(s,id);items.push({id,decision:row.row?.decision,closed:row.closed,reason:row.reason,affected:changes.filter(c=>itemInputPaths(s,id,row.row?.dependencies??[]).includes(join(root,c.path))).map(c=>c.path)});}
const out={run,at:new Date().toISOString(),inactive:true,scope_paths:scope.paths.size,changes,items};
writeFileSync(`research/${run}-owner-step3-drained-import-scan.json`,JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify({changes,items:items.length,affected:items.filter(i=>i.affected.length).map(i=>i.id),not_current:items.filter(i=>!i.closed).length}));
