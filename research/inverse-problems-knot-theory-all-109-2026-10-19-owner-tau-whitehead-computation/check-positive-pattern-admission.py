"""Finite signed-ribbon checks for the explicit positive-band admission.
Geometric compression disks and extension are proved in the accompanying source.
"""
from pathlib import Path
from copy import deepcopy
base=Path(__file__).parent
exec((base/'eftekhary-cancel-ribbon-development.py').read_text().split("c=deepcopy(C);s=signs")[0])
c=deepcopy(C);s={k:-v for k,v in (signs|{'Q':-1,'n':1}).items()}
assert ribbon(c,s)[0]==5 and len(ribbon(c,s)[1])==10
for ai,bj,steps,g in [('A3','B3',[('q',1)],4),('A4','B4',[('h',-1),('k',1)],3),('A2','B2',[('g',1),('l',-1)],2)]:
 c,s=cancel(c,s,ai,bj,steps);assert ribbon(c,s)[0]==g
for u,v in [("a'_q_g","b'_h"),('e_q_g','d_h'),('a_q_g','b_h')]:
 fs=ribbon(c,s)[1];assert any(len(f)==2 and {t[0] for t in f}=={u,v} for f in fs)
 for k in c:c[k]=[x for x in c[k] if x not in [u,v]]
 del s[u];del s[v]
ren={'d_k':'D','e_q_l':'E','r_g':'T','r_l':'R','b_k':'B','a_q_l':'A',"a'_q_l":"A'","b'_k":"B'"}
c={k:[ren.get(v,v) for v in vs] for k,vs in c.items()};s={ren.get(v,v):t for v,t in s.items()}
assert ribbon(c,s)[0]==2 and len(ribbon(c,s)[1])==9
product={'G':['Q','n'],'L':['Q','L3','L2','L1','L4'],'A1':['u0','u1','T','v0','v1'],'N':['T'],'B1':['u0','L1','v0','L2','u1','L3','v1','L4','n']}
sp={'Q':1,'n':1,'T':-1,'u0':-1,'u1':1,'v0':1,'v1':-1,'L1':1,'L2':-1,'L3':1,'L4':-1}
mp={'Q':'Q','n':'n','T':'T','u0':'m','u1':'R','v0':'E','v1':'D','L1':"A'",'L2':'A','L3':'B','L4':"B'"}
ep={'G':1,'L':1,'A1':-1,'N':1,'B1':-1}
for k,vs in product.items():
 got=[mp[v] for v in vs];want=c[k][::ep[k]]
 assert any(got==want[j:]+want[:j] for j in range(len(want))), (k,got,want)
for v,t in sp.items():
 ks=[k for k,vs in product.items() if v in vs];assert len(ks)==2
 assert s[mp[v]]==t*ep[ks[0]]*ep[ks[1]],v
print('PASS: genus5/10faces; three cancellations; three literal face bigons; genus2/9faces; every product port/cycle/sign including longitude and meridian')
