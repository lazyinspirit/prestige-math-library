# Focused complex supplier repair

**Status:** source repair prepared; root review and native metadata/receipts remain. Nine claimed source carriers changed, no other source or control files.

Before editing, all nine source bytes matched their root-owned archives in `research/numerical-analysis-comprehensive-2026-10-16-owner-prerequisite-before/`, each had exactly one native `owner-complex-suppliers` claim, and scoped Git diff was empty. No hashes or validators were run.

## Exact changes

| Carrier | Change | Original Statement |
|---|---|---|
| `cor-global-cauchy-theorem-homology` | Replace complex-plane remark by published coordinate isometry/topology theorem in deps and Given. | Byte-identical |
| `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace` | Replace complex-plane remark by published coordinate isometry/topology theorem in deps and Given. | Byte-identical |
| `lem-contour-subdivision-into-discs-missing-a-point` | Replace complex-plane remark by published coordinate isometry/topology theorem in deps and Given. | Byte-identical |
| `lem-dixon-entire-gluing` | Replace complex-plane remark by published coordinate isometry/topology theorem in deps and Given. | Byte-identical |
| `lem-holomorphic-difference-quotient-is-jointly-continuous` | Replace dictionary by typed one-factor isometry; derive product squared-distance identity and projection continuity locally. | Byte-identical |
| `lem-holomorphic-difference-quotient-segment-formula` | Replace convex/star-shaped dictionary by typed convex definition plus affine-segment transport; explicitly calculate segment velocity and real-linear constant multiplication under the componentwise integral. | Byte-identical |
| `thm-contour-parameter-integrals-are-holomorphic` | Remove both remark suppliers; derive product isometry/compactness locally, shrink open ball before taking closed disc, and state the exact local-uniform convention from repaired Weierstrass. | Byte-identical |
| `thm-liouville-bounded-entire-function` | Replace complex-plane remark by published coordinate isometry/topology theorem in deps and Given. | Byte-identical |
| `thm-weierstrass-convergence-holomorphic-functions` | Remove Statement remark citation; define local uniformity explicitly and prove both local/compact directions via intrinsic compactness, all qualifying neighbourhoods, least natural thresholds and closed local discs. Prove boundary finite-union compactness locally; use half-epsilon in Cauchy derivative estimate. | Remark-reference clarification only; mathematical hypotheses/conclusions equivalent |

The coordinate differentiability theorem was read but not misapplied: it is a theorem for real total derivatives of maps on open complex sets, whereas these repairs only need metric/topological/affine transport and a direct derivative of a real-parameter affine path. No new item or page is needed. All original formulas and theorem strengths are retained.

## Consumer dispositions

The changed Weierstrass source has **26** actual direct users, counted identically by declared deps and body links; my initial message reporting 28 was a counting error. All 26 cited facts and their actual applications were inspected. Uses include holomorphic limits and derivatives, compact-majorant series/products, Euclidean convergence after chordal-chart conversion, one-dimensional slices, and cofinal sequences of lattice sums/products. Each receives an individual compatible disposition in `consumer-dispositions.json`.

The same old/current-context navigation reaches **1,016 descendants**. All have individual supplier-first unchanged-interface dispositions; the **990 indirect descendants were checked by contract composition, not by reading every proof body**. No consumer loses an assumption, conclusion or interpretation, and no foreign consumer was edited. The old graph is the same current-context snapshot with the nine owned archived carriers substituted, not a claimed historical snapshot of unrelated concurrent work. The changed theorem has no aliases or definition-discharge targets.

Eight original Statements are byte-identical. Weierstrass removes only the remark reference; its formulas/hypotheses/conclusions remain mathematically equivalent. The explicit definition does not assume continuity of the limit, but local uniform convergence of the holomorphic approximants proves that redundant property before Morera. Its proof supplies both directions of the same local/compact equivalence the old dictionary intended.

## Evidence and limits

- `repair-report.json`: exact per-carrier added/removed logical suppliers and archive paths.
- `consumer-navigation.json`: original Statement comparison and read-only dependency navigation.
- `direct-consumer-use-context.md`: actual direct Statements/facts/application excerpts inspected.
- `consumer-dispositions.json`: 26 individually read direct uses and all 1,016 propagated compatibility dispositions.

No hashing, recertification, formatter/proof-layout run, validator, test, gate, commit or engine control was performed. Existing audit metadata was left for root reconciliation. This focused repair is not independent proof acceptance, a whole-corpus audit, or a claim of new external source reading. Root owns exact parser/closure checking, independent focused review, proof-layout, published-repair evidence and native integration.
