from itertools import permutations, product
from fractions import Fraction
from math import comb, gcd, lcm
import json


def primes_until_bound(n):
    bound = 2*(n+2)**n
    q, p, out = 1, 2, []
    while q <= bound:
        if all(p % d for d in range(2, int(p**0.5)+1)):
            out.append(p); q *= p
        p += 1
    assert out[-1] <= 16*(n+2)**4
    assert q <= bound*16*(n+2)**4
    return out


def mod_eliminate(a, p):
    m, n = len(a), len(a[0]) if a else 0
    b = [[x % p for x in row] for row in a]
    labels = list(range(m)); selected = []; r = 0; det = 1
    for c in range(n):
        pivot = next((i for i in range(r,m) if b[i][c]), None)
        if pivot is None: continue
        if pivot != r:
            b[r], b[pivot] = b[pivot], b[r]
            labels[r], labels[pivot] = labels[pivot], labels[r]
            det = -det
        selected.append(labels[r]); v = b[r][c]; det = det*v % p
        inv = pow(v, -1, p)
        for i in range(r+1,m):
            f = b[i][c]*inv % p
            for j in range(c,n): b[i][j] = (b[i][j]-f*b[r][j]) % p
        r += 1
        if r == m: break
    return r, selected, (det % p if m == n == r else 0)


def det_crt(a):
    n = len(a)
    if not n: return 1
    x, q = 0, 1
    for p in primes_until_bound(n):
        residue = mod_eliminate(a,p)[2]
        x += q*((residue-x)*pow(q % p,-1,p) % p)
        q *= p
    if x > q//2: x -= q
    assert abs(x) <= (n+2)**n
    return x


def det_permutations(a):
    n = len(a); value = 0
    for perm in permutations(range(n)):
        term = (-1)**sum(perm[i] > perm[j] for i in range(n) for j in range(i+1,n))
        for i,j in enumerate(perm): term *= a[i][j]
        value += term
    return value


def rank_rational(a):
    if not a: return 0
    b = [[Fraction(x) for x in row] for row in a]; r = 0
    for c in range(len(b[0])):
        j = next((j for j in range(r,len(b)) if b[j][c]), None)
        if j is None: continue
        b[r],b[j] = b[j],b[r]
        v = b[r][c]; b[r] = [x/v for x in b[r]]
        for i in range(r+1,len(b)):
            f = b[i][c]; b[i] = [x-f*y for x,y in zip(b[i],b[r])]
        r += 1
        if r == len(b): break
    return r


def rank_modular(a,n):
    best, selected = 0, []
    for p in primes_until_bound(n):
        rank, indices, _ = mod_eliminate(a,p)
        if rank > best: best,selected = rank,indices
    return best,selected


lcm_cases = 0
for m in range(2,101):
    lm = lcm(*range(1,m+1))
    assert lm*m >= 2**(m-1)
    for j in range(m): assert lm % comb(m-1,j) == 0
    lcm_cases += 1

matrices = [[[x[0],x[1]],[x[2],x[3]]] for x in product((-1,0,1),repeat=4)]
seed = 1979
for n in range(1,7):
    for sample in range(30):
        a=[]
        for i in range(n):
            row=[]
            for j in range(n):
                seed = (1103515245*seed+12345) % 2**31
                row.append(seed % 3 - 1)
            a.append(row)
        if n>1 and sample % 3 == 0: a[-1] = a[0][:]
        if sample % 11 == 0: a = [[0]*n for _ in range(n)]
        matrices.append(a)

kernels = 0
for a in matrices:
    n = len(a)
    assert det_crt(a) == det_permutations(a)
    r, indices = rank_modular(a,n)
    assert r == rank_rational(a)
    assert rank_rational([a[i] for i in indices]) == r
    if r == n-1:
        rows = [a[i] for i in indices]
        w = [(-1)**j*det_crt([row[:j]+row[j+1:] for row in rows]) for j in range(n)]
        g=0
        for x in w: g=gcd(g,x)
        assert g > 0
        w=[x//g for x in w]
        assert all(sum(x*y for x,y in zip(row,w))==0 for row in a)
        kernels += 1

print(json.dumps({'matrix_cases':len(matrices),'independent_checks':['Leibniz determinant enumeration','rational Fraction elimination','integer null-vector multiplication'],'primitive_kernel_cases':kernels,'lcm_binomial_rows':lcm_cases,'result':'pass'},indent=2))
