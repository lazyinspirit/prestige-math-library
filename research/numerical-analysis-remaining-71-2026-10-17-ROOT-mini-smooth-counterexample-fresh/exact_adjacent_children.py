"""Exact coupled adjacent-child diagnostic with the shared endpoint free.

This is an actual finite mesh/Dirichlet interface calculation, not the full
toothed template and not a pressure counterexample.
"""
from exact_triangle_dtn import Q, zero, local, inverse, multiply
from pathlib import Path
import json


def geometry(n):
    r, d = Q(1, 10*n), Q(1, n)
    points = [(Q(1), -d), (-2*r,Q(0)),(-r,Q(0)),(Q(0),Q(0)),
              (r,Q(0)),(2*r,Q(0)),(-2*r,2*r),(Q(0),2*r),(2*r,2*r),
              (-r,r),(r,r)]
    parent = [(0,2,1),(0,3,2),(0,4,3),(0,5,4)]
    left = [(9,1,2),(9,2,3),(9,3,7),(9,7,6),(9,6,1)]
    right = [(10,3,4),(10,4,5),(10,5,8),(10,8,7),(10,7,3)]
    return r,d,points,parent,left,right


def cell_data(points, tri):
    (x0,y0),(x1,y1),(x2,y2)=[points[i] for i in tri]
    twice=(x1-x0)*(y2-y0)-(x2-x0)*(y1-y0)
    g=[[(y1-y2)/twice,(x2-x1)/twice],[(y2-y0)/twice,(x0-x2)/twice],
       [(y0-y1)/twice,(x1-x0)/twice]]
    return twice/2,g


def child_quotient(points,triangles,state):
    area_total=Q(0)
    mean_grad=[Q(0),Q(0)]
    cells=[]
    for tri in triangles:
        area,g=cell_data(points,tri)
        a=[[state[2*i+c] for c in range(2)] for i in tri]
        grad=[sum(state[22+i]*g[j][c] for j,i in enumerate(tri)) for c in range(2)]
        cells.append((area,a,grad))
        area_total+=area
        for c in range(2):
            mean_grad[c]+=area*grad[c]
    background=[-x/area_total for x in mean_grad]
    energy=Q(0)
    for area,a,grad in cells:
        sa=[sum(ai[c] for ai in a) for c in range(2)]
        beta=[-Q(14,27)*sa[c]-Q(14,9)*grad[c] for c in range(2)]
        adjusted=[[ai[c]-background[c] for c in range(2)] for ai in a]
        nodal=sum((Q(1,6) if i==j else Q(1,12))*sum(adjusted[i][c]*adjusted[j][c] for c in range(2))
                  for i in range(3) for j in range(3))
        mixed=Q(3,10)*sum(beta[c]*sum(ai[c] for ai in adjusted) for c in range(2))
        bubble=Q(81,280)*sum(x*x for x in beta)
        pressure=sum((grad[c]+background[c])**2 for c in range(2))
        energy+=area*(nodal+mixed+bubble+pressure)
    return energy,background


records=[]
for n in (8,16,32,64):
    r,d,points,parent,left,right=geometry(n)
    a=zero(33,33)
    for tri in parent+left+right:
        k=local([points[i] for i in tri])
        ids=[2*i+c for i in tri for c in range(2)]+[22+i for i in tri]
        for i,gi in enumerate(ids):
            for j,gj in enumerate(ids):
                a[gi][gj]+=k[i][j]
    free_nodes=[2,3,4,9,10]
    free=[2*i+c for i in free_nodes for c in range(2)]+[22+i for i in free_nodes]
    ii=inverse([[a[i][j] for j in free] for i in free])
    def solve(z):
        state=[Q(0) for _ in range(33)]
        state[1]=Q(1)
        state[22]=d*z
        load=[[-sum(a[i][j]*state[j] for j in range(33))] for i in free]
        solved=multiply(ii,load)
        for i,value in zip(free,solved):
            state[i]=value[0]
        return state
    def total(state):
        return child_quotient(points,left,state)[0]+child_quotient(points,right,state)[0]
    x0,x1,xm=solve(Q(0)),solve(Q(1)),solve(Q(-1))
    q0,q1,qm=total(x0),total(x1),total(xm)
    qa=(q1+qm)/2-q0
    qb=(q1-qm)/4
    optimum=-qb/qa
    state=solve(optimum)
    qleft,bleft=child_quotient(points,left,state)
    qright,bright=child_quotient(points,right,state)
    reactions=[sum(a[i][j]*state[j] for j in range(33)) for i in range(33)]
    records.append({
        "N":n,"r":str(r),"d":str(d),"optimized_phi_root_over_d":str(optimum),
        "total_child_quotient_energy_over_total_child_area":str((qleft+qright)/(8*r*r)),
        "left_child_quotient_energy_over_area":str(qleft/(4*r*r)),
        "right_child_quotient_energy_over_area":str(qright/(4*r*r)),
        "child_backgrounds":[[str(x) for x in bleft],[str(x) for x in bright]],
        "interface_velocity_nodes_minus_r_zero_plus_r":[[str(state[2*i]),str(state[2*i+1])] for i in (2,3,4)],
        "interface_pressure_nodes_minus_r_zero_plus_r":[str(state[22+i]) for i in (2,3,4)],
        "parent_root_velocity_reaction":[str(reactions[0]),str(reactions[1])],
        "parent_root_pressure_reaction":str(reactions[22]),
        "all_fifteen_interior_rows_exact_zero":all(reactions[i]==0 for i in free),
    })

path=Path(__file__).with_name("exact-adjacent-children-result.json")
path.write_text(json.dumps({
    "arithmetic":"exact fractions",
    "mesh":"four parentfantriangles plus two adjacent five-triangle rectangular MINI children; common endpoint velocity/pressure free",
    "incoming_data":"rootvelocity(0,1),rootpressure=d*z; all other physical patchboundaryvelocity/pressure0",
    "optimization":"minimize sum over children of ||w-b||2²+||gradphi+b||2², b=-mean_child gradphi, over actual scalar rootpressure z",
    "records":records,
    "scope":"complete actual local adjacent assembly under these particular outer traces, not the full toothed recurrence",
},indent=2)+"\n")
print(json.dumps({"result":str(path),"all_rows_exact_zero":all(x['all_fifteen_interior_rows_exact_zero'] for x in records),
                  "quotient_energy_per_area":[float(Q(x['total_child_quotient_energy_over_total_child_area'])) for x in records]}))
