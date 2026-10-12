from fractions import Fraction as F
from collections import defaultdict
from itertools import product
import json
from pathlib import Path
R=Path(__file__).parent
counts={'actual_laurent_kernel_checks':0,'whole_word_profile_checks':0}
def add(d,k,v):
 d[k]+=v
 if not d[k]:del d[k]
def S(l,m,e,q):
 j=(l-1)%e+1;k=(m-1)%e+1;p=(j-l)//e;r=(k-m)//e;c=q*q-1;d=defaultdict(F)
 if j==k:add(d,(j-r*e,k-p*e),-1)
 else:
  add(d,(k-r*e,j-p*e),-q)
  if j>k:add(d,(j-r*e,k-p*e),c)
 # Y2 (Y1^pY2^r-Y1^rY2^p)/(Y1-Y2)
 if p>r:
  for h in range(p-r):add(d,(j-(p-1-h)*e,k-(r+1+h)*e),-c)
 elif p<r:
  for h in range(r-p):add(d,(j-(r-1-h)*e,k-(p+1+h)*e),c)
 return d
def relation(l,m,e,q):
 d=defaultdict(F);add(d,(l,m),1)
 if l==m:return d
 a,b=divmod(m-l,e)
 if b==0:add(d,(m,l),1)
 else:
  add(d,(m,l),1/q)
  if a:
   add(d,(l+a*e,m-a*e),1);add(d,(m-a*e,l+a*e),1/q)
 return d
for e in range(2,6):
 for q in (F(2),F(3)):
  for l in range(-12,13):
   for m in range(l,13):
    d=relation(l,m,e,q);a=defaultdict(F,d)
    for (x,y),v in d.items():
     for k,w in S(x,y,e,q).items():add(a,k,v*w)
    assert not a,(e,q,l,m,a)
    counts['actual_laurent_kernel_checks']+=1

def profile(t):
 s=sorted(t,reverse=True);return (tuple(sum(s[:r]) for r in range(1,len(t))),sum(t[i]<t[j] for i in range(len(t)) for j in range(i+1,len(t))))
for e in range(2,5):
 for t in product(range(-3,4),repeat=3):
  for pos in range(2):
   l,m=t[pos:pos+2]
   if l>=m:continue
   a,b=divmod(m-l,e);pairs=[(m,l)]
   if a and b:pairs.extend([(l+a*e,m-a*e),(m-a*e,l+a*e)])
   for pair in pairs:
    v=t[:pos]+pair+t[pos+2:]
    assert sum(v)==sum(t) and min(v)>=min(t) and max(v)<=max(t)
    assert profile(v)<profile(t),(e,t,v)
    counts['whole_word_profile_checks']+=1
out={'status':'pass','counts':counts,'scope':'Bounded rational evaluations of actual Laurent divided-difference kernel and profile; supplemental checks, not general proofs','two_bit_polynomial_obstruction':'tilde f(x)=z/(1+q²), requires local A0 ring'}
(R/'focused-check-result.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
