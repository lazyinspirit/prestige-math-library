"""Finite Artin free-group cross-check of the four specified tensor-bimodule actions."""
import json
from pathlib import Path
class Braid:
 def __init__(self,s):self.names=list(s);self.word=[]
 def swap(self,l,r,sign):
  l=list(l);r=list(r);start=self.names.index(l[0]);assert self.names[start:start+len(l)+len(r)]==l+r,(self.names,l,r)
  # Move each right strand left across the entire left block.
  for j in range(len(r)):
   for k in range(len(l)-1,-1,-1):
    i=start+j+k;self.names[i],self.names[i+1]=self.names[i+1],self.names[i];self.word.append(sign*(i+1))
 def cusp(self,groups,order,sign):
  groups=[list(x) for x in groups];current=list(range(4))
  for k,want in enumerate(order):
   j=current.index(want)
   while j>k:
    a,b=current[j-1:j+1];self.swap(groups[a],groups[b],sign);current[j-1:j+1]=[b,a];j-=1

def reduce(w):
 r=[]
 for x in w:
  if r and r[-1]==-x:r.pop()
  else:r.append(x)
 return r

def inv(w):return [-x for x in reversed(w)]
def images(word,n=7):
 out=[[i+1] for i in range(n)]
 for s in word:
  i=abs(s)-1;a,b=out[i],out[i+1]
  if s>0:out[i],out[i+1]=reduce(a+b+inv(a)),a
  else:out[i],out[i+1]=b,reduce(inv(b)+a+b)
 return out
records=[]
def check(label,src,left,right,order,sign):
 a,b=Braid(src),Braid(src);left(a);right(b)
 target=a.names;assert target==b.names
 canon=Braid(src)
 for j,name in enumerate(target):
  i=canon.names.index(name)
  while i>j:canon.swap(canon.names[i-1:i],canon.names[i:i+1],sign);i-=1
 assert images(a.word)==images(b.word)==images(canon.word),label
 records.append(dict(cusp=label,right_action_then_cusp=a.word,left_action_then_cusp=b.word,permutation=target,canonical_word=canon.word,artin_free_group_images_equal=True))

def first_left(a):
 a.swap('v','ab',1);a.swap('ua','b',-1);a.cusp(['bua','vc','w','z'],[1,3,0,2],-1)
def first_right(a):
 a.swap('bc','w',1);a.swap('b','cz',-1);a.cusp(['u','v','aw','czb'],[1,3,0,2],-1)
check('negative-opposite first snake','uvabcwz',first_left,first_right,None,-1)
def second_left(a):
 a.swap('v','b',1);a.swap('u','b',-1);a.swap('vc','d',-1);a.cusp(['bu','dvc','w','z'],[3,1,2,0],-1)
def second_right(a):
 a.swap('d','w',1);a.swap('b','cw',-1);a.swap('d','z',-1);a.cusp(['u','v','cwb','zd'],[3,1,2,0],-1)
check('negative-opposite second snake','uvbcdwz',second_left,second_right,None,-1)
def third_left(a):
 a.swap('v','a',1);a.swap('v','b',1);a.cusp(['ua','bvc','w','z'],[0,2,1,3],1)
def third_right(a):
 a.swap('c','w',1);a.swap('b','w',1);a.cusp(['u','v','awb','cz'],[0,2,1,3],1)
check('positive-opposite first snake','uvabcwz',third_left,third_right,None,1)
def fourth_left(a):
 a.swap('v','bc',1);a.swap('u','b',1);a.swap('v','d',1);a.cusp(['buc','dv','w','z'],[2,0,3,1],1)
def fourth_right(a):
 a.swap('cd','w',1);a.swap('b','w',1);a.swap('d','z',1);a.cusp(['u','v','wb','czd'],[2,0,3,1],1)
check('positive-opposite second snake','uvbcdwz',fourth_left,fourth_right,None,1)
out=Path(__file__).with_name('four-cusp-braid-check.json');out.write_text(json.dumps({'scope':'Finite cross-check only: explicit positive tensor-bimodule shuffles and four seven-strand balance equations','results':records},indent=2)+'\n')
print('PASS: all four actual seven-strand words have equal Artin free-group images and equal canonical permutation braids.')
