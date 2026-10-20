#!/usr/bin/env python3
"""Root-only guarded metadata/registry apply. Prepared; never run by author."""
from pathlib import Path
import json,hashlib,re,tempfile,os,copy
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
sha=lambda x:hashlib.sha256(x).hexdigest()
load=lambda n:json.loads((BASE/n).read_text())
binding=load('binding.json')
assert sha(Path(__file__).read_bytes())==binding['root_only_script_sha256']
for name,digest in binding['proposal_guards'].items():assert sha((BASE/name).read_bytes())==digest,name
for row in load('source-guards.json')['sources']:
 raw=(ROOT/row['target']).read_bytes();assert sha(raw)==row['sha256'],row['target'];assert row['asserts'] in raw.decode()
module=ROOT/binding['module_target'];assert not module.exists(),f'new module already exists: {module}'
ops=[(module,None,(BASE/'tools/finite-smoke-ml-pacmdp.mjs').read_bytes())]
delta=load('registry-delta.json');registry=ROOT/delta['target'];before=registry.read_bytes();after=before.decode()
assert 'pacMDPMLChecks' not in after
for d in delta['edits']:
 assert after.count(d['before'])==1,'unique registry guard';after=after.replace(d['before'],d['after'],1)
ops.append((registry,before,after.encode()))
arrays=load('finite-smoke-array-ops.json')['operations'];target=ROOT/arrays[0]['target'];before=target.read_bytes();current=json.loads(before);expected=copy.deepcopy(current);text=before.decode();decoder=json.JSONDecoder()
for row in arrays:
 assert row['target']==str(target.relative_to(ROOT))
 _,id,field=row['path'];assert field=='finite_smoke';assert current['contracts'][id][field]==row['before'],f'array CAS {id}'
 # Locate the exact contract object's array in current JSON; replace that raw
 # span only. Every foreign field and all outside bytes remain intact.
 contract_key=re.search(r'(?m)^    '+re.escape(json.dumps(id))+r'\s*:\s*',text)
 assert contract_key,f'contract location {id}'
 start=contract_key.end();obj,used=decoder.raw_decode(text[start:]);assert obj==current['contracts'][id]
 matches=list(re.finditer(r'"finite_smoke"\s*:\s*',text[start:start+used]));assert len(matches)==1
 arr_start=start+matches[0].end();arr,arr_used=decoder.raw_decode(text[arr_start:]);assert arr==row['before']
 replacement=json.dumps(row['after'],ensure_ascii=False,indent=2).replace('\n','\n      ')
 text=text[:arr_start]+replacement+text[arr_start+arr_used:]
 expected['contracts'][id][field]=row['after']
assert json.loads(text)==expected,'only finite_smoke arrays may change'
ops.append((target,before,text.encode()))
def atomic(path,data):
 fd,tmp=tempfile.mkstemp(prefix='.pacmdp-smoke-',dir=path.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(data);f.flush();os.fsync(f.fileno())
  os.replace(tmp,path)
 finally:
  if os.path.exists(tmp):os.unlink(tmp)
# All guards above precede the first mutation. Root must serialize application.
applied=[]
try:
 for path,old,new in ops:
  assert (path.read_bytes() if path.exists() else None)==old,f'recheck {path}'
  atomic(path,new);applied.append((path,old,new))
except BaseException:
 for path,old,new in reversed(applied):
  assert path.read_bytes()==new,f'rollback conflict {path}'
  if old is None:path.unlink()
  else:atomic(path,old)
 raise
print(json.dumps({'applied_files':len(ops),'finite_smoke_arrays':len(arrays),'native_gate_credit':False}))
