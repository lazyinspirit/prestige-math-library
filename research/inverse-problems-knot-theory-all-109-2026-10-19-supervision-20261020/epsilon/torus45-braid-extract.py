exec(open('research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/epsilon/new-torus-grid-code.py').read().split('out=[]\nfor p,q')[0])
from itertools import product

def braidword_gauss(word,n):
 strands=list(range(n));visits=[[] for i in strands]
 for k,i in enumerate(word):
  l,r=strands[i-1:i+1];visits[l].append((k,'U'));visits[r].append((k,'O'));strands[i-1:i+1]=[r,l]
 bottom={label:i for i,label in enumerate(strands)}
 out=[];j=0;seen=set()
 while j not in seen:seen.add(j);out+=visits[j];j=bottom[j]
 return out

def equiv(a,b):
 a=normalize(a)
 for reverse in [False,True]:
  w=list(reversed(b)) if reverse else b
  for k in range(len(w)):
   if a==normalize(w[k:]+w[:k]):return reverse,k
 return None

g=grid(4,5);w=g['word'];occ={x:[i for i,(xx,v) in enumerate(w) if xx==x] for x,v in w};perm={i:(sum(occ[x])-i+1)%len(w) for i,(x,v) in enumerate(w)}
cycles=[];seen=set()
for i in range(len(w)):
 if i in seen:continue
 c=[];j=i
 while j not in seen:seen.add(j);c.append(j);j=perm[j]
 cycles.append(c)
ci={j:k for k,c in enumerate(cycles) for j in c}
edge={x:max(ci[i] for i in pos) for x,pos in occ.items()}
lists=[[w[j][0] for j in c] for c in cycles]
for cuts in product(*[range(len(c)) for c in lists]):
 adj={x:set() for x in occ};inc={x:0 for x in occ}
 for c,k in zip(lists,cuts):
  s=c[k:]+c[:k]
  for a,b in zip(s,s[1:]):
   if b not in adj[a]:adj[a].add(b);inc[b]+=1
 queue=sorted(x for x,i in inc.items() if not i);order=[]
 while queue:
  a=queue.pop(0);order.append(a)
  for b in adj[a]:
   inc[b]-=1
   if not inc[b]:queue.append(b)
 if len(order)!=len(occ):continue
 word=[edge[x] for x in order]
 eq=equiv(w,braidword_gauss(word,4))
 if eq is not None:
  print('FOUND',cuts,word,eq);break
else:raise RuntimeError('no word')
# Positive braid relations and cyclic conjugation, with predecessor certificate.
from collections import deque
start=tuple(word);target=(1,2,3)*5;Q=deque([start]);prev={start:None};reason={}
while Q:
 a=Q.popleft()
 if a==target:break
 neighbors=[]
 for k in range(len(a)-1):
  if abs(a[k]-a[k+1])>1:neighbors.append((a[:k]+(a[k+1],a[k])+a[k+2:],['commute',k]))
 for k in range(len(a)-2):
  if a[k]==a[k+2] and abs(a[k]-a[k+1])==1:neighbors.append((a[:k]+(a[k+1],a[k],a[k+1])+a[k+3:],['braid',k]))
 neighbors.append((a[1:]+a[:1],['cyclic',1]))
 for b,r in neighbors:
  if b not in prev:prev[b]=a;reason[b]=r;Q.append(b)
else:raise RuntimeError(('no braid connection',len(prev)))
path=[];a=target
while prev[a] is not None:path.append({'word':a,'move':reason[a]});a=prev[a]
path.reverse();print('states',len(prev),'certificate',path)
import json
out={'grid_n':g['n'],'O_cols':g['O_cols'],'X_cols':g['X_cols'],'initial_braid_word':word,'gauss_match':eq,'braid_relation_certificate':path,'target_braid_word':target,'visited_braid_words':len(prev)}
open('research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/epsilon/torus45-braid-certificate.json','w').write(json.dumps(out,indent=2)+'\n')
