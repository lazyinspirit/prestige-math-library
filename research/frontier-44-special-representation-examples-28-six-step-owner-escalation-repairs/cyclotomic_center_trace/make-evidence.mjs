import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/cyclotomic_center_trace';
const allocation=JSON.parse(readFileSync(base+'/../parallel-allocation.json','utf8')).new_groups.cyclotomic_center_trace;
const hashes={};for(const path of allocation.item_paths){const s=readFileSync(path,'utf8');hashes[path]={raw_sha256:createHash('sha256').update(s).digest('hex'),content_sha256:itemHashGuard(s)};}
writeFileSync(base+'/current-hashes.json',JSON.stringify(hashes,null,2)+'\n');
const contractFile='research/frontier-44-special-representation-examples-28-six-step-batch-48.proof-contracts.json';const contracts=JSON.parse(readFileSync(contractFile,'utf8'));const changes={};
for(const path of allocation.item_paths){const id=path.slice(6,-3),s=readFileSync(path,'utf8'),before=readFileSync(base+'/before/'+id+'.md','utf8');if(s===before)continue;
 const proof=s.split('## Proof\n')[1].split('## Remarks')[0];const derivations=[...proof.matchAll(/^(\d+\.\d+) (.*)$/gm)].map(m=>({id:'step-'+m[1].replace('.','-'),claim:m[2],step:m[1],inputs:[...m[2].matchAll(/\[(.*?)\]/g)].flatMap(x=>x[1].split(',').map(t=>t.trim().replace(/^step /,''))).filter(t=>/^(?:[FALC]\d+|\d+\.\d+)$/.test(t))}));
 const citations=contracts.items?.[id]?.citations??contracts.contracts?.[id]?.citations;
 const actual=contracts.items?.[id]??contracts.contracts?.[id];
 changes[id]={path,expected_current_raw_sha256:hashes[path].raw_sha256,replace_derivations:derivations,citations:citations?.map(c=>({...c,uses:derivations.filter(d=>d.inputs.includes(c.fact)).map(d=>d.step)})),boundary_hash_binding_action:'Preserve historical template_review records as history; retire their stale current-binding role rather than re-stamping acceptance.',risk_review_action:'Keep open until root sufficiency review and supplier holds are resolved; append repair observation separately, do not overwrite genuine alpha report.'};
}
writeFileSync(base+'/root-metadata-proposals.json',JSON.stringify({version:1,contract_path:contractFile,items:changes,manifest_changes:[],page_changes:[],deps_changes:[],statement_definition_changes:[],unchanged_items:allocation.items.filter(id=>!changes[id]),root_only_refresh:'Rehash dependencies/contract derivations and current proof-bound metadata after substantive supplier repairs; no gate or acceptance proposal.'},null,2)+'\n');
const all=readdirSync('items').filter(x=>x.endsWith('.md')).map(f=>{const s=readFileSync('items/'+f,'utf8');return {id:f.slice(0,-3),s};});
const focus={};for(const id of allocation.items){focus[id]=all.filter(x=>x.id!==id&&x.s.includes('[['+id)).map(x=>({id:x.id,path:'items/'+x.id+'.md',raw_sha256:createHash('sha256').update(x.s).digest('hex'),interface_use:'Formal Statement/Definition unchanged in this pass; original linked result and its original hypotheses retained. This inventory is a dependency impact list, not an independent whole-consumer audit.'}));}
writeFileSync(base+'/consumer-impact-inventory.json',JSON.stringify(focus,null,2)+'\n');
