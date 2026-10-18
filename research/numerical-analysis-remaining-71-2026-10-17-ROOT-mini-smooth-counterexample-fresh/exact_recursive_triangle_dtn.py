"""Finite-depth exact coupled DtN updates; no fixed-transfer assumption."""
from exact_triangle_dtn import Q, zero, inverse, multiply, local, v, filler, serial
from pathlib import Path
import json

outer = [0, 1, 2, 3, 4, 5, 12, 13, 14]
inner = [6, 7, 8, 9, 10, 11, 15, 16, 17]
f = zero(18, 18)
for tri in filler:
    cell = local([v[i] for i in tri])
    ids = [2 * i + c for i in tri for c in range(2)] + [12 + i for i in tri]
    for i, gi in enumerate(ids):
        for j, gj in enumerate(ids):
            f[gi][gj] += cell[i][j]

def sub(a, rows, cols):
    return [[a[i][j] for j in cols] for i in rows]

def update(child):
    a = [row[:] for row in f]
    scales = [Q(1, 2)] * 6 + [Q(1)] * 3
    for i, gi in enumerate(inner):
        for j, gj in enumerate(inner):
            a[gi][gj] += scales[i] * child[i][j] * scales[j]
    invii = inverse(sub(a, inner, inner))
    recovery = [[-x for x in row] for row in multiply(invii, sub(a, inner, outer))]
    corr = multiply(sub(a, outer, inner), [[-x for x in row] for row in recovery])
    d = [[x - y for x, y in zip(r, s)] for r, s in zip(sub(a, outer, outer), corr)]
    cols = [0, 1, 2, 3, 4, 5, 7, 8]
    tq = [[recovery[i][j] for j in cols] for i in range(6)]
    tq += [[2 * (recovery[i][j] - recovery[6][j]) for j in cols] for i in (7, 8)]
    return d, recovery, tq, invii, a

# Fixed exactly-solenoidal smooth source in the first immutable filler cell:
# integral psi=0, integral u*b=(1,0), all raw affine moments zero.
tri = filler[0]
(x0, y0), (x1, y1), (x2, y2) = [v[i] for i in tri]
twice = (x1-x0)*(y2-y0)-(x2-x0)*(y1-y0)
gx = [(y1-y2)/twice, (y2-y0)/twice, (y0-y1)/twice]
load = [Q(0) for _ in range(18)]
for j, node in enumerate(tri):
    load[2*node] -= Q(14, 27)
    load[12+node] -= Q(14, 9)*gx[j]

d = local(v[:3])
recoveries = []
records = []
for depth in range(1, 4):
    d, recovery, tq, invii, a = update(d)
    recoveries.append(tq)
    fi = [[load[i]] for i in inner]
    interior_force = multiply(invii, fi)
    term = multiply(sub(a, outer, inner), interior_force)
    boundary_load = [[load[i] - term[j][0]] for j, i in enumerate(outer)]
    pressure = multiply(inverse(sub(d, [7, 8], [7, 8])), [boundary_load[7], boundary_load[8]])
    boundary_state = [[Q(0)] for _ in range(9)]
    boundary_state[7], boundary_state[8] = pressure
    child = multiply(recovery, boundary_state)
    child = [[x[0] + y[0]] for x, y in zip(child, interior_force)]
    state = child[:6] + [[2*(child[i][0]-child[6][0])] for i in (7, 8)]
    for prior_t in reversed(recoveries[:-1]):
        state = multiply(prior_t, state)
    records.append({
        "depth": depth,
        "DtN": serial(d),
        "recovery_gauge_quotient": serial(tq),
        "source_outer_pressure_differences": [str(x[0]) for x in pressure],
        "source_deepest_scaled_state": [str(x[0]) for x in state],
    })

path = Path(__file__).with_name("exact-recursive-triangle-dtn-result.json")
path.write_text(json.dumps({
    "arithmetic": "exact fractions",
    "depths": records,
    "source": "fixed compact smooth divergencefree source in immutable filler[0], raw affine moments0, bubble moment(1,0)",
    "warning": "Each depth uses its own recursively updated DtN/recovery. No power of the terminal-child transfer is used. These are mass multipliers, not evolutionary Stokes pressures.",
}, indent=2) + "\n")
print(json.dumps({"result": str(path), "exact_depths": [x["depth"] for x in records]}))
