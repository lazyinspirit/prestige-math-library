// Read-only schema/source diagnostic, without any special repair authority.
import fs from 'node:fs';
import {itemHashGuard} from '../tools/physics-support/item-hash.mjs';
import {validateReports} from '../tools/physics-support/step5-workflow.mjs';
import {readLibraryItems} from '../tools/physics-support/step5-rounds.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-step5-v2`;
const pack=JSON.parse(fs.readFileSync(dir+'/initial-1.json'));
const reports=pack.units.map(unit=>JSON.parse(fs.readFileSync(`${dir}/step5-v2-initial-r1-u${unit}.json`)));
const items=readLibraryItems(process.cwd());
const now=Object.fromEntries(items.map(item=>[item.id,itemHashGuard(fs.readFileSync(`items/${item.id}.md`,'utf8'))]));
const result=validateReports(pack,reports,now);
const output={run,at:new Date().toISOString(),kind:'read-only-unprivileged-report-shape-diagnostic',current_source_items:items.length,
  notes:'No published/explanatory repair guards supplied; their special-route errors are expected. No gate, collection, native review or acceptance claimed.',errors:result.errors};
fs.writeFileSync(`research/${run}-owner-step5-completed-report-shape-diagnostic.json`,JSON.stringify(output,null,2)+'\n');
console.log(JSON.stringify(output));
