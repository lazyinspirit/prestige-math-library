import pathlib,json,hashlib,datetime
P=pathlib.Path;r='physics-non-fluid-129-2026-10-21-r2';b=P(f'research/{r}-owner-step3-root-adoption/contracts-current-round3');sha=lambda x:hashlib.sha256(x).hexdigest()
assert not json.loads((b/'strict.v2.json').read_text())['errors'];assert not json.loads((b/'coverage.json').read_text())['errors'];x=json.loads((b/'boundaries.json').read_text());assert not x['templates'] and not x['contradicted']
for g in json.loads((b/'diagnosis.final.json').read_text())['guards']:assert sha(P(g['path']).read_bytes())==g['sha256'],g['path']
a=json.loads((b/'semantic-adoption.v2.json').read_text())
for g in [a['source_guard'],a['proposal_guard']]:assert sha(P(g['path']).read_bytes())==g['sha256']
s=json.loads(P(f'.physics-autopilot/{r}/state.json').read_text());assert all(d.get('endedAt') for d in s['dispatches'].values()) and not P(f'.physics-autopilot/{r}/controller.lock').exists()
rows=[]
for n in range(1,130):
 p=P(f'research/{r}-batch-{n}.proof-contracts.json');before=p.read_bytes();after=(b/f'batch-{n}.adopted-proposal.v2.json').read_bytes()
 if json.loads(before)!=json.loads(after):rows.append((p,before,after))
p=P(f'research/{r}-proof-contracts.json');rows.append((p,p.read_bytes(),(b/'merged.adopted-proposal.v2.json').read_bytes()));assert len(rows)==2
out=b/'production-application';assert not out.exists();out.mkdir()
for p,before,after in rows:(out/p.name).write_bytes(before)
for p,before,after in rows:assert p.read_bytes()==before
for p,before,after in rows:p.write_bytes(after)
(out/'receipt.json').write_text(json.dumps({'run':r,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'items':854,'pages':258,'contracts':796,'changed_batch':60,'boundary_cases_current_reviewed':8,'files':[{'path':str(p),'before_sha256':sha(before),'after_sha256':sha(after)} for p,before,after in rows],'original_contracts_preserved':True,'native_gate_success':False},indent=2)+'\n');print('Applied exact current EG worksheet +merged796-record successor; originalsbefore retained')
