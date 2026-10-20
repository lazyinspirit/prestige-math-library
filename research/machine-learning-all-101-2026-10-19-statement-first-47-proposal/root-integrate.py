#!/usr/bin/env python3
"""Root-only17-source heading integration, prepared and never executed by delegate.
Root invocation: python3 THISFILE --apply. No metadata/state/plan/gates writes.
"""
import pathlib,json,hashlib,sys,datetime,tempfile,os,re
if sys.argv[1:]!=['--apply']:raise SystemExit('No mutation; root must explicitly invoke --apply.')
BASE=pathlib.Path(__file__).resolve().parent
ROOT=BASE.parents[1]
def sha(x):return hashlib.sha256(x).hexdigest()
def read(p):
 assert p.is_file() and not p.is_symlink(),f'Not a regular file: {p}'
 assert p.resolve().is_relative_to(ROOT)
 for a in p.parents:
  if a==ROOT:break
  assert not a.is_symlink(),f'Symlink ancestor: {a}'
 return p.read_bytes()
def unique(rows):
 d={}
 for k,v in rows:assert k not in d;d[k]=v
 return d
raw=read(BASE/'report.json')
assert sha(raw)=='37c88decb3fec86741f8a4ea1f7d26cab7c5d18e9905c6aedc4e731dd3bfe262','Frozen packet changed'
m=json.loads(raw,object_pairs_hook=unique)
assert m['actual_shared_writes'] is False and m['native_gate_credit'] is False and m['root_integration_executed'] is False
for p,h in m['context_guards'].items():assert sha(read(ROOT/p))==h,f'Context CAS failed: {p}'
prepared=[]
for row in m['rows']:
 p=ROOT/row['target'];assert row['target'].startswith('items/')
 before=read(p);assert sha(before)==row['before_sha256'],f'Current source CAS failed: {p}'
 s=before.decode();matches=list(re.finditer(r'^'+re.escape(row['before_heading'])+'$',s,re.M));assert len(matches)==1
 match=matches[0]
 assert sha(s[:match.start()].encode())==row['prefix_sha256'] and sha(s[match.end():].encode())==row['suffix_sha256']
 assert sha(s.split('---',2)[1].encode())==row['frontmatter_sha256']
 after=(s[:match.start()]+row['after_heading']+s[match.end():]).encode()
 assert sha(after)==row['after_sha256'] and read(ROOT/row['proposed'])==after
 assert after.decode().replace(row['after_heading'],row['before_heading'],1)==s,'Full text preservation failed'
 prepared.append((p,before,after))
assert len(prepared)==17 and len({str(p) for p,_,_ in prepared})==17
for p,b,a in prepared:assert read(p)==b,'Input moved during complete preflight'
archive=BASE/('root-apply-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));archive.mkdir()
receipt={'kind':'root-statement-first-format-only47','report_sha256':sha(raw),'native_gate_credit':False,'mathematical_cycles_reopened':False,'files':[]}
for p,b,a in prepared:
 rel=p.relative_to(ROOT);q=archive/'before'/rel;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b)
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
print(json.dumps({'integrated':17,'receipt':str((archive/'receipt.json').relative_to(ROOT)),'root_followthrough':'Actual full current format recertification and proof byte review remain root-owned.'}))
