import {readFileSync, readdirSync,writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolveWikilinks} from '/home/lazyinspirit/Projects/prestige-intelligence/web/lib/math-library.ts';
const require=createRequire('/home/lazyinspirit/Projects/prestige-intelligence/web/package.json');const YAML=require('yaml');
const root='/home/lazyinspirit/Projects/prestige-math-library'; const base=root+'/research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/format-03';
const items=new Map();for (const file of readdirSync(root+'/items').filter(f=>f.endsWith('.md'))) {const raw=readFileSync(root+'/items/'+file,'utf8');let fm;try{fm=YAML.parse(raw.match(/^---\n([\s\S]*?)\n---/)[1]);}catch{continue;}if(fm?.id) items.set(fm.id,{...fm,provedHere:fm.proved_here!==false});}
const inv=JSON.parse(readFileSync(base+'/inventory.json','utf8'));const labels={};for(const item of inv.items)for(const link of item.moved_links){const resolved=resolveWikilinks(link,items);const match=resolved.match(/^\[([\s\S]*)\]\(/);if(!match)throw Error('unresolved '+link);labels[link]={label:match[1],rendered:resolved};}
writeFileSync(base+'/revision-2/rendered-labels.json',JSON.stringify(labels,null,2)+'\n');
