// Read-only production source inspection; writes only this private research directory.
import {readFileSync,writeFileSync,readdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,join,relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {markdownFiles,readItem} from '../../../../../tools/physics-support/physics-content.mjs';
import {readOriginalItemIdentity} from '../../../../../tools/physics-support/original-item-index.mjs';
import {frontierMathematicsImportScope} from '../../../../../tools/physics-support/frontier-import-scope.mjs';
import {originalMaintenance} from '../../../../../tools/physics-support/original-maintenance.mjs';
const dir=fileURLToPath(new URL('.',import.meta.url)),root=resolve(dir,'../../../..');
const run='advanced-qft-supersymmetry-build-2026-10-23',id='lem-borel-product-of-second-countable-spaces',path=`items/${id}.md`;
const sha=x=>createHash('sha256').update(x).digest('hex'),hash=p=>sha(readFileSync(resolve(root,p)));
const receipt=JSON.parse(readFileSync(join(root,'research/math-imports.json')));
const originals={items:markdownFiles(join(receipt.source_root,'items')).map(readOriginalItemIdentity),pages:markdownFiles(join(receipt.source_root,'library')).filter(p=>!p.split('/').at(-1).startsWith('_')).map(p=>({...readItem(p),path:relative(receipt.source_root,p)}))};
const scope=frontierMathematicsImportScope(root,run,{receipt,originals});
const started=new Date().toISOString();
const accepted=originalMaintenance(root,run,{receipt,scope});
const canonical=join(root,'research',`${run}-original-maintenance.json`);
// existsSync is virtualized in this private process; the parent records actual absence.
const result={version:1,run,kind:'borel-only-production-guard-diagnostic',native_gate:false,root_acceptance:false,status:'pending-root-adoption',started,ended:new Date().toISOString(),accepted_entries:[...accepted],scope:{owned_items:scope.owned.size,imported_items:scope.importedItems.size,import_paths:scope.paths.size},limitations:'Only the production originalMaintenance guard was evaluated with the pending receipt virtualized. No original-rendering guard was changed or bypassed in the full physics-check diagnostic; no canonical receipt was installed.'};
writeFileSync(join(dir,'borel-guard-diagnostic.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
