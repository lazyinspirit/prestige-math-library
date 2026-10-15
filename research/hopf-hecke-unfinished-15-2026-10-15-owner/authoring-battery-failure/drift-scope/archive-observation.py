from pathlib import Path
import json,hashlib,datetime
r='hopf-hecke-unfinished-15-2026-10-15';o=Path('research')/(r+'-owner/authoring-battery-failure/drift-scope');p=Path('research',r+'-owner-drift-resolutions.json');d=json.loads(p.read_text());paths={str(p),'research/plan-spec.json',f'research/{r}-scope-ledger.json','research/plan-hopf-hecke-algebras-track.md','tools/drift-owner-resolutions.mjs','tools/drift-owner-resolutions.md'}
checks=[]
for k in ['report','original_report','native_result','native_prompt','drift_evidence']:paths.add(d[k]['path']);checks.append({'role':k,**d[k]})
for row in d['resolutions']:
 paths.add(row['evidence']['path']);checks.append({'role':'owner-acceptance',**row['evidence']});e=json.loads(Path(row['evidence']['path']).read_text());paths.add(e['repair_evidence']['path']);checks.append({'role':'genuine-delegated-repair',**e['repair_evidence']})
 for a in row['sources']:paths.update([a['path'],a['original']['path']]);checks.extend([{'role':'original-source',**a['original']},{'role':'current-source','path':a['path'],'sha256':a['current_sha256']}])
rows=[]
for f in sorted(paths):
 b=Path(f).read_bytes();q=o/'archive'/f;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b);rows.append({'path':f,'sha256':hashlib.sha256(b).hexdigest(),'archive':str(q)})
for c in checks:c['actual_sha256']=hashlib.sha256(Path(c['path']).read_bytes()).hexdigest();c['matches']=c['actual_sha256']==c['sha256']
s=json.loads(Path('research/plan-spec.json').read_text());mp={x['id']:x for x in s['pages']};closures=[]
for row in d['resolutions']:
 affected=set();queue=[row['page']];comp=mp[row['page']].get('companion',row['page']+'-examples')
 if comp in mp:affected.add(comp);queue.append(comp)
 while queue:
  supplier=queue.pop(0)
  for page in s['pages']:
   if supplier in page.get('requires',[]) and page['id']!=row['page'] and page['id'] not in affected:affected.add(page['id']);queue.append(page['id'])
 closures.append({'page':row['page'],'actual_affected':sorted(affected),'original_dispositions':sorted(x['page'] for x in row['consumers']),'matches':affected=={x['page'] for x in row['consumers']}})
(o/'observed-guards.json').write_text(json.dumps({'run':r,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope_digest_is_not_final':True,'archives':rows,'original_binding_checks':checks,'current_consumer_closures':closures,'historical_scope_reconstruction':'Actual driftScopeHash export applied to current spec with only HH14 -> type-a-hecke-specht-modules-and-cellular-bases removed reproduces exact original c36372064c270c08903da9a7e8710b2cd6a534b5c0c6ad8ef54357d377a437c8. No live source changed and no final digest calculated.'},indent=2)+'\n')
print(json.dumps({'archived_files':len(rows),'stale_bindings':[c for c in checks if not c['matches']],'closure_matches':[c['matches'] for c in closures]}))
