from pathlib import Path
import json,hashlib
r=Path('research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/cyclotomic_isomorphism');h=json.loads((r/'current-hashes.json').read_text())
for a in json.loads((r/'precheck-proposals.json').read_text())['results']:
 if a['status']!='repair':continue
 p=Path(a['file']);assert hashlib.sha256(p.read_bytes()).hexdigest()==h[str(p)];s=p.read_text();new=a['proposed_proof'];new=new[new.index('**Proof technique:**'):]
 s=s[:s.index('## Proof')]+'## Proof\n\n'+new.strip()+'\n\n'+s[s.index('## Remarks'):]
 s=s.replace('those proved in steps 1.2–1.3 of','those proved in the explicit normalization and pair-product calculations of')
 p.write_text(s);h[str(p)]=hashlib.sha256(p.read_bytes()).hexdigest()
(r/'current-hashes.json').write_text(json.dumps(h,indent=2)+'\n')
