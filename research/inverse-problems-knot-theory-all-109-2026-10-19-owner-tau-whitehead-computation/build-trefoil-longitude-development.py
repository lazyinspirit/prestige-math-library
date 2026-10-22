import json
from pathlib import Path
import importlib.util
from collections import defaultdict
p=Path(__file__).parent.parent/'inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-geometric-admissions/whitehead-cable-clasp-code.py';sp=importlib.util.spec_from_file_location('w',p);w=importlib.util.module_from_spec(sp);sp.loader.exec_module(w)
w.parent={};w.edges=[];w.cross={};w.braid([1,1,1],'T',2,1)
for i in [1,2]:w.wire(f'TB{i}',f'TT{i}')
comps={}
for j in w.cross:
 for p in w.ports:comps.setdefault(w.root(f'{j}:{p}'),[]).append((j,p))
a={}
for d,e in comps.values():a[d]=e;a[e]=d
rot=lambda d:(d[0],w.ports[(w.ports.index(d[1])+1)%4])
seen=set();fs=[]
for d in a:
 if d in seen:continue
 f=[];x=d
 while x not in seen:seen.add(x);f.append(x);x=rot(a[x])
 fs.append(f)
print('plane faces',fs)
marked=comps[w.root('TT1')];print('markededge',marked)
# The exterior face is the one of length3 running outside both closure arcs.
print('lengths',list(map(len,fs)))
# Read the actual two adjacent marked faces, each possible outer choice, genus certification.
exec(Path(__file__).with_name('eftekhary-unified-ribbon-development.py').read_text().split("if __name__=='__main__':")[0])
A=1;B=0
c={f'A{i}':[f'v{v}{p}' for v,p in f] for i,f in enumerate(fs) if i!=A};j=next(j for j,d in enumerate(fs[B]) if d in marked);c[f'A{B}'].insert(j+1,'u');sg={'u':1}
for j in range(1,4):
 vs=[]
 for p in w.ports[::-1]:
  lab=f'v{j}{p}'
  if any(lab in r for r in c.values()):
   vs.append(lab);pin=w.ports[(w.ports.index(p)-1)%4];over=lambda p:p in ['IR','OL'];sg[lab]=1 if not over(pin) and over(p) else -1
 c[f'B{j}']=vs
c['M']=['u'];genus,hfs=ribbon(c,sg);df={d:i for i,f in enumerate(hfs) for d in f}
As=['A0','A2','A3','A4'];Bs=['B1','B2','B3','M'];I=[[sum(sg[v] for v in c[aa] if v in c[bb]) for bb in Bs] for aa in As]
print('I',I,'faces',hfs)
# Last beta=M is the actual knot meridian. w annihilates other columns.
from fractions import Fraction as F
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

wt=solve([[I[i][j] for i in range(4)] for j in range(4)],[0,0,0,1],4);print('weight',wt)
edges=[]
for aa in As:
 for j,v in enumerate(c[aa]):
  vnext=c[aa][(j+1)%len(c[aa])];R=df[v,aa,1];L=df[vnext,aa,-1];edges.append({'name':(v,vnext,aa),'R':R,'L':L,'k':wt[As.index(aa)]})
R=df['u','M',1];L=df['u','M',-1];print('mu banks RL',R,L,'alphaedges',edges)
paths=[]
def dfs(f,seen,steps,k):
 if f==R:
  if k==0:paths.append(steps)
  return
 for e in edges:
  if e['R']==f and e['L'] not in seen:dfs(e['L'],seen|{e['L']},steps+[(e['name'],1)],k+e['k'])
  if e['L']==f and e['R'] not in seen:dfs(e['R'],seen|{e['R']},steps+[(e['name'],-1)],k-e['k'])
dfs(L,{L},[],F(0));print('SIMPLE ZERO LONGITUDES',paths)
# Build the first simple zero-framed embedded longitude by disjoint face chords.
from copy import deepcopy
cc=deepcopy(c);ssg=sg.copy();path=paths[0];lp=['Q'];ssg['Q']=1;cc['M'].append('Q')
for j,(ed,sgn) in enumerate(path):
 v,vnext,aa=ed;label=f'l{j}';cc[aa].insert(cc[aa].index(v)+1,label);ssg[label]=sgn;lp.append(label)
cc['L']=lp
print('full L g/f',ribbon(cc,ssg)[0],len(ribbon(cc,ssg)[1]));print('full L',cc,ssg)
removed=set(cc['M']);cl={k:[v for v in vs if v not in removed] for k,vs in cc.items() if k!='M'};sl={v:t for v,t in ssg.items() if v not in removed};gl,lf=ribbon(cl,sl);print('LONGITUDE',gl,len(lf),cl,sl)
for j,f in enumerate(lf):print('F',j,len(f),f)
ls=[]
def recc(i,used,sel):
 if i==4:ls.append(sel);return
 for v in cl[As[i]]:
  b=next(k for k in ['B1','B2','B3','L'] if v in cl[k])
  if b not in used:recc(i+1,used|{b},sel+[v])
recc(0,set(),[]);print('longitude matchings',len(ls),ls)
# Exact longitude domain equations; exploratory, not an analytic count.
li=defaultdict(list)
for k,vs in cl.items():
 for v in vs:li[v].append(k)
ldf={d:i for i,f in enumerate(lf) for d in f};lv=list(li);rr=[]
for v in lv:
 aa,bb=li[v];ds=[(v,aa,1),(v,bb,sl[v]),(v,aa,-1),(v,bb,-sl[v])];r=[0]*len(lf)
 for j,d in enumerate(ds):r[ldf[d]]+=(-1)**j
 rr.append(r)
W=ldf['l3','L',1];Z=ldf['l0','L',-1];print('long WZ',W,Z)
lM=rr+[[int(k==W) for k in range(8)],[int(k==Z) for k in range(8)]]
posit=[]
for i,x in enumerate(ls):
 for j,y in enumerate(ls):
  if i==j:continue
  D=solve(lM,[int(v in y)-int(v in x) for v in lv]+[0,0],8)
  if D is None or any(t<0 or t.denominator!=1 for t in D):continue
  def pt(v):return sum(D[ldf[v,k,dr]] for k in li[v] for dr in [1,-1])/4
  mu=sum(D[k]*(1-F(len(f),4)) for k,f in enumerate(lf))+sum(pt(v) for v in x)+sum(pt(v) for v in y)
  posit.append((i,j,D,mu))
print('POSITIVE',len(posit))
for d in posit:print(d)
# periodic vector normalized atW
rmat=[[F(x) for x in r] for r in rr+[[int(k==W) for k in range(8)]]];ii=0;pi=[]
for j in range(8):
 kk=next((k for k in range(ii,len(rmat)) if rmat[k][j]),None)
 if kk is None:continue
 rmat[ii],rmat[kk]=rmat[kk],rmat[ii];z=rmat[ii][j];rmat[ii]=[x/z for x in rmat[ii]]
 for k in range(len(rmat)):
  if k!=ii and rmat[k][j]:
   z=rmat[k][j];rmat[k]=[x-z*y for x,y in zip(rmat[k],rmat[ii])]
 pi.append(j);ii+=1
print('periodrank',ii)
for f in set(range(8))-set(pi):
 vv=[F(0)]*8;vv[f]=1
 for i,j in enumerate(pi):vv[j]=-rmat[i][f]
 print('PERIOD',vv,'nz',vv[Z])

cert={'status':'AUTHOR DEVELOPMENT: actual plane-neighborhood/zero-longitude admission being written; Euler-point index values below are candidates pending actual local analytic proof','ordinary_curves':c,'ordinary_signs':sg,'ordinary_intersection_matrix':I,'exterior_meridian_linking_weights':list(map(int,wt)),'zero_longitude_embedded_dual_path':path,'full_curves_with_mu_and_lambda':cc,'full_signs':ssg,'longitude_curves':cl,'longitude_signs':sl,'longitude_faces':lf,'longitude_states':ls,'W_face':W,'Z_face':Z,'positive_zero_two_mark_domains':[{'source':i,'target':j,'domain':list(map(int,D)),'candidate_index_euler_point':str(mu)} for i,j,D,mu in posit],'periodic_normalized_vector':[int(x) for x in vv],'period_z_degree':int(vv[Z])}
Path(__file__).with_name('trefoil-longitude-development.json').write_text(json.dumps(cert,indent=2)+'\n')
