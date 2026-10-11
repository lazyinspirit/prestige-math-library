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
z=S.Symbol('z')
p=q+1/q;h=q*q+1/q**2
def states(t):
 k,s=divmod(t,4)
 return [(2*k,0),(2*k+1,1)] if s==0 else ([(2*k+1,0),(2*k+2,3)] if s==1 else ([(2*k+2,2),(2*k+3,3)] if s==2 else [(2*k+2,1),(2*k+3,2)]))
def C(t,inverse=False):
 alpha=[1/p,1/h,-1/p,0][t%4]
 if inverse:alpha=-alpha
 return S.kronecker_product(S.Matrix([[1,0],[alpha,1]]),S.Matrix([[1,0],[-alpha,1]]))
def g(j,a,r):
 upper=8*(j//2)+(2 if j%2==0 else 4)-a+r
 return S.prod((z*q**(upper-i+1)-z**-1*q**(-upper+i-1))/(q**i-q**-i) for i in range(1,r+1))
def T(t,r):
 src=states(t);dst=states(t+r)
 ans=S.zeros(4)
 for a,(j,u) in enumerate(src):
  for b,(l,v) in enumerate(src):
   if u<r or v<r:continue
   try:i=dst.index((j,u-r));ii=dst.index((l,v-r))
   except ValueError:continue
   ans[2*i+ii,2*a+b]=q**-r*S.prod(q**(2*s)-1 for s in range(1,r+1))*g(j,u,r)*g(l,v,r)
 return ans
templates={(t,r):(C(t+r,True)*T(t,r)*C(t)).applyfunc(S.cancel) for t in range(4) for r in range(4)}
old=json.loads((HERE.parent/'quasi-r/periodic-transfer-matrices.json').read_text())
for row in old['matrices']:
 matrix=S.Matrix([[S.sympify(v) for v in line] for line in row['entries']])
 assert all(S.cancel(a-b)==0 for a,b in zip(matrix,templates[row['source_residue'],row['transfer']]))
print('Independently factored all 16 matrices, 256 entries agree.',flush=True)

def bar(expr):
    return expr.subs({q:1/q,x:1/x},simultaneous=True)

thresholds=[]
jet_orders={}
positive_valuations=[]
negative_degrees=[]
records=[]
current_class=-1
current_layer=-1
factors=[q-1,q+1,q*q+1,q**4+1,q*q-q+1,q*q+q+1]

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
        fmin=min(key[0] for key,value in S.Poly(Dfull,q).terms())
        normalized=S.cancel(Dfull/q**fmin)
        assert S.rem((q**24-1)**3,normalized,q)==0,normalized
        exponents=[]
        rest=S.Poly(normalized,q)
        for factor in factors:
            e=0
            while rest.degree()>0:
                quo,rem=S.div(rest,S.Poly(factor,q))
                if not rem.is_zero: break
                rest=quo;e+=1
            exponents.append(e)
        assert rest.degree()==0,(normalized,rest)
        if N==0:
            continue
        np=S.Poly(N,q)
        dp=S.Poly(Dfull,q)
        numerator_min=min(key[0] for key,value in np.terms())
        denominator_min=min(key[0] for key,value in dp.terms())
        records.append({"class":current_class,"layer":current_layer,"x_power":int(a),"zero_valuation":int(numerator_min-denominator_min),"infinity_degree":int(np.degree()-dp.degree()),"factor_exponents":exponents})
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
    current_class=c
    K=3*m+c
    def B(t,r):
        period,residue=divmod(t,4)
        return templates[residue,r].subs(z,x*q**(8*c+8*period))
    p=q+1/q
    h=q*q+1/(q*q)
    center=-p*((2*K-1)*h-1)/h**2
    coefficients={1:S.Matrix([0,0,0,center])}
    for t in range(2,6):
        current_layer=t
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
table=[]
for c in range(3):
 for t in range(2,6):
  rr=[r for r in records if r['class']==c and r['layer']==t]
  pp=[r['zero_valuation'] for r in rr if r['x_power']>0]
  nn=[r['infinity_degree'] for r in rr if r['x_power']<0]
  table.append({'class':c,'layer':t,'positive_min':min(pp) if pp else None,'negative_max':max(nn) if nn else None,'denominator_max':[max(r['factor_exponents'][i] for r in rr) for i in range(6)]})
result={'rows':rows,'table':table,'positive_coefficient_minimum_zero_valuation':min(positive_valuations),
        'negative_coefficient_maximum_infinity_degree':max(negative_degrees),
        'cyclotomic_jet_orders':jet_orders,
        'exceptional_threshold_cases_required':False,
        'finite_threshold_cases_checked':False,'all_cut_escape_proved':False}
(HERE/'factorized-cycle.json').write_text(json.dumps(result,indent=2)+'\n')
print('Finished',len(records),'term checks and 3 exact all-parameter identities',flush=True)
