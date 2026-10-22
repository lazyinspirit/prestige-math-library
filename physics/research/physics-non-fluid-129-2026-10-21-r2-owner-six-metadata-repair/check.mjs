import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadPhysicsRepository, validatePhysicsContent } from '../../tools/physics-support/physics-content.mjs';
const directory=resolve('research/physics-non-fluid-129-2026-10-21-r2-owner-six-metadata-repair');
const ids=JSON.parse(readFileSync(`${directory}/ids.json`));
const bindings=JSON.parse(readFileSync(`${directory}/bindings.json`));
const repo=loadPhysicsRepository(process.cwd());
const sourceErrors=validatePhysicsContent({...repo,requireBodies:false,selectedItems:new Set(ids),selectedPages:new Set()});
const selectedRows=new Map();
for(const manifest of bindings.manifests) for(const page of JSON.parse(readFileSync(manifest.path))) for(const row of page.items) if(ids.includes(row.id)) selectedRows.set(row.id,row);
const mirrorErrors=[];
for(const id of ids){const source=repo.items.find(i=>i.id===id), row=selectedRows.get(id);for(const key of ['deps','dependency_roles','dependency_level'])if(JSON.stringify(source[key])!==JSON.stringify(row[key]))mirrorErrors.push({id,key});}
const manifestErrors=validatePhysicsContent({...repo,items:repo.items.map(item=>selectedRows.has(item.id)?{...item,...selectedRows.get(item.id)}:item),requireBodies:false,selectedItems:new Set(ids),selectedPages:new Set()});
const result={validator:'tools/physics-support/physics-content.mjs validatePhysicsContent',requireBodies:false,selectedItems:ids,sourceErrors,manifestErrors,mirrorErrors};
writeFileSync(`${directory}/metadata-validation.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));process.exitCode=sourceErrors.length+manifestErrors.length+mirrorErrors.length?1:0;
