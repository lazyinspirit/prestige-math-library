from itertools import product
import json

def edge(a):
 A,B,C,D,x,y,z=a
 return (A+B+y+z,A+C+x+z,A+D+x+y,B+C+x+y,B+D+x+z,C+D+y+z)
arr=[]
for t in product(range(3),repeat=4):
 arr.append(t+(0,0,0))
 for i in range(3):
  for k in (1,2):
   q=[0]*3;q[i]=k;arr.append(t+tuple(q))
by={edge(a):a for a in arr}
assert len(by)==len(arr)
cases=hits=nontrivial=0
for a in arr:
 for b in arr:
  cases+=1;s=tuple(x+y for x,y in zip(edge(a),edge(b)))
  if any(x%2 for x in s):continue
  c=by.get(tuple(x//2 for x in s))
  if c is None:continue
  hits+=1;assert tuple(x+y for x,y in zip(a,b))==tuple(2*x for x in c)
  nontrivial+=a!=b
print(json.dumps({'admissible_arrays':len(arr),'pairs':cases,'edge_midpoints_in_test_set':hits,'nonidentical_valid_pairs':nontrivial,'result':'pass'},indent=2))
