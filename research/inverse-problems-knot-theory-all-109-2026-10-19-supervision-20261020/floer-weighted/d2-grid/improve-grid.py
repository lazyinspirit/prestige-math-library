import json,random,time,sys
from pathlib import Path
B=Path(__file__).resolve().parent
init=json.load(open(B/'initial-grid-certificate.json'))['grid']
def destabs(O,X):
 n=len(O)
 for r in range(n-1):
  for c in range(n-1):
   marks=[(a,b,t) for a in [r,r+1] for t,P in enumerate([O,X]) for b in [P[a]] if b in [c,c+1]]
   if len(marks)!=3:continue
   rr=next(a for a in [r,r+1] if sum(z[0]==a for z in marks)==2)
   cc=next(b for b in [c,c+1] if sum(z[1]==b for z in marks)==2)
   other_r=2*r+1-rr;other_c=2*c+1-cc
   common=next(t for a,b,t in marks if a==rr and b==cc)
   assert all(t!=common for a,b,t in marks if (a,b)!=(rr,cc))
   oo=O[:];xx=X[:];[oo,xx][1-common][other_r]=other_c
   oo.pop(rr);xx.pop(rr)
   oo=[a-(a>cc) for a in oo];xx=[a-(a>cc) for a in xx]
   yield oo,xx,['destabilize',r,c,rr,cc]
def commutable(a,b):
 # Endpoints alternate precisely when one endpoint of b is strictly inside a.
 lo,hi=sorted(a)
 return not ((lo<b[0]<hi) != (lo<b[1]<hi)) if len(set(a+b))==4 else True
def moves(O,X):
 n=len(O)
 for r in range(n-1):
  if commutable([O[r],X[r]],[O[r+1],X[r+1]]):yield ['rows',r]
 oi=[O.index(c) for c in range(n)];xi=[X.index(c) for c in range(n)]
 for c in range(n-1):
  if commutable([oi[c],xi[c]],[oi[c+1],xi[c+1]]):yield ['columns',c]
 yield ['cut_rows'];yield ['cut_columns']
def apply(O,X,m):
 O=O[:];X=X[:];k=m[0];n=len(O)
 if k=='rows':
  r=m[1];O[r],O[r+1]=O[r+1],O[r];X[r],X[r+1]=X[r+1],X[r]
 elif k=='columns':
  c=m[1];O=[c+1 if a==c else c if a==c+1 else a for a in O];X=[c+1 if a==c else c if a==c+1 else a for a in X]
 elif k=='cut_rows':O=O[1:]+O[:1];X=X[1:]+X[:1]
 else:O=[(a+1)%n for a in O];X=[(a+1)%n for a in X]
 return O,X
bestdata=json.load(open(B/'small-grid-certificate.json'));best=bestdata['grid']['n'];start=time.time();limit=float(sys.argv[1]) if len(sys.argv)>1 else 120
for restart in range(100000):
 if time.time()-start>limit:break
 if bestdata and restart%4:
  O=bestdata['grid']['O'][:];X=bestdata['grid']['X'][:];seq=bestdata['moves'][:]
 else:O=init['O'][:];X=init['X'][:];seq=[]
 seen=set();stagnant=0
 for it in range(3000):
  ds=list(destabs(O,X))
  if ds:O,X,m=random.choice(ds);seq.append(m);stagnant=0
  else:
   mm=list(moves(O,X));candidates=[]
   random.shuffle(mm)
   for m in mm:
    oo,xx=apply(O,X,m);key=(tuple(oo),tuple(xx))
    if key not in seen:candidates.append((oo,xx,m))
   if not candidates:break
   # Prefer moves making an immediate destabilization available.
   prefer=[v for v in candidates if next(destabs(v[0],v[1]),None)]
   O,X,m=random.choice(prefer or candidates);seq.append(m);stagnant+=1
  seen.add((tuple(O),tuple(X)))
  if len(O)<best:
   best=len(O);bestdata={'grid':{'O':O[:],'X':X[:],'n':best},'moves':seq[:],'initial':'initial-grid-certificate.json'}
   (B/'small-grid-certificate.json').write_text(json.dumps(bestdata,indent=2)+'\n');print('best',best,'moves',len(seq),'sec',round(time.time()-start,1),flush=True)
  if best<=12:break
  if stagnant>500:break
 if best<=12:break
print('FINAL',best)
