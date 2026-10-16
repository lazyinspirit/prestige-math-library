from collections import Counter, defaultdict
from fractions import Fraction as F
from itertools import product
import json
from pathlib import Path

Z=(F(0),)*4; ONE=(F(1),F(0),F(0),F(0)); W=(F(0),F(1),F(0),F(0))
SQRT2=(F(0),F(1),F(0),F(-1)); WINV=(F(0),F(0),F(0),F(-1))
def add(x,y): return tuple(a+b for a,b in zip(x,y))
def neg(x): return tuple(-a for a in x)
def mul(x,y):
    o=[F(0)]*7
    for i,a in enumerate(x):
        for j,b in enumerate(y): o[i+j]+=a*b
    for n in range(6,3,-1): o[n-4]-=o[n]
    return tuple(o[:4])
def conj(x): return (x[0],-x[3],-x[2],-x[1])
def abs2(x): return mul(conj(x),x)
def ms2(x): return mul(x,SQRT2)
def ds2(x): return tuple(v/2 for v in mul(x,SQRT2))
def key(x): return tuple((v.numerator,v.denominator) for v in x)
def enc(x): return [[v.numerator,v.denominator] for v in x]
def v2(n):
    if n==0: return 10**9
    n=abs(n); k=0
    while n%2==0: n//=2; k+=1
    return k
def sde(x):
    if x==Z: return None
    vals=[v2(q.numerator)-v2(q.denominator) for q in x if q]
    mv=min(vals); md=max(0,-mv)
    low=-(2*mv+1) if mv>=0 else 0; high=2*md
    for k in range(low,high+1):
        y=x
        for _ in range(k if k>=0 else -k): y=ms2(y) if k>=0 else ds2(y)
        if all(v.denominator==1 for v in y): return k
    raise AssertionError(f"sde scan bound failed: {x}")
def sde_le3(x): return x==Z or sde(x)<=3
def skey(st): return (key(st[0]),key(st[1]))
def H(st):
    u,v=st
    return (ds2(add(u,v)),ds2(add(u,neg(v))))
def T(st): return (st[0],mul(W,st[1]))
def Td(st): return (st[0],mul(WINV,st[1]))

# Enumerate every possible first-column entry with squared-entry sde <= 3.
# The proof of coefficient bound |a_i|<=2 for a=z*(sqrt(2))^k, k<=2,
# is recorded with the batch proof contract and notes.
cands={}
for k in range(3):
    for cs in product(range(-2,3),repeat=4):
        z=tuple(F(c) for c in cs)
        for _ in range(k): z=ds2(z)
        cands[key(z)]=z
cands=list(cands.values()); bynorm=defaultdict(list)
for z in cands:
    n=abs2(z)
    if sde_le3(n): bynorm[key(n)].append(z)
base={}
for u in cands:
    nu=abs2(u)
    if not sde_le3(nu): continue
    for v in bynorm.get(key(add(ONE,neg(nu))),[]): base[skey((u,v))]=(u,v)

start=(ONE,Z); startkey=skey(start); targets=set(base)
seen={startkey:(start,())}; front=[startkey]; found=set(); maxdepth=0
for depth in range(100):
    nxt=[]
    for q in front:
        st,word=seen[q]
        if q in targets: found.add(q); maxdepth=max(maxdepth,len(word))
        for name,fn in (("H",H),("T",T),("Tdg",Td)):
            ns=fn(st); nk=skey(ns)
            if nk not in seen: seen[nk]=(ns,word+(name,)); nxt.append(nk)
    if targets<=found: break
    front=nxt
    if not front: raise AssertionError("BFS exhausted before finding all base columns")
else: raise AssertionError("BFS exceeded depth 99")

def pmq(x):
    a,b,c,d=x
    return (sum(t*t for t in x)%8,(a*(b-d)+c*(b+d))%8)
def ge(P,Q,n):
    return {1:P%2==0,2:P%2==0 and Q%2==0,3:P%4==0 and Q%2==0,
            4:P%4==0 and Q%4==0,5:P%8==0 and Q%4==0}[n]
def gde(P,Q):
    v=0
    for n in range(1,6):
        if ge(P,Q,n): v=n
        else: break
    return v
def omk(x,k):
    q=list(x)
    for _ in range(k%4):
        a,b,c,d=q; q=[-d%8,a%8,b%8,c%8]
    return tuple(q)
def omkn(x,k):
    q=list(x)
    for _ in range(k%4):
        a,b,c,d=q; q=[b%8,c%8,d%8,-a%8]
    return tuple(q)
res=list(product(range(8),repeat=4)); groups=defaultdict(list)
for x in res:
    P,Q=pmq(x); j=gde(P,Q)
    if j in (0,1): groups[(j,P,Q)].append(x)
pair_count=target_count=negative_target_count=0
for j in (0,1):
    for P in range(8):
        for Q in range(8):
            for x in groups.get((j,P,Q),()):
                for y in groups.get((j,-P%8,-Q%8),()):
                    pair_count+=1
                    for d in (1,2,3):
                        if not any(gde(*pmq(tuple((a+b)%8 for a,b in zip(x,omk(y,k)))))==j+d for k in range(4)):
                            raise AssertionError({"j":j,"d":d,"x":x,"y":y})
                        target_count+=1
                        if not any(gde(*pmq(tuple((a+b)%8 for a,b in zip(x,omkn(y,k)))))==j+d for k in range(4)):
                            raise AssertionError({"negative_powers":True,"j":j,"d":d,"x":x,"y":y})
                        negative_target_count+=1

# The finite residue argument covers exponent m>=3.  The remaining descent
# boundary sde(|u|^2)=4 has m=sde(u)=2 and is checked directly.  The same four
# embedding/Fourier bound gives coefficient range [-2,2] for x=2u,y=2v.
small_norms={}
small_vals=[tuple(F(c) for c in cs) for cs in product(range(-2,3),repeat=4)]
for x in small_vals: small_norms.setdefault(key(abs2(x)),[]).append(x)
boundary_rows=[]
four=(F(4),F(0),F(0),F(0))
for x in small_vals:
    nx=abs2(x)
    if sde(tuple(v/4 for v in nx))!=4: continue
    for y in small_norms.get(key(add(four,neg(nx))),[]):
        ks=[]
        for k in range(4):
            wy=ONE
            for _ in range(k): wy=mul(wy,WINV)
            num=add(x,mul(wy,y))
            if sde(tuple(v/8 for v in abs2(num)))==3: ks.append(k)
        if not ks: raise AssertionError({"sde4_x":x,"sde4_y":y})
        boundary_rows.append({"x":enc(x),"y":enc(y),"valid_negative_k":ks})

# Exact 3-wire Toffoli verification, chronologically applied to all eight basis states.
def wpow(k):
    q=ONE
    for _ in range(k%8): q=mul(q,W)
    return q
def gate(state,g):
    op,*args=g
    if op=="H":
        q=args[0]; out=[Z]*8
        for i in range(8):
            if (i>>(2-q))&1: continue
            j=i|(1<<(2-q))
            out[i]=add(out[i],ds2(add(state[i],state[j])))
            out[j]=add(out[j],ds2(add(state[i],neg(state[j]))))
        return out
    if op=="T":
        q,p=args; out=list(state); phase=wpow(p)
        for i in range(8):
            if (i>>(2-q))&1: out[i]=mul(phase,out[i])
        return out
    if op=="CNOT":
        c,t=args; out=[Z]*8
        for i,v in enumerate(state):
            j=i^(1<<(2-t)) if ((i>>(2-c))&1) else i
            out[j]=add(out[j],v)
        return out
    raise AssertionError(op)
word=[("H",2),("CNOT",1,2),("T",2,7),("CNOT",0,2),("T",2,1),
      ("CNOT",1,2),("T",2,7),("CNOT",0,2),("T",1,1),("T",2,1),
      ("H",2),("CNOT",0,1),("T",0,1),("T",1,7),("CNOT",0,1)]
toffoli=[]
for n in range(8):
    state=[Z]*8; state[n]=ONE
    for g in word: state=gate(state,g)
    a,b,t=(n>>2)&1,(n>>1)&1,n&1; dest=n^(1 if a and b else 0)
    if state[dest]!=ONE or any(state[i]!=Z for i in range(8) if i!=dest):
        raise AssertionError(f"Toffoli basis failure {n}: {state}")
    toffoli.append({"input":f"{a}{b}{t}","output":f"{a}{b}{t^(a&b)}","phase":"1"})

rows=[]
for q in sorted(targets):
    st,w=seen[q]
    rows.append({"u":enc(st[0]),"v":enc(st[1]),"word":list(w),"sde_abs2_u":sde(abs2(st[0]))})
cert={
 "schema":"qc13-exact-finite-certificates-v1",
 "arithmetic":"Q[omega]/(omega^4+1), exact Fraction coefficient arithmetic",
 "toffoli":{"gate_count":len(word),"chronological_word":[list(g) for g in word],"basis_cases":toffoli},
 "kmm_descent_residues":{"modulus":8,"residue_vectors":len(res),"vectors_with_gde_0_or_1":sum(map(len,groups.values())),"tested_pairs":pair_count,"tested_positive_power_targets":target_count,"tested_negative_power_targets":negative_target_count,"failures":0},
 "sde4_boundary":{"coefficient_bound":2,"normalized_columns":len(boundary_rows),"all_have_descent_k":True,"table":boundary_rows},
 "base_column_search":{"candidate_entries":len(cands),"base_columns":len(targets),"visited_bfs_states":len(seen),"maximum_shortest_word_length":maxdepth,"sde_abs2_distribution":dict(Counter(str(sde(abs2(st[0]))) for st in base.values())),"table":rows}}
out=Path(__file__).with_suffix(".json")
out.write_text(json.dumps(cert,indent=2,sort_keys=True)+chr(10))
print(json.dumps({"toffoli":cert["toffoli"],"kmm_descent_residues":cert["kmm_descent_residues"],"sde4_boundary":{"coefficient_bound":2,"normalized_columns":len(boundary_rows),"all_have_descent_k":True},"base_column_search":{k:v for k,v in cert["base_column_search"].items() if k!="table"}},indent=2,sort_keys=True))
print(f"certificate: {out}")
