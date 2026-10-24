# Numerical Differential Equations and Stochastic Dynamics rendering audit — lane 05

Reviewed all 67 assigned items and all 96 receipt-listed screenshot tiles. For every item, I checked the frozen title and complete ItemBody against its rendered HTML and individual original-resolution screenshot tiles, including internal reference titles, formulas, and any diagram content. Every tile was opened individually with tools.view_image(detail="original"); no collage or downscaled view was used.

All current source hashes match assignment-05.json; every frozen snapshot is byte-identical to its current source; all HTML hashes match the assignment; and all tile hashes match their screenshot receipts. No valid TikZ diagram or diagram failure was recorded in this lane. No confirmed clipping remained after checking the standalone tiles and the surrounding overlap/context.

## Confirmed rendering findings

1. **lem-rosenbrock-stage-residual-certificate** — Facts & Assumptions, source line 50. The linked F2 title appears as plain text with raw ASCII mathematical notation (including |delta_i| <= u, prod(1+delta_i), and gamma_d) rather than typeset notation. The item’s own nearby formulas render correctly; this is a linked-title typography issue (the referenced item’s title is source line 4 of items/lem-product-of-one-plus-deltas-gives-theta-n.md), not a defect in the estimate. Screenshot: screenshots/lem-rosenbrock-stage-residual-certificate--01.png (SHA-256 ac305d3c81d1991dc43597ddb7c5445ee272dd57dc8c1a5a1d6a3a6928a4d44b). Suggested repair: use a prose title or renderer-supported title math, then check it against the cited result.

## Optional diagram candidates

These are uncertain editorial opportunities. No diagram is needed to establish any proof or algorithm.

- **alg-age-structured-renewal-upwind-finite-volume**, source lines 33–43. Show cells C_j=[a_{j-1},a_j], left birth inflow F_0^k=B_h^k, rightward cell fluxes F_j^k=u_j^k, and absorbing terminal outflow F_J^k to O_h^{k+1}. Check the update sign -Δt(F_j^k-F_{j-1}^k) and do not draw inflow from above cutoff A. Screenshot: alg-age-structured-renewal-upwind-finite-volume--01.png.
- **thm-age-structured-renewal-finite-cutoff-characteristic-solution**, source lines 36–54. In the (t,a) plane show characteristics da/dt=1, initial cohort and newborn branches split by a=t, boundary birth rate B_A(t), cutoff a=A, survival factors, and initial-cohort exit interval [A-t,A). Preserve that newborns cannot reach A while T<A. Screenshots: tile 01 and tile 02.
- **ex-constrained-pendulum-equations-and-multiplier**, source lines 37–39. Draw the constraint circle ||q||=ℓ, rod vector q, tangent momentum qᵀp=0, gravity -mg e_2, and constraint force -λq. At q=(0,-ℓ), show λ=mg/ℓ balancing gravity and zero acceleration. Screenshot: ex-constrained-pendulum-equations-and-multiplier--01.png.
- **alg-periodic-orbit-pseudoarclength-continuation**, source lines 34, 36, 40, and 48. In the zero set F(x,T,μ)=0, draw a certified root, tangent τ∈ker DF for the predictor, and section τ_kᵀ(y-z_p)=0 with the previous unit orientation as normal. Check predictor direction and distinguish the current tangent from the previous section normal. Screenshots: tile 01 and tile 02.
- **lem-positive-convex-polygon-winding-index**, source lines 33, 45, and 53–55. Draw a counterclockwise convex polygon, interior point with winding number 1, exterior point with winding number 0, and at one positively oriented edge mark interior-left and exterior-right with n_left−n_right=1. Check the edge direction and left-minus-right sign. Screenshots: tile 01 and tile 02.

## Existing diagram checks and coverage

There are no existing rendered TikZ diagrams in the assigned lane, so no existing diagram maps, labels, orientations, indices, signs, or crossings required checking. The JSON report records the exact source, snapshot, HTML, and per-tile SHA-256 values for all assigned items, as well as individual original-resolution viewing attestations, capture diagnostics, section coverage, findings, and candidate evidence.

This was a local frozen-snapshot review only. No live website, network, build, test, renderer, item, or publication status was touched.
