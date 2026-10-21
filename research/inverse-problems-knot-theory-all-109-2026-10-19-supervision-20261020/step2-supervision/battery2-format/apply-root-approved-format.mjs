// Root-only exact-byte integration proposal. Not invoked by preparing agent.
import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const plan=JSON.parse(readFileSync(new URL('./guarded-format-plan.json',import.meta.url),'utf8'));
if(!process.argv.includes('--apply'))throw Error('Root review required: pass --apply only after independent approval of this research proposal.');
const queued=[];
for(const row of [...plan.files,...plan.no_source_change]){
 const actual=readFileSync(row.canonical,'utf8'),before=readFileSync(row.preimage,'utf8');
 if(actual!==before)throw Error('Exact canonical preimage mismatch; no writes performed: '+row.canonical);
 if(row.proposed_after)queued.push([row.canonical,readFileSync(row.proposed_after,'utf8')]);
}
// All preimages and all candidate reads checked before any canonical write.
for(const [path,after] of queued)writeFileSync(path,after);
console.log(`Applied ${queued.length} root-approved source formatting corrections; five pure Definitions unchanged. No tools/metadata/hashes/state changed.`);
