import json
from pathlib import Path
import importlib.util
p=Path('research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-geometric-admissions/whitehead-cable-clasp-code.py')
sp=importlib.util.spec_from_file_location('w',p);w=importlib.util.module_from_spec(sp);sp.loader.exec_module(w)
def make(t):
 # Same admitted cable/clasp construction; keep compensation -6 separately.
 w.parent={};w.edges=[];w.cross={}
 word=[1]*(2*t)+[-1]*6+[2,1,3,2]*3
 nxt=w.braid(word,'M',4,1);w.braid([-1,-1],'C',2,nxt)
 for i in [3,4]:w.wire(f'MB{i}',f'MT{i}')
 for a,b in [('CT1','MT1'),('CT2','MB1'),('CB1','MT2'),('CB2','MB2')]:w.wire(a,b)
 comps={}
 for j in w.cross:
  for p in w.ports:comps.setdefault(w.root(f'{j}:{p}'),[]).append((j,p))
 alpha={}
 for a,b in comps.values():alpha[a]=b;alpha[b]=a
 start=next(p for p in comps[w.root('MT1')] if p[1] in ['IL','IR']);inc=set();x=start
 while x not in inc:inc.add(x);x=alpha[x[0],w.op[x[1]]]
 assert len(inc)==len(w.cross)*2
 ov=lambda d:d[1] in (['IR','OL'] if w.cross[d[0]]['letter']>0 else ['IL','OR'])
 return alpha,inc,{d:ov(d) for d in alpha}
def faces(a):
 seen=set();fs=[]
 for d in a:
  if d in seen:continue
  f=[];x=d
  while x not in seen:
   seen.add(x);f.append(x);x=a[x[0],w.ports[(w.ports.index(x[1])+1)%4]]
  fs.append(f)
 return fs
def remove(a,vs,turn):
 # turn pairs ports INSIDE the removed vertices.
 out={d:e for d,e in a.items() if d[0] not in vs and e[0] not in vs}
 for d in a:
  if d[0] in vs or a[d][0] not in vs:continue
  x=a[d]
  while True:
   x=a[turn[x]]
   if x[0] not in vs:break
  out[d]=x
 return out
def components(a,inc):
 live=inc & set(a);seen=set();result=[]
 assert all((d in live)!=(e in live) for d,e in a.items())
 for d in sorted(live):
  if d in seen:continue
  cc=[];x=d
  while x not in seen:
   seen.add(x);cc.append(x);x=a[x[0],w.op[x[1]]]
  assert x==d;result.append(cc)
 return result
def sign(j,inc,ov):
 over=next(d for d in inc if d[0]==j and ov[d]);under=next(d for d in inc if d[0]==j and not ov[d])
 return (1 if w.cross[j]['letter']>0 else -1)*(1 if over[1] in ['IL','IR'] else -1)*(1 if under[1] in ['IL','IR'] else -1)
cert=[]
for t in range(1,7):
 a,inc,ov=make(t);assert len(components(a,inc))==1;assert sign(1,inc,ov)==-1;j=1;ins=[d for d in inc if d[0]==j];u,v=ins
 a=remove(a,{j},{u:(j,w.op[v[1]]),(j,w.op[v[1]]):u,v:(j,w.op[u[1]]),(j,w.op[u[1]]):v});moves=[];assert len(components(a,inc))==2
 while True:
  found=None
  for f in faces(a):
   vs=set(d[0] for d in f)
   if len(f)==1:found=('RI',f,vs);break
   if len(f)==2 and len(vs)==2:
    # boundary edges are rotation(d) -> next-face dart.
    es=[((d[0],w.ports[(w.ports.index(d[1])+1)%4]),a[d[0],w.ports[(w.ports.index(d[1])+1)%4]]) for d in f]
    if all(ov[x]==ov[y] for x,y in es):found=('RII',f,vs);break
  if found is None:break
  typ,f,vs=found;turn={(j,p):(j,w.op[p]) for j in vs for p in w.ports};a=remove(a,vs,turn);assert len(components(a,inc))==2;moves.append({'type':typ,'vertices':sorted(vs),'face':f})
 left=sorted(set(d[0] for d in a));assert left==[2*t+19,2*t+20]
 assert all(sign(j,inc,ov)==1 for j in left)
 cs=components(a,inc);assert len(cs)==2 and all(len(cc)==2 for cc in cs)
 assert all(len(f)==2 for f in faces(a)) and len(faces(a))==4
 cert.append({'t':t,'word':[1]*(2*t)+[-1]*6+[2,1,3,2]*3,'clasp':[-1,-1],'smoothed_crossing':1,'smoothed_oriented_sign':-1,'moves':moves,'final_crossings':left,'final_component_visits':cs,'final_faces':faces(a),'final_crossing_signs':[1,1]})
 print('PASS t',t,len(moves),'literal empty-face moves; two components; exactly two positive intercomponent crossings')
Path(__file__).with_name('six-whitehead-resolution-movies.json').write_text(json.dumps({'port_rotation_clockwise':w.ports,'models':cert},indent=2)+'\n')
