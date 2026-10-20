#!/usr/bin/env python3
"""ROOT ONLY. Not executed by proposal author. Guard all inputs before changes.
Applies source and per-key contract proposals; no gates, manifests or engine changes.
"""
from pathlib import Path
import json, hashlib, os, tempfile
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[2]
assert (ROOT/'CLAUDE.md').exists(), ROOT
load=lambda f:json.loads(Path(f).read_text())
sha=lambda raw:hashlib.sha256(raw).hexdigest()
ops=load(BASE/'root-integration-operations.json')
context=load(BASE/'current-context-guards.json')
# Validate the complete bound current affected context before preparing any writes.
for guard in context['guards']:
    path=ROOT/guard['path']
    assert path.is_file() and sha(path.read_bytes())==guard['sha256'], 'Context drift: '+str(path)
pending={}
for op in ops['source_operations']:
    target=ROOT/op['actual_path']; before=target.read_bytes()
    assert sha(before)==op['actual_sha256'], 'Source drift: '+str(target)
    candidate=(ROOT/op['proposed_path']).read_bytes()
    assert sha(candidate)==op['proposed_sha256'], 'Proposal drift: '+op['proposed_path']
    assert (ROOT/op['before_file']).read_bytes()==before, 'Before snapshot differs: '+str(target)
    if 'unique_source_excerpt' in op:
        text=before.decode(); assert text.count(op['unique_source_excerpt'])==1
        text=text.replace(op['unique_source_excerpt'],op['replacement'],1)
        if 'additional_format_operation' in op:
            extra=op['additional_format_operation']; assert text.count(extra['unique_source_excerpt'])==1
            text=text.replace(extra['unique_source_excerpt'],extra['replacement'],1)
        assert text.encode()==candidate, 'Unexpected candidate source edits: '+str(target)
    # All source edits are strictly below the proof heading.
    assert before.split(b'## Proof\n',1)[0]==candidate.split(b'## Proof\n',1)[0], 'Statement/FM drift'
    pending[target]=(before,candidate)
contracts={}
for op in ops['contract_field_operations']:
    target=ROOT/op['file']
    if target not in contracts:contracts[target]=(target.read_bytes(),load(target))
    doc=contracts[target][1]; row=doc['contracts'][op['consumer']]
    assert row.get(op['field'])==op['expected'], 'Contract field drift: '+op['consumer']+'.'+op['field']
    row[op['field']]=op['replacement']
for target,(before,doc) in contracts.items():
    pending[target]=(before,(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode())
# Recheck immediately before renames. Stage every file first, then apply; roll back if a rename fails.
for target,(before,_) in pending.items():assert target.read_bytes()==before, 'Concurrent drift: '+str(target)
temps={}; applied=[]
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
print(json.dumps({'applied_source_files':len(ops['source_operations']),'contract_field_operations':len(ops['contract_field_operations']),'native_credit':False}))
