import {loadStep3} from '../../../../tools/physics-support/frontier-snapshot.mjs';
import {dependencyLevels} from '../../../../tools/physics-support/item-dependency-levels.mjs';
import {readFileSync,writeFileSync} from 'node:fs';
const run='physics-cm-qm-gr-79-2026-10-11',s=loadStep3(process.cwd(),run),levels=dependencyLevels(s.pages),file='research/'+run+'-batch-59.pages.json',pages=JSON.parse(readFileSync(file,'utf8')),changes=[];
for(const page of pages)for(const item of page.items){const level=levels.levels.get(item.id);if(level===undefined)throw Error('Missinglevel '+item.id);if(level!==item.dependency_level){changes.push({id:item.id,before:item.dependency_level,current:level});item.dependency_level=level;const p='items/'+item.id+'.md';let text=readFileSync(p,'utf8');text=text.replace(/^dependency_level: \d+$/m,'dependency_level: '+level);writeFileSync(p,text);}}
writeFileSync(file,JSON.stringify(pages,null,2)+'\n');console.log(JSON.stringify({changes},null,2));
