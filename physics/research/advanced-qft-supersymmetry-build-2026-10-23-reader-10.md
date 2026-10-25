# Reader report: batch 10

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only reader  
Scope: batch `10`

## Opened inventory

- Batch manifest: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-10.pages.json`.
- Proof contracts: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-10.proof-contracts.json`.
- Assigned A page: `library/quantum-field-theory-mathematics/qftx-equivariant-index.md`.
- Assigned B page: `library/quantum-field-theory-mathematics/qftx-equivariant-index-examples.md`.
- Assigned items, read supplier-first:
  1. `def-equivariant-elliptic-complex-index`
  2. `lem-equivariant-rescaled-heat-kernel-extension`
  3. `lem-equivariant-relative-tangent-groupoid-heat-trace-limit`
  4. `thm-equivariant-index-character-formula`
  5. `ex-equivariant-index-on-a-zero-manifold`
  6. `ex-equivariant-index-on-a-two-sphere`
- Mathematical suppliers opened for the assigned proof uses: `def-countable-choice`, `def-axiom-of-choice`, `def-schwartz-space-and-its-seminorms`, `thm-fourier-inversion-on-schwartz-space`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-dominated-convergence`, `thm-de-rham-cohomology-of-spheres`, and `thm-general-stokes-theorem`.
- Current-run dependencies outside batch 10 opened in their current source form: `def-equivariant-compact-symbol-k-theory`, `lem-equivariant-symbol-index-comparison`, `lem-equivariant-symbol-fixed-inclusion-localization`, and `lem-equivariant-symbol-chern-character-pushforward` (batch 71). Their relevant local proof suppliers opened were `lem-equivariant-finite-chart-symbol-calculus`, `lem-equivariant-controlled-symbol-realization`, `lem-equivariant-associated-symbol-product-index`, `lem-equivariant-compact-bott-index-normalization` (batch 70), and `lem-qftx-compact-torus-equivariant-slice-neighborhoods` (batch 8).
- Page-prerequisite context opened: `qftx-equivariant-symbol-index`, `qftx-borel-localization`, `countability-and-uncountability`, `schwartz-space-and-the-plancherel-theorem`, `smooth-partitions-of-unity-and-exhaustions`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, and `integration-of-forms-and-the-general-stokes-theorem`. The seven published mathematics pages were checked at frontmatter level for identity, status, and inventory; their item-level claims were reviewed through the opened suppliers above.
- Source checks: [Gilkey, *Invariance Theory, the Heat Equation, and the Atiyah-Singer Index Theorem*, first edition](https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf), §1.7 (printed pp. 50–53), assumes a positive-definite Hermitian matrix leading symbol; Lemmas 1.7.2–1.7.3 compare the resolvent/heat-kernel parametrix with the heat kernel. [Yi, “A Groupoid Proof of the Lefschetz Fixed Point Formula”](https://arxiv.org/pdf/2003.00955), Proposition 4.3 (PDF pp. 7–8) proves smoothness of the frozen tangent heat-kernel family, with its value at the tangent boundary given by the frozen operator's heat kernel; Theorem 1.1 states the simple-fixed-point formula. These passages match the cited uses; the local Volterra argument remains responsible for the lemma's global decay bound.

The two assigned pages and all six assigned items were opened. No TikZ/tikzcd diagrams occur in the assigned items. No item or page was edited because this assignment is read-only.

## Item review

- `def-equivariant-elliptic-complex-index`: the action, complex, symbol convention, cohomology, and virtual character are defined. The finite-dimensionality condition is explicit; no proof section is required for this definition. No defect found.
- `lem-equivariant-rescaled-heat-kernel-extension`: the positive matrix-symbol condition and spectral heat-data hypotheses are explicit. The frozen-coefficient estimates, Volterra correction, semigroup identification, and rescaled limit are locally argued. The cited Gilkey and Yi passages support the matrix-symbol parametrix framework and tangent-family limit. The item uses “Schwartz” as a technical regularity conclusion without identifying its exact earlier definition or stating the relevant seminorm criterion. The definition exists in the reachable published supplier `def-schwartz-space-and-its-seminorms`; a short reference and statement of that criterion would close this editorial defect. This is reported as nonfatal.
- `lem-equivariant-relative-tangent-groupoid-heat-trace-limit`: the heat-supertrace identity and dominated-convergence argument carry the stated assumptions. In Proof 2.1, however, `k_{x,1}^j(dg_x^{-1}v,v)` is not defined by this item or its heat-kernel supplier. The supplier defines a one-variable kernel `k_x^j(w)` and its two-point form is `k_x^j(a-b)`. The displayed limit needs that notation made explicit; this is a local, nonfatal ill-formedness issue.
- `thm-equivariant-index-character-formula`: the general fixed-component formula follows conditionally from the stated analytic index realization, fixed-inclusion localization, and trace-weighted pushforward suppliers. The separate countable-choice isolated-point argument is independent and carries its additional heat/Hodge hypotheses. I found no confirmed defect in the assigned proof after opening its current-run supplier chain.
- `ex-equivariant-index-on-a-zero-manifold`: the verification explicitly handles vacuous symbol exactness, computes the finite-dimensional cohomology representation, and matches the fixed-point sum. No defect found.
- `ex-equivariant-index-on-a-two-sphere`: the cohomology, normalized area-form, rotation, determinant, and local fiber-supertrace computations are correct. The example calls the result a de Rham index but does not establish that the de Rham complex is elliptic, as required by `def-equivariant-elliptic-complex-index`. The omitted check is immediate: for nonzero cotangent vector `xi`, the symbol is `i xi wedge`, with contracting homotopy `(i |xi|^2)^(-1) i_{xi^sharp}` (equivalently, scalar-adjusted contraction), so the symbol complex is exact. I record this as a nonfatal unlicensed inference.

## Page verdicts

- `qftx-equivariant-index`: pass. Its four-item inventory matches the assigned A-page manifest; its mathematical library and draft status are consistent. Prerequisite page identities resolve. The body is empty and `page_layout: compact-v1` is preserved, as required.
- `qftx-equivariant-index-examples`: pass. Its two examples match the assigned B-page manifest; its A-page and mathematics prerequisites resolve. The body is empty and `page_layout: compact-v1` is preserved, as required.

## Findings, edits, and blocker

No item or page repairs were made. The three uneditable findings above are recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-reader-findings-10.json`. Each is a small presentation/proof-completeness correction and none changes the mathematical conclusion. There is no operational blocker.

## Coverage note

The assigned carriers and their direct current-run mathematical suppliers were reviewed, including the relevant proofs in batches 8, 70, and 71. I did not independently reconstruct every transitive published foundation below those suppliers; those remain read-only mathematical prerequisites whose stated claims were used as premises. Page-prerequisite context pages outside the assigned pages were checked at frontmatter level, not for their unrelated summaries or inventories.
