"""Independent finite dimension/rank sanity evidence, never a general proof."""
from functools import lru_cache
from math import comb
from pathlib import Path
import json


@lru_cache(None)
def states(n, m):
    out = []

    def visit(i, stack, pairs, defects):
        if i == n:
            if not stack and len(defects) == m:
                out.append((tuple(pairs), tuple(defects)))
            return
        if stack:
            visit(i + 1, stack[:-1], pairs + [(stack[-1], i)], defects)
        if len(pairs) + len(stack) < (n - m) // 2:
            visit(i + 1, stack + [i], pairs, defects)
        if not stack and len(defects) < m:
            visit(i + 1, stack, pairs, defects + [i])

    visit(0, [], [], [])
    assert len(out) == comb(n, (n - m) // 2) - (
        comb(n, (n - m) // 2 - 1) if n > m else 0
    )
    return out


def gram_entry(n, x, y, delta, p):
    parent = list(range(n))

    def root(a):
        while parent[a] != a:
            parent[a] = parent[parent[a]]
            a = parent[a]
        return a

    for pairs, defects in [x, y]:
        for a, b in pairs:
            parent[root(a)] = root(b)
    components = {}
    for a in range(n):
        components.setdefault(root(a), [0, 0])
    for side, (_, defects) in enumerate([x, y]):
        for a in defects:
            components[root(a)][side] += 1
    loops = 0
    for a, b in components.values():
        if a == b == 0:
            loops += 1
        elif a != 1 or b != 1:
            return 0
    return pow(delta, loops, p)


def rank(a, p):
    a = [r[:] for r in a]
    r = 0
    for j in range(len(a)):
        k = next((k for k in range(r, len(a)) if a[k][j]), None)
        if k is None:
            continue
        a[k], a[r] = a[r], a[k]
        inv = pow(a[r][j], -1, p)
        a[r] = [(v * inv) % p for v in a[r]]
        for k in range(r + 1, len(a)):
            v = a[k][j]
            if v:
                a[k] = [(a[k][c] - v * a[r][c]) % p for c in range(len(a))]
        r += 1
    return r


def quantum_characteristic(delta, p):
    prev, cur = 0, 1
    for k in range(1, 2 * (p + 1) + 1):
        if cur == 0:
            return k
        prev, cur = cur, (delta * cur - prev) % p
    raise AssertionError("No finite-field recurrence zero in asserted search bound")


def support(n, ell, p):
    a = n + 1
    digits, weights = [a % ell], [1]
    a //= ell
    place = ell
    while a:
        digits.append(a % p)
        weights.append(place)
        place *= p
        a //= p
    out = {digits[-1] * weights[-1] - 1}
    for d, w in reversed(list(zip(digits[:-1], weights[:-1]))):
        out = {a + sign * d * w for a in out for sign in [-1, 1]}
    return out


rows, failures = [], []
for p in [2, 3, 5, 7]:
    for delta in range(p):
        ell = quantum_characteristic(delta, p)
        for n in range(9):
            dims, ranks = {}, {}
            for m in range(n % 2, n + 1, 2):
                basis = states(n, m)
                dims[m] = len(basis)
                ranks[m] = rank(
                    [[gram_entry(n, x, y, delta, p) for y in basis] for x in basis], p
                )
            for m in dims:
                predicted = sum(
                    ranks[r] for r in ranks if m in support(r, ell, p)
                )
                row = dict(p=p, delta=delta, ell=ell, n=n, m=m,
                           dimension=dims[m], predicted=predicted)
                rows.append(row)
                if predicted != dims[m]:
                    failures.append(row)

result = {
    "kind": "finite-independent-gram-rank-dimension-sanity",
    "limits": "Finite dimensions only; no proof of module structure or general theorem.",
    "field_parameter_rank_cases": sum(p * 9 for p in [2, 3, 5, 7]),
    "standard_module_cases": len(rows),
    "failures": failures,
    "rows": rows,
}
Path(__file__).with_suffix('.json').write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps({k: v for k, v in result.items() if k != 'rows'}))
