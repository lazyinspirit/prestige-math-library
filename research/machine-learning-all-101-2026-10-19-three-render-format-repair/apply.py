#!/usr/bin/env python3
"""Root-only delimiter/quote-mirror integration, prepared but not run by delegate."""
import pathlib,json,sys,hashlib,datetime,os,tempfile,copy,re
if sys.argv[1:]!=['--apply']:raise SystemExit('No mutation. Root must explicitly invoke --apply.')
BASE=pathlib.Path(__file__).resolve().parent;ROOT=BASE.parents[1];d=json.loads((BASE/'proposals.json').read_text());prepared=[]
def digest(b):return hashlib.sha256(b).hexdigest()
for row in d['proposals']:
 p=ROOT/row['path'];q=ROOT/row['proposed'];assert p.is_file() and q.is_file() and not p.is_symlink() and not q.is_symlink();before=p.read_bytes();after=q.read_bytes();assert digest(before)==row['before_raw_sha256'] and digest(after)==row['proposed_raw_sha256']
 if p.suffix=='.md':
  current=before.decode()
  for op in row['operations']:
   assert current.count(op['old'])==op.get('occurrences',1);current=current.replace(op['old'],op['replacement'])
  assert current.encode()==after
  assert re.sub(r'\s+|\$','',before.decode())==re.sub(r'\s+|\$','',after.decode())
 else:
  old=json.loads(before);expected=copy.deepcopy(old)
  for op in row['operations']:
   keys=op['pointer'].strip('/').split('/');at=expected
   for key in keys[:-1]:at=at[int(key)] if isinstance(at,list) else at[key]
   key=keys[-1];assert at[key]==op['old'];at[key]=op['replacement']
  assert expected==json.loads(after),'Only matched quote fields may change'
 prepared.append((p,before,after))
# All actual/proposed bytes and exact deltas validated before archive/write.
archive=BASE/('root-apply-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));assert not archive.exists();archive.mkdir()
for p,before,after in prepared:
 out=archive/p.relative_to(ROOT);out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(before)
for p,before,after in prepared:assert p.read_bytes()==before and not p.is_symlink()
for p,before,after in prepared:
 assert p.read_bytes()==before;fd,tmp=tempfile.mkstemp(prefix='.'+p.name+'.format-',dir=p.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(after);f.flush();os.fsync(f.fileno())
  os.replace(tmp,p)
 finally:
  if os.path.exists(tmp):os.unlink(tmp)
print(json.dumps({'format_only_files':len(prepared),'before_archive':str(archive.relative_to(ROOT)),'mathematical_text_or_levels_changed':False,'native_history_mutated':False,'remaining':'Root actual current input checks/source currency refresh.'},indent=2))
