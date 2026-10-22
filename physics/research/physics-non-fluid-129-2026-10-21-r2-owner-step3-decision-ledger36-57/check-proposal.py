import json,pathlib,hashlib,copy
R='physics-non-fluid-129-2026-10-21-r2';O=pathlib.Path('research')/(R+'-owner-step3-decision-ledger36-57');p=json.loads((O/'proposal.json').read_text());H=lambda b:hashlib.sha256(b).hexdigest();checks=[]
def ck(label,v):
 assert v,label
 checks.append(label)
for g in p['guards']['files']:ck('file guard '+g['path'],H(pathlib.Path(g['path']).read_bytes())==g['sha256'])
for g in p['guards']['absent_paths']:ck('absent '+g,not pathlib.Path(g).exists())
g=p['guards']['ledger'];ck('ledger immutable prefix',H(pathlib.Path(g['path']).read_bytes()[:g['prefix_bytes']])==g['prefix_sha256'])
for c in p['decision_replacements']:
 d=json.loads(pathlib.Path(c['path']).read_text());ck('exact before '+c['obligation'],next(x for x in d['decisions'] if x['obligation']==c['obligation'])==c['before'])
for c in p['supplemental_decisions']:
 ck('new exact supplemental '+c['after']['obligation'],c['after']['obligation']=='gate:'+c['after']['defect_ids'][0] and c['after']['route']=='gate' and len(c['after']['defect_ids'])==1)
for x in p['shared_finding_checks']:
 a=x['reader'];b=x['refuter'];ck('actual shared original '+b['obligation'],all(a[k]==b[k] for k in ['id','defect','severity','observed_sha256']))
 for key in ['id','defect','observed_sha256']:
  bad=copy.deepcopy(b);bad[key]='tampered';ck('reject mismatched '+key+' '+b['obligation'],not all(a[k]==bad[k] for k in ['id','defect','severity','observed_sha256']))
rows=[json.loads(x) for x in pathlib.Path('research/defect-ledger.jsonl').read_text().splitlines()];rows+=p['ledger_appends_proposed'];sup={i for x in rows for i in x.get('supersedes',[])};active={x['defect_id']:x for x in rows if x['defect_id'] not in sup};focus={i for c in p['decision_replacements'] for i in c['before'].get('defect_ids',[])}|{i for c in p['supplemental_decisions'] for i in c['after']['defect_ids']}|{x['defect_id'] for x in p['ledger_appends_proposed']};used={};errors=[]
for b in [36,39,41,46,53,56,57]:
 d=json.loads(pathlib.Path(f'research/{R}-alpha-batch-{b}-3a-decisions.json').read_text())['decisions'];s=json.loads(pathlib.Path(f'research/{R}-step3-scope-{b}.json').read_text());targets={x['obligation']:x for k in ['reader_findings','refuter_findings'] for x in s[k]}
 for c in p['decision_replacements']:
  if c['batch']==b:d=[c['after'] if x['obligation']==c['obligation'] else x for x in d]
 d+=[c['after'] for c in p['supplemental_decisions'] if c['batch']==b]
 for x in d:
  if x['verdict']=='reviewed_no_defect':ck('honest editorial classification '+x['obligation'],not x['defect_ids'] and x['change_kind'] in ['metadata','audit_enrichment']);continue
  for id in x['defect_ids']:
   if id not in focus:continue
   ck('active subject/stage '+x['obligation'],id in active and active[id]['subject']==x['id'] and active[id]['caught_at_stage']=='3a-adjudicate')
   row=active[id];ck('disposition '+x['obligation'],row['disposition']=='false-positive' if x['verdict']=='false_positive' else row['disposition'] in ['fixed','nonfatal-recorded','narrowed','dropped'])
   if id in used:
    a=used[id];at=targets.get(a['obligation'],{});bt=targets.get(x['obligation'],{});same=a['id']==x['id'] and a['verdict']==x['verdict'] and a['route'] in ['reader','flagged'] and x['route'] in ['reader','flagged'] and x.get('same_defect_as')==a['obligation'] and bool(x.get('same_defect_evidence','').strip()) and at.get('defect')==bt.get('defect') and at.get('observed_sha256')==bt.get('observed_sha256') and len(at.get('observed_sha256') or '')==64
    ck('compatible duplicate '+x['obligation'],same)
   else:used[id]=x
for id in focus-set(sup):ck('focused ledger owned '+id,id in used)
pre=json.loads((O/'cex-preimage.json').read_text());ck('actual cex immutable preimage',H((O/'cex-pre-reader.md').read_bytes())==pre['frozen_pre_entry']['item_sha256'])
result={'checks':len(checks),'passed':len(checks),'failed':0,'scope':'Research-only targeted immutable guards, authentic original carrier comparisons, focused ledger ownership/disposition and adversarial mismatch tests. Not native gates, current carrier stamping, mathematical acceptance or full Step3 validation.','checks_detail':checks};(O/'checks.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({k:v for k,v in result.items() if k!='checks_detail'}))
