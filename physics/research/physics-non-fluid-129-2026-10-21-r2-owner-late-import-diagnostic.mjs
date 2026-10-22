// Read-only actual native import-scope investigation after published source drift.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {markdownFiles,readItem} from '../tools/physics-support/physics-content.mjs';
import {readOriginalItemIdentity} from '../tools/physics-support/original-item-index.mjs';
import {frontierMathematicsImportScope} from '../tools/physics-support/frontier-import-scope.mjs';
import {originalImportPath} from '../tools/physics-support/physics-imports.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',out=`research/${run}-owner-first-native-battery-findings/late-import-drift`,sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(out))throw Error('Preserve old diagnostic');mkdirSync(out);
const receipt=JSON.parse(readFileSync('research/math-imports.json')),items=markdownFiles(join(receipt.source_root,'items')).map(readOriginalItemIdentity),pages=markdownFiles(join(receipt.source_root,'library')).filter(f=>!f.split('/').at(-1).startsWith('_')).map(f=>({...readItem(f),path:relative(receipt.source_root,f)}));
const scope=frontierMathematicsImportScope(root,run,{planning:true,receipt,originals:{items,pages}}),changes=[];
for(const pin of receipt.files){const local=sha(readFileSync(pin.path));if(local!==pin.sha256)throw Error('Local snapshot changed '+pin.path);if(!scope.paths.has(pin.path)||pin.path.endsWith('/_category.md'))continue;
 const source=originalImportPath(receipt,pin),bytes=readFileSync(source),current=sha(bytes);if(current===pin.sha256)continue;
 const before=`${out}/before/${pin.path}`,after=`${out}/current-original/${pin.path}`;mkdirSync(before.slice(0,before.lastIndexOf('/')),{recursive:true});mkdirSync(after.slice(0,after.lastIndexOf('/')),{recursive:true});writeFileSync(before,readFileSync(pin.path));writeFileSync(after,bytes);
 changes.push({path:pin.path,source,pin_sha256:pin.sha256,original_sha256:current,before,after,status:readItem(source).status});
}
const report={at:new Date().toISOString(),run,all_local_pins_verified:receipt.files.length,actual_native_required_paths:scope.paths.size,changes,original_mathematics_modified:false};writeFileSync(`${out}/diagnosis.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({local_pins:receipt.files.length,native_required_paths:scope.paths.size,changed_required_originals:changes.map(c=>c.path)}));
