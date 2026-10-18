# Actual uniform MINI mass-Schur symbol and exact flat-base layers

Research continuation, 2026-10-18. This concerns a deliberately chosen uniform filler, not a restriction of the original arbitrary-mesh theorem. It proves the bulk symbol and exact constant/affine flat-base responses of the actual two-dimensional MINI mass system. It does **not** prove the final separated-boundary transfer estimate or the recursive pressure counterexample. All child self-response, inner pressure ports and monopole/gauge modes must remain in that separate step.

The original pressure owner supplied the intended distinction: a small distant-environment error is sought after retaining the actual ideal child/environment self-response. An arbitrary total pressure trace on the inner boundary of an annulus cannot be inferred small from bulk regularity.

## 1. Actual uniform bulk stencil

Take the square lattice of spacing d>0, splitting every square along its southwest-to-northeast diagonal. Use the actual bubble-eliminated local matrices

    C_ii=(4/45)|K| I,    C_ij=(1/180)|K| I,
    H_ij=(|K|/10) grad lambda_j,
    G=(7/10)K,           K_ij=|K|grad lambda_i dot grad lambda_j.

At a vertex at least one complete element star from an interface, the assembled equations are

    C v+H p=0,     H^T v-(7/10)K p=0.                         (1)

C is a scalar stencil times the vector identity. Its diagonal entry is 4d^2/15, and its six off-diagonal entries, at offsets +/-e_1, +/-e_2, +/-(e_1+e_2), are d^2/180. At Fourier frequency theta=(x,y), put

    c(theta)=4/15+[cos x+cos y+cos(x+y)]/90,
    k(theta)=4-2cos x-2cos y,
    A(theta)=2sin x-sin y+sin(x+y),
    B(theta)=-sin x+2sin y+sin(x+y).

Then exactly

    C_hat=d^2 c(theta),
    H_hat=(i d/10)(A(theta),B(theta)),
    K_hat=k(theta).                                         (2)

For example the H coefficients at +e_1,+e_2,+(e_1+e_2) are respectively d(1/10,-1/20), d(-1/20,1/10), d(1/20,1/20), with opposite coefficients at the negative offsets. This independently fixes the signs and normalization in (2).

All bulk stencils commute. Multiplying the pressure equation by C and using the velocity equation gives the actual compact pressure equation

    L p=0,    L=(7/10)C K+H^T H.                             (3)

The factor 7/10 must be retained with the stated definition of K. Its exact symbol is

    L_hat=d^2[(7/10)c(theta)k(theta)
                            +(A(theta)^2+B(theta)^2)/100].   (4)

Since -3/2<=cos x+cos y+cos(x+y)<=3,

    1/4<=c(theta)<=3/10.

Also A^2+B^2<=C k, by elementary sine inequalities. Hence

    (7/40)d^2 k(theta)<=L_hat<=C d^2 k(theta).                (5)

The only zero on the Fourier torus is theta=0. Near zero, L_hat=(3/10)d^2(x^2+y^2)+O(d^2|theta|^4). Thus this is a genuinely elliptic compact scalar stencil derived from the actual MINI saddle system. It is not an identification with the P1 Poisson Ritz matrix.

For the full infinite lattice, (5) gives a rigorous global difference estimate. If L_d=d^(-4)L and D_i^+ is the forward difference divided by d, Plancherel gives, for every finitely supported pressure sequence,

    sum_ij ||D_i^+ D_j^+ p||_ell2(d^2)^2
                            <=C ||L_d p||_ell2(d^2)^2.       (6)

Indeed the square-root multiplier on the left is k(theta)/d^2, whereas L_d has multiplier bounded below by (7/40)k(theta)/d^2. All lattice differences commute with L_d, so the corresponding higher global difference estimates follow by applying (6) to difference sequences. These are full-lattice estimates; applying them across a flat boundary requires the actual boundary rows or a justified extension, not merely the bulk formula.

## 2. Exact tangential constant-base layer

Take the flat base y=0, and first impose an x-independent tangential nodal velocity v_j=U_j e_1 and pressure p=p_t x+constant. The complete bulk equations reduce exactly to

    U_(j+1)+25 U_j+U_(j-1)+27 p_t=0.                       (7)

Every scalar pressure row vanishes: H^T v is zero and K p=0. Equivalently, the P1 vector is U(y)e_1, so its gradient pressure pairing with every compactly supported P1 test vanishes. No scalar pressure constraint is omitted.

The bounded solution tending to -p_t at infinity is

    U_j=-p_t+A_t r_t^j,
    r_t=(-25+sqrt(621))/2,    -1<r_t<0.                    (8)

Its pressure remains exactly affine. Thus the tangential mismatch between a constant imposed base velocity and the Darcy far field produces a mesh-width velocity layer, not an additional long-range pressure mode. The actual bubbles are recovered from their eliminated equations; the velocity in (8) is the nodal component, not the full MINI field.

## 3. Exact normal constant-base layer, including its pressure

Now take x-independent normal nodal velocity U_j e_2 and pressure values P_j. For a geometric mode (U_j,P_j)=(U,P)r^j, put s=r+r^(-1). The complete bulk equations are

    [d^2(25+s)/90] U+[3d(r-r^(-1))/20]P=0,
    -[3d(r-r^(-1))/20]U+[(7/10)(s-2)]P=0.                 (9)

The determinant is exactly

    d^2(s-2)(109s+862)/3600.                              (10)

Besides the affine/constant branch s=2, there is one decaying branch

    s_n=-862/109,
    r_n=(-862+sqrt(862^2-4*109^2))/218,
    -1<r_n<0,

    P=d k_n U,
    k_n=(3/14)[r_n-r_n^(-1)]/[s_n-2].                     (11)

In particular its pressure amplitude is O(d|U|), and its pressure differences divided by a child scale rho are O((d/rho)|U|). Unlike the tangential layer, this actual weakly constrained normal layer has a nonzero pressure; deleting it would lose a genuine MINI mode.

For arbitrary affine far-field pressure p_0+g dot x, the constant nodal velocity -g, together with its actual zero bubble correction, solves the bulk equations. Add (8) and (11) to match either component of a constant base nodal velocity. A gauge adjustment fixes the desired constant pressure value on the base. The base pressure remains affine in the tangential coordinate. Thus the affine/constant incoming background is an exact finite-dimensional family of the *actual* uniform equations, accompanied by two explicit exponentially decaying mesh layers. At positive heights y>=eta rho, the layer factors are bounded by exp(-c eta rho/d). The normal pressure layer has the additional prefactor d/rho in the scaled child pressure units.

These assertions describe the bulk half-plane recurrence with its j=0 nodal values prescribed. They do not assert that an arbitrarily coarsened boundary transition has the same first-row stencil. Coarse boundary edges and the seven-node transition have their own exact local mixed matrices and must be included in the ideal near-field self-response.

## 3a. Actual uniform-base reaction moments

The first boundary row can also be assembled exactly, rather than discarded. There are three incident half-plane triangles. For x-independent normal data it gives the pressure reaction at one base vertex

    r_p=-(3d/20)(U_0+U_1)-(7/10)(P_0-P_1).                (12)

The normal velocity reaction is

    r_v,n=d^2(25U_0+2U_1)/180+(3d/20)(P_1-P_0).          (13)

For the decaying normal mode (11), r_p=0 **exactly**. Indeed

    (r-r^(-1))/(s-2)=(r+1)/(r-1),

so the two terms of (12) cancel. Its velocity reaction is the positive scalar

    r_v,n=d^2 U sqrt(862^2-4*109^2)/5040.                 (14)

For the tangential mode (8), the pressure reaction is likewise zero and its tangential velocity reaction is

    r_v,t=d^2 A_t sqrt(621)/180.                          (15)

For the affine background p=p_0+g dot x, v=-g, the boundary velocity reaction is zero and the pressure reaction is d g_n, with g_n the upward pressure derivative. It is the retained normal-flux channel in the elementwise gradient convention. For a finite base segment, the end reactions and tangential nonconstant data must also be retained; (12)--(15) are per-vertex translation-invariant base moments, not a declaration that a finite segment has no endpoint residual.

Thus both mesh-width mismatch layers are exactly neutral in the actual base pressure rows. Their boundary response is an explicit positive velocity impedance. The affine normal-flux reaction, constant pressure gauge, endpoint moments and prescribed kink remain separate, as required for an eventual source-free monopole check.

## 4. What this supplies for a separated child interface

The completed ingredients are (4)--(6), and the exact affine-background plus mesh-layer family (8)--(11). They eliminate the possibility of treating every normal base mismatch as a spurious long-range scalar mode. They also identify precisely how small a uniform spacing d may be chosen, relative to the smallest positive port height, so that these ideal bulk layers contribute an arbitrarily prescribed small scaled pressure defect. Such a choice is allowed for a deliberately constructed finite template; it is not a global mesh hypothesis.

They do not yet bound the actual cross-DtN map between radius rho and radius ell. Three distinctions remain essential:

* The compact equation (3) is valid only where the full neighboring velocity and pressure rows are bulk rows. It cannot be asserted through the child hole or the flat-base coarse transition without deriving those rows.
* Arbitrary nonaffine inner pressure data have an O(1) ideal self-response. An annular harmonic mode driven from the inner boundary is not suppressed at that same boundary merely because rho/ell is small. The small object must be the distant/background driving term after the complete self-response has been retained.
* A logarithmic/monopole channel, the constant pressure gauge, prescribed base-flux/velocity moments, and any pressure kink must be explicitly separated. Zero total weak pressure moment removes only the corresponding net channel when proved for the actual assembled block; it does not delete every inner pressure coefficient.

A complete next step would derive the separated-boundary map for (1), with the actual base and transition rows, and prove dipole/higher-channel decay while retaining these low modes. No such bound is proved by the present symbol calculation. In particular neither a passive child impedance nor bulk ellipticity alone is used here to declare its nonaffine pressure ports small.

No canonical items, manifests, runtime files, gates, tests, or commits were changed or run.
