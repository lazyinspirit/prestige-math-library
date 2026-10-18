from fractions import Fraction as Q
A=Q(2); delta=-A*A-A**-2

def diag_id(n): return tuple(sorted((i,n+i) for i in range(n)))
def components(edges,outer):
 adj={}
 for x,y in edges:adj.setdefault(x,[]).append(y);adj.setdefault(y,[]).append(x)
 seen=set();pairs=[];loops=0
 for x in adj:
  if x in seen:continue
  todo=[x];seen.add(x);out=[]
  while todo:
   y=todo.pop()
   if y in outer:out.append(outer[y])
   for z in adj[y]:
    if z not in seen:seen.add(z);todo.append(z)
  if not out:loops+=1
  else:
   assert len(out)==2,(edges,out)
   pairs.append(tuple(sorted(out)))
 return tuple(sorted(pairs)),loops

def stack(d,e,n):
 ed=[]
 for x,y in d:ed.append(((0,x) if x<n else (1,x-n),(0,y) if y<n else (1,y-n)))
 for x,y in e:ed.append(((1,x) if x<n else (2,x-n),(1,y) if y<n else (2,y-n)))
 outer={(0,i):i for i in range(n)}|{(2,i):n+i for i in range(n)}
 return components(ed,outer)

def linear(d,c=Q(1)):return {d:c} if c else {}
def plus(x,y):
 out=x.copy()
 for d,c in y.items():out[d]=out.get(d,Q(0))+c
 return {d:c for d,c in out.items() if c}
def scale(c,x):return {d:c*v for d,v in x.items() if c*v}
def mul(x,y,n):
 out={}
 for d,c in x.items():
  for e,k in y.items():
   f,l=stack(d,e,n);out[f]=out.get(f,Q(0))+c*k*delta**l
 return {d:c for d,c in out.items() if c}
def tensor(x,y,a,b,c,d):
 # x:a->b, y:c->d; diagram endpoints use outputs then inputs.
 out={}
 for dx,v in x.items():
  for dy,w in y.items():
   tx=lambda z:z if z<b else b+d+(z-b)
   ty=lambda z:b+z if z<d else b+d+a+(z-d)
   f=tuple(sorted([tuple(sorted((tx(i),tx(j)))) for i,j in dx]+[tuple(sorted((ty(i),ty(j)))) for i,j in dy]));out[f]=out.get(f,Q(0))+v*w
 return {f:v for f,v in out.items() if v}
def ptr(x,n):
 out={}
 outer={i:i for i in range(n-1)}|{n+i:n-1+i for i in range(n-1)}
 for d,c in x.items():
  e,l=components(list(d)+[(n-1,2*n-1)],outer);out[e]=out.get(e,Q(0))+c*delta**l
 return {d:c for d,c in out.items() if c}
def traces(x,n,t):
 for k in range(t):x=ptr(x,n-k)
 return x

def U(n,i):
 pairs=[(j,n+j) for j in range(n) if j not in [i,i+1]]+[(i,i+1),(n+i,n+i+1)]
 return linear(tuple(sorted(pairs)))
def block(r,t,inverse=False):
 n=r+t;out=linear(diag_id(n));word=[i+j for i in range(r-1,-1,-1) for j in range(t)]
 if inverse:word=word[::-1]
 for i in word:
  c=plus(scale(A**-1 if inverse else A,linear(diag_id(n))),scale(A if inverse else A**-1,U(n,i)))
  out=mul(c,out,n)
 return out

def twist(n,inverse=False):
 if n==0:return linear(())
 if n==1:return scale((-A**3)**(-1 if inverse else 1),linear(diag_id(1)))
 lower=tensor(twist(n-1,inverse),twist(1,inverse),n-1,n-1,1,1)
 if inverse:return mul(mul(lower,block(n-1,1,True),n),block(1,n-1,True),n)
 return mul(mul(block(1,n-1),block(n-1,1),n),lower,n)

for t in [1,2]:
 assert traces(block(t,t),2*t,t)==twist(t)
 assert mul(twist(t),twist(t,True),t)==linear(diag_id(t))

# Arbitrary equal-size diagrams at n=t=2.
id2=linear(diag_id(2));u2=U(2,0)
checks=0
for a in [id2,u2]:
 for b in [id2,u2]:
  for F in [id2,u2,plus(id2,scale(Q(-1,3),u2))]:
   X=mul(mul(tensor(a,b,2,2,2,2),tensor(mul(F,twist(2,True),2),id2,2,2,2,2),4),block(2,2),4)
   assert traces(X,4,2)==mul(mul(a,F,2),b,2)
   checks+=1

# Unequal sizes: a:3->1 is cap on first pair, b:1->3 is cup on first pair.
a=linear(((0,3),(1,2)));b=linear(((0,1),(2,3)))
for F in [linear(diag_id(3)),U(3,0),U(3,1)]:
 X=mul(mul(tensor(a,b,3,1,1,3),tensor(mul(F,twist(3,True),3),linear(diag_id(1)),3,3,1,1),4),block(1,3),4)
 # Compose unequal maps by explicit layered graph.
 def compose(x,y,input_y,mid,output_x):
  out={}
  for dx,v in x.items():
   for dy,w in y.items():
    ed=[]
    for i,j in dx:ed.append(((0,i) if i<output_x else (1,i-output_x),(0,j) if j<output_x else (1,j-output_x)))
    for i,j in dy:ed.append(((1,i) if i<mid else (2,i-mid),(1,j) if j<mid else (2,j-mid)))
    outer={(0,i):i for i in range(output_x)}|{(2,i):output_x+i for i in range(input_y)}
    d,l=components(ed,outer);out[d]=out.get(d,Q(0))+v*w*delta**l
  return {d:c for d,c in out.items() if c}
 expected=compose(a,compose(F,b,1,3,3),1,3,1)
 assert traces(X,4,3)==expected
 checks+=1
print(f'PASS: exact planar TL at A=2, delta=-17/4: curl identities t=1,2; twist inverses; {checks} arbitrary aFb factorization checks, including n=1,t=3. This is finite corroboration; the tower/trace argument is the general proof.')
