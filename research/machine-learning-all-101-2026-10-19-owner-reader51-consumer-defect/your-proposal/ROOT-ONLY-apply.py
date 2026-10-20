#!/usr/bin/env python3
"""ROOT ONLY. Not executed by proposal author. Refuses to race native reader52.
Applies one source CAS and exact contract/manifest field CAS; preserves other fields.
No engine state, hashes, readiness, gates or receipts are changed here.
"""
from pathlib import Path
import json,hashlib,os,tempfile
BASE=Path(__file__).resolve().parent;ROOT=BASE.parents[2]
assert (ROOT/'CLAUDE.md').is_file()
load=lambda p:json.loads(Path(p).read_text());sha=lambda b:hashlib.sha256(b).hexdigest()
def find_reader(v):
    if isinstance(v,dict):
        if '3a-read:reader-52' in v:return v['3a-read:reader-52']
        for child in v.values():
            result=find_reader(child)
            if result is not None:return result
    elif isinstance(v,list):
        for child in v:
            result=find_reader(child)
            if result is not None:return result
    return None
def drained():
    task=find_reader(load(ROOT/'.autopilot/machine-learning-all-101-2026-10-19/state.json'))
    assert task is not None and task.get('endedAt'), 'Native reader52 still active or unavailable; root must wait for drain and recheck/rebase guards'
drained();guards=load(BASE/'source-and-consumer-guards.json')
for g in guards:assert sha((ROOT/g['path']).read_bytes())==g['sha256'], 'Context drift: '+g['path']
pending={};docs={}
for op in load(BASE/'source-operations.json'):
    p=ROOT/op['path'];before=p.read_bytes();after=(ROOT/op['candidate']).read_bytes()
    assert sha(before)==op['expected_sha256'] and sha(after)==op['candidate_sha256']
    pending[p]=(before,after)
for op in load(BASE/'contract-field-CAS.json'):
    p=ROOT/op['file']
    if p not in docs:docs[p]=(p.read_bytes(),load(p))
    row=docs[p][1]['contracts'][op['consumer']]
    assert row[op['field']]==op['expected'], 'Contract field drift: '+op['consumer']+':'+op['field']
    row[op['field']]=op['replacement']
for op in load(BASE/'manifest-field-CAS.json'):
    p=ROOT/op['file']
    if p not in docs:docs[p]=(p.read_bytes(),load(p))
    pages=[page for page in docs[p][1] if page['id']==op['page']];assert len(pages)==1
    rows=[r for r in pages[0].get('items',[])+pages[0].get('examples',[]) if r['id']==op['item']];assert len(rows)==1
    assert rows[0][op['field']]==op['expected'], 'Manifest field drift'
    rows[0][op['field']]=op['replacement']
for p,(before,doc) in docs.items():pending[p]=(before,(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode())
def recheck():
    drained()
    for g in guards:assert sha((ROOT/g['path']).read_bytes())==g['sha256'], 'Concurrent context drift'
    for p,(before,after) in pending.items():assert p.read_bytes()==before, 'Concurrent target drift: '+str(p)
recheck();temps={};applied=[]
try:
    for p,(before,after) in pending.items():
        fd,tmp=tempfile.mkstemp(prefix='.'+p.name+'.reader51-owner-',dir=p.parent)
        with os.fdopen(fd,'wb') as stream:stream.write(after)
        os.chmod(tmp,p.stat().st_mode & 0o777);temps[p]=Path(tmp)
    recheck()
    for p,tmp in temps.items():os.replace(tmp,p);applied.append(p)
except BaseException:
    for p in reversed(applied):p.write_bytes(pending[p][0])
    raise
finally:
    for tmp in temps.values():
        if tmp.exists():tmp.unlink()
print(json.dumps({'source_CAS':1,'contract_field_CAS':3,'manifest_deps_CAS':1,'files':len(pending),'gates_run':False,'native_credit':False}))
