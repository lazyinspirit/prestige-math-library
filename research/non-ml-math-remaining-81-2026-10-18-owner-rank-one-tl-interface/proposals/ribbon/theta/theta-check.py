"""Exact diagnostics from JW matrices and nested cups, not the norm formula."""
import itertools,json
import sympy as S

def quantum(q,j):
    return sum(q**(j-1-2*i) for i in range(j)) if j else S.Integer(0)

def factorial(q,j):
    return S.prod(quantum(q,i) for i in range(1,j+1))

def projectors(q,max_a):
    U=S.Matrix([[0,0,0,0],[0,q,-1,0],[0,-1,1/q,0],[0,0,0,0]])
    ps=[S.eye(1),S.eye(2)]
    for a in range(1,max_a):
        P=S.kronecker_product(ps[a],S.eye(2))
        Ua=S.kronecker_product(S.eye(2**(a-1)),U)
        ps.append((P-quantum(q,a)/quantum(q,a+1)*P*Ua*P).applyfunc(S.cancel))
    return ps

def diagram(q,ps,m,n,p):
    r,s,t=m+p,m+n,n+p
    A=S.zeros(2**r,2**s)
    locations=[]
    for x in range(2**m):
        bits=[(x>>(m-1-i))&1 for i in range(m)]
        j=sum(bits)
        revcomp=0
        for bit in reversed(bits): revcomp=2*revcomp+1-bit
        row,col=x,revcomp*2**n
        A[row,col]=(-1/q)**j
        locations.append((row,col,(-q)**(m-j)))
    image=ps[r]*A*ps[s].T
    L=sum(coef*image[row,col] for row,col,coef in locations)
    return S.cancel((-1)**m*quantum(q,t+1)*L)

def formula(q,m,n,p):
    return S.cancel(factorial(q,m)*factorial(q,n)*factorial(q,p)*factorial(q,m+n+p+1)
        /(factorial(q,m+n)*factorial(q,n+p)*factorial(q,m+p)))

checks=[]
for q in [S.Integer(2),S.Rational(3,2)]:
    ps=projectors(q,5)
    for m,n,p in itertools.product(range(4),repeat=3):
        if max(m+n,n+p,m+p)>5:continue
        actual=diagram(q,ps,m,n,p)
        expected=formula(q,m,n,p)
        assert actual==expected,(q,m,n,p,actual,expected)
        if p:
            lhs=quantum(q,m+p)*quantum(q,n+p)*actual
            rhs=quantum(q,p)*quantum(q,m+n+p+1)*diagram(q,ps,m,n,p-1)
            assert S.cancel(lhs-rhs)==0
        checks.append({'q':str(q),'m':m,'n':n,'p':p,'theta':str(actual)})

# The smallest retained forbidden-level theta is (r,s,t)=(2,2,2), ell=4.
q=(1+S.I)/S.sqrt(2)
ps=projectors(q,2)
zero=S.simplify(diagram(q,ps,1,1,1))
positive=S.simplify(diagram(q,ps,1,0,1))
assert zero==0,zero
assert positive==1,positive

print(json.dumps({'method':'independent JW-recursion matrices, nested cup/cap contractions; exact arithmetic',
 'generic_diagnostic_count':len(checks),'generic_diagnostics':checks,
 'root_checks':[{'ell':4,'labels':[2,2,2],'theta':str(zero),'level':'forbidden, h=3'},
                {'ell':4,'labels':[2,1,1],'theta':str(positive),'level':'retained, h=2'}],
 'scope':'finite diagnostics only; general proof is theta-proof.md'},indent=2))
