#!/usr/bin/env node
// ROOT EXECUTION ONLY after root has read the exact final proposal and this utility.
import fs from 'node:fs';
import path from 'node:path';
import {collect} from '../tools/frontier-dependency-ledger.mjs';
const args=process.argv.slice(2);if(args.length!==5||args[0]!=='--run'||args[2]!=='--proposal'||args[4]!=='--apply')throw Error('Usage: node research/R-owner-r2-ledger-apply.mjs --run RUN --proposal research/FINAL.json --apply');
const run=args[1],proposal=args[3],read=p=>fs.readFileSync(p,'utf8'),key=r=>JSON.stringify([r.kind,r.consumer,r.supplier]),d=JSON.parse(read(proposal));
if(d.version!==4||d.run!==run||d.phase!=='final'||d.status!=='FINAL addition-only native-scope proposal; root execution still required'||d.holds.length||d.uncovered.length)throw Error('Not an applicable final proposal');
const guard=(ledgers=true)=>{for(const [group,files]of Object.entries(d.applyGuards)){if(!ledgers&&group==='ledgers')continue;for(const [p,archive]of Object.entries(files)){if(read(p)!==read(archive))throw Error('Guard changed '+p);}}};guard();
const current=collect(process.cwd(),run).edges.filter(e=>e.declarations.length),nativeKeys=current.map(key).sort();if(JSON.stringify(nativeKeys)!==JSON.stringify(d.currentDeclaredEdges.map(key).sort()))throw Error('Native declared edge set changed');
const additions=new Map(d.additions.map(x=>[key(x.row),x.row])),seen=new Set(),changes=[];if(additions.size!==d.additions.length)throw Error('Duplicate approved addition');
for(const input of d.proposedInputs){const expected=`research/${run}-batch-${input.batch}.cross-batch-dependencies.json`;if(input.file!==expected||!d.applyGuards.ledgers[expected]||fs.lstatSync(expected).isSymbolicLink())throw Error('Invalid target '+expected);const raw=read(expected),old=JSON.parse(raw),rows=input.rows;
 if(rows.length<old.length||JSON.stringify(rows.slice(0,old.length))!==JSON.stringify(old))throw Error('Existing history changed '+expected);
 for(const row of rows){const k=key(row);if(seen.has(k))throw Error('Duplicate key '+k);seen.add(k);}
 for(const row of rows.slice(old.length)){const k=key(row),edge=current.find(e=>key(e)===k);if(row.status!=='verified'||!row.evidence?.trim()||!edge||edge.consumer_batch!==input.batch||JSON.stringify(row)!==JSON.stringify(additions.get(k)))throw Error('Unapproved addition '+k);}
 const text=JSON.stringify(rows,null,2)+'\n';if(raw!==text)changes.push({...input,text,raw});
}
const projected=new Map(d.proposedInputs.flatMap(x=>x.rows).map(r=>[key(r),r]));for(const edge of current)if(projected.get(key(edge))?.status!=='verified')throw Error('Current edge not verified '+key(edge));
const archive=proposal.replace(/\.json$/,'')+'-application';if(fs.existsSync(archive))throw Error('Application archive exists');fs.mkdirSync(archive);fs.writeFileSync(path.join(archive,'proposal.json'),read(proposal),{flag:'wx'});
for(const change of changes){fs.writeFileSync(path.join(archive,path.basename(change.file)+'.before'),change.raw,{flag:'wx'});fs.writeFileSync(path.join(archive,path.basename(change.file)+'.prepared'),change.text,{flag:'wx'});}
guard();const applied=[];try{for(const change of changes){if(read(change.file)!==change.raw)throw Error('Ledger changed before write '+change.file);fs.renameSync(path.join(archive,path.basename(change.file)+'.prepared'),change.file);applied.push(change.file);}guard(false);for(const change of changes)if(read(change.file)!==change.text)throw Error('Written bytes mismatch '+change.file);
 const result={version:1,run,proposal,at:new Date().toISOString(),status:'applied addition-only current owner ledger metadata',changed:applied,oldRowsPreserved:d.counts.existingRowsPreserved,newRows:d.additions.length,archive,notPerformed:['native refresh/gates','readiness/hash/level/runtime changes','source/manifest/contracts edits','commits']};fs.writeFileSync(path.join(archive,'application.json'),JSON.stringify(result,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify(result,null,2));
}catch(error){fs.writeFileSync(path.join(archive,'application-failure.json'),JSON.stringify({run,proposal,applied,error:String(error),beforeBytesPreserved:true},null,2)+'\n',{flag:'wx'});throw error;}
