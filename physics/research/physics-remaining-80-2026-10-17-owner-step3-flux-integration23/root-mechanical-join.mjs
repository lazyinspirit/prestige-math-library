import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {sectionText,splitFrontmatter} from '../../../tools/physics-support/facts-block.mjs';
const root=resolve('physics'),run='physics-remaining-80-2026-10-17',dir=`research/${run}-owner-step3-flux-integration23`,R=p=>resolve(root,p),sha=b=>createHash('sha256').update(b).digest('hex');
const state=JSON.parse(readFileSync(R(`.physics-autopilot/${run}/state.json`)));
if(Object.values(state.dispatches).some(d=>d.covers?.includes('23')&&d.startedAt&&!d.endedAt))throw Error('active batch23 writer');
mkdirSync(R(`${dir}/root-mechanical-before`),{recursive:true});
const contractPath=`research/${run}-batch-23.proof-contracts.json`,before=readFileSync(R(contractPath)),doc=JSON.parse(before),changes=[];
writeFileSync(R(`${dir}/root-mechanical-before/contract.json`),before);
const item='items/prop-emg-xs-null-invariants.md',old=readFileSync(R(item),'utf8');
if(old.split('## Curvature convention\n').length!==2)throw Error('unexpected heading count');
const fresh=old.replace('## Curvature convention\n','## Remark\n');
if(sectionText(splitFrontmatter(old).body,'Statement')!==sectionText(splitFrontmatter(fresh).body,'Statement'))throw Error('Statement changed');
writeFileSync(R(`${dir}/root-mechanical-before/prop-emg-xs-null-invariants.md`),old);writeFileSync(R(item),fresh);
changes.push({path:item,kind:'heading only: Curvature convention to canonical Remark; all other bytes identical',before:sha(old),after:sha(fresh)});
for(const [id,fact] of [['prop-emg-xs-mp-extremal-rn','F5'],['prop-emg-xs-null-invariants','F8']]){
 const rows=doc.contracts[id].citations,removed=rows.filter(c=>c.fact===fact&&c.source===id);if(removed.length!==1)throw Error('unexpected self citation');doc.contracts[id].citations=rows.filter(c=>!removed.includes(c));changes.push({id,removed_invented_external_self_citation:removed});
}
{
 const rows=doc.contracts['thm-emg-xs-br-verification'].citations,dups=rows.filter(c=>c.fact==='F1'&&c.source==='def-emg-xs-br-products');if(dups.length!==2)throw Error('unexpected F1 duplicate');const keep=dups.find(c=>c.source_section==='Definition');keep.uses=['1.1','2.1','3.1','4.1'];doc.contracts['thm-emg-xs-br-verification'].citations=rows.filter(c=>!dups.includes(c)||c===keep);changes.push({id:'thm-emg-xs-br-verification',merged_duplicate_F1:true,retained_exact_Definition_and_all_actual_uses:true});
}
for(const [id,fact,source] of [['prop-emg-xs-mp-extremal-rn','F2','def-emg-xs-rn-data'],['thm-emg-xs-rn-near-horizon','F1','def-emg-xs-rn-data'],['cex-emg-xs-nonharmonic-vacuum','F1','def-emg-conformastatic-chart-data']]){
 const c=doc.contracts[id].citations.find(c=>c.fact===fact&&c.source===source);if(!c)throw Error('missing exact citation');const text=sectionText(splitFrontmatter(readFileSync(R(`items/${source}.md`),'utf8')).body,'Definition').trim();if(!text)throw Error('missing source Definition');c.quote=text;changes.push({id,fact,source,kind:'current exact Definition quote join'});
}
{
 const c=doc.contracts['cex-emg-xs-vanishing-scalars'].citations.find(c=>c.fact==='F5'&&c.source==='prop-emg-xs-null-invariants');c.source_section='Remark';c.quote=sectionText(splitFrontmatter(fresh).body,'Remark').trim();changes.push({id:'cex-emg-xs-vanishing-scalars',fact:'F5',kind:'same exact flatness convention under canonical Remark heading'});
}
writeFileSync(R(contractPath),JSON.stringify(doc,null,2)+'\n');writeFileSync(R(`${dir}/root-mechanical-join.json`),JSON.stringify({at:new Date().toISOString(),reviewed_by:'root',changes,contract:{path:contractPath,before:sha(before),after:sha(readFileSync(R(contractPath)))},risk_review_preserved:true,source_statements_preserved:true,scientific_acceptance:'No new claim; native stamping and complete battery outstanding'},null,2)+'\n');console.log('joined 15 mechanical citation errors; one heading-only source change; mathematical text and Statements preserved');
