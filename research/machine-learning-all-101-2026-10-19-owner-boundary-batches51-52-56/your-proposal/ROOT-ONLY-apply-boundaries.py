#!/usr/bin/env python3
"""ROOT ONLY: metadata boundary-object CAS; author has not executed this file.
The separate width0 source repair was already accepted/applied by root. This
script never edits any source, finite_smoke array, manifest, tool or native state.
"""
from pathlib import Path
import json,hashlib,os,tempfile,copy
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
assert (ROOT/'CLAUDE.md').exists()
load=lambda f:json.loads(Path(f).read_text())
sha=lambda b:hashlib.sha256(b).hexdigest()
ops=load(BASE/'boundary-object-CAS-all.json');guards=load(BASE/'source-guards-all.json')
for g in guards:assert sha((ROOT/g['path']).read_bytes())==g['sha256'], 'Current source drift: '+g['path']
contracts={}
for op in ops:
    target=ROOT/op['file']
    if target not in contracts:contracts[target]=(target.read_bytes(),load(target))
    rows=contracts[target][1]['contracts'][op['consumer']]['boundaries']
    indices=[i for i,row in enumerate(rows) if row.get('case')==op['boundary_case']]
    assert len(indices)==1 and rows[indices[0]]==op['expected'], 'Boundary CAS drift: '+op['consumer']+':'+op['boundary_case']
    assert set(op['expected'])<=set(op['replacement'])
    permitted={'status','reason' if 'reason' in op['expected'] else 'evidence','reviewed'}
    for key,value in op['expected'].items():
        if key not in permitted:assert op['replacement'][key]==value, 'Unknown field changed'
    rows[indices[0]]=op['replacement']
pending={}
for target,(before,doc) in contracts.items():
    original=json.loads(before)
    for id,row in original['contracts'].items():
        assert row.get('finite_smoke')==doc['contracts'][id].get('finite_smoke'), 'finite_smoke modified'
    pending[target]=(before,(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode())
def recheck():
    for g in guards:assert sha((ROOT/g['path']).read_bytes())==g['sha256'], 'Concurrent source drift'
    for target,(before,_) in pending.items():assert target.read_bytes()==before, 'Concurrent contract drift: '+str(target)
recheck();temps={};applied=[]
try:
    for target,(_,after) in pending.items():
        fd,tmp=tempfile.mkstemp(prefix='.'+target.name+'.owner-',dir=target.parent)
        with os.fdopen(fd,'wb') as stream:stream.write(after)
        os.chmod(tmp,target.stat().st_mode & 0o777);temps[target]=Path(tmp)
    recheck()
    for target,tmp in temps.items():os.replace(tmp,target);applied.append(target)
except BaseException:
    for target in reversed(applied):target.write_bytes(pending[target][0])
    raise
finally:
    for tmp in temps.values():
        if tmp.exists():tmp.unlink()
print(json.dumps({'contract_files':len(pending),'boundary_objects':len(ops),'source_edits':0,'finite_smoke_changes':0,'native_credit':False}))
