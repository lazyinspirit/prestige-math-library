# Root-only metadata preservation of four previously accepted context suppliers.
import json,hashlib,re,datetime
from pathlib import Path
r="inverse-problems-knot-theory-all-109-2026-10-19"
b=Path(f"research/{r}-supervision-20261020/step1-bounded-closeout")
s=json.loads(Path(f".autopilot/{r}/state.json").read_text())
assert s['stage']=='1-scaffold' and s['paused'] and s['pauseAfter']=='1-scaffold'
assert not any(d.get('startedAt') and not d.get('endedAt') for d in s['dispatches'].values())
rows=[
('lem-smooth-collared-arcs-in-the-four-dimensional-product-are-unknotted',f'research/{r}-owner-concordance-ribbon-round1/root-original74-bare-arc-review.json'),
('lem-countable-signature-groups-with-exponent-four-kernel-split',f'research/{r}-independent-original75-classification-review-round1/report.json'),
('lem-finite-framed-locally-flat-links-in-smooth-three-manifolds-have-smooth-image-models',f'research/{r}-owner-freedman-alexander-one-working-chain/top-input-whole-successor/independent-whole-original-review.json'),
('lem-weak-coulomb-asd-connections-for-smooth-four-metrics-are-interior-smooth',f'research/{r}-math-resolution-map.json')]
archive=b/'root-context-provenance-before';archive.mkdir(exist_ok=False)
prepared=[];receipts=[]
for id,evidence in rows:
 assert Path(evidence).is_file()
 p=Path('items')/(id+'.md');original=p.read_text();m=re.fullmatch(r'(---\n)(.*?)(\n---\n)(.*)',original,re.S);assert m
 fm=m[2];body=m[4];assert 'local_proof_acceptance:' not in fm and 'generation:' not in fm
 assert 'statement: ai-generated' in fm and 'proof: ai-generated' in fm
 if 'pipeline_run:' not in fm: fm+='\npipeline_run: '+r
 digest=hashlib.sha256(body.encode()).hexdigest()
 fm+='\ngeneration:\n  role: reviewed-local-lemma\nlocal_proof_acceptance:\n  run: '+r+'\n  authorized_by: /root\n  decision: preserve-resolved-local-lemma\n  independent_review: '+evidence+'\n  accepted_body_sha256: '+digest
 after=m[1]+fm+m[3]+body
 assert after.split('\n---\n',1)[1]==body
 (archive/p.name).write_text(original);prepared.append((p,original,after));receipts.append({'id':id,'independent_review':evidence,'accepted_body_sha256':digest,'body_unchanged':True})
for p,original,after in prepared: assert p.read_text()==original
for p,original,after in prepared: p.write_text(after)
(b/'root-four-context-provenance-adoption.json').write_text(json.dumps({'run':r,'authorized_by':'/root','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'entries':receipts,'limits':'Metadata preservation of existing literal-scope acceptance only; no new proof audit, source attribution or frontier membership. Existing source references retained.'},indent=2)+'\n')
print('Root preserved four accepted context lemmas; bodies and references unchanged.')
