"""Independent exact integer check of RIII on all planar exterior pairings.
Builds resolution circles from graph connectivity, then applies basis m/Delta.
This finite sanity check supplements the universal proof; no gate is claimed.
"""
from itertools import product
import json

def matchings(xs):
    if not xs:
        yield []; return
    for i in range(1,len(xs),2):
        for a in matchings(xs[1:i]):
            for b in matchings(xs[i+1:]): yield [(xs[0],xs[i])]+a+b

def state_data(word,state,closure):
    n=3; N=n*(len(word)+1); adj=[set() for _ in range(N)]
    def edge(a,b): adj[a].add(b);adj[b].add(a)
    for row,(i,v) in enumerate(zip(word,state)):
        i-=1
        for j in range(n):
            if not v or j not in (i,i+1): edge(row*n+j,(row+1)*n+j)
        if v: edge(row*n+i,row*n+i+1);edge((row+1)*n+i,(row+1)*n+i+1)
    def node(k): return k if k<n else 3*n+(5-k)
    external=[]
    for a,b in closure: edge(node(a),node(b));external.append((node(a),node(b)))
    seen=set();cs=[]
    for x in range(N):
        if x in seen:continue
        c=set();todo=[x]
        while todo:
            y=todo.pop()
            if y in c:continue
            c.add(y);todo+=list(adj[y]-c)
        seen|=c;cs.append(c)
    def key(c):
        ext=[i for i,(a,b) in enumerate(external) if a in c]
        return (0,min(ext)) if ext else (1,min(c))
    cs.sort(key=key)
    return cs,[key(c) for c in cs],external

def edge_outputs(src,tgt,bits):
    # Components are located by actual common vertices, not diagram icons.
    if len(src)>len(tgt):
        out=[]
        for c in tgt:
            labs=[bits[i] for i,a in enumerate(src) if a&c]
            if sum(labs)>1:return []
            out.append(sum(labs))
        return [tuple(out)]
    assert len(tgt)==len(src)+1
    out=[None]*len(tgt);split=None
    for i,a in enumerate(src):
        js=[j for j,c in enumerate(tgt) if a&c]
        if len(js)==1:out[js[0]]=bits[i]
        else:assert len(js)==2;split=(js,bits[i])
    js,x=split
    answers=[]
    for vals in ([(1,1)] if x else [(0,1),(1,0)]):
        q=out[:]
        for j,v in zip(js,vals):q[j]=v
        answers.append(tuple(q))
    return answers

def cube(word,closure,marked):
    data={s:state_data(word,s,closure) for s in product((0,1),repeat=3)}
    basis=[[] for _ in range(4)]
    for s,(cs,keys,ext) in data.items():
        mark=next((i for i,c in enumerate(cs) if ext[marked][0] in c),None) if marked is not None else None
        for bits in product((0,1),repeat=len(cs)):
            if mark is None or bits[mark]==0:basis[sum(s)].append((s,bits))
    d=[[[0 for _ in basis[k]] for _ in basis[k+1]] for k in range(3)]
    for k in range(3):
        target={v:i for i,v in enumerate(basis[k+1])}
        for j,(s,bits) in enumerate(basis[k]):
            for a in range(3):
                if s[a]:continue
                t=s[:a]+(1,)+s[a+1:]
                for out in edge_outputs(data[s][0],data[t][0],bits):
                    if (t,out) in target:d[k][target[t,out]][j]+=(-1)**sum(s[:a])
    # Independently verify every cube differential squares to zero.
    for k in range(2):
        for row in d[k+1]:
            for j in range(len(basis[k])):assert sum(row[a]*d[k][a][j] for a in range(len(row)))==0
    return basis,d,data

def cancel(basis,d,k,A,B):
    # Invert the actual signed permutation pivot, then take its Schur complement.
    Ar=[j for j,x in enumerate(basis[k]) if A(x)]
    Br=[i for i,x in enumerate(basis[k+1]) if B(x)]
    assert len(Ar)==len(Br)
    piv=[]
    for j in Ar:
        nonzero=[(i,d[k][i][j]) for i in Br if d[k][i][j]]
        assert len(nonzero)==1 and abs(nonzero[0][1])==1
        piv.append((j,*nonzero[0]))
    assert len({i for j,i,s in piv})==len(Br)
    R=[j for j in range(len(basis[k])) if j not in Ar]
    S=[i for i in range(len(basis[k+1])) if i not in Br]
    d[k]=[[d[k][i][j]-sum(d[k][i][a]*sgn*d[k][b][j] for a,b,sgn in piv) for j in R] for i in S]
    if k:d[k-1]=[d[k-1][j] for j in R]
    if k+1<len(d):d[k+1]=[[row[i] for i in S] for row in d[k+1]]
    basis[k]=[basis[k][j] for j in R];basis[k+1]=[basis[k+1][i] for i in S]

def residual(word,closure,marked):
    basis,d,data=cube(word,closure,marked)
    def bubble(x,label):
        s,bits=x
        if s!=(1,0,1):return False
        q=[i for i,key in enumerate(data[s][1]) if key[0]==1]
        assert len(q)==1
        return bits[q[0]]==label
    cancel(basis,d,2,lambda x:bubble(x,0),lambda x:True)
    cancel(basis,d,1,lambda x:x[0]==(0,0,1),lambda x:bubble(x,1))
    # Residual basis names use exterior-circle factors and matching identity.
    if word==(1,2,1): names={(0,0,0):'I',(1,0,0):'E1',(0,1,0):'E2',(1,1,0):'P',(0,1,1):'Q'}
    else:names={(0,0,0):'I',(1,0,0):'E2',(0,1,0):'E1',(1,1,0):'Q',(0,1,1):'P'}
    normalized=[];perms=[]
    for k in range(3):
        labelled=[(names[s],bits) for s,bits in basis[k]]
        perm=sorted(range(len(labelled)),key=lambda i:labelled[i]);perms.append(perm)
        normalized.append([labelled[i] for i in perm])
    matrices=[[[d[k][i][j] for j in perms[k]] for i in perms[k+1]] for k in range(2)]
    return normalized,matrices

rows=[]
for closure in matchings(list(range(6))):
    for mark in [None,0,1,2]:
        left=residual((1,2,1),closure,mark);right=residual((2,1,2),closure,mark)
        assert left==right,(closure,mark,left,right)
        rows.append({'closure':closure,'marked_external_arc':mark,'residual_ranks':[len(b) for b in left[0]],'equal_signed_matrices':True})
print(json.dumps({'kind':'finite-exact-tensor-sanity-check','cases':len(rows),'all_passed':True,'interpretation':'All five planar exterior pairings; unreduced and each of three reduced choices. Supplements universal proof; no native coverage.','rows':rows},indent=2))
