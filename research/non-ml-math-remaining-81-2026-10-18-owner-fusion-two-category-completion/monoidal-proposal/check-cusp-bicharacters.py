"""Independent nonsymmetric bicharacter check, not a proof in all braided categories."""
from collections import Counter

def q(a,b,k=1): return Counter({(x,y):k for x in a for y in b})
def add(*xs):
    result=Counter()
    for x in xs:
        for pair,k in x.items(): result[pair]+=k
    return result

def equal(a,b):return all(a[x]==b[x] for x in a.keys()|b.keys())
def pa(u,v,w,z):return add(q(v,u,-1),q(z,w,-1),q(z,u,-1))
def po(u,v,w,z):return add(q(z,u+v+w,-1),q(v+w,u,-1))
# Both sides include positive tensor-bimodule shuffle, negative op action,
# followed by the proposed negative permutation cusp.
first_left=add(q('v','ab'),q('b','ua',-1),pa('uab','vc','w','z'))
first_right=add(q('bc','w'),q('cz','b',-1),pa('u','v','aw','bcz'))
second_left=add(q('v','b'),q('b','u',-1),q('d','vc',-1),po('ub','vcd','w','z'))
second_right=add(q('d','w'),q('cw','b',-1),q('z','d',-1),po('u','v','bcw','dz'))
assert equal(first_left,first_right)
assert equal(second_left,second_right)
def inverse_pairs(names,order):
    position={x:i for i,x in enumerate(order)}
    return Counter({(y,x):-1 for i,x in enumerate(names) for y in names[i+1:] if position[y]<position[x]})
assert equal(first_left,inverse_pairs('uvabcwz','vczbuaw'))
assert equal(second_left,inverse_pairs('uvbcdwz','zdvcwbu'))
assert sum(abs(x) for x in first_left.values())==10
assert sum(abs(x) for x in second_left.values())==16
print('PASS: both cusp balance equations for independent ordered bicharacter coefficients; inversion counts 10 and 16.')
def pra(u,v,w,z):return q(v,w)
def prp(u,v,w,z):return add(q(u+v,w),q(v,z))
rfirst_left=add(q('v','ab'),pra('ua','vbc','w','z'))
rfirst_right=add(q('bc','w'),pra('u','v','awb','cz'))
rsecond_left=add(q('v','bc'),q('u','b'),q('v','d'),prp('buc','dv','w','z'))
rsecond_right=add(q('cd','w'),q('b','w'),q('d','z'),prp('u','v','wb','czd'))
assert equal(rfirst_left,rfirst_right)
assert equal(rsecond_left,rsecond_right)
def positive_pairs(names,order):return Counter({(y,x):k*-1 for (x,y),k in inverse_pairs(names,order).items()})
assert equal(rfirst_left,positive_pairs('uvabcwz','uawbvcz'))
assert equal(rsecond_left,positive_pairs('uvbcdwz','wbuczdv'))
print('PASS: both right-dual cusp balance equations, independent ordered bicharacter coefficients.')
