// One current, dependency-ordered formatting/metadata pass; no content audit.
import{readFileSync,writeFileSync,mkdirSync,readdirSync,openSync,closeSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{createHash}from'node:crypto';
import{yaml,split}from'../../tools/physics-support/pathway-lib.mjs';
import{splitFrontmatter}from'../../tools/physics-support/step6-lib.mjs';
import{REPO,WEB_DIR}from'../../tools/physics-support/paths.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',state=`.physics-autopilot/${run}`;
const read=p=>JSON.parse(readFileSync(p,'utf8')),digest=b=>createHash('sha256').update(b).digest('hex');
const request=read(`${state}/owner-gate-request.json`),started=new Date().toISOString();
if(request.consumedAt||request.snapshot.items.length===0)throw Error('No fresh nonempty native request');
const archive=`${state}/owner-format-recertification/${request.attempt}/${started.replace(/[:.]/g,'-')}`;mkdirSync(archive,{recursive:true});
writeFileSync(`${archive}/request.json`,JSON.stringify(request,null,2)+'\n');
const pages=readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).flatMap(n=>read(`research/${n}`));
const planned=new Map(pages.flatMap(p=>p.items).map(i=>[i.id,i]));
const files=request.snapshot.items.map(i=>`items/${i.id}.md`),pageFiles=pages.map(p=>`library/${p.category}/${p.id}.md`);
const categoryFiles=[...new Set(pages.map(p=>`library/${p.category}/_category.md`))];
const unchanged=()=>request.snapshot.inputs.every(input=>{
 try{return digest(readFileSync(input.path))===input.sha256}catch(error){if(error.code==='ENOENT')return input.sha256===null;throw error;}
});
if(!unchanged())throw Error('Native request inputs stale before review; wait for a fresh request');
const checks=[];
function check(name,argv){
 const r=spawnSync(process.execPath,argv,{encoding:'utf8',maxBuffer:64*1024*1024,timeout:300000});
 const path=`${archive}/${name}.txt`;writeFileSync(path,(r.stdout??'')+(r.stderr??''));
 const result={name,argv:['node',...argv],exit_code:r.status,error:r.error?.message,evidence:path};checks.push(result);
 console.log(JSON.stringify({check:name,exit_code:r.status,evidence:path}));
 return r.stdout?JSON.parse(r.stdout):null;
}
// Keep each JSON emission below the pipe buffer: the normative CLI exits
// immediately after writing, so a large single document can be truncated.
const pre={results:[]};
for(let offset=0;offset<files.length;offset+=16){
 const group=check(`precheck-${offset/16+1}`,['tools/physics-support/tsx-run.mjs','tools/physics-support/precheck.mts',...files.slice(offset,offset+16),'--json']);
 pre.results.push(...group.results);
}
writeFileSync(`${archive}/precheck.txt`,JSON.stringify(pre,null,2)+'\n');
const rendered=check('rendercheck',['tools/physics-support/rendercheck.mjs',...files,...pageFiles,...categoryFiles,'--json']);
const physics=check('metadata',['tools/physics-support/physics-check.mjs','--run',run,'--json']);
const preRows=new Map((pre?.results??[]).map(r=>[r.file,r])),renderFailures=new Set((rendered?.errors??[]).map(e=>e.file));
const results=[],failures=[];
const chunkSize=64;
for(let offset=0;offset<files.length;offset+=chunkSize){
 const chunk=files.slice(offset,offset+chunkSize),inputs=chunk.map(file=>{
  const raw=readFileSync(file,'utf8'),{body}=splitFrontmatter(raw);
  return{file,body,linesBeforeBody:raw.slice(0,raw.length-body.length).split('\n').length-1};
 });
 // A seekable stdin file avoids Node26's nonblocking-pipe EAGAIN. This invokes
 // the identical normative proof-layout renderer without changing its code.
 const inputPath=`${archive}/layout-${offset/chunkSize+1}.input.json`;writeFileSync(inputPath,JSON.stringify(inputs));
 const fd=openSync(inputPath,'r');let output;
 try{output=spawnSync(process.execPath,[`${REPO}/tools/physics-support/tsx-run.mjs`,`${REPO}/tools/physics-support/proof-layout-render.mts`],{cwd:WEB_DIR,stdio:[fd,'pipe','pipe'],encoding:'utf8',maxBuffer:64*1024*1024,timeout:300000});}finally{closeSync(fd);}
 if(output.error||output.status!==0)throw Error(`Normative layout renderer failed: ${output.error?.message??output.stderr}`);
 const layout=JSON.parse(output.stdout);
 if(layout.length!==chunk.length||layout.some((item,i)=>item.file!==chunk[i]))throw Error('Incomplete renderer coverage');
 for(let i=0;i<layout.length;i++)for(const error of layout[i].errors)error.line+=inputs[i].linesBeforeBody;
 writeFileSync(`${archive}/layout-${offset/chunkSize+1}.json`,JSON.stringify(layout,null,2)+'\n');
 for(const carrier of layout){
  const id=carrier.file.slice(6,-3),raw=readFileSync(carrier.file,'utf8'),parts=split(raw),fm=yaml().parse(parts.fm),manifest=planned.get(id),snapshot=request.snapshot.items[results.length],errors=[];
  if(snapshot.id!==id||digest(raw)!==snapshot.carrierSha256||digest(JSON.stringify(manifest))!==snapshot.manifestSha256)errors.push('Changed carrier or manifest hash');
  if(fm.id!==id||fm.status!=='draft'||!['physics','mathematics'].includes(fm.domain))errors.push('Invalid source identity/status/domain');
  const headings=fm.kind==='counterexample'?['Statement refuted','Counterexample']:fm.kind==='example'?['Example']:[];
  for(const heading of headings)if(!new RegExp(`^## ${heading}\\s*$`,'m').test(parts.body))errors.push(`Missing canonical ${fm.kind} section ${heading}`);
  if(fm.kind==='example'&&/^## Proof\s*$/m.test(parts.body))errors.push('Example numbered argument belongs under Verification');
  if(fm.kind!==manifest.kind||fm.domain!==manifest.domain)errors.push('Source/manifest kind or domain disagreement');
  if(JSON.stringify([...(fm.deps??[])].sort())!==JSON.stringify([...(manifest.deps??[])].sort()))errors.push('Source/manifest dependencies disagree');
  if(!Number.isSafeInteger(fm.dependency_level)||fm.dependency_level!==manifest.dependency_level)errors.push('Invalid source/manifest numeric dependency level');
  for(const dep of fm.deps??[])if(!fm.dependency_roles?.[dep])errors.push(`Missing dependency role ${dep}`);
  for(const error of physics?.errors??[])if(error.id===id)errors.push(`Class metadata ${error.code}: ${error.message}`);
  if(!preRows.has(carrier.file)||!['pass','not-applicable'].includes(preRows.get(carrier.file).status))errors.push(`Precheck ${preRows.get(carrier.file)?.status??'missing'}`);
  if(renderFailures.has(carrier.file)||renderFailures.has(`/Users/ianx/Projects/prestige-math-library/physics/${carrier.file}`))errors.push('Renderer formatting failure');
  if(carrier.errors.length)errors.push(...carrier.errors.map(e=>`${e.gate}/${e.code}: ${e.message}`));
  if(errors.length)failures.push({id,errors});
  results.push({...snapshot,verdict:errors.length?'format-metadata-fail':'format-metadata-pass',formatting:{verdict:errors.length?'fail':'pass',evidence:`Current normative phase/nonproof precheck: ${archive}/precheck.txt; YAML and real KaTeX rendering: ${archive}/rendercheck.txt; exact actual-renderer proof-row/chip check: ${archive}/layout-${offset/chunkSize+1}.json. Applicable nonproof exemptions retained.`},metadata:{verdict:errors.length?'fail':'pass',evidence:`Current source and manifest identity/kind/domain/draft status, source dependency set/roles and numeric level compared directly, and exact carrier/manifest hashes checked in native dependency order. Scoped class metadata/import resolution: ${archive}/metadata.txt.`}});
 }
 if(offset%64===0)console.log(JSON.stringify({recertified:results.length,total:files.length,failures:failures.length}));
}
const latest=read(`${state}/owner-gate-request.json`),inputsCurrent=unchanged()&&latest.attempt===request.attempt&&latest.snapshot.sha256===request.snapshot.sha256;
const globalFailure=checks.some(c=>c.exit_code!==0)||Boolean(physics?.errors?.length)||Boolean(rendered?.errors?.length);
const report={run,attempt:request.attempt,reviewStartedAt:started,reviewedAt:new Date().toISOString(),checks,items:results,failures,globalFailure,inputsCurrent};
writeFileSync(`${archive}/report.json`,JSON.stringify(report,null,2)+'\n');
if(failures.length||globalFailure||!inputsCurrent){console.log(JSON.stringify({passed:false,failures,globalFailure,inputsCurrent,report:`${archive}/report.json`}));process.exitCode=1;}
else{
 const receipt={version:2,recertificationScope:'formatting-metadata-only',attempt:request.attempt,snapshotSha256:request.snapshot.sha256,reviewer:'/root',writersDrained:true,writerScopes:[],reviewStartedAt:started,reviewedAt:report.reviewedAt,items:results};
 writeFileSync(`${archive}/receipt.proposed.json`,JSON.stringify(receipt,null,2)+'\n');
 console.log(JSON.stringify({passed:true,items:results.length,receipt_proposal:`${archive}/receipt.proposed.json`,report:`${archive}/report.json`}));
}
