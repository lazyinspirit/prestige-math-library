# An actual polylogarithmic boundary-pressure lift and mass DtN bound

Research proof and geometric receipt, 2026-10-18. This provides a controlled finite-template modification and an actual mixed boundary-response bound. It does NOT prove a global coupled transfer cone, an observed bad mode, or the original pressure assertion/refutation. No canonical/control edits.

## 1. Container and geometric placement

Use the reference half-container C_r=[−4r,4r]×[0,4r], base midpoint o=(0,0), base corners c_+=(4r,0), c_-=(−4r,0), and top corners. Its base has EXACTLY those three vertices. Add the two side strip-top vertices (±4r,epsilon r). Choose epsilon=4·2^(−n), n>=3, comparable to the previous strip height eta ell; changing that fixed template parameter by a factor at most two preserves the previous comparability bounds. Once the finite template is fixed, n is fixed independently of recursion depth.

Protected fan triangles and all child containers lie in |x|<2r and outside a fixed angular sector of width theta>0 next to either base half. This includes the nearly tangent aligned version if theta is its positive minimum tilt/aperture clearance. The fixed fan/holes must also lie wholly inside ONE of the three macrotriangles from o to consecutive coarse boundary corners (right, central, left). As usual the fan radius is at most r and reserve holes are small, so these placements can be retained by choosing the fixed aperture and reserve fractions first. The pressure construction below is zero in the two small corner regions and affine in each macrotriangle. It therefore remains affine inside every protected hole, and recursive refinement there preserves it exactly.

The original prescribed filler is refined to respect the macrotriangle edges and the corner-chain edges defined below. Macroedges through the inner background buffer are subdivided at O(ell r) spacing; there is no new long background-to-background edge there. No subdivision is added to either base edge o–c_±. Triangulation/refinement inside each fixed macro/corner piece preserves the displayed pressure functions. These are explicit fixed-template changes, not an assertion that a previously generated coordinate list has been left unchanged.

## 2. Rational corner fan without base refinement

Consider c=c_+. Put rho_k=4r·2^(−k), k=0,...,n. Choose

    f_0=0,    f_1=min(1/n,theta/8),
    f_k=f_1+(1−f_1)(k−1)/(n−1),    1<=k<=n,
    p_k=c+rho_k(−(1−f_k), f_k).

Then p_0=o and p_n=(4r,epsilon r). If theta is chosen rational all these coordinates are rational. Directions from c rotate strictly clockwise from left toward up, and radii decrease, so the triangles have nonzero area and disjoint interiors; order their last two vertices oppositely if positive orientation is wanted. They form a simple corner polygon. Since f_1<=1/n, one has f_k<=k/n; therefore every k>=1 satisfies x(p_k)>2r and y(p_k)<=2r/n. The first triangle's ray from o to p_1 has slope f_1/(1+f_1)<=theta/8. The first triangle consequently lies below the protected fan/holes; all later triangles lie in x>2r. The left corner is the reflected construction.

There are no new base vertices. Long edges from c have the active base-corner endpoint; the remaining long edge o–p_1 has the active container-root endpoint. All other chain edges lie in x>2r, outside the inner background buffer. Thus the construction does not create a background-only shortcut through that buffer. If a corner-chain edge must be subdivided for the surrounding filler, subdivide the corresponding corner triangle from its active corner; its pressure function is unchanged. Base edges remain unsubdivided.

The corner polygon lies in the corresponding right/left macrotriangle. It meets no protected fan or child hole. Its area is at most the container area; therefore the old nonparent-star upper bound O(r²) is retained. In fact its area is O(r² max(f_1,1/n)). For a recursive child, its base corners are the active attachment endpoints of the parent fan. The initial outer completion is a fixed finite piece and can handle the same labels separately. The fixed finite-template minimum angle may depend on n and theta, but it stays positive and unchanged under similarity and increasing recursion depth. These observations are the required G1/G2 compatibility receipt for this modification.

## 3. Exact pressure corner hats

Let H_c be the continuous P1 function equal to one at c, zero at every p_k, and zero outside the corner polygon. It has trace one at the base corner and zero at every OTHER prescribed boundary vertex. Its trace along the whole coarse base edge is the correct single affine trace, so the three-node base is respected.

Set v_k=p_k−c. Direct calculation gives

    |det(v_k,v_(k+1))|=rho_k rho_(k+1)(f_(k+1)−f_k)>0.

On a corner triangle the pressure is the barycentric coordinate of c, so

    integral_(c,p_k,p_(k+1)) |grad H_c|²
       =|v_(k+1)−v_k|²/[2 |det(v_k,v_(k+1))|]
       <=C/[f_(k+1)−f_k].

The first term is at most C(n+theta^(−1)); the remaining n−1 terms sum to at most C n². Hence

    ||grad H_c||2 <=C[n+theta^(−1/2)],
    ||H_c||infinity<=1.                               (1)

This energy is not changed by later subdivision on regions where H_c is affine.

Let L_c be the coarse macro-P1 corner hat: one at c, zero at o and the other three coarse corners. It is affine on the right macrotriangle and zero elsewhere, with

    L_c(x,y)=(x−y)/(4r) on the right macrotriangle.

On the side strip-top point its value is 1−epsilon/4. Therefore

    H_s=(L_c−H_c)/(1−epsilon/4)                        (2)

is EXACTLY the boundary nodal hat of that strip-top point: on the base its trace is zero; on the side below epsilon r it is y/(epsilon r); above it is (4r−y)/(4r−epsilon r). It has zero trace on every other container edge. Equation (2) has the same bound (1), up to an absolute constant, and bounded L-infinity norm. There is a reflected left version.

Use the five fixed macro-P1 hats to fit the coarse boundary data, then correct the two strip-top values using (2). There are only seven boundary vertices. Thus arbitrary pressure trace values d_a have an ACTUAL discrete P1 extension Phi with the exact prescribed trace and

    ||grad Phi||2 <=C K_n osc(d),
    ||Phi−d_ref||2 <=C r osc(d),
    K_n=1+n+theta^(−1/2).                             (3)

The same extension is affine on every fan and protected child container. It is available at every refinement depth with unchanged bounds. This is an explicit lift of the ACTUAL nodal trace, not interpolation of an arbitrary Lipschitz function on skinny triangles. No uniform bound for every raw pressure nodal hat is assumed; its interior coefficients are freely chosen by this construction.

## 4. Actual mixed mass response and boundary residual

Consider the actual MINI mass problem inside this container, prescribing its boundary nodal velocity g and pressure trace d, and imposing homogeneous mixed equations on zero-boundary interior tests:

    (u,v_0)+(grad phi,v_0)=0,
    (u,grad q_0)=0.

The gradient convention is used consistently; its physical boundary-flux terms cancel on assembly into a larger mesh. Let |g|<=A and osc(d)<=r A. The boundary-only P1 velocity extension u_b has ||u_b||2<=C r A by positivity of barycentric coordinates, with no inverse estimate. Let Phi be (3). Write u=u_b+u_0, phi=Phi+phi_0. The orthogonal mass projector R_0 onto the zero-boundary MINI space contains every cell bubble, so

    (R_0 grad q_0,grad q_0)>=gamma_2^(−1)||grad q_0||2²,
    gamma_2=10/7.

Eliminating u_0 gives

    (R_0grad phi_0,grad q_0)
       =((I−R_0)u_b−R_0grad Phi,grad q_0).

Testing by phi_0 proves, using (3),

    ||u||2+||grad phi||2 <=C K_n r A.                 (4)

The constants do not depend on recursion depth or the minimum element size. Pressure gauge is fixed by its trace; the remaining finite mixed block is invertible by the same bubble coercivity.

The condensed boundary residual may be tested with ANY discrete extension of its boundary trace, because the interior residuals vanish. For a unit boundary velocity nodal test use a bounded P1 extension, of L2 norm at most C r. For a unit pressure boundary nodal test use (3), of gradient norm at most C K_n. Consequently the actual boundary Schur map obeys

    |velocity residual entry| <=C K_n A r²,
    |pressure residual entry| <=C K_n² A r.           (5)

The pressure estimate must NOT instead use the raw skinny-fan nodal hat, whose interior gradient can have a spurious N factor. It is legitimate to replace that hat by our macro/corner extension because it has the same boundary trace.

When epsilon is comparable to ell and ell is a fixed inverse-polynomial expression in the large fan-count parameter N, n=O(log N) (with the explicitly retained theta contribution). Thus (5) costs only polylogarithmic factors if theta is fixed or inverse-polylogarithmic. Reserve fractions and apertures can in principle absorb such costs without the power loss caused by imposing delta N→0. This last sentence is only parameter bookkeeping: actual normalized parent-row scaling, global transfer-cone invariance, the bounded-q source crossentry and its pressure growth must still be PROVED. In particular (5) is not an original pressure counterexample and not a substitute for the actual coupled recursive Schur analysis.
