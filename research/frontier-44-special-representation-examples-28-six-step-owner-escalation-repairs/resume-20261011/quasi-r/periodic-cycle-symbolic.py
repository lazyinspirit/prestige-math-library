"""Attempt an exact all-parameter Laurent positive-part cycle identity.

This treats k=3*m+c, so every fixed cyclotomic denominator divides a
power of q^24-1.  Polynomial remainders of q^(24*a*m) then have exact
finite binomial-jet formulas.  A successful identity still needs its
recorded finite-threshold cases and the mathematical state-reduction proof.
"""
import functools
import json
import pathlib
import sys
sys.path.insert(0,'/tmp/quasi-r-python-deps')
import sympy as S
q,x,m=S.symbols('q x m')
HERE=pathlib.Path(__file__).resolve().parent
data=json.loads((HERE/'periodic-transfer-matrices.json').read_text())
z=S.Symbol('z')
templates={(row['source_residue'],row['transfer']):S.Matrix(
    [[S.sympify(value) for value in line] for line in row['entries']])
    for row in data['matrices']}

def bar(expr):
    return expr.subs({q:1/q,x:1/x},simultaneous=True)

thresholds=[]
jet_orders={}
positive_valuations=[]
negative_degrees=[]

@functools.lru_cache(None)
def jet(D,a):
    degree=S.degree(D,q)
    if degree==0:
        return S.Integer(0)
    modulus=S.Poly(D,q)
    u=S.rem(q**24-1,D,q)
    power=S.Integer(1)
    total=S.Integer(1)
    for order in range(1,20):
        power=S.rem(power*u,D,q)
        if power==0:
            jet_orders[str(S.factor(D))]=order
            return S.rem(total,D,q)
        choose=S.prod(a*m-i for i in range(order))/S.factorial(order)
        total+=choose*power
    raise ValueError(('denominator-not-covered-by-q24',D))

def positive(expr):
    expr=S.cancel(expr)
    numerator,denominator=S.fraction(expr)
    denominator_terms=S.Poly(denominator,x).terms()
    assert len(denominator_terms)==1,denominator
    (denominator_power,),D0=denominator_terms[0]
    answer=S.Integer(0)
    for (power,),coefficient in S.Poly(numerator,x).terms():
        a=power-denominator_power
        fraction=S.cancel(coefficient/D0)
        N,Dfull=S.fraction(fraction)
        if N==0:
            continue
        np=S.Poly(N,q)
        dp=S.Poly(Dfull,q)
        numerator_min=min(key[0] for key,value in np.terms())
        denominator_min=min(key[0] for key,value in dp.terms())
        if a<0:
            top=np.degree()-dp.degree()
            negative_degrees.append(int(top))
            thresholds.append(max(0,top//(-24*a)+1))
            continue
        if a==0:
            quotient,remainder=S.div(N,Dfull,q)
            answer+=quotient-quotient.subs(q,0)
            continue
        thresholds.append(max(0,(1-numerator_min+denominator_min+24*a-1)//(24*a)))
        positive_valuations.append(int(numerator_min-denominator_min))
        D=S.expand(Dfull/q**denominator_min)
        # Normalize denominator to monic before the quotient/remainder split.
        leading=S.LC(S.Poly(D,q))
        D=S.expand(D/leading)
        N=S.expand(N/leading)
        if S.degree(D,q)==0:
            remainder=S.Integer(0)
        else:
            inverse=S.invert(q**denominator_min,D,q)
            remainder=S.rem(S.rem(N*inverse,D,q)*jet(D,a),D,q)
        answer+=x**a*fraction-remainder/D+remainder.subs(q,0)/D.subs(q,0)
    return S.cancel(answer)

rows=[]
for c in range(3):
    K=3*m+c
    def B(t,r):
        period,residue=divmod(t,4)
        return templates[residue,r].subs(z,x*q**(8*c+8*period))
    p=q+1/q
    h=q*q+1/(q*q)
    center=-p*((2*K-1)*h-1)/h**2
    coefficients={1:S.Matrix([0,0,0,center])}
    for t in range(2,6):
        residual=S.zeros(4,1)
        for r in range(1,min(3,t-1)+1):
            residual+=B(t-r,r)*coefficients[t-r].applyfunc(bar)
        print('class',c,'layer',t,'positive-part',flush=True)
        coefficients[t]=residual.applyfunc(positive)
    f=coefficients[5]
    actual=S.cancel(f[0]-h*f[1]+h*f[2]-h*h*f[3])
    expected=-(2*K+2)*(2*K+3)*p*((2*K+1)*h-1)
    difference=S.cancel(actual-expected)
    rows.append({'class_mod_3':c,'difference':str(S.factor(difference)),
                 'identity_zero':difference==0,
                 'required_m_at_least':max(thresholds) if thresholds else 0})
    print(json.dumps(rows[-1]),flush=True)
result={'rows':rows,'positive_coefficient_minimum_zero_valuation':min(positive_valuations),
        'negative_coefficient_maximum_infinity_degree':max(negative_degrees),
        'cyclotomic_jet_orders':jet_orders,
        'exceptional_threshold_cases_required':False,
        'finite_threshold_cases_checked':False,'all_cut_escape_proved':False}
(HERE/'periodic-cycle-symbolic.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
