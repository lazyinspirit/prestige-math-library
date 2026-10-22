"""Finite H1 cancellation/selected matching certificate for the Euler-center task.
No Chern value or knot-normalization theorem is inferred by this checker.
"""
from pathlib import Path
import json
p=Path(__file__).with_name('eftekhary-cancel-ribbon-development.py');ns={'__file__':str(p)}
exec(p.read_text().split('c=deepcopy(C);s=signs')[0],ns)
C=ns['C'];removed=set(C['L']);c={k:[v for v in vs if v not in removed] for k,vs in C.items() if k!='L'}
s={v:-t for v,t in (ns['signs']|{'n':1}).items() if any(v in vs for vs in c.values())}
st=[set('ndhpf'),set('ncgrf'),set('ncgqe')];trace=[]
for ai,bj,steps,g in [('A3','B3',[('q',1)],4),('A4','B4',[('h',-1),('k',1)],3),('A2','B2',[('g',1),('l',-1)],2),('G','B1',[],1)]:
 v=next(v for v in c[ai] if v in c[bj]);out=[]
 for x in st:
  if v in x:y=x-{v}
  else:
   a=next(z for z in x if z in c[ai]);b=next(z for z in x if z in c[bj]);y=x-{a,b}|{b+'_'+a}
  out.append(y)
 c,s=ns['cancel'](c,s,ai,bj,steps);assert ns['ribbon'](c,s)[0]==g
 for x in out:
  assert all(sum(z in c[k] for z in x)==1 for k in c)
 trace.append({'cancel':[ai,bj,v],'curves':c,'states':[sorted(x) for x in out]});st=out
assert c=={'A1':['d_h','e_q_g','r_g'],'N':['r_g','e_q_g','d_h']}
assert st==[{'d_h'},{'r_g'},{'e_q_g'}]
assert s=={'d_h':-1,'r_g':1,'e_q_g':1}
g,fs=ns['ribbon'](c,s);assert sorted(map(len,fs))==[2,2,8]
W=next(i for i,f in enumerate(fs) if ('d_h','N',-1) in f)
Z=next(i for i,f in enumerate(fs) if ('e_q_g','N',1) in f)
empty=next(i for i,f in enumerate(fs) if len(f)==2 and set(d[0] for d in f)=={'r_g','d_h'})
assert W!=empty and Z!=empty and len(fs[W])==2 and len(fs[Z])==8
cert={'status':'finite selected-generator/mark transport only; actual Chern anchor supplied by separate geometric proof','trace':trace,'final_curves':c,'final_signs':s,'final_faces':fs,'explored_W_face':W,'explored_Z_face':Z,'empty_bigonal_pair':['r_g','d_h'],'surviving_point':'e_q_g','short_marked_N_edge':['e_q_g','d_h']}
Path(__file__).with_name('pattern-meridian-reduction-development.json').write_text(json.dumps(cert,indent=2)+'\n')
print('PASS four cancelling pairs; all three matching tracks; actual short N edge; mark-free R-D bigon; surviving E. Chern value not inferred.')
