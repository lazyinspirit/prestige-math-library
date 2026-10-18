# Actual MINI mass projection: scalar elliptic correction and boundary-layer test

Research continuation, 2026-10-18. The H2 Fortin proposal is retained unchanged. This note proves a further structural statement for the actual MINI spaces and rules out one suggested inference in a prospective graded-mesh counterexample. It supplies neither a smooth-branch pressure counterexample nor the missing first-order instantaneous estimate.

## 1. The actual mass Schur problem has a uniformly elliptic scalar form

Fix an allowed mesh. Let R_h be the L2-orthogonal projection onto the **full** MINI velocity space V_h, and let P_h=P_Zh be the L2-orthogonal projection onto its weak divergence kernel. Both act on L2(D)^d. Define, for q_h,r_h in the mean-zero continuous P1 pressure space Q_h,

    g_h(q_h,r_h)=(R_h grad q_h,R_h grad r_h)_2.

There are constants 0<c<=1 independent of all element diameters such that

    c ||grad q_h||2 <= ||R_h grad q_h||2 <= ||grad q_h||2.

The upper bound is orthogonal-projection contraction. For the lower bound, put

    w_h|K = b_K grad(q_h|K).

These cell bubbles assemble into V_h because their traces vanish on every cell face. Their fixed reference shape gives

    (grad q_h,w_h)_2
        = sum_K (integral_K b_K)|grad(q_h|K)|²
        >= c_0 ||grad q_h||2²,
    ||w_h||2 <= C_0 ||grad q_h||2.

By the defining projection property,

    (R_h grad q_h,w_h)_2=(grad q_h,w_h)_2.

Cauchy--Schwarz therefore proves the lower bound with c=c_0/C_0. This proof needs neither a viscosity nor an inverse estimate. In particular g_h is coercive in the scalar gradient norm, with constants depending only on the reference bubble and shape regularity. The zero-mean gauge and connectedness make that norm definite on Q_h.

For arbitrary F in L2(D)^d, let phi_h in Q_h solve

    g_h(phi_h,q_h)=(R_h F,R_h grad q_h)_2,
                   q_h in Q_h.                                      (1)

Finite-dimensional positive definiteness gives a unique phi_h. Then

    P_h F=R_h F-R_h grad phi_h.                                     (2)

Here is the exact verification, including all pairings. Because q_h is continuous H1 and every v_h has zero boundary trace,

    b(v_h,q_h)=(v_h,grad q_h)_2=(v_h,R_h grad q_h)_2.

Thus Z_h is the L2-orthogonal complement, inside V_h, of R_h grad Q_h. Equation (1) says precisely that the right side of (2) is orthogonal to R_h grad Q_h and hence lies in Z_h. For z_h in Z_h,

    (F-[R_h F-R_h grad phi_h],z_h)_2
       =(F-R_h F,z_h)_2+(R_h grad phi_h,z_h)_2=0.

This identifies it with the actual orthogonal projector, and not a different divergence-preserving projection.

## 2. Exact-solenoidal smooth data yield a small scalar correction

Suppose F=u belongs to H2(D)^d intersect V_sigma. For every q_h in Q_h,

    (u,grad q_h)_2=0.

Projection symmetry and idempotence give

    (R_hu,R_h grad q_h)_2
        =(R_hu,grad q_h)_2
        =(R_hu-u,grad q_h)_2.

Consequently the scalar problem for the actual projection simplifies to

    g_h(phi_h,q_h)=(R_hu-u,grad q_h)_2.                             (3)

The H2 face-average interpolation estimate in the unchanged proposed supplier gives

    ||R_hu-u||2 <= ||I_hu-u||2 <= C h² ||D²u||2,

because I_hu is in V_h for zero-boundary u. Test (3) with phi_h and apply section 1 to obtain

    c² ||grad phi_h||2²
       <= ||R_hu-u||2 ||grad phi_h||2.

If the gradient vanishes the conclusion is immediate; otherwise divide. Thus

    ||grad phi_h||2 <= C h² ||D²u||2,
    ||R_h grad phi_h||2 <= C h² ||D²u||2.                          (4)

This describes the small, actual weak-divergence correction of the unconstrained mass approximation. It requires no full H1 bound on either mass projector. In particular

    P_hu = R_hu - R_h grad phi_h,
    P_h(u-Pi_hu) = R_h(u-Pi_hu)-R_h grad phi_h,

where Pi_h is exactly the existing Fortin map. The second identity uses Pi_hu in Z_h, so P_h Pi_hu=Pi_hu=R_h Pi_hu.

The scalar map u -> phi_h is linear. Applying the same argument to u_t gives (4) with u_t and the time derivative phi_{h,t}, almost everywhere, under the original W1-infinity H2 solenoidal hypothesis. This derivative identification follows already from the fixed finite-dimensional linear system (3): in any pressure basis, its constant positive-definite coefficient matrix commutes with the scalar weak time derivative. Hence the scalar correction is W1-infinity in its gradient norm with size C h² ||u||W1-infinity(H2).

No estimate on the spatial gradient of R_h grad phi_h follows from (4). In particular it would be incorrect to cite (4) as an H1 stability assertion for the constrained mass projector.

## 3. A useful exact contraction identity, and its limitation

The same scalar form can be written

    g_h(q_h,r_h)
      =(grad q_h,grad r_h)_2
        -((I-R_h)grad q_h,(I-R_h)grad r_h)_2.                     (5)

Indeed the two orthogonal projections split each gradient. Section 1 gives

    ||(I-R_h)grad q_h||2²
        <= (1-c²)||grad q_h||2².

Thus the subtracted symmetric form in (5) has relative H1 operator norm at most 1-c², strictly below one uniformly in the mesh. The scalar Schur problem is a uniformly bounded perturbation of the usual P1 Laplace stiffness problem in this precise energy sense.

The constant can be made explicit. The L2-orthogonal projector onto independent cell bubbles has range contained in V_h, so projection onto V_h captures at least its squared norm. For a cellwise constant gradient, that bubble-projection norm squared is (I_1²/I_2) times the original norm squared, with the moments I_1,I_2 evaluated in section 5 below. Their ratios are 7/10 in two dimensions and 33/56 in three dimensions. Hence the relative upper bound on the subtracted form can be taken as 3/10 and 23/56, respectively. This sharpened contraction remains an energy-space assertion.

This identity suggests a small-positive-fractional regularity argument, but does not prove one. Such an argument would need an actual uniform discrete interpolation/regularity theorem on the allowed graded meshes, with its exact boundary spaces; energy equivalence alone is insufficient to assert H^(1+s) stability. Neither a fractional estimate for P_h(u-Pi_hu) nor a full-test parabolic pressure estimate is claimed here.

There is also a specific reason to avoid substituting a mesh-weighted inverse estimate for fractional regularity. On meshes with a positive-measure subregion refined to an arbitrarily small scale, a global elliptic correction can have a nonzero smooth gradient in that refined subregion due to forcing elsewhere. A weighted estimate using h_K^(-s) there would demand much more than an ordinary H^s estimate. No such transfer from a weighted norm to the required fractional estimate is used.

## 4. A fractional left inverse for the actual projected pressure gradients

For v in L2 define the positive bubble-weighted cell average

    (T_h v)|K = (integral_K b_K)^(-1) integral_K b_K v.

For every q_h in Q_h, this gives the exact left-inverse identity

    T_h(R_h grad q_h)=grad q_h.                                  (6)

Indeed b_K e_j belongs to V_h for each coordinate j. Projection orthogonality gives integral_K b_K (R_h grad q_h)_j = integral_K b_K (grad q_h)_j, and grad q_h is constant on K. In particular no approximate commuting diagram is being assumed.

There is a useful uniform physical fractional estimate for this left inverse: for each fixed 0<s<1/2,

    ||T_h v||H^s(D) <= C_s ||v||H^s(D).                         (7)

Here H^s has the L2 norm plus the Slobodeckij seminorm integral_D integral_D |v(x)-v(y)|²/|x-y|^(d+2s) dxdy. The following elementary proof also explains the upper threshold. Bubble scaling gives a probability density b_K/(integral_K b_K) bounded by C/|K|. Jensen therefore gives, for any two different cells,

    |(T_hv)|K-(T_hv)|J|²
       <= C/(|K||J|) integral_K integral_J |v(a)-v(b)|² da db.     (8)

Use the standard local geometry of a matching shape-regular mesh: there is a fixed epsilon>0 such that a pair with dist(K,J)<epsilon max(h_K,h_J) has comparable diameters; every other pair has all distances between its points comparable to dist(K,J). To verify the first assertion, the vertex star of a cell contains a relative neighborhood of that cell of thickness at least epsilon h_K. Every cell in that star has comparable diameter by the connected, bounded-length facet chains in the existing interpolation supplier. Its outer facets that do not lie on the domain boundary are separated from K by a fixed multiple of h_K: normalize h_K to one and use the lower simplex altitudes, bounded star size and shape-regular compactness. Thus a cell outside the star cannot enter that relative neighborhood. Fixed-domain Lipschitz chart radii handle pairs across distinct domain boundary sheets. Shrinking epsilon if necessary proves the assertion. The second assertion follows directly from dist(K,J)>=epsilon max(h_K,h_J), by the triangle inequality.

For a far pair, the cell integral of the kernel is bounded by C|K||J| dist(K,J)^(-d-2s). Multiplying (8) by that integral bounds the projected contribution by C times the original seminorm contribution over K times J.

For a near pair put h=h_K, comparable to h_J. Its kernel integral is at most C_s h^(d-2s). One direct bound is

    integral_K integral_(R^d\K) |x-y|^(-d-2s) dy dx
       <= C_s integral_K dist(x,partial K)^(-2s) dx
       <= C_s h^(d-2s).

The first inequality integrates outside the ball with radius dist(x,partial K); the second uses that a simplex's boundary strip of width r has volume at most C h^(d-1)r, and integral_0^h r^(-2s)dr is finite for s<1/2. Multiply (8) by this kernel bound and use |K||J| comparable to h^(2d). Since every a in K and b in J obey |a-b|<=C h, the resulting h^(-d-2s) unweighted double integral is bounded by the original fractional seminorm over K times J. Summing all cell pairs proves the seminorm bound. The L2 bound follows from Jensen on each cell and the density bound, giving (7). This proof works componentwise and uses only actual local shape regularity and matching, rather than global quasiuniformity.

Combining (6) and (7) yields an actual uniform fractional lower bound on the pressure-gradient reconstruction:

    ||grad q_h||H^s(D) <= C_s ||R_h grad q_h||H^s(D),
                     q_h in Q_h, 0<s<1/2.                     (9)

Both fields are in H^s: the first is piecewise constant, whose finite face jumps have finite seminorm exactly in this range; the second belongs to V_h. Formula (9) is a lower bound, not a solution estimate for (3). It does not establish the inverse Schur operator in H^(1+s), an upper H^s bound for R_h, or the fractional discrete-Stokes estimate required by the evolutionary argument. Those remain distinct obligations.

## 5. The full MINI mass projector has an additional mesh-independent Lp stability mechanism

This section concerns R_h onto the full velocity space, not P_h onto the weak kernel. Eliminating the MINI bubbles from its mass matrix gives a strictly diagonally dominant nodal system on every affine mesh. This property is stronger than the corresponding general continuous P1 mass-matrix statement and does not require a mesh grading assumption.

It suffices to consider one scalar component. Write lambda_i for the barycentric functions of a cell K, n=d+1, and take the normalized bubble b_K=n^n product_(i=1)^n lambda_i. Normalizing the bubble differently leaves the condensed matrix unchanged. The simplex monomial formula gives, with all entries divided by |K|,

    (lambda_i,lambda_i)/|K| = 2/[n(n+1)],
    (lambda_i,lambda_j)/|K| = 1/[n(n+1)]  (i!=j),
    I_1 = (integral_K b_K)/|K|
          = n^n d!/(d+n)!,
    I_2 = (integral_K b_K²)/|K|
          = n^(2n) d! 2^n/(d+2n)!,
    (lambda_i,b_K)/|K| = I_1/n.

The first three identities follow by integrating monomials on the reference simplex (or repeated beta integration); affine change of variables supplies |K|. The last follows from permutation symmetry and sum_i lambda_i=1. Eliminating the single bubble coefficient subtracts the rank-one matrix with all entries delta=(I_1/n)²/I_2. Thus the condensed local matrix has diagonal D=2/[n(n+1)]-delta and off-diagonal O=1/[n(n+1)]-delta. The exact values are

    d=2: I_1=9/20, I_2=81/280,
         D=4/45, O=1/180,       d O/D=1/8;
    d=3: I_1=32/105, I_2=8192/51975,
         D=283/4480, O=59/4480, d O/D=177/283.

In both dimensions O>0 and r=d O/D<1. After assembly and deletion of zero-boundary nodal degrees of freedom, a nodal row has diagonal D times the sum of volumes of its incident cells. Its sum of off-diagonal entries is at most d O times that same volume sum. Hence the same strict diagonal-dominance ratio r<1 holds globally, independently of every element diameter and of the number of cells.

For clarity, the load is also uniformly controlled. If f is bounded and a_i are the nodal coefficients of R_h f, the condensed load at an interior vertex i is the sum, over incident cells, of

    (f,lambda_i)_K - [(I_1/n)/I_2](f,b_K)_K.

Its absolute value is at most

    ||f||infinity [1/n + I_1²/(n I_2)]
                   times sum_(K incident i) |K|.

Choose a nodal coefficient with maximum absolute value. Its row equation, positive off-diagonal entries and the preceding bounds imply

    max_i |a_i|
      <= [1/n+I_1²/(n I_2)]/[D(1-r)] ||f||infinity.

If there are no interior vertices, the nodal part is absent and only the following independent bubble estimate is needed. Each bubble coefficient beta_K is recovered from

    beta_K = [(f,b_K)_K - sum_(i in K) a_i(lambda_i,b_K)_K]
                   /(b_K,b_K)_K.

Since 0<=b_K<=1 and its scaled moments are fixed, |beta_K|<=C(||f||infinity+max_i|a_i|). The P1 basis is a partition of unity with nonnegative entries, so its reconstructed nodal part is bounded by max_i|a_i|. Only one bubble is nonzero in any cell interior. Therefore

    ||R_h f||infinity <= C_d ||f||infinity.                     (10)

This constant depends only on d, and the proof does not even need shape regularity beyond the affine nondegeneracy needed to define each simplex.

For all 1<=p<=infinity, the same projector satisfies

    ||R_h f||Lp(D) <= C_d ||f||Lp(D).                           (11)

One elementary justification avoids an interpolation theorem. Its finite-dimensional mass formula gives a symmetric integral kernel K_h(x,y). The uniform L-infinity estimate (10), applied for each fixed x to the bounded sign function of K_h(x,·), implies integral_D |K_h(x,y)|dy<=C_d; symmetry gives the same column bound. For 1<p<infinity, weighted Holder gives

    |R_h f(x)|^p
       <= (integral |K_h(x,y)|dy)^(p-1)
                         integral |K_h(x,y)||f(y)|^p dy.

Integrate in x, use the column bound and Fubini to obtain (11). For p=1 use the column bound directly; p=infinity is (10). The kernel formula defines the L1 extension as well, and agrees with the orthogonal projector whenever f is in L2. Vector-valued bounds follow componentwise, with a dimension factor if Euclidean vector norms are used.

This is an actual full-MINI projector estimate. It does not establish (11) for the constrained projector P_h, an H^s upper bound for R_h, or any instantaneous pressure bound. It may be useful in a future fractional or elliptic reconstruction argument, but none of those additional implications is inferred here.

There is an exact associated decomposition of the pressure form. Let P_B project onto the independent cell bubbles and let C be the assembled condensed nodal mass matrix above. The modified nodal basis is phi_tilde_i=(I-P_B)phi_i, so V_h is the L2-orthogonal sum of the bubble space and their span. For a piecewise constant vector field z, the bubble projection has norm squared kappa ||z||2², where kappa=I_1²/I_2. Its load against a modified nodal function is

    t_i(z)=(z,phi_tilde_i)_2
          =[(1-kappa)/n] sum_(K incident i)|K| z|K.

Use this componentwise for the gradients of scalar pressures. Orthogonal decomposition of R_h grad q_h yields

    g_h(q_h,r_h)
      = kappa (grad q_h,grad r_h)_2
        + sum_(j=1)^d t((grad q_h)_j)^T C^(-1)
                                      t((grad r_h)_j).           (12)

In particular the second form is positive and bounded above by (1-kappa) times the ordinary Laplace energy form in the quadratic sense. This follows either from projection contraction or from (12) and g_h(q_h,q_h)<=||grad q_h||2². Formula (12) isolates a positive averaging correction to kappa times the Laplace stiffness. It does not establish a uniform W1,3 inverse estimate on the original domains and meshes; such a claim would require further analysis of the scalar elliptic problem, not merely its positive definiteness.

## 6. A nonzero smooth tangential trace does not itself create the endpoint logarithm

A possible negative route is to refine a boundary region while retaining coarser interior constraints, show that a limiting projected velocity has nonzero tangential boundary trace, and then infer an unbounded L^(4/3) pressure initial layer. The last inference does not follow merely from a bounded smooth trace. The elementary halfline calculation below distinguishes it from the already-accepted generic counterexample mechanism.

Let w0 be nonnegative, smooth and compactly supported on [0,infinity), with w0(0)=A>0. Let w be its Dirichlet heat evolution with viscosity nu>0 and M(t)=integral_0^infinity w(t,y)dy. The reflected Gaussian formula gives exactly

    M'(t) = -[1/(2 sqrt(pi nu))] t^(-3/2)
                 integral_0^infinity z exp(-z²/(4 nu t)) w0(z) dz.

Substitute z=sqrt(t) r. Boundedness of w0 and dominated convergence show

    sqrt(t) M'(t)
      -> -[A/(2 sqrt(pi nu))]
              integral_0^infinity r exp(-r²/(4nu))dr
       = -A sqrt(nu/pi).

In particular |M'(t)|<=C t^(-1/2) near zero. Its L^(4/3) time norm is finite because integral_0^epsilon t^(-2/3)dt is finite. A harmonic outer pressure proportional to M'(t), as in the square stream construction, therefore has no endpoint logarithmic divergence from this bounded trace mechanism. The stronger generic obstruction instead uses a normal initial profile y^(-1/2)(log(1/y))^(-alpha), producing t^(-3/4)(log(1/t))^(-alpha).

This is a check on one inference, not a theorem that every nonzero-trace hybrid limit has a bounded pressure. A complete graded-MINI negative result would still need its actual projection limit, the precise singularity of that limit, the resulting mixed initial layer, and a passage from that layer to the actual fully discrete nonlinear pressure. None of those conclusions is supplied by the bounded-trace calculation alone.

## Disposition

The scalar mass-Schur reduction and its h² correction bounds are proved for the actual allowed MINI spaces. They sharpen the remaining spatial question and may serve a future fractional or parabolic argument. The original instantaneous smooth pressure estimate remains unresolved; no changed initialization, quasiuniformity, extra domain regularity, or mesh/time relation has been assumed. Only this research note was added; the accepted H2 proposal and all canonical content and workflow controls were left unchanged. No tests or gates were run.
