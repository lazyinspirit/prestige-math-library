import json,pathlib,hashlib,datetime,re,sys
B=pathlib.Path(__file__).parent;ROOT=pathlib.Path.cwd();B=B.resolve().relative_to(ROOT);q=json.load(open(B/'queue.json'))['entries'];out=B/sys.argv[1];groups=sys.argv[2:];rows=[]
if out.exists():raise RuntimeError('Preserve existing batch: '+str(out))
sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def strings(x):
 if isinstance(x,str):yield x
 elif isinstance(x,dict):
  for v in x.values():yield from strings(v)
 elif isinstance(x,list):
  for v in x:yield from strings(v)
for group in groups:
 e=next(x for x in q if x['group']==group);rp=B/'adjudications'/f"{e['id']}.json";r=json.load(open(rp));rawsha=sha(e['source']);candidates=set()
 for s in strings(r):
  for rel in re.findall(r'(?:previews|diagram-checks|repair-preview)/[A-Za-z0-9_./-]+',s):
   f=B/rel.rstrip('.')
   if f.is_dir() and (f/'manifest.json').exists():candidates.add(f/'manifest.json')
   if f.name=='manifest.json' and f.exists():candidates.add(f)
  for rawpath in re.findall(r'research/math-library-rendering-repairs-2026-10-23/[^\s\"\x27<>;,]+',s):
   f=pathlib.Path(rawpath.rstrip('.'))
   if f.name=='manifest.json'and f.exists():candidates.add(f)
   if f.is_dir()and(f/'manifest.json').exists():candidates.add(f/'manifest.json')
   if f.parent.name=='screenshots'and(f.parent.parent/'manifest.json').exists():candidates.add(f.parent.parent/'manifest.json')
 good=[]
 for mp in candidates:
  try:
   m=json.load(open(mp));mi=next(x for x in m['items']if x['id']==e['id'])
   if mi['source_sha256']==rawsha:good.append(mp)
  except Exception:pass
 if not good:raise RuntimeError('No report-cited current native manifest: '+group)
 mp=max(good,key=lambda x:x.stat().st_mtime);pngs=[{'path':str(f),'detail':'original','sha256':sha(f)}for f in sorted((mp.parent/'screenshots').glob(e['id']+'--*.png'))]
 if not pngs:raise RuntimeError('No canonical tiles '+group)
 correction=r.get('correction','');scope=(correction if isinstance(correction,str)else json.dumps(correction,ensure_ascii=False))+' Bounded source/diagram mathematical and actual native original-resolution layout check; no whole-proof audit.'
 rows.append({'group':group,'id':e['id'],'source':e['source'],'current_source_raw_sha256':rawsha,'before_file':e['before_file'],'adjudication_file':str(rp),'adjudication_sha256':sha(rp),'preview_manifest':str(mp),'pngs':pngs,'scope':scope,**{k:e[k]for k in ['followup_before_file','followup_before_raw_sha256','followup_previous_report','followup_scope']if k in e}})
out.write_text(json.dumps({'prepared_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'rows':rows},indent=2)+'\n');print(out,len(rows),'items',sum(len(r['pngs'])for r in rows),'tiles')
