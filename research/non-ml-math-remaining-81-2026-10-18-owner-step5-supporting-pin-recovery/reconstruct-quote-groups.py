import pathlib,json,hashlib,copy,itertools
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path(f'research/{run}-owner-step5-supporting-pin-recovery');obs=json.load(open(f'research/{run}-owner-step5-native-supporting-pin-observation.json'));found=[];attempts=[]
for x in obs['changed_refs']:
 target=pathlib.Path(x['path'])
 if (out/'recovered'/target.name).exists() or '.proof-contracts.' not in str(target):continue
 current=json.load(open(target))
 for root in pathlib.Path('research').iterdir():
  if not root.is_dir() or run not in root.name or root==out:continue
  for p in root.rglob(target.name):
   try:old=json.load(open(p))
   except Exception:continue
   groups={}
   for id,c in current['contracts'].items():
    for i,ci in enumerate(c.get('citations',[])):
     for co in old.get('contracts',{}).get(id,{}).get('citations',[]):
      if all(ci.get(k)==co.get(k) for k in ['fact','source','source_section']) and ci['quote']!=co['quote']:
       groups.setdefault((ci['quote'],co['quote']),[]).append((id,i))
   if not groups or len(groups)>16:continue
   groups=list(groups.items());attempts.append({'target':str(target),'variant':str(p),'groups':len(groups)})
   for bits in itertools.product([0,1],repeat=len(groups)):
    base=copy.deepcopy(current)
    for ((cq,oq),paths),bit in zip(groups,bits):
     if bit:
      for id,i in paths:base['contracts'][id]['citations'][i]['quote']=oq
    for ascii in [False,True]:
     raw=(json.dumps(base,ensure_ascii=ascii,indent=2)+'\n').encode();h=hashlib.sha256(raw).hexdigest()
     if h==x['original_expected_sha256']:
      q=out/'recovered'/target.name;q.write_bytes(raw);found.append({'original_path':str(target),'expected_sha256':h,'recovered_file':str(q),'prior_recorded_variant':str(p),'replaced_citation_groups':[paths for (_,paths),bit in zip(groups,bits) if bit],'method':'Only exact quote values from recorded full metadata variant substituted into current carrier in identical-value groups; exact frozen rawSHA accepted','ensure_ascii':ascii});break
    if (out/'recovered'/target.name).exists():break
   if (out/'recovered'/target.name).exists():break
  if (out/'recovered'/target.name).exists():break
(out/'quote-group-recovery.json').write_text(json.dumps({'matches':found,'attempts':attempts},indent=2)+'\n');print(json.dumps(found,indent=2))
