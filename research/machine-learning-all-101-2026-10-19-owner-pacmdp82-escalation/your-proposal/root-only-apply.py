#!/usr/bin/env python3
"""Root-only serialized application. Prepared but NOT RUN by proposal author."""
from pathlib import Path
import hashlib,json,os,tempfile
ROOT=Path(__file__).resolve().parents[3]
BASE=Path(__file__).resolve().parent
sha=lambda b:hashlib.sha256(b).hexdigest()
load=lambda n:json.loads((BASE/n).read_text())
binding=load('binding.json')
assert sha((BASE/'integration-manifest.json').read_bytes())==binding['integration_manifest_sha256']
for n,d in binding['guarded_delta_sha256'].items():assert sha((BASE/n).read_bytes())==d,n
ops=[]
for row in load('integration-manifest.json')['files']:
 target=ROOT/row['target'];proposed=ROOT/row['proposed'];before=target.read_bytes() if target.exists() else None
 assert (sha(before) if before is not None else None)==row['before_raw_sha256'],f'CAS source/metadata guard {target}'
 after=proposed.read_bytes();assert sha(after)==row['proposed_raw_sha256'],f'proposal guard {proposed}'
 ops.append((target,before,after))
for name in ['plan-delta.json','page-items-field-delta.json']:
 d=load(name);target=ROOT/d['target'];before=target.read_bytes();s=before.decode();assert s.count(d['old_fragment'])==1,f'unique semantic guard {target}'
 ops.append((target,before,s.replace(d['old_fragment'],d['new_fragment'],1).encode()))
d=load('structured-description-delta.json');target=ROOT/d['target'];before=target.read_bytes();obj=json.loads(before);raw=before.decode()
for e in d['edits']:
 v=obj
 for k in e['path'][:-1]:v=v[k]
 k=e['path'][-1];assert v[k].count(e['old_fragment'])==1,f'structured semantic guard {target}'
 old=json.dumps(e['old_fragment'],ensure_ascii=False)[1:-1]
 new=json.dumps(e['new_fragment'],ensure_ascii=False)[1:-1]
 assert raw.count(old)==1,f'unique raw structured semantic guard {target}'
 raw=raw.replace(old,new,1)
 v[k]=v[k].replace(e['old_fragment'],e['new_fragment'],1)
assert json.loads(raw)==obj,'raw replacement semantic validation'
ops.append((target,before,raw.encode()))
assert len({p for p,_,_ in ops})==len(ops)
def atomic(p,data):
 p.parent.mkdir(parents=True,exist_ok=True)
 fd,tmp=tempfile.mkstemp(prefix='.pac82-',dir=p.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(data);f.flush();os.fsync(f.fileno())
  os.replace(tmp,p)
 finally:
  if os.path.exists(tmp):os.unlink(tmp)
# All guards are checked before the first mutation. Root must serialize this operation.
applied=[]
try:
 for p,old,new in ops:
  assert (p.read_bytes() if p.exists() else None)==old,f'recheck {p}'
  atomic(p,new);applied.append((p,old,new))
except BaseException:
 for p,old,new in reversed(applied):
  assert p.read_bytes()==new,f'rollback conflict {p}'
  if old is None:p.unlink()
  else:atomic(p,old)
 raise
print(json.dumps({'applied':len(ops),'native_gate_credit':False,'recertification':'Root-owned; refresh controlling prose digests separately.'}))
