# Actual mean-transfer CP lower-bound audit

Research proof, 2026-10-18. This gives exact finite-dimensional comparison tools for the ACTUAL limiting full-boundary child maps. It also records why the presently proved approximate tangent row does not yet prove a growing eigenvalue. No ideal transfer is substituted for an actual child map. No canonical/runtime edits or tests.

## 1. Actual maps, row families and positive-map comparison

Take the actual mass DtN fixed point established in `../N-ROOT-mini-fractional-projection-cycle4/actual-mini-mass-mosco-and-dtn-limit.md`. There are finitely many template types, with a fixed finite quotient state dimension (at most twenty before deleting the affine-Darcy background). Let T_i map the parent quotient state to the complete child state, with pressure divided by the child's scale and its gauge fixed. Let E_t be the exact limit response variance form of type t. The checked mass contraction gives

    sum_(i child of t) rho_i² T_i^T E_(type i) T_i <= E_t. (1)

For simplicity first take common child scale rho and common count B; unequal comparable scales can be handled with the corresponding explicit weights, not by replacing them with one. Put S_0=B rho², S_s=B rho^(2-2s), alpha_i=1/B. On families of scalar ROW functionals define the genuine finite-dimensional operator

    (U ell)_t=sum_i alpha_i ell_(type i) T_i.              (2)

The normalized positive operator on families of quadratic forms is

    (P H)_t=sum_i alpha_i T_i^T H_(type i) T_i,
    L_s=S_s P.                                           (3)

No T_i or U is asserted self-adjoint. Jensen gives, for H_t=ell_t^T ell_t,

    (P H)_t >= (U ell)_t^T (U ell)_t.                     (4)

Apply the same inequality inductively to obtain P^k H >= (U^k ell)^T(U^k ell). Taking any fixed finite-dimensional norms and k-th roots proves

    r(P)>=r(U)²,       r(L_s)>=S_s r(U)².                (5)

This is valid for multiple types and arbitrary full coupled child maps. It does not require a common right eigenvector, a velocity-only state, reciprocity beyond the actual assembly, or a pressure observation. For unequal scales choose alpha_i proportional to rho_i^(2-2s), and either use equal sums S_(s,t) or the explicit minimum of them in the positive-map comparison. The operator norm estimate below then retains the ratios between the s-weights and mass weights.

In the row-family maximum dual-energy norm,

    ||ell||=max_t sup_s |ell_t s|/sqrt(E_t(s)),

Cauchy-Schwarz and (1) prove

    ||U|| <= (min_t S_(0,t))^(-1/2)                     (6)

for common mass weights alpha_i=rho_i²/S_(0,t). With common rho those are exactly the weights in (2). Transforming the finitely many E_t to Euclidean norms and replacing the maximum by their Euclidean sum costs only the square root of the fixed number of types, independent of N or aperture.

## 2. Exact approximate-row input and the aperture obstruction

Let ell_t(s) be the actual root tangential velocity plus its incoming base-half pressure slope. It is background invariant. The full outer inverse, all-fan slope reset, selected-root count and actual mixed exterior tests are the ingredients for an estimate of the form

    ||U ell+ell/17||_(E dual)
          <= C sqrt[(delta²+epsilon_Q)/(a sigma)].        (7)

All orientation, half-slope and actual finite-template constants must be retained when establishing (7). It is not a separate assumption that a neighboring velocity defect is small: the full outer block solves that defect. A neutral root-velocity boundary lift with zero boundary pressure shows ||ell||_(E dual)>=c>0. A sharper normalization can exploit its actual fan-area scaling, but must be proved for the chosen state norm.

A finite-dimensional approximate eigenvector is NOT automatically an eigenvector, even though U comes from reciprocal saddle matrices. Here is the precise determinant estimate. For a d-dimensional Euclidean representation, a unit row v with

    ||v(U+theta I)||<=eta,     ||U||<=M

implies

    dist(-theta,spectrum U)
       <=[eta(M+theta)^(d-1)]^(1/d).                     (8)

Indeed the smallest singular value of U+theta I is at most eta, every other singular value is at most M+theta, and the determinant is the product both of the singular values and of eigenvalue distances. Norm equivalences for the row-family Hilbert representation cost fixed type/dimension constants only. Thus (8) is rigorous without normality. It is useful only if its right side is quantitatively small.

The actual aligned tooth geometry has

    B comparable to N²/(b0 a),
    rho comparable to sigma b0 a/N,
    S_0 comparable to sigma² b0 a,
    S_s comparable to N^(2s) sigma^(2-2s)(b0 a)^(1-2s).    (9)

The aperture factor in S_0 is essential. Write L=log N and

    a=L^(-A), delta=L^(-D), sigma=L^(-S), b0=L^(-B0).

For a smaller aperture than tilt, A>D. Equation (6) supplies only the available upper-bound scale M<=C L^[S+(B0+A)/2]; it does not assert an actual lower bound on ||U||. Even granting the improved normalized residual eta of order delta/sqrt(sigma), the sufficient smallness condition from (8) is

    D > S/2+(d-1)[S+(B0+A)/2].                            (10)

For d>=3 and A>D this is impossible. The raw estimate (7) is weaker still. The actual child-root star contribution must also enter epsilon_Q; collars cannot remove the child fan itself. Its precise lower scale must be computed with the actual child aperture and fixed boundary cells. The coarse sufficient estimate O(sigma b0) from whole-child-box area is an UPPER budget, not by itself a lower bound on that star. No star floor is inferred here from the reserve-box area alone.

Accordingly, the earlier proposal "choose delta a sufficiently high inverse log power" does NOT close the actual spectral argument with only the proved total-energy norm. Increasing that power also shrinks S_0 and enlarges M. This note corrects that possible inference explicitly.

## 3. A concrete block certificate that WOULD avoid the full-dimensional loss

The actual missing structure can be stated sharply. Normalize the tangent row and choose an orthonormal decomposition with it first. Write the ACTUAL mean operator as

    U=[ -theta+alpha   r^T ; c  D ],
    |alpha|+||r||<=eta,      ||c||<=M.

Suppose its complementary block satisfies ||D||<=M_0, with M_0 only polylogarithmic in N INDEPENDENT of the aperture loss a^(-1/2). This is an additional actual-block estimate, not a consequence of (1) or (7).

Among circles |z+theta|=r with theta/4<=r<=theta/2, one can choose a circle a distance at least c_d theta from every eigenvalue of D: exclude a short interval around each of its at most d-1 radial distances. On this circle the determinant/adjugate bound gives

    ||(zI-D)^(-1)||
          <= C_d(M_0+theta)^(d-2) theta^(-(d-1))=:R_0.

The scalar Schur factor is

    z+theta-alpha-r^T(zI-D)^(-1)c.

If eta(1+R_0 M)<theta/4, the perturbation is smaller than |z+theta| on the circle. Comparing the full analytic determinants

    det(zI-U)
       =det(zI-D)[z+theta-alpha-r^T(zI-D)^(-1)c]

with det(zI-D)(z+theta), Rouche's theorem proves that U has at least one eigenvalue inside that circle. Thus r(U)>=theta/2. This conclusion retains the full D block and its possible enclosed eigenvalues; no unsupported eigenvalue separation at the center is assumed.

The aperture loss now occurs only ONCE through M, instead of d-1 times. With normalized eta of order delta/sqrt(sigma), the required tilt/aperture relation is of the feasible form delta times a^(-1/2) times polylog factors small. It allows delta² much smaller than a while a is smaller than delta. Together with (5),(9), a genuine lower bound r(U)>=1/34 would force r(L_s)>1 for fixed sufficiently large N and any prescribed s>0, because N^(2s) dominates the explicit logarithmic factors.

This is a bounded actual finite-port target: prove the complementary response estimate, or an equivalent low-rank/right-state certificate, for the actual maps. It is NOT proved here. In particular the scalar tangent row, saddle reciprocity, mass contraction and pressure-free quotient alone do not establish this complementary bound.

## 4. Source visibility remains a separate finite-port step

Even r(L_s)>1 would prove a growing quadratic-form channel, not automatically growth for the four admissible coarse bubble projections. The root forcing matrix for those four sources must have nonzero component in the associated growing reachable channel. The pressure-observable coarse-projection bridge then turns their Hs divergence into actual pressure; its full-R coarse-source hypothesis already removes the arbitrary pressure-free shear objection. Neither source reachability nor Hs divergence is inferred from (5) alone.
