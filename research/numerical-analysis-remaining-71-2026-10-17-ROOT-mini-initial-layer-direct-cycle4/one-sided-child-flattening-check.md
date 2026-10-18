# One-sided child flattening with the improved a² cost

Research-only bounded check, 2026-10-18. This verifies the counterexample helper's proposed improvement to the local CR mean-kernel competitor. It does not identify that competitor with an actual mixed DtN right state, prove a -1/17 transfer, or establish pressure growth. The original shape-regular geometry and actual MINI/CR spaces are retained. No canonical content, controls, gates or tests were changed.

Use the variable-amplitude slice construction in `local-variable-fan-cr-repair.md`: Omega is one aligned fan of radius R and aperture a about x=k y, |k|<=C delta; w=A_K e_y on its radial triangles, |A_K|<=M. Its cumulative potential is

    Psi(x,y)=integral_(-infinity)^x w_y(s,y)ds,
    L(y)=integral_R w_y(s,y)ds.

The proved slice estimates are

    |L(y)|<=C a y M,  |L'(y)|<=C a M,
    partial_x Psi=0 and |partial_y Psi|<=C a M outside Omega.   (1)

The second line includes every exterior gap between teeth. It holds with arbitrary bounded A_K; the proof sums the complete-interval slope differences and does not estimate the total variation of A_K.

## 1. Move the return transition away from the children

Choose fixed 0<c1<c2 below the available half-container wedge constant. Instead of placing the return transition through the fan, choose H_y(x) with

    H_y=0 when x-k y<=c1 delta y,
    H_y=1 when x-k y>=c2 delta y,
    |partial_x H_y|<=C/(delta y),
    |partial_y H_y|<=C/y.

For example rescale one fixed smooth step function to that interval. The last derivative bound uses |k|<=C delta. Put

    Xi=Psi-L(y)H_y(x).

The fan and every protected child box, together with a collar of a fixed multiple of its diameter, lie strictly to the left of the transition. Indeed the fan has |x-k y|<=Ca y. Attachment heights are bounded above and below by fixed multiples of R; their child diameters r_j are O(sigma b0 a R/N). Choose a sufficiently small compared with delta and sigma b0 sufficiently small. These choices are fixed before N/depth. The actual middle-third clearance also keeps each such collar away from every nonincident fan edge. Thus

    H_y=0 near the fan and all selected child collars,
    Xi=Psi there.                                            (2)

The return transition remains inside the available exterior half-container wedge. Xi still vanishes on the outer boundary and outside a bounded local region, exactly as in the original repair. The global return-flow error remains of size C a² M² R²/delta. Moving its transition has not worsened that estimate.

## 2. The base trace is small even though the inside normal derivative is large

Fix a protected child box C_j attached to a straight parent tooth side E. Work in orthonormal coordinates (t,n), with n>0 on the exterior side and n<0 in the fan. Put its base midpoint at t=n=0. Let r_j dominate its diameter. A half-disc of radius 3r_j on the exterior side contains no other fan boundary, by r_j much smaller than the aR/N clearance. By (1)--(2),

    ||grad Xi||L-infinity(exterior half-disc)<=C a M.          (3)

Xi has the same trace from the fan and exterior. Along E its tangential derivative therefore obeys

    |partial_t Xi_E|<=C a M                                  (4)

almost everywhere. This conclusion does NOT bound its interior normal derivative, which may be O(M). The potential is Lipschitz and its trace remains well defined even where the A_K jump between radial triangles.

Set C_j^*=Xi(0,0). On the exterior half-disc,

    |Xi-C_j^*|<=C a M r_j.                                  (5)

## 3. Exterior flattening and a small interior trace correction

Choose an isotropic Lipschitz cutoff chi_j, equal to one on a ball containing C_j, supported in the radius-2r_j ball, with |grad chi_j|<=C/r_j. On the EXTERIOR side define the correction

    v_ext=chi_j(Xi-C_j^*).

Equations (3)--(5) give |grad v_ext|<=C a M and

    ||grad v_ext||2²<=C a² M² r_j².                          (6)

Its boundary trace on E is

    g_j(t)=chi_j(t,0)[Xi_E(t)-C_j^*].

It is supported in |t|<=2r_j and satisfies

    |g_j|<=C a M r_j,  |g_j'|<=C a M.                        (7)

Choose a fixed Lipschitz rho on [0,infinity), rho(0)=1 and rho=0 for n>=1. On the PARENT-FAN side use ONLY the trace extension

    v_int(t,n)=g_j(t)rho((-n)/r_j),   n<0.

Its tangential and normal derivatives have magnitude at most C a M. It is supported in a rectangle of area C r_j², so

    ||grad v_int||2²<=C a² M² r_j².                          (8)

The two corrections have equal traces on E. Gluing v_ext to v_int therefore gives an H1 correction v_j. Define Xi_new=Xi-v_j on this patch. Inside C_j, Xi_new is exactly the constant C_j^*. On the fan side, the large original normal derivative is retained up to O(aM); the proof has not flattened Xi throughout an interior disc. Normal-derivative jumps across E are allowed in H1 because the potential trace, rather than its derivative, is matched.

The patches can be chosen pairwise disjoint: reserve diameters are a fixed small fraction of attachment spacing and each attachment is in the middle third of a long side. Their fan-side rectangles stay inside the fan because their depth is much smaller than the distance to nonincident tooth sides. Radial mesh interfaces within the fan impose no restriction on this H1 correction.

Summing (6)--(8) gives the improved actual bound

    ||grad(Xi_flat-Xi)||2²<=C a² M² sum_j r_j².               (9)

The count/scale identity from the actual template is

    sum_j r_j²<=C sigma² b0 a R².

Thus the relative squared cost, compared with fan energy a R² M², is

    C sigma² b0 a²,                                        (10)

instead of the earlier C sigma² b0. Constants are independent of N and recursion depth once the aligned template parameters are fixed. If a container-shape constant depends on delta, it is retained in C and can be accommodated by choosing a,b0 after delta.

## 4. Exact CR transfer and exact scope of the result

The modified potential is globally H1, supported in its actual parent half-container, and constant on every selected child box. Its face-average CR interpolant satisfies exactly

    grad_h I_CR Xi_flat=P0 grad Xi_flat.

Therefore its rotated gradient is an actual cellconstant mean field in W=P0² perpendicular to grad Q_h, and is identically zero on every child cell. The L2 contraction of P0 transfers (9) without any interpolation/inverse loss. The parent mean-kernel competitor consequently has exact zero child-interior means and constant CR-potential traces on those boxes.

These are statements about an explicitly constructed admissible kernel competitor and its CR potential. A CR potential is NOT the actual mixed mass-pressure potential. Constant CR-potential trace does NOT identify an actual velocity/pressure DtN boundary state. In particular no conclusion here says that the actual right-state recovery map acts by -1/17, or that its complementary block has an aperture-independent inverse. Those remain separate actual coupled-state obligations. The present proof supplies only the improved one-sided flattening interface requested for that investigation.
