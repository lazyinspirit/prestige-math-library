import json,pathlib,hashlib,copy
run='frontier-44-special-representation-examples-28-six-step';R=pathlib.Path('.');B=R/'research'/f'{run}-owner-escalation-repairs/resume-20261011/gate-routing';H=lambda x:hashlib.sha256(json.dumps(x,sort_keys=True,ensure_ascii=False,separators=(',',':')).encode()).hexdigest();raw=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();p=json.load(open(B/'shared-families.proposed.json'));allrows=[json.loads(l) for l in (R/'research/defect-ledger.jsonl').read_text().splitlines() if l.strip()];rows=[r for r in allrows if r.get('run')==run];seen={};superseded=set()
for r in rows:
 for id in r.get('supersedes',[]):
  assert id in seen and seen[id]['subject']==r['subject'],(id,'invalid active projection')
  superseded.add(id)
 seen[r['defect_id']]=r
active={r['defect_id']:r for r in rows if r['defect_id'] not in superseded}
# Pending append-only native proposals are real complete input objects, not applied claims.
qpath=R/'research'/f'{run}-owner-escalation-repairs/resume-20261011/qschur/gate1/routing-deltas.proposed.json';q=json.load(open(qpath))
for r in [*q['new_ledger_rows'],*p['new_ledger_rows']]:active.setdefault(r['defect_id'],r)
for e in p['shared_evidence_additions']:
 assert e['defect_id'] in active,e['defect_id'];e['ledger_row_sha256']=H(active[e['defect_id']]);e['current_raw_sha256']=raw(e['current_path'])
 for ref in e['evidence']:ref['sha256']=raw(ref['path'])
# Consolidate all16 independently prepared Soergel entries rather than duplicate them.
external=p['external_shared_evidence_packet']['path'];g=json.load(open(external));p['external_shared_evidence_packet']['sha256']=raw(external);p['all_shared_evidence_additions']=[*p['shared_evidence_additions'],*copy.deepcopy(g[p['external_shared_evidence_key']])]
for e in p['all_shared_evidence_additions']:
 assert e['defect_id'] in active,e['defect_id'];e['ledger_row_sha256']=H(active[e['defect_id']]);e['current_raw_sha256']=raw(e['current_path'])
 for ref in e['evidence']:ref['sha256']=raw(ref['path'])
assert len({e['defect_id'] for e in p['all_shared_evidence_additions']})==len(p['all_shared_evidence_additions'])
p['final_prepared_entry_count']=len(p['all_shared_evidence_additions']);p['actual_ledger_raw_sha256']=raw(R/'research/defect-ledger.jsonl');p['pending_ledger_input_rows_not_claimed_applied']=[r['defect_id'] for r in [*q['new_ledger_rows'],*p['new_ledger_rows']] if r['defect_id'] not in seen];p['refresh_is_carrier_bookkeeping_not_mathematical_reaudit']=True;(B/'shared-families.final-proposed.json').write_text(json.dumps(p,indent=2)+'\n');print('Prepared',p['final_prepared_entry_count'],'unique exact shared families; pending rows',len(p['pending_ledger_input_rows_not_claimed_applied']))
