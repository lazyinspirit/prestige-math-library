# Seven-node base kink and neutral unequal-velocity lifts

Research proof, 2026-10-18. This completes local residual lifts for the actual seven-node child embedding. It does not estimate the size of the inherited kink or all three inherited velocity errors; those must come from the actual parent rows. No constrained base reaction is set to zero, and no ancestor star area is included in a child-side lift bound.

## 1. Exact decomposition of the three base pressures

In child coordinates let the container be [-4r,4r]x[0,4r], with base vertices c_-=(-4r,0), o=(0,0), c_+=(4r,0). The other four boundary vertices are the two side-strip nodes and the two top corners. Let p_-,p_0,p_+ be the actual continuous P1 base values. Define

    s=(p_+-p_-)/(8r),
    k=(p_++p_--2p_0)/(8r).

On the two entire unrefined base edges the exact trace is

    p_base(x)=p_0+s x+k|x|.                               (1)

The constant p_0 is the gauge and s is the mean tangential slope. Neither determines the incoming normal macro component. The remaining pressure kink has endpoint amplitude 4r|k|. Its size is not inferred from the center velocity or from normal continuity alone.

For the common-annulus base trace, (1) continues to the required O(r) interval if the two parent affine pieces have no other breakpoint there. This is the separated-attachment geometry requirement. It must be checked; if additional breakpoints occur, their actual traces are additional data rather than being suppressed by the three-node formula.

## 2. A cheap kink lift preserving the seven-node boundary

The literal function |x| would put a new node at the middle of the top boundary. Instead use the tilted crease

    F(x,y)=|x-y|.                                         (2)

Its base trace is |x|. Its sole crease inside the box is the segment from the EXISTING root to the EXISTING top-right corner. On the other boundary edges it is affine:

    left side: 4r+y,
    right side: 4r-y,
    top: 4r-x.

Thus (2) requires no eighth boundary node and no subdivision of an original seven-node boundary edge. Side-strip nodes simply carry the values of these affine traces. The other four pressure ports need not be zero: they are free interface variables in the glued comparison, and all induced internal loads are retained. Requiring them to be zero would be an unnecessary extra condition leading to the logarithmic corner-hat cost.

The actual protected cones must lie on fixed sides of this crease. In the current convention, the right protected fan and its reserve holes lie in 0<y<x/3, while the mirrored left ones lie at x<0,y>0 with their corresponding near-horizontal aperture. Hence x-y is positive throughout the former and negative throughout the latter. The crease misses all protected fan interiors and all recursive holes. More invariantly, choose one of the existing top-corner rays from the root that avoids both protected cones; use the corresponding affine linear form that equals x on the base. This is the only macrozone condition used.

Make that ray conforming by a finite intersection refinement outside the protected holes, if it is not already a macro edge. Intersections are interior to original boundary edges except at its two existing endpoints. Old P1 pressure lifts remain P1 under this refinement. The protected fans are untouched, so their actual sharp root-star lower bounds persist; refinement elsewhere cannot increase a vertex's original star area. Because F is affine on each whole recursive hole, every deeper copy is exact P1 there without further crease refinements. Once the template parameters are fixed there are finitely many new triangle shapes and the recursion-depth shape bound remains fixed.

Extend kF through the child/coarse transition and turn it off only on the COMMON uniform annulus of radii comparable to r. Its crease is aligned with the southwest-to-northeast uniform diagonal in these local coordinates. Nodal interpolation of the cutoff product on that annulus has gradient bounded by C|k|: F=O(r), its gradient is bounded, and the cutoff derivative is O(1/r). Inside the child/transition no cutoff or interpolation is needed. Consequently the actual pressure lift Phi satisfies

    Phi|base=k|x|,
    ||grad Phi||_2<=C r|k|,
    ||Phi||_2<=C r^2|k|.                                 (3)

The constants are independent of recursion depth, aperture, side-strip height, and coarse-element angles. The estimate is obtained from the explicit affine gradients, not an inverse inequality. A transition not yet conformed to the crease must be refined as above; that is an explicit geometric requirement, not an assumed estimate on its old mesh.

## 3. Actual neutral lift for unequal base velocities

Let g_i at i in {-,0,+} be the actual base nodal velocities and let g_bar be the chosen driver velocity. Write delta g_i=g_i-g_bar. On the actual LOCAL child-plus-ring mesh, define the continuous P1 vector l by these three base nodal values and zero at every other vertex. No ancestor-side elements below the local base are part of this construction. Let

    S_i=sum_(K incident to i in this local domain)|K|.

Reference mass integration, which is independent of triangle angles, gives

    ||l||_2^2<=C sum_i S_i |delta g_i|^2.                  (4)

Normalize each actual MINI bubble beta_K to have cell mean one. Define

    Eg=l-sum_K beta_K m_K(l).                              (5)

Its trace is exactly the required P1 boundary velocity trace, since bubbles vanish on every facet. Every cell mean is zero. Thus

    b(Eg,q_h)=0 for EVERY actual continuous P1 pressure,

including pressure extensions of the constrained base hats. Moreover, with gamma_2=m_K(beta_K^2)=10/7,

    ||Eg||_2^2=||l||_2^2
                     +(gamma_2-2)sum_K |K||m_K(l)|^2
               <=||l||_2^2.                              (6)

This is an exact L2 neutral lift; it claims no H1 stability. In particular

    ||Eg||_2<=C [sum_i S_i|delta g_i|^2]^(1/2)
                    <=C r max_i|delta g_i|                (7)

when the local stars lie in a child-scale neighborhood. Retain the individual S_i when sharper star sums are available. A small center error does not imply small errors at both endpoints, and no weighted parent estimate is converted to (7) without checking all three actual indices and their weights.

If the comparison needs unequal prescribed velocities on additional uniform BASE nodes of the common annulus, use the SAME construction with those actual values included in the nodal sum. Since sum_i S_i over a child-scale supported nodal set is at most C r^2, its mass cost is at most C r times the maximum actual boundary error. In the intended two-affine-piece parent trace, with no further breakpoint on the collar, linear continuation from the three base values bounds these additional errors by a fixed multiple of their three-node maximum. Otherwise keep their individual values and weights. Thus the lift does not silently replace the whole common-annulus base trace by only its center value.

## 4. Passive correction and exact scale

Subtract Eg and Phi to homogenize the actual residual base data. Their exact mixed loads are retained. The velocity lift is neutral even for base pressure extensions; the pressure lift contributes the velocity load -(grad Phi,z). Therefore their total mass forcing norm is bounded by

    L_base=C{[sum_i S_i|delta g_i|^2]^(1/2)+r|k|}.         (8)

The owner's passive-child mixed mass estimate bounds the AUXILIARY homogeneous-base solution (w_aux,p_aux) with forcing -(Eg,z)-(grad Phi,z). The PHYSICAL error pair is

    (w_aux+Eg, p_aux+Phi).                                (8a)

Its momentum equation is sourcefree by exact cancellation of those two lifted forces, and its weak equation is sourcefree because b(Eg,q)=0. Its base traces are the actual unequal velocity and pressure kink. The restored pair, not the forced auxiliary pair, is the actual child DtN response used in aggregation. Its velocity mass plus pressure-gradient norm is at most C L_base by the triangle inequality and the same passive bound, independently of child depth. Its constrained base reactions, including the restored lift contributions, remain outputs to be added in the parent assembly.

If the actual child's root star has the verified lower area c a r^2, the standard local mass lower bound gives

    |delta v(o)|<=C L_base/(r sqrt(a)).                    (9)

Thus a crude amplitude bound e_g for all three velocity errors yields root error C(e_g+|k|)/sqrt(a). The weighted version (8)--(9) is stronger and should be used if the three local star areas are O(a r^2). No such star estimate is inferred here from a center-only calculation.

Combining the uniform distant-driver field remainder with this base lift adds its already-proved child-scale cost to (8). This supplies the local perturbation inputs required by the exact two-driver embedding, while retaining the independently extracted incoming normal macro field and every weak pressure moment.

## 5. Charging the actual tangential pressure kink

The fully read supplier [actual-tangential-parent-half-slope-row.md](../N-ROOT-mini-fractional-projection-cycle4/actual-tangential-parent-half-slope-row.md), Sections 2--3, applies directly to (1). If p_-,p_+ now denote the two parent CELL pressure gradients and t the straight child-base tangent, then

    k=(p_+-p_-) dot t /2.

With comparable attachment halves and parent two-triangle area T_i, the supplied exact continuity identity gives

    sum_i T_i |k_i|^2
       <=C(a_parent/N)^2 ||W-c||_L2(parent fan)^2.         (10)

The fixed constant background c is arbitrary. Every inherited scalar kink is tangential in this formula; no normal pressure-gradient jump is declared small.

The squared pressure-lift costs are r_i^2|k_i|^2. Therefore the exact geometric conversion is

    sum_i r_i^2|k_i|^2
      <=C max_i(r_i^2/T_i)(a_parent/N)^2
                                      ||W-c||_L2^2.      (11)

For a straight parent side at root distance d_i, a base of length 8r_i has T_i=4d_i r_i. Thus r_i^2/T_i=r_i/(4d_i), not one. In the separated design r_i comparable to sigma b_0 d_i, (11) has the additional factor C sigma b_0. This is the actual quantitative input for the kink part of (8); it does not need a logarithmic pressure-extension loss.

For velocity errors the fully read [full-outer-fan-weighted-inverse.md](../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-smooth-counterexample-fresh/full-outer-fan-weighted-inverse.md) retains all parent outer rows and gives its stated weighted component error D. To insert it into (8), retain the actual ratio S_i/A_i for EVERY selected child center AND endpoint and the actual multiplicity with which an endpoint belongs to selected bases. A center-only estimate cannot supply that triple bound. Nor can a bound on the tangent component be silently applied to the entire vector error; any other component required by the two-driver state must be included with its own actual row/energy control. This note establishes the lift interface, not that missing inheritance estimate.

## Remaining use obligation

The parent-row estimates must still bound the actual k and ALL three delta g_i with the correct selected-root/endpoint counts and parent-to-child star ratios. This note proves the lifts and their propagation cost, not those inherited-data bounds or the final recurrent/nonextinction estimate. It does not certify the original instantaneous pressure claim.

No canonical, runtime, manifest, gate, test or commit operation was performed.
