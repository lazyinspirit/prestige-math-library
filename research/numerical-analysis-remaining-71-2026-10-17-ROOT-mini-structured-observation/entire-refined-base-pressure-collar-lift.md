# Entire radially refined comparison base: actual pressure collar lift

Research proof, 2026-10-18. This handles ALL additional parent-guard pressure breakpoints, rather than continuing the two child-base affine pieces through them. It combines the exact radial-fan trace identity with a conforming pressure lift. The affine slope remains an incoming macro datum. No fine-mesh pressure reaction or child self-response is discarded.

## 1. Inputs and the exact local trace remainder

Use one straight parent tooth side with root distance D, longitudinal coordinate s comparable to Y (the parent radius), and the comparison window I=[-16R,16R] in child-centered tangential coordinates. Here R is a sufficiently small FIXED multiple of b0 D, r is comparable to sigma R, and r/R is small. Choose R<=ell/1000, with ell the same-side attachment spacing. Every parent triangle over I still has the common parent root, including all new radial guard subdivisions. The child occupies [-4r,4r]x[0,4r].

The cutoff hierarchy is fixed throughout this note: the BULK commutator is supported between scales R and 2R, with its one-cell enlargement inside S_(3R); the PRESSURE lift cutoff equals one on S_(4R) and zero outside S_(8R); the retained BASE TAIL therefore starts at |x|>=4R. To bind the existing geometry notation, use R_geom=16R in the uniform-ring construction. It supplies exact uniform cells through S_(4R_geom)=S_(64R), while its clearance condition 8R_geom=128R<ell/4 is enforced by the chosen small fixed factor. The enlarged interval I and all cutoff stencils stay on the same straight side, avoid neighboring children, and remain away from side endpoints. None of these fixed factors changes the powers of b0,sigma,a,N.

Use the AFFINE-EQUIVARIANT extractor C_I=mean_I T=[f(right)-f(left)]/|I| and a_I(x)=f(0)+C_I x. Thus g=f-a_I is unchanged under addition of ANY affine pressure, including a nonzero normal affine gradient. The fully read supplier [radial-fan-entire-base-affine-remainder.md](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/radial-fan-entire-base-affine-remainder.md) gives g(0)=0 and

    R ||g'||_L2(I)^2+R^(-1)||g||_L2(I)^2
        <=C (R D/Y^2) E_I^2,                            (1)

where E_I is the actual parent-patch pressure-gradient norm after an arbitrary selected affine background is removed. To verify the mean-T choice explicitly, for ANY constant N_0 use G=T+D(N-N_0)/s, whose derivative is -D(N-N_0)/s^2. The supplied bound for T-meanG and the contraction of mean subtraction give ||T-meanT||<=2||T-meanG||<=C(D/Y)||N-N_0||. The exact physical area D ds/2 then gives (1). The numerical value meanG is NOT used as the macro extractor. Constants do not depend on the number or sizes of base guard intervals.

The actual child base [-4r,4r] retains just its three nodes, so on that subinterval alone

    g(x)=a x+k|x|.                                       (2)

Outside it, g has ALL its actual extra guard breakpoints. None is assigned the value of the continuation of (2).

Use the allowed geometry choice confirmed by the geometry owner: every new physical-base guard in this comparison window has tangential coordinate in the common d-lattice, with r/d dyadic. The child three nodes already have this property. Exterior collar heights can still be arbitrarily small and nonuniform. Corner-star surgery inserts only interior points and preserves these base edges. This choice does not bound pressure values or remove any pressure degree of freedom.

## 2. A fixed macro correction around the seven-node child

Construct a continuous piecewise-affine S, on a fixed child-scale macro subdivision, with

    S=|x-y| throughout the child box,
    S=|x| outside S_(8r),
    S|base=|x|,
    |S|<=C r,  |grad S|<=C

on its correction support. Here the last size bound is only required where S differs from |x|. The construction is elementary: triangulate the fixed U-shaped polygon between the child rectangle and S_(8r), assign the inner trace |x-y| and outer trace |x|, and interpolate on a fixed nondegenerate macro triangulation. The top midpoint of S_(8r) is allowed as a uniform-grid node; no midpoint is inserted on the CHILD top edge. The child side-strip nodes lie on affine macro edges; inserting them does not change S on those macro triangles. Its gradients therefore remain bounded independently of the side-strip height. Inside the child use only the root-to-existing-top-right crease.

This S is affine on each protected fan and whole reserve hole, as in the cheap kink-lift proof. Overlay its finite interfaces with the transition, never subdividing a child boundary edge. Refinement preserves old affine pressure lifts and does not enlarge any old vertex star. Outside S_(8r), the exact uniform grid is unchanged and S-|x| vanishes.

Define before the distant cutoff

    Psi(x,y)=g(x)+k[S(x,y)-|x|].                           (3)

Inside the child, (2) makes this EXACTLY a x+k|x-y|. Thus the spurious vertical kink at x=0 cancels there, all seven boundary traces are affine, and no eighth node appears. Outside the child, the extra vertical g-breakpoint lines have |x|>=4r and never enter the child interior. On the uniform ring they are actual vertical lattice edges. The transition is conformed to those finitely many vertical interfaces and to the fixed S interfaces; it can be chosen before the pressure coefficients, since this is a finite linear trace space. No interpolation through a skinny triangle is invoked.

## 3. Distant endpoint cutoff and energy

Choose a smooth cutoff eta equal to one on S_(4R) and zero outside S_(8R), with first derivative C/R and second derivative C/R^2. In particular eta=1 on the coarse transition AND on the ENTIRE bulk commutator annulus R..2R and its stencil enlargement. On the common uniform annulus use the nodal P1 interpolant of eta Psi; inside it keep Psi exactly. Call the actual pressure function Phi. Its base trace equals the actual g throughout |x|<=4R, including EVERY guard breakpoint there. There is no base-tail source on a bulk cutoff stencil.

Direct integration on the uniform grid, with its fixed reference shape, gives

    ||grad Phi||_2^2+R^(-2)||Phi||_2^2
      <=C[R||g'||_L2(I)^2+R^(-1)||g||_L2(I)^2+r^2 k^2]. (4)

The first two terms are the ordinary vertical extrusion and cutoff costs. For the correction, S-|x| has support area O(r^2), size O(r), and gradient O(1). There is no cutoff derivative there because eta=1. Its cost is C r^2k^2. On the two child base halves,

    r^2 k^2<=C r ||g'||_L2(-4r,4r)^2
                         <=C R||g'||_L2(I)^2.             (5)

Thus (1),(4),(5) prove the actual full-breakpoint lift bound

    ||grad Phi||_2^2+R^(-2)||Phi||_2^2
                       <=C(R D/Y^2) E_I^2.              (6)

Every constant here is independent of the guard count, smallest base spacing, side-strip height, fan aperture and recursion depth. The finite conforming macro refinement may change the fixed template's minimum angle, but (6) follows from the explicitly prescribed affine gradients and the uniform-grid interpolation only. It is not an assertion of H1 stability of interpolation on arbitrary skinny elements.

In the intended scales this is

    ||grad Phi||_2^2 <=C b0(a_parent/N)^2 E_I^2.           (7)

This replaces the unsuccessful b0 delta^2 estimate by the actual small root-distance factor, with no sigma loss from the guard breakpoint count.

## 4. Endpoint values and the retained far-base driver

The cutoff is not declared equal to one at arbitrary outer endpoints. The actual unlifted tail (1-eta)g starts at |x|>=4R, outside the whole bulk commutator annulus and separated from its stencil enlargement inside S_(3R) by at least a fixed multiple of R. It remains a prescribed far-base driver, not zero or affine. For the part on I its nodal L1 size satisfies

    F_tail=d sum |(1-eta)g|
                      <=C R^(3/2)||g'||_L2(I).           (8)

Endpoint values obey the same estimate by the one-dimensional anchored inequality |g(x)|<=C sqrt(R)||g'||. If a fictitious half-plane representation is used, taper the last endpoint value to zero on one further base cell. Its L1 cost is already covered by (8); no H1 norm of that distant taper is needed. Actual data beyond I and actual outer-interface reactions remain in the independently retained distant cutoff/interface driver, rather than being bounded by an unproved continuation of g outside I.

The actual distant-base Poisson estimate gives affine pressure near the child plus error C(r^2/R^3+d/R^2)F_tail. Its FULL field version is proved explicitly in Section 6 of [incoming-velocity-and-two-neutral-layers.md](incoming-velocity-and-two-neutral-layers.md): from a prescribed base pressure, the physical pressure multiplier has order zero and its velocity multiplier order one; both target mesh VELOCITY amplitudes have order one because the constant base pressure column is purely the physical gauge column. Thus velocity value has separated scale F_tail/R^2 and its first variation F_tail/R^3. Root/vector replacement adds theta and gives error d F_tail/R^3. The actual base velocity and pressure of the tail are zero near the child; exact matching fixes the two constant target-layer amplitudes, p_ph(0)=d k_n c_tail,n+O(d^2 F_tail/R^3), and |c_tail,t|<=C d F_tail/R^3. Reset that tiny tangential component to its exact zero local base slope if exact base matching is desired. The normal component is independently extracted and retained, not set to zero.

The resulting child-scale residual cost is at most C r^2 F_tail/R^3 after choosing d<=r^2/R. By (8), this is at most C(r/R)^2 times the right-hand square root in (6). The extracted affine field and both neutral layers are retained as macro/incident data; only this residual is charged as error.

For the BULK commutator estimate one also needs the whole tail field on its larger annulus, not merely its child-scale remainder. Every bulk stencil lies inside S_(3R), whereas the tail base starts outside |x|=4R. The same exact pressure/velocity multipliers give the pointwise bounds

    |v_tail|+|grad p_tail|<=C F_tail/R^2

there, including the neutral mesh layers: one derivative of their O(d) pressure amplitude cancels the d, leaving the same separated kernel. The actual pressure base is zero throughout that annulus, so anchored Poincare, or its explicit gauge oscillation bound, yields

    ||v_tail||_L2(bulk annulus)
      +||grad p_tail||_L2(bulk annulus)
      +R^(-1)||p_tail||_L2(bulk annulus)
                  <=C F_tail/R<=C sqrt(R)||g'||<=C Q.     (8a)

Here Q denotes the trace-lift bound in (6), and one-cell enlargements satisfy the same estimate. Therefore subtracting the actual tail before forming the bulk commutator adds at most C Q to its ring norm. There is no pressure tail source, distant endpoint taper, or logarithmic near-source layer on those stencils. This is precisely why the pressure cutoff radii 4R..8R are OUTSIDE the bulk cutoff radii R..2R.

Consequently endpoint cutoff does not hide an uncontrolled endpoint hat or a logarithmic energy factor. It divides the comparison into an actual local pressure lift and an actual distant-base input with its own reactions and incoming macro extraction.

### 4a. The unequal-velocity lift uses the SAME nesting

Choose the base velocity driver to be the ACTUAL center value g_center. The neutral boundary lift Eg includes eta(x,0)[g_base(x)-g_center] at EVERY local base node, not merely the child's three nodes. The same eta is one through 4R and zero beyond 8R. Its weighted-star norm is the one in the independent full-vector corner/guard budget; enlarging a fixed-size comparison window changes only its fixed constant. Thus the residual velocity trace is zero on every bulk cutoff stencil. The unlifted velocity tail

    h_v=(1-eta)[g_base-g_center]

starts at |x|>=4R and is retained as a distant BASE VELOCITY input. Put F_v=d sum|h_v|. In the actual stable boundary map the normal velocity input gives physical pressure amplitude O(d h_v), while the tangential velocity input gives O(d|theta|h_v). The target mesh velocity has an ordinary analytic constant part, rapidly localized tangentially (including its local boundary value), plus a nonsmooth order-one part. Thus away from its support its full incoming-field bounds are those above with F_tail replaced by d F_v. In particular its whole-field bulk-annulus norm is at most C d F_v/R and its child-scale residual is at most C r^2 d F_v/R^3. Both its affine macro and its two neutral layers are retained.

The L1 norm need not be assumed small. The actual reference-cell parent trace inequality and center-star area comparable to rD give, after subtraction of any constant velocity c,

    ||g_base-g_center||_L2(I)^2
         <=C[1/D+R/(rD)]||W-c||_L2(parent patch)^2
         <=C/(sigma D)||W-c||_L2(parent patch)^2.

Consequently F_v<=C sqrt(R/(sigma D))||W-c||, and the squared whole-tail ring cost is at most

    C d^2/(sigma D R)||W-c||^2
        =C(d/R)[d/(sigma D)]||W-c||^2.                  (8b)

This is no larger than the already retained guard-velocity lift budget C d/(sigma D)||W-c||^2, since d<=R. The center and corner contributions keep their separate actual star weights; (8b) does not substitute a normal pressure-slope estimate. Endpoint extension of the distant velocity tail is treated by the same L1 construction as for pressure, and its reactions remain outputs. Thus neither pressure nor velocity is silently set to zero on an overlapping or unspecified bulk-base interval.

## 5. Coupling and aggregate normalization

Subtract Phi from the actual glued comparison. Its exact load is the velocity functional -(grad Phi,z); its norm is bounded by (6). The passive-child mixed mass estimate applies with the complete child/transition self-response and every constrained-base reaction retained. No inner pressure moment is deleted. The affine a_I and its independently extracted normal macro component remain in the owner state; a_I's slope is not forced back to a global parent slope without the separate reset estimate.

For disjoint safe windows with bounded-overlap parent patches, squared costs sum using (6). With R~b0 D, D/Y~a/N, child radius r~sigma b0 a/N in unit parent scale, and B~N^2/(b0 a) children, the normalized factor is exactly

    sqrt[b0(a/N)^2]/[sigma sqrt(b0 a)]
                              =sqrt(a)/(N sigma).        (9)

This is the admissible polynomial-N gain. It treats the entire refined base trace and does not rely on only two affine pieces outside the child base. The full vector unequal-velocity comparison is handled separately by center matching and child-side corner/guard star budgets; it is not inferred from this scalar lift.

## 6. Exact decomposition into the owner's retained state and errors

Use the EXACT operators J_R,F_R,E_R(D) in the owner's [two-driver embedding](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/exact-two-driver-schur-embedding-target.md). The ideal child DtN D and its ideal exterior self-response J_R are unchanged. The full base trace is split linearly as

    actual base pressure = a_I + eta g + (1-eta)g.        (10)

First, a_I contributes its actual affine macro trace, with tangential macro velocity -a_I'. Its incoming NORMAL macro component is still extracted from the regular exterior field. Second, eta g is lifted by the ACTUAL Phi just constructed. Solve the AUXILIARY homogeneous-base problem

    (w_corr,z)+(grad p_corr,z)=-(grad Phi,z),
    b(w_corr,q)=0.

The PHYSICAL pressure-error pair is (w_corr,p_corr+Phi), and R_Phi means the trace of THIS RESTORED PAIR. Its momentum equation is sourcefree because the two Phi-gradient terms cancel exactly; its weak constraint is unchanged; its prescribed base pressure is eta g. This distinction matters on child cells where Phi is nonzero: the un-restored auxiliary pair is not a sourcefree child response and must not be used in aggregation.

Passive stability gives ||w_corr||_2+||grad p_corr||_2<=C Q, where Q is the square root in (6), and hence the restored pair obeys ||w_corr||_2+||grad(p_corr+Phi)||_2<=C Q as well. All its actual interface and constrained-base reactions, including the restored pressure contribution, remain in the parent equations. Thus R_Phi is an actual sourcefree D-child response with quantified norm, not a third ideal driver or a forced child field passed off as homogeneous.

Third, solve the actual half-plane tail problem, including its prescribed distant base pressure and every base reaction. Decompose its incoming field as the macro c_tail plus the two neutral layers of amplitudes -c_tail, with its small remainder from Section 4. After the actual passive child is glued, this tail contributes

    A(c_tail)+E_R(D)(-c_tail)+R_tail,                     (11)

with the exact base-slope reset included in R_tail and mass norm at most C(r/R)^2 Q for that remainder. The additive pressure constant is a gauge; the normal affine weak-flux reaction in A(c_tail) is retained. If the previous retained macro and layer amplitudes were c and eta_driver, update them to c+c_tail and eta_driver-c_tail. Their sum, the prescribed local base velocity, is unchanged. Therefore the tail stays within the same affine-macro-plus-two-layer state, with its remainder charged explicitly.

Together with the independently bounded bulk-driver and unequal-velocity errors, the actual trace has the owner form

    s_actual=A(c_total)+E_R(D)eta_total
                 +R_Phi+R_tail+R_bulk+R_velocity.          (12)

This is linear superposition of actual mixed solutions and lifts, keeping the complete D+J_R solve. Equation (12) does not set any free child pressure coefficient to an affine value and does not replace the outgoing self-response by an incoming estimate. If an additional genuine inner monopole survives the actual interface-equilibrium sum, its existing macroport must still be retained. It is not manufactured or deleted by the guard trace split (10). The full refined comparison-base pressure introduces no uncontrolled additional port once its error is charged by (6)--(9).

The same restoration convention applies to the separately constructed neutral velocity lift Eg. The auxiliary pair has velocity forcing -(Eg,z) and zero base velocity; the PHYSICAL error pair is (w_aux+Eg,p_aux). Since b(Eg,q)=0, its weak equation is sourcefree, and its momentum source cancels exactly after restoration. With simultaneous pressure and velocity lifts, restore (w_aux+Eg,p_aux+Phi). Its velocity mass and pressure-gradient norms remain bounded by C(||Eg||_2+||grad Phi||_2). For the bulk/tail cutoff errors, the compact residual is confined to the common annulus and the subtracted exterior field vanishes near the child, so the error pair is already sourcefree inside the actual child. In all cases the e_c used in parent/child aggregation is the RESTORED physical pair and is a legitimate actual child DtN response.

Finally, the entire split is exactly compatible with the affine Darcy quotient. Adding a constant velocity c_0 and pressure -c_0 dot X plus a gauge changes the chord slope C_I by -c_0,t and the anchored affine trace by precisely that affine pressure; g, k, Phi and the pressure tail are unchanged. The velocity difference g_base-g_center and hence Eg and its tail are unchanged. The regular incoming macro adds c_0, while eta_driver=g_center-c_macro is unchanged. Thus all restored error responses are invariant under the background addition; only the retained A(c_total) and its actual normal weak-flux reactions change. No estimate depends on a non-equivariant mean-G extractor.

The remaining work is the actual recurrent/nonextinction argument and its source/observation realization. This lift alone does not certify the original pressure claim.

No canonical, runtime, manifest, gate, test or commit operation was performed.
