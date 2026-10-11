"""Finite Laurent-polynomial diagnostic for the new proof's recurrence.

Compute Gaussians by Pascal, independently construct the characteristic
polynomial by multiplying its linear factors, then compare coefficients.
This is supporting evidence, not a mathematical acceptance or gate.
"""
from collections import defaultdict
from functools import lru_cache
from math import gcd
import json

def add(*polys):
    out = defaultdict(int)
    for p in polys:
        for e, c in p.items():
            out[e] += c
    return {e: c for e, c in out.items() if c}

def mul(a, b):
    out = defaultdict(int)
    for e, c in a.items():
        for f, k in b.items():
            out[e+f] += c*k
    return {e: c for e, c in out.items() if c}

@lru_cache(None)
def ordinary(n, k):
    if k < 0 or k > n:
        return {}
    if k == 0 or k == n:
        return {0: 1}
    return add(ordinary(n-1, k-1), mul({2*k: 1}, ordinary(n-1, k)))

def g(d, s):
    return mul({-s*(d-1): 1}, ordinary(d+s-1, d-1))

def characteristic(d):
    p = [{0: 1}]
    for e in range(1-d, d, 2):
        p = [add(p[j] if j < len(p) else {},
                 mul({e: -1}, p[j-1]) if j else {})
             for j in range(len(p)+1)]
    return p

def evaluate(p, v, modulus):
    return sum(c*pow(v, e, modulus) for e, c in p.items()) % modulus

symbolic = specialized = 0
for d in range(1, 13):
    p = characteristic(d)
    assert p[-1] == {0: (-1)**d}
    assert g(d, 0) == {0: 1}
    for n in range(d, d+25):
        total = add(*(mul(p[j], g(d, n-j)) for j in range(d+1)))
        assert total == {}, (d, n, total)
        symbolic += 1
        for modulus in [2, 3, 4, 5, 6, 7, 8, 9, 10, 12]:
            for v in range(1, modulus):
                if gcd(v, modulus) != 1:
                    continue
                assert sum(evaluate(p[j], v, modulus)*evaluate(g(d, n-j), v, modulus)
                           for j in range(d+1)) % modulus == 0
                assert evaluate(p[-1], v, modulus) in [1, modulus-1]
                specialized += 1
print(json.dumps({"symbolic_recurrences": symbolic,
                  "specialized_recurrences": specialized,
                  "rank_one_deficit_range": [1, 12],
                  "moduli": [2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
                  "result": "all finite comparisons passed",
                  "mathematical_acceptance": False}, indent=2))
