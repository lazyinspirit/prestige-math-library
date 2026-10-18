# Sharp ideal-driver mass energy normalization

Research-only, 2026-10-18. This records a conditional quantitative normalization for the actual two-driver embedding E_R(D). It does not bound the complementary transfer block or establish an invariant graph.

Let r be the child radius, a its fan aperture, R_o the ACTUAL outer radius of the finite ring used in E_R(D), and h the uniform mesh width there. The entire prescribed uniform base outside the child extends over length O(R_o), not O(r). Retain this extent.

Suppose the actual prescribed-boundary neutral velocity extension E_g of each ideal driver has

    ||E_g||_2^2 <= C (a r^2+h R_o)|eta|^2.               (1)

Here a r^2 accounts for the coarse child base/root boundary stars (requiring the sharp nonfan collars), while h R_o accounts for all prescribed uniform-base short-layer traces and far-boundary corner traces. The latter cannot be replaced by h r unless the prescribed trace itself has actually been localized.

The normal ideal layer's prescribed pressure potential has amplitude O(h|eta_n|); its tangential pressure is zero. There is a direct actual extension requiring no logarithmic corner supplier. On the common uniform region take a nodal radial cutoff chi, zero through radius 2r containing the entire coarse transition, one beyond radius 4r, and changing only in the common uniform annulus. Put

    P_B(node)=chi(node) h k_n eta_n (r_n^j-1)

there, and zero inside the actual coarse child/transition. On the geometric base the profile is exactly zero. It matches the exact normal-layer far pressure trace and is continuous across the zero region. Every nonzero cutoff stencil is on the uniform mesh.

The vertical nodal pressure difference divided by h is bounded by C|eta_n||r_n|^j. Summing its squared gradient over width O(R_o) and layers of area O(h R_o) gives C h R_o|eta_n|^2, since sum_j |r_n|^(2j) is bounded. The cutoff derivative term is bounded by C h|eta_n|/r on annulus area O(r^2), hence costs C h^2|eta_n|^2. The ordinary P1 nodal-product estimate on the fixed uniform reference cells therefore gives the ACTUAL extension bound

    ||grad P_B||_2 <= C(sqrt(h R_o)+h)|eta_n|.          (2)

This includes the entire uniform-base extent. No interpolation on a skinny coarse cell, unresolved corner lift, or boundary-pressure reaction omission is used. The common uniform region must actually reach all prescribed far/base boundary stencils; this is a geometric hypothesis, not an inferred property of an arbitrary filler.

By the exact passive mass identity,

    ||W_E eta||_2 <= C[(a r^2+h R_o)^(1/2)+h]|eta|.     (3)

Thus the freely chosen uniform mesh conditions

    h R_o <= a r^2,     h <= r sqrt(a)                   (4)

give the sharp upper bound C r sqrt(a)|eta|, independently of child depth. All scalar reaction rows remain present in the exact E_R construction.

Conversely the embedding fixes root velocity eta exactly. The root fan alone has area at least c a r^2, and reference-cell MINI mass positivity yields

    ||W_E eta||_2 >= c r sqrt(a)|eta|.                  (5)

Hence the energy Gram matrix of the IDEAL two-driver family is comparable to a r^2 I, with aperture-independent condition number once (1)-(4) hold. In particular E_R divided by r sqrt(a), and its inverse ON ITS TWO-DIMENSIONAL RANGE, are bounded. The corresponding root selector multiplied by r sqrt(a) is bounded on all actual mass responses by the same root-star lower bound.

For the full projection P_E(s)=E_R Pi(s,c_in(s)), the incoming macro extractor must ALSO be bounded in this energy normalization. A bound |c_in|<=C||W||/r would make its contribution r sqrt(a)|c_in| lower order O(sqrt(a))||W||. That extractor bound is a separate incoming-field statement; root extraction alone does not prove it. Pressure gauges and affine macro reactions remain outside the driver energy quotient and cannot be discarded.

Even a uniformly conditioned projection P_E is not a bound on the complementary transfer Q T Q, Q=I-P_E. That actual block must be controlled before a rank-one reflection-odd Schur or invariant-graph argument is valid. In particular no generic matrix-norm or determinant conclusion is drawn here.

## Reflection-odd rank-one selector: the tangential pressure term

There is a concrete bound for the tangential base-slope selector that avoids a skinny-cell inverse estimate. Let the actual child be the fixed rectangle of diameter O(r), with its three unrefined base vertices c_-,o,c_+. For any actual continuous P1 pressure p, define its average base slope

    p_t=[p(c_+)-p(c_-)]/(8r).

The base trace is continuous and affine on each of its two halves. On this fixed two-element one-dimensional trace space, its H^(1/2) seminorm is at least c r |p_t|. The ordinary rectangle trace theorem, after subtracting the volume mean and using scaled Poincare, bounds that seminorm by C||grad p||_L2(C). These constants are properties of the fixed rectangle and the two base edges, independent of the interior triangulation and of the thin strip. Therefore

    |p_t| <= C r^(-1)||grad p||_2
           <= C r^(-1)||W||_2                         (6)

for an actual source-free mass response, by its local bubble equations. Point evaluation in H1 is NOT being used: the pressure difference is controlled through the whole affine base trace.

Set L_t(s)=g(o)_t+p_t. The root-star lower bound and (6) give

    r sqrt(a)|L_t(s)| <= C||W||_2.                     (7)

For the ideal tangent column E_t=E_R(D)e_t, the prescribed base pressure is zero and root velocity is e_t, so L_t(E_t)=1 exactly. Hence the rank-one operator

    P_t s=E_t L_t(s)

is an EXACT projection and is uniformly bounded in the actual mass response energy whenever the sharp ideal energy estimate (3)-(4) holds. On a reflection-odd state its affine tangential background is removed by this root-plus-base-slope contrast. This does not identify the full incoming normal macro component, and it is not a two-driver projection on arbitrary states.

The remaining task is still the actual averaged complementary transfer (I-P_t) T (I-P_t) on the reflection-odd state space. The estimate above supplies a bounded selector/projection, not a small transfer block.


For the actual single-diagonal radiation exterior, its tangent column need not itself be reflection odd. Use E_t^-=(E_t-U E_t)/2 in the odd projection instead. The actual child template and its response energy are reflection invariant, so this is an actual source-free odd response, its energy is no greater than the original sharp bound, and L_t(E_t^-)=1 exactly. The same trace/root lower bound applies. Thus P_t=E_t^- L_t preserves the odd sector. The normal column's odd part is a separate parity error requiring the compatible-port exterior Darcy comparison; no exact cancellation is claimed for it.
