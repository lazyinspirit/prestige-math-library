from itertools import permutations
from functools import cache
import json

def add(a,b):
 c=a.copy()
 for k,x in b.items(): c[k]=c.get(k,0)+x
 return {k:x for k,x in c.items() if x}
def mul(a,b):
 c={}
 for k,x in a.items():
  for l,y in b.items(): c[k+l]=c.get(k+l,0)+x*y
 return {k:x for k,x in c.items() if x}
def scale(a,x):return {k:v*x for k,v in a.items() if v*x}
def sh(a,n):return {k+n:v for k,v in a.items()}
def length(w): return sum(a>b for i,a in enumerate(w) for b in w[i+1:])
def left(w,i):return tuple(i+1 if a==i else i if a==i+1 else a for a in w)
def le(x,w):return all(sum(a<=h for a in x[:m])>=sum(a<=h for a in w[:m]) for m in range(1,len(w)+1) for h in range(1,len(w)+1))
def perms(n):return tuple(permutations(range(1,n+1)))
@cache
def R(x,w):
 if not le(x,w):return {}
 if x==w:return {0:1}
 i=next(i for i in range(1,len(w)) if length(left(w,i))<length(w));sw=left(w,i);sx=left(x,i)
 return R(sx,sw) if length(sx)<length(x) else add(R(sx,sw),mul({1:1,-1:-1},R(x,sw)))
@cache
def P(x,w):
 if not le(x,w):return {}
 if x==w:return {0:1}
 i=next(i for i in range(1,len(w)) if length(left(w,i))<length(w));sw=left(w,i);sx=left(x,i);c=int(length(sx)<length(x))
 out=add(sh(P(sx,sw),1-c),sh(P(x,sw),c))
 for z in perms(len(w)):
  d=length(sw)-length(z)
  if le(x,z) and le(z,sw) and length(left(z,i))<length(z) and d>0 and d%2:
   mu=P(z,sw).get((d-1)//2,0)
   out=add(out,scale(sh(P(x,z),(length(w)-length(z))//2),-mu))
 return out
@cache
def p(x,w):return {length(w)-length(x)-2*k:c for k,c in P(x,w).items()}
@cache
def inv(x,w):
 if not le(x,w):return {}
 if x==w:return {0:1}
 out={}
 for z in perms(len(w)):
  if le(x,z) and le(z,w) and z!=w:out=add(out,mul(inv(x,z),p(z,w)))
 return scale(out,-1)
b=(1,3,2,4);w=(3,4,1,2);t=left(w,2)
I=sorted([z for z in perms(4) if le(b,z) and le(z,w)],key=lambda z:(length(z),z))
assert len(I)==10
assert sum(le(x,z) for x in I for z in I)==35
assert not le((1,3,4,2),t)
for x in I:
 for z in I:
  if le(x,z):
   d=length(z)-length(x)
   assert P(x,z)==({0:1,1:1} if (x,z)==(b,w) else {0:1})
   alpha={1:1,-1:-1};r={0:1}
   for _ in range(d):r=mul(r,alpha)
   assert R(x,z)==r
   assert inv(x,z)==({1:-1,3:-1} if (x,z)==(b,w) else {d:(-1)**d})
   out={}
   for y in I:out=add(out,mul(inv(x,y),p(y,z)))
   assert out==({0:1} if x==z else {})
print('10-point interval, all 35 comparable pairs: KL, R, inverse coefficients and Q\'P identity verified')
print('interval:', [''.join(map(str,z)) for z in I]);print('subinterval:', [''.join(map(str,z)) for z in I if le(z,t)]);print('nonconstant:',P(b,w),'inverse:',inv(b,w));print('P(e,2413):',P((1,2,3,4),t))
for z in perms(3):
 for x in perms(3):
  if le(x,z):assert P(x,z)=={0:1}
print('All S3 comparable KL polynomials equal 1; R(e,321)=',R((1,2,3),(3,2,1)))
