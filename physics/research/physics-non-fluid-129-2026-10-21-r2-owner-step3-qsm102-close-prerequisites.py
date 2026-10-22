import json,hashlib,pathlib,datetime
r='physics-non-fluid-129-2026-10-21-r2'
P=pathlib.Path
sha=lambda b:hashlib.sha256(b).hexdigest()
base=P('research')/(r+'-owner-step3-qsm102-flatness-prerequisite/combined-v2')
evidence=base/'application/receipt.json';e=json.loads(evidence.read_text())
source=P(e['source']);assert sha(source.read_bytes())=='9c438c7f5b532fdce5c5beef0b7ec02e7c4ec48f81b11d6b6b7a305de8166b8c'
assert e['applied_exact_candidate'] and all(x['exit_code']==0 for x in e['focused_checks'])
meta=P('research')/(r+'-owner-step3-root-adoption/source-metadata-round2/receipt.json');assert json.loads(meta.read_text())['source_bodies_unchanged']
s=json.loads(P(f'.physics-autopilot/{r}/state.json').read_text());assert all(x.get('endedAt') for x in s['dispatches'].values());assert not P(f'.physics-autopilot/{r}/controller.lock').exists()
dp=P(f'research/{r}-alpha-batch-102-3a-decisions.json');lp=P('research/defect-ledger.jsonl');db=dp.read_bytes();lb=lp.read_bytes();doc=json.loads(db)
fid=r+'-owner-3a-b102-explicit-filter-proof-prerequisites';assert fid not in lb.decode()
reason='Root confirmed two explicit proof-prerequisite omissions: smoothness of the zero-extended filter bump was inferred from value decay alone, and norm continuity invoked dominated convergence without an exact declared supplier. Same scientific owner applied exact flat-function composition with iterated chain/product rules and entrywise DCT with a common integrable majorant, fixed-t matrix exponential continuity and elementary finite-entry norm bound. Four exact existing mathematical suppliers are now direct dependencies. Public Statement, Fourier sign, filter estimates and commutator identity are unchanged. Same owner reread both actual consumer uses; no consumer source repair. Root read the complete original source, exact combined proof diff and complete DCT supplier. Original native independent observations remain unchanged; native contract/readiness certification and gates remain owed.'
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
row={'defect_id':fid,'run':r,'at':now,'batch':'102','group':'batch-102','subject':'lem-qsmx-filtered-spectral-generator','class':'accuracy','subclass':'unlicensed-inference','severity':'fatal','location':'proof-step','caught_at_stage':'3a-adjudicate','caught_by_role':'owner','disposition':'fixed','repair_confidence':1,'correction':reason,'evidence':[{'path':str(evidence),'note':'Actual same-owner source repair, exact before/after, focused checks and two consumer uses; reading limits retained.'},{'path':str(meta),'note':'Root body-preserving four-dependency metadata successor.'},{'path':str(source),'note':'Current raw '+sha(source.read_bytes())}],'adjudication_ref':[{'path':str(dp),'obligation':'gate:'+fid}]}
doc['decisions'].append({'obligation':'gate:'+fid,'id':row['subject'],'route':'gate','verdict':'confirmed_fatal','evidence':reason+' Evidence '+str(evidence)+'; metadata '+str(meta)+'.','defect_ids':[fid],'repair_confidence':1,'owner_resolution':'Root adopts the actual scientific proof repair and same-owner consumer use checks. This is a supplemental owner finding, not an invented original reader or refuter obligation.'})
out=base/'root-closure';assert not out.exists();out.mkdir();(out/'decisions.before.json').write_bytes(db);(out/'defect-ledger.before.jsonl').write_bytes(lb)
assert dp.read_bytes()==db and lp.read_bytes()==lb
with lp.open('ab') as f:f.write((json.dumps(row,separators=(',',':'))+'\n').encode())
dp.write_text(json.dumps(doc,indent=2)+'\n')
(out/'receipt.json').write_text(json.dumps({'run':r,'at':now,'defect_id':fid,'source_sha256':sha(source.read_bytes()),'evidence_sha256':sha(evidence.read_bytes()),'metadata_receipt_sha256':sha(meta.read_bytes()),'ledger_before_sha256':sha(lb),'ledger_after_sha256':sha(lp.read_bytes()),'original_native_observations_preserved':True,'native_gate_success':False},indent=2)+'\n')
print('Closed actual explicit-filter prerequisite finding; supplemental gate decision, original native observations preserved')
