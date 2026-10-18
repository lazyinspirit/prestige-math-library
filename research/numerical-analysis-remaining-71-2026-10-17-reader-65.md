# Step 3a reader report — batch 65

Run: numerical-analysis-remaining-71-2026-10-17

## Scope and inventory

Reviewed both assigned pages and all 26 listed items in dependency order.

- A page: homogenization-and-multiscale-finite-element-methods.
- B companion: homogenization-and-multiscale-finite-element-methods-examples.
- A items: def-periodic-scalar-diffusion-data; def-periodic-zero-mean-cell-space; lem-unit-cube-h01-separability-and-l2-compactness; def-periodic-cell-problem; lem-periodic-cell-poincare; lem-periodic-averaging-on-cube; def-periodic-two-scale-convergence; lem-periodic-cell-corrector-wellposedness; thm-two-scale-compactness-for-l2-bounded-sequences; def-periodic-cell-correctors-and-effective-tensor; lem-two-scale-gradient-decomposition-for-h01; thm-periodic-effective-tensor-symmetric-elliptic; alg-fehmm-periodic-cell-micro-macro; lem-fehmm-period-aligned-sampling-has-zero-resonance; lem-fehmm-one-dimensional-nonaligned-resonance-bound; thm-periodic-dirichlet-homogenization-on-unit-cube; lem-periodic-flux-corrector; lem-fehmm-micro-cell-solves-wellposedness; cor-periodic-dirichlet-homogenization-strong-l2; thm-periodic-boundary-layer-corrector-estimate; lem-fehmm-micro-tensor-approximation-error; thm-fehmm-macro-micro-resonance-error-decomposition.
- B items: ex-layered-periodic-effective-tensor; ex-periodic-effective-tensor-high-contrast-no-uniform-condition-number; ex-nonaligned-periodic-sampling-resonance; ex-fehmm-macro-micro-resonance-ledger.
- Also opened the A-page prerequisites adaptive-finite-element-methods and finite-element-pde-constrained-optimization.

For proof checks, opened the needed definitions and result statements for Countable Choice; change of variables; Sobolev and periodic Sobolev spaces; H0 closure and Hilbert structure; rational-box density; Fourier basis and Parseval; Bolzano–Weierstrass; vector FTC/Lipschitz bounds; Holder and Tonelli; affine pullback of weak derivatives; smooth compactly supported density; product-rectangle density; L2 Hilbert and Riesz representation; separable-Hilbert weak subsequences; Lax–Milgram; weak derivatives; the library’s zero-based coordinate convention and standard basis; function spaces; matching meshes and zero-boundary P1 inclusion; weak topology; Gaussian substitution; chain rule; and the relevant compact-support-in-H0 result from batch 69. The current batch-54 draft def-afem-nvb-labelled-triangulation-family was also opened and its bytes hashed.

## Edits and evidence

Only assigned in-flight items were edited. No page prose was changed.

1. def-periodic-cell-correctors-and-effective-tensor now explicitly maps PDE labels i=1,…,d to library coordinate i−1, including coordinate, derivative, vector and tensor components. This resolves an unstated indexing convention using def-function-space, lem-standard-basis-of-f-n, and def-ck-and-multi-index-notation-in-several-variables. Its dependencies and proof-contract references were updated.
2. lem-periodic-cell-poincare now sums over the library coordinates 0≤i<d and declares the multi-index convention dependency. This preserves the coordinate telescoping proof in the repository’s zero-based representation.
3. lem-unit-cube-h01-separability-and-l2-compactness now uses ∂0 for the first-coordinate Poincare estimate, gives the coordinate tuple and embedding with indices 0,…,d−1, and records the convention dependency. This also covers d=1.
4. alg-fehmm-periodic-cell-micro-macro now defines the periodic P1 class and its mean-zero basis precisely, ties PDE directions to the corrected effective-tensor convention, and specifies total exact Gaussian-elimination instructions, solver/index mapping, pivot selection, row operations, back substitution, singular-output propagation, and returned outputs. It also declares the function-space dependency. Its well-definedness pointer and proof-contract Definition quote were updated.
5. lem-two-scale-gradient-decomposition-for-h01 now states the vector-valued two-scale convention and slice space explicitly, cites smooth-test density and the chain rule, uses the sampled test field with its full chain-rule divergence, and constructs the periodic corrector through Fourier partial sums with H1 membership and gradient convergence.
6. lem-fehmm-one-dimensional-nonaligned-resonance-bound now proves the periodic primitive’s weak derivative identity by Fubini and proves membership in the periodic H1 closure by Fourier approximation. Its dependencies now include the periodic Poincare, weak-derivative, Fourier derivative, Fourier basis, and Fubini results used in that proof.
7. lem-fehmm-micro-cell-solves-wellposedness now establishes that periodic P1 hats belong to H1# using cellwise integration by parts, cancellation of matching facets and opposite periodic traces, and Fourier H1 convergence. It then proves the mean-zero basis and positive definiteness used by the micro solve. The associated proof-contract claims and inputs were updated.
8. ex-layered-periodic-effective-tensor now lifts the one-dimensional corrector approximants to the cell and justifies their membership in V# before using them.
9. ex-periodic-effective-tensor-high-contrast-no-uniform-condition-number now justifies the lifted one-dimensional corrector and the tangential zero-corrector claim using Fubini and the fundamental theorem of calculus.
10. thm-periodic-boundary-layer-corrector-estimate now uses the batch-69 compact-support result to place its cutoff correction in H0^1 and extends the flux residual identity from smooth tests by density. The Allaire citation was restricted to relevant homogenization context; the Shen locator now identifies Chapter 2 §§2.1–2.2 and distinguishes the smoothed expansion estimate from this local estimate.
11. lem-periodic-flux-corrector no longer attributes the flux-potential construction to Allaire. Its remaining Shen citation points to Chapter 2 §2.1, printed pp. 26–27, Proposition 2.1.1, which constructs a mean-zero periodic antisymmetric flux potential by a periodic Poisson equation.

For the changed proof contracts, synchronized current source quotes and affected proof inputs/citations, and removed stale template-review/reviewed stamps. No verification.judge record was added or retained for the repaired items.

Validation after edits:

- Reflow and precheck were run for all 11 edited item files. Reflow reported each unchanged; each precheck reported zero failures.
- The required single proof-layout command covered all 11 changed paths: 11 items, 30 steps, 0 defects.

## Uneditable findings

1. In-run dependency def-afem-nvb-labelled-triangulation-family (batch 54), first Definition paragraph after “a complete common facet”: “with labels on its edges” is a sentence fragment. It does not prevent recovery of the intended edge-label condition, but the sentence is ill-formed. The assigned consumer alg-fehmm-periodic-cell-micro-macro directly depends on it. At final split the observed bytes remain current; SHA-256 is c375eea3f5e688d09a96038b7ae27ddea1584559f6308706024181b184794dcd.
2. Published dependency def-matching-affine-simplicial-meshes, Definition reference simplex and coordinate labels: it uses e_1,…,e_d and x̂_i for 1≤i≤d without translating those labels into the library’s coordinate set {0,…,d−1}. The opened def-function-space and lem-standard-basis-of-f-n state the zero-based convention and provide e_i only for i<d. The assigned consumer alg-fehmm-periodic-cell-micro-macro depends on this definition. Repair requires an explicit label map (for example, PDE label i to library index i−1) or a consistently reindexed reference simplex in the published definition. This is a definition-level defect; it was outside the reader’s edit authority.

## Page verdicts and source limits

- homogenization-and-multiscale-finite-element-methods: no defect found in the assigned page prose or summary. The assigned items include the repairs and the uneditable dependency findings above.
- homogenization-and-multiscale-finite-element-methods-examples: no defect found in the assigned page prose or summary; its four examples were reviewed with their item dependencies.

No blocker remains for this review. Primary-source checks used the relevant sections of Allaire, Lecture 1, https://www.cmap.polytechnique.fr/~allaire/homog/lect1.pdf (periodic scalar model, cell correctors/effective energy, averaging, two-scale compactness and gradient decomposition); Shen, Lectures on Periodic Homogenization of Elliptic Systems, https://arxiv.org/pdf/1710.11257 (Chapter 2 §2.1 Proposition 2.1.1 and §2.2 Theorem 2.2.2); and Ciarlet–Stohrer, https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf (§§2–4, FE-HMM assembly conventions). Shen’s Theorem 2.2.2 is a related smoothed-expansion estimate, not a source for the local unsmoothed estimate; the latter remains locally proved. Only the relevant source sections were used, not a claim that either full book was read.
