// Repair agents write private copies; only the controller integrates checked edits.
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync, lstatSync, copyFileSync, symlinkSync, renameSync, unlinkSync } from 'node:fs';
import { join, dirname, relative, resolve } from 'node:path';

const contents = bytes => bytes.toString('base64');
const safe = file => { if (file.startsWith('/') || file.split('/').includes('..')) throw Error(`Unsafe repair path ${file}`); return file; };
export const repairWorkspacePath = (root, run, batch, p) => join(root,'research',`${run}-scope-review`,`batch-${batch}`,`${p.bookkeeping_free?'source-':''}${p.phase}-${p.round}.workspace`,'work');

export function prepareRepairWorkspace(root, run, batch, p) {
  const work = repairWorkspacePath(root,run,batch,p), baseline = join(dirname(work),'baseline.json');
  if (existsSync(baseline)) return work; // Process retries retain the same edits.
  const writable = new Set(p.write_files.map(safe)), before = {};
  mkdirSync(work,{recursive:true});
  function mirror(dir, rel='') {
    for (const entry of readdirSync(dir,{withFileTypes:true})) {
      if (!rel && ['.git','.autopilot','.physics-autopilot'].includes(entry.name)) continue;
      const file = rel ? `${rel}/${entry.name}` : entry.name, source=join(root,file), target=join(work,file);
      const contains = [...writable].some(path=>path.startsWith(file+'/'));
      if (entry.isDirectory() && contains) { mkdirSync(target,{recursive:true});mirror(source,file); }
      else if (writable.has(file) && existsSync(source)) {
        mkdirSync(dirname(target),{recursive:true});copyFileSync(source,target);before[file]=contents(readFileSync(source));
      } else symlinkSync(source,target,entry.isDirectory()?'dir':'file');
    }
  }
  // Source directories need leaf links so new batch-owned items can be created.
  for (const dir of ['items','library','research']) {
    const source=join(root,dir); if(!existsSync(source))continue;
    mkdirSync(join(work,dir),{recursive:true});
    for(const entry of readdirSync(source,{withFileTypes:true})) {
      const file=`${dir}/${entry.name}`, target=join(work,file);
      if(entry.isDirectory() && [...writable].some(path=>path.startsWith(file+'/'))){mkdirSync(target,{recursive:true});mirror(join(root,file),file);}
      else if(writable.has(file)){copyFileSync(join(root,file),target);before[file]=contents(readFileSync(join(root,file)));}
      else symlinkSync(join(root,file),target,entry.isDirectory()?'dir':'file');
    }
  }
  for(const entry of readdirSync(root,{withFileTypes:true})) {
    if(['items','library','research','.git','.autopilot','.physics-autopilot'].includes(entry.name))continue;
    symlinkSync(join(root,entry.name),join(work,entry.name),entry.isDirectory()?'dir':'file');
  }
  // Stop repository discovery from widening a worker's writable project root.
  mkdirSync(join(work,'.git'),{recursive:true});
  writeFileSync(baseline,JSON.stringify({encoding:"bytes",before,writable:[...writable]},null,2)+'\n');
  return work;
}

/** Produce a guarded proposal; validation happens before any canonical write. */
export function repairWorkspaceChanges(root,run,batch,p,additional=[]) {
  const work=repairWorkspacePath(root,run,batch,p);
  if(!existsSync(work))return null; // Retained pre-rebuild workers use the old guard.
  const baseline=JSON.parse(readFileSync(join(dirname(work),'baseline.json'),'utf8'));
  const allowed=new Set([...baseline.writable,...additional.map(safe)]), regular=[];
  function walk(dir,rel='') {
    for(const entry of readdirSync(dir,{withFileTypes:true})) {
      const file=rel?`${rel}/${entry.name}`:entry.name;
      if(file==='.git'||entry.isSymbolicLink())continue;
      if(entry.isDirectory())walk(join(dir,entry.name),file);else regular.push(file);
    }
  }
  walk(work);
  for(const file of regular)if(!allowed.has(file))throw Error(`Repair wrote outside assigned scope: ${file}`);
  const changes=[];
  for(const file of allowed){
    const target=join(work,file), original=baseline.before[file]??null;
    const bytes=existsSync(target)?readFileSync(target):null;
    if(bytes && lstatSync(target).isSymbolicLink())continue;
    if((bytes?contents(bytes):null)!==original)changes.push({file,before:original,bytes});
  }
  for(const row of changes){const target=join(root,row.file), current=existsSync(target)?contents(readFileSync(target)):null;if(current!==row.before)throw Error(`Canonical repair input changed: ${row.file}`);}
  return {root,work,changes};
}

export function integrateRepairWorkspace(proposal) {
  for(const row of proposal.changes){
    const target=resolve(proposal.root,safe(row.file)), current=existsSync(target)?contents(readFileSync(target)):null;
    if(current!==row.before)throw Error(`Canonical repair input changed: ${row.file}`);
  }
  for(const {file,bytes} of proposal.changes){
    const target=resolve(proposal.root,safe(file));
    if(bytes===null){unlinkSync(target);continue;}
    mkdirSync(dirname(target),{recursive:true});const temp=`${target}.${process.pid}.tmp`;writeFileSync(temp,bytes);renameSync(temp,target);
  }
}
