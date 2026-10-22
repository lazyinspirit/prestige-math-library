# DEVELOPMENT: exact ribbon slides and face bigons; positive Whitehead-pattern admission still requires the final product-model comparison.
from pathlib import Path
exec((Path(__file__).with_name('eftekhary-unified-ribbon-development.py')).read_text().split("if __name__=='__main__':")[0])
from copy import deepcopy
A={'G','L','A1','A2','A3','A4'};B={'N','B1','B2','B3','B4'}
def cancel(c,s,ai,bj,steps):
 c=deepcopy(c);s=s.copy();base=next(v for v in c[ai] if v in c[bj]);oldb=c[bj][:]
 for p,delta in steps:
  assert p in c[ai] and c[ai][(c[ai].index(p)+delta)%len(c[ai])]==base
  bk=next(k for k in B if k!=bj and k in c and p in c[k]);sigma=-s[p]*s[base];eps=delta*s[base]
  jb=oldb.index(base);run=[oldb[(jb+sigma*j)%len(oldb)] for j in range(1,len(oldb))]
  copies={v:v+'_'+p for v in run}
  for v in run:
   ak=next(k for k in A if k in c and v in c[k]);i=c[ak].index(v);rho=-eps*s[v]
   c[ak].insert(i+int(rho>0),copies[v]);s[copies[v]]=sigma*s[v]
  i=c[bk].index(p);c[bk][i:i+1]=[copies[v] for v in run]
  c[ai].remove(p);del s[p]
 for v in oldb:
  for k in A:
   if k in c and v in c[k]:c[k].remove(v)
  s.pop(v,None)
 del c[ai];del c[bj]
 return c,s
c=deepcopy(C);s=signs|{'Q':-1,'n':1}
for ai,bj,steps in [('A3','B3',[('q',1)]),('A4','B4',[('h',-1),('k',1)]),('A2','B2',[('g',1),('l',-1)])]:
 c,s=cancel(c,s,ai,bj,steps);genus,fs=ribbon(c,s);print(ai,bj,'genus',genus,'faces',len(fs));print(c)
# Verify the three intended N bigons are actual length-two face cycles before deleting them.
def delete_bigon(c,s,u,v):
 g,fs=ribbon(c,s);hits=[f for f in fs if len(f)==2 and set(t[0] for t in f)=={u,v}]
 assert hits,(u,v,'not a face')
 c=deepcopy(c);s=s.copy()
 for k in c:c[k]=[x for x in c[k] if x not in [u,v]]
 s.pop(u);s.pop(v)
 assert ribbon(c,s)[0]==g
 return c,s
for u,v in [('a\'_q_g','b\'_h'),('e_q_g','d_h'),('a_q_g','b_h')]:
 c,s=delete_bigon(c,s,u,v);print('bigon',u,v,'PASS')
print('FINAL',c)
