#!/usr/bin/env node
import { realpathSync as physicsRealpath } from 'node:fs';
// A short shared-metadata critical section, not an item-review scheduling lock.
import {mkdirSync,readFileSync,writeFileSync,unlinkSync,rmdirSync} from 'node:fs';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';

export function sharedWriteLock(root,command,owner) {
  if(!owner||!['acquire','release'].includes(command))throw Error('expected acquire|release --owner DISPATCH_LABEL');
  const parent=resolve(root,'.physics-autopilot'),dir=join(parent,'step7-shared-write.lock'),file=join(dir,'owner.json');
  mkdirSync(parent,{recursive:true});
  if(command==='acquire') {
    try {mkdirSync(dir);}catch(error){
      if(error.code!=='EEXIST')throw error;
      return {acquired:false,message:'Shared metadata is busy. Continue disjoint item review; retry before shared edits.'};
    }
    writeFileSync(file,JSON.stringify({owner,at:new Date().toISOString()})+'\n',{flag:'wx'});
    return {acquired:true,owner};
  }
  const held=JSON.parse(readFileSync(file,'utf8'));
  if(held.owner!==owner)throw Error(`Shared metadata lock belongs to ${held.owner}, not ${owner}`);
  unlinkSync(file);rmdirSync(dir);return {released:true,owner};
}
if(process.argv[1]&&physicsRealpath(resolve(process.argv[1])) === fileURLToPath(import.meta.url)) {
  try {
    const args=process.argv.slice(2),owner=args[args.indexOf('--owner')+1];
    if(!args.includes('--owner'))throw Error('--owner is required');
    const result=sharedWriteLock(process.cwd(),args[0],owner);
    console.log(JSON.stringify(result));if(result.acquired===false)process.exitCode=2;
  }catch(error){console.error(error.message);process.exitCode=1;}
}
