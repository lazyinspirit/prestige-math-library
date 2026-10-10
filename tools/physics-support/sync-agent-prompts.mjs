#!/usr/bin/env node
// Physics owns its role prompts. Refresh mandatory physics guidance only.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const repo=fileURLToPath(new URL('../../',import.meta.url));
const model=readFileSync(join(repo,'PHYSICS-CONTENT-MODEL.md'),'utf8');
const section=model.split('## Concise physics agent instructions\n')[1]?.split('\n## ')[0];
const guidance=section?.slice(section.indexOf('Read `CLAUDE.md`')).trim();
if(!guidance?.startsWith('Read `CLAUDE.md`'))throw Error('Missing physics guidance');
const prefix=`# Mandatory physics instructions\n\n${guidance}\n\n---\n\n`;
const check=process.argv.includes('--check');let count=0;const failures=[];
function walk(dir){for(const entry of readdirSync(dir,{withFileTypes:true})){
  const path=join(dir,entry.name);
  if(entry.isDirectory()){if(entry.name!=='schemas')walk(path);continue;}
  if(!entry.name.endsWith('.md')||entry.name==='README.md')continue;
  const text=readFileSync(path,'utf8');if(!text.startsWith('# Mandatory physics instructions'))continue;
  const at=text.indexOf('\n---\n');if(at<0)throw Error(`Missing guidance boundary: ${path}`);
  const desired=prefix+text.slice(at+5).replace(/^\n+/,'');count++;
  if(text===desired)continue;if(check)failures.push(path);else writeFileSync(path,desired);
}}
walk(join(repo,'physics/briefs'));
if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}
else console.log(`${check?'Verified':'Updated'} mandatory physics guidance in ${count} independently owned prompts.`);
