# Exact compatibility when a child is an affine Darcy background

Research-only coupled-row calculation, 2026-10-18. This concerns the actual mass MINI system, not the finite-parameter strain system. It gives a necessary local condition, not a global transfer or a counterexample.

Let a child container have the three-node flat base (v_-,v_0,v_+), with v_0 its root and the two base segments collinear. Suppose its entire actual mixed response is the affine Darcy background u=b, phi=-b dot x+constant. Assume the only cells meeting v_0 are its child-container cells and the two parent fan triangles (o,v_-,v_0), (o,v_0,v_+). There is no source at v_0. Let the parent fan root velocity be a.

The background trace gives parent velocities b at all three base nodes. Its potential trace is affine on that line with tangential derivative -b_t. Both parent triangles therefore have the SAME affine potential gradient p: each affine interpolant agrees at the shared root o and agrees with the same affine function on the same straight line. In particular p_t=-b_t.

After actual bubble elimination, the child-center parent velocity row on each adjacent triangle is

    |K|(a+17b+18p)/180.

The child's velocity reaction is exactly zero, because u+grad phi=0 against every velocity test, including tests with nonzero boundary trace. Therefore the full child-center velocity row gives

    a+17b+18p=0.                                         (1)

The true parent velocity cell mean on both triangles is

    j=(a+2b-7p)/10.                                      (2)

Indeed its bubble coefficient is -14(a+2b)/27-14p/9 and mean bubble is 9/20. Since j is constant on the UNION of the two parent triangles, the parent contribution to the child-center scalar pressure row is exactly its outer-edge normal flux weighted by that nodal hat: internal-edge fluxes cancel and the hat vanishes on the other union edges. The child background contributes the opposite weighted flux of b. The hat has positive integral on the base. Consequently the assembled pressure row is

    j_n=b_n.                                            (3)

Together (2)–(3) give a_n-8b_n-7p_n=0. Subtracting this from the normal component of (1) gives 25(b_n+p_n)=0. Hence p_n=-b_n and a_n=b_n. Tangentially p_t=-b_t and (1) give a_t=b_t. Thus

    b=a,    p=-a.                                       (4)

This conclusion includes the inherited pressure constant: because p=-a and the parent root potential is phi(o), the entire base trace must be phi(o)-a dot (x-o).

Thus zero actual child quotient fixes its background to the parent's root and forces the adjacent parent pressure to be the corresponding affine Darcy pressure. An arbitrary independently assigned child background is incompatible with the actual shared pressure and velocity rows.

The hypothesis about incidence is essential. Any additional filler triangle at v_0 adds its actual row and must be retained; the three-node child base construction supplies exactly the stated incidence. The child base endpoints may have additional parent/filler stars, but those rows were not used. Unequal areas of the two parent triangles do not affect (1), since a,b,p are the same on both.

This does not prove a nonzero quotient propagates. In particular it remains possible, until the full boundary Schur recurrence is analyzed, that a parent annulus transforms an incoming non-background state into the same affine background on all children. Excluding that with a quantitative lower bound is the actual global target.
