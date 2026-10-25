import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
import {frontierMathematicsImportScope} from '../../../tools/physics-support/frontier-import-scope.mjs';
import {readRunManifestPages} from '../../../tools/physics-support/run-manifest-pages.mjs';
import {markdownFiles,readItem} from '../../../tools/physics-support/physics-content.mjs';
import {readOriginalItemIdentity} from '../../../tools/physics-support/original-item-index.mjs';
import {recordedPublishedRepair} from '../../../tools/published-repair-policy.mjs';
import {splitFrontmatter,sectionText} from '../../../tools/physics-support/facts-block.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
const root=process.cwd(),run='advanced-qft-supersymmetry-build-2026-10-23',out=`research/${run}-owner-resolution/upstream-private89-final-currency-v1`,sha=b=>createHash('sha256').update(b).digest('hex'),guards=new Map();
const watch=p=>{let b=fs.readFileSync(p),h=sha(b);if(guards.has(p)&&guards.get(p)!==h)throw Error('input changed '+p);guards.set(p,h);return b};
if(sha(watch('tools/physics-support/original-presentation-maintenance.mjs'))!=='dfb1d21f47f007c94285b1f4959d4167053fd11754941ab17175778165b7da52'||sha(watch('tools/physics-support/original-rendering-maintenance.mjs'))!=='769601cb44a8f2f13c6d6a7c3552f6991d6fe5c6d72c9d9e5991278e4f2c11bb')throw Error('Root-cleared exact code guard');
const receipt=JSON.parse(watch('research/math-imports.json')),authorityPath=`research/${run}-original-rendering-maintenance.json`,authorityBytes=watch(authorityPath),authority=JSON.parse(authorityBytes);
if(sha(authorityBytes)!=='819455fafb5604b39c1ef8e09d935dcf9b499aeed9e7077993ba9d2c8bac5a2a')throw Error('not exact Root validated53');
if(authority.entries.length!==53)throw Error('not installed53');
const pages=readRunManifestPages(root,run),decls=new Map();for(const p of pages)for(const d of p.items)decls.set(d.id,d);if(decls.size!==442)throw Error('not442');
const originals={items:markdownFiles(path.join(receipt.source_root,'items')).map(readOriginalItemIdentity),pages:markdownFiles(path.join(receipt.source_root,'library')).filter(p=>!path.basename(p).startsWith('_')).map(p=>({...readItem(p),path:path.relative(receipt.source_root,p).split('\\').join('/')}))};
const scope=frontierMathematicsImportScope(root,run,{planning:false,receipt,originals}),pins=new Map(receipt.files.map(p=>[p.path,p])),installed=new Map(authority.entries.map(e=>[e.path,e])),fresh=[],old=[],categories=[];
const bfs=id=>{const paths=new Map([[id,[id]]]),q=[id];for(let i=0;i<q.length;i++)for(const c of scope.consumers.get(q[i])??[])if(!paths.has(c)){paths.set(c,[...paths.get(q[i]),c]);q.push(c)}return [...paths].filter(([c])=>scope.owned.has(c)).map(([id,witness_path])=>({id,witness_path}));};
for(const p of [...scope.paths].sort()){
 const pin=pins.get(p);if(!pin||sha(watch(p))!==pin.sha256)throw Error('pin changed '+p);
 const original=path.resolve(receipt.source_root,pin.source_path??p),after=watch(original),h=sha(after);if(h===pin.sha256)continue;
 if(installed.has(p)&&installed.get(p).original_sha256===h){old.push(p);continue}
 if(p.includes('/_category.md')){categories.push({path:p,sha256:h});continue}
 const before=watch(p),a=splitFrontmatter(after.toString()),b=splitFrontmatter(before.toString()),data=yaml().parse(a.fm),id=data.id,locator=data.verification?.repair;
 const row={id,path:p,pinned_sha256:pin.sha256,original_path:original,original_sha256:h,already_installed_other_version:installed.has(p),metadata_before:yaml().parse(b.fm),metadata_after:data,section_equal:Object.fromEntries(['Statement','Definition','Facts & Assumptions'].map(k=>[k,sectionText(a.body,k)===sectionText(b.body,k)])),extraction_intentionally_omitted:'Final code cleared; this is source inventory only, exact typed extraction is a separate guarded operation',repair:locator?recordedPublishedRepair(receipt.source_root,id,after.toString(),locator):{ok:false,reason:'No finalized verification.repair locator on actual current original'},consumers:bfs(id)};
 for(const c of row.consumers){c.source_path=`items/${c.id}.md`;c.source_sha256=sha(watch(c.source_path));c.declaration_sha256=sha(JSON.stringify(decls.get(c.id)));c.direct=c.witness_path.length===2;const source=fs.readFileSync(c.source_path,'utf8');c.supplier_link_lines=source.split('\n').map((line,i)=>({line:i+1,text:line})).filter(x=>x.text.includes(`[[${id}`));}
 row.direct_consumers=[...(scope.consumers.get(id)??[])].map(c=>({id:c,path:`items/${c}.md`,sha256:sha(watch(`items/${c}.md`)),owned:scope.owned.has(c)}));
 fs.mkdirSync(`${out}/observed`,{recursive:true});fs.writeFileSync(`${out}/observed/${id}.pinned.md`,before);fs.writeFileSync(`${out}/observed/${id}.original.md`,after);fresh.push(row);
}
for(const [p,h] of guards)if(sha(fs.readFileSync(p))!==h)throw Error('input changed at final check '+p);
const result={kind:'read-only current-scope source observation; no authority/acceptance',observed_at:new Date().toISOString(),installed_authority:{path:authorityPath,sha256:sha(authorityBytes),entries:53,bytes_unchanged:true},scope:{pages:pages.length,owned:decls.size,reached_paths:scope.paths.size},installed_current_versions:old.length,category_context:categories,new_reached_items:fresh,guards:Object.fromEntries(guards),reading_limits:'Graph paths are actual current dependency uses, not assertions that all endpoint proofs were read. Current new original and direct consumers require separate actual reading. No external paper reading or new acceptance.'};
fs.writeFileSync(`${out}/observation.json`,JSON.stringify(result,null,2)+'\n');fs.writeFileSync(`${out}/installed53-authority.preimage.json`,authorityBytes);
console.log(JSON.stringify({new:fresh.map(r=>({id:r.id,original_sha256:r.original_sha256,repair:r.repair,direct:r.direct_consumers.length,owned_consumers:r.consumers.length})),scope:result.scope,old:old.length,categories:categories.length}));
