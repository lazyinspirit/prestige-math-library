# Exact bounded diagnostic, not a proof or native workflow gate.
import functools,json,pathlib
@functools.lru_cache(None)
def matchings(n):
    if n==0:return ((),)
    out=[]
    for j in range(1,n,2):
        for a in matchings(j-1):
            for b in matchings(n-j-1):out.append(tuple(sorted(((0,j),)+tuple((u+1,v+1) for u,v in a)+tuple((u+j+1,v+j+1) for u,v in b))))
    return tuple(out)
def generator(n,i):
    edges=[(i,i+1),(2*n-2-i,2*n-1-i)]
    edges +=[(j,2*n-1-j) for j in range(n) if j not in (i,i+1)]
    return tuple(sorted(tuple(sorted(e)) for e in edges))
def multiply(n,upper,lower):
    parent=list(range(4*n))
    def root(a):
        while parent[a]!=a:parent[a]=parent[parent[a]];a=parent[a]
        return a
    def union(a,b):parent[root(a)]=root(b)
    for a,b in upper:union(a,b)
    for a,b in lower:union(a+2*n,b+2*n)
    for j in range(n):union(2*n-1-j,2*n+j)
    exterior={i:i for i in range(n)}
    exterior.update({4*n-1-j:2*n-1-j for j in range(n)})
    components={}
    for i in range(4*n):components.setdefault(root(i),[]).append(i)
    edges=[];loops=0
    for comp in components.values():
        endpoints=sorted(exterior[i] for i in comp if i in exterior)
        if not endpoints:loops+=1
        else:assert len(endpoints)==2;edges.append(tuple(endpoints))
    return tuple(sorted(edges)),loops
def solvable(rows,width,p):
    rows=[r[:] for r in rows];rank=0
    for col in range(width):
        pivot=next((i for i in range(rank,len(rows)) if rows[i][col]%p),None)
        if pivot is None:continue
        rows[rank],rows[pivot]=rows[pivot],rows[rank];r=rows[rank];a=pow(r[col]%p,-1,p);rows[rank]=r=[a*x%p for x in r]
        for i in range(rank+1,len(rows)):
            a=rows[i][col]%p
            if a:rows[i]=[(x-a*y)%p for x,y in zip(rows[i],r)]
        rank+=1
    return not any(all(x%p==0 for x in r[:width]) and r[width]%p for r in rows)
def actual(n,delta,p):
    basis=matchings(2*n);index={d:i for i,d in enumerate(basis)};m=len(basis);rows=[]
    for j in range(n-1):
        block=[[0]*(m+1) for _ in range(m)]
        for col,d in enumerate(basis):
            prod,loops=multiply(n,generator(n,j),d);block[index[prod]][col]=pow(delta,loops,p)
        rows+=block
    identity=tuple((j,2*n-1-j) for j in range(n));normal=[0]*(m+1);normal[index[identity]]=1;normal[-1]=1;rows.append(normal)
    return solvable(rows,m,p)
def quantum_characteristic(delta,p):
    previous,current=0,1
    for r in range(1,1000):
        if current==0:return r
        previous,current=current,(delta*current-previous)%p
    raise RuntimeError('finite-field diagnostic bound exceeded')
def predicted(n,ell,p):
    if n<ell:return True
    if (n+1)%ell:return False
    a=(n+1)//ell
    while a%p==0:a//=p
    return 1<=a<p
records=[]
for p in (2,3,5,7):
    for delta in range(p):
        ell=quantum_characteristic(delta,p)
        for n in range(6):
            observed=actual(n,delta,p);expected=predicted(n,ell,p)
            assert observed==expected,(p,delta,n,ell,observed,expected)
            records.append({'p':p,'delta':delta,'n':n,'ell':ell,'linear_system_has_normalized_annihilator':observed,'digit_prediction':expected})
result={'kind':'bounded-exact-diagnostic-not-general-proof-or-native-gate','method':'noncrossing diagram multiplication and independent modular row reduction of d_i e=0, epsilon(e)=1','cases':len(records),'failures':0,'records':records}
p=pathlib.Path(__file__).with_name('finite-criterion-check.json');p.write_text(json.dumps(result,indent=2)+'\n');print(str(len(records))+' exact finite-field/rank cases agree; no general proof credit claimed')
