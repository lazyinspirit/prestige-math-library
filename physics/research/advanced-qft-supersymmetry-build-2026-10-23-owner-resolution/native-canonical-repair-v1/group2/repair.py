import pathlib,json,re,difflib,hashlib,subprocess,datetime
r='advanced-qft-supersymmetry-build-2026-10-23';base=pathlib.Path(f'research/{r}-owner-resolution/native-canonical-repair-v1/group2');ids=json.loads((base/'ids.json').read_text())
maps={
'lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model':{'1.1':'1.1','2.1':'2.1','3.1':'2.2','4.1':'3.1','5.1':'4.1'},
'lem-qftx-compact-torus-equivariant-slice-neighborhoods':{'1.1':'1.1','1.2':'1.2','2.1':'2.1','2.2':'3.1','3.1':'4.1','4.1':'5.1'},
'lem-qftx-compact-torus-fixed-locus-normal-weights':{'1.1':'1.1','1.2':'2.1','2.1':'3.1','2.2':'4.1','3.1':'5.1','4.1':'6.1'},
'lem-qftx-nonfixed-locus-cohomology-is-torsion-after-localization':{'1.1':'1.1','2.1':'1.2','3.1':'2.1','4.1':'3.1'},
'lem-qftx-proper-closed-subgroup-has-annihilating-character':{'1.1':'1.1','1.2':'2.1','2.1':'3.1','2.2':'4.1','3.1':'5.1'},
'lem-qftx-rational-torus-classifying-space-cohomology':{'1.1':'1.1','1.2':'2.1','2.1':'1.2','2.2':'1.3','2.3':'3.1','3.1':'2.2','4.1':'1.4','5.1':'3.2','6.1':'4.1'},
'lem-qftx-singular-cohomology-homotopy-invariance':{'1.1':'1.1','1.2':'2.1'}}
def trans(s,m):return re.sub(r'(?<![\d.])\d+\.\d+(?![\d.])',lambda a:m.get(a[0],a[0]),s)
changes=[]
for i in ids:
 p=pathlib.Path(f'items/{i}.md');before=(base/'before'/p.name).read_text();assert p.read_text()==before
 prefix,proof=before.split('## Proof\n',1);m=maps[i]
 if 'rational-torus' in i:
  chunks=re.split(r'(?m)^(?=\d+\.\d+ )',proof);intro=chunks[0];steps={re.match(r'(\d+\.\d+)',x)[1]:x.rstrip() for x in chunks[1:]}
  order=['1.1','2.1','2.2','4.1','1.2','3.1','2.3','5.1','6.1'];proof=intro+'\n\n'.join(steps[k] for k in order)+'\n'
 after=prefix+'## Proof\n'+trans(proof,m)
 # Mathematical text and displays preserved modulo step references and reorder.
 def chunks(s):return {re.match(r'(\d+\.\d+)',x)[1]:x.rstrip() for x in re.split(r'(?m)^(?=\d+\.\d+ )',s.split('## Proof\n',1)[1])[1:]}
 old,new=chunks(before),chunks(after)
 for k,v in old.items():assert trans(v,m)==new[m[k]],(i,k)
 assert before.split('## Proof\n')[0]==after.split('## Proof\n')[0]
 patch=''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile=str(p),tofile=str(p)))
 (base/(i+'.patch')).write_text(patch);(base/(i+'.proposed.md')).write_text(after);p.write_text(after)
 changes.append({'id':i,'numbering':m,'step_order_changed':'rational-torus' in i,'display_equations_preserved':True,'public_interface_unchanged':True,'before_sha256':hashlib.sha256(before.encode()).hexdigest(),'after_sha256':hashlib.sha256(after.encode()).hexdigest()})
# Fresh-read synchronous owning fields only; no unrelated contract data changes.
p=pathlib.Path(f'research/{r}-batch-8.proof-contracts.json');raw=p.read_text();d=json.loads(raw);old=json.loads(raw)
for i in ids:
 c=d['contracts'][i];m=maps[i]
 for cit in c['citations']:cit['uses']=[m.get(x,x) for x in cit['uses']]
 for a in c['derivations']:
  step=a['step'];a['step']=m.get(step,step);suffix=step.replace('.','_');assert a['id'].endswith('_'+suffix);a['id']=a['id'][:-len(suffix)]+a['step'].replace('.','_');a['claim']=trans(a['claim'],m);a['inputs']=[m.get(x,x) for x in a['inputs']]
 for a in c['boundaries']:
  for k in ['evidence','reason']:
   if k in a:a[k]=trans(a[k],m)
 assert c['routine_steps']==[]
 if 'rational-torus' in i:c['derivations'].sort(key=lambda a:tuple(map(int,a['step'].split('.'))))
for i,c in old['contracts'].items():
 if i not in ids:assert c==d['contracts'][i]
# Record exact changed JSON leaves.
def leaves(a,b,path=''):
 if isinstance(a,dict) and isinstance(b,dict):
  out=[]
  for k in a.keys()|b.keys():out+=leaves(a.get(k),b.get(k),path+'/'+k)
  return out
 if isinstance(a,list) and isinstance(b,list):
  out=[]
  for n in range(max(len(a),len(b))):out+=leaves(a[n] if n<len(a) else None,b[n] if n<len(b) else None,path+'/'+str(n))
  return out
 return [] if a==b else [{'path':path,'before':a,'after':b}]
(base/'contract-field-changes.json').write_text(json.dumps(leaves(old,d),indent=2)+'\n');assert p.read_text()==raw;p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
(base/'report.json').write_text(json.dumps({'run':r,'authorization':'Parent relayed Root explicit WRITE RELEASE; readiness round2 completed 2026-10-24T05:19:44Z; snapshot writer drained, no other source/contract writers active.','scope':ids,'repairs':changes,'checks_pending':True,'native_review':False,'recertification':False},indent=2)+'\n')
print('Guarded mechanical repair applied to seven exact sources and owning contract fields; all original step text and display bytes preserved modulo number references.')
