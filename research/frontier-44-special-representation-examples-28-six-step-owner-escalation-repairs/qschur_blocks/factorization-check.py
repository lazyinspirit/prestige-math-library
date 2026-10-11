from itertools import permutations, product
from functools import lru_cache
import json
Q=2
@lru_cache(None)
def length(p): return sum(p[i]>p[j] for i in range(len(p)) for j in range(i+1,len(p)))
def compose(p,q): return tuple(p[q[i]] for i in range(len(p)))
def inverse(p): return tuple(p.index(i) for i in range(len(p)))
@lru_cache(None)
def word(p):
    a=list(p);out=[]
    while tuple(a)!=tuple(range(len(p))):
        i=next(i for i in range(len(p)-1) if a[i]>a[i+1]);a[i],a[i+1]=a[i+1],a[i];out.append(i)
    return tuple(reversed(out))
def mul(a,b):
    z={}
    for p,c in a.items():
        for q,d in b.items():
            cur={p:c*d}
            for i in word(q):
                nxt={}
                for r,k in cur.items():
                    s=list(r);s[i],s[i+1]=s[i+1],s[i];s=tuple(s)
                    if length(s)>length(r):nxt[s]=nxt.get(s,0)+k
                    else:
                        nxt[s]=nxt.get(s,0)+Q*k;nxt[r]=nxt.get(r,0)+(Q-1)*k
                cur=nxt
            for r,k in cur.items():z[r]=z.get(r,0)+k
    return {r:k for r,k in z.items() if k}
def add(a,b):
    c=a.copy()
    for r,k in b.items():c[r]=c.get(r,0)+k
    return {r:k for r,k in c.items() if k}
def group(blocks,n):
    out=[]
    for choices in product(*(permutations(B) for B in blocks)):
        p=list(range(n))
        for B,C in zip(blocks,choices):
            for b,c in zip(B,C):p[b]=c
        out.append(tuple(p))
    return out
def blocks(parts):
    out=[];s=0
    for k in parts:out.append(tuple(range(s,s+k)));s+=k
    return out
def sym(bs,n): return {p:1 for p in group(bs,n)}
def parts(n,maximum=None):
    if not n:yield ();return
    for k in range(min(n,maximum or n),1-1,-1):
        for tail in parts(n-k,k):yield (k,)+tail
cases=0
for n in range(1,5):
    ident=tuple(range(n))
    for eta in parts(n):
        rows=blocks(eta);sg=group(rows,n);xe=sym(rows,n)
        for labels in permutations(range(n)):
            t=[labels[B[0]:B[-1]+1] for B in rows]
            if any(tuple(sorted(r))!=r for r in t):continue
            dt=inverse(labels)
            for j,B in enumerate(rows):
                if any(t[i]!=rows[i] for i in range(j)):continue
                remaining=tuple(range(B[-1]+1,n));beta=[sum(a in B for a in r) for r in t[j:]]
                v=list(labels);bi=0;ai=0
                for r,row in enumerate(rows[j:],j):
                    k=beta[r-j];vals=list(B[bi:bi+k])+list(remaining[ai:ai+len(row)-k]);bi+=k;ai+=len(row)-k
                    for pos,val in zip(row,vals):v[pos]=val
                dv=inverse(tuple(v));wa=compose(inverse(dv),dt)
                w=tuple(wa[i] if i in B else i for i in range(n));a=tuple(wa[i] if i in remaining else i for i in range(n))
                assert compose(dv,compose(w,a))==dt
                assert length(dt)==length(dv)+length(w)+length(a)
                kp=list(rows[:j])
                for row,k in zip(rows[j:],beta):
                    if k:kp.append(row[:k])
                    if len(row)>k:kp.append(row[k:])
                kg=group(kp,n)
                E=[u for u in sg if all(length(compose(u,k))==length(u)+length(k) for k in kg)]
                nu=eta[:j]+(eta[j],)+tuple(eta[r]-beta[r-j] for r in range(j,len(eta)) if eta[r]-beta[r-j])
                xn=sym(blocks(nu),n);xb=sym([B]+[(i,) for i in range(n) if i not in B],n)
                left=mul(mul(xe,{dt:1}),xb);right={}
                for u in E:right=add(right,mul(mul(mul({u:1},{dv:1}),xn),{a:1}))
                factorial=1
                for k in beta:
                    for h in range(1,k+1):factorial*=sum(Q**i for i in range(h))
                right={p:c*Q**length(w)*factorial for p,c in right.items()}
                assert left==right,(eta,t,j,beta,nu,left,right)
                cases+=1
print(json.dumps({'parameter':Q,'rank_range':[1,4],'exact_integer_identity_cases':cases,'result':'pass'}))
