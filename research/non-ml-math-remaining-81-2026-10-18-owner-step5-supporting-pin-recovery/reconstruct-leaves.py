import pathlib,json,hashlib,itertools,copy,ast,re
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path(f'research/{run}-owner-step5-supporting-pin-recovery');obs=json.load(open(f'research/{run}-owner-step5-native-supporting-pin-observation.json'));matches=[];attempts=[]
files=[p for base in pathlib.Path('research').iterdir() if base.is_dir() and run in base.name and base!=out for p in base.rglob('*.json')]
for x in obs['changed_refs']:
 if (out/'recovered'/pathlib.Path(x['path']).name).exists():continue
 target=pathlib.Path(x['path']);current=json.load(open(target));expected=x['original_expected_sha256'];found=False
 variants=[p for p in files if p.name==target.name or p.name==target.name.replace(run+'-','')]
 for p in variants:
  try:old=json.load(open(p))
  except Exception:continue
  def differences(a,b,p=()):
   if type(a)!=type(b):return [p]
   if isinstance(a,dict):
    return sum((differences(a[k],b[k],p+(k,)) for k in a if k in b),[])
   if isinstance(a,list):
    if len(a)!=len(b):return[p]
    return sum((differences(v,w,p+(i,)) for i,(v,w) in enumerate(zip(a,b))),[])
   return [] if a==b else [p]
  def get(a,key):
   for k in key:a=a[k]
   return a
  def put(a,key,v):
   for k in key[:-1]:a=a[k]
   a[key[-1]]=v
  base=copy.deepcopy(current);keys=differences(current,old)
  if not keys or len(keys)>14:continue
  attempts.append({'target':str(target),'variant':str(p),'variable_rows':len(keys)})
  for bits in itertools.product([0,1],repeat=len(keys)):
   for key,b in zip(keys,bits):
    put(base,key,get(old,key) if b else get(current,key))
   for ascii in [False,True]:
    raw=(json.dumps(base,ensure_ascii=ascii,indent=2)+'\n').encode()
    if hashlib.sha256(raw).hexdigest()==expected:
     q=out/'recovered'/target.name;q.parent.mkdir(exist_ok=True);q.write_bytes(raw);matches.append({'original_path':str(target),'expected_sha256':expected,'recovered_file':str(q),'current_variant':str(target),'prior_recorded_variant':str(p),'replaced_rows':[key for key,b in zip(keys,bits) if b],'serialization':{'ensure_ascii':ascii,'indent':2,'trailing_newline':True},'method':'Recombined exact recorded metadata field values from current and prior full carrier; accepted ONLY upon exact expected raw SHA256 equality.'});found=True;break
   if found:break
  if found:break
(out/'recorded-leaf-recovery.json').write_text(json.dumps({'matches':matches,'attempts':attempts},indent=2)+'\n');print(json.dumps(matches,indent=2),flush=True)
