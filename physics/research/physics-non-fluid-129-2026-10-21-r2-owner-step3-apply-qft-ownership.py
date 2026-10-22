import pathlib,json,hashlib,datetime
P=pathlib.Path;r='physics-non-fluid-129-2026-10-21-r2';base=P(f'research/{r}-owner-step3-qft-decision-ledger');pp=base/'proposal.json';pb=pp.read_bytes();assert hashlib.sha256(pb).hexdigest()=='043f55a9c10caf87118984b1ea48c2edd7827f352ba5048ea0db7eef7c105650';x=json.loads(pb);fp=base/'eg-source-successor/final-closure/final-closure-proposal.json';fb=fp.read_bytes();f=json.loads(fb);sha=lambda b:hashlib.sha256(b).hexdigest();now=datetime.datetime.now(datetime.timezone.utc).isoformat();lp=P('research/defect-ledger.jsonl');lb=lp.read_bytes()
for path,h in x['guards'].items():
 b=P(path).read_bytes()
 if sha(b)==h:continue
 if path==str(lp):old=(base/'evidence'/path).read_bytes();assert sha(old)==h and b.startswith(old)
 elif path==f['source_guard']['path']:assert sha(b)==f['source_guard']['observed_raw_sha256'];assert x['pending_scientific_source_proposal']['source_sha256']==h
 else:raise Exception('Unexpected changed input '+path)
for g in [f['contract_guard'],f['source_receipt']]:assert sha(P(g['path']).read_bytes())==g['sha256']
s=json.loads(P(f'.physics-autopilot/{r}/state.json').read_text());assert all(d.get('endedAt') for d in s['dispatches'].values()) and not P(f'.physics-autopilot/{r}/controller.lock').exists()
ledger=[json.loads(l) for l in lb.splitlines() if l.strip()];ids={a['defect_id'] for a in ledger};pending={}
def doc(path):
 p=P(path)
 if p not in pending:pending[p]=[p.read_bytes(),json.loads(p.read_text())]
 return pending[p][1]
for a in x['decision_patches']:
 d=doc(a['path']);n=next(i for i,b in enumerate(d['decisions']) if b['obligation']==a['obligation']);assert d['decisions'][n]==a['before'];d['decisions'][n].update(a['set'])
 for k in a.get('remove',[]):d['decisions'][n].pop(k,None)
for a in x['supplemental_decisions']:
 d=doc(a['path']);assert all(b['obligation']!=a['append']['obligation'] for b in d['decisions']);d['decisions'].append(a['append'])
plan=f['ledger_plan'];assert next(v for v in ledger if v['defect_id']==plan['historical_row']['defect_id'])==plan['historical_row']
rows=[a['row'] for a in x['new_observation_ledger_rows_proposed'] if 'b62-' not in a['row']['defect_id']]+[plan['append_fixed_superseding_row'],plan['append_fixed_distinct_refuter_observation_row']]
for row in rows:assert row['defect_id'] not in ids;ids.add(row['defect_id']);row['at']=now
fixed=plan['append_fixed_superseding_row']['defect_id'];d=doc(f'research/{r}-alpha-batch-62-3a-decisions.json')
for a in d['decisions']:
 if a['obligation'] not in ['reader:62:1','refuter:62:1']:continue
 a['defect_ids']=[fixed if a['obligation']=='reader:62:1' else plan['append_fixed_distinct_refuter_observation_row']['defect_id']];a['repair_confidence']=1
 a['evidence']+=' Root current-source repair successor: the explicit fixed-annulus Baire argument under existing AC is now present at5.1 with exact F12 suppliers; the old nonfatal-recorded attribution row is preserved and superseded by its actual fixed successor. Both original independent observation versions/severities remain untouched. Source application and four actual consumer checks: '+str(f['source_receipt']['path'])+'. Root three-dependency metadata receipt: research/'+r+'-owner-step3-root-adoption/source-metadata-round3/receipt.json. This is current-source closure, not a claim that the old source was fixed or natively reread.'
out=base/'root-application';assert not out.exists();out.mkdir();(out/'proposal.json').write_bytes(pb);(out/'source-fixed-proposal.json').write_bytes(fb);(out/'ledger.before.jsonl').write_bytes(lb)
for p,(before,d) in pending.items():(out/p.name).write_bytes(before)
for p,(before,d) in pending.items():assert p.read_bytes()==before
assert lp.read_bytes()==lb
with lp.open('ab') as h:h.write(('\n'.join(json.dumps(a,separators=(',',':')) for a in rows)+'\n').encode())
for p,(before,d) in pending.items():p.write_text(json.dumps(d,indent=2)+'\n')
(out/'receipt.json').write_text(json.dumps({'run':r,'at':now,'proposal_sha256':sha(pb),'fixed_source_proposal_sha256':sha(fb),'decision_patches':len(x['decision_patches']),'supplemental_decisions':len(x['supplemental_decisions']),'appended_rows':[a['defect_id'] for a in rows],'eg_proof_currently_fixed':True,'original_observations_and_rows_preserved':True,'native_gate_success':False,'source_edits_this_transaction':False},indent=2)+'\n');print('Applied20 QFT ownership actions +actual EG source-fixed closure,4 append-onlyobservation/successor rows;all original histories preserved')
