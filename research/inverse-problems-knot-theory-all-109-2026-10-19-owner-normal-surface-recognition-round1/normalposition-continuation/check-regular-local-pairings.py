from itertools import combinations
from collections import Counter
V='ABCD'; faces=[frozenset(f) for f in combinations(V,3)]
def e(a,b):return ''.join(sorted((a,b)))
types={}
for a in V:types['T'+a]=frozenset(e(a,b) for b in V if a!=b)
for s in [('A','B'),('A','C'),('A','D')]:
 types['Q'+''.join(s)]=frozenset(e(a,b) for a in s for b in V if b not in s)
def paths(edges,f,g):
 graph={face:[] for face in faces}
 for edge in edges:
  fs=[face for face in faces if set(edge)<=face]
  assert len(fs)==2
  graph[fs[0]].append((fs[1],edge));graph[fs[1]].append((fs[0],edge))
 def walk(first):
  prev=f;cur,edge=first;out=[edge]
  while cur!=g:
   nex=[x for x in graph[cur] if x[0]!=prev];assert len(nex)==1
   prev,cur,edge=cur,nex[0][0],nex[0][1];out.append(edge)
  return Counter(out)
 assert len(graph[f])==2
 return [walk(z) for z in graph[f]]
checks=[]
for (a,x),(b,y) in combinations(list(types.items())+[],2):
 if a.startswith('Q') and b.startswith('Q'):continue
 common=[f for f in faces if sum(set(z)<=f for z in x)==2 and sum(set(z)<=f for z in y)==2]
 for f,g in combinations(common,2):
  p=paths(x,f,g);q=paths(y,f,g)
  expected=sorted([sorted(x),sorted(y)])
  ok=[]
  for k in [0,1]:
   out=[p[0]+q[k],p[1]+q[1-k]]
   if sorted([sorted(z.elements()) for z in out])==expected:ok.append(k)
  checks.append((a,b,''.join(sorted(f)),''.join(sorted(g)),ok))
  assert len(ok)==1,checks[-1]
for a,x in types.items():
 common=[f for f in faces if sum(set(z)<=f for z in x)==2]
 for f,g in combinations(common,2):
  p=paths(x,f,g);q=p;expected=sorted([sorted(x),sorted(x)])
  ok=[]
  for k in [0,1]:
   out=[p[0]+q[k],p[1]+q[1-k]]
   if sorted([sorted(z.elements()) for z in out])==expected:ok.append(k)
  checks.append((a,a,''.join(sorted(f)),''.join(sorted(g)),ok));assert len(ok)==1,checks[-1]
print('PASS',len(checks),'compatible disk-type/common-face pairs: exactly one type-preserving pairing in each.')
for row in checks: print(*row)
