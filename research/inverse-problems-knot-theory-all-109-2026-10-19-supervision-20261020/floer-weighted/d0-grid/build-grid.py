"""Construct a rectangular representative of the admitted D0 PD; no Floer counts."""
import json,runpy,random,sys
from pathlib import Path
sys.path.insert(0,'/tmp/whitehead-grid-packages')
from spherogram import Link
from spherogram.links.orthogonal import OrthogonalLinkDiagram
BASE=Path(__file__).resolve().parent
SRC=Path('research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-geometric-admissions/whitehead-cable-clasp-code.py')
D=runpy.run_path(str(SRC))['compute'](0)
O=OrthogonalLinkDiagram(Link(D['PD_edge_quadruples']))
emb=O.orthogonal_rep().basic_grid_embedding()
A,C=O.break_into_arrows()
def rot(p):return (-100*p[1],100*p[0])
E={v:rot(p) for v,p in emb.items()}
wrong=set();crossings=[]
for u,v,_,label in C:
 a=A[v];p,q=E[a[0].crossing],E[a[-1].crossing]
 horiz=p[1]==q[1]
 if horiz:wrong.add(label)
 crossings.append({'label':label,'center':E[a[next(i for i,b in enumerate(a) if b.crossing.label==label)].crossing], 'under_arrow':u,'over_arrow':v,'rotated':horiz})
# Each wrong crossing is replaced in its disjoint 20x20 box by explicit paths.
# They have exactly one mutual crossing, vertical over, at center+(2,2).
points=[];arrow_records=[]
for ai,a in enumerate(A):
 p=E[a[0].crossing];q=E[a[-1].crossing];seq=[p];is_h=p[1]==q[1]
 for ce in a[1:-1]:
  if ce.crossing.label not in wrong:continue
  x,y=E[ce.crossing]
  if is_h:
   local=[(-10,0),(2,0),(2,4),(10,4),(10,0)]
   if q[0]<p[0]:local.reverse()
  else:
   local=[(0,-10),(4,-10),(4,2),(0,2),(0,10)]
   if q[1]<p[1]:local.reverse()
  seq += [(x+dx,y+dy) for dx,dy in local]
 seq.append(q);arrow_records.append({'arrow':ai,'points':seq,'crossings':[(ce.crossing.label,ce.is_over_crossing()) for ce in a[1:-1]]})
 points+=seq[:-1]
# Remove every collinear subdivision, cyclically.
changed=True
while changed:
 changed=False
 for i,b in enumerate(points):
  a,c=points[i-1],points[(i+1)%len(points)]
  if a[0]==b[0]==c[0] or a[1]==b[1]==c[1]:points.pop(i);changed=True;break
assert len(points)%2==0
segs=[(points[i],points[(i+1)%len(points)]) for i in range(len(points))]
H=[i for i,(p,q) in enumerate(segs) if p[1]==q[1]];V=[i for i,(p,q) in enumerate(segs) if p[0]==q[0]]
assert len(H)==len(V)
# Lexicographic small perturbation of equal levels. Each old distinct level
# differs by at least two. Moving each by <1/100 preserves every incidence.
yorder=sorted(H,key=lambda i:(segs[i][0][1],i));xorder=sorted(V,key=lambda i:(segs[i][0][0],i));yr={v:i for i,v in enumerate(yorder)};xr={v:i for i,v in enumerate(xorder)}
n=len(H);Os=[None]*n;Xs=[None]*n
for i in H:
 assert (i-1)%len(segs) in V and (i+1)%len(segs) in V
 Os[yr[i]]=xr[(i-1)%len(segs)];Xs[yr[i]]=xr[(i+1)%len(segs)]
assert sorted(Os)==sorted(Xs)==list(range(n)) and all(a!=b for a,b in zip(Os,Xs))
certificate={'source_script':str(SRC),'source_parameter':0,'PD':D['PD_edge_quadruples'],'source_signs':D['crossing_signs'],'orthogonal_embedding':{str(v.label):E[v] for v in E if v.label is not None},'orthogonal_arrows':arrow_records,'crossing_correspondence':crossings,'rectangular_vertices':points,'horizontal_order':yorder,'vertical_order':xorder,'grid':{'O':Os,'X':Xs,'n':n},'framing':'Inherited from admitted t=0 braid/pattern certificate; no framing inferred from grid writhe.'}
(BASE/'initial-grid-certificate.json').write_text(json.dumps(certificate,indent=2)+'\n')
print('initial n',n, 'wrong crossings',len(wrong));print(Os);print(Xs)
