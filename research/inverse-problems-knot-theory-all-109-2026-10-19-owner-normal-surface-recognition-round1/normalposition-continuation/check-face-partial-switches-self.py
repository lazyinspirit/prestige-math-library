import random,itertools,collections,json
random.seed(21)
verts=[(0.,0.),(1.,0.),(0.,1.)]; edges=[(0,1),(0,2),(1,2)]
def point(e,s):
 a,b=map(lambda i:verts[i],edges[e]);return (a[0]*(1-s)+b[0]*s,a[1]*(1-s)+b[1]*s)
def cross(p,q,r,s):
 ax,ay=q[0]-p[0],q[1]-p[1];bx,by=s[0]-r[0],s[1]-r[1];det=ax*by-ay*bx
 if abs(det)<1e-10:return None
 cx,cy=r[0]-p[0],r[1]-p[1];t=(cx*by-cy*bx)/det;u=(cx*ay-cy*ax)/det
 return (t,u) if 1e-9<t<1-1e-9 and 1e-9<u<1-1e-9 else None
def fam():
 # one arc of each corner type: endpoints corner0 on edges01,02; corner1 on01,12; corner2 on02,12
 ends=[]
 for e in range(3):ends.append(sorted([random.random(),random.random()]))
 # indices0 AB,1 AC,2 BC
 return [(0,1,ends[0][0],ends[1][0]),(0,2,ends[0][1],ends[2][0]),(1,2,ends[1][1],ends[2][1])]
for trial in range(1000):
 fs=[fam(),fam()]; arcs=[]
 for col,F in enumerate(fs):
  for e,f,s,t in F:arcs.append({'col':col,'ends':(e,f),'p':point(e,s),'q':point(f,t)})
 nodes=[]; along=[[(0,('e',i,0)),(1,('e',i,1))] for i in range(6)]
 for i in range(3):
  for j in range(3,6):
   z=cross(arcs[i]['p'],arcs[i]['q'],arcs[j]['p'],arcs[j]['q'])
   if z:
    k=len(nodes);nodes.append((i,j));along[i].append((z[0],('x',k)));along[j].append((z[1],('x',k)))
 adjacency={}; ports={}
 for i,alist in enumerate(along):
  alist.sort()
  for k in range(len(alist)-1):
   a=alist[k][1];b=alist[k+1][1];pa=(a,i,1);pb=(b,i,0);adjacency[pa]=pb;adjacency[pb]=pa
  for pos,n in alist:
   if n[0]=='x':ports[(n,i)]=[(n,i,0),(n,i,1)]
 endpointports=[p for p in adjacency if p[0][0]=='e']
 origtypes=collections.Counter(tuple(sorted(a['ends'])) for a in arcs)
 reg=[]
 for k,(i,j) in enumerate(nodes):
  ei=arcs[i]['ends'];ej=arcs[j]['ends'];opts=[]
  for same in (0,1):
   pp=[((('x',k),i,a),(('x',k),j,a^same)) for a in (0,1)]
   types=collections.Counter(tuple(sorted((ei[a],ej[a^same]))) for a in (0,1))
   if types==collections.Counter([tuple(sorted(ei)),tuple(sorted(ej))]):opts.append(pp)
  assert len(opts)==1
  reg.append(opts[0])
 for mask in range(1<<len(nodes)):
  conn={}
  for k,(i,j) in enumerate(nodes):
   pairs=reg[k] if mask>>k&1 else [((('x',k),i,0),(('x',k),i,1)),((('x',k),j,0),(('x',k),j,1))]
   for a,b in pairs:conn[a]=b;conn[b]=a
  seen=set();types=[]; components={};component_id=0
  for p in endpointports:
   if p in seen:continue
   start=p;seen.add(p);component_id+=1;components[p]=component_id
   while True:
    q=adjacency[p];seen.add(q);components[q]=component_id
    if q[0][0]=='e':break
    p=conn[q];seen.add(p);components[p]=component_id
   types.append(tuple(sorted((arcs[start[0][1]]['ends'][start[0][2]],arcs[q[0][1]]['ends'][q[0][2]]))))
  badself=[k for k,(i,j) in enumerate(nodes) if not(mask>>k&1) and components[(('x',k),i,0)]==components[(('x',k),j,0)]]
  if badself:
   print('SELF',trial,mask,badself);raise SystemExit(2)
  if len(seen)!=len(adjacency) or collections.Counter(types)!=origtypes:
   print('FAIL',trial,len(nodes),mask,'loops',len(adjacency)-len(seen),'types',types,'orig',origtypes);print(json.dumps(arcs));raise SystemExit(1)
print('PASS 1000 arrangements, all subsets of their regular switches retain exactly the original normal arc types and no circle components')
