"""Finite independent PBW checks; no all-pyramid/all-mode acceptance."""
from collections import defaultdict
from functools import lru_cache
import json


def check(lengths, reflected, upto, reduction):
    n=len(lengths); l=max(lengths)
    cols=[[i+1 for i,p in enumerate(lengths) if c<p] for c in range(l)]
    if reflected: cols.reverse()
    boxes=[(i,c+1) for c,col in enumerate(cols) for i in col]
    N=len(boxes); q=list(map(len,cols)); rho=[n-sum(q[c:]) if reduction=="left" else n-sum(q[:c+1]) for c in range(l)]
    units=[(a,b) for a in range(N) for b in range(N)]
    ordered=sorted(units,key=lambda z:((boxes[z[0]][1]>boxes[z[1]][1]) if reduction=="left" else (boxes[z[0]][1]<=boxes[z[1]][1]),z))
    rank={x:i for i,x in enumerate(ordered)}
    chi=lambda x:int(boxes[x[0]][0]==boxes[x[1]][0] and boxes[x[0]][1]==boxes[x[1]][1]+1)
    def plus(target,poly,scale=1):
        for w,c in poly.items():
            target[w]+=scale*c
            if not target[w]:del target[w]
    @lru_cache(None)
    def normal(word):
        for k in range(len(word)-1):
            x,y=word[k:k+2]
            if rank[x]>rank[y]:
                out=defaultdict(int)
                plus(out,normal(word[:k]+(y,x)+word[k+2:]))
                if x[1]==y[0]: plus(out,normal(word[:k]+((x[0],y[1]),)+word[k+2:]))
                if x[0]==y[1]: plus(out,normal(word[:k]+((y[0],x[1]),)+word[k+2:]),-1)
                return dict(out)
        return {word:1}
    def expand(poly):
        out=defaultdict(int)
        for w,c in poly.items():plus(out,normal(w),c)
        return dict(out)
    def project(poly):
        out=defaultdict(int)
        for w,c in expand(poly).items():
            pword=[]
            for a,b in w:
                if boxes[a][1]<=boxes[b][1]:pword.append((a,b))
                else:c*=chi((a,b))
            if c:out[tuple(pword)]+=c
        return {w:c for w,c in out.items() if c}
    factors=[]
    for a,(i,c) in enumerate(boxes):
        for b,(j,d) in enumerate(boxes):
            if c<=d:
                f={((a,b),):(-1)**(d-c)}
                if a==b and rho[c-1]:f[()]=rho[c-1]
                factors.append((i,j,c,d,d-c+1,f))
    def path(i,j,x,r):
        out=defaultdict(int)
        def rec(last,degree,word,coeff):
            if degree==r:
                if last[1]==j:out[word]+=coeff
                return
            for f in factors:
                if degree+f[4]>r:continue
                if last is None:
                    if f[0]!=i:continue
                    s=1
                else:
                    if last[1]!=f[0]:continue
                    if last[1]>x:
                        if not last[3]<f[2]:continue
                        s=1
                    else:
                        if not last[3]>=f[2]:continue
                        s=-1
                for fw,fc in f[5].items():rec(f,degree+f[4],word+fw,coeff*s*fc)
        rec(None,0,(),1)
        return {w:c for w,c in out.items() if c}
    checks=0;failures=[]
    generators=[('D'+str(i),i,i,i-1,0) for i in range(1,n+1)]
    for i in range(1,n):
        delta=lengths[i]-lengths[i-1]
        generators.extend([('E'+str(i),i,i+1,i,0 if reflected else delta),('F'+str(i),i+1,i,i,delta if reflected else 0)])
    negatives=[z for z in units if boxes[z[0]][1]>boxes[z[1]][1]]
    for name,i,j,x,shift in generators:
        for r in range(shift+1,upto+1):
            poly=path(i,j,x,r)
            for z in negatives:
                comm=defaultdict(int)
                for w,c in poly.items():comm[(z,)+w]+=c;comm[w+(z,)]-=c
                rem=project(comm);checks+=1
                if rem:failures.append({'generator':name,'mode':r,'negative':z,'remainder_terms':len(rem)})
    return {'lengths':lengths,'reflected':reflected,'max_mode':upto,'reduction':reduction,'checks':checks,'failures':failures,'pbw_cache_entries':normal.cache_info().currsize}

if __name__=='__main__':
    results=[check(p,ref,4,reduction) for p in [[1,2],[1,3],[2,2],[1,2,2],[1,1,3]] for ref in [False,True] for reduction in ["left","right"]]
    print(json.dumps({'scope':'finite PBW projected matrix checks only','results':results,'total_checks':sum(r['checks'] for r in results),'total_failures':sum(len(r['failures']) for r in results)},indent=2))
    raise SystemExit(bool(any(r['failures'] for r in results)))
