"""Finite F7 smoke check, not a proof/audit of the arbitrary-level construction."""
import json

p,q,A,B=7,2,1,2
keys=[(a,b,t) for a in range(2) for b in range(2) for t in range(2)]
idx={key:i for i,key in enumerate(keys)}
N=len(keys)
def add(v,w,k=1): return [(x+k*y)%p for x,y in zip(v,w)]
def unit(a=0,b=0,t=0):
    v=[0]*N;v[idx[a,b,t]]=1;return v
def reduce(a,b,t):
    if t>=2: return add([q*x%p for x in reduce(a,b,t-2)],reduce(a,b,t-1),q-1)
    if a>=2: return add([(A+B)*x%p for x in reduce(a-1,b,t)],reduce(a-2,b,t),-A*B)
    if b>=2:
        c=(q-1)*pow(q,-1,p)%p
        v=add([(A+B)*x%p for x in reduce(a,b-1,t)],reduce(a,b-2,t),-A*B)
        v=add(v,reduce(a+1,b-1,t+1),c)
        return add(v,reduce(a,b-2,t+1),-c*A*B)
    return unit(a,b,t)
def act(v,g):
    out=[0]*N
    for (a,b,t),coef in zip(keys,v):
        if not coef: continue
        if g=='T': term=reduce(a,b,t+1)
        elif g=='X1':
            term=reduce(a+1,b,0) if t==0 else add(reduce(a,b+1,1),reduce(a,b+1,0),-(q-1))
        elif g=='X2':
            term=reduce(a,b+1,0) if t==0 else add(reduce(a+1,b,1),reduce(a,b+1,0),q-1)
        out=add(out,term,coef)
    return out
def mul(v,w):
    out=[0]*N
    for (a,b,t),coef in zip(keys,w):
        if not coef: continue
        term=v
        for g in ['X1']*a+['X2']*b+['T']*t:term=act(term,g)
        out=add(out,term,coef)
    return out
one=unit(); T=unit(t=1)
u=mul(add(unit(a=1),one,-B),add(unit(b=1),one,-B))
row=add(one,T)
mix=add(unit(a=1),one,-B)
# Metadata (shape, left tableau, right tableau); shape order is dominance.
data=[(0,0,0,mul(u,row)),(1,0,0,u)]
for s in range(2):
    for t in range(2):
        v=mul(T,mix) if s else mix
        if t:v=act(v,'T')
        data.append((2,s,t,v))
data.extend([(3,0,0,row),(4,0,0,one)])
mat=[[row[3][i] for row in data] for i in range(N)]
aug=[row+[int(i==j) for j in range(N)] for i,row in enumerate(mat)]
for j in range(N):
    pivot=next(i for i in range(j,N) if aug[i][j])
    aug[j],aug[pivot]=aug[pivot],aug[j]
    inv=pow(aug[j][j],-1,p);aug[j]=[x*inv%p for x in aug[j]]
    for i in range(N):
        if i!=j:
            c=aug[i][j];aug[i]=[(x-c*y)%p for x,y in zip(aug[i],aug[j])]
inverse=[row[N:] for row in aug]
def coords(v):return [sum(x*y for x,y in zip(row,v))%p for row in inverse]
residues={0:[A,A*q%p],1:[A,A*pow(q,-1,p)%p],2:[A,B],3:[B,B*q%p],4:[B,B*pow(q,-1,p)%p]}
checks=0
for j,(shape,s,t,v) in enumerate(data):
    for r,g in enumerate(['X1','X2']):
        c=coords(act(v,g));diag=residues[shape][r] if shape!=2 or t==0 else residues[shape][1-r]
        assert c[j]==diag,(shape,s,t,g,c,diag)
        for k,(sh2,s2,t2,_) in enumerate(data):
            if c[k] and k!=j:
                assert sh2<shape or (sh2==shape and s2==s and t2<t),(shape,s,t,g,k,c)
        checks+=1
    for g in ['T','X1','X2']:
        c=coords(act(v,g))
        assert all(not c[k] or sh2<shape or (sh2==shape and s2==s) for k,(sh2,s2,t2,_) in enumerate(data))
        checks+=1
print(json.dumps({'scope':'rank2 level2 over F7, q=2, Q=(1,2), q order3','basis_rank':N,'generator_and_JM_checks':checks,'passed':True,'limitation':'finite smoke check only; not an independent audit or proof of general Q'}))
