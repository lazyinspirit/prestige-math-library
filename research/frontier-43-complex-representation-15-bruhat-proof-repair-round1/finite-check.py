from itertools import permutations,combinations
from functools import lru_cache
from pathlib import Path
import json
reports=[]
for n in range(1,7):
 ps=list(permutations(range(1,n+1)));idx={p:i for i,p in enumerate(ps)}
 lengths={p:sum(p[i]>p[j] for i in range(n) for j in range(i+1,n)) for p in ps}
 ranks={p:tuple(sum(x<=h for x in p[:m]) for m in range(n+1) for h in range(n+1)) for p in ps}
 def left(p,i):return tuple(i+1 if x==i else i if x==i+1 else x for x in p)
 def right(p,i):q=list(p);q[i-1],q[i]=q[i],q[i-1];return tuple(q)
 def le(a,b):return all(x>=y for x,y in zip(ranks[a],ranks[b]))
 covers={p:[] for p in ps}
 for p in ps:
  for a,b in combinations(range(1,n+1),2):
   q=tuple(b if x==a else a if x==b else x for x in p)
   if lengths[q]==lengths[p]+1:covers[p].append(q)
 reach={}
 for p in sorted(ps,key=lengths.get,reverse=True):
  bits=1<<idx[p]
  for q in covers[p]:bits|=reach[q]
  reach[p]=bits
 comparisons=paired=cross=lift=0
 for p in ps:
  for q in ps:
   rank=le(p,q);strong=bool(reach[p]&(1<<idx[q]));assert rank==strong,(n,p,q,'rank/chain')
   comparisons+=1
   if not rank:continue
   for i in range(1,n):
    sp,sq=left(p,i),left(q,i)
    if lengths[sq]<lengths[q]:
     assert le(sp,q),(n,p,q,i,'statement second lifting');lift+=1
     if lengths[sp]<lengths[p]:assert le(sp,sq),(n,p,q,i,'paired descent');paired+=1
     else:assert le(p,sq),(n,p,q,i,'cross lifting');cross+=1
    if lengths[sp]>lengths[p]:assert le(p,sq),(n,p,q,i,'statement first lifting');lift+=1
  # Cover union of intervals, including the diagonal empty union.
  for q in ps:
   if not le(p,q):continue
   interval={z for z in ps if le(p,z) and le(z,q)} if n<=4 else None
   if interval is not None:
    union={p}
    for a in covers[p]:
     if le(a,q):union|={z for z in ps if le(a,z) and le(z,q)}
    assert interval==union,(n,p,q,'interval union')
 subword_words=0
 if n<=5:
  @lru_cache(None)
  def words(p):
   if lengths[p]==0:return ((),)
   return tuple((i,)+word for i in range(1,n) if lengths[left(p,i)]<lengths[p] for word in words(left(p,i)))
  e=tuple(range(1,n+1))
  for p in ps:
   expected={q for q in ps if le(q,p)}
   for word in words(p):
    states={e}
    for i in word:
     states|={right(q,i) for q in tuple(states) if lengths[right(q,i)]==lengths[q]+1}
    assert states==expected,(n,p,word,'every reduced expression')
    subword_words+=1
 reports.append({'n':n,'permutations':len(ps),'rank_vs_reflection_chain_pairs':comparisons,'paired_descent_liftings':paired,'cross_liftings':cross,'statement_liftings':lift,'reduced_expressions_checked':subword_words,'interval_union_checked':n<=4,'failures':0})
 print(reports[-1],flush=True)
Path(__file__).with_name('finite-check.json').write_text(json.dumps({'reports':reports,'purpose':'Independent finite rank-matrix, transposition-chain, lifting, every-reduced-expression and empty-union corroboration; not a proof for arbitrary n.'},indent=2)+'\n')
