import pathlib,json,hashlib,re,itertools,copy
run='non-ml-math-remaining-81-2026-10-18';out=pathlib.Path(f'research/{run}-owner-step5-supporting-pin-recovery');obs=json.load(open(f'research/{run}-owner-step5-native-supporting-pin-observation.json'));sections={};records=[];matches=[]
for u in [1,2,3]:
 p=pathlib.Path(f'research/{run}-dispatch/alpha-repair-step5-v2-impact-initial-r1-u{u}.attempt-1.log');s=p.read_text()
 for m in re.finditer(r'^### ([a-z0-9-]+)\n## (Definition|Statement)\n\n([\s\S]*?)(?=^### |^exec\n|^thinking\n|^codex\n|\Z)',s,re.M):
  body=m[3].strip()
  # Only complete printed source section blocks; reject outputs containing truncation or other section headers.
  if 'truncated' in body or '\n## 'in body or '\n/bin/bash' in body or '\nsucceeded in' in body:continue
  sections.setdefault((m[1],m[2]),[]).append((body,str(p),s[:m.start()].count('\n')+1))
for x in obs['changed_refs']:
 target=pathlib.Path(x['path'])
 if (out/'recovered'/target.name).exists() or '.proof-contracts.' not in str(target):continue
 current=json.load(open(target));groups={}
 for id,c in current['contracts'].items():
  for i,q in enumerate(c.get('citations',[])):
   for old,log,line in sections.get((q['source'],q['source_section']),[]):
    if q['quote']!=old:groups.setdefault((q['quote'],old,log,line),[]).append((id,i))
 if len(groups)>16:records.append({'target':str(target),'groups':len(groups),'skipped':True});continue
 groups=list(groups.items());records.append({'target':str(target),'groups':len(groups)})
 for bits in itertools.product([0,1],repeat=len(groups)):
  base=copy.deepcopy(current)
  for ((cq,oq,log,line),paths),bit in zip(groups,bits):
   if bit:
    for id,i in paths:base['contracts'][id]['citations'][i]['quote']=oq
  raw=(json.dumps(base,ensure_ascii=False,indent=2)+'\n').encode()
  if hashlib.sha256(raw).hexdigest()==x['original_expected_sha256']:
   p=out/'recovered'/target.name;p.write_bytes(raw);matches.append({'original_path':str(target),'expected_sha256':x['original_expected_sha256'],'recovered_file':str(p),'selected_native_sections':[{'log':k[2],'line':k[3],'citation_paths':paths} for (k,paths),bit in zip(groups,bits) if bit],'method':'Complete actual native printed source section substituted for quote; exact original frozen rawSHA match required'});break
(out/'native-section-recovery.json').write_text(json.dumps({'matches':matches,'search':records},indent=2)+'\n');print(json.dumps({'matches':matches,'search':records},indent=2))
