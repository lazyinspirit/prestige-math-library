from pathlib import Path
import json
r=Path(__file__).parent
chunks=[]; cur=''; nodes=[]
for n in range(40,135):
 t=(r/'text'/f'node{n}.txt').read_text()
 if len(cur)+len(t)>26000 and cur:
  chunks.append((nodes,cur)); nodes=[]; cur=''
 cur+=f'\nSOURCE NODE {n}\n'+t;nodes.append(n)
if cur: chunks.append((nodes,cur))
(r/'chunks').mkdir(exist_ok=True)
for i,(ns,t) in enumerate(chunks): (r/'chunks'/f'{i+1:02}.txt').write_text(t)
print([(i+1,ns,len(t)) for i,(ns,t) in enumerate(chunks)])
