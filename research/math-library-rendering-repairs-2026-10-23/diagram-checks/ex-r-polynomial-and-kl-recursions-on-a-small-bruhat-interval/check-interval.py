"""Finite independent prefix-rank and KL-recursion check of the illustrated S4 interval."""
import itertools, functools, json, pathlib
perms=list(itertools.permutations(range(1,5)))
def length(x): return sum(x[i]>x[j] for i in range(4) for j in range(i+1,4))
def le(x,y): return all(sum(v<=h for v in x[:m])>=sum(v<=h for v in y[:m]) for m in range(1,5) for h in range(1,5))
def left(s,x): return tuple(s+1 if v==s else s if v==s+1 else v for v in x)
def plus(*terms):
 out={}
 for p in terms:
  for k,v in p.items(): out[k]=out.get(k,0)+v
 return {k:v for k,v in out.items() if v}
def shift(p,k,c=1): return {i+k:c*v for i,v in p.items() if c*v}
def mul(p,q): return plus(*[shift(q,i,v) for i,v in p.items()])
@functools.lru_cache(None)
def P(y,w):
 if not le(y,w): return {}
 if y==w:return {0:1}
 s=next(s for s in range(1,4) if length(left(s,w))<length(w))
 sw=left(s,w);sy=left(s,y);c=int(length(sy)<length(y))
 terms=[shift(P(sy,sw),1-c),shift(P(y,sw),c)]
 for z in perms:
  if le(y,z) and le(z,sw) and length(left(s,z))<length(z):
   gap=length(sw)-length(z)
   mu=P(z,sw).get((gap-1)//2,0) if gap%2 else 0
   if mu:terms.append(shift(P(y,z),(length(w)-length(z))//2,-mu))
 return plus(*terms)
b=(1,3,2,4);w=(3,4,1,2);C=left(2,w)
I=sorted([x for x in perms if le(b,x) and le(x,w)],key=lambda x:(length(x),x))
def st(x):return ''.join(map(str,x))
nonconstant=[{'y':st(y),'z':st(z),'P':P(y,z)} for y in I for z in I if le(y,z) and P(y,z)!={0:1}]
assert nonconstant==[{'y':'1324','z':'3412','P':{0:1,1:1}}]
assert P((1,2,3,4),C)=={0:1} and P(b,C)=={0:1}
report={'method':'All S4 permutations; exact integer polynomial arithmetic; recursive left-descent formula from thm-kazhdan-lusztig-polynomial-recursion; prefix ranks independently determine order.','nonconstant_comparable_KL_polynomials_in_interval':nonconstant,'P_id_2413':P((1,2,3,4),C),'P_b_2413':P(b,C),'mu_b_w':P(b,w).get(1),'comparable_pairs_checked':sum(le(y,z) for y in I for z in I),'passed':True}
path=pathlib.Path(__file__).with_name('kl-recursion-check.json')
path.write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report))
