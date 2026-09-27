from pathlib import Path
import json,re,hashlib
b=Path(__file__).parent;rows=json.loads((b/'frozen.json').read_text());shards={str(k):[] for k in range(1,11)}
for r in rows:
 i=r['id'];h=' '.join(r['homes'])
 if '/commutative-algebra/' in h or i=='lem-noetherian-domains-are-atomic':k=1
 elif '/complex-analysis/the-riemann-zeta' in h or '/perron-inversion' in h:k=2
 elif '/number-theory/' in h:k=3
 elif '/lie-theory/' in h:k=4
 elif 'schur-' in h or 'nonabelian-extension' in i:k=5
 elif '/group-theory/' in h:k=6
 elif '/combinatorics/' in h or 'virality' in i:k=7
 elif '/functional-analysis/' in h or '/measure-theory/' in h or '/fourier-analysis/' in h or 'hahn-banach' in i or i=='thm-lebesgue-criterion':k=8
 elif '/algebraic-topology/' in h or '/homological-algebra/' in h or '/topology/' in h:k=9
 else:k=10
 shards[str(k)].append(r)
(b/'before').mkdir(exist_ok=True)
for r in rows:
 p=Path('items')/(r['id']+'.md');(b/'before'/p.name).write_bytes(p.read_bytes());r['sha256']=hashlib.sha256(p.read_bytes()).hexdigest()
(b/'frozen.json').write_text(json.dumps(rows,indent=2)+'\n')
for k,rs in shards.items():(b/f'shard-{int(k):02}.json').write_text(json.dumps(rs,indent=2)+'\n')
(b/'ownership.json').write_text(json.dumps({r['id']:f'agent-{int(k):02}' for k,rs in shards.items() for r in rs},indent=2)+'\n')
print({k:len(v) for k,v in shards.items()})
