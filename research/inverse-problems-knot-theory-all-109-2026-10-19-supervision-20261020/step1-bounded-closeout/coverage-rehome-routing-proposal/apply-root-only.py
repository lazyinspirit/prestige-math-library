"""Root invokes explicitly after adopting report.json; no hashes or gates."""
import json,os,sys
from pathlib import Path
if sys.argv[1:]!=['--root-adopts-coverage-rehome-routing']:
 raise SystemExit('Root only: pass --root-adopts-coverage-rehome-routing after adopting report.json')
root=Path.cwd();out=Path(__file__).resolve().parent;run='inverse-problems-knot-theory-all-109-2026-10-19'
report=json.loads((out/'report.json').read_text());homes={}
for f in (root/'research').glob(run+'-batch-*.pages.json'):
 b=int(f.name.split('-batch-')[1].split('.')[0])
 for p in json.loads(f.read_text()):
  for i in p.get('items',[]):
   name=i if isinstance(i,str) else i['id'];homes[name]={'batch':b,'page':p['id']}
if len(homes)!=1471:raise SystemExit('Current original inventory changed; stop')
for row in report['routes']+report.get('source_item_references_rehomed',[]):
 if homes.get(row['item'])!=row['to']:raise SystemExit('Current home changed: '+row['item'])
prepared=[]
for b in report['coverage_files']:
 name=f'{run}-batch-{b}.coverage.json';target=root/'research'/name
 if target.read_text()!=(out/'before'/name).read_text():raise SystemExit('Coverage input changed; stop before writes: '+str(target))
 text=(out/'proposed'/name).read_text();json.loads(text);prepared.append((target,text))
for target,text in prepared:
 temp=target.with_name(target.name+'.root-rehome-routing.tmp');temp.write_text(text);os.replace(temp,target)
print('Root applied five coverage metadata files; no hashes, validators, gates or readiness changes performed.')
