import { readFileSync, readdirSync, lstatSync } from 'node:fs';
import { join } from 'node:path';
import { git, nativeProtectedPathClosure, operationalContextState } from './tools/run-commit-scope-readonly-probe.mjs';
const root = '/home/lazyinspirit/Projects/prestige-math-library';
const run = 'machine-learning-all-101-2026-10-19';
const manifestPath = `research/${run}-owner-closeout-operational-context-audit/proposed-manifest.json`;
const manifest = JSON.parse(readFileSync(join(root,manifestPath),'utf8'));
const inventory = git(root,['ls-files','--cached','--others','--exclude-standard','-z','--',`:(glob)research/${run}-*`,`:(glob)research/${run}-*/**`],{literalPathspecs:false}).toString('utf8').split('\0').filter(Boolean);
const seeds = [`research/${run}-step5-v2/certification.json`,`research/${run}-step3-closure.json`];
const protectedPaths = nativeProtectedPathClosure(root,run,inventory,seeds);
const links = new Set(); let regular = 0; const states = [];
for (const row of manifest.directories) {
  const walk = path => {
    const st = lstatSync(join(root,path));
    if (st.isSymbolicLink()) links.add(path);
    else if (st.isDirectory()) for(const name of readdirSync(join(root,path))) walk(path+'/'+name);
    else if(st.isFile()) regular++;
    else throw Error('unsupported context entry');
  };walk(row.path);
  const actual = operationalContextState(root,row.path);
  if(actual.entries!==row.entries||actual.sha256!==row.sha256) throw Error('audit tree seal stale: '+row.path);
  states.push({path:row.path,...actual});
}
const protectedLinks = [];
for(const path of protectedPaths) for(let p=path;p.includes('/');p=p.slice(0,p.lastIndexOf('/'))) if(links.has(p)){protectedLinks.push({path,link:p});break;}
const result={kind:'read-only-actual-native-closure-probe-not-authority-or-preflight',run,inventory_entries:inventory.length,seeds,native_protected_paths:protectedPaths.size,contexts:states.length,context_symlinks:links.size,context_regular_files:regular,context_hashes_current:true,protected_symlink_references:protectedLinks};
console.log(JSON.stringify(result,null,2));
if(protectedLinks.length) process.exitCode=1;
