"""Literal tilde grid rectangle matrix in one absolute Alexander degree.
Input JSON: O_columns_by_row, X_columns_by_row. Emits actual states/columns/ranks.
No package homology output is used. All comparisons are integral.
"""
import sys,json,time
from pathlib import Path
from functools import lru_cache
from collections import Counter

def compute(grid,degree=1):
 O=grid['O_columns_by_row'];X=grid['X_columns_by_row'];n=len(O)
 assert n>=2 and sorted(O)==sorted(X)==list(range(n)) and all(a!=b for a,b in zip(O,X))
 # Following O->X horizontally, then X->O vertically, must be one component.
 invO={c:r for r,c in enumerate(O)};seen=set();r=0
 while r not in seen:seen.add(r);r=invO[X[r]]
 assert r==0 and len(seen)==n
 def I_marks(P):return sum(i<j and P[i]<P[j] for i in range(n) for j in range(n))
 oo=I_marks(O);xx=I_marks(X)
 WO=[[sum((c<=X[k])-(c<=O[k]) for k in range(r,n))+sum((X[k]<c)-(O[k]<c) for k in range(r)) for c in range(n)] for r in range(n)]
 target=2*degree-oo+xx+n-1
 full=(1<<n)-1
 @lru_cache(None)
 def extrema(mask):
  if mask==full:return (0,0)
  r=mask.bit_count();vals=[];unused=full^mask
  while unused:
   bit=unused&-unused;unused-=bit;c=bit.bit_length()-1
   lo,hi=extrema(mask|bit);vals.append((WO[r][c]+lo,WO[r][c]+hi))
  return min(x[0] for x in vals),max(x[1] for x in vals)
 @lru_cache(None)
 def count(mask,remaining):
  lo,hi=extrema(mask)
  if remaining<lo or remaining>hi:return 0
  if mask==full:return int(remaining==0)
  r=mask.bit_count();ans=0;unused=full^mask
  while unused:
   bit=unused&-unused;unused-=bit;c=bit.bit_length()-1
   ans+=count(mask|bit,remaining-WO[r][c])
  return ans
 number=count(0,target)
 print(json.dumps({'stage':'slice-count','n':n,'A':degree,'states':number,'chain_A2_range':[oo-xx-n+1+x for x in extrema(0)]}),flush=True,file=sys.stderr)
 if number>2000000:raise RuntimeError('Slice exceeds2million state guard; need smaller grid or compiled/sparse cancellation implementation')
 states=[]
 def enum(mask,remaining,p):
  if not count(mask,remaining):return
  if mask==full:states.append(tuple(p));return
  r=mask.bit_count();unused=full^mask
  while unused:
   bit=unused&-unused;unused-=bit;c=bit.bit_length()-1
   enum(mask|bit,remaining-WO[r][c],p+[c])
 enum(0,target,[]);assert len(states)==number
 index={p:i for i,p in enumerate(states)}
 def maslov(p):
  return sum(p[r]<p[s] for r in range(n) for s in range(r+1,n))-sum(p[r]<=O[k] for r in range(n) for k in range(r,n))-sum(O[k]<p[r] for r in range(n) for k in range(r))+oo+1
 M=[maslov(p) for p in states];columns=[];rectangle_count=0
 # Precompute all basepoint-empty positive oriented rectangles by corner positions.
 rect={}
 for r in range(n):
  for s in range(n):
   if r==s:continue
   h=(s-r)%n
   for a in range(n):
    for b in range(n):
     if a==b:continue
     width=(b-a)%n
     if any((k-r)%n<h and (P[k]-a)%n<width for P in [O,X] for k in range(n)):continue
     interior_rows=[k for k in range(n) if 0<(k-r)%n<h]
     interior_cols={c for c in range(n) if 0<(c-a)%n<width}
     rect[r,s,a,b]=(interior_rows,interior_cols)
 for i,p in enumerate(states):
  out=set()
  for r in range(n):
   for s in range(n):
    if r==s:continue
    data=rect.get((r,s,p[r],p[s]))
    if data is None:continue
    ir,ic=data
    if any(p[k] in ic for k in ir):continue
    q=list(p);q[r],q[s]=q[s],q[r];q=tuple(q)
    j=index[q];assert M[i]-M[j]==1
    rectangle_count+=1
    if j in out:out.remove(j)
    else:out.add(j)
  columns.append(sorted(out))
 # Actual matrix square, beyond the abstract rectangle identity.
 for i,col in enumerate(columns):
  total=set()
  for j in col:total.symmetric_difference_update(columns[j])
  assert not total,(i,sorted(total))
 ranks={};pivots={}
 for m in sorted(set(M)):
  ech={};pw=[]
  for i in range(number):
   if M[i]!=m:continue
   v=sum(1<<j for j in columns[i])
   while v:
    q=v.bit_length()-1
    if q in ech:v^=ech[q]
    else:ech[q]=v;pw.append([i,q]);break
  ranks[m]=len(ech);pivots[m]=pw
 dims=Counter(M);betti={m:dims[m]-ranks.get(m,0)-ranks.get(m+1,0) for m in sorted(dims)}
 assert all(v>=0 for v in betti.values())
 return {'scope':'Literal finite tilde matrix; knot admission and use of accepted grid equality are separate', 'grid':grid,'A':degree,'state_count':number,'states':[list(p) for p in states],'M':M,'columns':columns,'rectangle_orbits_before_mod2':rectangle_count,'chain_dimensions':dict(sorted(dims.items())),'ranks':ranks,'rank_pivot_witnesses':pivots,'homology_dimensions':betti,'even_homology_rank':sum(v for m,v in betti.items() if m%2==0),'odd_homology_rank':sum(v for m,v in betti.items() if m%2)}
if __name__=='__main__':
 inp=Path(sys.argv[1]);ans=compute(json.loads(inp.read_text()),int(sys.argv[3]) if len(sys.argv)>3 else 1)
 Path(sys.argv[2]).write_text(json.dumps(ans,separators=(',',':'))+'\n')
 print(json.dumps({k:v for k,v in ans.items() if k not in ['states','M','columns','rank_pivot_witnesses']}))
