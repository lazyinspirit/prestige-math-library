#!/usr/bin/env node
// Prepared for root review; NOT executed by the preparation reviewer.
// Guard every source/proposal before archiving; replace each file atomically.
import{readFileSync as read,writeFileSync as write,existsSync as exists,lstatSync as stat,mkdirSync as mkdir,renameSync as rename,chmodSync as chmod}from'node:fs';import{resolve,join,dirname,relative}from'node:path';import{createHash,randomBytes}from'node:crypto';
const args=process.argv.slice(2),get=k=>args[args.indexOf(k)+1],sha=b=>createHash('sha256').update(b).digest('hex');
if(!args.includes('--apply-root-reviewed')||!args.includes('--proposal')||!args.includes('--proposal-sha'))throw Error('Require explicit --proposal FILE --proposal-sha SHA --apply-root-reviewed');
const root=process.cwd(),fail=s=>{throw Error(s)},path=p=>{const f=resolve(root,p);if(relative(root,f).startsWith('..'))fail('Outside repository');return f},regular=p=>{const f=path(p),s=stat(f);if(!s.isFile()||s.isSymbolicLink())fail('Nonregular source: '+p);return f};
const document=read(regular(get('--proposal')));if(sha(document)!==get('--proposal-sha'))fail('Proposal hash drift');const proposal=JSON.parse(document);
if(proposal.kind!=='format-only-statement-first-proposal'||proposal.items?.length!==15||proposal.run!=='machine-learning-all-101-2026-10-19')fail('Wrong bounded proposal');
const ids=new Set(),prepared=[];
for(const row of proposal.items){
 if(ids.has(row.item)||!['66','87','92'].includes(row.batch)||row.target!=='items/'+row.item+'.md')fail('Foreign/duplicate subject');ids.add(row.item);
 const before=read(regular(row.target)),archived=read(regular(row.before)),after=read(regular(row.proposed));
 if(sha(before)!==row.before_sha256||sha(archived)!==row.before_sha256||sha(after)!==row.after_sha256)fail('Source/proposal guard drift: '+row.item);
 // Exact reversible substrings and unchanged YAML independently bind format scope.
 let rebuilt=before.toString('utf8');for(const edit of row.edits){if(rebuilt.split(edit.source).length!==2)fail('Nonunique edit');rebuilt=rebuilt.replace(edit.source,edit.replacement);}
 if(rebuilt!==after.toString('utf8'))fail('Unexplained source delta: '+row.item);
 const fm=s=>s.slice(0,s.indexOf('\n---',4)+4);if(fm(before.toString())!==fm(after.toString()))fail('Frontmatter change');
 prepared.push({row,before,after,mode:stat(regular(row.target)).mode});
}
const archive=path('research/machine-learning-all-101-2026-10-19-statement-first-format-66-87-92-root-integration');if(exists(archive))fail('Nonoverwriting archive already exists');
// No live write or archive occurs until all fifteen exact source guards pass.
mkdir(archive,{recursive:true});mkdir(join(archive,'before'));
for(const {row,before}of prepared){const out=join(archive,'before',row.item+'.md');write(out,before,{flag:'wx'});if(sha(read(out))!==row.before_sha256)fail('Archive mismatch');}
const info={run:proposal.run,kind:'root-format-integration-only',proposal:relative(root,path(get('--proposal'))),proposal_sha256:sha(document),at:new Date().toISOString(),targets:prepared.map(({row})=>({path:row.target,before_sha256:row.before_sha256,after_sha256:row.after_sha256})),contract_changes:[],native_gate_credit:false,readiness_writes:false};
write(join(archive,'prepared.json'),JSON.stringify(info,null,2)+'\n',{flag:'wx'});
for(const {row}of prepared)if(sha(read(regular(row.target)))!==row.before_sha256)fail('Source changed after archive: '+row.item);
const applied=[];let success=false;
try{
 for(const {row,after,mode}of prepared){
  const dest=regular(row.target);if(sha(read(dest))!==row.before_sha256)fail('Late source race');const temp=dest+'.statement-first-'+randomBytes(8).toString('hex');write(temp,after,{flag:'wx'});chmod(temp,mode&0o777);rename(temp,dest);if(sha(read(dest))!==row.after_sha256)fail('Post-write mismatch');applied.push(row.target);
 }
 success=true;
}finally{write(join(archive,'result.json'),JSON.stringify({...info,finished_at:new Date().toISOString(),status:success?'integrated-root-full-scope-checks-still-owed':'partial-failure-no-automatic-rollback',applied},null,2)+'\n',{flag:'wx'});}
console.log(JSON.stringify({status:'integrated-format-only',items:applied.length,archive:relative(root,archive),native_gate_or_readiness_credit:false}));
