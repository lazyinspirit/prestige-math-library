// Read-only byte/content guard inspection. No review-context refresh or gate.
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/physics-support/item-hash.mjs';
import {statementHash} from '../../../tools/physics-support/step5-statement.mjs';
const ids=['def-fd-conserving-bgk','thm-fd-homogeneous-bgk-limit','prop-fd-bgk-entropy-rate','pthm-fd-bgk-equilibration','pthm-fd-ideal-gas-euler-interface','pthm-fd-boltzmann-entropy','prop-fd-viscous-entropy-passage','pthm-fd-newtonian-kinetic-decay','post-fd-bgk-relaxation','texp-fd-bgk-preparation'];
const rows=ids.map(id=>{const bytes=readFileSync('items/'+id+'.md'),text=bytes.toString('utf8');return {id,path:'items/'+id+'.md',raw_sha256:createHash('sha256').update(bytes).digest('hex'),content_sha256:itemHashGuard(text),statement_sha256:statementHash(text),scientific_audit:false};});
process.stdout.write(JSON.stringify(rows,null,2)+'\n');
