#!/usr/bin/env python3
"""ROOT ONLY guarded exact source-format apply; default verifies without writing."""
from pathlib import Path
import json,hashlib,argparse,re
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--apply',action='store_true');p.add_argument('--assert-writers-drained',action='store_true');a=p.parse_args()
b=Path(__file__).resolve().parent;root=Path.cwd();rows=json.loads((b/'source-raw-guards.json').read_text());pointer=json.loads((b/'separate-pointer-source/guard.json').read_text());pointer['archive_prefix']='separate-pointer-source';rows.append(pointer);sha=lambda s:hashlib.sha256(s).hexdigest()
if a.apply and not a.assert_writers_drained:raise SystemExit('ROOT must provide actual exclusive writer-drain declaration via flag before apply')
if len(rows)!=217:raise SystemExit('Unexpected source inventory')
for r in rows:
 archive=b/r.get('archive_prefix','');before=(archive/'before'/r['path']).read_bytes();after=(archive/'proposed'/r['path']).read_bytes()
 if sha(before)!=r['before_raw_sha256']or sha(after)!=r['proposed_raw_sha256']:raise SystemExit('Archived proposal guard mismatch: '+r['path'])
 if(root/r['path']).read_bytes()!=before:raise SystemExit('Current before mismatch; stop/rebase overlap: '+r['path'])
 if re.search(rb'^status:\s*published\s*$',before,re.M):raise SystemExit('Unexpected published source: '+r['path'])
for context in json.loads((b/'context-raw-guards.json').read_text()):
 if sha((root/context['path']).read_bytes())!=context['raw_sha256']:raise SystemExit('Kahan final context changed')
for name in ['rendercheck','precheck','layout']:
 if json.loads((b/('final-218-'+name+'.execution.json')).read_text())['exit_code']!=0:raise SystemExit('Proposed final scoped check failed: '+name)
if a.apply:
 for r in rows:(root/r['path']).write_bytes((b/r.get('archive_prefix','')/'proposed'/r['path']).read_bytes())
 for r in rows:
  if sha((root/r['path']).read_bytes())!=r['proposed_raw_sha256']:raise SystemExit('Final source mismatch: '+r['path'])
 print('APPLIED exact217 source-format candidates; no metadata/history/stamps/control/gates written. Root owns final current checks/binding.')
else:print('VERIFIED exact217 fullbefore/proposal/current guards,0published; unchanged Kahan guarded, all218proposed scoped checks successful; NO WRITES.')
