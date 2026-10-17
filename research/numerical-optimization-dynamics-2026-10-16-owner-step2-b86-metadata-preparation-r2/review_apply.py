"""Root-only metadata projection. Default prints exact field diff without writes."""
from pathlib import Path
import argparse,json,hashlib,copy,difflib,datetime,os
P=Path(__file__).resolve().parent;ROOT=P.parent.parent

def get(d,keys):
 for key in keys:d=d[key]
 return d

def main():
 ap=argparse.ArgumentParser(description=__doc__);ap.add_argument('--apply',action='store_true');args=ap.parse_args();m=json.loads((P/'proposal.json').read_text())
 if m['issues']:raise SystemExit('Unresolved preparation issues')
 guards={r['path']:r['raw_sha256'] for r in m['guards']};required={m['authority']}
 for row in m['field_operations']:required.update(row['source_guards'])
 for path in sorted(required):
  f=ROOT/path
  if f.is_symlink() or hashlib.sha256(f.read_bytes()).hexdigest()!=guards[path]:raise SystemExit('Stale actual source/authority: '+path)
 docs={};raw={};changed=[]
 for row in m['field_operations']:
  path=row['file']
  if path not in docs:
   f=ROOT/path
   if f.is_symlink():raise SystemExit('Symlink metadata: '+path)
   raw[path]=f.read_bytes();docs[path]=json.loads(raw[path])
  current=get(docs[path],row['pointer'])
  if current==row['after']:continue
  if current!=row['before']:raise SystemExit('Conflicting field '+path+' '+repr(row['pointer']))
  obj=docs[path]
  for key in row['pointer'][:-1]:obj=obj[key]
  obj[row['pointer'][-1]]=copy.deepcopy(row['after']);changed.append(row['pointer'])
 writes=[]
 for path,doc in docs.items():
  if json.loads(raw[path])==doc:continue
  data=(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode();writes.append((path,data))
  print(''.join(difflib.unified_diff(raw[path].decode().splitlines(True),data.decode().splitlines(True),fromfile=path,tofile='projected/'+path)),end='')
 if not args.apply:
  print('\nREAD ONLY: exact fields and actual source guards inspected; no writes.');return
 # All guards pass before any canonical metadata mutation. Preserve actual contemporaneous full history.
 for path,data in writes:
  if (ROOT/path).read_bytes()!=raw[path]:raise SystemExit('Metadata changed while preparing '+path)
 stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ');archive=P/('root-applied-'+stamp);archive.mkdir(exist_ok=False)
 for path,data in writes:
  dst=archive/'before'/path;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(raw[path])
 for path,data in writes:
  f=ROOT/path;tmp=f.with_name(f.name+'.root86-metadata.tmp')
  with tmp.open('xb') as h:h.write(data)
  os.chmod(tmp,f.stat().st_mode & 0o777);os.replace(tmp,f)
  dst=archive/'after'/path;dst.parent.mkdir(parents=True,exist_ok=True);dst.write_bytes(data)
 (archive/'receipt.json').write_text(json.dumps(dict(actual_applied_at=stamp,changed_fields=changed,metadata_files=[p for p,d in writes],source_writes=False,native_writes=False),indent=2)+'\n')
 print('\nApplied '+str(len(writes))+' metadata carriers; preserved all unrelated parsed fields. '+str(archive))
if __name__=='__main__':main()
