#!/usr/bin/env python3
"""Root-only guarded mirror; default previews, --apply archives and applies."""
from pathlib import Path
import datetime,hashlib,json,sys
D=Path(__file__).resolve().parent
cfg=json.loads((D/'metadata-mirror-config.json').read_text())
paths={k:Path(cfg[k]) for k in ['manifest','contracts']}
raw={k:p.read_bytes() for k,p in paths.items()};data={k:json.loads(v) for k,v in raw.items()}
for guard in cfg['source_guards']:
 assert hashlib.sha256(Path(guard['path']).read_bytes()).hexdigest()==guard['raw_sha256'],'Source changed: '+guard['path']
def parent_at(path):
 p=data
 for key in path[:-1]:p=p[key]
 return p,path[-1]
# Validate all old fields before any mutation. Foreign path changes are preserved.
for op in cfg['operations']:
 p,k=parent_at(op['path']);assert p[k]==op['before'],'Metadata target changed: '+str(op['path'])
if '--apply' not in sys.argv:
 print(json.dumps({'status':'prepared-only','changes':cfg['operations']},indent=2));sys.exit(0)
for op in cfg['operations']:
 p,k=parent_at(op['path']);p[k]=op['after']
assert all(paths[k].read_bytes()==v for k,v in raw.items()),'Concurrent metadata writer'
stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
A=D/('metadata-mirror-applied-'+stamp);(A/'before').mkdir(parents=True);(A/'final').mkdir()
for k,p in paths.items():(A/'before'/p.name).write_bytes(raw[k])
for k,p in paths.items():p.write_text(json.dumps(data[k],indent=2)+'\n');(A/'final'/p.name).write_bytes(p.read_bytes())
(A/'completion.json').write_text(json.dumps({'status':'root-executed-guarded-mirror','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'operations':cfg['operations'],'scope':cfg['scope'],'source_guards':cfg['source_guards']},indent=2)+'\n')
print(A/'completion.json')
