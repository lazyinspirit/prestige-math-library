import itertools,pathlib,sympy as a
from sympy.parsing.sympy_parser import parse_expr,standard_transformations,implicit_multiplication_application
u,Q,v=a.symbols('u Q v'); names=['1','s','t','st','ts','w_0']; words=['','s','t','st','ts','sts']
identity=(0,1,2);gs={'s':(1,0,2),'t':(0,2,1)}
def mul(x,y):return tuple(x[y[i]] for i in range(3))
def value(word):
 p=identity
 for ch in word:p=mul(p,gs[ch])
 return p
ps=[value(w) for w in words]; idx={p:i for i,p in enumerate(ps)}
def length(p):return sum(p[i]>p[j] for i in range(3) for j in range(i+1,3))
def op(ch,d,mode='T'):
 out={}
 for j,c in d.items():
  p=mul(gs[ch],ps[j]);i=idx[p];down=length(p)<length(ps[j]);out[i]=out.get(i,0)+c*(Q if mode=='S' and down else 1)
  if down:out[j]=out.get(j,0)+c*(Q-1 if mode=='S' else u)
 return {i:a.expand(c) for i,c in out.items()}
def prod(x,y,mode='T'):
 d={y:1}
 for ch in reversed(words[x]):d=op(ch,d,mode)
 return d
Ts=a.symbols('A B C D E F');local={'u':u,'Q':Q,**{str(t):t for i,t in enumerate(Ts)}}
s=pathlib.Path('items/ex-hh-s3-hecke-multiplication-table-in-both-normalizations.md').read_text();tab=s.split('$$\\begin{array}')[1].split('\\end{array}$$')[0]
rows=tab.split('\\\\')[1:];rows[0]=rows[0].replace('\\hline','')
for i,row in enumerate(rows):
 cells=row.split('&')[1:]
 for j,raw in enumerate(cells):
  z=raw.strip()
  for k,n in enumerate(names):z=z.replace('T_{'+n+'}',str(Ts[k])).replace('T_'+n,str(Ts[k]))
  z=z.replace('^','**');got=parse_expr(z,local_dict=local,transformations=standard_transformations+(implicit_multiplication_application,));expected=sum(c*Ts[k] for k,c in prod(i,j).items())
  assert a.expand(got-expected)==0,(i,j,got,expected)
print('Normalized table: 36/36 entries independently recomputed from permutation lengths.')
target={0:Q**3,1:Q**3-Q**2,2:Q**3-Q**2,3:Q**3-2*Q**2+Q,4:Q**3-2*Q**2+Q,5:Q**3-2*Q**2+2*Q-1}
assert prod(5,5,'S')==target
for i,j in itertools.product(range(6),repeat=2):
 d=prod(i,j);assert {k:a.expand(c).subs(u,0) for k,c in d.items() if a.expand(c).subs(u,0)!=0}=={idx[mul(ps[i],ps[j])]:1}
print('Multiplicative w0 square verified; v=1 specialization: 36/36 group products.')
