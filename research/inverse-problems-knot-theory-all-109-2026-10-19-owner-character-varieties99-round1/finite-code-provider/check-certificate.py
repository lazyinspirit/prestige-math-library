"""Exact independent-of-construction check of the literal integer certificate."""
from fractions import Fraction as F
from itertools import combinations
import json
C = {
 'C1':(-423,0),'1Oi':(-627,102),'1Oo':(-363,-30),'1Ui':(-363,30),'1Uo':(-627,-102),
 'C2':(0,-9),'2Oi':(-33,-6),'2Oo':(99,-18),'2Ui':(-99,-18),'2Uo':(33,-6),
 'C3':(0,9),'3Oi':(33,6),'3Oo':(-99,18),'3Ui':(99,18),'3Uo':(-33,6),
 'C4':(423,0),'4Oi':(627,-102),'4Oo':(363,30),'4Ui':(363,-30),'4Uo':(627,102)}
visits=['1O','2U','3O','1U','4O','3U','2O','4U']
sub=lambda a,b:(a[0]-b[0],a[1]-b[1])
det=lambda a,b:a[0]*b[1]-a[1]*b[0]
def meet(a,b,c,d):
 u,v,w=sub(b,a),sub(d,c),sub(c,a); D=det(u,v)
 if D:
  t,s=F(det(w,v),D),F(det(w,u),D)
  return ('point',(F(a[0])+t*u[0],F(a[1])+t*u[1])) if 0<=t<=1 and 0<=s<=1 else None
 if det(w,u):return None
 k=0 if u[0] else 1
 lo=max(min(a[k],b[k]),min(c[k],d[k])); hi=min(max(a[k],b[k]),max(c[k],d[k]))
 if lo>hi:return None
 if lo<hi:return ('overlap',None)
 t=F(lo-a[k],u[k]);return ('point',(F(a[0])+t*u[0],F(a[1])+t*u[1]))
segments=[];pairs=[]
for a,b in zip(visits,visits[1:]+visits[:1]):
 path=['C'+a[0],a+'o',b+'i','C'+b[0]]
 segments+=list(zip(path,path[1:]))
for i,j in combinations(range(len(segments)),2):
 a,b=segments[i];c,d=segments[j]; common={a,b}&{c,d};z=meet(C[a],C[b],C[c],C[d])
 if common:
  assert len(common)==1 and z==('point',C[next(iter(common))]),(i,j,z)
 else:assert z is None,(i,j,z)
 pairs.append({'segments':[i,j],'type':'declared endpoint' if common else 'disjoint'})
assert len(pairs)==276 and sum(x['type']=='declared endpoint' for x in pairs)==40
rows=[];rot={}
for r in range(1,5):
 Oi,Oo,Ui,Uo=[C[f'{r}{p}'] for p in ['Oi','Oo','Ui','Uo']];center=C[f'C{r}'];o,u=sub(Oo,Oi),sub(Uo,Ui)
 assert det(sub(center,Oi),o)==0 and det(sub(center,Ui),u)==0
 assert sum((center[k]-Oi[k])*(center[k]-Oo[k]) for k in [0,1])<0
 assert sum((center[k]-Ui[k])*(center[k]-Uo[k]) for k in [0,1])<0
 D=det(o,u);lefti=det(o,sub(Ui,center));lefto=det(o,sub(Uo,center))
 rows.append([D,lefti,lefto])
 cyc=[f'{r}Oo',f'{r}Ui' if D<0 else f'{r}Uo',f'{r}Oi',f'{r}Uo' if D<0 else f'{r}Ui']
 for a,b in zip(cyc,cyc[1:]+cyc[:1]):
  assert det(sub(C[a],center),sub(C[b],center))>0
  rot[a]=b
assert rows==[[-69696,15840,-53856],[3168,-2376,792],[3168,-2376,792],[-69696,15840,-53856]]
edge={}
for a,b in zip(visits,visits[1:]+visits[:1]):edge[a+'o']=b+'i';edge[b+'i']=a+'o'
seen=set();faces=[]
for a in rot:
 if a in seen:continue
 face=[];x=a
 while x not in seen:seen.add(x);face.append(x);x=rot[edge[x]]
 assert x==a;faces.append(face)
assert sorted(map(len,faces))==[2,2,3,3,3,3]
# Ordinary three-braid, top positions left->right; generator + means left strand over.
strands=[0,1,2];paths={i:[] for i in strands};labels=[1,2,4,3]
for r,(position,exponent) in zip(labels,[(0,1),(1,-1),(0,1),(1,-1)]):
 a,b=strands[position:position+2]
 paths[a].append(str(r)+('O' if exponent==1 else 'U'))
 paths[b].append(str(r)+('U' if exponent==1 else 'O'))
 strands[position:position+2]=[b,a]
x=0;braidvisits=[]
while True:
 braidvisits+=paths[x];x=strands.index(x)
 if x==0:break
assert braidvisits==visits
# A square has only four neighbor intersections and no nonneighbor intersection.
square=[(0,0),(1,0),(1,1),(0,1)];sqedges=list(zip(square,square[1:]+square[:1]))
for i,j in combinations(range(4),2):
 z=meet(*sqedges[i],*sqedges[j]);common=set(sqedges[i])&set(sqedges[j])
 assert z==('point',next(iter(common))) if common else z is None
print(json.dumps({'valid':True,'vertices':C,'segments':segments,'all_pair_checks':pairs,'crossing_determinant_and_sides':rows,'face_cycles':faces,'braid_visits':braidvisits,'square_valid':True},indent=2))
