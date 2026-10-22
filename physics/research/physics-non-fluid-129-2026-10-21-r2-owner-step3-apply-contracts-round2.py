import pathlib,json,hashlib,datetime
P=pathlib.Path;r='physics-non-fluid-129-2026-10-21-r2';base=P(f'research/{r}-owner-step3-root-adoption/contracts-current-round2');out=base/'production-application';assert not out.exists()
sha=lambda b:hashlib.sha256(b).hexdigest()
s=json.loads(P(f'.physics-autopilot/{r}/state.json').read_text());assert all(d.get('endedAt') for d in s['dispatches'].values());assert not P(f'.physics-autopilot/{r}/controller.lock').exists()
for f in ['diagnosis.final.json','semantic-adoption.v2.json']:
 d=json.loads((base/f).read_text())
 for g in d['guards']:assert sha(P(g['path']).read_bytes())==g['sha256'],g['path']
assert not json.loads((base/'strict.json').read_text())['errors']
b=json.loads((base/'boundaries.v2.json').read_text());assert not b['templates'] and not b['contradicted']
assert not json.loads((base/'coverage.json').read_text())['errors']
rows=[]
for n in range(1,130):
 dest=P(f'research/{r}-batch-{n}.proof-contracts.json');candidate=base/f'batch-{n}.adopted-proposal.v2.json';rows.append((dest,dest.read_bytes(),candidate.read_bytes()))
merged=P(f'research/{r}-proof-contracts.json');rows.append((merged,merged.read_bytes(),(base/'merged.adopted-proposal.v2.json').read_bytes()))
assert len(json.loads(rows[-1][2])['contracts'])==796
out.mkdir();changes=[]
for p,b,a in rows:
 (out/p.name).write_bytes(b);changes.append({'path':str(p),'before_sha256':sha(b),'after_sha256':sha(a)})
for p,b,a in rows:assert p.read_bytes()==b
for p,b,a in rows:
 if b!=a:p.write_bytes(a)
(out/'receipt.json').write_text(json.dumps({'run':r,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'changes':changes,'worksheet_records':796,'scope_items':854,'pages':258,'native_gate_success':False,'independent_native_reread':False,'qualification':'Root current-source transcription plus exact released case-specific semantic reviews. Original native contracts retained in archive; native readiness, creation certification and full gates remain required.'},indent=2)+'\n')
print('Applied129 current batch worksheets and merged796 record file, preserved originals')
