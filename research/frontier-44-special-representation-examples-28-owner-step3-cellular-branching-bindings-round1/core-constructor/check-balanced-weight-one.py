import json
from pathlib import Path

def parts(n,m=None):
 if not n:yield ();return
 for k in range(min(n,m or n),0,-1):
  for p in parts(n-k,k):yield (k,)+p

def beta(lam,N):return [sum(v>=i+1 for v in lam)+N-i-1 for i in range(N)]
def recover(bs):
 N=len(bs);col=[b-N+i+1 for i,b in enumerate(sorted(bs,reverse=True))]
 return tuple(sum(v>=i for v in col) for i in range(1,max(col,default=0)+1))
def J(lam,e):
 N=sum(lam)+e;bs=beta(lam,N);col=[sum(v>=j for v in lam) for j in range(1,max(lam,default=0)+1)];out={}
 for a,row in enumerate(lam,1):
  for b in range(1,row+1):
   for c in range(b+1,row+1):
    hb=row-b+col[b-1]-a+1;hc=row-c+col[c-1]-a+1
    coef=int(hb%e==0)-int(hc%e==0)
    if not coef:continue
    seq=bs[:];seq[b-1]+=hc;seq[c-1]-=hc
    if min(seq)<0 or len(set(seq))<N:continue
    sign=(-1)**sum(seq[i]<seq[j] for i in range(N) for j in range(i+1,N))
    nu=recover(seq);out[nu]=out.get(nu,0)+coef*sign
 return {k:v for k,v in out.items() if v}
checks=0
for e in range(2,7):
 for size in range(9):
  for core in parts(size):
   N=size+2*e;bs=beta(core,N);B=set(bs)
   if any(v-e>=0 and v-e not in B for v in B):continue
   bottoms=sorted(max(v for v in B if v%e==r) for r in range(e))
   shapes=[]
   for x in bottoms:shapes.append(recover([v for v in bs if v!=x]+[x+e]))
   for k,lam in enumerate(shapes):
    actual=J(lam,e);expected={shapes[j]:(-1)**(j-k+1) for j in range(k+1,e)}
    assert actual==expected,(core,e,k,lam,actual,expected)
    nonrestricted=any((lam[i]-(lam[i+1] if i+1<len(lam) else 0))>=e for i in range(len(lam)))
    assert nonrestricted==(k==0),(core,e,k,lam)
    checks+=1
counter=J((3,1),2)
assert (1,1,1,1) not in counter
out={'bounded_checks':checks,'core_size_max':8,'e_range':[2,6],'meaning':'Independent finite check of balanced signed weight-one coefficient evaluation and unique nonrestricted label; not a proof of general block connectivity','first_row_move_counterexample':{'e':2,'mu':[1,1,1,1],'lambda':[3,1],'balanced_coefficients':{' '.join(map(str,k)):v for k,v in counter.items()},'mu_coefficient':0}}
Path(__file__).with_suffix('.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
