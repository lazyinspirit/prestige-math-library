# Step 3a reader report — batch 22

## Scope and opened inventory

Reviewed both assigned pages and all 24 manifest-listed items, in dependency order. Also opened the 11 published items in the assigned items' direct dependency closure that were needed to check the proofs:

- Pages: `ml02-dimension-reduction`, `ml02-dimension-reduction-examples`.
- Assigned definitions, algorithms, and results: `def-finite-centering-matrix`, `alg-deterministic-neighbor-selection`, `lem-equal-gram-configurations-are-isometric`, `lem-ky-fan-trace-maximization`, `thm-finite-centering-matrix-is-orthogonal-projector`, `def-rank-q-principal-component-analysis`, `thm-pca-frobenius-optimality`, `alg-kernel-principal-component-analysis`, `thm-centered-psd-kernel-gram-matrix-is-psd`, `alg-classical-multidimensional-scaling`, `thm-classical-mds-recovers-euclidean-distances`, `alg-isomap`, `def-lle-local-reconstruction-weights`, `thm-minimum-norm-lle-weights-exist-uniquely`, `alg-locally-linear-embedding`, `thm-lle-trace-minimizers`, `def-metric-stress-mds`.
- Assigned examples: `ex-rank-q-pca-exact-reconstruction`, `ex-non-euclidean-dissimilarity-has-negative-mds-eigenvalue`, `ex-disconnected-knn-graph-blocks-isomap-distances`, `ex-singular-local-lle-covariance`, `ex-connected-lle-graph-need-not-have-simple-zero`, `ex-square-loop-mds-isomap-lle-differ`, `ex-metric-stress-objective-nonconvex`.
- Published dependencies: `prop-standard-coordinate-inner-products`, `def-trace-of-a-square-matrix`, `def-frobenius-matrix-norm`, `thm-trace-of-ab-equals-trace-of-ba`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-finite-dimensional-orthogonal-decomposition`, `thm-least-squares-solutions-and-normal-equation`, `thm-singular-value-decomposition`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`.

The current batch cross-batch dependency inventory was empty. The named published suppliers were treated as established premises; their own dependency proofs were not recursively re-audited.

## Review and repairs

- `thm-classical-mds-recovers-euclidean-distances`: added the one-line eigenvector calculation showing that positive semidefiniteness forces each eigenvalue to be nonnegative before the positive-eigenvalue decomposition is used. Updated its proof-contract derivation. No `verification.judge` record was present.
- `thm-lle-trace-minimizers`: cited the real spectral theorem for the restriction to the zero-sum subspace and explicitly deduced positivity of each restricted eigenvalue from positive definiteness. Updated the proof-contract citation and derivation. No `verification.judge` record was present.
- Item checks: reflow reported unchanged for both repaired items; precheck passed for both. One combined `node tools/proof-layout.mjs` run on the two changed item paths reported 2 items, 9 steps, 0 defects.
- The two TikZ graph diagrams in `ex-disconnected-knn-graph-blocks-isomap-distances` and `ex-connected-lle-graph-need-not-have-simple-zero` match the stated vertices, union edges, labels, and conventions. The square graph diagram in `ex-square-loop-mds-isomap-lle-differ` also matches the stated sample-index tie rule and selected edges.

## Uneditable findings

- `def-frobenius-matrix-norm` (published dependency for `def-rank-q-principal-component-analysis`): the complete `## Definition` section contains inline wikilinks, including the links to `def-abs-value`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `prop-standard-coordinate-inner-products`, `lem-complex-conjugation-and-modulus-laws`, `def-inner-product-norm`, and the singular-value theorem. The uninterrupted-statements rule requires those references after the complete Definition section in an immediately following `## Definition references` section. This is an editorial-format defect; the published carrier was not edited.
- `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison` (published dependency for `thm-pca-frobenius-optimality`): item 1 of `## Statement` contains the inline wikilink to `def-operator-norm-on-a-finite-dimensional-inner-product-space`. The link interrupts the complete statement and should be moved to an immediately following `## Statement references` section. This is an editorial-format defect; the published carrier was not edited.

## Page verdicts

- `ml02-dimension-reduction`: passes presentation review. YAML frontmatter only, `page_layout: compact-v1`, draft status preserved, and all 17 assigned items appear in the page inventory. No summary body is present.
- `ml02-dimension-reduction-examples`: passes presentation review. YAML frontmatter only, `page_layout: compact-v1`, draft status preserved, and all 7 assigned examples appear in the companion inventory. No summary body is present.

## Blockers and coverage limits

No blocker or unresolved mathematical uncertainty. Review covered all assigned items, both pages, and the direct published suppliers listed above; it did not independently re-prove the published suppliers' own dependency closures.
