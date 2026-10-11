from pathlib import Path
import hashlib,json
r=Path('research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/cyclotomic_isomorphism');h=json.loads((r/'current-hashes.json').read_text())
for n in ['lem-cyclotomic-hecke-intertwiners-and-local-power-series','lem-cyclotomic-klr-block-satisfies-the-hecke-relations']:
 p=Path('items')/(n+'.md');assert hashlib.sha256(p.read_bytes()).hexdigest()==h[str(p)];s=p.read_text()
 if 'intertwiners-and' in n:s=s.replace('[given, algebra]','[F2, algebra]')
 else:
  s=s.replace("the normalization supplier's steps 3.1–3.2",'the normalization supplier’s local crossing and braid calculations').replace("The supplier's step 2.2",'The supplier’s full affine coefficient check').replace("the supplier's step 2.2",'the supplier’s full affine coefficient check')
 p.write_text(s);h[str(p)]=hashlib.sha256(p.read_bytes()).hexdigest()
(r/'current-hashes.json').write_text(json.dumps(h,indent=2)+'\n')
