from pathlib import Path
import json,re,hashlib,difflib,subprocess
run='advanced-qft-supersymmetry-build-2026-10-23'
base=Path('research')/(run+'-owner-resolution/native-canonical-repair-v1/group1')
specs={
'lem-qftx-smooth-principal-connection-exists':(3,{'1.1':'1.1','2.1':'2.1','3.1':'1.2','4.1':'3.1'},['1.1','3.1','2.1','4.1']),
'def-standard-product-torus-as-a-compact-lie-group':(7,{'1.1':'1.1','1.2':'1.2','1.3':'2.1','2.1':'3.1','2.2':'4.1','3.1':'5.1'},None),
'lem-torus-classifying-space-cohomology':(7,{'1.1':'1.1','1.2':'1.2','1.3':'1.3','2.1':'2.1','2.2':'3.1','3.1':'4.1'},None),
'def-torus-equivariant-cohomology-cartan-model':(7,{'1.1':'1.1','1.2':'1.2','1.3':'1.3','1.4':'2.1','1.5':'2.2','2.1':'3.1','3.1':'4.1'},None),
'ex-qftx-equivariant-cohomology-of-a-free-circle-action':(7,{'1.1':'1.1','1.2':'2.1','2.1':'1.2','3.1':'3.1'},['1.1','2.1','1.2','3.1'])}
def refs(t,m):return re.sub(r'(?i)(step\s+)(\d+\.\d+)',lambda x:x[1]+m.get(x[2],x[2]),t)
checks=[]
def check(label,args):
 p=subprocess.run(args,text=True,capture_output=True)
 (base/(label+'.txt')).write_text(p.stdout+p.stderr)
 checks.append({'label':label,'command':args,'exit_code':p.returncode,'output':str(base/(label+'.txt'))})
 return p
paths=['items/'+id+'.md' for id in specs]
check('precheck-before',['node','tools/tsx-run.mjs','tools/physics-support/precheck.mts',*paths,'--json'])
records=[]
for id,(batch,m,order) in specs.items():
 p=Path('items')/(id+'.md'); before=p.read_bytes(); (base/(id+'.before.md')).write_bytes(before)
 text=before.decode(); prefix,proof=text.split('## Proof\n',1)
 matches=list(re.finditer(r'(?m)^(\d+\.\d+) ',proof)); intro=proof[:matches[0].start()]
 chunks={x[1]:proof[x.start():matches[i+1].start() if i+1<len(matches) else len(proof)].rstrip() for i,x in enumerate(matches)}
 ordered=order or list(chunks)
 new=[]
 for num in ordered:
  s=refs(chunks[num],m);s=re.sub(r'^\d+\.\d+',m[num],s)
  if id=='lem-torus-classifying-space-cohomology' and num in ['1.2','1.3']:
   s=re.sub(r', algebra\]$',', given]',s)
  new.append(s)
 after=prefix+'## Proof\n'+intro+'\n\n'.join(new)+'\n'
 # Public sections, full display strings and all proof content retained under numbering/tag-only substitutions.
 assert after.split('## Proof\n')[0]==prefix
 assert re.findall(r'\$\$.*?\$\$',text,re.S)==re.findall(r'\$\$.*?\$\$',after,re.S)
 (base/(id+'.proposed.md')).write_text(after)
 (base/(id+'.patch')).write_text(''.join(difflib.unified_diff(text.splitlines(True),after.splitlines(True),fromfile=str(p),tofile=str(p))))
 assert p.read_bytes()==before
 p.write_text(after)
 records.append({'id':id,'batch':batch,'numbering_map':m,'old_order':list(chunks),'new_old_number_order':ordered,'tag_change':{'1.2':'algebra -> given','1.3':'algebra -> given'} if id=='lem-torus-classifying-space-cohomology' else {},'before_sha256':hashlib.sha256(before).hexdigest(),'after_sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
# Fresh synchronous per-file read/modify/write; preserve every unrelated object.
for batch in [3,7]:
 p=Path('research')/(run+f'-batch-{batch}.proof-contracts.json'); before=p.read_bytes(); (base/(p.name+'.before')).write_bytes(before); d=json.loads(before); original=json.loads(before)
 for id,(b,m,order) in specs.items():
  if b!=batch:continue
  def walk(v,key=''):
   if isinstance(v,dict):return {k:walk(x,k) for k,x in v.items()}
   if isinstance(v,list):return [walk(x,key) for x in v]
   if isinstance(v,str):
    if re.fullmatch(r'\d+\.\d+',v):return m.get(v,v)
    if key=='id' and re.fullmatch(r'step-\d+-\d+',v):return 'step-'+m.get(v[5:].replace('-','.'),v[5:].replace('-','.')).replace('.','-')
    return refs(v,m)
   return v
  d['contracts'][id]=walk(d['contracts'][id])
  d['contracts'][id]['derivations'].sort(key=lambda x:tuple(map(int,x['step'].split('.'))))
 for id in original['contracts']:
  if id not in specs:assert original['contracts'][id]==d['contracts'][id]
 assert p.read_bytes()==before
 p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
 (base/(p.name+'.patch')).write_text(''.join(difflib.unified_diff(before.decode().splitlines(True),p.read_text().splitlines(True),fromfile=str(p),tofile=str(p))))
(base/'report.json').write_text(json.dumps({'run':run,'authority':'Parent relayed Root explicit WRITE RELEASE: readiness round2 completed 05:19:44Z, snapshot writer drained, no other source/contract writers active.','scope':'Only five exact25 canonical scoped items in batches 3 and 7 and their own contract objects.','scientific_review':False,'native_transition':False,'recertification':False,'records':records,'checks':checks},indent=2)+'\n')
