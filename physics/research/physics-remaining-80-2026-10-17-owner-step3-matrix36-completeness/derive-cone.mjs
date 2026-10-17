import fs from 'node:fs';
import path from 'node:path';
import {consumers} from '../../tools/physics-support/batch-scope-review.mjs';
import {frontmatterList} from '../../tools/physics-support/frontmatter-list.mjs';
const root=process.cwd(), dir=path.join(root,'research/physics-remaining-80-2026-10-17-owner-step3-matrix36-completeness');
function readDir(folder){return fs.readdirSync(folder).filter(n=>n.endsWith('.md')).map(n=>{const text=fs.readFileSync(path.join(folder,n),'utf8'),fm=text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'';return {id:n.slice(0,-3),deps:[...new Set(['deps','justified_by','forward_refs'].flatMap(k=>frontmatterList(fm,k)))],references:[...text.matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)].map(m=>m[1]),aliases:frontmatterList(fm,'aliases')};});}
const old=readDir(path.join(root,'research/physics-remaining-80-2026-10-17-owner-step2-source-preimages-60/items'));
const current=readDir(path.join(root,'items'));
const rows=consumers(root,['lem-qsm-matrix-state-calculus'],old,current);
fs.writeFileSync(path.join(dir,'consumer-cone.json'),JSON.stringify({method:'Actual canonical physics-support consumers export; old/current deps + justified_by + forward_refs + all wikilinks, aliases, including published current items; old genuine709 preimages60.',old_count:old.length,current_count:current.length,rows},null,2)+'\n');
console.log(rows.length);console.log(rows.map(r=>r.id).join('\n'));
