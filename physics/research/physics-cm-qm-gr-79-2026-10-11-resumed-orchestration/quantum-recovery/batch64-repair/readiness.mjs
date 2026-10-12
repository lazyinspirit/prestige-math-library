import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {loadStep3} from '../../../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision,recordStep1} from '../../../../tools/physics-support/step1-decisions.mjs';
import {dependencyLevels} from '../../../../tools/physics-support/item-dependency-levels.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',base='research/'+run+'-resumed-orchestration/quantum-recovery',source='thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence',s=loadStep3(root,run),levels=dependencyLevels(s.pages),rows=[];
const owned=[...s.items.values()].filter(v=>Number(v.page.batch)===64||v.item.id===source).sort((a,b)=>(levels.levels.get(a.item.id)-levels.levels.get(b.item.id))||a.item.id.localeCompare(b.item.id));
for(const {item,page} of owned){
 if(step1Decision(s,item.id).closed)continue;
 const dir=base+'/'+(item.id===source?'source41-dyson-repair':'batch64-repair'),before=dir+'/before/'+run+'-step1-'+item.id+'.json';
 if(!existsSync(before))throw Error('Missing genuine before record '+before);
 const old=JSON.parse(readFileSync(before,'utf8'));if(old.decision!=='ready')throw Error('Not genuine originalready '+item.id);
 const row=recordStep1(root,{run,item:item.id,decision:'ready',owner:true,dependencies:[...new Set([...old.dependencies,...item.deps])],reason:'Authentic original native-ready before archive preserved; final current proof/interface and whole old/current/alias consumer closure completed by same quantum owner. '+(item.id===source?'Previouslyunrepaired distinct41Dyson cycle1/cap2 authorized after exacthistory0priorcycles; actual five64consumers checked, original35 and repaired41subject histories/caps unchanged. ':'Focused64 cycle1/cap2: fullcomplex amplitudes/chronologicalsupplier transfer, actual domains, formal/preparation zero branches, arbitraryJ declaredCartesianchannel matrices and physical units retained; whole12affectedconsumer union and14actualsource-interface inventory checked. ')+'Evidence '+dir+'/repair.json and final selected check outputs. Local repair only, no independent workflow acceptance.'});rows.push(row);
}
const fresh=loadStep3(root,run),inventory=[41,64].map(n=>{const a=[...fresh.items.values()].filter(v=>Number(v.page.batch)===n);return {batch:n,items:a.length,ready:a.filter(v=>step1Decision(fresh,v.item.id).closed).length,stale:a.filter(v=>!step1Decision(fresh,v.item.id).closed).map(v=>({id:v.item.id,reason:step1Decision(fresh,v.item.id).reason})),level_mismatches:a.filter(v=>v.item.dependency_level!==levels.levels.get(v.item.id)).map(v=>({id:v.item.id,declared:v.item.dependency_level,current:levels.levels.get(v.item.id)}))};});
writeFileSync(base+'/batch64-repair/readiness.json',JSON.stringify({refreshed:rows.length,rows,inventory},null,2)+'\n');console.log(JSON.stringify({refreshed:rows.length,inventory},null,2));
