#!/usr/bin/env python3
"""ROOT ONLY; author syntax-checks this file but does not execute it.
Guarded source format, contract mirrors and two unique shared-plan excerpts.
No workflow transitions, readiness, gates, manifests or hash artifacts.
"""
from pathlib import Path
import json, hashlib, os, tempfile, re
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
assert (ROOT/'CLAUDE.md').exists()
load=lambda f:json.loads(Path(f).read_text())
sha=lambda raw:hashlib.sha256(raw).hexdigest()
ops=load(BASE/'root-integration-operations.json')
for guard in load(BASE/'current-context-guards.json')['guards']:
    target=ROOT/guard['path']
    assert target.is_file() and sha(target.read_bytes())==guard['sha256'], 'Context drift: '+str(target)
pending={}
for op in ops['source_operations']+ops['shared_plan_operations']:
    target=ROOT/op['actual_path'];before=target.read_bytes();candidate=(ROOT/op['proposed_path']).read_bytes()
    assert sha(before)==op['actual_sha256'] and sha(candidate)==op['proposed_sha256'], 'Preimage/candidate drift: '+str(target)
    assert (ROOT/op['before_path']).read_bytes()==before
    if 'expected_unique_excerpt' in op:
        text=before.decode();assert text.count(op['expected_unique_excerpt'])==1
        assert text.replace(op['expected_unique_excerpt'],op['replacement'],1).encode()==candidate
    else:
        assert before.split(b'## Proof\n',1)[0]==candidate.split(b'## Proof\n',1)[0], 'Statement/FM drift'
        def proof_blocks(raw):
            return sorted(' '.join(x.split()) for x in re.split(r'^\d+\.\d+ ',raw.decode().split('## Proof\n',1)[1],flags=re.M)[1:])
        assert proof_blocks(before)==proof_blocks(candidate), 'Mathematical sentence/tag drift'
    pending[target]=(before,candidate)
contracts={}
for op in ops['contract_field_operations']:
    target=ROOT/op['file']
    if target not in contracts:contracts[target]=(target.read_bytes(),load(target))
    row=contracts[target][1]['contracts'][op['consumer']]
    assert row.get(op['field'])==op['expected'], 'Contract field drift: '+op['consumer']+'.'+op['field']
    row[op['field']]=op['replacement']
for target,(before,doc) in contracts.items():pending[target]=(before,(json.dumps(doc,indent=2)+'\n').encode())
for target,(before,_) in pending.items():assert target.read_bytes()==before, 'Concurrent drift: '+str(target)
temps={};applied=[]
try:
    for target,(_,after) in pending.items():
        fd,tmp=tempfile.mkstemp(prefix='.'+target.name+'.owner-',dir=target.parent)
        with os.fdopen(fd,'wb') as stream:stream.write(after)
        os.chmod(tmp,target.stat().st_mode & 0o777);temps[target]=Path(tmp)
    for target,(before,_) in pending.items():assert target.read_bytes()==before, 'Concurrent drift: '+str(target)
    for target,tmp in temps.items():os.replace(tmp,target);applied.append(target)
except BaseException:
    for target in reversed(applied):target.write_bytes(pending[target][0])
    raise
finally:
    for tmp in temps.values():
        if tmp.exists():tmp.unlink()
print(json.dumps({'source_format_files':len(ops['source_operations']),'contract_fields':len(ops['contract_field_operations']),'shared_plan_excerpts':len(ops['shared_plan_operations']),'native_credit':False}))
