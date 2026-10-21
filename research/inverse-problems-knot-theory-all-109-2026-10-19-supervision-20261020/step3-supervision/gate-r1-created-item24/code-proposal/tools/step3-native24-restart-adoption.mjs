// Exact failed-native-birth / successful-restart adoption. No logged code executes.
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
export const NATIVE24_ORIGIN_POLICY='native-created-step3-restart-adoption-v3';
export const NATIVE24_EVIDENCE_POLICY='native-created-step3-restart-adoption-evidence-v3';
const CASE={"run": "inverse-problems-knot-theory-all-109-2026-10-19", "id": "lem-ip-conditional-flow-matching-population-and-exact-flow-meaning", "page": "conditional-flow-matching-for-inverse-posteriors", "batch": "24"};
const PINNED_REFS={
  "failed_result": "2a6b43a754fac24bf19127a9aa1758eb9d842bc64c86c69cf8d8a332ddf139ab",
  "failed_prompt": "83cd1c78487e817b9bef1d09077074327dffdc2c1cd6643e65ea0539a7133edb",
  "failed_log": "c04fd67e16e81b5d99bc26e9a4c6977a3ed2e8de0ed8dfc89337725d13d0d831",
  "adopter_result": "49230afc1801fdb7d7b05e65e80737cd6476fce6c54eba3698baf47a0a3f3f3e",
  "adopter_prompt": "83cd1c78487e817b9bef1d09077074327dffdc2c1cd6643e65ea0539a7133edb",
  "adopter_log": "fb7de5c58771c08e2bd9efe170ea6453eecaf5c72691de53285d6d3ac747fddc",
  "adopter_report": "53e822e8ee147c79beba740a518fc1f2d427a10213815a83e991f617f25b2a06",
  "adopter_decisions": "18368cda9fd166c5d89cb3531c413f8918f86c8c399b676e6d51766e790fc710",
  "baseline": "5139bc9784dca75d1feec858f718775873122ce4bca898e4f425b98ae8af0371",
  "reader_post": "7376b991d16e769e40d293119cbc4ab058615144dd9f7cb38e90f98185356145",
  "algorithm_input": "01c2ef80f44462e166f29f5b8304318f8577bc092325e79c5d2e042e79713431",
  "native_item": "9ed5d76ab89500e73bcc5abdea0f2ed0a13f4ab3b9eaba55c372de42035f45c8",
  "native_manifest": "6311bec2218ea123cac1e45a0f103b7d26116628fcfafdd2c8941c098c77593d",
  "native_contract": "e160a0dc3fc2deb45207e4cc518b556b627177fb8d6a59c41a085ec377824252"
};
const need=(x,m)=>{if(!x)throw Error('Step-3 native24 adoption: '+m)};
const sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x)));
export function native24EvidenceRefs(receipt){
 const s=receipt.metadata_replay;
 return [s.root_pins,s.failed_creator.result,s.failed_creator.prompt,s.algorithm_input,s.reader_post,s.adopter_report,s.adopter_decisions];
}
export function replayNative24(root,run,id,receipt,read){
 const s=receipt.metadata_replay;
 need(run===CASE.run&&id===CASE.id&&String(receipt.batch)===CASE.batch&&receipt.page===CASE.page&&receipt.author_result==='alpha-3a-batch-24.attempt-2.result.json','wrong exact native case/home/author');
 need(receipt.native_metadata_capture===undefined&&receipt.replay===undefined&&s&&Object.keys(s).every(k=>['policy','root_pins','failed_creator','algorithm_input','reader_post','adopter_report','adopter_decisions'].includes(k))&&s.policy==='native24-failed-birth-successful-restart-adoption-v1','explicit restart-adoption evidence required');
 need(s.failed_creator&&Object.keys(s.failed_creator).sort().join(',')==='log,prompt,result','invalid failed creator references');
 const guard=JSON.parse(read(s.root_pins));
 need(guard.version===1&&guard.run===run&&guard.id===id&&guard.batch===CASE.batch&&guard.page===CASE.page&&guard.owner_identity==='/root'&&Number.isFinite(Date.parse(guard.recorded_at))&&Date.parse(guard.recorded_at)<=Date.parse(receipt.recorded_at),'wrong root case guard');
 const refs={...s.failed_creator};
 const all={failed_result:refs.result,failed_prompt:refs.prompt,failed_log:refs.log,
  adopter_result:receipt.author_evidence.result,adopter_prompt:receipt.author_evidence.prompt,adopter_log:receipt.author_evidence.log,
  adopter_report:s.adopter_report,adopter_decisions:s.adopter_decisions,
  baseline:guard.refs?.baseline,reader_post:s.reader_post,algorithm_input:s.algorithm_input,
  native_item:receipt.native_item,native_manifest:receipt.native_manifest,native_contract:receipt.native_contract};
 need(guard.refs&&Object.keys(guard.refs).sort().join(',')===Object.keys(PINNED_REFS).sort().join(','),'wrong exact root ref inventory');
 for(const [key,digest]of Object.entries(PINNED_REFS))need(guard.refs[key]?.sha256===digest&&all[key]?.sha256===digest&&hash(guard.refs[key])===hash(all[key]),'changed exact root case reference '+key);
 const raw={};for(const [key,ref]of Object.entries(all))raw[key]=read(ref);
 const failed=JSON.parse(raw.failed_result),adopter=JSON.parse(raw.adopter_result),baseline=JSON.parse(raw.baseline);
 for(const [attempt,result,kind]of [[1,failed,'failed'],[2,adopter,'adopter']]){
  need(result.run===run&&result.role==='alpha'&&result.label==='3a-batch-24'&&result.attempt===attempt&&result.evidence_tag===`.attempt-${attempt}`&&result.covers?.length===1&&result.covers[0]==='24'&&result.timed_out===false&&result.written_by!=='autopilot'&&typeof result.session_id==='string'&&result.session_id.trim()&&result.terminal_summary?.available===true&&result.terminal_summary?.last_event==='task_complete'&&result.terminal_summary?.task_completed===true&&result.terminal_summary?.task_aborted===false,'invalid native '+kind+' identity/terminal');
  const ok=attempt===2;
  need(result.ok===ok&&result.exit_code===(ok?0:1)&&result.process_exit_code===(ok?0:1)&&result.terminal_summary.final_response_present===ok,'failed birth or successful adoption status changed');
  const stem=`research/${run}-dispatch/alpha-3a-batch-24.attempt-${attempt}`;
  need(all[kind==='failed'?'failed_result':'adopter_result'].path===stem+'.result.json'&&all[kind==='failed'?'failed_prompt':'adopter_prompt'].path===stem+'.prompt.md'&&all[kind==='failed'?'failed_log':'adopter_log'].path===stem+'.log'&&result.prompt?.endsWith('/'+stem+'.prompt.md')&&result.log?.endsWith('/'+stem+'.log'),'native attempt/prompt/log mismatch');
  const prompt=raw[kind==='failed'?'failed_prompt':'adopter_prompt'].toString();
  need(prompt.includes(`\n# This dispatch\n\nrun: ${run}\nrole: alpha\nlabel: 3a-batch-24\ncovers: 24\n`),'wrong native assignment');
 }
 need(failed.session_id!==adopter.session_id&&[baseline.at,failed.started_at,failed.ended_at,adopter.started_at,adopter.ended_at,guard.recorded_at,receipt.recorded_at].every(v=>Number.isFinite(Date.parse(v)))&&Date.parse(baseline.at)<=Date.parse(failed.started_at)&&Date.parse(failed.started_at)<=Date.parse(failed.ended_at)&&Date.parse(failed.ended_at)<Date.parse(adopter.started_at)&&Date.parse(adopter.started_at)<=Date.parse(adopter.ended_at)&&Date.parse(adopter.ended_at)<=Date.parse(guard.recorded_at),'restart chronology not genuine');
 need(!baseline.items.some(x=>x.id===id)&&!baseline.existing_item_files.includes(id),'baseline already contains item');
 const post=JSON.parse(raw.reader_post);
 need(post.version===2&&post.run===run&&String(post.batch)==='24'&&post.label==='post'&&post.hashes?.['alg-ip-conditional-flow-matching']?.item_sha256===sha(raw.algorithm_input),'actual historical algorithm input not bound');
 need(raw.adopter_report.toString().includes(id),'actual successful adoption report omits helper');
 const decisions=JSON.parse(raw.adopter_decisions);
 need(decisions.run===run&&decisions.group==='batch-24'&&decisions.decisions?.some(d=>d.obligation==='refuter:24:1'&&d.id==='alg-ip-conditional-flow-matching'&&d.verdict==='confirmed_nonfatal'),'actual native repair decision missing');
 const data={run,id,birth_log:raw.failed_log.toString(),adopter_log:raw.adopter_log.toString(),algorithm_input:raw.algorithm_input.toString(),native_item:raw.native_item.toString(),adoption_inputs:{
  [`items/${id}.md`]:raw.native_item.toString(),[`research/${run}-batch-24.pages.json`]:raw.native_manifest.toString(),[`research/${run}-batch-24.proof-contracts.json`]:raw.native_contract.toString()}};
 const result=spawnSync('python3',['-I','-c',SCRIPT],{input:JSON.stringify(data),encoding:'utf8',timeout:15000,maxBuffer:2*1024*1024});
 need(!result.error&&result.status===0,'static replay/adoption rejected: '+(result.stderr||result.error||''));
 const replay=JSON.parse(result.stdout),manifest=JSON.parse(raw.native_manifest),contracts=JSON.parse(raw.native_contract);
 const rows=(Array.isArray(manifest)?manifest:manifest.pages??[]).flatMap(p=>(p.items??[]).filter(x=>x.id===id).map(item=>({page:p.id,item})));
 need(rows.length===1&&rows[0].page===receipt.page&&contracts.contracts?.[id],'adopted selected metadata missing');
 return {...replay,policy:s.policy,manifest_sha256:hash({...rows[0].item,__step4_page_id:receipt.page}),contract_sha256:hash(contracts.contracts[id]),failed_creator_result_sha256:all.failed_result.sha256,successful_adopter_result_sha256:all.adopter_result.sha256};
}
const SCRIPT=String.raw`import ast,hashlib,json,re,shlex,sys
x=json.load(sys.stdin);run=x['run'];target=x['id'];source_id='alg-ip-conditional-flow-matching'
def need(ok,msg):
 if not ok:raise ValueError(msg)
sha=lambda s:hashlib.sha256(s.encode()).hexdigest()
def commands(log):
 pattern=r'^exec\n(/bin/bash -lc (?:(?!\nexec\n)[\s\S])*?) in /home/lazyinspirit/Projects/prestige-math-library\n (succeeded in [^\n]*|exited [^\n]*)'
 ms=list(re.finditer(pattern,log,re.M));out=[]
 for j,m in enumerate(ms):
  args=shlex.split(m[1]);need(len(args)==3 and args[:2]==['/bin/bash','-lc'],'bad shell grammar')
  output=log[m.end():ms[j+1].start()if j+1<len(ms)else len(log)]
  out.append(dict(shell=args[2],output=output,status=m[2],at=m.start(),command_sha256=sha(m[1])))
 return out
birth=commands(x['birth_log']);adopt=commands(x['adopter_log'])
creation=[c for c in birth if "pathlib.Path('items/'+nid+'.md').write_text(new)" in c['shell']]
need(len(creation)==1,'missing/duplicate initial creator');creation=creation[0]
need(creation['status']=='succeeded in 0ms:'and 'created '+target in creation['output'],'creation command not successful')
algorithm=x['algorithm_input'];need(x['birth_log'].count(algorithm)==1,'algorithm full bytes not unique')
reads=[c for c in birth if c['at']<creation['at']and c['status'].startswith('succeeded')and algorithm in c['output']and 'cat items/'+source_id+'.md' in c['shell']]
need(len(reads)==1,'no unique successful complete algorithm read')
def parse(c):
 need(c['shell'].startswith("python3 - <<'PY'\n")and c['shell'].count("python3 - <<'PY'\n")==1,'unsupported writer shell')
 body=c['shell'].split("python3 - <<'PY'\n",1)[1].split('\nPY',1)[0]
 return ast.parse(body)
def literal(n,env):
 if isinstance(n,ast.Constant)and type(n.value)in(str,int):return n.value
 if isinstance(n,ast.Name)and n.id in env:return env[n.id]
 if isinstance(n,ast.List):return[literal(v,env)for v in n.elts]
 if isinstance(n,ast.BinOp)and isinstance(n.op,ast.Add):return literal(n.left,env)+literal(n.right,env)
 if isinstance(n,ast.Subscript):
  value=literal(n.value,env)
  if isinstance(n.slice,ast.Slice):return value[slice(literal(n.slice.lower,env)if n.slice.lower else None,literal(n.slice.upper,env)if n.slice.upper else None,literal(n.slice.step,env)if n.slice.step else None)]
  return value[literal(n.slice,env)]
 if isinstance(n,ast.GeneratorExp):
  need(len(n.generators)==1,'nested generator');g=n.generators[0]
  need(isinstance(g.target,ast.Name)and not g.ifs and not g.is_async,'unsupported generator')
  values=literal(g.iter,env);need(isinstance(values,list),'nonfinite generator')
  return[literal(n.elt,env|{g.target.id:v})for v in values]
 if isinstance(n,ast.Call)and not n.keywords:
  args=[literal(a,env)for a in n.args]
  if isinstance(n.func,ast.Attribute)and n.func.attr in ['split','strip','rstrip','replace','index','join']:
   value=literal(n.func.value,env);need(type(value)==str,'nonstring transform')
   if n.func.attr=='split':need(len(args)in(0,1,2),'split arity');return value.split(*args)
   if n.func.attr=='strip':need(len(args)in(0,1),'strip arity');return value.strip(*args)
   if n.func.attr=='rstrip':need(len(args)in(0,1),'rstrip arity');return value.rstrip(*args)
   if n.func.attr=='replace':need(len(args)in(2,3)and type(args[0])==str and args[0]and type(args[1])==str,'replacement grammar');return value.replace(*args)
   if n.func.attr=='index':need(len(args)==1 and type(args[0])==str,'index grammar');return value.index(*args)
   if n.func.attr=='join':need(len(args)==1 and type(args[0])==list and all(type(v)==str for v in args[0]),'join grammar');return value.join(args[0])
  if ast.unparse(n.func)=='re.findall':
   need(len(n.args)==3 and isinstance(n.args[2],ast.Attribute)and ast.unparse(n.args[2])=='re.M','regex flags')
  if isinstance(n.func,ast.Attribute)and n.func.attr=='read_text'and not n.args:
   path=literal(n.func.value,env);need(path in ['items/'+source_id+'.md','items/'+target+'.md'],'unbound input path');return env['__algorithm']if path=='items/'+source_id+'.md'else env['__source']
  if ast.unparse(n.func)=='pathlib.Path':need(len(args)==1 and type(args[0])==str,'path grammar');return args[0]
 raise ValueError('unsupported literal expression: '+ast.dump(n))
# Only the exact fixed dependency regex is admitted, not arbitrary logged regex/code.
def value(n,env):
 if isinstance(n,ast.Call)and ast.unparse(n.func)=='re.findall':
  need(not n.keywords and len(n.args)==3 and literal(n.args[0],env)=='^  - (.+)$'and ast.unparse(n.args[2])=='re.M','unexpected dependency extraction')
  return re.findall('^  - (.+)$',literal(n.args[1],env),re.M)
 return literal(n,env)
def replay_writer(c,initial=None):
 env={'__algorithm':algorithm,'__source':initial};t=parse(c);writes=[]
 allowed={'prefix','aid','nid','a','s','facts','proof','fm','deps','statement','header','new'}if initial is None else {'p','id','f','s'}
 for n in t.body:
  if isinstance(n,ast.Assign)and len(n.targets)==1 and isinstance(n.targets[0],ast.Name)and n.targets[0].id in allowed:
   env[n.targets[0].id]=value(n.value,env)
  if isinstance(n,ast.Expr)and isinstance(n.value,ast.Call)and isinstance(n.value.func,ast.Attribute)and n.value.func.attr=='write_text':
   call=n.value
   try:path=literal(call.func.value,env)
   except ValueError:continue
   if path!='items/'+target+'.md':continue
   need(len(call.args)==1 and not call.keywords,'writer arity')
   text=literal(call.args[0],env);need(type(text)==str,'source is not string');writes.append(text);break
 need(len(writes)==1,'missing literal target write');return writes[0]
source=replay_writer(creation)
# The only two later direct target source writes are the literal statement and
# final Given/Proof replacements, each before the native failed job terminates.
edits=[c for c in birth if c['at']>creation['at']and "id='"+target+"';f=pathlib.Path('items/'+id+'.md');s=f.read_text();s=s.replace("in c['shell']]
need(len(edits)==2,'missing/extra final source edits')
write_bindings=[{'command_sha256':creation['command_sha256'],'status':creation['status'],'source_sha256':sha(source)}]
for c in edits:
 need(c['status'].startswith('succeeded'),'final edit command failed');source=replay_writer(c,source);write_bindings.append({'command_sha256':c['command_sha256'],'status':c['status'],'source_sha256':sha(source)})
need(source==x['native_item'],'replayed full source differs from successful adopter item')
carrier_reads=[]
for path,raw in x['adoption_inputs'].items():
 need(x['adopter_log'].count(raw)==1,'full adopted carrier not unique '+path)
 hits=[]
 for c in adopt:
  if not c['status'].startswith('succeeded')or raw not in c['output']:continue
  lexer=shlex.shlex(c['shell'],posix=True,punctuation_chars=';&|<>');lexer.whitespace_split=True;tokens=list(lexer)
  if any(tokens[k:k+2]==['cat',path]for k in range(len(tokens)-1)):hits.append(c)
 need(len(hits)==1,'no actual successful complete cat '+path)
 carrier_reads.append({'path':path,'raw_sha256':sha(raw),'command_sha256':hits[0]['command_sha256'],'status':hits[0]['status']})
reflows=[c for c in adopt if 'tools/reflow.mts' in c['shell']and 'items/'+target+'.md' in c['shell']]
need(len(reflows)==1 and reflows[0]['status'].startswith('succeeded')and reflows[0]['output'].count('unchanged items/'+target+'.md')==1,'no actual no-change reflow adoption evidence')
print(json.dumps({'item_sha256':sha(source),'failed_creator_commands':write_bindings,'algorithm_read_command_sha256':reads[0]['command_sha256'],'successful_adoption_reads':carrier_reads,'adopter_reflow_command_sha256':reflows[0]['command_sha256'],'failed_creator_not_successful':True,'adoption_does_not_claim_new_write':True}))
`;
