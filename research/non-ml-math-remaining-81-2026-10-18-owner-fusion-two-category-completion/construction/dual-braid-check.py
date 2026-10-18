import json
from pathlib import Path
def red(w):
 o=[]
 for x in w:
  if o and o[-1]==-x:o.pop()
  else:o.append(x)
 return o
def inv(w):return [-x for x in w[::-1]]
def sub(w,images):return red([y for x in w for y in (images[abs(x)-1] if x>0 else inv(images[-x-1]))])
def artin(w,n):
 a=[[i+1] for i in range(n)]
 for x in w:
  i=abs(x)-1;b=[[j+1] for j in range(n)]
  if x>0:b[i]=[i+1,i+2,-i-1];b[i+1]=[i+1]
  else:b[i]=[i+2];b[i+1]=[-i-2,i+1,i+2]
  a=[sub(v,b) for v in a]
 return a
class Braid:
 def __init__(self):self.s=list('uvabcwz');self.w=[]
 def swap(self,l,r,sign):
  for x in r:
   for y in l[::-1]:
    i=self.s.index(y); assert self.s[i+1]==x,(self.s,l,r,x,y)
    self.w.append(sign*(i+1));self.s[i],self.s[i+1]=self.s[i+1],self.s[i]
r=Braid();r.swap('v','a',1);r.swap('v','b',1);r.swap('ua','b',-1);r.swap('bua','vc',-1);r.swap('w','z',-1);r.swap('bua','z',-1)
l=Braid();l.swap('bc','w',1);l.swap('b','cz',-1);l.swap('u','v',-1);l.swap('aw','czb',-1);l.swap('u','czb',-1)
t=Braid()
for pos,x in enumerate('vczbuaw'):
 while t.s.index(x)>pos:
  at=t.s.index(x);t.swap(t.s[at-1],x,-1)
assert r.s==l.s==t.s==list('vczbuaw')
assert artin(r.w,7)==artin(l.w,7)==artin(t.w,7)
out={'scope':'actual first cusp seven-strand middle-balance words; independent finite symbolic verification only','right_action_then_cusp':r.w,'left_action_then_cusp':l.w,'negative_permutation_braid':t.w,'permutation':t.s,'artin_free_group_images_equal':True,'general_proof':'canonical proof must still derive words from module actions and inverse hexagons; this computation is no substitute for that derivation'}
Path(__file__).with_suffix('.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
