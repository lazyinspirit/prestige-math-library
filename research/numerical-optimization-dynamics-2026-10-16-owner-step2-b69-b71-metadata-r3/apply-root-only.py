#!/usr/bin/env python3
"""ROOT ONLY granular current69/71 r3 projection. Default describes without writes.
--apply-69, --apply-71 or --apply-all apply only exact guarded metadata fields.
Does not accept published receipts or native content and does not run gates.
"""
from pathlib import Path
import argparse,copy,hashlib,json,os,tempfile
HERE=Path(__file__).resolve().parent
REPO=Path.cwd().resolve()
if not (REPO/'CLAUDE.md').is_file():raise SystemExit('Run from repository root')
raw=(HERE/'projection.json').read_bytes()
if hashlib.sha256(raw).hexdigest()!='f5f05598c614b171d8a6ffed2c7bcaa472d60810860e9338c597ca41d7fd5ea4':raise SystemExit('Exact projection payload changed; re-review required')
P=json.loads(raw)
def guards():
 for row in P['source_guards']:
  if hashlib.sha256((REPO/row['path']).read_bytes()).hexdigest()!=row['raw_sha256']:raise SystemExit('Source drift: '+row['path'])
def target(data,op):
 mode=op['mode']
 if mode=='manifest-item':matches=[item for pg in data for item in pg.get('items',[]) if isinstance(item,dict) and item.get('id')==op['id']]
 else:
  contract=data.get('contracts',{}).get(op['id'])
  if contract is None:raise SystemExit('Missing target contract: '+op['id'])
  if mode=='contract':return contract
  if mode=='citation':matches=[c for c in contract.get('citations',[]) if all(c.get(k)==op[k] for k in ['fact','source','source_section'])]
  elif mode=='boundary':matches=[b for b in contract.get('boundaries',[]) if b.get('case')==op['case']]
  else:raise SystemExit('Unknown exact operation mode')
 if len(matches)!=1:raise SystemExit('Target identity not unique: '+op['id'])
 return matches[0]
def apply(batches):
 guards();selected=[op for op in P['operations'] if any('-batch-'+b+'.' in op['file'] for b in batches)];files={op['file'] for op in selected};before={f:(REPO/f).read_bytes() for f in files};projected={f:json.loads(raw) for f,raw in before.items()};applied=[];skipped=[]
 for op in selected:
  obj=target(projected[op['file']],op);value=obj.get(op['field'])
  if value==op['after']:skipped.append({k:op[k] for k in ['file','id','mode','field']});continue
  if value!=op['before']:raise SystemExit('Same-field metadata drift; preserve and reprepare: '+op['file']+' '+op['id']+' '+op['field'])
  obj[op['field']]=copy.deepcopy(op['after']);applied.append({k:op[k] for k in ['file','id','mode','field']})
 changed={f:(json.dumps(data,indent=2,ensure_ascii=False)+'\n').encode() for f,data in projected.items() if data!=json.loads(before[f])};temps={}
 try:
  for f,data in changed.items():
   dest=REPO/f;fd,name=tempfile.mkstemp(prefix='.b69-b71-r3-root-projection-',dir=dest.parent)
   with os.fdopen(fd,'wb') as stream:stream.write(data);stream.flush();os.fsync(stream.fileno())
   os.chmod(name,dest.stat().st_mode & 0o777);temps[f]=Path(name)
  guards()
  if any((REPO/f).read_bytes()!=before[f] for f in files):raise SystemExit('Metadata changed during staging; no projection applied')
  for f,tmp in temps.items():
   if (REPO/f).read_bytes()!=before[f]:raise SystemExit('Concurrent metadata write at actual boundary: '+f)
   os.replace(tmp,REPO/f)
 finally:
  for tmp in temps.values():tmp.unlink(missing_ok=True)
 return {'changed_files':sorted(changed),'changed_fields':applied,'already_projected':skipped,'untargeted_current_fields_preserved':True,'native_acceptance':False}
ap=argparse.ArgumentParser(description=__doc__);g=ap.add_mutually_exclusive_group();g.add_argument('--describe',action='store_true');g.add_argument('--apply-69',action='store_true');g.add_argument('--apply-71',action='store_true');g.add_argument('--apply-all',action='store_true');args=ap.parse_args()
if args.apply_69:result=apply(['69'])
elif args.apply_71:result=apply(['71'])
elif args.apply_all:result=apply(['69','71'])
else:result={'canonical_writes':False,'operations':[{k:op[k] for k in ['file','id','mode','field']} for op in P['operations']],'excluded':P['excluded'],'superseded_old_citations':P['superseded_old_citations']}
print(json.dumps(result,indent=2,ensure_ascii=False))
