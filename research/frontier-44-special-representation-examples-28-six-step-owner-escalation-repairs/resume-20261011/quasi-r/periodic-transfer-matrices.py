"""Derive the periodic chain's exact four-state, three-band bar matrices.

z stands for q**(8*k); no root specialization or Laurent positive-part
interchange is made.  The matrix generator is the explicit algebraic formula
for C^-1 tensor C^-1 times Theta times C tensor C.
"""
import functools
import json
import pathlib
import sys
sys.path.insert(0, '/tmp/quasi-r-python-deps')
import sympy as S

q, z = S.symbols('q z')

def n(j):
    return 8*(j//2) + (2 if j % 2 == 0 else 4)

def states(t):
    pairs = [(j, n(j)//2-t-1) for j in range(8)
             if 0 <= n(j)//2-t-1 <= 3]
    assert len(pairs) == 2, (t, pairs)
    return [(j, a, l, d) for j, a in pairs for l, d in pairs]

def cv(j, a, second=False, inverse=False):
    ell = 2 if j % 2 == 0 else 4
    denominator = q+1/q if ell == 2 else q*q+1/(q*q)
    out = [(j, a, S.Integer(1))]
    if a % ell == 0:
        exponent = (n(j)-a)//ell if second else a//ell
        coefficient = (-1)**exponent / denominator
        if inverse:
            coefficient = -coefficient
        out.append((j+1, a+ell-1, coefficient))
    return out

@functools.lru_cache(None)
def gaussian(upper_constant, r):
    # The upper index is 8*k+upper_constant; r <= 3.
    answer = S.Integer(1)
    for i in range(1, r+1):
        power = upper_constant-i+1
        answer *= (z*q**power-z**-1*q**-power)/(q**i-q**-i)
    return answer

@functools.lru_cache(None)
def theta_coefficient(r):
    return q**-r * S.prod(q**(2*i)-1 for i in range(1,r+1))

@functools.lru_cache(None)
def column(tup):
    j, a, l, d = tup
    result = {}
    for jj, aa, c in cv(j,a):
        for ll, dd, e in cv(l,d,second=True):
            assert aa <= 3 and dd <= 3
            for r in range(min(aa,dd)+1):
                factor = c*e*theta_coefficient(r)
                factor *= gaussian(n(jj)-aa+r,r)*gaussian(n(ll)-dd+r,r)
                for v, b, u in cv(jj,aa-r,inverse=True):
                    for x, f, w in cv(ll,dd-r,second=True,inverse=True):
                        key = (v,b,x,f)
                        result[key] = result.get(key,0)+factor*u*w
    return {key:S.cancel(value) for key,value in result.items()
            if S.cancel(value) != 0}

@functools.lru_cache(None)
def matrix(s,r):
    source, target = states(s), states(s+r)
    answer = S.zeros(4)
    for col,tup in enumerate(source):
        for key,value in column(tup).items():
            layer = n(key[0])//2-key[1]-1
            assert s <= layer <= s+3
            if layer == s+r:
                assert key in target, (key,target)
                answer[target.index(key),col] += value
    if r == 0:
        assert answer == S.eye(4), answer
    return answer

def positive_part(expression):
    expression = S.expand(S.cancel(expression))
    answer = S.Integer(0)
    for term in S.Add.make_args(expression):
        coefficient,power = term.as_coeff_exponent(q)
        assert power.is_Integer and not coefficient.has(q), expression
        if power > 0:
            answer += term
    return answer

def actual_matrix(t,r):
    k,s = divmod(t,4)
    return matrix(s,r).subs(z,q**(8*k))

matrices = []
for s in range(4):
    for r in range(4):
        B = matrix(s,r)
        matrices.append({'source_residue':s,'transfer':r,
                         'source_states':states(s),'target_states':states(s+r),
                         'entries':[[str(S.factor(B[i,j])) for j in range(4)] for i in range(4)]})

# This uses the infinite module matrices. Each finite layer is an exact
# algebraic calculation, but no infinitely supported vector is declared
# to belong to the algebraic tensor product.
coefficients = [S.Matrix([1,0,0,0])]
summary = []
maximum_layer = int(sys.argv[1]) if len(sys.argv) > 1 else 8
for t in range(1,maximum_layer+1):
    residual = S.zeros(4,1)
    for r in range(1,min(3,t)+1):
        residual += actual_matrix(t-r,r)*coefficients[t-r].subs(q,1/q)
    residual = residual.applyfunc(S.cancel)
    for value in residual:
        assert S.cancel(value+value.subs(q,1/q)) == 0, (t,value)
    corrected = residual.applyfunc(positive_part)
    coefficients.append(corrected)
    assert all(S.cancel(corrected[i]-corrected[i].subs(q,1/q)-residual[i]) == 0
               for i in range(4)), t
    row = {'layer':t,'nonzero_coordinates':sum(value != 0 for value in corrected),
           'first_coordinate':str(S.factor(corrected[0])),
           'degree':int(S.degree(corrected[0],q)) if corrected[0] != 0 else None}
    if t % 4 in (0,1):
        divisor = q*q+1 if t % 4 == 0 else q**4+1
        row['next_denominator_remainder'] = str(S.rem(corrected[0],divisor,q))
        denominator = q+1/q if t % 4 == 0 else q*q+1/(q*q)
        scalar = S.cancel(corrected[0]-denominator*corrected[1]
                          +denominator*corrected[2]-denominator**2*corrected[3])
        row['center_scalar'] = str(S.factor(scalar))
        row['center_scalar_bar_fixed'] = S.cancel(scalar-scalar.subs(q,1/q)) == 0
    row['coordinate_vector'] = [str(S.factor(value)) for value in corrected]
    summary.append(row)

output={'variable_convention':'z=q^(8*k), layer t=4*k+s',
        'matrices':matrices,'computed_layers':summary,
        'all_cut_escape_proved':False,'algebraic_full_lift_proved':False}
destination=pathlib.Path(__file__).with_name('periodic-transfer-matrices.json')
destination.write_text(json.dumps(output,indent=2)+'\n')
print(json.dumps({'matrix_count':len(matrices),'states_per_layer':4,
                  'maximum_transfer':3,'computed_layers':[{key:value for key,value in row.items()
                    if key not in ('first_coordinate','coordinate_vector','center_scalar')} for row in summary],
                  'all_cut_escape_proved':False},indent=2))
