import {readFileSync, writeFileSync} from 'node:fs';
import {parseFrontmatter} from '../tools/physics-support/content-policy-lib.mjs';
import {splitFrontmatter} from '../tools/physics-support/facts-block.mjs';

// Invoke only through step5-shared-write-lock.mjs run. Reread the owning
// manifest inside the critical section and change only the assigned rows.
const path='research/physics-td-qft-rpm-62-2026-10-14-batch-7.pages.json';
const pages=JSON.parse(readFileSync(path,'utf8'));
for (const id of ['def-td-adiabatic-accessibility','def-td-scaled-products-and-comparison']) {
  const rows=pages.flatMap(page=>[...(page.items??[]),...(page.examples??[])])
    .filter(row=>row.id===id);
  if(rows.length!==1) throw Error(`Expected one owning manifest row for ${id}`);
  const source=readFileSync(`items/${id}.md`,'utf8');
  const fm=parseFrontmatter(splitFrontmatter(source).fm);
  const definition=source.split('## Definition\n')[1]?.trim();
  if(!definition || fm.id!==id || fm.status!=='draft') throw Error(`Invalid assigned carrier ${id}`);
  rows[0].statement=definition;
  rows[0].deps=fm.deps;
  rows[0].dependency_roles=fm.dependency_roles;
  if(rows[0].deps.some(dep=>!rows[0].dependency_roles[dep])) throw Error(`Missing role for ${id}`);
}
writeFileSync(path,JSON.stringify(pages,null,2)+'\n');
const checked=JSON.parse(readFileSync(path,'utf8'));
for(const id of ['def-td-adiabatic-accessibility','def-td-scaled-products-and-comparison']) {
  const row=checked.flatMap(page=>page.items??[]).find(row=>row.id===id);
  const source=readFileSync(`items/${id}.md`,'utf8');
  if(row.statement!==source.split('## Definition\n')[1].trim()) throw Error(`Stale definition for ${id}`);
}
console.log('PASS: two assigned manifest definitions and exact prerequisite metadata reconciled.');
