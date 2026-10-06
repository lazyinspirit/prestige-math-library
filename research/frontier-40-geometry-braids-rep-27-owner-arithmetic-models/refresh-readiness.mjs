import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3} from '../../tools/step3-decisions.mjs';
import {recordStep1,step1Decision} from '../../tools/step1-decisions.mjs';
import {orderedItems} from '../../tools/item-dependency-levels.mjs';
const run='frontier-40-geometry-braids-rep-27',root=process.cwd();
const prefix=`research/${run}-owner-arithmetic-models/`;
const pages=JSON.parse(readFileSync(`research/${run}-batch-27.pages.json`,'utf8')).map(p=>({...p,batch:'27'}));
const evidence=['resumed-review.md','dual-source/proof-closure-packet.md','neron-source/packet.json','neron-source/closure-supplement.md','etale-source/closure-packet.md'].map(path=>({path:prefix+path,sha256:createHash('sha256').update(readFileSync(prefix+path)).digest('hex')}));
const results=[];
for(const row of orderedItems(pages)){
 const s=loadStep3(root,run),previous=step1Decision(s,row.id);
 if(previous.closed){results.push({id:row.id,level:row.level,action:'kept-current-ready',sha256:previous.row.sha256});continue;}
 const reason=`Owner scaffold repair/review complete for ${row.id}. The exact current statement and declared supplier interfaces were checked in dependency order. The complete local proof strategy and source-reading limits are in ${prefix}resumed-review.md and its named dual, Neron and finite-etale closure packets. This is Step1 readiness only; Step3 authored proofs and independent review remain required. Full dual, arbitrary-DVR abelian Neron existence, coherent base change and NOS/finite-etale torsion promises are retained; no all-degree etale-cohomology admission is used. Source fetch stamps are checked separately and do not certify proof correctness.`;
 const receipt=recordStep1(root,{run,item:row.id,decision:'ready',owner:true,dependencies:row.item.deps,reason});
 results.push({id:row.id,level:row.level,action:'refreshed-current-ready',previous_decision:previous.row?.decision??null,sha256:receipt.sha256});
}
const current=loadStep3(root,run),open=results.filter(r=>!step1Decision(current,r.id).closed);
const out={version:1,run,scope:'batch27-only',recorded_at:new Date().toISOString(),order:'suppliers-before-consumers',evidence,items:results,ready:results.length-open.length,open};
writeFileSync(prefix+'readiness-refresh.json',JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify({items:results.length,ready:out.ready,refreshed:results.filter(r=>r.action==='refreshed-current-ready').length,open}));
if(open.length)process.exitCode=1;
