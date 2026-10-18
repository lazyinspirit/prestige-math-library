"""Exact all-label Ising coherence and periodic two-sector diagnostics."""
from itertools import product
import json
import sympy as S

D=2
labels=(0,1,D)
beta=S.symbols('beta',nonzero=True)
def fusion(a,b):
    if a==D and b==D:return (0,1)
    if a==D or b==D:return (D,)
    return (a^b,)

def assoc(a,b,c,d,f,e,kappa):
    if e not in fusion(a,b) or d not in fusion(e,c) or f not in fusion(b,c) or d not in fusion(a,f):return 0
    if a==b==c==D:return kappa/S.sqrt(2)*(-1)**(e*f)
    if a!=D and b==D and c!=D:return (-1)**(a*c)
    if a==D and b!=D and c==D:return (-1)**(b*d)
    return 1

def crossing(a,b,c):
    if a==D and b==D:return beta*(S.I**(-c))
    if a==D:return S.I**b
    if b==D:return S.I**a
    return (-1)**(a*b)

# A state is a leaf label or (output,left_state,right_state).
def output(x):return x if isinstance(x,int) else x[0]
def states(tree):
    if isinstance(tree,int):return [tree]
    return [(c,a,b) for a in states(tree[0]) for b in states(tree[1]) for c in fusion(output(a),output(b))]

def local_rotate(x,kappa,inverse=False):
    if not inverse:
        d,ab,c=x;e,a,b=ab
        return [((d,a,(f,b,c)),assoc(output(a),output(b),output(c),d,f,e,kappa)) for f in fusion(output(b),output(c)) if d in fusion(output(a),f)]
    d,a,bc=x;f,b,c=bc
    return [((d,(e,a,b),c),assoc(output(a),output(b),output(c),d,f,e,kappa)) for e in fusion(output(a),output(b)) if d in fusion(e,output(c))]

def at_path(x,path,action):
    if not path:return action(x)
    d,a,b=x
    if path[0]==0:return [((d,y,b),v) for y,v in at_path(a,path[1:],action)]
    return [((d,a,y),v) for y,v in at_path(b,path[1:],action)]

def apply(vector,path,action):
    answer={}
    for x,c in vector.items():
        for y,v in at_path(x,path,action):answer[y]=S.expand(answer.get(y,0)+c*v)
    return answer

def rotated(vector,path,kappa,inverse=False):return apply(vector,path,lambda x:local_rotate(x,kappa,inverse))
def swapped(vector,path):return apply(vector,path,lambda x:[((x[0],x[2],x[1]),crossing(output(x[1]),output(x[2]),x[0]))])
def normalize(x,kappa):
    x=S.cancel(x);num,den=S.fraction(x)
    return S.simplify(S.rem(num,S.Poly(beta**2-kappa*(1+S.I)/S.sqrt(2),beta).as_expr(),beta)/den)
def equal(v,w,kappa):return all(normalize(v.get(x,0)-w.get(x,0),kappa)==0 for x in set(v)|set(w))

counts={}
pivotal=[]
for kappa in (-1,1):
    pent=hex1=hex2=0
    for a,b,c,d in product(labels,repeat=4):
        for state in states((((a,b),c),d)):
            v={state:S.Integer(1)}
            short=rotated(rotated(v,(),kappa),(),kappa)
            long=rotated(rotated(rotated(v,(0,),kappa),(),kappa),(1,),kappa)
            assert equal(short,long,kappa),(kappa,'pentagon',a,b,c,d,state,short,long)
            pent+=1
    for a,b,c in product(labels,repeat=3):
        for state in states((a,(b,c))):
            v={state:S.Integer(1)};direct=swapped(v,())
            route=rotated(v,(),kappa,True)
            route=swapped(route,(0,));route=rotated(route,(),kappa)
            route=swapped(route,(1,));route=rotated(route,(),kappa,True)
            assert equal(direct,route,kappa),(kappa,'hexagon1',a,b,c,state,direct,route)
            hex1+=1
        for state in states(((a,b),c)):
            v={state:S.Integer(1)};direct=swapped(v,())
            route=rotated(v,(),kappa);route=swapped(route,(1,))
            route=rotated(route,(),kappa,True);route=swapped(route,(0,));route=rotated(route,(),kappa)
            assert equal(direct,route,kappa),(kappa,'hexagon2',a,b,c,state,direct,route)
            hex2+=1
    counts[str(kappa)]={'pentagon_basis_columns':pent,'first_hexagon_basis_columns':hex1,'second_hexagon_basis_columns':hex2}
    dim=lambda a:S.sqrt(2) if a==D else S.Integer(1)
    fs=lambda a:kappa if a==D else 1
    duals={}
    for a,b in product(labels,repeat=2):
        for c in fusion(a,b):
            factor=fs(a)*fs(b)/S.Integer(fs(c))*S.sqrt(dim(a)*dim(b)/dim(c))
            factor*=assoc(b,a,c,0,b,c,kappa)*assoc(a,a,b,b,c,0,kappa)
            duals[a,b,c]=S.simplify(factor)
    for (a,b,c),qab in duals.items():
        nu=S.simplify(duals[b,a,c]/qab)
        assert nu==1
        assert fs(c)==nu*fs(a)*fs(b)
        pivotal.append({'kappa':kappa,'a':a,'b':b,'c':c,'dual_tensorator':str(qab),'double_dual_tensorator':str(nu),'j_c':fs(c),'j_a_j_b':fs(a)*fs(b)})

periodic=[]
for N in range(1,7):
    size=2**N
    bits=lambda b:[(b>>(N-1-j))&1 for j in range(N)]
    def number(v):
        out=0
        for x in v:out=2*out+x
        return out
    C=lambda b:number(bits(b)[1:]+bits(b)[:1])
    Q=lambda b:b^(size-1)
    X=lambda b,j:b^(1<<(N-1-j))
    Z=lambda b,j:(-1)**(bits(b)[j]+bits(b)[(j+1)%N])
    W=[[(-1)**sum(bits(c)[j]*(bits(b)[j-1]+bits(b)[j]) for j in range(N)) for b in range(size)] for c in range(size)]
    assert all(W[b][c]==W[c][C(b)] for c in range(size) for b in range(size)) # K*=KC
    assert all(W[Q(c)][b]==W[c][b]==W[c][Q(b)] for c in range(size) for b in range(size))
    for c in range(size):
        for b in range(size):
            assert sum(W[x][c]*W[x][b] for x in range(size))==size*((c==b)+(c==Q(b)))
            assert sum(W[c][x]*W[b][x] for x in range(size))==size*((c==b)+(c==Q(b)))
            for j in range(N):
                assert W[c][X(b,j)]==Z(c,j)*W[c][b]
                assert W[c][b]*Z(b,j)==W[X(c,(j+1)%N)][b]
            if N<=4:
                xb=tuple(z for bit in bits(b) for z in (D,bit))
                xc=tuple(z for bit in bits(c) for z in (bit,D))
                for kappa in (-1,1):
                    direct=S.prod(assoc(D,xb[i],D,xc[(i+1)%(2*N)],xb[(i+1)%(2*N)],xc[i],kappa) for i in range(2*N))
                    assert S.simplify(direct-kappa**N*W[c][b]/S.sqrt(size))==0
    periodic.append({'N':N,'sector_dimension':size,'full_dimension':2*size,'checks':'exact integer Fourier orthogonality, wraparound local intertwining, K*=KC, QK=KQ=K'})

print(json.dumps({'coherence':counts,'pivotal_tensorator_channels':pivotal,'field_relations':'sqrt(2)^2=2; beta^2=kappa(1+i)/sqrt(2); i^2=-1','periodic':periodic,'scope':'All simple labels and all admissible fusion-index columns checked exactly; finite corroboration of manuscript algebraic proof.'},indent=2))
