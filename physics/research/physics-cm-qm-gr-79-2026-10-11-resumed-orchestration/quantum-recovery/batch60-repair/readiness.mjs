import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {loadStep3} from '../../../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision,recordStep1} from '../../../../tools/physics-support/step1-decisions.mjs';
import {orderedItems,dependencyLevels} from '../../../../tools/physics-support/item-dependency-levels.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',dir='research/'+run+'-resumed-orchestration/quantum-recovery/batch60-repair',s=loadStep3(root,run),levels=dependencyLevels(s.pages),rows=[];
const owned=new Set([60]);
for(const {item,page} of [...s.items.values()].sort((a,b)=>(levels.levels.get(a.item.id)-levels.levels.get(b.item.id))||a.item.id.localeCompare(b.item.id))){
 if(!owned.has(Number(page.batch)))continue;
 const previous=step1Decision(s,item.id);if(previous.closed)continue;
 const file='research/'+run+'-step1-'+item.id+'.json',before=dir+'/before/'+file.split('/').at(-1);
 const added=false;
 if(!existsSync(before)&&!added)throw Error('Missing authentic before archive '+item.id);
 const old=added?{decision:'ready',dependencies:[]}:JSON.parse(readFileSync(before,'utf8'));if(old.decision!=='ready')throw Error('Not genuine ready-before '+item.id);
 const deps=[...new Set([...old.dependencies,...(item.deps??[])])];
 const row=recordStep1(root,{run,item:item.id,decision:'ready',owner:true,dependencies:deps,reason:(added?'First authorized ready record for necessary locally authored total-Fock momentum prerequisite; no native-ready-before exists. ':'Authentic original60 native-ready-before archived and current affected context reauthenticated. ')+'Owning focused60 cycle1/cap2 proof and whole old/current/alias actual60 consumer closure; declared CC+AC scope retained. Evidence '+dir+'/repair.json and checks-final.json. 62 final exact transferqueued;61/64activeprotected, finalfutureconsumerdutyretained; no independent audit/workflow acceptance.'});rows.push(row);
}
const fresh=loadStep3(root,run),inventory=[60].map(n=>{const items=[...fresh.items].filter(([i,v])=>Number(v.page.batch)===n);return {batch:n,items:items.length,ready:items.filter(([i])=>step1Decision(fresh,i).closed).length,level_mismatches:items.filter(([i,v])=>v.item.dependency_level!==levels.levels.get(i)).map(([i,v])=>({id:i,declared:v.item.dependency_level,current:levels.levels.get(i)}))};});
writeFileSync(dir+'/readiness.json',JSON.stringify({refreshed:rows.length,rows,inventory},null,2)+'\n');console.log(JSON.stringify({refreshed:rows.length,inventory},null,2));
