from pathlib import Path
import json,hashlib,datetime,re,yaml
run='physics-cm-qm-gr-79-2026-10-11';out=Path('research')/(run+'-resumed-orchestration/gr-recovery');p=Path('research')/(run+'-resumed-orchestration/metadata/settled45-dependency-level-deltas/proposal.json');d=json.loads(p.read_text());h=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest()
for g in d['rawguards']:assert h(g['path'])==g['raw_sha256'],g['path']
rows={};pages={};aliases={}
for mp in Path('research').glob(run+'-batch-*.pages.json'):
 for page in json.loads(mp.read_text()):
  for row in page['items']:
   rows[row['id']]=row;pages[row['id']]=str(mp)
   for a in row.get('aliases',[]):aliases[a]=row['id']
need=set(d['target_drained_items']);q=list(need);deps={}
while q:
 i=q.pop();src=Path('items',i+'.md');fm=yaml.safe_load(src.read_text().split('---',2)[1]);deps[i]=fm.get('deps',[]) or []
 for a in fm.get('aliases',[]) or []:aliases[a]=i
 for dep in deps[i]:
  dep=aliases.get(dep,dep)
  if dep in rows and dep not in need:need.add(dep);q.append(dep)
levels={};visiting=set()
def level(i):
 if i in levels:return levels[i]
 assert i not in visiting,('cycle',i);visiting.add(i);z=[level(aliases.get(x,x)) for x in deps[i] if aliases.get(x,x) in rows];v=1+max(z) if z else 0;visiting.remove(i);levels[i]=v;return v
for i in need:level(i)
backup=out/'before-levels';backup.mkdir(exist_ok=True);mdocs={};sources={};changes=[]
for r in d['level_changes']:
 i=r['id'];assert i in d['target_drained_items'];assert levels[i]==r['expected_dependency_level'];src=Path(r['carrier_guard']['path']);assert h(src)==r['carrier_guard']['raw_sha256'];body=src.read_text();parts=body.split('---',2);fm=yaml.safe_load(parts[1]);delta=r['atomic_level_delta']['carrier_frontmatter'];assert fm.get('dependency_level')==delta.get('before');v=delta['after'];new,count=re.subn(r'^dependency_level:[^\n]*$',f'dependency_level: {v}',parts[1],flags=re.M)
 if count==0:new=parts[1].rstrip()+f'\ndependency_level: {v}\n'
 else:assert count==1
 sources[str(src)]='---'+new+'---'+parts[2];mp=pages[i];md=mdocs.setdefault(mp,json.loads(Path(mp).read_text()));rs=[x for pg in md for x in pg['items'] if x['id']==i];assert len(rs)==1 and rs[0]==r['before_manifest_row'];assert rs[0].get('dependency_level')==r['atomic_level_delta']['manifest_field']['before'];rs[0]['dependency_level']=v;changes.append({'id':i,'before_carrier_level':delta.get('before'),'after_level':v})
for path in list(sources)+list(mdocs):
 dest=backup/Path(path).name;assert not dest.exists();dest.write_bytes(Path(path).read_bytes())
for path,body in sources.items():Path(path).write_text(body)
for path,md in mdocs.items():Path(path).write_text(json.dumps(md,indent=2,ensure_ascii=False)+'\n')
report={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Independently recalculated scoped DAG levels, exact15 metadata field fixes only; outside-context supplier deferred to root; no readiness/gates/source acceptance','cycle':1,'cap':2,'authenticated_guards':len(d['rawguards']),'target_count':len(d['target_drained_items']),'changes':changes,'files':[{'path':path,'before_raw_sha256':h(backup/Path(path).name),'after_raw_sha256':h(path)} for path in list(sources)+list(mdocs)]};(out/'dependency-level-integration.json').write_text(json.dumps(report,indent=2)+'\n');print('Integrated15 exact level fields; independent DAG verified; outside-context supplier untouched')
