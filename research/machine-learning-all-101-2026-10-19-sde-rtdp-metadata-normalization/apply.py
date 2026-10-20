#!/usr/bin/env python3
"""Prepared metadata-only source-reference CAS. Root only; delegate did not run it."""
import pathlib,json,hashlib,sys,datetime,os,tempfile
if sys.argv[1:]!=['--apply']:raise SystemExit('No mutation. Root must explicitly use --apply.')
BASE=pathlib.Path(__file__).resolve().parent;ROOT=BASE.parents[1]
d=json.loads((BASE/'proposals.json').read_text());prepared=[]
for row in d['proposals']:
 p=ROOT/row['path'];q=ROOT/row['proposed'];assert p.is_file() and not p.is_symlink() and q.is_file() and not q.is_symlink()
 before=p.read_bytes();after=q.read_bytes();assert hashlib.sha256(before).hexdigest()==row['before_raw_sha256'];assert hashlib.sha256(after).hexdigest()==row['proposed_raw_sha256']
 old=row['unique_substring_cas']['old'];new=row['unique_substring_cas']['replacement'];text=before.decode();assert text.count(old)==1 and text.replace(old,new,1).encode()==after
 assert before.decode().split('---',2)[2]==after.decode().split('---',2)[2], 'Mathematical body must be byte identical'
 prepared.append((p,before,after))
# All inputs and proposed bytes validated before any archive or write.
archive=BASE/('root-apply-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));assert not archive.exists();archive.mkdir()
for p,before,after in prepared:
 out=archive/p.relative_to(ROOT);out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(before)
for p,before,after in prepared:assert p.read_bytes()==before and not p.is_symlink()
for p,before,after in prepared:
 assert p.read_bytes()==before;fd,tmp=tempfile.mkstemp(prefix='.'+p.name+'.refs-',dir=p.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(after);f.flush();os.fsync(f.fileno())
  os.replace(tmp,p)
 finally:
  if os.path.exists(tmp):os.unlink(tmp)
print(json.dumps({'metadata_only_files':len(prepared),'before_archive':str(archive.relative_to(ROOT)),'native_history_mutated':False,'remaining':'Root current source hash/readiness recertification and current scoped checks.'},indent=2))
