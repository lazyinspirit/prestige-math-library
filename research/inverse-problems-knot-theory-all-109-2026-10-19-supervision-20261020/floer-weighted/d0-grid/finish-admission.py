import json,runpy
from pathlib import Path
B=Path(__file__).resolve().parent
D=json.load(open(B/'initial-grid-certificate.json'));G=D['grid'];O=G['O'];X=G['X']
OBS=json.load(open(B/'initial-coordinate-observation.json'));word=OBS['actual_grid_signed_gauss']
src=runpy.run_path(D['source_script'])['compute'](0)['signed_visit_word']
negative_reverse=[-v for v in reversed(src)]
assert any(word==negative_reverse[i:]+negative_reverse[:i] for i in range(len(src)))
print('Pending Gauss suffix: exact negative-reverse correspondence, viewing rotation and reversed component orientation')
# Verify that every simplification is its declared permitted grid move.
F=B/'small-grid-certificate.json'
if F.exists():
 T=json.load(open(F));o=O[:];x=X[:]
 for m in T['moves']:
  n=len(o);k=m[0]
  if k in ['rows','columns']:
   i=m[1]
   if k=='rows':a=[o[i],x[i]];b=[o[i+1],x[i+1]]
   else:a=[o.index(i),x.index(i)];b=[o.index(i+1),x.index(i+1)]
   if len(set(a+b))==4:
    lo,hi=sorted(a);assert (lo<b[0]<hi)==(lo<b[1]<hi)
   if k=='rows':o[i],o[i+1]=o[i+1],o[i];x[i],x[i+1]=x[i+1],x[i]
   else:o=[i+1 if q==i else i if q==i+1 else q for q in o];x=[i+1 if q==i else i if q==i+1 else q for q in x]
  elif k=='cut_rows':o=o[1:]+o[:1];x=x[1:]+x[:1]
  elif k=='cut_columns':o=[(q+1)%n for q in o];x=[(q+1)%n for q in x]
  else:
   r,c,rr,cc=m[1:];marks=[(a,p[a],t) for a in [r,r+1] for t,p in enumerate([o,x]) if p[a] in [c,c+1]]
   assert len(marks)==3 and sum(a==rr for a,b,t in marks)==2 and sum(b==cc for a,b,t in marks)==2
   common=next(t for a,b,t in marks if (a,b)==(rr,cc));other_r=2*r+1-rr;other_c=2*c+1-cc
   assert all(t!=common for a,b,t in marks if (a,b)!=(rr,cc))
   [o,x][1-common][other_r]=other_c;o.pop(rr);x.pop(rr)
   o=[q-(q>cc) for q in o];x=[q-(q>cc) for q in x]
  assert sorted(o)==sorted(x)==list(range(len(o))) and all(a!=b for a,b in zip(o,x))
 assert o==T['grid']['O'] and x==T['grid']['X']
 print('simplification: all',len(T['moves']),'moves valid; n',len(o))
report={'kind':'completed-new-D0-grid-admission-suffix','source_parameter':0,'grid_n':len(o),'moves_verified_once':len(T['moves']),'initial_coordinate_evidence':'initial-coordinate-observation.json','source_diagram':'initial-grid-certificate.json','small_grid':'small-grid-certificate.json','signed_gauss_junction':'Exact negative reverse under orientation-preserving viewing rotation R(x,y,z)=(x,-y,-z), then component reversal.','orientation_resolution':'Grid has opposite compute(0) traversal. Output orientation convention or actual reversal symmetry remains explicitly separate; see admission-proof.md.','zero_framing':'Inherited from source t=0 admission and preserved throughout isotopy; no grid-writhe framing substitution.','limits':'No Floer matrix count, source-provider review, metadata or gate claim.'}
(B/'admission-verification.json').write_text(json.dumps(report,indent=2)+'\n')
