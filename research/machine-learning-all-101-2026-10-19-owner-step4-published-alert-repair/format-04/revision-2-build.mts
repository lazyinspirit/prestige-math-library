import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
const root='/home/lazyinspirit/Projects/prestige-math-library';
const base=join(root,'research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/format-04');
const web=resolve(root,'../prestige-intelligence/web');
const requireApp=createRequire(join(web,'package.json'));
const {parse}=requireApp('yaml');
const {resolveWikilinks}=await import(pathToFileURL(join(web,'lib/math-library.ts')).href);
const inventory=JSON.parse(readFileSync(join(base,'inventory.json'),'utf8'));
const items=new Map(); const labels=[];
for(const entry of inventory.items)for(const link of entry.relocated_links){
 const token=link.slice(2,-2); const id=token.split('|')[0].trim();
 if(!items.has(id)){
  const text=readFileSync(join(root,'items',id+'.md'),'utf8'); const fm=parse(text.split('---')[1]);
  items.set(id,{...fm,provedHere:true});
 }
}
for(const entry of inventory.items){
 const pre=readFileSync(join(root,entry.before_file),'utf8'); const match=/^## (Definition|Statement)\n([\s\S]*?)(?=^## |$(?![\s\S]))/m.exec(pre);
 if(!match)throw Error(entry.id);
 const primary=match[2];
 const plain=primary.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,(whole,target,explicit)=>{
  const item=items.get(target.trim());const label=explicit?.trim()||item?.title||target.trim();
  const resolved=resolveWikilinks(whole,items);
  if(!resolved.startsWith('['+label+']('))throw Error('renderer mismatch '+whole);
  labels.push({item:entry.id,link:whole,label,renderer_output:resolved,target_title:item?.title});return label;
 });
 const replacement=plain.trimEnd()+'\n\n## '+entry.heading+' references\n\n'+entry.relocated_links.join('\n\n')+'\n\n';
 let post=pre.slice(0,match.index+match[0].indexOf(primary))+replacement+pre.slice(match.index+match[0].length);
 if(match.index+match[0].length===pre.length)post=post.trimEnd()+'\n';
 const out=join(base,'revision-2/candidate/items',entry.id+'.md');mkdirSync(join(base,'revision-2/candidate/items'),{recursive:true});writeFileSync(out,post);
}
writeFileSync(join(base,'revision-2/renderer-labels.json'),JSON.stringify(labels,null,2)+'\n');
console.log('Wrote '+inventory.items.length+' revision-2 candidates; checked '+labels.length+' labels with actual resolveWikilinks');
