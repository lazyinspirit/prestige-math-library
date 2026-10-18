"""Actual full straight-side chain with true terminal rectangular MINI children.

Exact block-tridiagonal elimination; no claim about recursive toothed children.
"""
from exact_triangle_dtn import Q,zero,local,inverse,multiply
from pathlib import Path
import json

def add(a,b):
    return [[x+y for x,y in zip(r,s)] for r,s in zip(a,b)]

def minus(a,b):
    return [[x-y for x,y in zip(r,s)] for r,s in zip(a,b)]

def sub(a,ii,jj):
    return [[a[i][j] for j in jj] for i in ii]

def child_energy(points,tris,state):
    cells=[]; area_total=Q(0); mg=[Q(0),Q(0)]
    for tri in tris:
        (x0,y0),(x1,y1),(x2,y2)=[points[i] for i in tri]
        tw=(x1-x0)*(y2-y0)-(x2-x0)*(y1-y0); ar=tw/2
        g=[[(y1-y2)/tw,(x2-x1)/tw],[(y2-y0)/tw,(x0-x2)/tw],[(y0-y1)/tw,(x1-x0)/tw]]
        a=[[state[2*i+c] for c in range(2)] for i in tri]
        p=[sum(state[14+i]*g[j][c] for j,i in enumerate(tri)) for c in range(2)]
        cells.append((ar,a,p));area_total+=ar
        for c in range(2):mg[c]+=ar*p[c]
    b=[-x/area_total for x in mg];energy=Q(0)
    for ar,a,p in cells:
        sa=[sum(v[c] for v in a) for c in range(2)]
        be=[-Q(14,27)*sa[c]-Q(14,9)*p[c] for c in range(2)]
        aa=[[v[c]-b[c] for c in range(2)] for v in a]
        q=sum((Q(1,6) if i==j else Q(1,12))*sum(aa[i][c]*aa[j][c] for c in range(2)) for i in range(3) for j in range(3))
        q+=Q(3,10)*sum(be[c]*sum(v[c] for v in aa) for c in range(2))
        q+=Q(81,280)*sum(x*x for x in be)+sum((p[c]+b[c])**2 for c in range(2))
        energy+=ar*q
    return energy

def make_patch(x,r,d):
    points=[(Q(1),-d),(x,Q(0)),(x+r,Q(0)),(x+2*r,Q(0)),
            (x+2*r,2*r),(x,2*r),(x+r,r)]
    child=[(6,1,2),(6,2,3),(6,3,4),(6,4,5),(6,5,1)]
    tris=[(0,2,1),(0,3,2)]+child
    a=zero(21,21)
    for tri in tris:
        cell=local([points[i] for i in tri]);ids=[2*i+c for i in tri for c in range(2)]+[14+i for i in tri]
        for i,gi in enumerate(ids):
            for j,gj in enumerate(ids):a[gi][gj]+=cell[i][j]
    root=[0,1,14];ends=[2,3,15,6,7,17];mid=[4,5,16,12,13,20]
    im=inverse(sub(a,mid,mid))
    ke=minus(sub(a,ends,ends),multiply(multiply(sub(a,ends,mid),im),sub(a,mid,ends)))
    kr=minus(sub(a,ends,root),multiply(multiply(sub(a,ends,mid),im),sub(a,mid,root)))
    return dict(points=points,child=child,a=a,root=root,ends=ends,mid=mid,im=im,k=ke,kr=kr)

def solve(patches,rootstate):
    m=len(patches);diag=[];upper=[];lower=[];rhs=[]
    for j in range(1,m):
        left,right=patches[j-1],patches[j]
        diag.append(add(sub(left['k'],[3,4,5],[3,4,5]),sub(right['k'],[0,1,2],[0,1,2])))
        rhs.append([[-x[0]] for x in multiply(add(sub(left['kr'],[3,4,5],[0,1,2]),sub(right['kr'],[0,1,2],[0,1,2])),rootstate)])
        if j<m-1:upper.append(sub(right['k'],[0,1,2],[3,4,5]))
        if j>1:lower.append(sub(left['k'],[3,4,5],[0,1,2]))
    invs=[];br=[]
    for j in range(m-1):
        dj,bj=diag[j],rhs[j]
        if j:
            factor=multiply(lower[j-1],invs[j-1])
            dj=minus(dj,multiply(factor,upper[j-1]));bj=minus(bj,multiply(factor,br[j-1]))
        invs.append(inverse(dj));br.append(bj)
    endpoints=[[[Q(0)] for _ in range(3)] for _ in range(m+1)]
    for j in reversed(range(m-1)):
        bj=br[j]
        if j<m-2:bj=minus(bj,multiply(upper[j],endpoints[j+2]))
        endpoints[j+1]=multiply(invs[j],bj)
    states=[]
    for j,p in enumerate(patches):
        ends=endpoints[j]+endpoints[j+1]
        mid=[[-x[0]] for x in multiply(p['im'],add(multiply(sub(p['a'],p['mid'],p['ends']),ends),multiply(sub(p['a'],p['mid'],p['root']),rootstate)))]
        state=[Q(0) for _ in range(21)]
        for ids,vals in ((p['root'],rootstate),(p['ends'],ends),(p['mid'],mid)):
            for i,v in zip(ids,vals):state[i]=v[0]
        states.append(state)
    return states

records=[]
for n in (4,8,16):
    r,d=Q(1,10*n),Q(1,n);m=5*n//2
    patches=[make_patch(2*j*r,r,d) for j in range(m)]
    x0=solve(patches,[[Q(0)],[Q(1)],[Q(0)]])
    x1=solve(patches,[[Q(0)],[Q(1)],[d]])
    def states(z):return [[a+z*(b-a) for a,b in zip(u,v)] for u,v in zip(x0,x1)]
    def energy(st):return sum(child_energy(p['points'],p['child'],x) for p,x in zip(patches,st))
    q0,q1,qm=energy(x0),energy(x1),energy(states(Q(-1)))
    qa=(q1+qm)/2-q0;qb=(q1-qm)/4;opt=-qb/qa
    st=states(opt);qmin=energy(st)
    rootreaction=[Q(0) for _ in range(3)]
    for p,x in zip(patches,st):
        for j,i in enumerate(p['root']):rootreaction[j]+=sum(p['a'][i][k]*x[k] for k in range(21))
    records.append({'N':n,'children':m,'side_length':'1/2','optimized_phi_root_over_d':str(opt),
        'child_quotient_energy_over_total_child_area':str(qmin/(4*r*r*m)),
        'root_reaction':[str(x) for x in rootreaction],
        'child_quotient_energies_over_area':[str(child_energy(p['points'],p['child'],x)/(4*r*r)) for p,x in zip(patches,st)]})

path=Path(__file__).with_name('exact-full-side-chain-result.json')
path.write_text(json.dumps({'arithmetic':'exact fractions','records':records,
    'scope':'full fixed-length straight-side chain and genuine terminal rectangular children; actual endpoint rows all assembled; not recursive toothed child and not original pressure conclusion'},indent=2)+'\n')
print(json.dumps({'result':str(path),'records':[(v['N'],v['children'],float(Q(v['child_quotient_energy_over_total_child_area']))) for v in records]}))
