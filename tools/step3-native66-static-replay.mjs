// Explicit case-bound native provenance; never executes code from the log.
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {split,yaml} from './pathway-lib.mjs';
export const NATIVE66_ORIGIN_POLICY='native-created-step3-origin-replay-v2';
export const NATIVE66_EVIDENCE_POLICY='native-created-step3-origin-evidence-replay-v2';
const need=(x,m)=>{if(!x)throw Error('Step-3 native66 replay: '+m);};
const sha=x=>createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x;
const hash=x=>sha(JSON.stringify(canon(x)));
export function native66EvidenceRefs(receipt){const s=receipt.metadata_replay;return [s.restoration,s.manifest_before_restore,...s.source_inputs.map(x=>x.archive)];}
export function replayNative66(root,run,id,receipt,read){
 const s=receipt.metadata_replay;
 const expected='research/machine-learning-all-101-2026-10-19-dispatch/alpha-3a-batch-66.attempt-1';
 need(run==='machine-learning-all-101-2026-10-19'&&id==='lem-diffusion-objective-estimator-expectation'&&String(receipt.batch)==='66'&&receipt.page==='discrete-diffusion-and-variational-objectives'
  &&receipt.author_result==='alpha-3a-batch-66.attempt-1.result.json'&&receipt.author_evidence?.result?.path===expected+'.result.json'&&receipt.author_evidence?.prompt?.path===expected+'.prompt.md'&&receipt.author_evidence?.log?.path===expected+'.log'
  &&sha(read(receipt.author_evidence.result))==='b452c472c7b3d87b5b2a2b3aff7c5c49c9f2380f63a2802d93c764d5dac3e75b','wrong exact native case/home/result identity');
 need(receipt.native_metadata_capture===undefined&&s&&Object.keys(s).every(k=>['policy','historical_manifest_mtime','restoration','manifest_before_restore','source_inputs'].includes(k))
  &&s.policy==='native66-heredoc-selected-metadata-v1'&&s.historical_manifest_mtime==='unavailable; exact native writes and root byte-identical restore used instead'
  &&Array.isArray(s.source_inputs)&&s.source_inputs.length===6,'explicit missing-time evidence route required');
 const sources={};for(const v of s.source_inputs){need(Object.keys(v).length===2&&typeof v.id==='string'&&!Object.hasOwn(sources,v.id),'duplicate/malformed quote input');const text=read(v.archive).toString();need(yaml().parse(split(text).fm)?.id===v.id,'quote archive identity');sources[v.id]=text;}
 const log=read(receipt.author_evidence.log).toString();
 const result=spawnSync('python3',['-I','-c',SCRIPT],{input:JSON.stringify({log,run,id,sources}),encoding:'utf8',timeout:15000,maxBuffer:4*1024*1024});
 need(!result.error&&result.status===0,'static parser rejected evidence: '+(result.stderr||result.error||''));
 const replay=JSON.parse(result.stdout),manifest=JSON.parse(read(receipt.native_manifest)),contract=JSON.parse(read(receipt.native_contract));
 const rows=(Array.isArray(manifest)?manifest:manifest.pages??[]).flatMap(p=>(p.items??[]).filter(x=>x.id===id).map(x=>({page:p.id,item:x})));
 need(rows.length===1&&rows[0].page===receipt.page&&hash(rows[0].item)===hash(replay.manifest_entry),'authored manifest row differs');
 need(hash(contract.contracts?.[id])===hash(replay.contract),'authored complete contract differs');
 need(sha(replay.source)===receipt.native_item.sha256&&read(receipt.native_item).toString()===replay.source,'authored full item differs');
 const restore=JSON.parse(read(s.restoration)),archive=read(s.manifest_before_restore),author=JSON.parse(read(receipt.author_evidence.result));
 const path=`research/${run}-batch-${receipt.batch}.pages.json`;
 need(restore.run===run&&restore.owner_identity==='/root'&&Number.isFinite(Date.parse(restore.at))&&Date.parse(restore.at)>=Date.parse(author.ended_at)&&Date.parse(restore.at)<=Date.parse(receipt.recorded_at)
  &&archive.equals(read(receipt.native_manifest))&&s.manifest_before_restore.sha256===receipt.native_manifest.sha256
  &&restore.restoration_rows?.filter(r=>r.path===path&&r.kind==='restore-exact-no-semantic-change-bytes'&&r.after_sha256===receipt.native_manifest.sha256&&/^[a-f0-9]{64}$/.test(r.before_sha256??'')&&r.before_sha256!==r.after_sha256).length===1,'missing genuine root byte-identical restore');
 return {policy:s.policy,item_sha256:sha(replay.source),manifest_sha256:hash({...replay.manifest_entry,__step4_page_id:receipt.page}),contract_sha256:hash(replay.contract),commands:replay.commands,native_quote_inputs:replay.native_quote_inputs,failed_compound_basis:replay.failed_compound_basis,historical_manifest_mtime_unavailable:true};
}

const SCRIPT = String.raw`import ast,hashlib,json,re,shlex,sys
x=json.load(sys.stdin);log=x['log'];target='lem-diffusion-objective-estimator-expectation'
def need(ok,msg):
 if not ok:raise ValueError(msg)
sha=lambda s:hashlib.sha256(s.encode()).hexdigest()
need(x['id']==target and x['run']=='machine-learning-all-101-2026-10-19','unsupported native case')
need(sha(log)=='c206f68dda3bfa1a45f42265bef0edd1770cbea5c13de5acb58f346851f503b8','changed complete native log')
pat=r'^exec\n(/bin/bash -lc [\s\S]*?) in /home/lazyinspirit/Projects/prestige-math-library\n (succeeded in [^\n]*|exited [^\n]*)'
ms=list(re.finditer(pat,log,re.M));commands=[]
for i,m in enumerate(ms):
 a=shlex.split(m[1]);need(len(a)==3 and a[:2]==['/bin/bash','-lc'],'shell grammar')
 output=log[m.end():ms[i+1].start() if i+1<len(ms)else len(log)];output=re.split(r'\n(?:codex|thinking)\n',output,maxsplit=1)[0]
 commands.append({'hash':sha(m[1]),'shell':a[2],'status':m[2],'output':output,'at':m.start()})
pins=['349f36987868264e2ee8f2094d1c9faf0f55a70eeeb71231203b9624033838af','51024284a1681032fccf146df23e118a08e5bbbc0dae880b4d11605e08879bac','c55779e2e755a45024d8de7657d738f5db69bc14b704a78b9cfbe28727e3cb15','46b3a560f5eac02bb0e388910af814e2fefe5aa9bc970f32af9fd9295ce1760f']
selected=[]
for pin in pins:
 hits=[c for c in commands if c['hash']==pin];need(len(hits)==1,'missing/ambiguous native command');selected+=hits
need([c['at'] for c in selected]==sorted(c['at'] for c in selected),'native writer ordering')
need([c['status'] for c in selected]==['succeeded in 0ms:','exited 1 in 475ms:','succeeded in 196ms:','succeeded in 0ms:'],'changed native compound status')
need('unchanged items/'+target+'.md\n' in selected[1]['output'] and 'REPAIR items/'+target+'.md:' in selected[1]['output'],'failed compound lacks no-op reflow/precheck evidence')
def literal(n,env):
 if isinstance(n,ast.Constant) and type(n.value) in (str,int,bool,type(None)):return n.value
 if isinstance(n,ast.Name) and n.id in env:return env[n.id]
 if isinstance(n,ast.List):return[literal(v,env)for v in n.elts]
 if isinstance(n,ast.Dict):return{literal(k,env):literal(v,env)for k,v in zip(n.keys,n.values)}
 if isinstance(n,ast.BinOp) and isinstance(n.op,ast.Add):return literal(n.left,env)+literal(n.right,env)
 raise ValueError('unsupported literal')
def tree(c):return ast.parse(c['shell'].split("python3 - <<'PY'\n",1)[1].split('\nPY',1)[0])
def constants(t):return{n.targets[0].id:n.value.value for n in t.body if isinstance(n,ast.Assign)and len(n.targets)==1 and isinstance(n.targets[0],ast.Name)and isinstance(n.value,ast.Constant)and type(n.value.value)in(str,int)}
anchor="cat > items/"+target+".md <<'EOF'\n";shell=selected[0]['shell'];need(shell.startswith(anchor),'wrong heredoc destination');source=shell[len(anchor):shell.index('\nEOF\n')]+'\n';initial=source
# Only recursively parse literal .replace chains, never execute the logged AST.
def replace(n,s):
 if isinstance(n,ast.Call)and isinstance(n.func,ast.Attribute)and n.func.attr=='read_text'and isinstance(n.func.value,ast.Name)and n.func.value.id=='p'and not n.args and not n.keywords:return s
 if isinstance(n,ast.Call)and isinstance(n.func,ast.Attribute)and n.func.attr=='replace'and len(n.args)==2 and not n.keywords:
  s=replace(n.func.value,s);a,b=[literal(v,{})for v in n.args];need(type(a)==str and a and type(b)==str and a in s,'unmatched literal edit');return s.replace(a,b)
 raise ValueError('unsupported source edit')
for command in selected[1:3]:
 t=tree(command);env=constants(t);active=False;value=None;count=0
 for n in t.body:
  if isinstance(n,ast.Assign)and len(n.targets)==1 and isinstance(n.targets[0],ast.Name):
   var=n.targets[0].id
   if var=='p':
    active=False
    if isinstance(n.value,ast.Call)and isinstance(n.value.func,ast.Name)and n.value.func.id=='Path'and len(n.value.args)==1:
     try:active=literal(n.value.args[0],env)=='items/'+target+'.md'
     except ValueError:pass
   elif var=='s'and active:value=replace(n.value,source)
  if active and isinstance(n,ast.Expr)and isinstance(n.value,ast.Call)and isinstance(n.value.func,ast.Attribute)and isinstance(n.value.func.value,ast.Name)and n.value.func.value.id=='p'and n.value.func.attr=='write_text':
   need(value is not None and len(n.value.args)==1 and isinstance(n.value.args[0],ast.Name)and n.value.args[0].id=='s','unsupported write');source=value;count+=1
 need(count==1,'source edit multiplicity')
# Manifest row is a literal data argument of the pinned native append/write.
t=tree(selected[0]);env=constants(t);manifest=[];boundaries=None;iff_reason=None
for n in ast.walk(t):
 if isinstance(n,ast.Call)and isinstance(n.func,ast.Attribute)and n.func.attr=='append'and len(n.args)==1 and isinstance(n.args[0],ast.Dict):
  try:d=literal(n.args[0],env)
  except ValueError:continue
  if d.get('id')==target:manifest.append(d)
 if isinstance(n,ast.For)and isinstance(n.iter,ast.Call)and isinstance(n.iter.func,ast.Attribute)and n.iter.func.attr=='items'and isinstance(n.iter.func.value,ast.Dict):boundaries=literal(n.iter.func.value,env)
 if isinstance(n,ast.Dict):
  for k,v in zip(n.keys,n.values):
   if isinstance(k,ast.Constant)and k.value=='reason'and isinstance(v,ast.Constant):iff_reason=v.value
need(len(manifest)==1 and boundaries is not None and iff_reason=='The lemma asserts expected-output identities, no biconditional.','missing native metadata data')
facts=re.findall(r'^\[([AF]\d+)\].*?\[\[([^]|]+)',initial,re.M);need(set(x['sources'])==set(s for _,s in facts),'incomplete source quote inputs')
c={'citations':[],'derivations':[],'routine_steps':[],'finite_smoke':[],'boundaries':[]};quote_pins=[]
for fact,sid in facts:
 section='Definition'if sid.startswith(('def-','alg-'))else'Statement';body=x['sources'][sid];quote=body.split('## '+section+'\n',1)[1].split('\n## ',1)[0].strip()
 def native_section(output):
  # A batched supplier dump has explicit source+section boundaries.
  h=re.search(r'^SUPPLIER '+re.escape(sid)+r'\n## '+re.escape(section)+r'\n',output,re.M)
  if h:
   tail=output[h.end():];end=re.search(r'^(?:SUPPLIER |## )',tail,re.M)
   return (tail[:end.start()]if end else tail).strip()
  # Direct cat/read output retains the full source frontmatter id. Bound the
  # body before any following source, then extract the COMPLETE typed section.
  h=re.search(r'^id: '+re.escape(sid)+r'$',output,re.M)
  if not h:return None
  tail=output[h.end():];fmend=re.search(r'^---\n',tail,re.M)
  if not fmend:return None
  body=tail[fmend.end():].split('\n---\n',1)[0]
  h=re.search(r'^## '+re.escape(section)+r'\n',body,re.M)
  if not h:return None
  tail=body[h.end():];end=re.search(r'^## ',tail,re.M)
  return (tail[:end.start()]if end else tail).strip()
 reads=[z for z in commands if z['status'].startswith('succeeded')and z['at']<selected[0]['at']and native_section(z['output'])==quote]
 need(reads,'complete quote section not bound to native successful supplier output '+sid);quote_pins.append({'source':sid,'quote_sha256':sha(quote),'read_command_sha256':reads[0]['hash']})
 c['citations'].append({'fact':fact,'source':sid,'source_section':section,'quote':quote,'uses':[]})
for case,e in boundaries.items():c['boundaries'].append({'case':case,'status':'checked','evidence':'Statement and steps 1.1–2.1: '+e.replace('Step 3.1','Step 2.1')})
for case in ['iff-forward','iff-reverse']:c['boundaries'].append({'case':case,'status':'not_applicable','reason':iff_reason})
# Final pinned metadata command15580 rebuilds every derivation, use list and
# boundary prefix from the final source; reproduce that exact pure computation.
for line in source.splitlines():
 m=re.match(r'^(\d+\.\d+) (.*)',line)
 if not m:continue
 claim,tags=m[2].rsplit(' [',1);tags=tags.removesuffix(' ∎').removesuffix(']');c['derivations'].append({'id':'expectation-'+m[1].replace('.','-'),'claim':claim,'step':m[1],'inputs':tags.split(', ')})
for citation in c['citations']:citation['uses']=[d['step']for d in c['derivations']if citation['fact']in d['inputs']]
risks=[]
for n in ast.walk(tree(selected[1])):
 if isinstance(n,ast.Assign)and len(n.targets)==1 and ast.unparse(n.targets[0])=="d['contracts'][id]['risk_review']":risks.append(literal(n.value,constants(tree(selected[1]))))
need(len(risks)==1,'missing exact native risk review');c['risk_review']=risks[0]
print(json.dumps({'source':source,'manifest_entry':manifest[0],'contract':c,'commands':[{'sha256':z['hash'],'status':z['status']}for z in selected],'native_quote_inputs':quote_pins,'failed_compound_basis':'Straight-line literal Python writes precede exact no-op reflow and failing read-only precheck; full native creator job succeeds. No whole-compound success or historical mtime is inferred.'}))
`;
