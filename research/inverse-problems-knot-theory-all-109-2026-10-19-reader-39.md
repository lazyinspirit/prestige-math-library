# Step 3a reader report — batch 39

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-39`)  
Manifest: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-39.pages.json`

## Opened pages and assigned items

Opened both assigned page carriers:

- `library/inverse-problems/analytic-double-fibration-and-bolker-visibility.md` (A)
- `library/inverse-problems/analytic-double-fibration-and-bolker-visibility-examples.md` (B)

Opened the 20 assigned items in dependency order, checking the current authored text, definitions, statements, facts, proofs, citations, contracts and diagrams:

- `def-ip-distributions-conormal-kernels-and-cotangent-relation`
- `lem-ip-analytic-cutoff-sequence`
- `lem-ip-holomorphic-morse-normalization-and-gaussian-contour`
- `def-ip-analytic-double-fibration-transform`
- `def-ip-analytic-wavefront-fbi-transform`
- `thm-ip-analytic-stationary-phase-with-exponential-remainder`
- `def-ip-bolker-condition`
- `lem-ip-double-fibration-conormal-kernel`
- `lem-ip-local-analytic-elliptic-packet-calculus`
- `lem-ip-analytic-nonstationary-incidence-localization`
- `lem-ip-analytic-cutoff-sequence-and-fbi-invariance`
- `lem-ip-bolker-geometric-criteria`
- `lem-ip-flat-one-sided-analytic-support`
- `lem-ip-local-bolker-positive-packet-estimate`
- `lem-ip-one-sided-analytic-support-continuation`
- `thm-ip-analytic-wavefront-recovery-under-bolker`
- `thm-ip-local-support-from-one-sided-vanishing`
- `ex-ip-analytic-missing-angle-covector`
- `ex-ip-conjugate-point-violates-bolker`
- `ex-ip-visible-conormal-under-bolker`

## Dependency context opened

Opened the relevant definition/statement clauses and proof portions needed from the direct dependencies, including:

- Distribution, support, density, cotangent, smooth-manifold, smooth-map, analytic-germ, power-series, test-function, and submersion-normal-form suppliers: `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, `def-distribution`, `def-support-of-a-distribution`, `def-density-bundle-and-smooth-density`, `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union`, `def-smooth-manifold`, `def-c-r-and-smooth-maps-between-smooth-manifolds`, `def-real-analytic-germ-in-several-variables`, `def-multivariable-power-series`, `def-ck-and-multi-index-notation-in-several-variables`, `def-support-and-compactly-supported-riemann-integral-in-rn`, `cor-local-normal-form-for-submersions`, and `lem-smooth-bump-between-concentric-euclidean-balls`.
- Distribution and calculus results: `def-tempered-distribution`, `thm-compactly-supported-distributions-are-tempered`, `lem-compactly-supported-distributions-extend-to-smooth-functions`, `thm-riemann-fubini-on-product-rectangles`, `thm-dominated-convergence`, `thm-stokes-theorem-for-smooth-singular-chains`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-nonnegative-improper-multiple-integral-by-exhaustion`, `thm-substitution-for-improper-integrals`, `thm-gaussian-integral`, and `thm-boundary-maximum-modulus-principle`.
- Analytic and matrix-calculus results: `thm-power-series-define-holomorphic-functions-in-several-variables`, `thm-holomorphic-inverse-function-theorem-several-variables`, `thm-identity-theorem-in-several-complex-variables`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-determinant-of-a-triangular-matrix`, `thm-determinant-multiplicative`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `cor-cauchy-inequalities`, `thm-euclidean-inverse-function-theorem`, and `thm-real-analytic-inverse-and-implicit-function-theorems`.
- Example suppliers: `def-ip-2d-radon-transform` (batch 36), `def-ip-visible-covector-for-limited-angle-data` (batch 37), `def-fourier-transform-on-an-lca-group`, `def-riemannian-metric-and-riemannian-manifold`, `ex-sphere-as-a-regular-level-set`, `def-geodesic-variation`, `def-jacobi-field`, `def-conjugate-points-along-a-geodesic-and-their-multiplicity`, `ex-great-circles-as-round-sphere-geodesics`, and `thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field`.

The two current-run draft suppliers outside this batch were opened directly: `def-ip-2d-radon-transform` (batch 36; observed SHA-256 `c2f05bc553f4791fe11d78997ed20a645ea5892be15d9bbc625088827368a337`) and `def-ip-visible-covector-for-limited-angle-data` (batch 37; observed SHA-256 `356c3dc5d43d64f42c20afbfdbd2a40fd7325dd539f012a50d8b2bbaa9eae82c`). Their definitions and the visible-covector TikZ diagram were consistent with the assigned examples; no out-of-scope defect was found.

## External source passages checked

- Mazzucchelli–Salo–Tzou, *A General Support Theorem for Analytic Double Fibration Transforms*: Definition 1.5 and Theorem 1.2 (printed p. 5); Lemma 2.4 and the Theorem 2.2 kernel proof (§2.2, printed pp. 13–15); the Bolker criteria (§3); the stationary-phase and packet-kernel arguments (§§5.1–5.6); Theorem 6.1 (§6.1, printed pp. 42–43). Theorem 1.2 gives the analytic-wavefront implication under the Bolker condition; Theorem 6.1 gives one-sided (C^2)-hypersurface continuation from either absent normal orientation.
- Sjöstrand, *Singularités analytiques microlocales*, Astérisque 95: Lemma 2.7 and Theorem 2.8 with their proofs (§2, printed pp. 15–18); the analytic pseudodifferential and Fourier-integral operator construction, composition, nonstandard phases and elliptic inverse (§4, printed pp. 23–32); real localization and packet transition (§5 and §6, printed pp. 33–38); and Theorems 8.2–8.3 and Lemma 8.4 (§8, printed pp. 52–55). These passages support the imported analytic Morse/stationary-phase, packet-invariance and flat one-sided-support results used here.
- Salo, *On Geometric Inverse Problems and Microlocal Analysis*, §2.1, printed pp. 4–7: line parameterization, Fourier-slice convention and full-angle backprojection. The cited `/lecturenotes/` PDF was downloaded after the web fetch timed out and the relevant pages were inspected.
- Krishnan–Quinto, *Microlocal Analysis in Tomography*, §1.5.1, printed pp. 34–35: visible Radon singularities have conormal directions normal to measured lines; the limited-angle discussion identifies the measured angular cone.
- Lee, *Riemannian Manifolds: An Introduction to Curvature*, Lemma 10.8 and the antipodal-sphere discussion, printed pp. 179–183: normal Jacobi fields on a constant-positive-curvature sphere vanish again at the antipode.

The Natterer ResearchGate PDF cited by the batch-36 Radon definition returned HTTP 403 and was not inspected. The source was not needed to verify the assigned examples: the current definition, the opened Salo notes, the opened limited-angle source and the local conormal computations supplied the relevant evidence.

## Repairs and evidence

1. In `items/def-ip-distributions-conormal-kernels-and-cotangent-relation.md`, repaired Proof 3.1. The old argument took a finite cover of `supp u` although the definition allows distributions with noncompact support. The revised argument fixes an arbitrary compactly supported test density, covers its compact support by finitely many chart balls, constructs a finite cutoff decomposition using the cited bump result, and applies the compact-support Euclidean extension results only to the resulting chartwise pieces. The definition and its interface are unchanged. Regenerated this item's proof-contract derivations and citations; there was no stale `verification.judge` record.
2. In `items/lem-ip-analytic-cutoff-sequence.md`, corrected the MST locator. Its §5.2 proof localizes with a fixed smooth cutoff; the article does not supply the claimed finite-order derivative-bound sequence (its introduction explicitly says its proof avoids special cutoffs). The sequence is proved directly by the item's compact convolution construction. The Sjöstrand locator now identifies the factorial Taylor-truncation remainder in Theorem 2.8 rather than attributing the smooth cutoff construction to that theorem.
3. In `items/lem-ip-analytic-cutoff-sequence-and-fbi-invariance.md`, corrected the MST locator to distinguish its Gaussian packet and fixed-cutoff conventions from the finite-order cutoff sequence supplied by the local dependency.
4. In `items/thm-ip-analytic-stationary-phase-with-exponential-remainder.md`, corrected the MST locator to the actual §5.4 stationary-phase proof and §5.5 packet-kernel representation/application.
5. In `items/lem-ip-local-bolker-positive-packet-estimate.md`, changed the skipped fact label `F7` to `F6` in Facts and its proof use. Regenerated this item's proof-contract derivations and citations; there was no stale `verification.judge` record.

No other assigned mathematical or citation defect remained after these edits. No assigned item statement or definition was changed, so the direct/indirect consumer duties triggered by changing an original statement/definition did not arise.

Diagram review: the three assigned examples' TikZ diagrams were checked against their conormal calculations and text. The missing-angle diagram excludes the indicated vertical covector direction from the two measured normal arcs; the conjugate-point diagram has the same data covector at the antipodes and the stated opposite object covectors; the full-Radon diagram shows a line perpendicular to its displayed normal and the visible covector parallel to it. No diagram repair or additional diagram was needed. The batch-37 visible-covector definition's schematic was also checked as dependency context and is consistent with its symmetric open-arc convention.

## Validation

- Reflow was run on all five changed item paths; all were already paragraph-aligned and remained unchanged.
- One-file precheck passed for each of the five changed items.
- Final proof-layout command covered all five changed paths: 5 items, 30 proof steps, 0 layout defects.
- No tests, gates, judgments or stamps were run.

## Page verdicts

| Page | Verdict |
|---|---|
| `analytic-double-fibration-and-bolker-visibility` (A) | Pass. Frontmatter-only `compact-v1` page; its 17 item IDs match the assigned A-page inventory. No summary body or metadata defect. |
| `analytic-double-fibration-and-bolker-visibility-examples` (B) | Pass. Frontmatter-only `compact-v1` page; the three examples appear in `examples`, with no page-body summary. Its prose is outside this reader's edit scope and needed no repair. |

## Uneditable defects and blockers

None found in the assigned pages, assigned items, or the opened direct dependencies. No blocker remains.

Coverage limit: this review checked all 20 assigned items, both assigned pages, and the direct dependency statements/definitions and source passages needed for the reviewed claims. It did not independently audit every transitive proof behind all already-published foundational dependencies or unrelated batches.
