#!/usr/bin/env node
// Exact metadata-only82requires proposal from the ONE root-authorized diagnostic.
import fs from'node:fs';import assert from'node:assert/strict';
import{splitFrontmatter}from'../../../../../tools/facts-block.mjs';import{yaml}from'../../../../../tools/pathway-lib.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19',D=`research/${RUN}-supervision-20261020/step1-bounded-closeout/metadata-diagnosis/page-prereq82-proposal`,Y=yaml();
const evidence=JSON.parse(fs.readFileSync('/tmp/prestige-page-prereq-direct-witnesses.json','utf8'));
assert.equal(evidence.items,1471);assert.equal(evidence.pages,218);assert.equal(evidence.rows.length,82);
assert(evidence.rows.every(r=>r.actual_manifest_witnesses.length&&r.supplier_order<r.consumer_order));
const changes=[],requires={},pageMap=new Map(),manifests=[];
for(let b=1;b<=109;b++){const file=`research/${RUN}-batch-${b}.pages.json`,before=fs.readFileSync(file,'utf8'),rows=JSON.parse(before);manifests.push({file,before,rows});for(const p of rows)pageMap.set(p.id,p);}
assert.equal(pageMap.size,218);assert.equal([...pageMap.values()].flatMap(p=>p.items).length,1471);
for(const row of evidence.rows){const p=pageMap.get(row.consumer);assert(p);requires[p.id]??=[...(p.requires??[])];if(!requires[p.id].includes(row.supplier))requires[p.id].push(row.supplier);}
for(const m of manifests){let changed=false;for(const p of m.rows)if(requires[p.id]){p.requires=requires[p.id];changed=true;}if(changed)changes.push({file:m.file,before:m.before,after:JSON.stringify(m.rows,null,2)+'\n',purpose:'Exact declared page reading prerequisites only; item inventory and all item fields unchanged.'});}
for(const[id,next]of Object.entries(requires)){
 const p=pageMap.get(id),file=`library/${p.category}/${id}.md`,before=fs.readFileSync(file,'utf8'),m=before.match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))([\s\S]*)$/);assert(m);
 const doc=Y.parseDocument(m[2]);assert.equal(doc.errors.length,0);doc.set('requires',next);
 let fm=doc.toString({lineWidth:0}).replace(/[\r\n]*$/,'');if(m[1].includes('\r\n'))fm=fm.replace(/\r?\n/g,'\r\n');const after=m[1]+fm+m[3]+m[4];
 assert.equal(splitFrontmatter(after).body,splitFrontmatter(before).body,'Page body must remain unchanged');
 changes.push({file,before,after,purpose:'Page FM requires only; exact page body preserved.'});
}
const file='research/plan-spec.json',before=fs.readFileSync(file,'utf8'),parsed=JSON.parse(before);let after=before;
for(const[id,next]of Object.entries(requires)){
 const page=parsed.pages.find(p=>p.id===id);assert(page);page.requires=next;
 const escaped=id.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),marker=new RegExp(`"id"\\s*:\\s*"${escaped}"`).exec(after);assert(marker);
 const begin=after.lastIndexOf('{',marker.index);let depth=0,str=false,esc=false,start=-1,span;
 for(let i=begin;i<after.length;i++){
  const c=after[i];if(str){if(esc){esc=false;continue;}if(c==='\\'){esc=true;continue;}if(c==='"'){str=false;
   if(depth===1&&JSON.parse(after.slice(start,i+1))==='requires'){
    const a=/^\s*:\s*\[/.exec(after.slice(i+1));assert(a);const at=i+1+a[0].length-1;
    let j=at+1,n=1,s=false,e=false;for(;j<after.length&&n;j++){const v=after[j];if(s){if(e)e=false;else if(v==='\\')e=true;else if(v==='"')s=false;}else if(v==='"')s=true;else if(v==='[')n++;else if(v===']')n--;}
    assert.equal(n,0);span={at,end:j};
   }
  }}else if(c==='"'){str=true;start=i;}else if(c==='{')depth++;else if(c==='}'&&--depth===0)break;
 }
 assert(span,`Actual top-level requires field missing: ${id}`);
 const keyStart=after.lastIndexOf('\n',span.at)+1,indent=after.slice(keyStart,span.at).match(/^\s*/)[0];
 const replacement=JSON.stringify(next,null,2).split('\n').map((s,i)=>i?indent+s:s).join('\n');
 after=after.slice(0,span.at)+replacement+after.slice(span.end);
}
assert.deepEqual(JSON.parse(after),parsed,'No unrelated plan metadata or item transcription allowed');
changes.push({file,before,after,purpose:'Surgical49top-levelrequires arrays only; all unrelated plan bytes preserved.'});
fs.writeFileSync(`${D}/root-apply-plan.json`,JSON.stringify({version:1,run:RUN,authorized_by:'/root',diagnostic:'/tmp/prestige-validate-plan-complete/classified-diagnostics.json',items:1471,pages:218,batches:109,requires_overrides:requires,page_order_overrides:{},witnesses:evidence.rows,changes,remaining_separate:'6B-leaf and5resolve findings are not repaired or waived by this proposal.',limits:['No validator rerun/proof reading/hashes/gates/native controls/canonical writes.','No new items/pages/homes;560providers remain context.']},null,2)+'\n');
console.log(JSON.stringify({edges:82,pages:Object.keys(requires).length,order_changes:0,files:changes.length}));
