"""Pure integer verification of the NEW grid admission and its move trace."""
import json,runpy
from pathlib import Path
B=Path(__file__).resolve().parent
D=json.load(open(B/'initial-grid-certificate.json'));G=D['grid'];P=D['rectangular_vertices'];H=D['horizontal_order'];V=D['vertical_order'];N=len(P)
seg=[(P[i],P[(i+1)%N]) for i in range(N)]
def inside(p,a,b):return min(a[0],b[0])<p[0]<max(a[0],b[0]) and a[1]==b[1]==p[1] or min(a[1],b[1])<p[1]<max(a[1],b[1]) and a[0]==b[0]==p[0]
expected={};sgn={}
for C in D['crossing_correspondence']:
 x,y=C['center'];p=(x+2,y+2) if C['rotated'] else (x,y)
 hs=[i for i in H if inside(p,*seg[i])];vs=[i for i in V if inside(p,*seg[i])]
 assert len(hs)==len(vs)==1,(C,hs,vs)
 h,v=hs[0],vs[0];r,c=H.index(h),V.index(v);expected[r,c]=C['label']+1
 dx=seg[h][1][0]-seg[h][0][0];dy=seg[v][1][1]-seg[v][0][1]
 # Standard sign is determinant(over tangent,under tangent) in xy.
 sgn[C['label']+1]=1 if dx*dy<0 else -1
O,X=G['O'],G['X'];actual={}
for r in range(G['n']):
 for c in range(G['n']):
  rv=X.index(c);ro=O.index(c)
  if min(O[r],X[r])<c<max(O[r],X[r]) and min(rv,ro)<r<max(rv,ro):actual[r,c]=expected.get((r,c))
assert set(actual)==set(expected),(len(actual),len(expected),set(actual)-set(expected))
assert len(actual)==20
assert [sgn[i+1] for i in range(20)]==D['source_signs'],(sgn,D['source_signs'])
# Directed traversal of grid segments, recording signed original crossing IDs.
row=0;word=[];seen=set()
while row not in seen:
 seen.add(row);dx=1 if X[row]>O[row] else -1
 hcross=[(c,label) for (r,c),label in actual.items() if r==row]
 word += [-label for c,label in sorted(hcross,reverse=dx<0)]
 c=X[row];nxt=O.index(c);dy=1 if nxt>row else -1
 vcross=[(r,label) for (r,cc),label in actual.items() if cc==c]
 word += [label for r,label in sorted(vcross,reverse=dy<0)]
 row=nxt
assert len(seen)==G['n'] and row==0 and len(word)==40
src=runpy.run_path(D['source_script'])['compute'](0)['signed_visit_word']
def cyclic(a,b):return any(a==b[i:]+b[:i] for i in range(len(b)))
assert cyclic(word,[-v for v in reversed(src)]),('viewing/orientation mismatch',word,src)
print('initial-grid:20crossings; all crossing signs match; oriented Gauss', 'opposite source orientation after explicit viewing rotation')
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
report={'initial_crossings':20,'actual_crossing_signs':[sgn[i+1] for i in range(20)],'oriented_gauss':word,'source_gauss':src,'orientation':'opposite source orientation after explicit viewing rotation','all_grid_moves_checked':len(T['moves']) if F.exists() else 0,'target_n':len(o) if F.exists() else G['n'],'zero_framing':'The source t=0 admission is retained by explicit diagram isotopy and grid moves. Grid writhe is not substituted for companion framing.'}
(B/'admission-verification.json').write_text(json.dumps(report,indent=2)+'\n')
