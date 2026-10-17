import pathlib,json,re,copy,hashlib,datetime,difflib
base=pathlib.Path(__file__).parent;run='physics-remaining-80-2026-10-17';targets=['items/pthm-qsm-onsite-interacting-atoms.md','items/ex-qsm-onsite-interacting-atoms.md']
sha=lambda b:hashlib.sha256(b).hexdigest()
def guard():
 s=json.load(open('.physics-autopilot/'+run+'/state.json'));active=[];blocked=[]
 for k,v in s['dispatches'].items():
  if v.get('stage')!='2-scope-review' or v.get('endedAt') or v.get('role')!='scope-repairer':continue
  for batch in v.get('covers',[]):
   statepath=pathlib.Path('research')/(run+'-scope-review')/('batch-'+str(batch))/'state.json';st=json.load(open(statepath));pr=st.get('prepared',{});p=statepath.parent/('repair-'+str(pr.get('round',1))+'.input.json');d=json.load(open(p)) if p.exists() else {};hit=set(targets)&set(d.get('write_files',[]));active.append({'dispatch':k,'input':str(p),'input_sha256':sha(p.read_bytes()) if p.exists() else None,'write_files':d.get('write_files',[]),'overlap':sorted(hit)})
   if hit:blocked.append(k)
 assert not blocked,blocked
 return {'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'targets':targets,'active_native_source_writers':active,'overlapping_writers':blocked,'rule':'Only source-writing repair dispatches with unended receipts block. Native46 final reviewer is read-only and does not block.','native46repair':s['dispatches']['2-scope-review:scope-repair-46-1'],'native46finalreview':s['dispatches'].get('2-scope-review:scope-review-46-1')}
obs=guard();before={p:pathlib.Path(p).read_text() for p in targets};new={}
for name,s in before.items():
 assert 'def-countable-choice' not in s
 s=s.replace('deps:\n','deps:\n  - def-countable-choice\n',1).replace('dependency_roles:\n','dependency_roles:\n  def-countable-choice: mathematical-premise\n',1)
 if 'pthm-' in name:
  assert 'D(H_B)=D(K_B)' in s and 'step 1.4' in s
  s=s.replace('## Statement\n\n','## Statement\n\nAssume the Axiom of Countable Choice $\\mathrm{AC}_\\omega$ ([[def-countable-choice]]) for the occupation-space and diagonal-domain supplier uses below.\n\n',1)
  s=s.replace('**Given:** The Hilbert spaces','**Given:** $\\mathrm{AC}_\\omega$, the Hilbert spaces',1)
  s=s.replace('[F1] [[lem-qsm-fock-occupation-basis-and-car-relations]]:', '[A3] [[def-countable-choice]]: every at most countable family of nonempty sets has a choice function. This is the exact mathematical premise retained from the occupation-space and real diagonal-domain suppliers; no full Axiom of Choice is assumed.\n\n[F1] [[lem-qsm-fock-occupation-basis-and-car-relations]]:',1)
  s=s.replace('[F2] [[lem-qsm-models-diagonal-occupation-trace]]: real diagonal','[F2] [[lem-qsm-models-diagonal-occupation-trace]]: under $\\mathrm{AC}_\\omega$, real diagonal',1)
  s=s.replace('[given, F1, F2, F11, algebra]','[given, A3, F1, F2, F11, algebra]',1)
  s=s.replace('[given, A1, F2, step 1.1, algebra]','[given, A1, A3, F2, step 1.1, algebra]',1)
  s=s.replace('[given, A1, F2, F3, F5, F6, step 1.1, step 1.4, algebra]','[given, A1, A3, F2, F3, F5, F6, step 1.1, step 1.4, algebra]',1)
 else:
  s=s.replace('## Example\n\n','## Example\n\nAssume the Axiom of Countable Choice $\\mathrm{AC}_\\omega$ ([[def-countable-choice]]) for the inherited Bose occupation-space construction.\n\n',1)
  s=s.replace('**Given:** $\\beta>0$','**Given:** $\\mathrm{AC}_\\omega$, $\\beta>0$',1)
  s=s.replace('[F1] [[pthm-qsm-onsite-interacting-atoms]]:','[A1] [[def-countable-choice]]: every at most countable family of nonempty sets has a choice function; the Bose conclusion retains this premise from the theorem.\n\n[F1] [[pthm-qsm-onsite-interacting-atoms]]:',1)
  s=s.replace('[given, F1, algebra]','[given, A1, F1, algebra]')
 # Preserve every old equation/math token; only the explicit AC math spans are new.
 oldmath=re.findall(r'\$\$.*?\$\$|\$(?!\$).*?\$',before[name],re.S);newmath=re.findall(r'\$\$.*?\$\$|\$(?!\$).*?\$',s,re.S)
 import collections
 a=collections.Counter(oldmath);n=collections.Counter(newmath);assert all(n[t]>=k for t,k in a.items())
 assert set((n-a).keys())=={'$\\mathrm{AC}_\\omega$'},(name,n-a)
 new[name]=s
for p in targets:
 dest=base/'before'/p;dest.parent.mkdir(parents=True,exist_ok=True);assert not dest.exists();dest.write_text(before[p]);assert pathlib.Path(p).read_text()==before[p]
obs['at_write']=guard();(base/'outside-write-guard.json').write_text(json.dumps(obs,indent=2)+'\n')
for p in targets:pathlib.Path(p).write_text(new[p])
(base/'onsite-choice.patch').write_text(''.join(''.join(difflib.unified_diff(before[p].splitlines(True),new[p].splitlines(True),fromfile='before/'+p,tofile='after/'+p)) for p in targets))
# Exact quote and local proof ledger synchronization, preserving all unrelated contract fields.
def sec(id,heading):
 t=pathlib.Path('items/'+id+'.md').read_text();m=re.search(r'^## '+re.escape(heading)+r'\n(.*?)(?=^## |\Z)',t,re.M|re.S);assert m;return m[1].strip()
records=[]
for batch in (45,46):
 path=pathlib.Path('research')/(run+f'-batch-{batch}.proof-contracts.json');raw=path.read_bytes();d=json.loads(raw);orig=copy.deepcopy(d);dest=base/'before'/path;dest.parent.mkdir(parents=True,exist_ok=True);assert not dest.exists();dest.write_bytes(raw)
 scope=set(d['contracts']) if batch==45 else {pathlib.Path(p).stem for p in targets}
 for id in scope:
  c=d['contracts'][id]
  for v in c.get('citations',[]):
   cur=sec(v['source'],v['source_section'])
   norm=lambda s:' '.join(s.split())
   if norm(v['quote']) not in norm(cur):
    old=v['quote'];v['quote']=cur;records.append({'batch':batch,'id':id,'field':'citation.quote','fact':v['fact'],'source':v['source'],'before':old,'after':cur})
  if batch!=46:continue
  text=pathlib.Path('items/'+id+'.md').read_text();proofsec='Proof' if id.startswith('pthm-') else 'Verification';proof=sec(id,proofsec)
  st=[]
  for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',proof,re.M|re.S):
   body=m[2].strip();q=re.match(r'(.*?)\s+\[([^\[\]]*)\]\s*∎?$',body,re.S);assert q,(id,body[-150:]);st.append({'step':m[1],'claim':q[1],'inputs':[s.strip() for s in q[2].split(',')]})
  oldsteps={v['step']:v for v in c['derivations']};newsteps=[]
  for v in st:
   beforestep=oldsteps.get(v['step'],{});v={'id':beforestep.get('id','native46-domain-sum-identification'),**v};newsteps.append(v)
  c['derivations']=newsteps
  uses={}
  for v in st:
   for fact in ['A3'] if id.startswith('pthm-') else ['A1']:
    if fact in v['inputs']:uses.setdefault(fact,[]).append(v['step'])
  for ci in c['citations']:
   ci['uses']=[v['step'] for v in st if ci['fact'] in v['inputs'] or '['+ci['fact']+']' in v['claim']]
  fact='A3' if id.startswith('pthm-') else 'A1'
  c['citations'].append({'fact':fact,'source':'def-countable-choice','source_section':'Definition','quote':sec('def-countable-choice','Definition'),'uses':uses[fact]})
 for id in orig['contracts']:
  if id not in scope:assert orig['contracts'][id]==d['contracts'][id]
 assert path.read_bytes()==raw;path.write_text(json.dumps(d,indent=2)+'\n')
(base/'quote-repairs.json').write_text(json.dumps(records,indent=2)+'\n')
print('Applied two exact guarded onsite AComega repairs; preserved native46domain identity; scientific worksheet synchronization complete.')
