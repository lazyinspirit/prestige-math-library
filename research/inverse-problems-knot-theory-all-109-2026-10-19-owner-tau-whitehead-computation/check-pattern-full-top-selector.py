"""Exact C-corner proof data for the full satellite junction/top selector.
Absolute x3=0 comes from the separate actual Seifert-Euler operation, NOT this checker.
"""
from pathlib import Path
import json
from fractions import Fraction as F
exec(Path(__file__).with_name('eftekhary-unified-ribbon-development.py').read_text().split("if __name__=='__main__':")[0])
def solve(rows,rhs,n):
 a=[[F(t) for t in r]+[F(v)] for r,v in zip(rows,rhs)];piv=[];i=0
 for j in range(n):
  k=next((k for k in range(i,len(a)) if a[k][j]),None)
  if k is None:continue
  a[k],a[i]=a[i],a[k];z=a[i][j];a[i]=[t/z for t in a[i]]
  for k in range(len(a)):
   if k!=i and a[k][j]:
    z=a[k][j];a[k]=[x-z*y for x,y in zip(a[k],a[i])]
  piv.append(j);i+=1
 if any(not any(r[:n]) and r[-1] for r in a):return None
 x=[F(0)]*n
 for i,j in enumerate(piv):x[j]=a[i][-1]
 return x

s={v:-t for v,t in (signs|{'Q':-1,'n':1}).items()};_,fs=ribbon(C,s);df={d:i for i,f in enumerate(fs) for d in f};inc=defaultdict(list)
for k,vs in C.items():
 for v in vs:inc[v].append(k)
verts=[v for v in inc if v!='Q'];rows=[]
for v in verts:
 aa,bb=inc[v];ds=[(v,aa,1),(v,bb,s[v]),(v,aa,-1),(v,bb,-s[v])];row=[0]*10
 for i,d in enumerate(ds):row[df[d]]+=(-1)**i
 rows.append(row)
W=df['h','N',-1];Z=df['g','N',1];assert (W,Z)==(7,2)
M=rows+[[int(k==W) for k in range(10)]]
a=[[F(x) for x in r] for r in M];i=0;piv=[]
for j in range(10):
 k=next((k for k in range(i,len(a)) if a[k][j]),None)
 if k is None:continue
 a[i],a[k]=a[k],a[i];z=a[i][j];a[i]=[x/z for x in a[i]]
 for k in range(len(a)):
  if k!=i and a[k][j]:
   z=a[k][j];a[k]=[x-z*y for x,y in zip(a[k],a[i])]
 i+=1;piv.append(j)
assert i==9
P=[-1,0,0,-1,0,-1,1,0,1,0]
assert all(sum(x*y for x,y in zip(r,P))==0 for r in M) and P[Z]==0
As=['L','A1','A2','A3','A4'];Bs=['N','B1','B2','B3','B4'];states=[]
def rec(i,bs,ss):
 if i==5:states.append(set(ss));return
 for v in C[As[i]]:
  if v in C['G']:continue
  b=next(k for k in Bs if v in C[k])
  if b not in bs:rec(i+1,bs|{b},ss+[v])
rec(0,set(),[]);anchor=set('ncgqe');relative=[];domains=[]
for y in states:
 rhs=[int(v in y)-int(v in anchor) for v in verts]
 D=solve(M,rhs+[0],10);assert D is not None and all(t.denominator==1 for t in D)
 domains.append([int(x) for x in D]);relative.append(-int(D[Z]))
assert relative==[-1,-1,-2,-2,-1,-1,-1,0,0,0,1,0,0,-1,-1,0]
# The explicit POSITIVE disk chain from the anchor to C-a is F1+F6.
D=[0,1,0,0,0,0,1,0,0,0];target=set('acgmq')
assert all(sum(x*y for x,y in zip(r,D))==int(v in target)-int(v in anchor) for r,v in zip(rows,verts))
assert D[W]==D[Z]==0
# Its positive edge sum, derived by reversing the stored clockwise face cycles.
edge={}
for name,vs in C.items():
 for j,v in enumerate(vs):
  edge[v,name,1]=(vs[(j+1)%len(vs)],name,-1)
  edge[v,name,-1]=(vs[(j-1)%len(vs)],name,1)
boundary={}
for face in [fs[1],fs[6]]:
 for d in face:
  reverse=edge[d];key=min(d,reverse);sgn=1 if d==key else -1
  boundary[key]=boundary.get(key,0)-sgn
boundary={k:v for k,v in boundary.items() if v}
assert len(boundary)==7 # d and b are straight through, not actual polygon corners.
cert={'status':'C-cell/relative-A proof data only; requires actual meridian Seifert anchor and full marked companion geometry','faces':fs,'physical_W':W,'physical_Z':Z,'vertices_excluding_puncture_Q':verts,'corner_rows':rows,'normalized_rank':9,'primitive_kernel':P,'meridian_anchor_matching':sorted(anchor),'longitude_matchings':[sorted(x) for x in states],'relative_A_if_anchor_zero':relative,'domain_solutions':domains,'zero_mark_changed_pair_chain_F1_plus_F6':D,'unique_top_matching':sorted(states[10]),'positive_hexagon_boundary':['y0 --lambda#m--> a','a --beta3--> e','e --alpha1--> m','m --beta1--> n','n --gamma#l--> x0','x0 --delta1--> y0']}
Path(__file__).with_name('pattern-full-top-selector-development.json').write_text(json.dumps(cert,indent=2)+'\n')
print('PASS no artificial Q equation: rank9; primitive mixed-sign kernel; exact16 relative values; unique top a-prime,c,g,m,q; actual zero-mark F1+F6 changed-pair chain')
