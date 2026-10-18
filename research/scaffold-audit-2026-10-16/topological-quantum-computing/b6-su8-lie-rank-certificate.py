"""Exact F_31 Lie-rank certificate for the total-tau Fibonacci B6 block.

The finite coefficient specialization and the implication from a nonzero
minor to exact complex independence are proved in report.md. This code uses
only Python integer arithmetic and a deterministic adjoint/commutator closure
order; it is arithmetic proof evidence, not a numerical rank test.
"""

P = 31
phi, sqrt_phi, r = 19, 9, 15


def inv(a):
    a %= P
    if not a:
        raise ZeroDivisionError("zero in F_31")
    return pow(a, P - 2, P)


assert (phi * phi - phi - 1) % P == 0
assert (sqrt_phi * sqrt_phi - phi) % P == 0
assert (pow(r, 4, P) - pow(r, 3, P) + r * r - r + 1) % P == 0
assert (r + inv(r) + inv(phi)) % P == 0


def eye(n):
    return [[int(i == j) for j in range(n)] for i in range(n)]


def add(a, b):
    return [[(x + y) % P for x, y in zip(ra, rb)]
            for ra, rb in zip(a, b)]


def sub(a, b):
    return [[(x - y) % P for x, y in zip(ra, rb)]
            for ra, rb in zip(a, b)]


def scale(c, a):
    return [[c * x % P for x in row] for row in a]


def mul(a, b):
    return [[sum(a[i][k] * b[k][j] for k in range(len(b))) % P
             for j in range(len(b[0]))] for i in range(len(a))]


def inverse(a):
    n = len(a)
    work = [row[:] + eye(n)[i] for i, row in enumerate(a)]
    for col in range(n):
        pivot = next((row for row in range(col, n)
                      if work[row][col] % P), None)
        if pivot is None:
            raise ValueError("singular matrix")
        work[col], work[pivot] = work[pivot], work[col]
        z = inv(work[col][col])
        work[col] = [z * x % P for x in work[col]]
        for row in range(n):
            if row != col and work[row][col]:
                z = work[row][col]
                work[row] = [(x - z * y) % P
                             for x, y in zip(work[row], work[col])]
    return [row[n:] for row in work]


def flatten(a):
    return [x for row in a for x in row]


def comm(a, b):
    return sub(mul(a, b), mul(b, a))


def add_independent(v, basis, pivots):
    """Add v to a normalized row basis; return its new pivot or None."""
    v = [x % P for x in v]
    for row, col in zip(basis, pivots):
        if v[col]:
            z = v[col]
            v = [(x - z * y) % P for x, y in zip(v, row)]
    col = next((j for j, x in enumerate(v) if x), None)
    if col is None:
        return None
    z = inv(v[col])
    v = [z * x % P for x in v]
    for j, row in enumerate(basis):
        if row[col]:
            z = row[col]
            basis[j] = [(x - z * y) % P for x, y in zip(row, v)]
    at = next((j for j, old in enumerate(pivots) if old > col), len(pivots))
    basis.insert(at, v)
    pivots.insert(at, col)
    return col


def enumerate_paths(prefix):
    if len(prefix) == 7:
        if prefix[-1] == 1:
            paths.append(tuple(prefix))
        return
    for label in ((1,) if prefix[-1] == 0 else (0, 1)):
        enumerate_paths(prefix + [label])


paths = []
enumerate_paths([0, 1])  # x_0=1, x_1=tau, x_6=tau.
assert paths == [
    (0, 1, 0, 1, 0, 1, 1),
    (0, 1, 0, 1, 1, 0, 1),
    (0, 1, 0, 1, 1, 1, 1),
    (0, 1, 1, 0, 1, 0, 1),
    (0, 1, 1, 0, 1, 1, 1),
    (0, 1, 1, 1, 0, 1, 1),
    (0, 1, 1, 1, 1, 0, 1),
    (0, 1, 1, 1, 1, 1, 1),
]
d = (1, phi)
braids = []
for i in range(1, 6):
    e = [[0] * 8 for _ in range(8)]
    for row, path in enumerate(paths):
        if path[i - 1] != path[i + 1]:
            continue
        a = path[i - 1]
        for col, other in enumerate(paths):
            if any(path[j] != other[j] for j in range(7) if j != i):
                continue
            b, bp = path[i], other[i]
            numerator = 1 if b == bp == 0 else phi if b == bp == 1 else sqrt_phi
            e[row][col] = numerator * inv(d[a]) % P
    projector = scale(inv(phi), e)
    braids.append(add(scale(r, eye(8)), scale(1 - r, projector)))
braid_inverses = [inverse(b) for b in braids]


def adj(i, a):
    return mul(mul(braids[i - 1], a), braid_inverses[i - 1])


c = mul(braids[0], braid_inverses[1])
x = sub(c, inverse(c))
assert sum(x[i][i] for i in range(8)) % P == 0

# Deterministic selected-word list Y0,...,Y62. In each round, append all
# independent Ad_i(Y_j) in j/i order, then all independent [Y_j,Y_i] in
# j/i order, using the snapshot at the start of each phase.
selected = [x]
provenance = [("X",)]
basis, pivots = [], []
assert add_independent(flatten(x), basis, pivots) is not None
while True:
    old_rank = len(basis)
    for j, matrix in enumerate(selected[:]):
        for i in range(1, 6):
            candidate = adj(i, matrix)
            if add_independent(flatten(candidate), basis, pivots) is not None:
                selected.append(candidate)
                provenance.append(("Ad", i, j))
    snapshot = selected[:]
    for j in range(len(snapshot)):
        for i in range(j):
            candidate = comm(snapshot[j], snapshot[i])
            if add_independent(flatten(candidate), basis, pivots) is not None:
                selected.append(candidate)
                provenance.append(("br", j, i))
    if len(basis) == old_rank:
        break

assert len(selected) == 63
assert len(basis) == 63
assert all(sum(m[i][i] for i in range(8)) % P == 0 for m in selected)

# First 63 row-major coordinates, omitting only the (8,8) entry.
minor = [[entry for row in matrix for entry in row][:63] for matrix in selected]
det = 1
for col in range(63):
    pivot = next((row for row in range(col, 63) if minor[row][col]), None)
    if pivot is None:
        det = 0
        break
    if pivot != col:
        minor[col], minor[pivot] = minor[pivot], minor[col]
        det = -det
    det = det * minor[col][col] % P
    z = inv(minor[col][col])
    minor[col] = [z * value % P for value in minor[col]]
    for row in range(col + 1, 63):
        if minor[row][col]:
            z = minor[row][col]
            minor[row] = [(a - z * b) % P
                          for a, b in zip(minor[row], minor[col])]

assert det % P == 22
print("selected words Y0..Y62:")
for index, word in enumerate(provenance):
    print(index, word)
print("F_31 determinant of the selected 63x63 minor:", det % P)
