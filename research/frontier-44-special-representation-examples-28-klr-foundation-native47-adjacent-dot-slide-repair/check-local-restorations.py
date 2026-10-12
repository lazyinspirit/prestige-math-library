"""Exact finite checks for this research candidate; does not mutate native inputs."""
from pathlib import Path
from itertools import product
import json, hashlib
HERE=Path(__file__).resolve().parent
ROOT=HERE.parent.parent

def add(a,b):
    c=dict(a)
    for e,v in b.items(): c[e]=c.get(e,0)+v
    return {e:v for e,v in c.items() if v}
def neg(a):return {e:-v for e,v in a.items()}
def mul(a,b):
    c={}
    for e,v in a.items():
        for f,w in b.items():
            g=tuple(x+y for x,y in zip(e,f));c[g]=c.get(g,0)+v*w
    return {e:v for e,v in c.items() if v}
def swap(a,r):
    c={}
    for e,v in a.items():
        z=list(e);z[r],z[r+1]=z[r+1],z[r];c[tuple(z)]=v
    return c
def variable(r):return {tuple(int(i==r) for i in range(3)):1}
def power(a,n):
    c={(0,0,0):1}
    for _ in range(n):c=mul(c,a)
    return c
def divide_difference(a,r):
    remainder=add(a,neg(swap(a,r)));out={};divisor=add(variable(r),neg(variable(r+1)))
    while remainder:
        e=max(remainder,key=lambda t:t[r]);v=remainder[e]
        assert e[r]>0,'numerator not divisible by adjacent difference'
        f=list(e);f[r]-=1;term={tuple(f):v}
        out=add(out,term);remainder=add(remainder,neg(mul(term,divisor)))
    return out
def crossing(a,word,r):
    if word[r]==word[r+1]:return divide_difference(a,r),word
    h={('i','j'):2,('j','i'):1}[word[r],word[r+1]]
    value=mul(power(add(variable(r),neg(variable(r+1))),h),swap(a,r))
    w=list(word);w[r],w[r+1]=w[r+1],w[r]
    return value,tuple(w)
def triple(a,rs):
    w=('i','j','i')
    for r in reversed(rs):a,w=crossing(a,w,r)
    assert w==('i','j','i')
    return a
x,y,z=map(variable,range(3));xy=add(x,neg(y));zy=add(z,neg(y))
correction=neg(add(add(power(xy,2),mul(xy,zy)),power(zy,2)))
assert add(power(xy,3),neg(power(zy,3)))==mul(add(x,neg(z)),neg(correction))
checked=0
for e in product(range(7),repeat=3):
    if sum(e)>6:continue
    f={e:1}
    assert add(triple(f,[1,0,1]),neg(triple(f,[0,1,0])))==mul(correction,f)
    checked+=1
h={('i','j'):2,('j','i'):1}
def dimension(word):
    return 1+sum(h.get((word[a],word[b]),0) for a in range(3) for b in range(a))
assert [dimension(w) for w in [('i','j','i'),('j','i','i'),('i','i','j')]]==[4,5,3]
assert dimension(('j','i','i'))-dimension(('j','i','i'))==0
before=json.loads((HERE/'current47-preimage.pages.json').read_bytes()); after=json.loads((HERE/'candidate47-combined.pages.json').read_bytes())
changes=[]
for bpage,apage in zip(before,after):
    for bi,ai in zip(bpage['items'],apage['items']):
        for k in set(bi)|set(ai):
            if bi.get(k)!=ai.get(k):changes.append([bi['id'],k])
assert sorted(changes)==sorted([
 ['def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators','statement'],
 ['ex-signed-two-direction-multiedge-quiver-flag-crossing','statement'],
 ['ex-signed-two-direction-multiedge-quiver-flag-crossing','strategy']])
guard=json.loads((HERE/'guarded-statement-replacement.json').read_bytes())
for record in guard['current_guards']:
    assert hashlib.sha256((ROOT/record['path']).read_bytes()).hexdigest()==record['sha256'],record['path']
print(json.dumps({'status':'local finite checks pass; not native gate/audit/readiness', 'monomials_checked_through_total_degree_6':checked,'cubic_identity_exact':True,'dimensions':[4,5,3],'fixed_equal_swap_difference':0,'combined_changed_fields':changes,'all_current_source_guards_match':True},indent=2))
