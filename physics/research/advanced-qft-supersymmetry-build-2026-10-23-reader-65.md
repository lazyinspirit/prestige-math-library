# Reader report — batch 65

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `65`

## Opened inventory

Pages:

- A: `qftx-gaga-local-coherent-acyclicity` — `library/quantum-field-theory-mathematics/qftx-gaga-local-coherent-acyclicity.md`
- B: `qftx-gaga-local-coherent-acyclicity-examples` — `library/quantum-field-theory-mathematics/qftx-gaga-local-coherent-acyclicity-examples.md`

Assigned items were read in dependency order:

1. `thm-qftx-gaga-metric-cech-derived-comparison`
2. `lem-qftx-gaga-euclidean-finite-order-refinement`
3. `lem-qftx-gaga-euclidean-sheaf-cohomological-dimension`
4. `thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity`
5. `ex-qftx-gaga-analytic-point-sheaf-acyclicity`
6. `ex-qftx-gaga-analytic-hyperplane-quotient`

The six items' direct mathematical suppliers were opened for the claims checked:

`cor-holomorphic-functions-in-several-variables-are-smooth`, `cor-uniqueness-of-multivariable-power-series-coefficients`, `cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic`, `def-axiom-of-choice`, `def-bigraded-complex-differential-forms`, `def-cech-cochain-complex-open-cover`, `def-cech-cohomology-open-cover`, `def-cohomological-delta-functor`, `def-complete-ordered-field`, `def-direct-image-sheaf`, `def-effaceable-cohomological-delta-functor-in-positive-degrees`, `def-global-cech-cohomology-directed-limit`, `def-global-sections-functor-sheaves`, `def-holomorphic-function-in-several-complex-variables`, `def-infimum`, `def-kernel-cokernel-image-sheaves`, `def-metric-bounded-diameter`, `def-metric-space`, `def-metric-topology`, `def-paracompact-space`, `def-qftx-analytic-coherent-module`, `def-sheaf-cohomology-derived-global-sections`, `def-sheaf-on-topological-space`, `def-skyscraper-sheaf-abelian-group`, `def-universal-delta-functor`, `lem-cech-h0-global-sections`, `lem-direct-image-is-sheaf`, `lem-finite-set-has-max`, `lem-injective-sheaves-flasque`, `lem-metrics-on-rn`, `lem-paracompact-hausdorff-cover-shrinking`, `thm-abelian-sheaves-have-enough-injectives`, `thm-acyclic-resolution-theorem-for-right-derived-functors`, `thm-cauchy-riemann-characterization-in-several-complex-variables`, `thm-cech-to-sheaf-cohomology-comparison`, `thm-derived-functors-are-universal-delta-functors`, `thm-dolbeault-cohomology-polydisc-vanishes-positive-q`, `thm-dolbeault-lemma-polydisc`, `thm-effaceable-cohomological-delta-functors-are-universal`, `thm-exactness-of-sheaves-stalkwise`, `thm-flasque-sheaves-acyclic`, `thm-infimum-property`, `thm-leray-acyclic-cover-theorem`, `thm-long-exact-sequence-in-cohomology`, `thm-long-exact-sequence-sheaf-cohomology`, `thm-metric-hausdorff-separation`, `thm-power-series-expansion-in-several-complex-variables`, `thm-qftx-gaga-analytic-oka-coherence`, `thm-right-derived-functors-form-a-cohomological-delta-functor`, `thm-sheaf-morphism-isomorphism-stalkwise`, `thm-smooth-function-module-sheaves-are-acyclic`, `thm-stone-metric-spaces-are-paracompact`, and `thm-zero-sheaf-cohomology-global-sections`.

I also opened `lem-qftx-gaga-analytic-bounded-degree-relations` while checking the draft cross-batch supplier `thm-qftx-gaga-analytic-oka-coherence`. Its statement and proof remain draft premises here; this report does not certify that supplier or its readiness state.

No TikZ or tikzcd diagrams occur in the assigned items.

## Edits and evidence

- `thm-qftx-gaga-metric-cech-derived-comparison`: made the metric topology, Hausdorffness and paracompactness inputs explicit, and added the fixed-cover comparison supplier. Step 6.1 now explains the connecting-map check: after refining until a Čech cocycle lifts, the fixed-cover cochain map sends the lift to a lift and sends its differential `δb=i(a)` to the same identity in the Čech–Godement total complex. This supplies the compatibility needed to identify the canonical comparison with the unique isomorphism of universal delta functors. Checked against `thm-cech-to-sheaf-cohomology-comparison` and Demailly, *Sheaf cohomology and the De Rham-Weil isomorphism theorem*, Chapter IV §5.B–C, pp. 207–211, especially diagram (5.16).

- `lem-qftx-gaga-euclidean-finite-order-refinement`: specified the Euclidean metric and topology, distance and diameter conventions, dyadic cubes and parents, the maximum norm, simplices, triangulation, cubical cells, barycentric coordinates and stars. Expanded the local-finiteness, neighboring-cube size and common-face subdivision arguments so the locally finite triangulation and its order-`m+1` star refinement are established in the item. The proof is local; Agol, *Complex Analysis and Riemann Surfaces*, §6, Theorem 6.5, p. 29, supplies the downstream sheaf-dimension application, not this construction. After precheck exposed a stratification issue, the dependent steps were renumbered `3.1`–`6.1`, and the affected proof-contract derivations and references were updated.

- `thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity`: corrected F3's overstatement of `thm-dolbeault-lemma-polydisc`. That supplier gives local exactness only in positive antiholomorphic degree. F3 now identifies the degree-zero kernel with `O_D` using the definition of `bar∂`, holomorphic smoothness, and the Cauchy–Riemann characterization; the argument is explicitly for `N≥1`, while the proof treats `N=0` separately. The Demailly locator now records that Proposition 4.1 assumes strongly `q`-complete with `q>1`; scalar `q=1` acyclicity and the ordinary Euclidean dimension bound are supplied locally.

- `ex-qftx-gaga-analytic-point-sheaf-acyclicity`: stated the continuity and separate-holomorphy hypotheses that allow the power-series supplier to be applied to a holomorphic representative. Corrected the Demailly locator to describe the local-resolution and dimension-shift method in Chapter IX §4.B, rather than attributing the local scalar result to Proposition 4.1.

- `ex-qftx-gaga-analytic-hyperplane-quotient`: made the power-series hypotheses explicit and repaired the same degree-zero Dolbeault-kernel gap as in the local theorem. Corrected the Demailly Proposition 4.1 locator to its actual `q>1` scope and stated that the scalar `q=1` argument is local. The quotient and multiplication-sequence proof remain local.

For the changed items, dependency declarations were synchronized to the batch manifest and the affected proof contracts were updated. No changed item retained a `verification.judge` record. Reflow and precheck passed for all five changed items. The final proof-layout run reported 5 items, 28 steps and 0 defects. The manifest dependency and role entries match the five changed items' frontmatter.

## Defects not editable in this assignment

- Published dependency `def-metric-space`, Definition, paragraph “The values of a metric are real numbers,” lines 62–64: after “No infinite value is permitted;” the text continues with a malformed fragment beginning “Which metric axiom list this library uses…”. The imported source is pinned at SHA-256 `80f7593ee31246d59182b8b1447ba2b0ef3bde866d2897f0cd4f44aee6a16b80`. It is directly required by assigned consumer `thm-qftx-gaga-metric-cech-derived-comparison`. The dependency is read-only here; the owner should repair the published definition.

- The batch coverage artifact `research/advanced-qft-supersymmetry-build-2026-10-23-batch-65.coverage.json` still says Demailly Proposition 4.1 supplies scalar acyclicity. The assigned item locators have been corrected, but this artifact is outside the permitted item/A-page repair scope and remains for its owner to reconcile.

## Page verdicts

- `qftx-gaga-local-coherent-acyclicity` (A): pass. The page is YAML frontmatter only, uses compact-v1 layout, has no summary body, and its item inventory matches the assigned manifest.
- `qftx-gaga-local-coherent-acyclicity-examples` (B): pass. The page is YAML frontmatter only, uses compact-v1 layout, has no summary body, and its item inventory matches the assigned manifest. B-page prose was not edited.

## Source and coverage limits

The full relevant argument in Demailly's book was read for the comparison and the local-resolution/dimension-shift method. The separately cited Demailly Čech PDF timed out; the book's corresponding Chapter IV argument was used instead. Agol's full course PDF was read at Theorem 6.5. The Wehler PDF URLs timed out; search-index snippets exposed the cited theorem/proposition scopes, but the full Wehler arguments were not read and are not relied on as the proof of the repaired steps. The local item proofs and opened supplier statements provide the arguments described above.

No page, item, supplier, or gate was stamped accepted or published in this review.
