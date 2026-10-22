import json,math
from pathlib import Path
bs=json.loads(Path('research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-geometric-admissions/ho-figure3-blue-paths.json').read_text());es=[]
for d in bs:
 for it in d['items']:
  if it[0] in ['l','c'] and math.dist(it[1],it[-1])>.01:es.append((it[1],it[-1],d['index']))
pts=[p for e in es for p in e[:2]];par=list(range(len(pts)))
def root(x):
 while par[x]!=x:par[x]=par[par[x]];x=par[x]
 return x
for i,p in enumerate(pts):
 for j,q in enumerate(pts[:i]):
  if math.dist(p,q)<.6:par[root(i)]=root(j)
nodes={};adj={}
for i,p in enumerate(pts):nodes.setdefault(root(i),[]).append(p)
for i,e in enumerate(es):
 a,b=root(2*i),root(2*i+1);adj.setdefault(a,[]).append((b,i));adj.setdefault(b,[]).append((a,i))
from collections import Counter
print('edges',len(es),'nodes',len(nodes),'deg',Counter(len(v) for v in adj.values()))
seen=set()
for a in adj:
 if a in seen:continue
 todo=[a];comp=[]
 while todo:
  n=todo.pop()
  if n in seen:continue
  seen.add(n);comp.append(n);todo.extend(x for x,_ in adj[n] if x not in seen)
 print('comp',len(comp),'ends',[(nodes[n][0],len(adj[n])) for n in comp if len(adj[n])!=2])
