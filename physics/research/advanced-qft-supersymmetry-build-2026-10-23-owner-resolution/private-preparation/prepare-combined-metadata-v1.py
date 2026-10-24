import pathlib,json,hashlib,copy,datetime
root=pathlib.Path.cwd();run='advanced-qft-supersymmetry-build-2026-10-23';owner=f'research/{run}-owner-resolution';prep=f'{owner}/private-preparation';out=f'{prep}/root-combined-metadata-v1'
sha=lambda b:hashlib.sha256(b).hexdigest()
def raw(p):return (root/p).read_bytes()
def load(p):return json.loads(raw(p))
def require(x,m):
 if not x:raise ValueError(m)
baseline=load(f'{prep}/root-metadata-repair-baseline-v1/manifest.json');guards={r['path']:r['sha256'] for r in baseline['paths']}
for p,h in guards.items():require(sha(raw(p))==h,'Baseline drift '+p)
inputs={};sources={};patches=[];contracts={};proposals=[]
def evidence(p,expected=None):
 b=raw(p);h=sha(b);require(expected is None or h==expected,'Evidence changed '+p);inputs[p]=h;return json.loads(b)
def source(p,before,candidate,after):
 p=str(p);candidate=str(pathlib.Path(candidate).relative_to(root)) if pathlib.Path(candidate).is_absolute() else str(candidate)
 require(p.startswith('items/') and guards.get(p)==before and sha(raw(p))==before,'Source baseline '+p)
 b=raw(candidate);require(sha(b)==after,'Source candidate '+p)
 require(p not in sources,'Overlapping source proposals '+p);sources[p]={'path':p,'before_sha256':before,'candidate':candidate,'after_sha256':after};inputs[candidate]=after

def ptrget(d,path):
 for k in path:
  if not isinstance(d,dict) or k not in d:return False,None
  d=d[k]
 return True,d

def field(r):
 p=r['manifest_path'];m=load(p);matches=[i for page in m for i in page['items'] if i['id']==r['item']];require(len(matches)==1,'Ambiguous item');i=matches[0];keys=r['field'].split('.');present,before=ptrget(i,keys);expected=r.get('before_present', r['before']!={'__absent__':True});require(present==expected and (not present or before==r['before']),'Field guard '+r['item']+' '+r['field']);h=r.get('baseline_manifest_sha256',r.get('baseline_file_sha256',r.get('manifest_sha256')));require(h is None or guards[p]==h,'Manifest baseline '+p)
 if r.get('source_guard'):require(sha(raw(r['source_guard']['path']))==r['source_guard']['sha256'],'Field source guard')
 after_present=r['after']!={'__absent__':True};patches.append({'path':p,'item':r['item'],'field':r['field'],'before_present':present,'before':before,'after_present':after_present,'after':r['after'] if after_present else None})

index=f'{owner}/owner-metadata-reconciliation-v2';xs=evidence(f'{index}/field-patch-list.json','ff66ce0be00e36c9d9e587f5c4f4aec89846d84a801b898b94c60fdde94dd3aa')
for r in xs:field(r)
for r in evidence(f'{index}/clay-source-candidates.json','1e89ff117c66346eb10d8070b9dd040829cad193528fca73900340c20e798a38')['rows']:
 source(r['path'],r['before_sha256'],r['candidate'],r['candidate_sha256']);g=r['target_guard'];require(sha(raw(g['path']))==g['sha256'],'Clay target')
superbase=f'{prep}/role-heading-statement-repair-v2';sup=evidence(f'{superbase}/application-proposal.json','a9d1f6da6630365f561bf8772d98a4b1e1291ea2ac9714dc4b1084cd024c8926')
for r in sup['records']:
 p=r['target_path'];require(sha(raw(p))==r['before_sha256'],'Super baseline '+p);require(sha(raw(r['proposed_path']))==r['proposed_sha256'],'Super candidate')
 if p.startswith('items/'):source(p,r['before_sha256'],r['proposed_path'],r['proposed_sha256']);continue
 require(p.endswith('.pages.json'),'Unexpected Super target');before=load(p);after=load(r['proposed_path']);require(len(before)==len(after),'Page count')
 for a,b in zip(before,after):
  require({k:v for k,v in a.items() if k!='items'}=={k:v for k,v in b.items() if k!='items'},'Page mutation');require(len(a['items'])==len(b['items']),'Inventory')
  for ai,bi in zip(a['items'],b['items']):
   require(ai['id']==bi['id'] and ai.keys()==bi.keys(),'Identity/keys');changed=[k for k in ai if ai[k]!=bi[k]];require(set(changed)<={'statement','dependency_roles'},'Unapproved Super fields')
   for k in changed:field({'manifest_path':p,'item':ai['id'],'field':k,'before':ai[k],'after':bi[k],'manifest_sha256':r['before_sha256']})
 inputs[r['proposed_path']]=r['proposed_sha256']

rootformat=evidence(f'{prep}/root-statement-format-v1/proposal.json')
for r in rootformat['sources']:source(r['path'],r['before_sha256'],r['candidate'],r['after_sha256'])
for r in rootformat['patches']:field(r)
for r in rootformat['target_guards']:require(sha(raw(r['path']))==r['sha256'],'Root title guard')
for r in evidence(f'{prep}/root-missing-two-mirrors-v1/patches.json')['patches']:field(r)
inv=f'{prep}/public-mirrors-16-v1'
for name in ['initial8-field-patches.json','additional8-field-patches.json']:
 for r in evidence(f'{inv}/{name}')['patches']:field(r)
for r in evidence(f'{inv}/source-relocation-proposals.json')['records']:
 source(r['target_path'],r['before_sha256'],r['proposed_path'],r['proposed_sha256']);g=r['target_guard'];require(sha(raw(g['path']))==g['sha256'],'Invariant title guard')

# Contracts are disjoint whole-file candidates plus the two explicit33 quote fields.
for r in evidence(f'{superbase}/quote-application-proposal.json','15770ba3334a71601f3d3ddf03f2fbef763de5bb9527f6e53a0e282ae860f3dd')['records']:
 p=r['target_path'];require(sha(raw(p))==r['before_sha256'] and sha(raw(r['proposed_path']))==r['proposed_sha256'],'Contract guard');a=load(p);b=load(r['proposed_path']);rest=copy.deepcopy(b)
 for ptr in r['only_changed_fields']:
  require(ptr.endswith('/quote'),'Not quote');keys=ptr.lstrip('/').split('/');aa=a;rr=rest
  for k in keys[:-1]:aa=aa[int(k)] if isinstance(aa,list) else aa[k];rr=rr[int(k)] if isinstance(rr,list) else rr[k]
  rr[keys[-1]]=copy.deepcopy(aa[keys[-1]])
 require(rest==a,'Extra contract changes');contracts[p]={'path':p,'before_sha256':r['before_sha256'],'bytes':raw(r['proposed_path']),'candidate':r['proposed_path'],'after_sha256':r['proposed_sha256']};inputs[r['proposed_path']]=r['proposed_sha256']
for r in evidence(f'{inv}/contract-quote-field-patches.json')['patches']:
 p=r['path'];require(p not in contracts,'Shared contract');require(sha(raw(p))==r['baseline_file_sha256'],'Invariant contract baseline')
# Group33 patches first, then serialize once.
for p in {r['path'] for r in load(f'{inv}/contract-quote-field-patches.json')['patches']}:
 d=load(p)
 for r in load(f'{inv}/contract-quote-field-patches.json')['patches']:
  if r['path']!=p:continue
  keys=r['json_pointer'].lstrip('/').split('/');t=d
  for k in keys[:-1]:t=t[int(k)] if isinstance(t,list) else t[k]
  require(t[keys[-1]]==r['before'],'Invariant quote exact');t[keys[-1]]=r['after']
 contracts[p]={'path':p,'before_sha256':sha(raw(p)),'bytes':(json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode()}

# Merge disjoint field edits against original whole-manifest baselines.
manifest_copies={};seen=set()
for r in patches:
 p=r['path'];key=(p,r['item'],r['field']);require(key not in seen,'Duplicate field '+str(key));seen.add(key);d=manifest_copies.setdefault(p,load(p));i=next(i for page in d for i in page['items'] if i['id']==r['item']);keys=r['field'].split('.');target=i
 for k in keys[:-1]:target=target[k]
 if r['after_present']:target[keys[-1]]=copy.deepcopy(r['after'])
 else:del target[keys[-1]]
# Reverse each field set to prove no extra parsed manifest changes.
for p,d in manifest_copies.items():
 rev=copy.deepcopy(d)
 for r in reversed([r for r in patches if r['path']==p]):
  i=next(i for page in rev for i in page['items'] if i['id']==r['item']);ks=r['field'].split('.');t=i
  for k in ks[:-1]:t=t[k]
  if r['before_present']:t[ks[-1]]=r['before']
  else:del t[ks[-1]]
 require(rev==load(p),'Reverse mismatch '+p)
# Private output only. Application is a separate guarded Root action.
(root/out).mkdir();(root/out/'candidates').mkdir();writes=[]
for p,r in sources.items():writes.append(r)
for p,d in manifest_copies.items():
 b=(json.dumps(d,ensure_ascii=False,indent=2)+'\n').encode();c=f'{out}/candidates/{pathlib.Path(p).name}';(root/c).write_bytes(b);writes.append({'path':p,'before_sha256':guards[p],'candidate':c,'after_sha256':sha(b)})
for p,r in contracts.items():
 c=f'{out}/candidates/{pathlib.Path(p).name}';(root/c).write_bytes(r['bytes']);writes.append({'path':p,'before_sha256':r['before_sha256'],'candidate':c,'after_sha256':sha(r['bytes'])})
record={'kind':'private-combined-exact-repair-proposal','reviewer':'/root','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'native_gate':False,'production_written':False,'source_count':len(sources),'manifest_count':len(manifest_copies),'manifest_fields':len(patches),'contract_count':len(contracts),'contract_quote_fields':7,'writes':writes,'field_patches':patches,'evidence_inputs':inputs,'baseline_archive':f'{prep}/root-metadata-repair-baseline-v1/manifest.json','baseline_archive_sha256':sha(raw(f'{prep}/root-metadata-repair-baseline-v1/manifest.json'))}
(root/out/'proposal.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:record[k] for k in ['source_count','manifest_count','manifest_fields','contract_count','contract_quote_fields']}))
