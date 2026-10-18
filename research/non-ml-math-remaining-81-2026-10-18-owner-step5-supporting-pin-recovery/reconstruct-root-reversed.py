import pathlib,json,hashlib,itertools,copy,ast,re
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path(f'research/{run}-owner-step5-supporting-pin-recovery');obs=json.load(open(f'research/{run}-owner-step5-native-supporting-pin-observation.json'));matches=[];attempts=[]
files=[p for base in pathlib.Path('research').iterdir() if base.is_dir() and run in base.name and base!=out for p in base.rglob('*.json')]
for x in obs['changed_refs']:
 if not x['path'].endswith('batch-78.proof-contracts.json'):continue
 target=pathlib.Path(x['path']);current=json.load(open(target));expected=x['original_expected_sha256'];found=False
 ops=json.load(open(f'research/{run}-owner-step5-handle-arc-normal-framing/cycle2-native-scope-successor/metadata-operations.json'))['owning_contract_field_operations'][0]['operations']
 for op in ops:
  ks=op['json_pointer'].split('/')[1:];q=current
  for k in ks[:-1]:q=q[int(k)] if isinstance(q,list) else q[k]
  q[int(ks[-1]) if isinstance(q,list) else ks[-1]]=op['exact_original_value']
 variants=[p for p in files if p.name==target.name or p.name==target.name.replace(run+'-','')]
 for p in variants:
  try:old=json.load(open(p))
  except Exception:continue
  if isinstance(current,dict) and isinstance(old,dict) and 'contracts' in current and 'contracts'in old:
   base=copy.deepcopy(current);keys=[k for k in current['contracts'] if k in old['contracts'] and current['contracts'][k]!=old['contracts'][k]]
   if len(keys)>16:continue
   mode='contract'
  elif isinstance(current,list) and isinstance(old,list):
   base=copy.deepcopy(current);lookup={z['id']:z for page in old for k in ['items','examples'] for z in page.get(k,[]) if isinstance(z,dict)};keys=[(i,k,j,z['id']) for i,page in enumerate(current) for k in ['items','examples'] for j,z in enumerate(page.get(k,[])) if isinstance(z,dict) and z['id'] in lookup and z!=lookup[z['id']]]
   if len(keys)>16:continue
   mode='page'
  else:continue
  attempts.append({'target':str(target),'variant':str(p),'variable_rows':len(keys)})
  for bits in itertools.product([0,1],repeat=len(keys)):
   for key,b in zip(keys,bits):
    if mode=='contract':base['contracts'][key]=old['contracts'][key] if b else current['contracts'][key]
    else:
     i,k,j,id=key;base[i][k][j]=lookup[id] if b else current[i][k][j]
   for ascii in [False,True]:
    raw=(json.dumps(base,ensure_ascii=ascii,indent=2)+'\n').encode()
    if hashlib.sha256(raw).hexdigest()==expected:
     q=out/'recovered'/target.name;q.parent.mkdir(exist_ok=True);q.write_bytes(raw);matches.append({'original_path':str(target),'expected_sha256':expected,'recovered_file':str(q),'current_variant':str(target),'prior_recorded_variant':str(p),'replaced_rows':[key for key,b in zip(keys,bits) if b],'serialization':{'ensure_ascii':ascii,'indent':2,'trailing_newline':True},'method':'Recombined complete actual recorded metadata rows from current and prior full carrier; accepted ONLY upon exact expected raw SHA256 equality.'});found=True;break
   if found:break
  if found:break
(out/'root-reversed-row-variant-recovery.json').write_text(json.dumps({'matches':matches,'attempts':attempts},indent=2)+'\n');print(json.dumps(matches,indent=2),flush=True)
