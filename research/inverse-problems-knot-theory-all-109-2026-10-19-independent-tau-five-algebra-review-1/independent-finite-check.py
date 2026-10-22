from itertools import permutations
from pathlib import Path
from collections import Counter
from math import comb
import json,re,hashlib
base=Path(__file__).parent
r='inverse-problems-knot-theory-all-109-2026-10-19'
certpath=Path('research')/(r+'-owner-tau-escalations/diagonal-five-grid-certificate.json')
cert=json.loads(certpath.read_text())
# Independent integer-coordinate enumeration. Coordinates are doubled to avoid half-integer arithmetic.
P=list(permutations(range(5)));lookup={p:k for k,p in enumerate(P)}
O={(2*j+1,2*j+1) for j in range(5)}
X={(2*((j+2)%5)+1,2*j+1) for j in range(5)}
pointsets=[{(2*p[j],2*j) for j in range(5)} for p in P]
def count(P,Q):return sum(x<u and y<v for x,y in P for u,v in Q)
def maslov(S,T):return count(S,S)-count(S,T)-count(T,S)+count(T,T)+1
M=[maslov(S,O) for S in pointsets]
A2=[M[j]-maslov(S,X)-4 for j,S in enumerate(pointsets)]
assert all(a%2==0 for a in A2)
A=[a//2 for a in A2]
def arc(a,b):return {(a+t)%10 for t in range(1,(b-a)%10)}
def bits(v):
 while v:
  b=v & -v;yield b.bit_length()-1;v-=b
D={j:0 for j in range(120)};rectangle_count=0
for j,p in enumerate(P):
 for r0 in range(5):
  for r1 in range(r0+1,5):
   q=list(p);q[r0],q[r1]=q[r1],q[r0];k=lookup[tuple(q)]
   for sw,ne in [(r0,r1),(r1,r0)]:
    horiz=arc(2*p[sw],2*p[ne]);vert=arc(2*sw,2*ne)
    interior=lambda point:point[0] in horiz and point[1] in vert
    if not any(map(interior,pointsets[j])) and not any(map(interior,O)):
     rectangle_count+=1;D[j]^=1<<k
     assert M[j]-M[k]==1,(j,k,'M')
     assert A[j]>=A[k],(j,k,'A')
assert [list(p) for p in P]==cert['states']
assert {str(k):list(bits(v)) for k,v in D.items()}==cert['initial_columns']
for j,col in D.items():
 square=0
 for k in bits(col):square^=D[k]
 assert square==0,j
assert {str(j):{'M':M[j],'A':str(A[j])} for j in range(120)}==cert['grading']

def rank(cols):
 rows={}
 for v in cols:
  while v:
   pivot=v.bit_length()-1
   if pivot in rows:v ^= rows[pivot]
   else:rows[pivot]=v;break
 return len(rows)
initialrank=rank(D.values());assert initialrank==52
source=Path('items/lem-diagonal-five-grid-filtered-staircase-reduction.md').read_text()
pivots=json.loads(re.search(r'`(\[\[3,5\].*?\]\])`',source).group(1))
assert pivots==cert['same_A_cancellation_pivots'] and len(pivots)==36
C=dict(D)
for u,v in pivots:
 assert u in C and v in C and (C[u]>>v)&1
 assert A[u]==A[v] and M[u]==M[v]+1
 correction=C[u];del C[u];del C[v]
 for w in C:
  if (C[w]>>v)&1:C[w]^=correction
  C[w]&=~((1<<u)|(1<<v))
 assert all(not ((col>>u)&1 or (col>>v)&1) for col in C.values())
 for j,col in C.items():
  square=0
  for k in bits(col):square ^= C[k]
  assert square==0
assert len(C)==48
assert {str(j):list(bits(col)) for j,col in C.items()}==cert['reduced_columns']
assert all(A[j]==M[j]-1 for j in C)
# Independently parse the actual source image basis and dependent-column expressions.
image={};gradedbasis={}
for line in source.splitlines():
 m=re.fullmatch(r'\| (-?\d+) \| (\d+) \| ([\d,]+) \|',line)
 if m:
  degree,j,support=int(m[1]),int(m[2]),list(map(int,m[3].split(',')))
  image[j]=sum(1<<k for k in support)
  assert image[j]==C[j] and M[j]==degree
  gradedbasis.setdefault(degree,[]).append(j)
assert len(image)==16
predicted=dict(image)
for lhs,rhs in re.findall(r'\$d_\{(\d+)\}=([^$]+)\$',source):
 lhs=int(lhs);terms=[int(j) for j in re.findall(r'd_\{(\d+)\}',rhs)];assert terms
 value=0
 for j in terms:value^=image[j]
 assert value==C[lhs],(lhs,terms)
 predicted[lhs]=value
assert all(predicted.get(j,0)==col for j,col in C.items())
dims={m:sum(M[j]==m for j in C) for m in range(-4,3)}
ranks={m:rank(C[j] for j in C if M[j]==m) for m in range(-4,3)}
assert list(dims.values())==[1,5,11,14,11,5,1]
assert list(ranks.values())==[0,0,1,4,6,4,1]
for m,js in gradedbasis.items():assert rank(image[j] for j in js)==len(js)
hom={m:dims[m]-ranks[m]-ranks.get(m+1,0) for m in dims}
assert list(hom.values())==[1,4,6,4,1,0,0]
for m in range(-4,3):
 expected_h=comb(4,-m) if -4<=m<=0 else 0
 expected_pairs=comb(4,2-m) if -2<=m<=2 else 0
 assert hom[m]==expected_h and ranks[m]==expected_pairs
# Check filtered homology-image dimensions in the original 120-state complex independently.
filtered=[]
for s in range(-6,4):
 included=[j for j in D if A[j]<=s]
 z=len(included)-rank(D[j] for j in included)
 binter=initialrank+len(included)-rank(list(D.values())+[1<<j for j in included])
 filtered.append({'level':s,'image_dimension':z-binter})
assert [x['image_dimension'] for x in filtered]==[0,1,5,11,15,16,16,16,16,16]
# D6: separately transcribed every nonzero source column, over F2[U].
d6={j:set() for j in range(1,26)}
d6.update({2:{(1,0),(5,1)},3:{(2,1),(4,0)},4:{(1,1),(5,2)},22:{(25,0),(21,1)},23:{(22,1),(24,0)},24:{(25,1),(21,2)}})
for j in [6,10,14,18]:d6[j]={(j-1,0),(j+3,0)};d6[j+1]={(j,1),(j+2,0)};d6[j+2]={(j-1,1),(j+3,1)}
a6={j:(1 if j in [2,6,10,14,18,22] else -1 if j in [4,8,12,16,20,24] else 0) for j in range(1,26)}
for j,col in d6.items():
 square=set()
 for k,power in col:
  assert power>=0 and a6[k]-power<=a6[j]
  for l,p2 in d6[k]:
   term=(l,power+p2)
   if term in square:square.remove(term)
   else:square.add(term)
 assert not square,j
hat={j:sum(1<<(k-1) for k,power in col if power==0) for j,col in d6.items()}
hrank=rank(hat.values());assert hrank==12 and 25-2*hrank==1
assert rank(list(hat.values())+[1<<4])==13
assert all(a6[k]<a6[j] for j,col in d6.items() for k,power in col if power==0)
assert Counter(a6.values())=={-1:6,0:13,1:6}
for j in [4,8,12,16,20,24]:assert rank(list(hat.values())+[1<<(j-1)])==12
result={'grid_states':120,'counted_rectangles':rectangle_count,'all_initial_columns_match_certificate':True,'square_zero_columns_checked':120,'initial_rank':initialrank,'cancellations':len(pivots),'reduced_size':len(C),'all_reduced_columns_match_certificate':True,'source_sparse_image_basis_columns_checked':len(image),'source_nonbasis_nonzero_columns_checked':len(predicted)-len(image),'chain_dimensions':dims,'outgoing_ranks':ranks,'homology_dimensions':hom,'filtered_total_homology_images':filtered,'D6_polynomial_columns_checked':25,'D6_polynomial_square_zero':True,'D6_hat_rank':hrank,'D6_total_homology':1,'D6_threshold':0,'D6_associated_graded_dimensions':dict(Counter(a6.values())),'scope':'Finite exact computations only; no knot-type or analytic Floer identification.'}
(base/'independent-finite-results.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
