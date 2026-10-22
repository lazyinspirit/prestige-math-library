"""Construct the NEW doubled cable grid, with an explicit corner twist.
Input: already admitted positive trefoil5-grid; it is not rechecked here.
"""
import json
from pathlib import Path
O=[4,3,2,1,0];X=[2,1,0,4,3];n=5
invO={c:r for r,c in enumerate(O)};invX={c:r for r,c in enumerate(X)}
outO=[None]*10;outX=[None]*10;blocks=[];twist=None
for typ,marks,other,inv in [('O',O,X,invX),('X',X,O,invO)]:
 for r,c in enumerate(marks):
  h=1 if other[r]>c else -1;v=1 if inv[c]>r else -1
  diag=h*v==1;flip=False
  if twist is None and h*v==-1:twist=(typ,r,c);diag=not diag;flip=True
  out=outO if typ=='O' else outX
  for a in range(2):out[2*r+a]=2*c+(a if diag else 1-a)
  blocks.append({'type':typ,'row':r,'col':c,'horizontal_side':h,'vertical_side':v,'diagonal':diag,'twist':flip})
assert sorted(outO)==sorted(outX)==list(range(10));assert all(a!=b for a,b in zip(outO,outX))
# The new knot/component cycle only; no old trefoil admission is recomputed.
oRows={c:r for r,c in enumerate(outO)};r=0;seen=[]
while r not in seen:seen.append(r);r=oRows[outX[r]]
assert r==0 and len(seen)==10
out={'n':10,'O_cols':outO,'X_cols':outX,'component_cycle_rows':seen,'blocks':blocks,
 'reuse_input':'Admitted positive trefoil5-grid, writhe+3. No repaired source reread/hash/revalidation.',
 'new_geometric_framing':'Two parallel blackboard copies, one negative half-twist. Slope2lambda_blackboard-mu=2lambda_preferred+5mu.',
 'new_knot':'Positive (2,5) cable of the right-handed trefoil. NOT a staircase admission.'}
p=Path(__file__).with_name('positive-cable-grid.json');p.write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out,indent=2))
