import pathlib,json,hashlib,datetime
P=pathlib.Path;r='physics-non-fluid-129-2026-10-21-r2';base=P(f'research/{r}-owner-step3-decision-ledger-em-gr');pp=base/'proposal.v2.json';pb=pp.read_bytes();assert hashlib.sha256(pb).hexdigest()=='356814d3ecf06735e7385fe571c4d2c7be0013e32db08fa930bd682ce4da33e0';x=json.loads(pb);sha=lambda b:hashlib.sha256(b).hexdigest();now=datetime.datetime.now(datetime.timezone.utc).isoformat()
lp=P('research/defect-ledger.jsonl');lb=lp.read_bytes();prefix=json.loads(P(f'research/{r}-owner-step3-decision-ledger36-57/proposal.json').read_text())['guards']['ledger'];assert sha(lb[:prefix['prefix_bytes']])==prefix['prefix_sha256']
for g in x['guards']:
 if g['path']==str(lp):assert g['sha256']==prefix['prefix_sha256']
 else:assert sha(P(g['path']).read_bytes())==g['sha256'],g['path']
ledger=[json.loads(l) for l in lb.splitlines() if l.strip()];ids={a['defect_id'] for a in ledger};pending={}
s=json.loads(P(f'.physics-autopilot/{r}/state.json').read_text());assert all(d.get('endedAt') for d in s['dispatches'].values()) and not P(f'.physics-autopilot/{r}/controller.lock').exists()
def doc(path):
 p=P(path)
 if p not in pending:pending[p]=[p.read_bytes(),json.loads(p.read_text())]
 return pending[p][1]
for a in x['decision_actions']:
 d=doc(a['path'])
 if a['kind']=='decision_fields_replacement':
  n=next(i for i,b in enumerate(d['decisions']) if b['obligation']==a['obligation']);assert d['decisions'][n]==a['before'];d['decisions'][n]=a['after']
 elif a['kind']=='supplemental_decision_append':
  row=a['decision_without_current_carrier_hash'];assert all(b['obligation']!=row['obligation'] for b in d['decisions']);d['decisions'].append(row)
 else:raise Exception('Unknown action')
rows=[]
for a in x['ledger_appends']:
 if a['kind']=='taxonomy_successor_append':
  assert next(v for v in ledger if v['defect_id']==a['original_row']['defect_id'])==a['original_row'];row=a['row']
 elif 'row_without_application_timestamp' in a:row=a['row_without_application_timestamp'];row['at']=now
 else:
  assert a.get('row') and a.get('original_row');assert next(v for v in ledger if v['defect_id']==a['original_row']['defect_id'])==a['original_row'];row=a['row']
 assert row['defect_id'] not in ids;ids.add(row['defect_id']);rows.append(row)
out=base/'root-application-v2';assert not out.exists();out.mkdir();(out/'proposal.json').write_bytes(pb);(out/'ledger.before.jsonl').write_bytes(lb)
for p,(before,d) in pending.items():(out/p.name).write_bytes(before)
for p,(before,d) in pending.items():assert p.read_bytes()==before
assert lp.read_bytes()==lb
with lp.open('ab') as f:f.write(('\n'.join(json.dumps(a,separators=(',',':')) for a in rows)+'\n').encode())
for p,(before,d) in pending.items():p.write_text(json.dumps(d,indent=2)+'\n')
(out/'receipt.json').write_text(json.dumps({'run':r,'at':now,'proposal_sha256':sha(pb),'decision_actions':len(x['decision_actions']),'appended_rows':[a['defect_id'] for a in rows],'original_ledger_rows_preserved':True,'source_edits':False,'native_gate_success':False,'conditional_touched_refuter_not_applied':True},indent=2)+'\n');print('Applied16 exact EM/GR decision actions and6append-onlyrows;4conditional shared-repair families held')
