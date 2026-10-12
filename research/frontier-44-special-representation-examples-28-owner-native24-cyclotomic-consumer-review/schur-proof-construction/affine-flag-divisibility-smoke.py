"""Symbolic rank-three flag divisibility smoke; not a general proof/audit."""
from itertools import permutations
import json
import sympy as s

n=3
q=s.symbols('q')
X=s.symbols('X1:4')
U=s.symbols('U1:4')
identity=tuple(range(n))
def length(w):return sum(w[i]>w[j] for i in range(n) for j in range(i+1,n))
def left_simple(i,w):return tuple(i+1 if a==i else i if a==i+1 else a for a in w)
def swap_poly(f,i):return s.sympify(f).xreplace({X[i]:X[i+1],X[i+1]:X[i]})
def accumulate(out,w,f):out[w]=s.expand(out.get(w,0)+f)
def left_T(i,terms):
    out={}
    for w,f in terms.items():
        sf=swap_poly(f,i)
        correction=s.cancel((q-1)*X[i+1]*(f-sf)/(X[i+1]-X[i]))
        accumulate(out,w,correction)
        v=left_simple(i,w)
        if length(v)>length(w):accumulate(out,v,sf)
        else:
            accumulate(out,v,q*sf)
            accumulate(out,w,(q-1)*sf)
    return {w:s.expand(f) for w,f in out.items() if f!=0}
def reduced(w):
    if w==identity:return []
    for i in range(n-1):
        v=left_simple(i,w)
        if length(v)<length(w):return [i]+reduced(v)
    raise AssertionError(w)
def action(w,f):
    terms={identity:f}
    for i in reversed(reduced(w)):terms=left_T(i,terms)
    return terms
profiles=[(a,b) for a in range(n+1) for b in range(a,n+1)]
def u(profile):
    a,b=profile
    return s.prod(X[j]-U[1] for j in range(a))*s.prod(X[j]-U[2] for j in range(b))
checks=0
for shape in profiles:
    for typ in profiles:
        for w in permutations(range(n)):
            if any(sum(j<shape[k] and w[j]<typ[k] for j in range(n))!=typ[k] for k in range(2)):continue
            divisor=u(typ)
            for f in action(w,u(shape)).values():
                numerator,denominator=s.fraction(s.cancel(f/divisor))
                assert not any(denominator.has(x) for x in X),(shape,typ,w,f,divisor)
                checks+=1
print(json.dumps({'scope':'universal symbolic affine rank3 level3, all flagged permutations and component-size profiles','coefficient_divisibility_checks':checks,'passed':True,'limitation':'finite symbolic smoke; not an independent audit or proof of universal S1'}))
