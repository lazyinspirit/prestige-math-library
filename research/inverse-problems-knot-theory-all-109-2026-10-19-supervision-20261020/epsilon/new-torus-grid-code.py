"""New geometric torus-grid admissions. No earlier proof or source checked."""
from fractions import Fraction as F
import json
from pathlib import Path

def grid(p,q):
 n=p+q; O=[n-1-r for r in range(n)];X=[n-1-((r+p)%n) for r in range(n)]
 inv={c:r for r,c in enumerate(X)};orr={c:r for r,c in enumerate(O)};cr=[]
 for r in range(n):
  for c in range(n):
   if min(O[r],X[r])<c<max(O[r],X[r]) and min(inv[c],orr[c])<r<max(inv[c],orr[c]):cr.append((r,c))
 word=[];r=0
 while True:
  cs=sorted((c for rr,c in cr if rr==r),reverse=X[r]<O[r]);word += [((r,c),'U') for c in cs]
  c=X[r];rr=orr[c];rs=sorted((s for s,cc in cr if cc==c),reverse=rr<r);word += [((s,c),'O') for s in rs]
  r=rr
  if r==0:break
 assert len(word)==2*len(cr)
 return {'n':n,'O_cols':O,'X_cols':X,'crossings':cr,'word':word}

def torus(p,q):
 pairs=set()
 for k in range(1,p):
  for m in range(2*q):
   t=(F(1,4)+F(m,2)-F(q*k,2*p))/q%1;u=(t+F(k,p))%1
   pairs.add(tuple(sorted((t,u))))
 assert len(pairs)==q*(p-1)
 times={t:(pair,'O' if (q*t)%1<F(1,4) or (q*t)%1>F(3,4) else 'U') for pair in pairs for t in pair}
 assert len(times)==2*len(pairs)
 return sorted(times.items())

def normalize(word):
 labels={};out=[]
 for x,v in word:
  if x not in labels:labels[x]=len(labels)
  out.append([labels[x],v])
 return out
out=[]
for p,q in [(2,5)]:
 g=grid(p,q);t=torus(p,q);tw=[v for time,v in t]
 target=normalize(g['word']);match=None
 for rev in [False,True]:
  w=list(reversed(tw)) if rev else tw
  for k in range(len(w)):
   if normalize(w[k:]+w[:k])==target:match=(rev,k);break
  if match:break
 assert match is not None,(p,q,target,normalize(tw))
 out.append({'p':p,'q':q,**{k:v for k,v in g.items() if k!='word'},'grid_signed_gauss_word':target,
             'torus_parameters':[str(x) for x,v in t],'torus_word':normalize(tw),'matching_reverse_and_cyclic_shift':match,
             'all_crossing_signs':1})
path=Path(__file__).with_name('new-torus-grid-code-result.json');path.write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out,indent=2))
