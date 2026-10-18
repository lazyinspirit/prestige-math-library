# Scope 13 Fresnel proof repair

Run: `numerical-analysis-remaining-71-2026-10-17`.
Scope: focused owner-delegated repair of the local finding in the actual full `research/numerical-analysis-remaining-71-2026-10-17-scope-review/batch-13/review-0.json`. This report supplies no native review, acceptance, certification, or gate coverage.

The complete pre-edit carrier was archived before editing at `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/scope13-fresnel-before.md`.

## Confirmed defect and correction

Step 4.1 correctly differentiates `exp(-εu²)/u`, producing `-2ε exp(-εu²) - exp(-εu²)/u²`. Its next sentence previously evaluated the different integral containing an extra factor `u`, without comparing the required integral to that integral. The missing comparison matters for arbitrary positive R and for the claimed inverse-R tail bound.

Exactly one sentence in step 4.1 was replaced. For ε>0 and u≥R>0, the corrected comparison is

$$\int_R^\infty 2\varepsilon e^{-\varepsilon u^2}\,du\le\frac1R\int_R^\infty2\varepsilon u e^{-\varepsilon u^2}\,du=\frac{e^{-\varepsilon R^2}}R\le\frac1R.$$

The finite-interval identity follows from the exponential derivative and FTC; its infinite endpoint limit follows from the stated exponential limit supplier. For ε=0 the term vanishes. Together with the existing boundary bound `2/(λR)` and the other derivative bound `1/(λR)`, this gives the unchanged total `4/(λR)`, uniformly in ε≥0. Applying the estimate with arbitrary larger lower endpoints proves the Cauchy condition for each undamped one-sided improper tail. Reflection handles the negative tail. Uniform convergence on compact intervals plus these uniform tail bounds then justifies the existing Abel-limit passage.

## Independent local reading

Read the full Fresnel carrier, the actual reviewer report, the full immediate consumer `lem-na-quadratic-phase-stationary-expansion`, and the actual declared supplier statements/definitions. Read the complex-phase derivative proof and the integration-by-parts/FTC supplier arguments pertinent to the repair. This was a use check, not an audit of every supplier proof.

The preceding local argument was checked: the Gaussian majorant ensures absolute convergence; real-component Fubini on squares gives the square identity; the polar map is injective with positive Jacobian on the stated enlarged half-annulus rectangles; compact Jordan boundaries and content-zero overlaps justify recombination; Gaussian strip tails compare squares and discs; and continuity plus the explicit positive-real-part square root fixes the sign on the right half-plane. The repaired last step uses C1 functions on compact intervals away from zero, satisfying the actual integration-by-parts hypotheses. No additional local mathematical defect was identified in this focused reading.

## Invariants and consumers

The Statement, Facts & Assumptions, metadata, dependencies, dependency level, provenance, all other proof text, and every stated claim were preserved verbatim. In particular, the result remains the full complex Gaussian identity on Re α>0 and the ordinary two-sided Fresnel identity for every λ>0 and both signs. No assumption was narrowed and no prerequisite was added or removed.

The actual direct mathematical consumer is `items/lem-na-quadratic-phase-stationary-expansion.md`. Its F1 and steps 2.1/3.1 consume the ordinary whole-line Fresnel value under λ≥1 and σ∈{-1,1}; those are within the unchanged supplier hypotheses. The proof-only correction changes no supplied conclusion and requires no consumer edit. Its subsequent stationary-phase theorem consumer uses the unchanged quadratic expansion, so this correction creates no downstream interface change. The oscillatory quadrature library page lists the item; that placement also needs no edit. No consumer source was changed.

## Actual check and limits

After the final item edit, ran exactly:

`node tools/proof-layout.mjs items/lem-na-fresnel-integral.md`

Exit code 0; output: `proof-layout: 1 items, 5 steps, 0 defects`.

No other validator, gate, or test was run. No metadata/hash/contract/readiness/native-control record was edited; those remain with the root owner. The separate legacy planning prerequisite conflict is outside this proof-only repair and remains assigned to the root owner. No commit, publish, push, native report alteration, or acceptance claim was made.
