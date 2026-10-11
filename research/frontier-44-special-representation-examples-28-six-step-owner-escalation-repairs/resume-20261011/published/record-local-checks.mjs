import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const {itemHashGuard}=await import(pathToFileURL(resolve('tools/item-hash.mjs')));
const run='frontier-44-special-representation-examples-28-six-step';
const d=`research/${run}-owner-escalation-repairs/resume-20261011/published`;
const corrections={'def-integer-power':'Corrected false zero-overlap explanation: natural exponents alone include zero; the negative clause requires n>=1. All operative clauses and values are unchanged.','thm-weighted-am-gm-rational':'Corrected global nonexistence and analytic-necessity prose to describe rational powers available at this point in the reading order; theorem and proof unchanged.'};
corrections['thm-etemadi-strong-law-for-pairwise-independent-iid-variables']='Corrected the copied F5 zero-overlap sentence to match the supplier disjoint domains; Statement and Proof unchanged.';
const before=JSON.parse(readFileSync(`${d}/before-bindings.json`));
const checks=[];let blocks='';mkdirSync(`${d}/receipts`,{recursive:true});
function check(command,hash){const result=spawnSync(command[0],command.slice(1),{encoding:'utf8'});const r={command,exit_code:result.status,output:result.stdout+result.stderr,checked_at:new Date().toISOString(),content_sha256:hash};checks.push(r);if(result.status!==0)throw Error(r.output);return r;}
for(const [id,correction]of Object.entries(corrections)){
 const path=`items/${id}.md`,hash=itemHashGuard(readFileSync(path,'utf8')),binding=before.find(r=>r.path===path);
 const precheck=check(['node','tools/tsx-run.mjs','tools/precheck.mts',path,...(id.startsWith('def-')?['--json']:[])],hash);
 const rendercheck=check(['node','tools/rendercheck.mjs',path],hash);
 const marker=`${run}:${id}`;
 const evidence=`\n- Item: \`${id}\`; run: \`${run}\`; owner: \`batch-1\`.\n- Current canonical content SHA-256: \`${hash}\`.\n- Correction: ${correction}\n- Evidence: \`${d}/consumer-usage-checks.json\`; exact before carrier and local checks are bound by \`${d}/receipts/${id}.json\`.\n- This records a local published repair, not a whole-item audit or new mathematical acceptance.\n`;
 const receipt={version:1,kind:'recorded-local-published-repair',run,group:'batch-1',id,correction,content_sha256:hash,before_file:binding.before_file,before_raw_sha256:binding.before_raw_sha256,pre_sha256:binding.pre_sha256,ledger_marker:marker,ledger_sha256:createHash('sha256').update(evidence).digest('hex'),recorded_at:new Date().toISOString(),local_checks:{precheck,rendercheck}};
 writeFileSync(`${d}/receipts/${id}.json`,JSON.stringify(receipt,null,2)+'\n');blocks+=`<!-- local-published-repair:${marker}:begin -->${evidence}<!-- local-published-repair:${marker}:end -->\n\n`;
}
check(['node','tools/rendercheck.mjs','library/real-analysis/roots-and-rational-powers.md'],itemHashGuard(readFileSync('library/real-analysis/roots-and-rational-powers.md','utf8')));
check(['node','tools/proof-layout.mjs','items/def-integer-power.md','items/thm-weighted-am-gm-rational.md','items/thm-etemadi-strong-law-for-pairwise-independent-iid-variables.md'],null);
writeFileSync(`${d}/local-checks.json`,JSON.stringify(checks,null,2)+'\n');writeFileSync(`${d}/ledger-blocks.proposed.md`,blocks);
console.log(`Recorded ${checks.length} successful explicit checks and three receipts; canonical ledger markers await root installation.`);
