import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const root = process.cwd();
const { precheckSource } = await import(pathToFileURL(root+'/tools/paths.mjs').href);
const { proposedPrecheck } = await import(pathToFileURL(precheckSource()).href);
const base=root+'/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-open-frontiers-round1/item-donors';
for (const name of readdirSync(base).filter(x=>x.endsWith('.md'))) {
  const path=base+'/'+name, text=readFileSync(path,'utf8');
  const check=text.split('\n## Facts & Assumptions\n')[1].replace(/^## .*$/gm,'').trim();
  const r=proposedPrecheck(check,'direct');
  if (r.err) throw new Error(name+': '+r.err);
  if (!r.repaired) continue;
  const steps=[...r.proof.matchAll(/^\d+\.\d+ [\s\S]*?(?=\n\n|$)/gm)].map(m=>m[0].replace('Steps 1.2–2.2 give','Steps 1.2 and 2.1 give'));
  if (!steps.at(-1)?.includes('∎')) throw new Error('missing QED');
  const before=text.split('\n## Verification\n')[0];
  const given=text.split('\n## Verification\n')[1].split(/\n\n(?=\d+\.\d+ )/)[0];
  const tail='\n\n## Scope of the resolution\n'+text.split('\n## Scope of the resolution\n')[1];
  writeFileSync(path,before+'\n## Verification\n'+given+'\n\n'+steps.join('\n\n')+tail);
  console.log(name+': adopted '+steps.length+' canonical phase steps');
}
