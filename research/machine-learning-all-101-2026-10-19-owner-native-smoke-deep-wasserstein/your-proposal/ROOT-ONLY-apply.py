#!/usr/bin/env python3
"""ROOT ONLY. Author syntax-checks but does not execute this script.
New module + unique registry insertions + finite_smoke ARRAY field CAS only.
Preserves all original obligations and all unrelated contract/registry content.
"""
from pathlib import Path
import json, hashlib, os, tempfile, re
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
assert (ROOT/'CLAUDE.md').exists()
load=lambda f:json.loads(Path(f).read_text())
sha=lambda b:hashlib.sha256(b).hexdigest()
normal=lambda s:re.sub(r'\s+',' ',s).strip()
ops=load(BASE/'root-integration-operations.json')
for guard in ops['item_source_guards']:
    target=ROOT/guard['path'];assert sha(target.read_bytes())==guard['sha256'], 'Source drift: '+str(target)
for assertion in ops['assertions']:
    assert normal(assertion['asserts']) in normal((ROOT/assertion['path']).read_text()), 'Assertion excerpt drift: '+assertion['path']
pending={}
module=ops['module'];target=ROOT/module['destination'];assert not target.exists(), 'New module target already exists'
candidate=(ROOT/module['candidate']).read_bytes();assert sha(candidate)==module['sha256'];pending[target]=(None,candidate)
registry=ops['registry'];target=ROOT/registry['actual_path'];before=target.read_bytes();text=before.decode()
assert 'deepWassersteinMLChecks' not in text, 'Module already registered'
# The full registry snapshot is historical only: other owner modules may have
# merged meanwhile. Unique excerpt operations compose with those imports/spreads.
for op in registry['operations']:
    assert text.count(op['expected_unique_excerpt'])==1, 'Registry insertion context drift'
    text=text.replace(op['expected_unique_excerpt'],op['replacement'],1)
pending[target]=(before,text.encode())
contracts={}
for op in ops['finite_smoke_array_field_CAS']:
    assert op['field']=='finite_smoke'
    target=ROOT/op['file']
    if target not in contracts:contracts[target]=(target.read_bytes(),load(target))
    row=contracts[target][1]['contracts'][op['consumer']]
    assert row.get('finite_smoke')==op['expected'], 'finite_smoke CAS drift: '+op['consumer']
    assert len(op['expected'])==len(op['replacement']), 'Original obligation removed'
    for old,new in zip(op['expected'],op['replacement']):
        for key,value in old.items():
            if key not in ['check','asserts']:assert new.get(key)==value, 'Original obligation field changed'
        if 'check' in old:assert new.get('original_check')==old['check']
        if 'asserts' in old:assert new.get('original_asserts')==old['asserts']
    row['finite_smoke']=op['replacement']
for target,(before,doc) in contracts.items():pending[target]=(before,(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode())
def recheck():
    for guard in ops['item_source_guards']:assert sha((ROOT/guard['path']).read_bytes())==guard['sha256'], 'Concurrent source drift'
    for target,(before,_) in pending.items():
        assert (not target.exists()) if before is None else target.read_bytes()==before, 'Concurrent target drift: '+str(target)
recheck();temps={};applied=[]
try:
    for target,(before,after) in pending.items():
        fd,tmp=tempfile.mkstemp(prefix='.'+target.name+'.owner-',dir=target.parent)
        with os.fdopen(fd,'wb') as stream:stream.write(after)
        os.chmod(tmp,(target.stat().st_mode & 0o777) if before is not None else 0o644);temps[target]=Path(tmp)
    recheck()
    for target,tmp in temps.items():os.replace(tmp,target);applied.append(target)
except BaseException:
    for target in reversed(applied):
        before=pending[target][0]
        if before is None:target.unlink()
        else:target.write_bytes(before)
    raise
finally:
    for tmp in temps.values():
        if tmp.exists():tmp.unlink()
print(json.dumps({'module_created':module['destination'],'registry_insertions':len(registry['operations']),'finite_smoke_arrays':len(ops['finite_smoke_array_field_CAS']),'item_sources_changed':0,'native_credit':False}))
