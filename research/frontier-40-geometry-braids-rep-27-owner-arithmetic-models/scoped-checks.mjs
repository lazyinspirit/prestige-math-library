import{readFileSync,writeFileSync,existsSync}from'node:fs';
import{dependencyLevels}from'../../tools/item-dependency-levels.mjs';
const root=process.cwd(),run='frontier-40-geometry-braids-rep-27';
const pages=JSON.parse(readFileSync(`${root}/research/${run}-batch-27.pages.json`,'utf8'));
const r=dependencyLevels(pages);const missing=[];
for(const[id,{item}]of r.items)for(const dep of item.deps)if(!r.items.has(dep)&&!existsSync(`${root}/items/${dep}.md`))missing.push({id,dep});
const result={scope:'batch27-only',items:r.items.size,page_counts:pages.map(p=>({page:p.id,items:p.items.length})),max_level:Math.max(...r.levels.values()),dependency_errors:r.errors,missing_published_or_local_ids:missing,checked_at:new Date().toISOString()};
writeFileSync(`${root}/research/${run}-owner-arithmetic-models/scoped-dependency-check.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
if(r.errors.length||missing.length)process.exitCode=1;
