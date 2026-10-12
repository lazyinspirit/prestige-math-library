import {loadPhysicsRepository,validatePhysicsContent} from '../../../../tools/physics-support/physics-content.mjs';
import {readFileSync} from 'node:fs';
const r='physics-cm-qm-gr-79-2026-10-11',root=process.cwd();
const pages=[63].flatMap(n=>JSON.parse(readFileSync('research/'+r+'-batch-'+n+'.pages.json','utf8'))),selectedItems=new Set(pages.flatMap(p=>p.items.map(i=>i.id))),selectedPages=new Set(pages.map(p=>p.id));
const repo=loadPhysicsRepository(root),errors=validatePhysicsContent({...repo,selectedItems,selectedPages});console.log(JSON.stringify({selectedItems:selectedItems.size,errors},null,2));process.exitCode=errors.length?1:0;
