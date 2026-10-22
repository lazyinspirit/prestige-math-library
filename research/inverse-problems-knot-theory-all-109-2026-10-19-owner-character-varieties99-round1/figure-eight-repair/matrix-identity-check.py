from collections import defaultdict
import json
P=lambda c=0:{(0,0):c} if c else {}
M={(1,0):1};Mi={(-1,0):1};t={(0,1):1}
def add(*ps):
 d=defaultdict(int)
 for p in ps:
  for k,v in p.items():d[k]+=v
 return {k:v for k,v in d.items() if v}
def neg(p):return {k:-v for k,v in p.items()}
def mul(a,b):
 d=defaultdict(int)
 for (i,j),c in a.items():
  for (k,l),v in b.items():d[i+k,j+l]+=c*v
 return {k:v for k,v in d.items() if v}
def mm(a,b):return [[add(mul(a[i][0],b[0][j]),mul(a[i][1],b[1][j])) for j in range(2)] for i in range(2)]
def inv(a):return [[a[1][1],neg(a[0][1])],[neg(a[1][0]),a[0][0]]]
I=[[P(1),P()],[P(),P(1)]];A=[[M,P(1)],[P(),Mi]];B=[[M,P()],[t,Mi]]
def word(w):
 d={1:A,2:B,-1:inv(A),-2:inv(B)};o=I
 for x in w:o=mm(o,d[x])
 return o
a=add(mul(M,M),mul(Mi,Mi),P(-3));F=add(mul(t,t),mul(a,t),neg(a))
def divF(p):
 rem=p.copy();q={}
 while rem and max(j for i,j in rem)>=2:
  j=max(j for i,j in rem);lead={(i,0):c for (i,k),c in rem.items() if k==j};term={(i,j-2):c for (i,_),c in lead.items()};q=add(q,term);rem=add(rem,neg(mul(term,F)))
 return q,rem
def fmt(p):
 if not p:return '0'
 return ' + '.join(str(c)+'*M^'+str(i)+'*t^'+str(j) for (i,j),c in sorted(p.items(),key=lambda x:(-x[0][1],-x[0][0])))
w=[1,-2,-1,2];W=word(w);rel=[[add(mm(B,W)[i][j],neg(mm(W,A)[i][j])) for j in range(2)] for i in range(2)]
w4=[-2,1,2,-1,2];cword=w4+[-1,2]+[-x for x in [1,2,-1][::-1]]
C=word(cword);tr=add(C[0][0],C[1][1]);target=add({(4,0):1},{(2,0):-1},P(-2),{(-2,0):-1},{(-4,0):1})
print('F=',fmt(F));print('rel quot/remainders')
for row in rel:
 for e in row:
  q,z=divF(e);print(fmt(q),'/',fmt(z))
print('Cword',cword);q,z=divF(add(tr,neg(target)));print('trC-target quotient=',fmt(q),'remainder=',fmt(z))

# Exact coefficient identities, over Z[M,+/-1,t], not numerical samples.
assert rel[0][0]=={} and rel[1][1]=={}
assert rel[0][1]==neg(F) and rel[1][0]==mul(t,F)
x2=add(a,P(5));H=add(mul(x2,add(t,P(1))),neg(mul(t,F)))
assert add(tr,neg(target))==mul(F,H)
print('PASS exact full relator entries and preferred-word trace polynomial identity')
