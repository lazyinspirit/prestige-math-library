# Compatible exterior Darcy limit and vanishing stencil-parity defect

2026-10-18. Research proof for an explicitly CHANGING exterior transition as h tends to zero, after all N-dependent template parameters have been fixed. This does not assert convergence for an unchanged coarse transition, convergence of arbitrary corner-pressure ports, or recursive nonextinction.

## 1. Domain, compatible ports and the h-family

Let C_r=[-4r,4r]x[0,4r] and Omega={n>0}\C_r. Its inner boundary Gamma consists of the child's two sides and top. On the flat physical base outside C_r prescribe pressure zero. Only inner pressure traces which vanish at BOTH base corners are considered. The four free side-strip/top pressure coefficients provide exactly this compatible trace space. Their fixed piecewise-affine traces have finite H1/2 extensions. Nonzero independent pressure values at a base corner against zero exterior base pressure would create a continuum corner jump and logarithmically divergent energy; no full twenty-port exterior convergence is claimed.

The outer child mesh and its limiting DtN D_h may vary with h, but the exterior is constructed as follows. Keep the same seven inner boundary vertices and all their edges WHOLE. Choose positive collar widths tau_h->0 along Gamma; all exterior triangles incident to those seven vertices are contained in a collar of area tending to zero. Refine EVERY remaining bounded part of the exterior transition away from Gamma, not just the old uniform ring, so its mesh diameter tends to zero locally. On compact sets a positive distance from Gamma choose shape-regular refinements with constants depending only on the fixed finite macrogeometry, not h. Outside the fixed transition use the exact uniform half-plane SWNE mesh of step h. The reflected family uses NWSE. The pressure macrointerfaces below are retained by conforming refinement. Physical-base guards remain on the h lattice, and their exterior stars are O(h²).

Such meshes follow from the finite collar construction: place the unrefined Gamma edges against arbitrarily thin strip triangles, then conformingly mesh the remaining fixed macro-polygons at scale h. No additional Gamma node is needed. Preserve a fixed finite macro-P1 extension p_f of each compatible inner pressure trace, compactly supported in a bounded exterior neighborhood and zero on the flat base. This is possible because its endpoint values match zero there. Overlay its finite interfaces before refining. The unrefined-edge anisotropy is confined to the shrinking collar. Shape constants may deteriorate as h->0; for the original recursive construction one eventually chooses ONE positive h and then keeps its finite template fixed with depth.

For homogeneous prescribed velocity data, all boundary nodal values are zero. For a fixed inner velocity trace g, its actual cell-mean-neutral nodal/bubble extension E_h g has

    ||E_h g||2²<=C sum_(inner boundary i) w_i^exterior(h)|g_i|² ->0, (1)

since every original exterior boundary star tends to zero. Its moments against ALL actual pressures are exactly zero. This is a mass assertion, not an H1 bound.

## 2. Continuous energy space and far density

Let Q_0 be the gradient-norm completion of C_c^infinity(Omega), with zero trace on BOTH Gamma and the flat base. Extension by zero into C_r reduces its half-plane Hardy inequality to

    integral |q|²/n²<=4 integral |partial_n q|².           (2)

This follows by one-dimensional integration by parts and Cauchy--Schwarz, then density. It supplies local H1 potentials and removes constants. A radial far cutoff equal to one through radius R and zero beyond 2R has gradient error bounded by the Hardy-weighted tail, because n<=2R on that annulus. Thus bounded-spatial-support zero-trace pressures are dense in Q_0. Ordinary bounded-domain H1_0 density then reduces to smooth compact support away from the boundary. No pressure cutoff is taken at an interior child accumulation set: Omega is the exterior domain only.

For a compatible inner trace f, define p_0(f) as the unique finite-gradient harmonic function in p_f+Q_0:

    (grad p_0,grad q)=0, q in Q_0.

Its velocity is W_0(f)=-grad p_0(f). This is the continuous mass/Darcy response; prescribed velocity traces have no continuous L2 meaning and disappear in this limit.

## 3. Exterior velocity and gradient-space Mosco convergence

Let V_h^0 be the L2 closure of actual bounded-spatial-support MINI velocities with zero prescribed traces on Gamma/base. Then V_h^0 Mosco-converges to ALL L2(Omega)^2. The weak condition is automatic. For strong recovery first approximate any L2 field by a smooth compactly supported field away from the boundary. For h small its support misses the shrinking unrefined-edge collar and its affine nodal interpolant converges in L2. In fact convexity of barycentric coordinates gives the local L-infinity interpolation error from the smooth field's Lipschitz norm and cell diameter, without a gradient inverse estimate. Far cutoffs give the same conclusion for the completed spaces.

Let Q_h^0 be the gradient completion of actual continuous P1 pressures of bounded spatial support, with zero trace on Gamma/base. Their gradients form closed subspaces G_h^0 of L2. They Mosco-converge to G_0=grad Q_0. Strong recovery follows from the smooth compact-support density just proved and locally shape-regular refinement away from Gamma. For the weak condition, bounded gradients give local H1 bounds by (2). Any weak limit has zero boundary trace, finite gradient and Hardy control; the far cutoff argument puts it in Q_0. Consequently

    P_(G_h^0) -> P_(G_0) strongly on L2.                  (3)

Let Z_h={v in V_h^0:(v,grad q)=0 for all q in Q_h^0}. Then Z_h Mosco-converges to Z_0=G_0^perpendicular. Weak passage uses strong gradient-test recovery. For strong recovery of v in Z_0 choose w_h in V_h^0 strongly approaching it. By (3), P_(G_h^0)w_h->0. Solve the scalar Dirichlet Riesz equation for this residual and set e_h=beta_K grad chi_h cellwise, with beta_K mean one. It is an actual zero-trace MINI correction and

    (e_h,grad q)=(w_h,grad q),
    ||e_h||2=sqrt(10/7)||P_(G_h^0)w_h||2 ->0.

Thus w_h-e_h is a strong Z_h recovery. In particular the kernel projectors converge strongly.

## 4. Compatible homogeneous exterior DtNs converge

For inner velocity trace g and compatible pressure trace f, the exact exterior mass response is

    W_h=E_hg+P_(Z_h)[-E_hg-grad p_f].                    (4)

The fixed actual macro lift p_f belongs to every exterior pressure space. Equations (1),(3),(4) give

    W_h -> -P_(Z_0)grad p_f=-grad p_0(f) strongly in L2.  (5)

The pressure gradients converge strongly too. Define T_h F on each cell as (integral b_K F)/(integral b_K). Its norm is at most sqrt(10/7). On every smooth compact support away from the boundary, its mesh diameters tend to zero, so T_h F->F strongly; uniform boundedness and L2 density give strong operator convergence T_h->I on L2. The exact bubble momentum equation is

    grad p_h=-T_h W_h.

Therefore grad p_h->grad p_0(f). The zero-base trace/Hardy normalization fixes the potential.

For an inner velocity test trace k use its actual neutral lift E_hk. Its pressure pairing is EXACTLY zero and its mass norm tends to zero, so its reaction tends to zero. For a compatible pressure test trace j use the fixed macro lift p_j; its reaction tends to

    (W_h,grad p_j)->-(grad p_0(f),grad p_j).

Thus the finite compatible exterior port matrix converges in matrix norm to

    J_0=[0 0; 0 -E_0],
    E_0(f,j)=(grad p_0(f),grad p_0(j)).                    (6)

This includes the eight free inner velocities and four compatible free pressures used in the owner's embedding. Velocity crossloads generated by fixed base-corner velocities also vanish, by the same shrinking-star lift; any pressure-corner variation against the grounded exterior base is excluded.

The domain and continuous problem are reflection invariant. Hence SWNE and NWSE exterior matrices converge to the SAME reflected-invariant J_0. They are not asserted equal at any positive h.

## 5. The radiation incident-layer forcing tends to zero

Use the owner's radiation-consistent-two-driver-embedding.md, not the old finite grounded far-ring problem. Its infinite constant-along-base neutral layers themselves never belong to L2. Cut them off only on a fixed common uniform annulus, subtracting that cutoff from the infinite incident field, and use an actual neutral boundary lift for the missing compact base trace and the specified inner-interface velocity values.

For the EXTERIOR-only construction all its original boundary-star areas tend to zero. The compact physical-base portion has length O(r), its uniform and transition guard stars are O(h²), and its count is O(r/h). Hence the boundary lift has norm tending to zero. The exact uniform layer and pressure-gradient norms on the cutoff region are O(sqrt(h r)|eta|), and the pressure value/cutoff cost is O(h|eta|). The owner's exact mixed commutator estimate consequently has velocity and weak-pressure dual norms tending to zero.

The actual exterior bubble inf-sup is uniformly sqrt(7/10), independent of transition angles and h. Riesz lifting of the retained weak moment and kernel solution therefore gives a finite-energy scattered correction tending to zero. The total incident-plus-scattered solution tends to zero locally near Gamma after its infinite incident tail is excluded; the incident layer itself tends to zero on every fixed bounded neighborhood as well. Testing its reactions with the shrinking neutral velocity lifts and the fixed compatible pressure lifts proves that the restricted radiation driver vector F_h tends to zero. All weak moments are retained. No infinite-layer L2 norm is taken.

This argument also handles the finite-h corner convention in which a retained corner value and the first exterior-base nodal value differ: its continuous P1 velocity taper lies in the shrinking exterior corner/base stars and has vanishing mass. There is no analogous permission for incompatible pressure-corner data.

## 6. Uniform child coercivity and glued inverses

After fixing N and every required small-star budget, retain positive INTERNAL child boundary-star areas for all original seven velocity nodes, independent of h. Their stars may be extremely small but fixed. The protected root fan's TOTAL area, even when radially subdivided, is at least c a r²; no single fixed root triangle is necessary. The other boundary nodes can retain fixed positive collar cells inside the child, away from all subsequent exterior ring refinements. Do not impose an h² bound on these ORIGINAL internal corner cells as h->0: the endpoint budget is fixed first, then their positive internal cells are kept. The h² condition applies to NEW exterior-base guards. Exterior corner stars may still tend to zero.

Write the actual child DtN, pressure gauge fixed at its root, as

    D_h=[A_h H_h; H_h^T -E_h].

For velocity- and pressure-generated child responses W_g,W_p, one has W_p in the zero-boundary weak kernel and W_g orthogonal to that kernel. Thus W_g perpendicular W_p, and for S=diag(I_velocity,-I_pressure),

    s^T S D_h s=g^T A_h g+p^T E_h p=||W_g+W_p||2².       (7)

Reference-polynomial nodal extraction on the preserved positive boundary stars controls every velocity coefficient by C_N||W||2. The exact bubble equation controls grad p by sqrt(10/7)||W||2; the seven long-edge Gram estimate and rectangle Poincare control the gauged pressure coefficients by C_N||grad p||2. Therefore

    s^T S D_h s>=c_N |s|²,                              (8)

with c_N>0 independent of h and child depth. All child port matrices remain bounded by the fixed internal neutral velocity and pressure macro lifts. The mirror construction makes D_h exactly reflection invariant.

Restrict now to the twelve FREE embedding coefficients; the three base pressures are zero, so all its exterior pressure ports are compatible. Finite-h J_h and continuous J_0 have nonnegative signed energy. Combining with (8) gives

    ||[(D_h+J_h)_II]^-1||<=1/c_N,
    ||[(D_h+J_0)_II]^-1||<=1/c_N.                        (9)

Indeed x^T S_I H_II x>=c_N|x|² and Cauchy--Schwarz yields ||H_II x||>=c_N||x||. This also checks the limiting homogeneous gluing kernel explicitly; it cannot acquire an unpenalized child velocity or pressure port.

## 7. Uniform comparison of the actual embeddings and symmetry

Let B_0 prescribe eta at all three base velocity nodes, zero base pressure, and let I_0 inject the twelve free variables. With the EXACT restricted radiation Schur data, the owner's embedding is

    E_h(D_h)=B_0+I_0[(D_h+J_h)_II]^-1
                  [F_h,I-I_0^T(D_h+J_h)B_0].

Equations (6),(9), bounded D_h, vanishing velocity crossblocks and F_h->0 imply

    ||E_h(D_h)-E_0(D_h)|| ->0,
    E_0(D)=B_0-I_0[(D+J_0)_II]^-1 I_0^T D B_0.          (10)

This comparison is UNIFORM along the actual varying child matrices D_h; it does not assume D_h itself converges. One may equivalently extract a bounded subsequence, but the signed coercivity already gives the required common inverse bound.

More explicitly, with K_N bounding ||D_h|| and c_N from (8), the inverse resolvent identity gives

    ||E_h(D_h)-E_0(D_h)||
      <=C(c_N,K_N,||B_0||,||I_0||)
          [||J_h-J_0||+||F_h,I||].                      (11)

Here the J_h B_0 term is controlled by the shrinking velocity-column lift, even though B_0 contains the prescribed base-corner velocities. All corner PRESSURES are zero. Thus no compactness of a family of singular glued inverses, and no convergence assumption on D_h, is hidden in (10).

Since D_h and J_0 are reflection invariant, E_0(D_h) has the exact reflection parity of the two unit drivers. Consequently the undesired odd normal-column projection of E_h(D_h) tends to zero. This is a qualitative after-fixed-N statement. With no lower bound on h, choose one sufficiently small positive h AFTER all N-dependent finite driver/complement constants have been fixed, so its parity defect is below the required tolerance. Then fix that h and its finite actual transition for the subsequent depth family. No uniform rate or original pressure conclusion is asserted.

The actual parent only needs the common local uniform ring to match this auxiliary exterior; the latter may extend past neighboring children after localization. All distant fields and outgoing self-response remain in the owner's exact radiation/cutoff decomposition. Convergence here repairs the exterior parity operator; it does not itself prove the recurrent two-driver estimate or mass fractional divergence.
