"""Exact finite-field certificate for the 5D Fibonacci B6 Lie-rank claim.

This is a compact arithmetic certificate, not a numerical approximation or a
project test.  The accompanying report explains why the specialization
phi -> 19, sqrt(phi) -> 9, r -> 15 in F_31 is a well-defined reduction of all
matrix coefficients and why a nonzero minor proves independence over C.
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
    return [[(x + y) % P for x, y in zip(row_a, row_b)]
            for row_a, row_b in zip(a, b)]


def sub(a, b):
    return [[(x - y) % P for x, y in zip(row_a, row_b)]
            for row_a, row_b in zip(a, b)]


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


def comm(a, b):
    return sub(mul(a, b), mul(b, a))


def adj(i, a):
    return mul(mul(braids[i - 1], a), braid_inverses[i - 1])


def paths_from(xs):
    if len(xs) == 7:
        if xs[-1] == 0:
            paths.append(tuple(xs))
        return
    choices = (1,) if xs[-1] == 0 else (0, 1)
    for label in choices:
        paths_from(xs + [label])


paths = []
paths_from([0, 1])  # x_0=1, x_1=tau; x_6=1.
assert paths == [
    (0, 1, 0, 1, 0, 1, 0),
    (0, 1, 0, 1, 1, 1, 0),
    (0, 1, 1, 0, 1, 1, 0),
    (0, 1, 1, 1, 0, 1, 0),
    (0, 1, 1, 1, 1, 1, 0),
]
d = (1, phi)
braids = []
for i in range(1, 6):
    e = [[0] * 5 for _ in range(5)]
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
    braids.append(add(scale(r, eye(5)), scale(1 - r, projector)))
braid_inverses = [inverse(b) for b in braids]

c = mul(braids[0], braid_inverses[1])
x = sub(c, inverse(c))
y = [x]
y += [adj(i, x) for i in (1, 2, 3)]
y += [comm(y[3], y[0]), comm(y[3], y[1]), comm(y[3], y[2])]
y += [adj(3, y[1]), adj(3, y[2]), adj(2, y[3]), adj(4, y[3])]
y += [adj(2, y[4]), adj(4, y[4]), adj(4, y[5]), adj(4, y[6])]
y += [comm(y[10], y[j]) for j in (3, 4, 5, 6, 7, 8, 9)]
y += [comm(y[12], y[0]), comm(y[12], y[1])]
assert len(y) == 24

# Row-major coordinates (1,1),...,(5,4), omitting only (5,5).
minor = [[entry for row in matrix for entry in row][:24] for matrix in y]
det = 1
for col in range(24):
    pivot = next((row for row in range(col, 24) if minor[row][col]), None)
    if pivot is None:
        det = 0
        break
    if pivot != col:
        minor[col], minor[pivot] = minor[pivot], minor[col]
        det = -det
    det = det * minor[col][col] % P
    z = inv(minor[col][col])
    minor[col] = [z * value % P for value in minor[col]]
    for row in range(col + 1, 24):
        if minor[row][col]:
            z = minor[row][col]
            minor[row] = [(a - z * b) % P
                          for a, b in zip(minor[row], minor[col])]

assert det % P == 17
print("F_31 determinant of the selected 24x24 minor:", det % P)
