import{readFileSync,writeFileSync,openSync,closeSync,existsSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{loadStep3}from'../../tools/frontier-snapshot.mjs';
import{dependencyLevels}from'../../tools/item-dependency-levels.mjs';
import{yaml}from'../../tools/pathway-lib.mjs';
import{splitFrontmatter}from'../../tools/step6-lib.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,prefix=`${base}/step2-gate-repair2`;
if(existsSync(`${prefix}-source-preparation.json`))throw Error('Already prepared');
const state=JSON.parse(readFileSync(`.autopilot/${run}/state.json`));
if(!state.paused||Object.values(state.dispatches).some(d=>!d.endedAt))throw Error('Native work not paused/drained');
const snapshot=loadStep3(process.cwd(),run),graph=dependencyLevels(snapshot.pages);
if(graph.errors.length)throw Error(graph.errors.join('\n'));
const rows=[...graph.items].sort(([a],[b])=>graph.levels.get(a)-graph.levels.get(b)||a.localeCompare(b));
const errors=[];
for(const[id,{item}]of rows){const fm=yaml().parse(splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).frontmatter);
 if(fm.id!==id||fm.kind!==item.kind||fm.title!==item.title||fm.dependency_level!==graph.levels.get(id)||fm.status!=='draft')errors.push(`metadata ${id}`);
 for(const f of ['deps','justified_by','forward_refs'])if(JSON.stringify([...(fm[f]??[])].sort())!==JSON.stringify([...(item[f]??[])].sort()))errors.push(`${f} mirror ${id}`);
}
for(const page of snapshot.pages){const path=`library/${page.category}/${page.id}.md`,fm=yaml().parse(splitFrontmatter(readFileSync(path,'utf8')).frontmatter),listed=[...(fm.items??[]),...(fm.examples??[])];
 if(fm.page!==page.id||fm.status!=='draft'||listed.length!==page.items.length||new Set(listed).size!==listed.length||page.items.some(i=>!listed.includes(i.id)))errors.push(`page inventory ${page.id}`);
}
if(snapshot.items.size!==1467||snapshot.pages.length!==142||snapshot.pairs.size!==71||errors.length)throw Error(JSON.stringify({items:snapshot.items.size,pages:snapshot.pages.length,pairs:snapshot.pairs.size,errors}));
const files=rows.map(([id])=>`items/${id}.md`),pages=snapshot.pages.map(p=>`library/${p.category}/${p.id}.md`),results=[];
writeFileSync(`${prefix}-dependency-ordered-files.json`,JSON.stringify(files,null,2)+'\n');
function runCheck(name,args){const out=`${prefix}-${name}.out`,err=`${out}.stderr`,fd=openSync(out,'w'),ef=openSync(err,'w');let result;try{result=spawnSync(process.execPath,args,{stdio:['ignore',fd,ef],timeout:600000});}finally{closeSync(fd);closeSync(ef);}results.push({name,command:[process.execPath,...args],stdout:out,stderr:err,exit_code:result.status,error:result.error?.message,at:new Date().toISOString()});console.log(JSON.stringify({name,exit_code:result.status,stdout:out,subjects:files.length}));if(result.error||result.status!==0)throw Error(`${name} failed; inspect actual output`);}
runCheck('precheck',['tools/tsx-run.mjs','tools/precheck.mts','--json',...files]);
runCheck('render',['tools/rendercheck.mjs','--json',...files,...pages]);
runCheck('layout',['tools/proof-layout.mjs',...files]);
writeFileSync(`${prefix}-source-preparation.json`,JSON.stringify({run,at:new Date().toISOString(),items:files.length,pages:pages.length,pairs:71,metadata_errors:errors,source_order:'actual current manifest graph dependency level, then id',results,mathematical_review:false,native_gate_credit:false},null,2)+'\n',{flag:'wx'});
