from fractions import Fraction
# Four superspace generators followed by two independent component generators.
# Exact finite exterior arithmetic; this is a bounded sign check, not a field proof.
def add(a,b):
 c=dict(a)
 for s,v in b.items():c[s]=c.get(s,0)+v
 return {s:v for s,v in c.items() if v}
def scale(v,a):return {s:v*w for s,w in a.items() if v*w}
def mul(a,b):
 c={}
 for s,v in a.items():
  for t,w in b.items():
   if s&t:continue
   n=sum(1 for i in range(6) for j in range(6) if s>>i&1 and t>>j&1 and i>j)
   c[s|t]=c.get(s|t,0)+((-1)**n)*v*w
 return {s:v for s,v in c.items() if v}
def star(a):
 c={};perm=[2,3,0,1,4,5]
 for s,v in a.items():
  term={0:v.conjugate()}
  for i in reversed(range(6)):
   if s>>i&1:term=mul(term,{1<<perm[i]:1})
  c=add(c,term)
 return c
basis=[{1<<i:1} for i in range(6)]
I=[[1,0],[0,1]];sx=[[0,1],[1,0]];sy=[[0,-1j],[1j,0]];sz=[[1,0],[0,-1]]
h=[]
for sigma in [I,sx,sy,sz]:
 p={}
 for i in range(2):
  for j in range(2):p=add(p,scale(1j*sigma[i][j],mul(basis[i],basis[2+j])))
 h.append(p)
for i in range(4):
 assert star(h[i])==scale(-1,h[i])
 for j in range(4):assert mul(h[i],h[j]).get(15,0)==([2,-2,-2,-2][i] if i==j else 0)
aux=scale(2,mul(basis[0],basis[1]))
assert mul(aux,star(aux))=={15:-4}
psi=add(mul(basis[0],basis[4]),mul(basis[1],basis[5]))
assert scale(Fraction(1,2),mul(psi,psi))=={51:-1}
# This coefficient is -psi_1 psi_2 with raw coefficients; raw=sqrt(2)*physical
# gives -2 W_ij psi_1 psi_2 before the physical F bracket divides by two.
for s in range(64):
 a={s:1};assert star(star(a))==a
 for t in range(64):
  b={t:1};assert star(mul(a,b))==mul(star(b),star(a))
print('PASS: 16 h-product metric entries; 4 conjugate shifts; auxiliary top coefficient -4; raw chiral Yukawa coefficient -1; involution on 64 basis monomials; anti-automorphism on 4096 ordered basis pairs.')
