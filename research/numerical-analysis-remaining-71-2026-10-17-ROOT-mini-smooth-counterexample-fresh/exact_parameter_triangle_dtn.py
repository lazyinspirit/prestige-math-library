"""Exact canonical-strain parameter DtN and actual smooth-source pressure crossentry.

No spectral or unboundedness claim. Fraction arithmetic on the fully specified
one-child conforming triangular template; no numerical eigensolver/test suite.
"""
from fractions import Fraction as Q
from pathlib import Path
import json


def zero(n, m):
    return [[Q(0) for _ in range(m)] for _ in range(n)]


def inverse(a):
    n = len(a)
    b = [row[:] + [Q(i == j) for j in range(n)] for i, row in enumerate(a)]
    for j in range(n):
        p = next(i for i in range(j, n) if b[i][j])
        b[j], b[p] = b[p], b[j]
        scale = b[j][j]
        b[j] = [x / scale for x in b[j]]
        for i in range(n):
            if i != j and b[i][j]:
                scale = b[i][j]
                b[i] = [x - scale*y for x, y in zip(b[i], b[j])]
    return [row[n:] for row in b]


def mm(a, b):
    return [[sum(x*y for x, y in zip(row, col)) for col in zip(*b)] for row in a]


def sub(a, rows, cols):
    return [[a[i][j] for j in cols] for i in rows]


vertices = [(Q(0), Q(0)), (Q(1), Q(0)), (Q(0), Q(1)),
            (Q(1, 6), Q(1, 6)), (Q(2, 3), Q(1, 6)), (Q(1, 6), Q(2, 3))]
filler = [(0, 1, 4), (0, 4, 3), (1, 2, 5), (1, 5, 4), (2, 0, 3), (2, 3, 5)]
outer = [0, 1, 2, 3, 4, 5, 12, 13, 14]
inner = [6, 7, 8, 9, 10, 11, 15, 16, 17]


def local(points, lam, nu):
    """Eliminate only bubble velocity; E=2 integral eps:eps exactly."""
    (x0, y0), (x1, y1), (x2, y2) = points
    twice = (x1-x0)*(y2-y0)-(x2-x0)*(y1-y0)
    area = twice/2
    g = [[(y1-y2)/twice, (x2-x1)/twice],
         [(y2-y0)/twice, (x0-x2)/twice],
         [(y0-y1)/twice, (x1-x0)/twice]]
    # T_ab = integral partial_a b partial_b b.
    t = [[area*Q(81, 20)*sum(gi[a]*gi[b] for gi in g) for b in range(2)] for a in range(2)]
    trace = t[0][0]+t[1][1]
    bb = [[lam*area*Q(81, 280)*(a == b) + nu*(t[a][b]+trace*(a == b))
           for b in range(2)] for a in range(2)]
    ibb = inverse(bb)
    coupling = zero(9, 2)
    raw = zero(9, 9)
    for i in range(3):
        for a in range(2):
            coupling[2*i+a][a] = lam*area*Q(3, 20)
        for a in range(2):
            coupling[6+i][a] = area*Q(9, 20)*g[i][a]
        for j in range(3):
            dot = sum(g[i][a]*g[j][a] for a in range(2))
            for a in range(2):
                for b in range(2):
                    raw[2*i+a][2*j+b] = (
                        lam*area*(Q(1, 6) if i == j else Q(1, 12))*(a == b)
                        + nu*area*((a == b)*dot+g[i][b]*g[j][a]))
                raw[2*i+a][6+j] = area*g[j][a]/3
                raw[6+j][2*i+a] = area*g[j][a]/3
    schur = mm(mm(coupling, ibb), list(map(list, zip(*coupling))))
    condensed = [[x-y for x, y in zip(r, s)] for r, s in zip(raw, schur)]
    return condensed, coupling, ibb


cache = {}


def recursive(depth, lam, nu):
    key = (depth, lam, nu)
    if key in cache:
        return cache[key]
    if depth == 0:
        result = (local(vertices[:3], lam, nu)[0], None)
        cache[key] = result
        return result
    assembled = zero(18, 18)
    for tri in filler:
        k = local([vertices[i] for i in tri], lam, nu)[0]
        ids = [2*i+c for i in tri for c in range(2)]+[12+i for i in tri]
        for i, gi in enumerate(ids):
            for j, gj in enumerate(ids):
                assembled[gi][gj] += k[i][j]
    child = recursive(depth-1, lam/4, nu)[0]
    scale = [Q(1)]*6+[Q(1, 2)]*3
    for i, gi in enumerate(inner):
        for j, gj in enumerate(inner):
            assembled[gi][gj] += scale[i]*child[i][j]*scale[j]
    ii = inverse(sub(assembled, inner, inner))
    recovery = [[-x for x in row] for row in mm(ii, sub(assembled, inner, outer))]
    correction = mm(sub(assembled, outer, inner), [[-x for x in row] for row in recovery])
    dtn = [[x-y for x, y in zip(r, s)] for r, s in zip(sub(assembled, outer, outer), correction)]
    result = (dtn, (assembled, ii, recovery))
    cache[key] = result
    return result


def solve_outer(depth, lam, nu, load):
    dtn, (assembled, ii, recovery) = recursive(depth, lam, nu)
    interior_force = mm(ii, [[load[i]] for i in inner])
    correction = mm(sub(assembled, outer, inner), interior_force)
    boundary_load = [[load[i]-correction[j][0]] for j, i in enumerate(outer)]
    # Zero no-slip outer velocities; pressure at A0 gauges to zero.
    p = mm(inverse(sub(dtn, [7, 8], [7, 8])), [boundary_load[7], boundary_load[8]])
    o = [[Q(0)] for _ in range(9)]
    o[7], o[8] = p
    j = mm(recovery, o)
    j = [[x[0]+y[0]] for x, y in zip(j, interior_force)]
    full = [[Q(0)] for _ in range(18)]
    for index, value in zip(outer, o):
        full[index] = value
    for index, value in zip(inner, j):
        full[index] = value
    return full, dtn


def crossentry(depth, lam, nu):
    source_tri = filler[0]
    k, coupling, ibb = local([vertices[i] for i in source_tri], lam, nu)
    ids = [2*i+c for i in source_tri for c in range(2)]+[12+i for i in source_tri]
    source_bubble = [[Q(1)], [Q(0)]]
    condensed_load = mm(mm(coupling, ibb), source_bubble)
    load = [Q(0) for _ in range(18)]
    for gi, value in zip(ids, condensed_load):
        load[gi] -= value[0]
    response, dtn = solve_outer(depth, lam, nu, load)
    # Fixed smooth q_src moments (1,-1,0) against barycentric tests of source K.
    observation = response[12][0]-response[13][0]
    # Independent exact reciprocity representation via the actual q-divergence lift.
    qload = [Q(0) for _ in range(18)]
    qload[12], qload[13] = Q(1), Q(-1)
    lift, _ = solve_outer(depth, lam, nu, qload)
    local_state = [lift[i] for i in ids]
    beta = mm(ibb, mm(list(map(list, zip(*coupling))), local_state))
    bubble_observation = -beta[0][0]
    return observation, bubble_observation, dtn


records = []
for depth in (1, 2, 3):
    mass, mass_bubble, _ = crossentry(depth, Q(1), Q(0))
    for lam, fourth_root in ((1, 1), (16, 2), (256, 4), (4096, 8)):
        pressure, bubble, dtn = crossentry(depth, Q(lam), Q(1))
        residue = pressure-mass
        records.append({
            "depth": depth, "lambda": lam, "nu": 1,
            "resolvent_pressure_qsrc": str(pressure),
            "mass_multiplier_qsrc": str(mass),
            "homogeneous_pressure_Laplace_qsrc": str(residue),
            "lambda_quarter_times_absolute_crossentry": str(fourth_root*abs(residue)),
            "same_resolvent_via_source_bubble_lift": str(bubble),
            "same_mass_via_source_bubble_lift": str(mass_bubble),
            "exact_reciprocity_equalities": (pressure == bubble and mass == mass_bubble),
            "boundary_DtN": [[str(x) for x in row] for row in dtn],
        })

path = Path(__file__).with_name("exact-parameter-triangle-dtn-result.json")
path.write_text(json.dumps({
    "arithmetic": "exact fractions",
    "viscosity_form": "canonical 2nu integral epsilon(u):epsilon(v)",
    "source": "one fixed Cc-infinity divergencefree u in filler[0], raw affine moments0, raw bubble moment(1,0)",
    "observation": "one fixed Cc-infinity meanzero q_src in filler[0], P1 moments(1,-1,0); L2 projection norm uniformly bounded",
    "crossentry": "(pi_lambda-phi_u,q_src)=(u,W_lambda q-Wh q); mass multiplier subtraction retained",
    "records": records,
    "warning": "finite-depth actual B1 diagnostic only; no unboundedness, fixed transfer spectrum, finiteT, or nonlinear conclusion",
}, indent=2) + "\n")
print(json.dumps({"result": str(path), "actual_parameter_records": len(records),
                  "exact_reciprocity_equalities": all(x["exact_reciprocity_equalities"] for x in records)}))
