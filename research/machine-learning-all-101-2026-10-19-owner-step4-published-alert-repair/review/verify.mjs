import fs from 'node:fs';import crypto from 'node:crypto';import {createRequire}from'node:module';
const require=createRequire(import.meta.url),yaml=require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/yaml');
const base='research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair',root=JSON.parse(fs.readFileSync(base+'/inventory.json'));
const hash=x=>crypto.createHash('sha256').update(x).digest('hex'),read=p=>fs.readFileSync(p,'utf8'),section=/^## (Definition|Statement)\n([\s\S]*?)(?=^## |$(?![\s\S]))/m,wiki=/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const rows=[],alerts=[],errors=[];
for(let n=1;n<=10;n++){
 const owner='format-'+String(n).padStart(2,'0'),home=base+'/'+owner,as=JSON.parse(read(home+'/assignment.json'));
 const packet=[3,4,5].includes(n)?home+'/revision-2':home;
 if(!fs.existsSync(packet+'/candidate/items')){errors.push(owner+': final revision-2 absent');continue;}
 for(const s of as.suppliers){
  const id=s.id,before=base+'/preimage/'+s.source,candidate=packet+'/candidate/'+s.source;
  const a=read(before),b=read(candidate),problems=[];
  if(hash(a)!==s.raw_sha256||hash(read(s.source))!==s.raw_sha256)problems.push('original/live hash');
  const frozen=home+'/before/'+s.source;if(fs.existsSync(frozen)&&hash(read(frozen))!==s.raw_sha256)problems.push('packet frozen hash');
  const x=a.match(section),y=b.match(section);
  if(!x||!y)problems.push('primary missing');else{
   const labels=[];const expected=x[2].replace(wiki,(m,t,l)=>{let p='items/'+t.trim()+'.md',v=yaml.parse(read(p).split('---')[1]);labels.push({target:t,path:p,raw_sha256:hash(read(p)),label:l?.trim()||v.title});return l?.trim()||v.title});
   if(expected.trimEnd()!==y[2].trimEnd())problems.push('rendered prose mismatch');
   const refs=[...new Set([...x[2].matchAll(wiki)].map(z=>z[0]))];
   const tail=b.slice(y.index+y[0].length),r=tail.match(new RegExp('^## '+y[1]+' references\\n\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))','m'));
   if(!r||r.index!==0||r[1].trimEnd()!==refs.join('\n\n'))problems.push('reference adjacency/paragraphs');
   if(r){let left=a.slice(0,x.index)+a.slice(x.index+x[0].length),right=b.slice(0,y.index)+tail.slice(r[0].length);
   if(id==='thm-continuous-implies-integrable'){const normalize=t=>t.replace(/^1\.1 .*$/m,'<focused boundedness repair>').replace(/^- \*\*Where compactness enters, and what it buys\.\*\* .*$/m,'<aligned remark>');left=normalize(left);right=normalize(right);}
   if(id==='thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space'){const normalize=t=>t.replace(/^1\.1 .*$/m,line=>line.replace(' [L2, L3]',''));left=normalize(left);right=normalize(right);}
   if(left!==right)problems.push('other bytes differ outside authorized focused repair');} 
   if(/\[\[|\]\(/.test(y[2]))problems.push('remaining hyperlink');
   rows.push({id,owner,candidate,candidate_raw_sha256:hash(b),original_raw_sha256:hash(a),labels,problems});
  }
  for(const z of s.alerts){const raw=read(z.digest_path);if(hash(raw)!==z.digest_sha256)problems.push('digest hash');const d=JSON.parse(raw);alerts.push({id,...z});}
 }
}
fs.writeFileSync(base+'/review/comparison.json',JSON.stringify({rows,errors,alert_count:alerts.length},null,2)+'\n');console.log(JSON.stringify({rows:rows.length,alerts:alerts.length,errors,failed:rows.filter(x=>x.problems.length).map(x=>({id:x.id,problems:x.problems}))},null,2));
