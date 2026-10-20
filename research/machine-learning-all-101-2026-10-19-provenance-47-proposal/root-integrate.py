#!/usr/bin/env python3
"""Root-only metadata integration. Prepared, never executed by delegate.
Root invocation: python3 THISFILE --apply. No state/plan/contracts/gates writes.
"""
import pathlib,json,hashlib,re,sys,datetime,tempfile,os
if sys.argv[1:]!=['--apply']:raise SystemExit('No mutation. Root must explicitly invoke --apply.')
BASE=pathlib.Path(__file__).resolve().parent
ROOT=BASE.parents[1]
def sha(x):return hashlib.sha256(x).hexdigest()
def read(p):
 assert p.is_file() and not p.is_symlink(),f'Expected regular file: {p}'
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
assert sha(raw)=='50766533cefe59603689e483305b2701c82ae43d6190ee7366332aaeeba5059a','Frozen metadata packet changed'
m=json.loads(raw,object_pairs_hook=unique)
assert m['actual_shared_writes'] is False and m['root_integration_executed'] is False and m['native_gate_credit'] is False
for p,h in m['native_evidence'].items():assert sha(read(ROOT/p))==h,f'Native/context evidence changed: {p}'
prepared=[]
for row in m['rows']:
 assert row['target'].startswith('items/')
 p=ROOT/row['target'];before=read(p);assert sha(before)==row['before_sha256'],f'Current full carrier CAS failed: {p}'
 s=before.decode();parts=s.split('---',2);assert len(parts)==3
 for field in row['require_absent_frontmatter_fields']:
  assert not re.search(r'^'+re.escape(field)+r':',parts[1],re.M),f'Frontmatter absent-field CAS failed: {p}:{field}'
 assert sha(parts[2].encode())==row['body_sha256']
 after=('---'+parts[1]+row['append_exact_frontmatter']+'---'+parts[2]).encode()
 assert after==read(ROOT/row['proposed']) and sha(after)==row['after_sha256']
 assert after.decode().split('---',2)[2]==parts[2],'Body changed'
 prepared.append((p,before,after))
assert len(prepared)==18 and len({str(p) for p,_,_ in prepared})==18
for p,b,a in prepared:assert read(p)==b,'Input moved during preflight'
archive=BASE/('root-apply-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));archive.mkdir()
receipt={'kind':'metadata-only-provenance47-root-integration','report_sha256':sha(raw),'native_gate_credit':False,'bodies_unchanged':True,'files':[]}
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
print(json.dumps({'integrated':18,'receipt':str((archive/'receipt.json').relative_to(ROOT)),'root_followthrough':'Current-input metadata/readiness recertification and ordinary native checks remain root-owned.'}))
