#!/usr/bin/env python3
"""ROOT ONLY. Not executed by proposal author. Refuses to race native reader52 or split52.
Applies one source CAS and exact contract/manifest field CAS; preserves other fields.
No engine state, hashes, readiness, gates or receipts are changed here.
"""
from pathlib import Path
import json,hashlib,os,tempfile
BASE=Path(__file__).resolve().parent;ROOT=BASE.parents[3]
assert (ROOT/'CLAUDE.md').is_file()
load=lambda p:json.loads(Path(p).read_text());sha=lambda b:hashlib.sha256(b).hexdigest()
def find_reader(v, task_key='3a-read:reader-52'):
    if isinstance(v,dict):
        if task_key in v:return v[task_key]
        for child in v.values():
            result=find_reader(child,task_key)
            if result is not None:return result
    elif isinstance(v,list):
        for child in v:
            result=find_reader(child,task_key)
            if result is not None:return result
    return None
def drained():
    state=load(ROOT/'.autopilot/machine-learning-all-101-2026-10-19/state.json')
    for key in ['3a-read:reader-52','3a-split:split-52']:
        task=find_reader(state,key)
        assert task is not None and task.get('endedAt') and task.get('lastExitOk'), 'Native52 reader/split not successfully terminal'
    refuter=find_reader(state,'3a-refute:refute-52')
    assert refuter is None, 'Native refute52 dispatched; root must re-evaluate integration race/guards'
    auth=load(ROOT/'research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-reader-post/batch-52/index.json')
    entry=next(row for row in auth['rows'] if row['id']=='lem-partial-energy-continuous-under-w2')
    assert entry['authenticated'] and sha((ROOT/entry['archive']).read_bytes())==entry['expected_native_post_sha256']=='4b975b2af9ca50e84c55995186261530f844d00e9bc7af6a1c48f7da363fb039'

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
