# Batch 7 authoring notes — Certified geometric predicates

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: beta, batch 7  
Declared batch level: 0  
Dispatch scheduling input: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`

## Inventory and local dependency levels

The batch contains 15 A-page items and 3 B-page examples. The local item dependency checker recomputed every level from `deps`; no cycles or mismatches were found.

| Level | Items |
|---:|---|
| 0 | `def-certified-geometric-predicate-determinants` |
| 1 | `alg-interval-geometric-predicate-filter`, `alg-symbolic-geometric-determinant-tie-break`, `lem-dyadic-determinant-integer-clearance-preserves-sign`, `lem-leibniz-determinant-forward-error-bound`, `lem-two-and-three-by-three-nonsingular-dyadic-system-solvable` |
| 2 | `alg-exact-dyadic-determinant-sign`, `alg-floating-filter-for-geometric-determinants`, `lem-nondegenerate-dyadic-simplex-determines-unique-sphere`, `thm-interval-geometric-predicate-filter-sound` |
| 3 | `ex-uncertain-coordinate-interval-with-ambiguous-sign`, `lem-lifted-determinant-sign-matches-sphere-side`, `thm-floating-filter-sign-is-exact` |
| 4 | `alg-certified-dyadic-geometric-predicate`, `thm-symbolic-geometric-determinant-tie-break-consistent` |
| 5 | `thm-certified-dyadic-geometric-predicate-sound-and-terminates` |
| 6 | `ex-nearly-collinear-triangle-certified-orientation`, `ex-nearly-cocircular-sites-certified-incircle` |

Direct item suppliers outside this batch are the published items `def-dyadic-floating-point-format-and-directed-rounding`, `def-intervals-rectangles-and-complex-balls`, `def-complete-ordered-real-field`, `def-standard-relative-floating-point-model-and-unit-roundoff`, `def-abs-value`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `lem-directed-dyadic-rounding-enclosure-and-error`, `lem-nonnegative-square-root-exists-and-unique`, `def-outward-rounded-interval-and-ball-operations`, and `thm-outward-rounded-operations-are-isotone-and-dag-sound`. The A page also requires the published page `outward-rounded-interval-and-ball-arithmetic`. The cross-batch evidence records every direct consumer/supplier edge and the page prerequisite.

The transitive supplier closure additionally includes `alg-dyadic-square-root-bisection`, `thm-dyadic-square-root-bisection-encloses`, `lem-real-and-complex-modulus-rules`, `def-field`, `def-ordered-field`, `lem-of-add-order`, `lem-of-inverse-unique`, `lem-of-mult-neg`, `lem-of-sign-rules`, and `lem-of-zero-mult`. Their actual definitions/statements and proofs were inspected. The newly added local 2-by-2/3-by-3 solver proves the needed finite linear-system interface by explicit inverse formulas, so no matrix-invertibility theorem with a larger unrelated dependency closure is imported. The sphere-existence item then uses that solver and the published nonnegative square-root lemma. The arithmetic arguments use the complete ordered real field and the displayed operationwise model. No axiom of choice is used: loops are finite, the SOS predicate family is finite, and its empty-family case is explicit.

The proof chain keeps exact dyadic coordinates exact, clears positive row denominators for integer fallback, proves the fixed Leibniz forward bound, and permits a filter sign only when its outward error interval excludes zero. Unsafe or inconclusive floating work falls through to the exact finite integer sum. Interval inputs are never replaced by midpoints; a box that does not certify one uniform sign returns `indeterminate`. Ordinary predicates retain exact zero. The caller-declared SOS mode has one shared point-index perturbation and does not choose or evaluate a numeric epsilon.

## Plan/design reconciliation

The assigned task and current `research/plan-spec.json` both give the A page only the page-level requirement `outward-rounded-interval-and-ball-arithmetic`. The GEO-PRED prose design in `research/plan-numerical-linear-track.md` (especially its prerequisite-interface and proof-construction text around lines 812–823) still labels VAL-INTERVAL and NA-02 as proposed same-frontier suppliers, lists `matrix-norms-condition-numbers-and-numerical-stability` and `determinants-of-matrices-over-a-commutative-ring` as page context, and says no external canonical item is a proof premise. That description conflicts with the current assignment and the actual proof chain: the outward-rounded page and its interval/DAG suppliers are published and are direct mathematical inputs to the interval and floating filters. The authorship also uses published field, dyadic-format, modulus, and directed-rounding suppliers listed in the item `deps`; page-level placement does not replace these exact item interfaces. The current target page’s `plan-spec` requirement is outward arithmetic alone. This batch does not use the matrix-norm or determinant page claims as proof premises and does not use NA-02 TwoSum/FMA transforms; the exact integer fallback supplies the required finite exact branch. No shared plan or engine file was changed.

The older `linear-audit.md` GEO-PRED contract specifies each coordinate as affine in epsilon and bounds the determinant polynomial by its matrix dimension, but it does not supply coefficients that prove shared noncancellation for the lifted quadratic determinant. The authored SOS procedure instead perturbs coordinate slot `k` by the formal term `epsilon^(3^k)`. Its theorem proves coordinate degree at most two for each lifted determinant, injectivity of the base-three exponent encoding, nonvanishing, small-positive-epsilon sign realization, preservation of original nonzero signs, a common epsilon for a finite predicate family, and the empty-family case. This fills the coefficient gap without narrowing the declared orientation/incircle/insphere scope or turning a formal tie-break into an arbitrary numeric epsilon.

Authoring also made explicit an implicit geometric prerequisite: a nonzero orientation determinant must supply the unique sphere used by the inside/on/outside interpretation. The new local solver item proves the required 2-by-2 and 3-by-3 dyadic cases with displayed inverse formulas; the following sphere item constructs the center/radius and proves uniqueness before the lifted-side formula uses them.

The current plan-spec records no item IDs for this target because the frontier scaffold inventory is being authored. The batch manifest now carries the 15/3 inventory and direct `deps`, with the page `requires` values preserved from the assignment.

## Sources and retrieval history

The coverage ledger records all harvested results, exact locators, dispositions, searches, and retrieval history. Four full-text sources were inspected, including the textbook treatment:

- Shewchuk, *Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates*, §§4.2–4.4, printed pp. 36–45 (full 59-page PDF inspected).
- de Berg et al., *Computational Geometry: Algorithms and Applications*, 2nd ed., §1.2, “Degeneracies and Robustness” (complete section inspected).
- CGAL Developer Manual, Chapter 11, §11.1 and its recommendations (complete official HTML chapter inspected).
- Edelsbrunner–Mücke, *Simulation of Simplicity*, §§2–3.2, including Lemmas 3.2–3.3 (complete relevant sections inspected).

Retrieval recovery: the older CGAL Developers Manual PDF candidate returned HTTP 403; search located the official full HTML chapter. The UCDavis Simulation of Simplicity PDF mirror was retrievable but had no usable text layer; search located the full arXiv PDF. These failed candidates were not selected or dropped from the source ledger. No source-resolution `dropped` or `owner-escalation` record was appropriate because each selected source was recovered. `source-fetch-check --stamp` verified all four selected full-text URLs (4/4).

The coverage checklist found 11 harvested source results, all disposed, with no errors or warnings. Its source records bind the Shewchuk paper to the determinant/filter chain, the textbook to degeneracies and tie handling, CGAL to exact predicates and enclosure filters, and Simulation of Simplicity to the shared symbolic perturbation. The proof contract separately stores exact supplier excerpts for all 48 labelled fact-to-source citations.

## Final checks and readiness

- `precheck.mts`: 18 files; 12 proof-bearing items checked; 0 failures. The other 6 have no phase proof and are correctly not applicable.
- `proof-layout.mjs` on the 18 changed items: 46 numbered steps; 0 defects.
- `rendercheck.mjs` on the 18 items and 2 pages: 20 files; 0 errors or warnings. Two initial source-format defects were corrected before the final pass: the error-bound display formula is now one source line, and the interval-filter definition has balanced math delimiters.
- `proof-contract.mjs --strict`: all 18 scoped items checked; 55 exact citations and 46 derivations; 0 errors or warnings. Boundary cases, including zero, nondegenerate sphere existence, and empty SOS families, have explicit dispositions.
- `coverage-checklist.mjs --require-destination`: one A page, 13 harvested results; 0 errors or warnings.
- `source-fetch-check.mjs` check mode: 4/4 sources fetch-verified; 0 drops.
- Focused `depcheck`: 18 assigned items and both pages; 0 errors or warnings; dependency closure 39 items and 75 pages.
- Scoped `item-dependency-levels` recomputation: all 18 labels match their computed levels; no local cycles.
- `step1-decisions.mjs`: each of the 18 assigned items has a hash-bound `ready` record with its direct `deps` and `justified_by` IDs listed. A focused verification reports 18/18 ready. These are author readiness records, not independent approval.

The run-wide item dependency check remains red because other assigned pages have empty scaffold inventories and unrelated labels disagree with their computed levels: `alg-incremental-planar-delaunay-edge-flips` (4 vs 5), `alg-incremental-three-dimensional-regular-cavity-repair` (4 vs 5), `alg-randomized-history-dag-point-location` (5 vs 6), `thm-incremental-planar-delaunay-correctness-and-termination` (5 vs 6), `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination` (5 vs 6), `thm-randomized-history-dag-expected-location-cost` (6 vs 7), `thm-three-dimensional-delaunay-output-size-quadratic` (6 vs 7), `ex-cocircular-four-site-lexicographic-tie` (6 vs 7), `ex-collinear-sites-lower-dimensional-output` (6 vs 7), and `ex-scattered-linear-interpolation-over-delaunay-cell` (6 vs 7). The batch dependency-level recomputation cannot reach a comparison because `items/lem-ewald-gaussian-poisson-periodization.md` has an invalid YAML escape in its locator at line 20 (`$2\pi$` inside a double-quoted scalar). That item belongs to batch 12 and was not edited. These run-wide blockers do not involve batch 7’s local graph; the owner must resolve them before run-level dependency recertification.

The run-wide Step 1 report is not closed: 18/18 batch-7 readiness records are current, while the other frontier items/pages remain open. No verdict, published content, plan, or autopilot state was changed.
