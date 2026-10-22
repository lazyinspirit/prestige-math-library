from collections import defaultdict
C={'G':['Q','n'],'L':['Q','b','a',"a'","b'"],'A1':['d','e','r','m'],'A2':['g','p','l'],'A3':['f','q'],'A4':['c','h','k'],'N':['g','h'],'B1':['m','n','k','l'],'B2':['p','q','r'],'B3':['e','a','f',"a'"],'B4':['d','b','c',"b'"]}
signs={'a':1,"a'":-1,'b':1,"b'":-1,'c':1,'d':1,'e':1,'f':1,'g':1,'h':-1,'k':-1,'l':1,'m':1,'p':1,'q':-1,'r':1}
def ribbon(c,s):
 inc=defaultdict(list);edge={}
 for name,vs in c.items():
  for j,v in enumerate(vs):
   inc[v].append(name)
   edge[v,name,1]=vs[(j+1)%len(vs)],name,-1
   edge[v,name,-1]=vs[(j-1)%len(vs)],name,1
 rot={}
 for v,ns in inc.items():
  assert len(ns)==2
  a,b=ns;seq=[(v,a,1),(v,b,s[v]),(v,a,-1),(v,b,-s[v])]
  for j,d in enumerate(seq):rot[d]=seq[(j+1)%4]
 fs=[];seen=set()
 for d in edge:
  if d in seen:continue
  f=[];x=d
  while x not in seen:seen.add(x);f.append(x);x=rot[edge[x]]
  fs.append(f)
 return (2+len(inc)-len(fs))//2,fs

if __name__=='__main__':
 import json
 s=signs|{'Q':-1,'n':1}
 genus,faces=ribbon(C,s)
 assert genus==5 and len(faces)==10
 # Deleting either distinguished curve gives the two actual finite ribbon diagrams.
 model={}
 for excluded,expected in [('G',(5,8)),('L',(5,5))]:
  removed=set(C[excluded]);curves={k:[v for v in vs if v not in removed] for k,vs in C.items() if k!=excluded}
  curves={k:vs for k,vs in curves.items() if vs}
  sg={v:t for v,t in s.items() if any(v in vs for vs in curves.values())}
  g,fs=ribbon(curves,sg);assert (g,len(fs))==expected
  model[excluded]={'genus':g,'faces':fs}
 # Finite free-word consistency check for the proposed three handle cancellations.
 def inverse(w):return ''.join(t.swapcase() for t in w[::-1])
 def reduce(w):
  stack=[]
  for t in w:
   if stack and stack[-1]==t.swapcase():stack.pop()
   else:stack.append(t)
  return ''.join(stack)
 def cyclic(w):
  w=reduce(w)
  while len(w)>1 and w[0]==w[-1].swapcase():w=w[1:-1]
  return w
 # X=x^-1, V=v^-1. B3=x v x3 V; B4=x v x4 V; B2=x2 x3^-1 x.
 x3='VXv';x4=x3;x2='X'+x3
 assert reduce('xv'+x3+'V')=='' and reduce('xv'+x4+'V')==''
 assert reduce(x2+inverse(x3)+'x')==''
 # B1=x u x4^-1 x2, and the remaining marked inner meridian N=x2 x4^-1.
 outer_u=reduce('X'+inverse(x2)+x4)
 assert reduce('x'+outer_u+inverse(x4)+x2)==''
 assert reduce(x2+inverse(x4))=='X'
 # Set a=v, b=x^-1. This is ONLY an algebraic relator comparison, not knot recognition.
 u=outer_u.translate(str.maketrans('xXvV','BbaA'))
 relator=cyclic(u+'a'+inverse(u)+'A')
 schubert_word='baBABab' # epsilon_i=(-1)^floor(3i/8), i=1,...,7.
 schubert_relator=cyclic('a'+schubert_word+'A'+inverse(schubert_word))
 matches=[]
 for ia in [False,True]:
  for ib in [False,True]:
   z=''.join(t.swapcase() if (ia if t.lower()=='a' else ib) else t for t in schubert_relator)
   for reverse,z0 in [(False,z),(True,inverse(z))]:
    for shift in range(len(z0)):
     if z0[shift:]+z0[:shift]==relator:matches.append({'invert_a':ia,'invert_b':ib,'inverse_relator':reverse,'cyclic_shift':shift})
 assert matches
 word_data={'x3':x3,'x4':x4,'x2':x2,'outer_u':outer_u,'inner_meridian':'X','outer_commutator_relator_ab':relator,'schubert_8_3_relator':schubert_relator,'algebraic_matches':matches,'limitation':'No boundary-port cancellation movie, positive-clasp comparison, or geometric satellite admission is asserted.'}
 print(json.dumps({'word_consistency':word_data,'status' :'DEVELOPMENT ONLY: full ribbon candidate, NOT a certified satellite admission or source-figure identification','curves':C,'signs':s,'genus':genus,'faces':faces,'deleted_curve_models':model},indent=2))
