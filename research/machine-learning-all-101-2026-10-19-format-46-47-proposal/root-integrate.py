#!/usr/bin/env python3
"""Prepared, never executed by delegate. Root only: python3 THISFILE --apply.
Formatting/metadata and separately authorized two proof notation typos only.
No plan, state, readiness, gates, history, Git or publication writes.
"""
import pathlib,json,hashlib,sys,copy,datetime,tempfile,os
if sys.argv[1:] != ['--apply']:raise SystemExit('No mutation. Root owner must explicitly invoke --apply.')
BASE=pathlib.Path(__file__).resolve().parent
ROOT=BASE.parents[1]
def sha(x):return hashlib.sha256(x).hexdigest()
def canonical(x):return sha(json.dumps(x,sort_keys=True,separators=(',',':'),ensure_ascii=False).encode())
def read(p):
 assert p.is_file() and not p.is_symlink(),f'Not a regular file: {p}'
 assert p.resolve().is_relative_to(ROOT)
 for a in p.parents:
  if a==ROOT:break
  assert not a.is_symlink(),f'Symlink ancestor: {a}'
 return p.read_bytes()
def unique(pairs):
 d={}
 for k,v in pairs:
  assert k not in d,f'Duplicate key: {k}'
  d[k]=v
 return d
def parse(x):return json.loads(x,object_pairs_hook=unique)
raw=read(BASE/'guarded-map.json')
assert sha(raw)=='0a828d62b5589dba7bece33cd6ad3ef19a313ed28001646a2642f105d4e6deb8','Frozen map changed'
m=parse(raw)
assert m['root_only'] is True and m['native_gate_credit'] is False
assert sha(read(BASE/'report.json'))==m['report_sha256']
for p,h in m['context_guards'].items():assert sha(read(ROOT/p))==h,f'Context CAS failed: {p}'
prepared=[]
for row in m['files']:
 assert row['target'].startswith('items/')
 p=ROOT/row['target'];before=read(p);after=read(ROOT/row['proposal'])
 assert sha(before)==row['before_sha256'] and sha(after)==row['after_sha256'],f'Carrier CAS failed: {p}'
 prepared.append((p,before,after))
for row in m['metadata']:
 assert row['target'] in [f'research/{m["run"]}-batch-{n}.proof-contracts.json' for n in [46,47]]
 p=ROOT/row['target'];before=read(p);old=parse(before);new=copy.deepcopy(old)
 assert sha(read(ROOT/row['proposal']))==row['proposal_sha256']
 for op in row['operations']:
  key=op['key'];assert key in new['contracts'] and canonical(new['contracts'][key])==op['before_canonical_sha256'],f'Contract-key CAS failed: {p}:{key}'
  new['contracts'][key]=copy.deepcopy(op['replacement'])
 reverted=copy.deepcopy(new)
 for op in row['operations']:reverted['contracts'][op['key']]=copy.deepcopy(old['contracts'][op['key']])
 assert reverted==old,'Foreign metadata value changed'
 prepared.append((p,before,(json.dumps(new,indent=2,ensure_ascii=False)+'\n').encode()))
assert len(prepared)==26 and len({str(p) for p,_,_ in prepared})==26
for p,b,a in prepared:assert read(p)==b,f'Input moved during complete preflight: {p}'
archive=BASE/('root-apply-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'))
archive.mkdir()
receipt={'kind':'root-only-format-46-47-integration','run':m['run'],'manifest_sha256':sha(raw),'native_gate_credit':False,'files':[],'foreign_metadata_values_preserved':True,'root_followthrough':'Current-input recertification and native checks remain root-owned.'}
for p,b,a in prepared:
 rel=p.relative_to(ROOT);dest=archive/'before'/rel;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b)
 receipt['files'].append({'path':str(rel),'before_sha256':sha(b),'after_sha256':sha(a)})
(archive/'prepared-receipt.json').write_text(json.dumps(receipt,indent=2)+'\n')
for p,b,a in prepared:
 assert read(p)==b,f'Last-moment CAS failed: {p}'
 fd,t=tempfile.mkstemp(prefix='.'+p.name+'.owner-',dir=p.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(a);f.flush();os.fsync(f.fileno())
  assert read(p)==b,f'Final CAS failed: {p}'
  os.replace(t,p)
 finally:
  if os.path.exists(t):os.unlink(t)
for p,b,a in prepared:assert read(p)==a
(archive/'receipt.json').write_text(json.dumps(receipt,indent=2)+'\n')
print(json.dumps({'integrated':len(prepared),'receipt':str((archive/'receipt.json').relative_to(ROOT))}))
