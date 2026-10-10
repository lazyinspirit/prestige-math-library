import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {dependencyLevels} from '../../tools/physics-support/item-dependency-levels.mjs';
const root=new URL('./',import.meta.url),run='physics-em-sr-40-2026-10-08';
const manifests=readdirSync(root).filter(f=>f.startsWith(run+'-batch-')&&f.endsWith('.pages.json')).map(path=>({path,pages:JSON.parse(readFileSync(new URL(path,root),'utf8'))}));
const result=dependencyLevels(manifests.flatMap(x=>x.pages).filter(p=>p.items.length),{validateLabels:false});if(result.errors.length)throw Error(result.errors.join('\n'));
const changes=[];for(const m of manifests){let dirty=false;for(const p of m.pages)for(const x of p.items){let level=result.levels.get(x.id);if(x.dependency_level!==level){if(m.path!==run+'-batch-23.pages.json')throw Error('Unexpected level mutation outside EM23: '+x.id);changes.push({item:x.id,home:p.id,before:x.dependency_level,after:level});x.dependency_level=level;dirty=true;}}if(dirty)writeFileSync(new URL(m.path,root),JSON.stringify(m.pages,null,2)+'\n');}
writeFileSync(new URL(run+'-reconciliation5.em.levels.json',root),JSON.stringify({items:result.items.size,errors:result.errors,changes},null,2)+'\n');console.log(JSON.stringify({items:result.items.size,changes},null,2));
