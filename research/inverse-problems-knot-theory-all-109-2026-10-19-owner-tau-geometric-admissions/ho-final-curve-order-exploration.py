# EXPLORATION ONLY: binary PDF coordinates and proposed lattice period; not a D6 admission certificate.
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

def roots_in_unit(c):
 def ev(t):return sum(x*t**i for i,x in enumerate(c))
 cuts=[0.,1.]
 if len(c)>2:
  a=3*c[3] if len(c)>3 else 0.;b=2*c[2];d=c[1]
  if abs(a)<1e-15:
   if abs(b)>1e-15:cuts+=[-d/b]
  else:
   disc=b*b-4*a*d
   if disc>=0:cuts += [(-b+math.sqrt(disc))/(2*a),(-b-math.sqrt(disc))/(2*a)]
 cuts=sorted(set(t for t in cuts if 0<=t<=1));out=[]
 for a,b in zip(cuts,cuts[1:]):
  if abs(ev(a))<1e-10:out.append(a)
  if ev(a)*ev(b)<0:
   lo,hi=a,b
   for _ in range(80):
    mid=(lo+hi)/2
    if ev(lo)*ev(mid)<=0:hi=mid
    else:lo=mid
   out.append((lo+hi)/2)
 if abs(ev(1))<1e-10:out.append(1.)
 return out
start=next(n for n in adj if len(adj[n])==1); cur=start;used=set();trace=[]
while True:
 cs=[(n,i) for n,i in adj[cur] if i not in used]
 if not cs:break
 nex,i=cs[0];used.add(i);trace.append((i,cur==root(2*i)));cur=nex
Y=397.4540100097656
allitems=[]
for d in bs:
 for it in d['items']:
  if it[0] in ['l','c'] and math.dist(it[1],it[-1])>.01: allitems.append(it)
xs=[]
for order,(i,forward) in enumerate(trace):
 it=allitems[i];P=it[1:];
 if len(P)==2:
  ys=[P[0][1]-Y,P[1][1]-P[0][1]]
 else:ys=[P[0][1]-Y,3*(P[1][1]-P[0][1]),3*(P[2][1]-2*P[1][1]+P[0][1]),P[3][1]-3*P[2][1]+3*P[1][1]-P[0][1]]
 for t in roots_in_unit(ys):
  t=float(t)
  if len(P)==2:x=(1-t)*P[0][0]+t*P[1][0]
  else:x=(1-t)**3*P[0][0]+3*(1-t)**2*t*P[1][0]+3*(1-t)*t*t*P[2][0]+t**3*P[3][0]
  dy=sum(k*ys[k]*t**(k-1) for k in range(1,len(ys)))
  xs.append({'path_order':order+(t if forward else 1-t),'x':x,'sign':int((1 if dy>0 else -1)*(1 if forward else -1)),'drawing_index':es[i][2]})
xs.sort(key=lambda e:e['path_order']); unique=[]
for e in xs:
 if not any(abs(e['x']-f['x'])<.6 for f in unique):unique.append(e)
for k,e in enumerate(sorted(unique,key=lambda e:e['x'])):e['left_to_right_index']=k+1
print('intersections',len(unique))
print('trace',[e['left_to_right_index'] for e in unique]);print('sign',[e['sign'] for e in unique]);print('sum',sum(e['sign'] for e in unique));print([(e['left_to_right_index'],round(e['x'],3),e['drawing_index']) for e in unique])
for h in [88.0,88.47,89.0]:
 print('PROPOSED horizontal period',h,'cyclicbetaorder',[e['left_to_right_index'] for e in sorted(unique,key=lambda e:e['x']%h)])
A=[e['left_to_right_index'] for e in unique];B=[e['left_to_right_index'] for e in sorted(unique,key=lambda e:e['x']%88.47)];sgn={e['left_to_right_index']:e['sign'] for e in unique}
rot={};flip={}
for n in A:
 r=[(n,'b',1),(n,'a',1),(n,'b',-1),(n,'a',-1)] if sgn[n]>0 else [(n,'b',1),(n,'a',-1),(n,'b',-1),(n,'a',1)]
 for x,y in zip(r,r[1:]+r[:1]):rot[x]=y
for typ,seq in [('a',A),('b',B)]:
 for n,m in zip(seq,seq[1:]+seq[:1]):flip[n,typ,1]=(m,typ,-1);flip[m,typ,-1]=(n,typ,1)
seen=set();faces=[]
for d in rot:
 if d in seen:continue
 f=[];cur=d
 while cur not in seen:seen.add(cur);f.append(cur);cur=rot[flip[cur]]
 faces.append(f)
print('proposed quotient Euler',25-50+len(faces),'faces',len(faces),'lengths',sorted(map(len,faces)))
