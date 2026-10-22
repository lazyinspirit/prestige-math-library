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
removed=C['G'];c={k:[v for v in vs if v not in removed] for k,vs in C.items() if k!='G'};s={v:-signs[v] for vs in c.values() for v in vs};_,fs=ribbon(c,s);df={d:i for i,f in enumerate(fs) for d in f};inc=defaultdict(list)
for k,vs in c.items():
 for v in vs:inc[v].append(k)
rows=[];verts=list(inc)
for v in verts:
 aa,bb=inc[v];ds=[(v,aa,1),(v,bb,s[v]),(v,aa,-1),(v,bb,-s[v])];row=[0]*len(fs)
 for i,d in enumerate(ds):row[df[d]]+=(-1)**i
 rows.append(row)
As=['L','A1','A2','A3','A4'];Bs=['N','B1','B2','B3','B4'];states=[]
def rec(i,bs,ss):
 if i==5:states.append(set(ss));return
 for v in c[As[i]]:
  b=next(k for k in Bs if v in c[k])
  if b not in bs:rec(i+1,bs|{b},ss+[v])
rec(0,set(),[])
W=df['h','N',-1];Z=df['g','N',1]
assert len(states)==16 and len(fs)==8
assert (W,Z)==(4,1)
# All solutions differ by the following PRIMITIVE signed periodic vector.
kernel=[F(0),F(0),F(-1),F(1),F(0),F(-1),F(1),F(0)]
M=rows+[[int(k==W) for k in range(8)],[int(k==Z) for k in range(8)]]
assert all(sum(x*y for x,y in zip(r,kernel))==0 for r in M)
# Exact elimination verifies rank seven, so this is the entire rational kernel.
a=[[F(x) for x in r] for r in M];piv=[];i=0
for j in range(8):
 k=next((k for k in range(i,len(a)) if a[k][j]),None)
 if k is None:continue
 a[i],a[k]=a[k],a[i];z=a[i][j];a[i]=[x/z for x in a[i]]
 for k in range(len(a)):
  if k!=i and a[k][j]:
   z=a[k][j];a[k]=[x-z*y for x,y in zip(a[k],a[i])]
 piv.append(j);i+=1
assert len(piv)==7
arrows=[]
for ix,x in enumerate(states):
 for iy,y in enumerate(states):
  if x==y or x&set(c['L']) != y&set(c['L']):continue
  rhs=[int(v in y)-int(v in x) for v in verts]
  sol=solve(M,rhs+[0,0],8)
  if sol is None:continue
  assert all(z.denominator==1 for z in sol)
  lo=max(-sol[3],-sol[6]);hi=min(sol[2],sol[5])
  if lo>hi:continue
  for m in range(int(lo),int(hi)+1):
   D=[int(z+m*k) for z,k in zip(sol,kernel)]
   if min(D)<0:continue
   def pt(v):return sum(F(D[df[v,k,d]],4) for k in inc[v] for d in [1,-1])
   mu=sum(D[j]*(1-F(len(f),4)) for j,f in enumerate(fs))+sum(pt(v) for v in x)+sum(pt(v) for v in y)
   arrows.append({'source':ix,'target':iy,'domain':D,'index':str(mu)})
assert len(arrows)==6 and all(d['domain']==[0,0,0,0,0,0,0,1] and d['index']=='1' for d in arrows)
residual=[i for i in range(16) if all(i not in [d['source'],d['target']] for d in arrows)]
assert residual==[4,7,10,15]
cert={'status':'DEVELOPMENT: same-longitude local domains only; no full glued count/absolute center claim','positive_surface_signs':s,'faces':fs,'states':[sorted(x) for x in states],'W':W,'Z':Z,'corner_rows':rows,'vertices':verts,'periodic_kernel':[int(x) for x in kernel],'same_longitude_positive_arrows':arrows,'residual_matching_indices':residual}
Path(__file__).with_name('pattern-longitude-local-domains-development.json').write_text(json.dumps(cert,indent=2)+'\n')
print('PASS 16 matchings; exact rank7/primitive periodic kernel; ALL integer kernel shifts checked; six same-longitude positive index1 quadrilaterals; four residual matchings. Full glued/top/Chern not claimed.')
