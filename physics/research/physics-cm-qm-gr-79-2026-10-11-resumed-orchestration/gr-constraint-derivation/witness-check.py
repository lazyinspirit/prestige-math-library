"""Exact curvature from explicit metric 2-jets, independent of Gauss/Codazzi."""
from fractions import Fraction as F
import json
from pathlib import Path

def curvature(dg, ddg):
    eta=[-1,1,1,1]
    def first(a,b,c): return F(dg.get((a,b,c),0))
    def second(a,b,c,d): return F(ddg.get((a,b,c,d),0))
    # Here all three metrics have g(p)=diag(-1,1,1,1).
    def gamma(a,b,c):
        return F(eta[a],2)*(first(b,a,c)+first(c,a,b)-first(a,b,c))
    def dgamma(r,a,b,c):
        # Differentiate the inverse metric and the full Christoffel expression.
        return sum(-F(eta[a]*eta[e],2)*first(r,a,e)*(first(b,e,c)+first(c,e,b)-first(e,b,c)) for e in range(4))+F(eta[a],2)*(second(r,b,a,c)+second(r,c,a,b)-second(r,a,b,c))
    def raised(a,b,c,d):
        return dgamma(c,a,d,b)-dgamma(d,a,c,b)+sum(gamma(a,c,e)*gamma(e,d,b)-gamma(a,d,e)*gamma(e,c,b) for e in range(4))
    R={(a,b,c,d):eta[a]*raised(a,b,c,d) for a in range(4) for b in range(4) for c in range(4) for d in range(4)}
    Ric={(b,d):sum(eta[a]*R[a,b,a,d] for a in range(4)) for b in range(4) for d in range(4)}
    S=sum(eta[a]*Ric[a,a] for a in range(4))
    G={(a,b):Ric[a,b]-(S*eta[a]/2 if a==b else 0) for a in range(4) for b in range(4)}
    return R,Ric,S,G

dg={(0,i,i):2 for i in range(1,4)}
flat_dd={(0,0,i,i):4 for i in range(1,4)}
R,Ric,S,G=curvature(dg,flat_dd)
assert R[1,2,1,2]==1 and R[1,2,2,1]==-1
assert all(R[0,i,0,i]==-1 for i in range(1,4))
assert Ric[0,0]==-3 and S==12 and G[0,0]==3
flat={'R1212':str(R[1,2,1,2]),'operator_g_R12_e2_e1':str(R[1,2,1,2]),'scalar':str(S),'G00':str(G[0,0])}
# gamma=(1+r^2/4)^(-2) delta has curvature +1 at origin;
# g=-dt^2+(1+t)^2 gamma, so a'=1, a''=0.
curved_dd={(0,0,i,i):2 for i in range(1,4)}
curved_dd.update({(j,j,i,i):-1 for i in range(1,4) for j in range(1,4)})
R,Ric,S,G=curvature(dg,curved_dd)
assert R[1,2,1,2]==2 and all(R[0,i,0,i]==0 for i in range(1,4))
assert Ric[0,0]==0 and S==12 and G[0,0]==6
curved={'R1212':str(R[1,2,1,2]),'R0101':str(R[0,1,0,1]),'scalar':str(S),'G00':str(G[0,0])}
# gii=exp(2tx): first jets zero, mixed t,x second jets equal 2.
vary_dd={(a,b,i,i):2 for a,b in [(0,1),(1,0)] for i in range(1,4)}
R,Ric,S,G=curvature({},vary_dd)
assert R[0,2,1,2]==-1 and Ric[0,1]==-2 and G[0,1]==-2
assert all(R[0,i,0,j]==0 for i in range(1,4) for j in range(1,4))
vary={'R0212':str(R[0,2,1,2]),'Ric01':str(Ric[0,1]),'G01':str(G[0,1])}
out={'method':'exact Fraction arithmetic; full Christoffel differentiation from metric 2-jets; no Gauss/Codazzi input','FRW_flat_exp':flat,'FRW_curved_linear':curved,'varying_K':vary,'verdict':'all asserted witnesses passed'}
Path(__file__).with_name('witness-result.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps(out,indent=2))
