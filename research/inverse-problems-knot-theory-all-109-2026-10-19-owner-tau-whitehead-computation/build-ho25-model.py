"""Exact development model; no knot admission or analytic count is assumed.

The torus is R^2/(25Z x 16Z). In u=x-y,v=x+y the eight caps
alternate round W and Z translates. Triangular caps give finite rational
geometry; later smoothing is supported in disjoint mark-free corner disks.
"""
from fractions import Fraction as F
import json
from pathlib import Path

BASE=Path(__file__).parent
def xy(u,v):return (F(u+v)/2,F(v-u)/2)
def uv(p):return (p[0]-p[1],p[0]+p[1])
caps=[(F(5,2),F(-25,2),F(5,2),-1,0,5),
      (F(9,2),F(153,2),F(1,2),1,5,4),
      (F(5,2),F(-25,2),F(3,2),-1,4,1),
      (F(9,2),F(153,2),F(7,2),1,1,8),
      (F(23,2),F(57,2),F(7,2),-1,8,15),
      (F(27,2),F(235,2),F(3,2),1,15,12),
      (F(23,2),F(57,2),F(1,2),-1,12,11),
      (F(27,2),F(235,2),F(5,2),1,11,16)]
P=[(F(0),F(0))]
for u,v,r,side,inc,out in caps:
 P += [xy(F(inc),v),xy(u,v+side*r),xy(F(out),v)]
P += [(F(0),F(-16))]
def cross(a,b):return a[0]*b[1]-a[1]*b[0]
def sub(a,b):return (a[0]-b[0],a[1]-b[1])
def intersection(a,b,c,d):
 v,w=sub(b,a),sub(d,c);den=cross(v,w)
 if den:
  t,s=cross(sub(c,a),w)/den,cross(sub(c,a),v)/den
  return ('point',(a[0]+t*v[0],a[1]+t*v[1])) if 0<=t<=1 and 0<=s<=1 else None
 if cross(sub(c,a),v):return None
 axis=0 if v[0] else 1
 lo,hi=max(min(a[axis],b[axis]),min(c[axis],d[axis])),min(max(a[axis],b[axis]),max(c[axis],d[axis]))
 if lo>hi:return None
 if lo<hi:return ('overlap',(lo,hi))
 t=(lo-a[axis])/v[axis]
 return ('point',(a[0]+t*v[0],a[1]+t*v[1]))

bad=[];contacts=0;tests=0
# Bounding boxes imply that |m|>=4 or |n|>=6 cannot meet this period.
for m in range(-3,4):
 for n in range(-5,6):
  Q=[(x+25*m,y+16*n) for x,y in P]
  for i,(a,b) in enumerate(zip(P,P[1:])):
   for j,(c,d) in enumerate(zip(Q,Q[1:])):
    if m==n==0 and j<=i:continue
    tests+=1;z=intersection(a,b,c,d)
    if z is None:continue
    contacts+=1
    adjacent=(m==n==0 and abs(i-j)==1)
    seam=(m==0 and ((n==1 and i==0 and j==len(P)-2) or (n==-1 and i==len(P)-2 and j==0)))
    if not (z[0]=='point' and (adjacent or seam)):bad.append((m,n,i,j,z))
print('period vertices',len(P),'translated segment tests',tests,'contacts',contacts,'bad',len(bad))
for z in bad[:20]:print(z)

# All intersections with all horizontal beta lifts during this alpha period.
hits=[]
for i,(a,b) in enumerate(zip(P,P[1:])):
 if a[1]==b[1]:continue
 for k in range(-4,5):
  y=F(16*k);t=(y-a[1])/(b[1]-a[1])
  if 0<=t<1:
   x=a[0]+t*(b[0]-a[0]);hits.append((F(i)+t,x,y,1 if b[1]>a[1] else -1))
hits.sort()
X=[0,1,4,5,16,17,20,21,24,27,28,31,32,33,36,37,40,43,44,47,48,59,60,63,64]
labels={F(x)%25:i+1 for i,x in enumerate(X)}
print('beta hits',len(hits),[(labels[x%25],str(x),str(y),sgn) for _,x,y,sgn in hits])

# Follow enough consecutive periods to contain every crossing with beta_0.
Q=[]
for n in range(4,-5,-1):
 q=[(x,y+16*n) for x,y in P]
 Q += q if not Q else q[1:]
cuts=[]
for i,(a,b) in enumerate(zip(Q,Q[1:])):
 if a[1]==b[1]:continue
 t=-a[1]/(b[1]-a[1])
 if 0<=t<1:cuts.append((F(i)+t,(a[0]+t*(b[0]-a[0]),F(0))))
cuts.sort()
assert len(cuts)==25
assert sorted(p[0] for _,p in cuts)==list(map(F,X))
def turn(poly):
 vs=[sub(b,a) for a,b in zip(poly,poly[1:]+poly[:1])]
 ans=0
 for a,b in zip(vs,vs[1:]+vs[:1]):
  ax,ay=7*a[0]+a[1],7*a[1]-a[0]
  bx,by=7*b[0]+b[1],7*b[1]-b[0]
  assert ay and by
  if ay*by<0:
   t=-ay/(by-ay)
   if ax+t*(bx-ax)>0:ans += 1 if by>ay else -1
 return ans
def winding(poly,p):
 ans=0
 for a,b in zip(poly,poly[1:]+poly[:1]):
  if a[1]<=p[1]<b[1] and cross(sub(b,a),sub(p,a))>0:ans+=1
  if b[1]<=p[1]<a[1] and cross(sub(b,a),sub(p,a))<0:ans-=1
 return ans
bigons=[];nonjordan=[]
for ii,(ta,a) in enumerate(cuts):
 for jj in range(ii+1,len(cuts)):
  tb,b=cuts[jj]
  arc=[a]+Q[int(ta)+1:int(tb)+1]+[b]
  arc=[p for k,p in enumerate(arc) if not k or p!=arc[k-1]]
  for poly in [arc,arc[::-1]]:
   x,y=poly[0],poly[-1];v0=sub(poly[1],x);v1=sub(y,poly[-2]);h=sub(x,y)
   if cross(h,v0)<=0 or cross(v1,h)<=0 or turn(poly)!=1:continue
   jordan=not any(min(a[0],b[0])<c[0]<max(a[0],b[0]) for _,c in cuts[ii+1:jj])
   if not jordan:
    witness=None
    for xl,xr in zip(X,X[1:]):
     for yy in [F(1,100),F(-1,100)]:
      z=(F(xl+xr,2),yy);w=winding(poly,z)
      if w<0:witness=(z,w);break
     if witness:break
    assert witness is not None, ('positive nonJordan candidate',x,y)
    nonjordan.append({'alpha_start':X.index(int(x[0]))+1,'alpha_end':X.index(int(y[0]))+1,
     'negative_domain_witness':[str(witness[0][0]),str(witness[0][1])],'winding':witness[1]})
    continue
   counts=[]
   for base in [(F(-5),F(-15,2)),(F(31,2),F(4))]:
    count=0
    for m in range(-5,6):
     for n in range(-8,9):count+=winding(poly,(base[0]+25*m,base[1]+16*n))
    counts.append(count)
   # Physical plane has orientation dx^dy; the actual Heegaard surface
   # has boundary orientation -dx^dy and j=-i. Reflecting t -> 1-t
   # gives lower beta / upper alpha with ordinary holomorphic equation.
   # Thus alpha runs from target to source on this positive polygon.
   src,dst=X.index(int(y[0]))+1,X.index(int(x[0]))+1
   bigons.append({'source':src,'target':dst,'n_w':counts[0],'n_z':counts[1],
                  'polygon':[[str(px),str(py)] for px,py in poly]})
expected=[(4,1,1,0),(2,1,0,1),(3,4,0,1),(4,5,2,1),(3,2,1,0),(2,5,1,2)]
for r in [6,10,14,18]:expected += [(r,r-1,0,1),(r,r+3,0,1),(r+1,r,1,0),(r+1,r+2,0,1),(r+2,r-1,1,0),(r+2,r+3,1,0)]
expected += [(24,21,2,1),(22,21,1,2),(23,24,0,1),(24,25,1,0),(23,22,1,0),(22,25,0,1)]
assert len(bigons)==36 and len(nonjordan)==60
assert sorted((b['source'],b['target'],b['n_w'],b['n_z']) for b in bigons)==sorted(expected)
print('index1 embedded',len(bigons),'excluded nonJordan index1 candidates',len(nonjordan))
print('arrows',[(b['source'],b['target'],b['n_w'],b['n_z']) for b in bigons])
result={'status':'DEVELOPMENT: finite geometry verified; mathematical scalar count/admission proof in preparation',
 'surface_orientation':'-dx wedge dy = boundary orientation of {|z2| <= |z1|}',
 'integrable_structure':'j=-i in x+iy; t-reflection gives lower beta / upper alpha and j=i',
 'lattice':[25,16],'W':['-5','-15/2'],'Z':['31/2','4'],
 'period_vertices':[[str(x),str(y)] for x,y in P],
 'translated_segment_tests':tests,'bad_intersections':str(bad),
 'beta_hits':[[str(t),str(x),str(y),sgn] for t,x,y,sgn in hits],
 'alpha_cyclic_order':[labels[x%25] for _,x,_,_ in hits],
 'bigon_domains':bigons,'nonJordan_index_one_candidates':nonjordan}

# Short, literal bridge shadow; no path-search output is an assumption.
scale=36
short_bridge=[(720,306),(721,308),(883,470),(892,470),(901,479),(901,488),
 (1783,1370),(1792,1370),(1801,1379),(1801,1388),(2314,1901),(2386,1901),
 (2386,1838),(1801,1253),(1801,1244),(793,236),(505,236),(-1115,-1384),
 (-1115,-1456),(-1052,-1456),(-926,-1330),(-908,-1330),(-899,-1321),
 (-899,-1312),(-17,-430),(-8,-430),(1,-421),(1,-412),(559,146),(558,144)]
G=[tuple(map(F,p)) for p in short_bridge]
AP=[(36*x,36*y) for x,y in P]
def translated(g,m,n):return [(x+900*m,y+576*n) for x,y in g]
self_tests=0
for m in range(-5,6):
 for n in range(-7,8):
  T=translated(G,m,n)
  for i,(a,b) in enumerate(zip(G,G[1:])):
   for j,(c,d) in enumerate(zip(T,T[1:])):
    if m==n==0 and j<=i:continue
    self_tests+=1;h=intersection(a,b,c,d)
    assert h is None or (m==n==0 and j==i+1 and h==('point',b)),(m,n,i,j,h)
alpha_tests=0
for m in range(-8,9):
 for n in range(-10,11):
  T=translated(AP,m,n)
  for i,(a,b) in enumerate(zip(G,G[1:])):
   for j,(c,d) in enumerate(zip(T,T[1:])):
    alpha_tests+=1;assert intersection(a,b,c,d) is None,(m,n,i,j)
crossings=[];endpoint_contacts=[]
for m in range(-5,6):
 for n in range(-7,8):
  c,d=translated([G[0],G[-1]],m,n)
  for i,(a,b) in enumerate(zip(G,G[1:])):
   h=intersection(a,b,c,d)
   if h is None:continue
   assert h[0]=='point'
   if h[1] in [G[0],G[-1]]:
    assert m==n==0;endpoint_contacts.append(h[1]);continue
   de=cross(sub(b,a),sub(d,c));assert de
   crossings.append({'path_segment':i,'point':list(map(str,h[1])),
    'delta_translate':[m,n],'oriented_determinant_sign':1 if de>0 else -1})
crossings.sort(key=lambda x:x['path_segment'])
assert len(endpoint_contacts)==2
# Under-strand is delta traversed Z -> W; its visits must be A,B,C.
delta_parameters=[]
for b in crossings:
 m,n=b['delta_translate'];x=F(b['point'][0])-900*m
 delta_parameters.append((x-G[0][0])/(G[-1][0]-G[0][0]))
assert delta_parameters==sorted(delta_parameters,reverse=True)
assert [(x['point'],x['delta_translate'],x['oriented_determinant_sign']) for x in crossings]==[
 (['2386','1900'],[2,3],-1),(['650','236'],[0,0],1),(['-1114','-1456'],[-2,-3],-1)]
print('short bridge vertices',len(G),'self tests',self_tests,'alpha tests',alpha_tests,'crossings',crossings)
result['bridge_development']={'scale':36,'short_bridge':short_bridge,
 'delta':[short_bridge[0],short_bridge[-1]],'crossings':crossings,'end_deck':[0,0],
 'self_intersection_tests':self_tests,'alpha_intersection_tests':alpha_tests}
def ribbon_faces(word, signs, increments=None):
 edge={};rot={};deck={}
 increments=increments or [(0,0)]*len(word)
 for a,b,d in zip(word,word[1:]+word[:1],increments):
  edge[a+(1,)]=b+(-1,);edge[b+(-1,)]=a+(1,)
  deck[a+(1,)]=d;deck[b+(-1,)]=tuple(-v for v in d)
 for k,sgn in signs.items():
  r=[(k,'o',1),(k,'u',sgn),(k,'o',-1),(k,'u',-sgn)]
  for a,b in zip(r,r[1:]+r[:1]):rot[a]=b
 seen=set();faces=[]
 for h in edge:
  if h in seen:continue
  face=[];a=h;d=[0,0]
  while a not in seen:
   seen.add(a);face.append(a);d=[d[i]+deck[a][i] for i in range(2)];a=rot[edge[a]]
  assert a==h
  faces.append({'darts':face,'deck':d})
 return faces
word=[(1,'o'),(2,'o'),(3,'o'),(1,'u'),(2,'u'),(3,'u')]
increments=[(-2,-3),(-2,-3),(2,3),(0,0),(0,0),(2,3)]
faces=ribbon_faces(word,{1:1,2:-1,3:1},increments)
assert sorted(f['deck'] for f in faces)==[[-2,-3],[0,0],[0,0],[0,0],[2,3]]
base_word=[(1,'u'),(2,'o'),(2,'u'),(1,'o')]
ri_word=[(1,'u'),(3,'u'),(3,'o'),(2,'o'),(2,'u'),(1,'o')]
riii_word=[(3,'u'),(1,'u'),(2,'o'),(3,'o'),(1,'o'),(2,'u')]
relabel={2:1,3:2,1:3}
assert [(relabel[k],v) for k,v in (riii_word[2:]+riii_word[:2])]==word
result['annular_admission_certificate']={
 'oriented_knot_word':word,'signs':{'1':1,'2':-1,'3':1},
 'edge_deck_increments':increments,'ribbon_faces':faces,
 'positive_clasp_word':base_word,'positive_clasp_faces':ribbon_faces(base_word,{1:1,2:1}),
 'negative_RI_word':ri_word,'negative_RI_faces':ribbon_faces(ri_word,{1:1,2:1,3:-1}),
 'RIII_adjacent_pairs':[[[1,'u'],[3,'u']],[[3,'o'],[2,'o']],[[2,'u'],[1,'o']]],
 'RIII_result':riii_word,'rotation_start':2,'relabel_old_to_new':relabel,
 'rim_transport_exterior_arcs':[
  {'before':[[2,'o'],[2,'u']],'after':[[3,'o'],[1,'o']],'new_dart':[2,'o',1]},
  {'before':[[1,'o'],[1,'u']],'after':[[2,'u'],[3,'u']],'new_dart':[1,'u',1]}]}
(BASE/'ho25-model-development.json').write_text(json.dumps(result,indent=2)+'\n')
