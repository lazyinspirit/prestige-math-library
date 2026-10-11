"""Cross-check the symbolic cycle using ordinary exact Laurent extraction.

This uses no binomial jets or asymptotic polynomial-part separation.
"""
import json
import pathlib
import sys
sys.path.insert(0,'/tmp/quasi-r-python-deps')
import sympy as S
q,z=S.symbols('q z')
HERE=pathlib.Path(__file__).resolve().parent
data=json.loads((HERE/'periodic-transfer-matrices.json').read_text())
templates={(row['source_residue'],row['transfer']):S.Matrix(
    [[S.sympify(value) for value in line] for line in row['entries']])
    for row in data['matrices']}

def pp(value):
    value=S.expand(S.cancel(value))
    result=S.Integer(0)
    for term in S.Add.make_args(value):
        coefficient,power=term.as_coeff_exponent(q)
        assert power.is_Integer and not coefficient.has(q),value
        if power>0:
            result+=term
    return result

rows=[]
for k in range(6):
    def B(t,r):
        period,residue=divmod(t,4)
        return templates[residue,r].subs(z,q**(8*k+8*period))
    p=q+1/q
    h=q*q+1/(q*q)
    center=-p*((2*k-1)*h-1)/h**2
    coefficients={1:S.Matrix([0,0,0,center])}
    checked=0
    for t in range(2,6):
        residual=S.zeros(4,1)
        for r in range(1,min(3,t-1)+1):
            residual+=B(t-r,r)*coefficients[t-r].subs(q,1/q)
        residual=residual.applyfunc(S.cancel)
        assert all(S.cancel(value+value.subs(q,1/q))==0 for value in residual)
        f=residual.applyfunc(pp)
        assert all(S.cancel(f[i]-f[i].subs(q,1/q)-residual[i])==0 for i in range(4))
        assert f[1]+f[2]==0
        coefficients[t]=f
        checked+=4
    f=coefficients[5]
    actual=S.cancel(f[0]-h*f[1]+h*f[2]-h*h*f[3])
    expected=-(2*k+2)*(2*k+3)*p*((2*k+1)*h-1)
    assert S.cancel(actual-expected)==0,(k,actual,expected)
    rows.append({'k':k,'laurent_coordinates_checked':checked,
                 'anti_bar_and_normalization_checked':True,'cycle_difference':'0'})
    print(json.dumps(rows[-1]),flush=True)
result={'checks':rows,'symbolic_jet_method_used':False,'independent_audit':False}
(HERE/'periodic-cycle-direct-check.json').write_text(json.dumps(result,indent=2)+'\n')
