from pathlib import Path
import json,re,hashlib,difflib
r='advanced-qft-supersymmetry-build-2026-10-23';b=Path(f'research/{r}-owner-resolution/native-canonical-repair-v1/group3');prep=json.loads((b/'preparation.json').read_text());ids={x['id']:x for x in prep['scope']}
def h(s):return hashlib.sha256(s).hexdigest()
def sub(s,m):return re.sub(r'(?<![\d.])(\d+\.\d+)(?!\d|\.\d)',lambda x:m.get(x[0],x[0]),s)
def change(v,m,k=''):
 if isinstance(v,str):
  if k=='id':
   q=re.fullmatch(r'step-(\d+)-(\d+)',v)
   if q:return 'step-'+m.get(q[1]+'.'+q[2],q[1]+'.'+q[2]).replace('.','-')
  return sub(v,m)
 if isinstance(v,list):return [change(x,m) for x in v]
 if isinstance(v,dict):return {k:change(x,m,k) for k,x in v.items()}
 return v
def diff(a,z,p=''):
 if isinstance(a,dict) and isinstance(z,dict):return sum((diff(a[k],z[k],p+'/'+k) for k in a),[])
 if isinstance(a,list) and isinstance(z,list) and len(a)==len(z):return sum((diff(x,y,p+'/'+str(i)) for i,(x,y) in enumerate(zip(a,z))),[])
 return [] if a==z else [{'pointer':p,'before':a,'after':z}]
# All source guards checked before any canonical mutation.
for id,row in ids.items():assert h(Path('items',id+'.md').read_bytes())==row['before_sha256'],id
records=[]
for id,row in ids.items():
 p=Path('items',id+'.md');p.write_bytes((b/(id+'.proposed.md')).read_bytes());records.append({'source':str(p),'before_sha256':row['before_sha256'],'after_sha256':h(p.read_bytes()),'mapping':row['mapping']})
for n in [27,63,64]:
 p=Path(f'research/{r}-batch-{n}.proof-contracts.json');raw=p.read_bytes();d=json.loads(raw);old=json.loads(raw)
 for id,row in ids.items():
  if id not in d['contracts']:continue
  c=d['contracts'][id];m=row['mapping']
  for k in ['derivations','routine_steps','boundaries','finite_checks']:
   if k in c:c[k]=change(c[k],m)
  if c.get('derivations'):c['derivations'].sort(key=lambda x:tuple(map(int,x['step'].split('.'))))
 # Synchronous fresh-read/write: no async wait or unrelated fields replaced.
 assert p.read_bytes()==raw
 p.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
 changes=diff(old,d);(b/(p.name+'.diff.json')).write_text(json.dumps(changes,indent=2,ensure_ascii=False)+'\n')
 (b/(p.name+'.patch')).write_text(''.join(difflib.unified_diff(raw.decode().splitlines(True),p.read_text().splitlines(True),fromfile=str(p),tofile=str(p))))
 records.append({'contract':str(p),'before_sha256':h(raw),'after_sha256':h(p.read_bytes()),'changed_fields':len(changes)})
(b/'applied.json').write_text(json.dumps(records,indent=2)+'\n')
