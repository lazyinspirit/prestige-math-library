import json,numpy as np,math
from spherogram import Link
j=json.load(open('/tmp/conway109/L-all-digitized.json'));paths={int(k):np.array(v,float) for k,v in j['paths'].items()};ends={int(k):v for k,v in j['endpoints'].items()};adj={};boxrecords=[]
left=[(3,0),(5,0),(8,0)];right=[(4,0),(6,0),(7,0)];order=list(range(3));vtx=[[] for _ in range(3)];word=[-1,-2]*3
Lx=max(ends[c][k][0] for c,k in left)+1;Rx=min(ends[c][k][0] for c,k in right)-1
for i in range(3):vtx[i].append(np.array(ends[left[i][0]][left[i][1]],float)+[1,0])
for step,w in enumerate(word):
 x0=Lx+(Rx-Lx)*step/6;x1=Lx+(Rx-Lx)*(step+1)/6
 ys0=[ends[left[k][0]][left[k][1]][1]*(1-step/6)+ends[right[k][0]][right[k][1]][1]*step/6 for k in range(3)]
 ys1=[ends[left[k][0]][left[k][1]][1]*(1-(step+1)/6)+ends[right[k][0]][right[k][1]][1]*(step+1)/6 for k in range(3)]
 a=abs(w)-1;b=a+1;i,h=order[a],order[b];overvec=np.array([x1-x0,ys1[a]-ys0[b]])
 boxrecords.append((np.array([(x0+x1)/2,(ys0[a]+ys0[b]+ys1[a]+ys1[b])/4]),0,0,overvec))
 order[a],order[b]=order[b],order[a]
 for k,i in enumerate(order):vtx[i].append(np.array([x1,ys1[k]]))
for i,p in enumerate(vtx):
 c=1001+i;paths[c]=np.array(p);ends[c]=[p[0].tolist(),p[-1].tolist()];j['pairs'] += [[list(left[i]),[c,0]],[list(right[i]),[c,1]]]
for a,b in j['pairs']:adj[tuple(a)]=tuple(b);adj[tuple(b)]=tuple(a)
curves=[];seen=set();pathcomps={};loc={}
for st in paths:
 if st in seen:continue
 p=st;d=0;pts=[]
 while p not in seen:
  seen.add(p);pathcomps[p]=len(curves);v=paths[p] if d==0 else paths[p][::-1];loc[(p,d)]=len(pts);pts.extend(v.tolist());p,d=adj[(p,1-d)]
 pts.append(pts[0]);curves.append(np.array(pts))
G,B,R=curves
# Locate source orange-interrupted green segments on its cyclic polyline.
def closest(poly,x):
 best=None
 for i,(a,b) in enumerate(zip(poly[:-1],poly[1:])):
  v=b-a;s=np.clip(np.dot(x-a,v)/np.dot(v,v),0,1);p=a+s*v;dist=np.linalg.norm(p-x)
  if best is None or dist<best[0]:best=(dist,i+s,p)
 return best
centers=[]
for cc,yy in [(9,1703.27),(10,1713.27)]:
 hits=[]
 for a,b in zip(paths[cc][:-1],paths[cc][1:]):
  if min(a[1],b[1])<yy<max(a[1],b[1]):hits.append(a+(yy-a[1])/(b[1]-a[1])*(b-a))
 assert len(hits)==1;centers.append(hits[0])

def at(poly,t):
 i=int(t);return poly[i]+(t-i)*(poly[i+1]-poly[i])
def interval(poly,u,v):
 return np.vstack((at(poly,u),poly[math.floor(u)+1:math.ceil(v)],at(poly,v)))
def cutat(poly,t,width=.08):
 i=int(t);v=poly[i+1]-poly[i];dt=width/np.linalg.norm(v);u=t-dt;w=t+dt;assert int(u)==int(w)
 return u,w,np.vstack((at(poly,w),poly[math.floor(w)+1:-1],poly[:-1][:math.floor(u)+1],at(poly,u)))
def offset(poly,delta):
 r=poly[:-1];v=np.roll(r,-1,axis=0)-np.roll(r,1,axis=0);n=np.column_stack((-v[:,1],v[:,0]));n/=np.linalg.norm(n,axis=1)[:,None];r=r+delta*n;return np.vstack((r,r[0]))
def bandedges(core,a,b,c,d):
 # a,b are the two green cut ends; c,d are copy cut complement ends.
 v0=core[1]-core[0];v1=core[-1]-core[-2];side0=np.linalg.det(np.array([v0,a-core[0]]));side1=np.linalg.det(np.array([v1,c-core[-1]]));
 if side0*side1<0:c,d=d,c;rev=True
 else:rev=False
 v=core[2:]-core[:-2];n=np.column_stack((-v[:,1],v[:,0]));n/=np.linalg.norm(n,axis=1)[:,None];sgn=1 if side0>0 else -1
 edge1=np.vstack((a,core[1:-1]+sgn*.08*n,c));edge2=np.vstack((d,core[1:-1][::-1]-sgn*.08*n[::-1],b));return edge1,edge2,rev
insert=[]
for k,x in enumerate(centers):
 dist,t,x=closest(G,x);assert dist<1
 u,v,_=cutat(G,t);P=offset(B,(2-k)*0.4);qdist,qt,q=closest(P,np.array([330.,1703.27+10*(1-k)]));_,_,pc=cutat(P,qt)
 core=np.vstack((x,(x+q)/2,q))
 a,b=at(G,u),at(G,v);e1,e2,rev=bandedges(core,a,b,pc[0],pc[-1]);
 if rev:pc=pc[::-1]
 insert.append((u,v,k,e1,pc,e2));print('cut',k,u,v,qt,rev)
insert.sort();pp=[];tt=[];previous=0.
for u,v,k,e1,pc,e2 in insert:
 seg=interval(G,previous,u);pp.extend(seg[:-1]);tt.extend([0]*(len(seg)-1))
 for poly,tag in [(e1,4+k),(pc,3),(e2,4+k)]:pp.extend(poly[:-1]);tt.extend([tag]*(len(poly)-1))
 previous=v
seg=interval(G,previous,len(G)-1.-1e-12);pp.extend(seg);tt.extend([0]*(len(seg)-1));newG=np.array(pp);newG[-1]=newG[0]
assert len(tt)==len(newG)-1
orig=[]
for v in j['crossings']:orig.append((np.array(v['xy']),pathcomps[v['c']],pathcomps[j['pairs'][v['g']][0][0]],paths[v['c']][v['segment']+1]-paths[v['c']][v['segment']]))
orig+=boxrecords
cs=[newG,R,B];tags=[tt,[2]*(len(R)-1),[1]*(len(B)-1)]
exec(open('/tmp/conway109/F-band-explicit.py').read().split('def inter')[1].split('L=Link(pd)')[0].join(['def inter','']).replace("assert ta!=4 and tb!=4,('band intersect',ci,di,i,h,x)","pass").replace('oa,ob=(0 if ta==3 else ta),(0 if tb==3 else tb)','oa,ob=(1 if ta==3 else ta),(1 if tb==3 else tb)').replace("candidates=[(np.linalg.norm(x-z),o,u,ov) for z,o,u,ov in orig if {o,u}=={oa,ob}]", """if ta>=4 or tb>=4:
     if ta>=4 and tb>=4:
      assert ta!=tb,('band selfcross',ta,x)
      over=0 if ta>tb else 1
     else:over=1 if ta>=4 else 0
     idx=len(cross);cross.append((ci,i,t,di,h,s,x,over));events[ci].append((i+t,idx,0));events[di].append((h+s,idx,1));continue
    candidates=[(np.linalg.norm(x-z),o,u,ov) for z,o,u,ov in orig if {o,u}=={oa,ob}]"""))
L=Link(pd);print('SLID',len(pd),L.linking_matrix(),L.writhe());json.dump({'PD':pd,'curves':[x.tolist() for x in cs],'tags':tags},open('/home/lazyinspirit/Projects/prestige-math-library/research/inverse-problems-knot-theory-all-109-2026-10-19-owner-conway-traces-round1/k2-local-worker/L2-leftnew-1-1-swapends-pd.json','w'))
