# Step 3a reader report — batch 51

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Batch: `51`

## Scope and opened inventory

I read both assigned pages and all 23 assigned items independently, in dependency order:

- A page: `crouzeix-raviart-finite-elements` at `library/numerical-pdes-and-spatial-discretization/crouzeix-raviart-finite-elements.md`.
- B page: `crouzeix-raviart-finite-elements-examples` at `library/numerical-pdes-and-spatial-discretization/crouzeix-raviart-finite-elements-examples.md`.
- A-page items: `def-crouzeix-raviart-local-p1-element`, `def-crouzeix-raviart-fractional-sobolev-regularity`, `lem-crouzeix-raviart-continuous-poincare`, `lem-crouzeix-raviart-local-face-unisolvence`, `def-crouzeix-raviart-global-space`, `lem-crouzeix-raviart-simplex-traces-and-green-identity`, `def-crouzeix-raviart-poisson-smoothing-index`, `lem-crouzeix-raviart-global-face-basis`, `def-crouzeix-raviart-face-average-interpolant`, `lem-crouzeix-raviart-face-jump-estimate`, `def-crouzeix-raviart-poisson-method`, `lem-crouzeix-raviart-broken-gradient-is-a-norm`, `lem-crouzeix-raviart-local-interpolation-estimates`, `lem-crouzeix-raviart-conforming-companion`, `lem-crouzeix-raviart-comparison-norm`, `thm-crouzeix-raviart-discrete-well-posedness`, `thm-crouzeix-raviart-discrete-poincare`, `lem-crouzeix-raviart-consistency-defect`, `thm-crouzeix-raviart-energy-error-estimate`, and `thm-crouzeix-raviart-l2-error-estimate`.
- B-page items: `cex-crouzeix-raviart-below-trace-threshold`, `ex-crouzeix-raviart-one-face-degree-of-freedom`, and `ex-crouzeix-raviart-broken-gradient-norm`.

I opened the published `variational-crimes-and-strang-lemmas` page and its required theorem `thm-second-strang-lemma-for-nonconforming-galerkin`, plus `def-variational-crime-error-framework`. I also opened the relevant clauses of these dependency items:

- Mesh, Sobolev, and interpolation interfaces: `def-countable-choice`, `def-matching-affine-simplicial-meshes`, `def-reference-finite-element-and-unisolvent-dofs`, `def-sobolev-space-wkp-and-its-norm`, `def-fractional-slobodeckij-space-on-euclidean-space`, `def-wkp-zero-as-a-sobolev-closure`, `lem-shape-regular-affine-simplex-scaling`, `lem-affine-pullback-weak-derivatives-and-scaling`, `lem-smooth-density-on-reference-simplex`, and `thm-reference-simplex-poincare-wirtinger`.
- Trace, Green, density, and measure interfaces: `lem-affine-simplex-gauss-green-formula`, `lem-coordinate-direction-form-of-the-slobodeckij-seminorm`, `lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `lem-complex-translation-and-approximate-identity-interfaces`, `lem-compact-support-zero-extension-in-wkp`, `lem-mollification-commutes-with-weak-derivatives-in-the-interior`, `lem-test-function-cutoffs-and-euclidean-localization`, `lem-weak-leibniz-rule-with-a-smooth-factor`, `thm-meyers-serrin-density-on-an-arbitrary-open-set`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-finite-and-countable-subadditivity-of-measures`, `thm-heine-borel-rn`, `thm-tonelli-and-fubini-for-completed-product-measures`, and `thm-holder-inequality-for-integrals`.
- Companion, mesh geometry, and functional-analysis interfaces: `lem-oriented-facet-cancellation-on-matching-meshes`, `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`, `thm-continuity-from-above-for-measures`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-the-standard-smooth-step-function`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `prop-measure-monotonicity`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `cor-components-of-open-subsets-of-rn-are-polygonally-connected`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `lem-w-one-two-is-a-hilbert-space`, and `thm-lax-milgram`.

Exact supplier statements used by each proof were opened. For items among these suppliers that are published, I checked the interfaces needed here rather than recursively re-auditing every supplier proof.

For the cited literature, I inspected the relevant arguments in Jean-Luc Guermond, [Part VIII, Chapter 36, *Crouzeix–Raviart approximation*](https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf), including Lemma 36.1, Proposition 36.2, Lemmas 36.4, 36.6, 36.8–36.10, and Theorems 36.11 and 36.13. I also inspected Joachim Schöberl, [Chapter 25, *Non-conforming Finite Element Methods*](https://jschoeberl.github.io/iFEM/FEM/nonconforming.html), through §25.2. The exact passage used for each corrected locator is listed below.

## Independent page verdicts

- **`crouzeix-raviart-finite-elements`: sound.** The local and global degrees of freedom, trace threshold, interpolation and jump bounds, conforming companion, discrete Poincare inequality, consistency estimate, well-posedness, and energy/L2 error arguments preserve their hypotheses and conclusions. The conditional smoothing-index requirement is stated, and the energy proof supplies the common comparison norm, bounded form extension, coercivity, Hilbert-space properties, and bounded loads required by the second-Strang supplier.
- **`crouzeix-raviart-finite-elements-examples`: sound.** The one-face basis description and two-triangle gradients and norm are correct. The boundary trace on the bottom edge is nonzero despite its zero average. The counterexample is in (H^1_0((0,1)^2)), its gradient fails to lie in (H^{1/2}), and the separate Laplacian calculation excludes the endpoint (H^2) case.

The current trace proof builds and normalizes the compactly supported smooth density required by the published coordinate-direction seminorm lemma. The current companion proof derives a uniform vertex-star bound from affine cone volumes and change of variables. These close the two concerns recorded in the earlier batch review; the prior report and owner decision were treated as evidence, and I checked the current text and supplier statements directly. The current counterexample derivative formulas and lower-bound calculation are also sound.

## Edits and evidence

I corrected six inaccurate bibliography locators across five assigned items. No mathematical statement, proof step, dependency, or page prose changed.

| Item | Correction | Evidence |
|---|---|---|
| `lem-crouzeix-raviart-comparison-norm` | The Guermond locator now points to Lemma 36.4 (PDF p. 4) for the broken-gradient norm and Lemma 36.9 (PDF pp. 7–8) for the scaled facet-jump estimate. | The original locator named only §36.2.2, which does not contain Lemma 36.9. |
| `thm-crouzeix-raviart-discrete-poincare` | The Guermond locator now describes Lemma 36.6 as a duality proof with face estimates, not a conforming-companion proof. The Schöberl locator now describes the CR space, broken-gradient norm, and conforming P1 approximation passages at lines 280–312, not an averaging estimate. | Guermond Lemma 36.6 and its proof (PDF pp. 5–6) use elliptic duality and the face estimate in Lemma 36.8. Schöberl §25.2, lines 280–312, defines the CR space and compares it with a conforming P1 subspace. |
| `thm-crouzeix-raviart-l2-error-estimate` | The Schöberl locator now points to its consistency and (H^2) energy estimate, not an L2 duality proof. | Schöberl §25.2, lines 314–350, contains cellwise integration by parts, face-mean cancellation, and the (H^2) energy estimate; the duality estimate is Guermond Theorem 36.13 (PDF pp. 12–13). |
| `cex-crouzeix-raviart-below-trace-threshold` | The Schöberl locator now points to its consistency, face-mean cancellation, and (H^2) energy estimate, not an L2 argument. | Schöberl §25.2, lines 314–350; Guermond Lemma 36.8 and Theorem 36.13 (PDF pp. 6–7 and 12–13) give the strict trace and duality thresholds. |
| `ex-crouzeix-raviart-broken-gradient-norm` | The Schöberl locator now describes the nonconforming P1 CR space and broken-gradient form, not a basis construction. | Schöberl §25.2, lines 276–290, defines the CR space and its broken form; Guermond Proposition 36.2 supplies the global face basis. |

The proof-contract derivation paragraphs still match all 62 numbered steps after normalization; the locator-only edits do not change any contract premise or derivation. The five changed items had no `verification.judge` record to remove.

## Checks

- Reflow: all five changed item files reported unchanged.
- Precheck: pass for each changed item.
- Final `proof-layout` run: 5 items, 18 steps, 0 defects.
- No reader findings remain uneditable. No blocker.

## Coverage note

I checked all assigned pages and items and the dependency interfaces and proof passages needed for these claims. The assigned items were read in dependency order, but some external supplier files were opened after their assigned consumers; those interfaces were checked before I finalized the verdicts. Thus the strict supplier-first reading sequence was not fully achieved. I also did not audit the full recursive proof closure of every published measure-theory and Sobolev supplier outside the relevant interfaces. No unresolved mathematical uncertainty or blocker remains from these limits.
