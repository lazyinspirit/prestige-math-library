# Actual recursive MINI mass spaces: Mosco convergence and the mass DtN limit

2026-10-18. Research proof for a fixed finite recursive template. Both MINI velocity spaces AND pressure spaces may be nonnested. This establishes actual mass-response/DtN convergence, not a growing transfer eigenvalue, nonextinction, or evolutionary pressure growth.

## 1. Explicit finite-template hypotheses and limit spaces

Let C be the root rectangle. At depth m its finitely many reserve rectangles are D_m; replacing each terminal rectangle by its next fixed template produces the depth m+1 mesh. Assume:

* The finite collection of oriented/scaled templates and terminal fills is fixed. Each reserve boundary has the same seven nodes/edges under replacement; no new boundary nodes are inserted.
* Each current annulus (container minus immediate reserve interiors) has a fixed finite triangulation. All triangles incident to prescribed container boundary nodes are fixed before replacing any strictly interior reserve. Terminal boundary-star weights and these stabilized boundary-cell weights have a finite ratio C_N, uniform under similarities and depth.
* The total child area is at most eta<1 times its container area. Thus |D_m|<=eta^m|C| and the fixed open annuli partition C up to a null set.

These are finite-template premises, not quasiuniformity. C_N may depend on the fixed N and all fixed geometric parameters. No refinement/nesting of the old terminal triangles is assumed.

Let V_m be the actual continuous MINI space on the finite mesh, viewed in H=L2(C)^2, and V_m^0 its zero-outer-trace subspace. Define V_infinity to consist of L2 fields which restrict to actual MINI polynomials on every stabilized annulus, with the inherited polynomial traces matching on every fixed interface. Outer traces are read on the fixed outer boundary cells. These are closed linear constraints in L2: on each fixed cell polynomial coefficients are continuous linear functionals of its L2 restriction. Hence V_infinity and V_infinity^0 are closed subspaces of H. Limit fields need not belong to global H1.

Let Q_m be the actual continuous P1 pressure space, with constants included. Let Q_infinity be the closed subspace of H1(C) consisting of functions P1 on every stabilized annulus, with the same fixed seven-node P1 outer trace space. Use mean-zero representatives, or zero outer trace where specified. No claim Q_m is nested is needed.

## 2. Velocity Mosco convergence in L2

Weak condition: if v_m in V_m is bounded and converges weakly in L2, then its restriction to each fixed cell eventually lies in the same finite-dimensional polynomial space. Weak limits retain that polynomial form and every fixed trace match. Thus the limit belongs to V_infinity. The same holds for prescribed fixed outer trace, since outer boundary-cell coefficients converge weakly, hence strongly as finite-dimensional vectors.

Strong condition: given v in V_infinity, keep it outside D_m. Inside each terminal rectangle H replace it by the actual mean-zero-cell boundary lift of its exact seven-node velocity trace g:

    E_g=lambda-boundary interpolant
                       -(20/9)b_K mean_K(lambda-boundary interpolant).

This fill is conforming, has the correct trace and zero cell means. Its L2 norm squared is bounded by C sum_i w_i^terminal |g_i|². By the finite template ratio, and reference-polynomial extraction of nodal values on the STABILIZED boundary cells of H,

    ||E_g||_(L2(H))² <= C_N ||v||_(L2(boundary cells of H))².

All such cells lie in D_m. Summing the disjoint holes gives an actual v_m in V_m with

    ||v_m-v||2²<=C_N ||v||_(L2(D_m))² ->0.                 (1)

The last step follows from |D_m|->0 and absolute continuity of the L2 integral. Outer traces are unchanged. This proves L2 Mosco convergence, including homogeneous or fixed outer traces.

For later use, Mosco convergence of closed subspaces implies strong convergence of their orthogonal projectors. A direct proof is short: projections of fixed f are bounded; every weak subsequential limit lies in the limit space; strong recovery of any limit competitor proves it is the unique nearest point; the projection norm identity then upgrades weak to strong convergence. In particular

    P_(V_m^0) f -> P_(V_infinity^0) f strongly for every f in H. (2)

## 3. Pressure H1 Mosco convergence WITHOUT nesting

Weak condition follows by H1 weak restriction to each fixed finite-dimensional P1 cell space, with fixed trace conditions preserved. For strong recovery keep q in Q_infinity outside D_m. On each hole H, fill its exact seven-node boundary trace by ANY fixed terminal P1 extension. This is a finite-dimensional boundary operator on a fixed terminal mesh.

Its energy is controlled by the original pressure in H. Indeed every boundary node belongs to an unsubdivided long edge of length comparable to the diameter R_H. The exact edge P1 Gram estimate, rectangle trace and Poincare give

    sum_i |q(i)-mean_H q|² <= C ||grad q||_(L2(H))².       (3)

The fixed terminal extension of these seven values therefore has gradient norm squared at most C_N||grad q||H² and L2 norm squared, after subtracting mean_H q, at most C_N R_H²||grad q||H². It matches q exactly on the boundary. Gluing it into all holes gives q_m in Q_m and

    ||q_m-q||_(H1(C))²<=C_N sum_H(1+R_H²)||grad q||H² ->0. (4)

The original difference from its hole mean is handled by rectangle Poincare. As in (1), the sum is the gradient integral on D_m and tends to zero. Mean-zero representatives can be restored by one constant; zero outer trace remains exact. Thus Q_m/constant and Q_m^0 Mosco-converge in H1 to their corresponding limit spaces.

By Poincare, gradient is an isometry when the quotient is equipped with its gradient norm. Consequently the closed gradient subspaces

    G_m=grad Q_m,   G_m^0=grad Q_m^0

Mosco-converge in L2(C)^2. Their orthogonal projectors converge strongly. This observation is essential for nonnested pressure meshes.

## 4. Actual boundary moments and constrained velocity recovery

Let T be the fixed seven-node boundary P1 trace space. The Hilbert space of H1 functions with trace in T, modulo constants, has gradient norm. For any seven-vector ell of sum zero, the functional

    L_ell(q)=sum_i ell_i q(i)

is continuous on this space by the edge-Gram/trace/Poincare estimate (3). Its Riesz representative has the form F_ell=grad chi with

    (F_ell,grad q)=L_ell(q).

This is one FIXED ambient L2 vector, independent of m; no point evaluation on arbitrary H1 traces is being claimed. The functional is defined only on the fixed finite-dimensional trace class. Every Q_m and Q_infinity lies in that class.

The actual feasible sets for fixed boundary velocity g and ALL weak moments ell are

    K_m(g,ell)={v in V_m with trace g:
                    P_(G_m)(v-F_ell)=0},

and analogously K_infinity. Weak limits pass these constraints: strong recovery of each gradient test, or strong projector convergence, gives the limit equations.

For strong recovery take v in K_infinity and a velocity approximation w_m from (1), with its exact trace g. Then

    ||P_(G_m)(w_m-F_ell)||2 ->0,                            (5)

because w_m->v strongly and P_(G_m)(v-F_ell)->P_(G_infinity)(v-F_ell)=0. This is the correct residual argument for NONNESTED Q_m; it does not assume v satisfies every finite-m pressure constraint.

Solve the actual scalar Neumann problem

    (grad chi_m,grad q)=(w_m-F_ell,grad q), q in Q_m.

Let e_m|K=beta_K grad chi_m|K, where beta_K=(20/9)b_K has mean one and mean square gamma=10/7. This is an actual zero-boundary MINI field and

    (e_m,grad q)=(w_m-F_ell,grad q),
    ||e_m||2=sqrt(10/7)||P_(G_m)(w_m-F_ell)||2 ->0.

Thus v_m=w_m-e_m belongs to K_m(g,ell) and converges strongly to v. For interior moment constraints only, use Q_m^0 and its Dirichlet scalar problem. The same bubble correction works. Hence all these ACTUAL affine constrained sets Mosco-converge.

They are nonempty: the checked neutral-boundary lift plus full-moment Neumann bubble lift supplies bounded finite feasible vectors for every fixed compatible (g,ell); weak compactness supplies a limit feasible vector. The zero-interior-moment version is even simpler.

## 5. Strong mass-response convergence and pressure convergence

For fixed forcing f in L2, the actual mass response with primal ports (g,ell) is the unique minimizer of

    J(v)=||v||2²/2-(f,v) over K_m(g,ell).

Mosco convergence gives W_m->W_infinity strongly in L2. Explicitly weak compactness and weak lower semicontinuity give the limit minimizer; strong recovery bounds the limsup energies; strict quadratic convexity then gives norm convergence. This is not a claim of nested Galerkin monotonicity.

Its pressure phi_m is determined modulo constants by

    (W_m-f,v)+(v,grad phi_m)=0 for v in V_m^0.

There is an especially direct ACTUAL proof of strong pressure convergence. Define the cellwise weighted-average operator

    T_m F|K=integral_K b_K F / integral_K b_K.

The exact moments give ||T_m||_(L2->L2)<=sqrt(10/7). This operator stabilizes on every fixed annulus. Let T_infinity be its identical local definition on the union of those annuli; the remaining set has measure zero. For fixed F,

    ||(T_m-T_infinity)F||2
           <=2sqrt(10/7)||F||_(L2(D_m)) ->0.             (6)

The actual bubble momentum equation, with its correct sign, is

    grad phi_m=T_m(f-W_m).                                (7)

Uniform boundedness, (6), and strong W_m convergence therefore give strong convergence of the pressure gradients to T_infinity(f-W_infinity). After fixing the mean, Poincare gives strong H1 pressure convergence. The weak pressure Mosco condition identifies its limit in Q_infinity. Recovering fixed velocity tests proves the limit momentum equation, and the same exact bubble identity on stabilized cells gives uniqueness of its pressure gradient. No limit equation is applied to arbitrary varying finite-m tests.

For fixed dual ports (boundary g, boundary pressure f_boundary), the checked construction supplies a SIMULTANEOUS pressure lift p_b in EVERY Q_m: it is P1 on the root current annulus and affine inside every first-generation reserve box, hence is preserved by every terminal fill and descendant replacement. The neutral boundary velocity lift E_g likewise belongs to EVERY V_m, since its supporting outer boundary cells are fixed. It has zero moments against all pressure functions.

Let

    Z_m^0={v in V_m^0:(v,grad q)=0 for all q in Q_m^0}.

The constrained Mosco proof above gives Z_m^0 -> Z_infinity^0 and strong convergence of their L2 orthogonal projectors. Thus the actual fixed-dual-port response has the explicit formula

    W_m=E_g+P_(Z_m^0)[f-E_g-grad p_b],                    (8)

which converges strongly. Its normalized pressure gradient then converges by (7). The prescribed boundary pressure is retained because strong H1 convergence preserves its trace. Formula (8) uses actual fixed boundary lifts; it does not assume nesting of either velocity or pressure spaces. If one uses a finite template without a simultaneous lift, strongly converging fixed-trace pressure/velocity lifts from Sections 2--3 give the same conclusion with a strongly varying right side.

## 6. The actual finite mass DtN matrices converge

For each fixed boundary velocity test trace h choose strong velocity recovery h_m with that trace, and for each boundary pressure test trace k choose strong H1 pressure recovery k_m. Boundary reactions are independent of the chosen extensions by the interior equations. Their formulas involve only

    (W_m-f,h_m)+(h_m,grad phi_m),
    (W_m,grad k_m)

(and any specified source moment subtractions). The strong convergences above therefore give convergence of every reaction entry for every fixed boundary port. There are only finitely many ports (twenty after pressure gauge), so the ACTUAL mass DtN matrices converge in matrix norm. Fixed L2 source responses converge as well.

The conclusion holds for the actual nonnested MINI recursive family satisfying Section 1; no assertion of finite-depth monotonicity was used. Section 7 proves that this limit satisfies the actual autonomous finite Schur fixed-point equations, by checking invertibility of the limiting retained interface blocks. Neither convergence nor that fixed point alone implies spectral amplification, source coupling to a growing eigenchannel, or a positive pressure residue.

No real-parameter strain Mosco assertion is made. The neutral terminal fill has controlled L2 cost but not a depth-uniform strain cost; replacing the mass argument by H1 energy would be unjustified.


## 7. The actual limiting finite interface block is invertible

The fixed-point passage uses the ACTUAL recursive mixed assembly. Keep the current annulus and all its interface nodal velocity/pressure states. Replace each child finite-depth block by its mass DtN limit just proved, with its correct similarity pullback, pressure gauge and gradient-convention reactions. There are finitely many interfaces and retained coefficients, so this gives a finite matrix H_infinity. Its exterior-to-interior decomposition is exactly the limit of the corresponding finite-depth H_m matrices. Constants are fixed by one pressure gauge; for the zero-exterior-pressure problem the gauge is already fixed.

Claim: its interior-interface block is invertible. Suppose an interior-interface state with zero exterior boundary velocity AND zero exterior boundary pressure is in its kernel. Solve every limit child problem with these interface traces, and use the retained current-annulus coefficients. Equal traces glue their velocities into W in V_infinity and their pressures into p in Q_infinity, with zero outer traces. The fixed-cell definition of these spaces makes this gluing legitimate; no global H1 velocity is required.

Local child equations and current-annulus interior equations give the global mixed equations against tests with zero interface trace. The zero interface reactions add the equations against every retained interface nodal test. Any limit test decomposes into these finitely many interface lifts plus zero-interface child tests, so the FULL equations are

    (W,v)+(v,grad p)=0,   v in V_infinity^0,
    (W,grad q)=0,        q in Q_infinity^0.

Take v=W and q=p. They are admissible limit tests and yield ||W||2²=0. Then every stabilized-cell bubble test gives grad p=0 on that cell. The annuli cover C up to a null set, so grad p=0 globally, and zero outer pressure gives p=0. Thus every retained interface coefficient is zero. The finite square interface block has trivial kernel and is invertible.

It follows by ordinary finite-dimensional matrix continuity that H_m,II^(-1) converges to H_infinity,II^(-1). Therefore its Schur complement converges to the actual Schur complement of H_infinity. Since the exact finite-depth recursion is D_(m+1)=R(D_m), and both consecutive sequences have the DtN limit D_infinity, one obtains

    D_infinity=R(D_infinity).                              (9)

For finitely many oriented template types use the vector of their DtN matrices; the same argument proves the simultaneous fixed-point equations. All pressure scaling/gauge maps and current-annulus crossblocks are retained inside R. This is an ACTUAL mass fixed point, not an assumed autonomous limit or a consequence of boundedness alone.

Equation (9) supplies no eigenvalue or source-visible residue by itself. Differentiation, strain perturbation, renewal/front estimates, and evolutionary pressure observation require their own proofs. In particular mass-space Mosco convergence does not justify differentiating a strain-energy limit or replacing finite-depth normalized strain response by its mass derivative.


## 8. A strict mass-energy contraction on the actual affine-Darcy quotient

The fixed point permits one exact spectral conclusion, but not the growth conclusion needed for pressure. For a fixed dual boundary state s let W_s be its actual limit mass response on the unit container, and define

    E_*(s)=inf_b ||W_s-b||_(L2(C))²,
    A_*(s)=inf_b ||W_s-b||_(L2(current annulus))².

These are quadratic forms in the finitely many state coefficients. Their common kernel is precisely the two-dimensional affine-Darcy background states. For E_* this is immediate from the bubble equation and boundary traces. For A_*, if W_s=b on the current annulus, the bubble equation forces grad p=-b on every annulus cell. The rectangular annulus with its disjoint strictly interior rectangular holes is connected, so p is the same affine function there. Every child then has full boundary velocity b and boundary pressure that affine function; uniqueness of its limit mixed response forces its entire response to be the exact same affine background. Thus W_s=b globally and s is background.

Consequently A_* and E_* are positive definite on the finite-dimensional affine-Darcy quotient, with

    A_* >= c_N E_*                                       (10)

for some c_N>0. This is a finite-dimensional relative constant; no quantitative N-uniform bound is asserted.

Let T_i be the ACTUAL child boundary-state map of the fixed point, including the correct pressure rescaling/gauge and all inherited traces. It maps background states to background states, hence induces a quotient map. If child i has relative radius rho_i, variance decomposition at the globally optimal background b gives

    sum_i rho_i² E_*(T_i s) <= E_*(s)-A_*(s).             (11)

Indeed each child may minimize over its own constant background, so its minimized energy is no larger than its energy with the globally selected b. The same holds for the annulus. Equation (11) is therefore an inequality, not an asserted orthogonal energy decomposition with unrelated means.

For the positive map on quadratic forms

    L_0 H=sum_i rho_i² T_i^T H T_i,

(10)--(11) give L_0 E_*<=(1-c_N)E_*. Since E_* is an order unit in the quotient symmetric-matrix space, positivity implies operator norm at most 1-c_N in its order-unit norm, and hence

    spectral_radius(L_0)<=1-c_N<1.                        (12)

For finitely many template types use the vector of their forms and the minimum of their finitely many positive constants. The proof is unchanged.

There is NO conclusion here that spectral_radius(L_(1/4))>1, that a nonsmooth branch survives, or that any growing eigenform couples to an admissible smooth source and actual pressure port. Those require a quantitative lower bound on the true coupled child maps. The strict mass contraction (12) supplies only one side of a possible critical-exponent argument.
