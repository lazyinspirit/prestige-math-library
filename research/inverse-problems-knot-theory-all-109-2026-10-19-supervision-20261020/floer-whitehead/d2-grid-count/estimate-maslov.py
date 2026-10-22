"""Exact Maslov distribution by subset permanent; no state-matrix allocation."""
import json,sys,resource
from collections import defaultdict
from pathlib import Path
resource.setrlimit(resource.RLIMIT_AS,(6<<30,6<<30))
x=json.loads(Path(sys.argv[1]).read_text());O=x.get('O_columns_by_row',x.get('O'));X=x.get('X_columns_by_row',x.get('X'));n=len(O)
assert sorted(O)==sorted(X)==list(range(n)) and all(a!=b for a,b in zip(O,X))
oo=sum(O[i]<O[j] for i in range(n) for j in range(i+1,n));weights=[[-sum(c<=O[k] for k in range(r,n))-sum(O[k]<c for k in range(r)) for c in range(n)] for r in range(n)]
# Given previous columns mask, all earlier rows are below r, so its incremental
# I(state,state) is exactly number of previous columns below chosen c.
P=[None]*(1<<n);P[0]={oo+1:1}
for mask in range((1<<n)-1):
 if P[mask] is None:continue
 r=mask.bit_count()
 for c in range(n):
  bit=1<<c
  if mask&bit:continue
  delta=(mask&(bit-1)).bit_count()+weights[r][c];j=mask|bit
  if P[j] is None:P[j]=defaultdict(int)
  q=P[j]
  for m,count in P[mask].items():q[m+delta]+=count
 # Keep layers retained for an explicit finite recurrence; bounded by2^n states.
full=dict(sorted(P[-1].items()));ans={'n':n,'address_space_cap_bytes':6<<30,'Maslov_distribution':full,'three_level_counts':{m:full.get(m,0) for m in [-1,0,1]},'three_level_total':sum(full.get(m,0) for m in [-1,0,1])}
Path(sys.argv[2]).write_text(json.dumps(ans,indent=2)+'\n');print(json.dumps(ans))
