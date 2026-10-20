#!/usr/bin/env python3
"""Mechanical staging only. Never applies changes or reviews fixture correctness."""
from pathlib import Path
import json,hashlib,re,collections
ROOT=Path(__file__).resolve().parents[3];BASE=Path(__file__).resolve().parent
if (BASE/'FREEZE.json').exists():raise SystemExit('Frozen proposal: create a separate revision directory; do not mutate this packet.')
RUN='machine-learning-all-101-2026-10-19';sha=lambda b:hashlib.sha256(b).hexdigest()
def read(p):return (ROOT/p).read_bytes()
def load(p):return json.loads(read(p))
def write(n,v):(BASE/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
OWNERS=['gaussian-vc','sparse','privacy-federated','optimization','deep-wasserstein','flow','calibration','pacmdp','policy-cpo','verifier-group']
FILES=['field-cas.json','contract-cas.json','operations.json','packet.json','root-integration-operations.json','packet.json','field-cas.json','finite-smoke-array-ops.json','contract-array-cas.json','finite-smoke-operations.json']
MODULES=['finite-smoke-ml101-gaussian-vc.mjs','checks/finite-smoke-ml101-sparse.mjs','finite-smoke-privacy-federated-ml.mjs','finite-smoke-optimization-ml.mjs','proposed/tools/finite-smoke-deep-wasserstein-ml.mjs','finite-smoke-ml101-flow.mjs','finite-smoke-calibration-ml.mjs','tools/finite-smoke-ml-pacmdp.mjs','candidates/tools/finite-smoke-policy-cpo.mjs','candidates/finite-smoke-verifier-group-ml.mjs']
EXPORTS=['gaussianVCMLChecks','sparseMLChecks','privacyFederatedMLChecks','optimizationMLChecks','deepWassersteinMLChecks','flowMatchingMLChecks','calibrationMLChecks','pacMDPMLChecks','policyCPOMLChecks','verifierGroupMLChecks']
DESTS=['finite-smoke-ml101-gaussian-vc.mjs','finite-smoke-ml101-sparse.mjs','finite-smoke-ml101-privacy-federated.mjs','finite-smoke-ml101-optimization.mjs','finite-smoke-ml101-deep-wasserstein.mjs','finite-smoke-ml101-flow.mjs','finite-smoke-ml101-calibration.mjs','finite-smoke-ml101-pac-mdp.mjs','finite-smoke-ml101-policy-cpo.mjs','finite-smoke-ml101-verifier-group.mjs']
inputs={};modules=[];operations=[];sources={};summaries=[];revisions=[]
def bind(p):inputs[p]=sha(read(p))
def source(p,digest=None,snapshot=None):
 raw=read(p)
 if snapshot:
  bind(snapshot);assert raw==read(snapshot),f'snapshot guard {p}';digest=sha(read(snapshot))
 assert digest and sha(raw)==digest,f'source hash {p}'
 if p in sources:assert sources[p]['sha256']==digest
 sources[p]={'target':p,'sha256':digest}
for owner,file,mod,export,dest in zip(OWNERS,FILES,MODULES,EXPORTS,DESTS):
 base=f'research/{RUN}-owner-native-smoke-{owner}/your-proposal';packet=f'{base}/{file}';d=load(packet);bind(packet);candidate=f'{base}/{mod}';bind(candidate)
 text=read(candidate).decode();assert re.search(r'export\s+(?:const|let|var)\s+'+export+r'\b',text),f'export name {owner}'
 assert not (ROOT/'tools'/dest).exists(),f'create-only fixture target exists {dest}'
 modules.append({'owner':owner,'candidate':candidate,'candidate_sha256':sha(read(candidate)),'target':'tools/'+dest,'export':export,'create_only':True})
 if owner=='gaussian-vc':
  for g in d['sources']:source(g['path'],g['raw_sha256'],g['before_file'])
  rows=[(o['contract_path'],o['id'],o['expected_finite_smoke'],o['replacement_finite_smoke']) for o in d['fields']]
 elif owner=='sparse':
  for g in d['source_guards']:source(g['path'],g['raw_sha256'],g['snapshot'])
  rows=[(o['path'],o['pointer'].split('/')[2],o['before'],o['after']) for o in d['operations']]
 elif owner=='privacy-federated':
  for o in d['operations']:source(o['source_path'],snapshot=o['source_raw_guard'])
  rows=[(o['path'],o['id'],o['expected_value'],o['replacement_value']) for o in d['operations']]
 elif owner=='optimization':
  for o in d['contract_array_operations']:source(o['source_guard']['target'],snapshot=o['source_guard']['before_path'])
  rows=[(o['target'],o['path'][1],o['before'],o['after']) for o in d['contract_array_operations']]
  revisions.append({'owner':owner,'packet_review_revision':d['module'].get('review_revision'),'candidate_sha256':sha(read(candidate))})
 elif owner=='deep-wasserstein':
  for g in d['item_source_guards']:source(g['path'],g['sha256'])
  rows=[(o['file'],o['consumer'],o['expected'],o['replacement']) for o in d['finite_smoke_array_field_CAS']]
 elif owner=='flow':
  for o in d['operations']:
   g=o['source_guard'];source(g['path'],g['raw_sha256'],g['archive'])
  rows=[(o['contract_path'],o['id'],o['before'],o['after']) for o in d['operations']]
 elif owner=='calibration':
  for g in d['source_bindings']:source(g['path'],g['raw_sha256'])
  rows=[(o['path'],o['contract_key'],o['before'],o['after']) for o in d['operations']]
 elif owner=='pacmdp':
  gfile=f'{base}/source-guards.json';bind(gfile)
  for g in load(gfile)['sources']:source(g['target'],g['sha256'])
  rows=[(o['target'],o['path'][1],o['before'],o['after']) for o in d['operations']]
 elif owner=='policy-cpo':
  gfile=f'{base}/source-guards.json';bind(gfile)
  for g in load(gfile):source(g['source_path'],snapshot=f'{base}/'+g['before_snapshot'])
  rows=[(o['path'],o['id'],o['before'],o['after']) for o in d]
 else:
  gfile=f'{base}/source-guards.json';bind(gfile)
  for g in load(gfile):source(g['source'],snapshot=f'{base}/'+g['before'])
  rows=[(o['target'],o['path'][1],o['old'],o['new']) for o in d['operations']]
 for target,id,before,after in rows:
  current=load(target);assert current['contracts'][id]['finite_smoke']==before,f'finite array CAS {owner}:{id}'
  assert len(before)==len(after)>0,f'nonempty row retention {id}'
  src='items/'+id+'.md';assert src in sources,f'missing source guard {id}';body=read(src).decode()
  changes=[]
  for i,(a,z) in enumerate(zip(before,after)):
   assert isinstance(z.get('check'),str) and z['check'];assert isinstance(z.get('asserts'),str) and z['asserts'] in body,f'exact raw source excerpt {owner}:{id}:{i}'
   for key,value in a.items():
    if z.get(key)==value:continue
    assert key in ['check','asserts'] or value in [v for k,v in z.items() if k.startswith(('historical_','original_'))],f'lost original obligation field {owner}:{id}:{i}:{key}'
    changes.append({'index':i,'field':key,'original_value_preserved_in_before_array':True})
  operations.append({'owner':owner,'target':target,'path':['contracts',id,'finite_smoke'],'before':before,'after':after,'original_field_reconciliations':changes,'source':src})
 summaries.append({'owner':owner,'arrays':len(rows),'original_obligations':sum(len(row[2]) for row in rows),'candidate_obligations':sum(len(row[3]) for row in rows)})
keys=[(o['target'],tuple(o['path'])) for o in operations];assert len(keys)==len(set(keys)),'overlapping field ownership'
failedfile=f'research/{RUN}-owner-step2-native-full-failures/smoke-failed-rows.json';bind(failedfile);failures=load(failedfile);failedcounts=collections.Counter((x['batch'],x['id']) for x in failures)
covered=collections.Counter((int(o['target'].split('-batch-')[1].split('.')[0]),o['path'][1]) for o in operations for _ in o['before']);assert covered==failedcounts,'exact169 failed row coverage'
allrows=[]
for batch in range(1,102):
 p=f'research/{RUN}-batch-{batch}.proof-contracts.json';d=load(p)
 for id,c in d['contracts'].items():
  for index,row in enumerate(c.get('finite_smoke') or []):allrows.append({'batch':batch,'id':id,'index':index,'contract':p,'row':row})
untouched=[x for x in allrows if (x['batch'],x['id']) not in covered];assert len(untouched)==1 and untouched[0]['row']['check']=='normal-normal-finite-n-posterior'
legacy=untouched[0];legacy['source']='items/'+legacy['id']+'.md';source(legacy['source'],sha(read(legacy['source'])));assert legacy['row']['asserts'] in read(legacy['source']).decode()
assert len(allrows)==170 and len(failures)==169
plan={'version':1,'run':RUN,'status':'UNSEALED observed staged revisions; root must seal only after final independent fixture reviews','normalizer':'No fixture callbacks executed; no mathematical cores reviewed; field/schema/source-byte inspection only.','inputs':inputs,'modules':modules,'operations':operations,'source_guards':list(sources.values()),'inventory':{'fixture_modules':10,'field_arrays':len(operations),'failed_original_obligations':len(failures),'replacement_obligations':sum(len(o['after']) for o in operations),'existing_untouched_legacy_obligations':[legacy],'total_current_obligations':len(allrows),'owners':summaries},'review_revisions_observed':revisions,'source_math_changes':False,'actual_writes':False}
write('normalized-plan.json',plan);print(json.dumps({'modules':len(modules),'arrays':len(operations),'obligations':sum(len(o['after']) for o in operations),'sources':len(sources),'legacy':legacy['id'],'owners':summaries}))
