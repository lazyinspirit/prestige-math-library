from pathlib import Path
import yaml,json,hashlib,datetime,re
r='physics-non-fluid-129-2026-10-21-r2';b=Path(f'research/{r}-owner-hawking-metadata/stress-followup');texts={p.stem:p.read_text() for p in Path('items').glob('*.md')};deps={};errors=[]
for id,s in texts.items():
 if 'tgrx-' in s or 'qftx-' in s:
  try:
   fm=re.match(r'^---\r?\n(.*?)\r?\n---(?:\r?\n|$)',s,re.S).group(1);d=yaml.safe_load(fm);deps[id]=(d.get('deps') or [])+(d.get('justified_by') or [])
  except Exception as e:errors.append({'id':id,'error':str(e)})
assert not errors,errors
owners={}
for p in Path('research').glob(f'{r}-batch-*.pages.json'):
 for page in json.loads(p.read_text()):
  for row in page.get('items',[])+page.get('examples',[]):
   if isinstance(row,dict):owners[row['id']]={'batch':int(re.search(r'batch-(\d+)',p.name)[1]),'page':page['id']}
def closure(seed):
 seen=set();todo=[seed]
 while todo:
  s=todo.pop()
  for id,dd in deps.items():
   if s in dd and id not in seen and id!=seed:seen.add(id);todo.append(id)
 return sorted(seen)
old=set(x['id'] for x in json.load(open(f'research/{r}-owner-hawking-metadata/relation-report.json'))['consumer_reviews']);new=set(closure('def-qftx-wavefront-hadamard'))-old
snap=b/'snapshots';snap.mkdir(exist_ok=True);rows=[]
for id in sorted(new):
 p=snap/(id+'.md')
 if p.exists() and p.read_text()!=texts[id]:
  archive=snap/(id+'.previous.md');assert not archive.exists();p.rename(archive)
 if not p.exists():p.write_text(texts[id])
 rows.append({'id':id,'owner':owners.get(id),'path':str(p),'raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'deps':deps[id]})
(b/'new-consumer-closure.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'hadamard_full_closure':closure('def-qftx-wavefront-hadamard'),'hawking_full_closure':closure('post-tgrx-free-collapse-scattering'),'stress_contract_reverse_closure':closure('def-tgrx-hadamard-stress-contract'),'semiclassical_reverse_closure':closure('post-tgrx-semiclassical-equation'),'new_since_relation_report':rows},indent=2)+'\n');print(json.dumps(rows,indent=2))
