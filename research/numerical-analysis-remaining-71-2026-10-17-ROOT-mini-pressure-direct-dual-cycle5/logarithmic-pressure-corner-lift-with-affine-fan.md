# A logarithmic pressure corner lift, affine on the protected fan

Research proof, 2026-10-18. This is a replacement CONSTRUCTION for the research pressure lift, not a changed canonical statement. It removes an unnecessary aperture-angle cost by allowing the corner hat to be affine, rather than zero, on the protected fan and every recursive hole. It does not prove the final pressure estimate or a branching counterexample.

## Explicit right-corner construction

Scale first to r=1. Let the half-container be [-4,4]x[0,4], with root o=(0,0), right base corner c=(4,0), and side strip node s=(4,epsilon). Choose epsilon=2^(-J), J>=3. This is the previous epsilon=4*2^(-n) with J=n-2. Let

    p=(4-epsilon,epsilon),
    L(x,y)=(x-y)/4,
    t_j=epsilon*2^j,       0<=j<=J,
    A_j=(4-t_j, epsilon*(4-t_j)/(4-epsilon)),
    B_j=(4-t_j, epsilon+t_j).

Thus A_0=p, A_J=(3,3epsilon/(4-epsilon)), B_J=(3,1+epsilon). All A_j lie on the INTERNAL segment o-p. All B_j lie on the INTERNAL segment s-B_J. No base or side boundary edge is subdivided.

Triangulate the support polygon (o,c,s,B_J) by the following pieces:

* the base triangle (o,c,p), subdivided from c at the A_j on its edge o-p;
* the two small triangles (c,p,s) and (p,s,B_0);
* the quadrilaterals (A_j,A_(j+1),B_(j+1),B_j), 0<=j<J, each split into two triangles;
* the triangle (o,A_J,B_J).

The open interiors are disjoint. This is directly seen by vertical sections: between x=3 and x=4-epsilon, the ladder occupies precisely the region between the line o-p and the line s-B_J; the two small triangles close the remaining corner; the base triangle is below the line o-p; and the last triangle closes the left end. The support polygon is below the line o-B_J and inside the right coarse macrotriangle y<=x. Set the function to zero outside this support polygon.

Give the nodal values

    H(o)=0, H(c)=1, H(s)=0,
    H(A_j)=L(A_j), H(B_j)=0.

Take H=L throughout the base triangle, and use the affine interpolant on each other displayed triangle. On the support boundary o-B_J and B_J-s all nodal values are zero. Thus extension by zero is continuous. Its trace on the actual container boundary is exactly the corner boundary hat: affine from zero at o to one at c along the WHOLE unrefined base edge; affine from one at c to zero at s along the short side edge; zero on all other container edges.

## Energy bound

On the base triangle H=L, so its total energy is bounded by an absolute constant, regardless of its subdivisions. Each small corner triangle has area comparable to epsilon² and diameter comparable to epsilon, and nodal values bounded by one. Hence its energy is bounded by an absolute constant.

For a ladder quadrilateral, its horizontal width is t_j. Its vertical side heights are comparable to t_j: indeed

    B_j,y-A_j,y
      =t_j + epsilon*(t_j-epsilon)/(4-epsilon),

which lies between t_j and 2t_j for epsilon<=1/8. Its edge slopes are bounded absolutely. After scaling by t_j, either diagonal split therefore lies in a fixed compact family of nondegenerate triangles. The nodal values are in [0,1]; reference-element scaling in two dimensions bounds the energy of each of its two triangles by an absolute constant. There are J quadrilaterals.

The last triangle (o,A_J,B_J) has a uniformly positive area and uniformly bounded affine coefficients, because its two nonzero vertices have x=3 and vertical separation bounded above and below by positive absolute constants. Its energy is bounded absolutely. Consequently

    ||grad H||_L2 <= C sqrt(1+J),      ||H||_infinity<=1.       (1)

The maximum bound follows from affine interpolation of nodal values in [0,1].

## Protected fan and recursion

The last triangle contains every point satisfying

    0<x<2,   epsilon*x/(4-epsilon) < y < ((1+epsilon)/3)*x.

Choose the protected near-tangent fan and ALL of its reserve holes strictly inside this wedge. In particular a fixed positive tilt theta with epsilon/(4-epsilon)<theta and aperture lying below 1/3 is sufficient. This is exactly the admissible regime epsilon much smaller than the tilt. On this ENTIRE triangle H is one affine function, with gradient bounded absolutely. It need not equal L and need not vanish there. Every similarity-recursive refinement inside every protected hole therefore leaves H exactly P1 without any interpolation estimate.

All ladder and small-corner cells lie in x>=3, outside the inner background buffer. The long edges of the base triangle have the active corner c or root o as endpoint. The two long edges of the protected triangle have active root o as endpoint, and its opposite edge is outside the buffer. Subdividing internal edges at the A_j does not add any boundary vertex; on the base-side pieces the pressure remains L. The construction is therefore compatible with the previous no-background-shortcut geometry after the same finite filler completion. Its finite minimum angle can depend on epsilon and the other fixed template parameters, but not on recursion depth. Mirror it for the other corner or for the reflected aligned template.

Restore r by similarity. Formula (1) is unchanged in two-dimensional energy. Use the coarse macro corner hat L_c, whose actual side-strip value is 1-epsilon/4. Then

    H_strip=(L_c-H)/(1-epsilon/4)

is the EXACT side-strip boundary nodal hat, with energy bounded by C sqrt(1+J). Both L_c and H are affine throughout the protected fan/holes, so their difference is too. The other five coarse boundary hats have fixed energy. Thus arbitrary seven-node pressure trace d has an actual P1 extension Phi satisfying

    ||grad Phi||2 <= C sqrt(1+log(1/epsilon)) osc(d),
    ||Phi-d_ref||2 <= C r osc(d).                            (2)

The construction may be incorporated by a fixed conforming refinement respecting all its interfaces and all protected holes; pressure affinity makes refinements inside those pieces exact. The previous corner construction imposed H=0 on the protected fan, paying theta^(-1/2). That extra condition is unnecessary for (2) or recursive conformity.

## Effect on the remaining actual slope-reset estimate

When the actual near-tangent inheritance inequality is used, its pressure-energy factor can now be bounded by K=C sqrt(1+log(1/epsilon)) rather than 1+log(1/epsilon)+theta^(-1/2). This removes that particular loss of the tilt gain. The actual full mixed boundary-state amplitudes, inherited pressure forcing, designated-child transfer, and normalized source-to-pressure observation still require proof. No invariant state or original claim is asserted here.
