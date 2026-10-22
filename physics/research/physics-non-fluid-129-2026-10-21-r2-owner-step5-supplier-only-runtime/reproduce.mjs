import {readFileSync,writeFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {supplierResolvedNonfatal} from './candidate/tools/physics-support/step5-supplier-resolution.mjs';
import {readLibraryItems} from './candidate/tools/physics-support/step5-rounds.mjs';
import {itemHashGuard} from './candidate/tools/physics-support/item-hash.mjs';
import {reviewMatchesCurrent,validateReports as candidateValidate} from './candidate/tools/physics-support/step5-workflow.mjs';
const here=dirname(fileURLToPath(import.meta.url)),repo=resolve(here,'../../..');
const {validateReports}=await import(repo+'/tools/physics-support/step5-workflow.mjs');
const root=resolve(repo,'physics'),run='physics-non-fluid-129-2026-10-21-r2';
const read=path=>JSON.parse(readFileSync(path));
const pack=read(`${root}/research/${run}-step5-v2/initial-1.json`);
const reports=pack.units.map(u=>read(`${root}/research/${run}-step5-v2/step5-v2-initial-r1-u${u}.json`));
const items=readLibraryItems(root),now=Object.fromEntries(items.map(row=>[row.id,itemHashGuard(readFileSync(`${root}/items/${row.id}.md`,'utf8'))]));
const report=reports.find(x=>x.unit==='29'),decision=report.decisions.find(x=>x.id==='lem-gr-fx-null-screen-index-form');
const result={run,at:new Date().toISOString(),scope:'Read-only helper and validateReports calls with all actual original reports. No native collection, gate, certification, source review or source edits performed.',
  currentConsumerReview:reviewMatchesCurrent(items,now,report.reviews.find(x=>x.id===decision.id)),
  currentSupplierReview:reviewMatchesCurrent(items,now,report.reviews[0]),
  allowed:supplierResolvedNonfatal({root,pack,reports,now,decision,matchesCurrent:reviewMatchesCurrent}),
  productionErrors:validateReports(pack,reports,now,{root}).errors,
  candidateErrors:candidateValidate(pack,reports,now,{root}).errors};
writeFileSync(here+'/reproduction.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
