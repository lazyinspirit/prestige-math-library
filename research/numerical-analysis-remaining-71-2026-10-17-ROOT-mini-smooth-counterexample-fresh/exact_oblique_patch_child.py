"""Exact full two-triangle parent patch plus genuine mixed MINI child DtN."""
from exact_triangle_dtn import Q, zero, local, inverse, multiply, serial
from pathlib import Path
import json

points = [(Q(-1), Q(0)), (Q(0), Q(0)), (Q(1), Q(0)),
          (Q(1), Q(2)), (Q(-1), Q(2)), (Q(0), Q(1))]
triangles = [(5, 0, 1), (5, 1, 2), (5, 2, 3), (5, 3, 4), (5, 4, 0)]
assembled = zero(18, 18)
for tri in triangles:
    k = local([points[i] for i in tri])
    ids = [2*i+c for i in tri for c in range(2)]+[12+i for i in tri]
    for i, gi in enumerate(ids):
        for j, gj in enumerate(ids):
            assembled[gi][gj] += k[i][j]
boundary = list(range(10))+list(range(12, 17))
interior = [10, 11, 17]
block = lambda rows, cols: [[assembled[i][j] for j in cols] for i in rows]
correction = multiply(multiply(block(boundary, interior), inverse(block(interior, interior))),
                      block(interior, boundary))
dtn = [[x-y for x, y in zip(r, s)] for r, s in zip(block(boundary, boundary), correction)]
h = dtn[3][11]
e = -dtn[11][11]

records = []
for n in (8, 16, 32, 64):
    s, d, r = Q(1), Q(1, n), Q(1, 10*n)
    ds = d+s*s/d
    denominator = 7*r*h/d-e-Q(7, 10)*ds/r
    c = -Q(5, 36)*r/denominator
    root_phi = (1+10*h)*c+d/18
    pn = (c-root_phi)/d
    kap = -c/r
    mn = Q(1, 10)-Q(7, 10)*pn
    f0 = [Q(0), r*d/Q(180)+r*d*pn/10]
    v = [Q(1), s/d]
    fm = [f0[j]/2-r*d*kap*v[j]/20 for j in range(2)]
    fp = [f0[j]/2+r*d*kap*v[j]/20 for j in range(2)]
    fr = [Q(0),r*d*(Q(4, 45)+pn/10)]
    p0 = r*mn+Q(7, 10)*kap*ds
    pm = -s*mn/2-Q(7, 20)*kap*ds
    pp = s*mn/2-Q(7, 20)*kap*ds
    pr = -r*mn
    # Child state: all boundary velocities zero, pressure only at base center.
    # Physical mass scaling is diag(r I_velocity,I_pressure).
    child_reactions = [dtn[i][11]*c*(r if i < 10 else 1) for i in range(15)]
    combined_v0 = [f0[j]+child_reactions[2+j] for j in range(2)]
    combined_p0 = p0+child_reactions[11]
    records.append({
        "N": n, "s":str(s),"d":str(d),"r":str(r),
        "center_pressure":str(c),"parent_root_pressure":str(root_phi),
        "center_pressure_over_r":str(c/r),
        "parent_reactions": {
            "left_velocity":[str(x) for x in fm],"center_velocity":[str(x) for x in f0],
            "right_velocity":[str(x) for x in fp],"root_velocity":[str(x) for x in fr],
            "left_pressure":str(pm),"center_pressure":str(p0),
            "right_pressure":str(pp),"root_pressure":str(pr)},
        "child_all_boundary_reactions":[str(x) for x in child_reactions],
        "combined_base_left_velocity":[str(fm[j]+child_reactions[j]) for j in range(2)],
        "combined_base_center_velocity":[str(x) for x in combined_v0],
        "combined_base_right_velocity":[str(fp[j]+child_reactions[4+j]) for j in range(2)],
        "combined_base_left_pressure":str(pm+child_reactions[10]),
        "combined_base_center_pressure":str(combined_p0),
        "combined_base_right_pressure":str(pp+child_reactions[12]),
        "center_equations_exactly_zero":combined_v0 == [0,0] and combined_p0 == 0,
    })

path = Path(__file__).with_name("exact-oblique-patch-child-result.json")
path.write_text(json.dumps({
    "arithmetic":"exact fractions",
    "child":"rectangle[-1,1]x[0,2], base midpoint and interior center, five true MINI triangles",
    "child_boundary_order":"velocity vectors at leftbase,centerbase,rightbase,righttop,lefttop, then pressure at those same five vertices",
    "child_DtN":serial(dtn),"h":str(h),"e":str(e),
    "records":records,
    "scope":"actual local coupled response; endpoint/root reactions retained, no global fan or recursive mode claim",
},indent=2)+"\n")
print(json.dumps({"result":str(path),"h":str(h),"e":str(e),
                  "center_rows_exact_zero":all(x["center_equations_exactly_zero"] for x in records)}))
