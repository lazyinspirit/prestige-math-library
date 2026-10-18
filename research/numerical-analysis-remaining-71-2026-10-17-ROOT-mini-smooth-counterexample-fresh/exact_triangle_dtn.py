"""Exact rational MINI mass DtN calculation on the stated one-child template.

This is a mathematical calculation, not a numerical pressure counterexample.
Uses only Python's Fraction; no tests or floating point eigensolver.
"""
from fractions import Fraction as Q
import json
from pathlib import Path


def zero(n, m):
    return [[Q(0) for _ in range(m)] for _ in range(n)]


def inverse(a):
    n = len(a)
    b = [row[:] + [Q(i == j) for j in range(n)] for i, row in enumerate(a)]
    for j in range(n):
        p = next(i for i in range(j, n) if b[i][j])
        b[j], b[p] = b[p], b[j]
        s = b[j][j]
        b[j] = [x / s for x in b[j]]
        for i in range(n):
            if i != j and b[i][j]:
                s = b[i][j]
                b[i] = [x - s * y for x, y in zip(b[i], b[j])]
    return [row[n:] for row in b]


def multiply(a, b):
    return [[sum(x * y for x, y in zip(row, col)) for col in zip(*b)] for row in a]


def determinant(a):
    b = [row[:] for row in a]
    d = Q(1)
    for j in range(len(b)):
        pivots = [i for i in range(j, len(b)) if b[i][j]]
        if not pivots:
            return Q(0)
        p = pivots[0]
        if p != j:
            b[p], b[j] = b[j], b[p]
            d = -d
        s = b[j][j]
        d *= s
        for i in range(j + 1, len(b)):
            t = b[i][j] / s
            for k in range(j + 1, len(b)):
                b[i][k] -= t * b[j][k]
    return d


def local(vertices):
    (x0, y0), (x1, y1), (x2, y2) = vertices
    twice = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0)
    assert twice > 0
    area = twice / 2
    g = [[(y1 - y2) / twice, (x2 - x1) / twice],
         [(y2 - y0) / twice, (x0 - x2) / twice],
         [(y0 - y1) / twice, (x1 - x0) / twice]]
    a = zero(9, 9)
    for i in range(3):
        for j in range(3):
            for c in range(2):
                a[2 * i + c][2 * j + c] = area * (Q(4, 45) if i == j else Q(1, 180))
                a[2 * i + c][6 + j] = area * g[j][c] / 10
                a[6 + j][2 * i + c] = area * g[j][c] / 10
            a[6 + i][6 + j] = -area * Q(7, 10) * sum(g[i][c] * g[j][c] for c in range(2))
    return a


v = [(Q(0), Q(0)), (Q(1), Q(0)), (Q(0), Q(1)),
     (Q(1, 6), Q(1, 6)), (Q(2, 3), Q(1, 6)), (Q(1, 6), Q(2, 3))]
filler = [(0, 1, 4), (0, 4, 3), (1, 2, 5), (1, 5, 4), (2, 0, 3), (2, 3, 5)]
all_triangles = filler + [(3, 4, 5)]
a = zero(18, 18)
# Global order: all six vector nodal values, then all six pressure values.
for tri in all_triangles:
    k = local([v[i] for i in tri])
    ids = [2 * i + c for i in tri for c in range(2)] + [12 + i for i in tri]
    for i, gi in enumerate(ids):
        for j, gj in enumerate(ids):
            a[gi][gj] += k[i][j]

outer = [0, 1, 2, 3, 4, 5, 12, 13, 14]
inner = [6, 7, 8, 9, 10, 11, 15, 16, 17]
block = lambda rows, cols: [[a[i][j] for j in cols] for i in rows]
invii = inverse(block(inner, inner))
t = [[-x for x in row] for row in multiply(invii, block(inner, outer))]
correction = multiply(block(outer, inner), [[-x for x in row] for row in t])
dtn = [[x - y for x, y in zip(r, s)] for r, s in zip(block(outer, outer), correction)]

# Quotient gauge: outer pressure at A0 is zero. Child pressure differences
# are measured from B0 and divided by r=1/2. This gives an 8x8 state map.
cols = [0, 1, 2, 3, 4, 5, 7, 8]
tq = [[t[i][j] for j in cols] for i in range(6)]
tq += [[2 * (t[i][j] - t[6][j]) for j in cols] for i in (7, 8)]
shift = [[tq[i][j] + (Q(5, 31) if i == j else 0) for j in range(8)] for i in range(8)]
value = determinant(shift)

def serial(a):
    return [[str(x) for x in row] for row in a]

result = {
    "arithmetic": "exact fractions",
    "template": "outer triangle plus homothetic half-size child; six annular triangles and one terminal child",
    "outer_state_order": ["ax_A0", "ay_A0", "ax_A1", "ay_A1", "ax_A2", "ay_A2", "phi_A0", "phi_A1", "phi_A2"],
    "inner_state_order": ["ax_B0", "ay_B0", "ax_B1", "ay_B1", "ax_B2", "ay_B2", "phi_B0", "phi_B1", "phi_B2"],
    "mass_DtN": serial(dtn),
    "interior_recovery": serial(t),
    "gauge_quotient_scaled_child_recovery": serial(tq),
    "det_T_plus_5_over_31_I": str(value),
    "minus_5_over_31_is_eigenvalue": value == 0,
}
path = Path(__file__).with_name("exact-triangle-dtn-result.json")
path.write_text(json.dumps(result, indent=2) + "\n")
print(json.dumps({"result": str(path), "minus_5_over_31_is_eigenvalue": value == 0,
                  "det_numerator_digits": len(str(abs(value.numerator))),
                  "det_denominator_digits": len(str(value.denominator))}))
