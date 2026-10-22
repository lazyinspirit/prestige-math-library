from itertools import permutations
from fractions import Fraction
import json
n=5
O=[(r+.5,r+.5) for r in range(n)]
X=[((r+2)%n+.5,r+.5) for r in range(n)]
states=list(permutations(range(n))); index={p:i for i,p in enumerate(states)}
def I(P,Q):return sum(px<qx and py<qy for px,py in P for qx,qy in Q)
def M(p,P):
 S=[(p[r],r) for r in range(n)]
 return I(S,S)-I(S,P)-I(P,S)+I(P,P)+1
def A(p):return Fraction(M(p,O)-M(p,X)-n+1,2)
def inside(x,a,b):return 0<(x-a)%n<(b-a)%n
d={}
rects=[]
for ix,p in enumerate(states):
 targets=set()
 for r in range(n):
  for s in range(n):
   if r==s:continue
   # p[r],r southwest; p[s],s northeast, in lifted positive coordinate rectangle
   a,b=p[r],p[s]
   if any(inside(p[t],a,b) and inside(t,r,s) for t in range(n)):continue
   if any(inside(x,a,b) and inside(y,r,s) for x,y in O):continue
   q=list(p);q[r],q[s]=q[s],q[r];q=tuple(q);iy=index[q]
   assert M(p,O)-M(q,O)==1
   assert A(p)>=A(q)
   if iy in targets:targets.remove(iy)
   else:targets.add(iy)
 d[ix]=targets
for i in d:
 sq=set()
 for j in d[i]:sq.symmetric_difference_update(d[j])
 assert not sq,(i,sq)
def rank(columns):
 pivots={}
 for col in columns:
  v=sum(1<<x for x in col)
  while v:
   p=v.bit_length()-1
   if p in pivots:v^=pivots[p]
   else:pivots[p]=v;break
 return len(pivots)
# Image from cycles in F_s to total homology measured by
# dim Z_s - dim(Z_s intersect B), with B inside total cycles.
# Use rank(B+F_s) and dimension of total boundary intersection F_s.
bcols=list(d.values());rb=rank(bcols)
rows=[]
for s in range(-6,4):
 fs=[i for i,p in enumerate(states) if A(p)<=s]
 rd=rank([d[i] for i in fs]); zdim=len(fs)-rd
 # dim(B intersect F_s)= dimB+dimF_s-dim(B+F_s)
 bint=rb+len(fs)-rank(bcols+[{i} for i in fs])
 rows.append({'s':s,'chain_dimension':len(fs),'differential_rank':rd,'cycle_dimension':zdim,'image_rank':zdim-bint})
print(json.dumps({'grid':{'n':n,'O_columns_by_row':list(range(n)),'X_columns_by_row':[(r+2)%n for r in range(n)]},'states':len(states),'differential_rank':rb,'total_homology_rank':len(states)-2*rb,'grading_range':{'A':[str(min(map(A,states))),str(max(map(A,states)))],'M':[min(M(p,O) for p in states),max(M(p,O) for p in states)]},'filtration_images':rows},indent=2))
# Same-A elementary chain cancellations, retaining the actual recurrence.
from collections import Counter
active=set(d); D={k:set(v) for k,v in d.items()}; pivots=[]
while True:
 candidates=[(a,b) for a in sorted(active) for b in sorted(D[a]) if A(states[a])==A(states[b])]
 if not candidates:break
 a,b=candidates[0];pivots.append([a,b]); da=set(D[a]); active.remove(a);active.remove(b)
 for c in active:
  if b in D[c]:D[c]^=da
  D[c]-={a,b}
 del D[a];del D[b]
for c in active:
 sq=set()
 for v in D[c]:sq^=D[v]
 assert not sq
print('PIVOTS',json.dumps(pivots))
print('REDUCED_GRADES',sorted(Counter((M(states[i],O),str(A(states[i]))) for i in active).items()))
print('REDUCED_RANKS',[(m,rank([D[i] for i in active if M(states[i],O)==m])) for m in range(-4,3)])
print('REDUCED_COLUMNS',json.dumps({str(i):sorted(D[i]) for i in sorted(active) if D[i]}))
for m in range(-2,3):
 echelon={};basis=[];expressions={}
 for i in sorted(active):
  if M(states[i],O)!=m or not D[i]:continue
  v=sum(1<<j for j in D[i]);expr=set()
  while v:
   p=v.bit_length()-1
   if p in echelon:
    w,ex=echelon[p];v^=w;expr^=ex
   else:
    echelon[p]=(v,expr^{i});basis.append(i);expr={i};break
  expressions[i]=sorted(expr)
 print('BASIS',m,basis,'EXPRESSIONS',json.dumps(expressions))
for m in range(-2,3):
 echelon={};piv=[]
 for i in sorted(active):
  if M(states[i],O)!=m:continue
  v=sum(1<<j for j in D[i])
  while v:
   p=v.bit_length()-1
   if p in echelon:v^=echelon[p]
   else:echelon[p]=v;piv.append([i,p]);break
 print('ECHELON',m,piv)
