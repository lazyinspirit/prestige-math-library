# Direct exact rational Lee-cube computation for the authentic Figure 1 PD.
# Python standard library only; no imported knot table or homology data.
import json,itertools,collections,time
from fractions import Fraction
pd=[[20, 15, 21, 16], [21, 6, 0, 7], [14, 19, 15, 20], [16, 13, 17, 14], [7, 12, 8, 13], [5, 11, 6, 10], [1, 9, 2, 8], [11, 1, 12, 0], [9, 5, 10, 4], [18, 4, 19, 3], [2, 18, 3, 17]];n=len(pd);nm=5;np=n-nm
states={};basis={};qdeg=[];hdeg=[]
for st in range(1<<n):
 h=st.bit_count()-nm
 if h not in range(-2,3):continue
 parent=list(range(2*n))
 def root(a):
  while parent[a]!=a:parent[a]=parent[parent[a]];a=parent[a]
  return a
 for c,arcs in enumerate(pd):
  ps=[(0,1),(2,3)] if not st>>c&1 else [(0,3),(1,2)]
  for i,j in ps:parent[root(arcs[i])]=root(arcs[j])
 groups=collections.defaultdict(set)
 for a in range(2*n):groups[root(a)].add(a)
 circles=sorted(groups.values(),key=min);ci={a:i for i,g in enumerate(circles) for a in g};states[st]=(circles,ci)
 for lab in range(1<<len(circles)):
  i=len(qdeg);basis[(st,lab)]=i;qdeg.append(st.bit_count()+np-2*nm+len(circles)-2*lab.bit_count());hdeg.append(h)
N=len(qdeg);outs=[{} for i in range(N)];ins=[{} for i in range(N)]
def add(a,b,v):
 val=outs[a].get(b,0)+v
 if val:outs[a][b]=val;ins[b][a]=val
 else:outs[a].pop(b,None);ins[b].pop(a,None)
for st,(cs,ci) in states.items():
 for c,arcs in enumerate(pd):
  if st>>c&1 or st|1<<c not in states:continue
  tt=st|1<<c;ds,di=states[tt];affected_s=sorted(set(ci[a] for a in arcs));affected_t=sorted(set(di[a] for a in arcs));sgn=(-1)**((st&((1<<c)-1)).bit_count())
  merge=len(cs)>len(ds)
  # Identify changed circles by which source circle is split or target circle is merged.
  if merge:
   target=next(i for i,g in enumerate(ds) if len(set(ci[a] for a in g))==2);ss=sorted(set(ci[a] for a in ds[target]));unchanged=[(j,ci[next(iter(g))]) for j,g in enumerate(ds) if j!=target]
  else:
   source=next(i for i,g in enumerate(cs) if len(set(di[a] for a in g))==2);ts=sorted(set(di[a] for a in cs[source]));unchanged=[(j,ci[next(iter(g))]) for j,g in enumerate(ds) if j not in ts]
  for lab in range(1<<len(cs)):
   result=sum(((lab>>i)&1)<<j for j,i in unchanged)
   if merge:
    bit=((lab>>ss[0])&1)^((lab>>ss[1])&1);outputs=[result|(bit<<target)]
   else:
    outputs=[result|(1<<ts[0]),result|(1<<ts[1])] if not lab>>source&1 else [result,result|(1<<ts[0])|(1<<ts[1])]
   for dst in outputs:add(basis[st,lab],basis[tt,dst],sgn)
print('basis',N,'arrows',sum(map(len,outs)),flush=True)
# Verify the complete initial differential squares to zero in the truncated complex.
for a, outgoing in enumerate(outs):
    composition=collections.defaultdict(int)
    for b,x in outgoing.items():
        for c,y in outs[b].items():composition[c]+=x*y
    assert all(v==0 for v in composition.values()), (a,composition)
# Check each edge filtration shift and use exact rational Schur cancellation of q-degree0 arrows.
assert all(qdeg[b]-qdeg[a] in (0,4) for a,o in enumerate(outs) for b in o)
alive=[True]*N;queue=collections.deque((a,b) for a,o in enumerate(outs) for b in o if qdeg[a]==qdeg[b]);count=0
while queue:
 a,b=queue.popleft()
 if not alive[a] or not alive[b] or b not in outs[a] or qdeg[a]!=qdeg[b]:continue
 u=outs[a][b];pre=list(ins[b].items());post=list(outs[a].items())
 for c,x in pre:
  if c==a:continue
  for d,y in post:
   if d==b:continue
   add(c,d,-Fraction(x*y,u))
   if qdeg[c]==qdeg[d] and d in outs[c]:queue.append((c,d))
 for z in [a,b]:
  for t in list(outs[z]):ins[t].pop(z,None)
  for f in list(ins[z]):outs[f].pop(z,None)
  outs[z].clear();ins[z].clear();alive[z]=False
 count+=1
 if count%2000==0:print('cancelled',count,flush=True)
kh=collections.Counter((hdeg[i],qdeg[i]) for i in range(N) if alive[i]);print('Kh relevant',sorted(kh.items()),flush=True)
block=[]
for a in range(N):
 if alive[a] and (hdeg[a],qdeg[a])==(-1,-1):
  for b,v in outs[a].items():
   if (hdeg[b],qdeg[b])==(0,3):block.append((a,b,str(v)))
print('d4(-1,-1)->(0,3)',block,flush=True)
assert [z[2] for z in block]==['2/3']
assert {k:v for k,v in kh.items() if -1<=k[0]<=1}=={(-1,-3):1,(-1,-1):1,(-1,1):2,(0,-1):2,(0,1):3,(0,3):1,(1,1):1,(1,3):2,(1,5):1}
print(json.dumps({'basis_size':N,'cancellations_q0':count,'Kh':[(*k,v) for k,v in sorted(kh.items())],'d4':block}))
