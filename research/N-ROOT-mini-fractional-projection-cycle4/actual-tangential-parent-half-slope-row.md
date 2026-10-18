# Actual tangential parent row and selected child half-base slope

2026-10-18. Research proof. This closes the pressure-average versus inherited half-base distinction in the tangential channel. It does not control the neighboring velocity defect or full exterior reaction, and hence is not a recursive-mode proof.

## 1. The exact two-triangle row, with all remainders retained

Let two current parent fan triangles K_-=(0,v_-,v_0) and K_+=(0,v_0,v_+) have their three outer vertices on the same straight long tooth side. Write their areas A_-,A_+, T=A_-+A_+, w_-=A_-/T,w_+=A_+/T. Root velocity is a, outer nodal velocities are b_-,b_0,b_+, and pressure gradients are p_-,p_+. There are no source loads on these triangles. Set

    p_bar=w_- p_-+w_+ p_+,
    d_b=w_- b_-+w_+ b_+-b_0.

Use the global MINI velocity test formed by the nodal hat of v_0, corrected on EVERY incident cell by

    psi_0|K=lambda_(v_0)|K-(14/27)b_K.

The correction makes psi_0 exactly L2-orthogonal to the element bubble. On either parent triangle its mean is 1/10, and its affine mass row has diagonal D=4/45 and off-diagonal O=1/180. Consequently the ACTUAL momentum row is exactly

    17 b_0+a+18 p_bar = -d_b-180 R/T.                         (1)

Here R is the vector sum of ALL remaining contributions to this corrected nodal row. For the mass problem it contains every nonparent-cell mass/pressure contribution and any true external/source reaction. For the normalized actual strain Brinkman problem it also contains

    lambda^(-1) a(W,psi_0 e_i)_(K_- union K_+)

in component i, in addition to the complete exterior contribution. Nothing in (1) bounds or deletes R. Testing by psi_0 rather than silently using a mass-condensed bubble formula makes (1) valid for the actual strain problem as well, with its strain remainder explicitly retained.

Indeed the two parent mass rows are

    D T b_0+O[T a+A_-b_-+A_+b_+]+(T/10)p_bar.

Dividing by O T gives 16b_0+a+w_-b_-+w_+b_++18p_bar. Replacing the weighted neighboring velocity by b_0+d_b proves (1). The pressure coefficient 1/10 follows from mean lambda_i=1/3 and mean b=9/20; it is not the uncorrected coefficient 1/3.

For either selected half h in {-,+}, the child base-half incoming slope is p_h dot t, where t is the unit tangent of the straight parent side. Taking the tangential component of (1) yields the exact identity

    (b_0+p_h) dot t
      = -(a+p_h) dot t/17
        +(18/17)(p_h-p_bar) dot t
        -d_b dot t/17-180 R dot t/(17T).                      (2)

The half-slope error is therefore present with its exact coefficient; no affine child-base assumption has removed it.

## 2. Exact continuity suppresses only the tangential kink

Let n be a unit normal to the straight side and write v_0=d n+s t, relative to parent root 0. Since the ACTUAL continuous P1 pressure agrees across the common root--v_0 edge,

    (p_+-p_-) dot v_0=0.

If |s|>=c R_parent, then

    |(p_+-p_-) dot t|
        <= |d/s| |(p_+-p_-) dot n|.                         (3)

The radial tooth construction has radii between fixed positive multiples of R_parent and angular step comparable to a/N. Each long side joins a radius near R_parent/2 to one near R_parent. Its distance from the root satisfies |d|<=C a R_parent/N: explicitly it is the cross product of its endpoint vectors divided by its length. Its tangential coordinate s, throughout that side, has magnitude at least c R_parent, since the side is within O(a/N) of a radial segment and stays at radius at least R_parent/2. Thus

    |(p_h-p_bar) dot t|
       <= C(a/N)(|p_-|+|p_+|).                              (4)

This does NOT bound the normal kink. In particular it is compatible with the independently established normal-curvature witness. Formula (4) is unaffected by unequal area weights because p_h-p_bar is one of w_-(p_+-p_-) or -w_+(p_+-p_-), with weight at most one.

Subtract any exact affine Darcy background c: replace W by W-c and p by p+c dot X. Pressure jumps, p_h-p_bar, and both sides' intrinsic tangential velocities b_0+p_h and a+p_h are unchanged. Therefore the right side of (4) may equally use |p_-+c|+|p_++c|, for ANY constant c.

## 3. Aggregate charging to actual quotient velocity energy

Suppose the two attachment half-interval lengths are comparable, so A_-/A_+ lies in a fixed compact interval. This includes the prescribed equal-half attachment triples. Then

    T |(p_h-p_bar) dot t|^2
      <= C(a/N)^2 [A_-|p_-+c|^2+A_+|p_++c|^2].               (5)

Choose disjoint designated attachment intervals along each straight long side; their pairs of main triangles have bounded overlap. The actual bubble bound grad p=-weighted_mean_b(W) in the mass problem gives

    sum_attachments T |(p_h-p_bar) dot t|^2
        <= C(a/N)^2 ||W-c||_(L2(parent fan))^2.              (6)

For the real-parameter actual strain problem, the finite current-annulus threshold from actual-tangential-slope-inheritance.md gives the same bound, because these parent triangles belong to that fixed annulus. No pressure gradient estimate on deep descendants is needed. Formula (6) is valid for either chosen child base half, so an upward/downward child orientation does not invalidate it.

One can sum (6) over disjoint current annuli, with a different constant background c per annulus. Multiplication by the parent scale R_parent^(-2s) and the variance/Slobodeckij estimate in the slope-inheritance note then charges the total weighted tangential half-slope error to

    C(a/N)^2 |W|_(H^s(root container))^2.                    (7)

Equation (7) uses the parent scales and parent triangle areas T. Converting it to a child-scale/child-fan-area norm introduces the ACTUAL area and scale ratios and must be done explicitly; they are not set to one.

Thus the pressure kink itself has a genuine small tangential factor a/N. The remaining terms in (2) are the weighted neighboring velocity defect d_b and the FULL exterior/strain reaction R, together with actual inherited boundary-state forcing in the global solve. Neither (6) nor the separate child interior slope-reset theorem bounds those terms. Their control is the remaining geometry-to-recursive-channel problem.


## 4. A mixed bubble correction cancels the exterior pressure exactly

There is a stronger actual choice of the nodal test that controls R's exterior part without any pressure-DtN norm. Keep psi_0=lambda_0-(14/27)b on the two PARENT fan triangles, but on EVERY other incident triangle use

    psi_0=lambda_0-(20/27)b.                                (8)

These pieces have the same continuous nodal-hat trace, since bubbles vanish on all edges. Thus they form one legitimate global MINI test. On an exterior cell the mean is exactly 1/3-(20/27)(9/20)=0. Its pressure pairing therefore vanishes for EVERY actual P1 pressure, including prescribed/inherited pressure and deep pressure. No exterior scalar equilibrium or pressure estimate is needed for that cancellation.

Let S_i be the exterior star of this selected attachment center i, and let E_i be (8), zero off that star. The actual mass row (1) now has precisely

    R_i=(W,E_i)=(W-c,E_i)                                  (9)

for ANY constant vector c. The second equality follows from zero cell means. The parent contribution of the affine-Darcy background also vanishes exactly: D+2O=1/10 cancels the parent pressure mean coefficient 1/10 when a=b=c and p=-c.

Reference-polynomial bounds give

    ||E_i||2^2 <= C |S_i|.

The ACTUAL attachment-center star condition G1 says |S_i|<=epsilon_Q T_i, where T_i is its parent two-triangle area. Hence

    |R_i|^2/T_i <= C epsilon_Q ||W-c||_(L2(S_i))^2.          (10)

This bound includes the whole immediate child boundary response; no child's interior source or inherited pressure has been dropped.

Selected centers are distinct global mesh vertices. Their exterior stars have overlap at most three, since a triangle has only three vertices. Consequently (10) can be summed over ANY collection of centers with a common background, without any depth factor.

## 5. Parentwise quotient and physical fractional charging

For a parent container v let B_v be its current annulus A_v together with the immediate child boundary cells that occur in its selected-center exterior stars. Those child boundary cells are fixed by the finite template and belong to the CHILD's current annulus: descendant replacements are strictly interior and do not touch them. Thus B_v is contained in C_v, has area at least c R_v^2, and has diameter at most C R_v. The family B_v has multiplicity at most two, apart from measure-zero interfaces: a point belongs to its own current annulus and possibly its immediate parent's added boundary cells. In particular the pair sets B_v x B_v also have multiplicity at most two.

Choose c_v=mean_(B_v) W. The exterior stars of selected centers in one parent have overlap at most three. Multiplying (10) by R_v^(-2s), summing within each parent and then over parents, and applying the exact variance argument gives

    sum_v R_v^(-2s) sum_(i in v) |R_i|^2/T_i
       <= C epsilon_Q sum_v R_v^(-2s)||W-c_v||_(L2(B_v))^2
       <= C epsilon_Q |W|_(H^s(root container))^2,            (11)

for 0<s<1. Constants are independent of N and depth under the explicit uniform G1/area/diameter hypotheses. No regularity theorem for perforated annuli is used.

## 6. Actual strain remainder above a fixed-template parameter front

For the actual normalized strain problem use the SAME mixed test. Exterior pressure still cancels exactly. The row remainder is now

    R_i=(W-c,E_i)+lambda^(-1)a(W-c,psi_i),                   (12)

where psi_i includes both parent triangles and exterior star, and the strain form on the right is restricted to that support. Constant strain is zero, so every c is allowed.

All supporting cells belong to the parent current template or the immediate child's fixed boundary template. After scaling by R_v they form a finite set, independent of the total descendant depth. Therefore finite-dimensional polynomial norm equivalence gives a finite D_N for which

    |a(W-c,psi_i)|
       <= nu D_N R_v^(-2) sqrt(T_i)
                            ||W-c||_(L2(support psi_i)).     (13)

This is a local inverse bound on an explicitly fixed finite list, not an inverse estimate using the global minimum mesh size. G1 bounds the test's exterior L2 norm by C sqrt(epsilon_Q T_i), and its parent L2 norm by C sqrt(T_i), as needed in (13). Increase the finite D_N to cover the fixed ratios of local polynomial inverse constants and areas.

If lambda R_v^2>=nu D_N/sqrt(epsilon_Q), equations (10)--(13) give

    |R_i|^2/T_i <= C epsilon_Q
                         ||W-c||_(L2(support psi_i))^2.     (14)

The parent two-triangle supports also have bounded overlap, so the weighted fractional estimate (11) holds for the actual real-parameter remainder over parents above this fixed-template front, with an adjusted constant. No estimate of the deeply refined velocity gradient or pressure gradient is used.

The remaining defect in (2) is now d_b, the weighted neighboring velocity difference, as well as the separate child interior slope reset. The kink and R terms have the explicit small actual energy bounds above. These estimates do not by themselves prevent d_b from absorbing an incoming tangential channel or prove that the selected child roots carry a fixed fraction of the response.


## 7. Changes of aligned tangent are quotient errors

On a source-free mass triangle K, let a be its root nodal velocity. The exact bubble identity p_K=-weighted_mean_(b_K) W and reference-polynomial nodal extraction give, for EVERY constant c,

    sqrt(|K|)|a+p_K| <= C ||W-c||_(L2(K)).                   (15)

Indeed a+p_K=(a-c)-weighted_mean_b(W-c), and both functionals have bounded reference-polynomial L2 norm, independent of triangle shape. Thus replacing a local tangent t by an aligned global tangent e with |t-e|<=C delta has squared error at most C delta²|K|^(-1)||W-c||K². It does not charge a large affine background. Summing area-weighted errors and applying the same annulus variance identity gives their physical fractional bound. At real lambda, the bubble identity's explicit strain remainder adds a fixed-current-template parameter-front error, as in the preceding notes. This handles orientation bookkeeping only; it does not supply the source normalization or actual pressure cross-entry.
