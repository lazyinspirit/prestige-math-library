import itertools,json
from collections import defaultdict
from pathlib import Path

def interval(a,b,n):return [(a+k)%n for k in range((b-a)%n)]
def rectangles(x):
 n=len(x);out=[]
 for r0,r1 in itertools.permutations(range(n),2):
  c0,c1=x[r0],x[r1];rs=interval(r0,r1,n);cs=interval(c0,c1,n)
  if any(r in rs[1:] and c in cs[1:] for r,c in enumerate(x)):continue
  y=list(x);y[r0],y[r1]=y[r1],y[r0]
  cells=tuple(int(r in rs and c in cs)for r in range(n)for c in range(n))
  out.append((tuple(y),(r0,r1,c0,c1),cells))
 return out
result=[]
for n in range(2,6):
 states=list(itertools.permutations(range(n)));cache={x:rectangles(x)for x in states};pairs=0;domains=0;overlap4=0
 for x in states:
  grouped=defaultdict(list)
  for y,r1,d1 in cache[x]:
   for z,r2,d2 in cache[y]:
    D=tuple(a+b for a,b in zip(d1,d2));grouped[z,D].append((r1,r2));pairs+=1
    if sum(a!=b for a,b in zip(x,z))==3:assert max(D)==1
    if sum(a!=b for a,b in zip(x,z))==4 and max(D)==2:overlap4+=1
  for (z,D),decs in grouped.items():
   if z!=x:assert len(decs)==2,(n,x,z,D,decs)
   else:
    assert len(decs)==1
    assert D in [tuple(int(r==i)for r in range(n)for c in range(n))for i in range(n)]+[tuple(int(c==i)for r in range(n)for c in range(n))for i in range(n)]
   domains+=1
  assert sum(z==x for z,D in grouped)==2*n
 result.append(dict(n=n,states=len(states),ordered_composites=pairs,distinct_endpoint_domain_pairs=domains,four_changed_overlapping_ordered_composites=overlap4,passed=True))
print(json.dumps(result,indent=2))
