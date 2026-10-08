# Reader 13 — batch 13

Run: `frontier-43-complex-representation-15`. Independent Step 5a review. No judgments, acceptance stamps or certification were issued.

## Outcome and page verdicts

- **A — `library/complex-analysis/beltrami-equation-and-measurable-riemann-mapping.md`:** mathematically sound after the local repairs below and the independently observed batch-12 supplier corrections. Its summary accurately describes the coefficient, weak-solution, local-coordinate, factorization, approximation and compactness routes. No prose edit or withdrawal is proposed. The two historical outside findings still require the ordinary Step 5b disposition.
- **B — `library/complex-analysis/beltrami-equation-and-measurable-riemann-mapping-examples.md`:** examples and counterexample are sound after the local repairs. Piecewise-constant coefficient data are indeed piecewise-affine; neither the example nor the page claims convergence of piecewise-affine solution maps. B-page prose was read and left untouched.

## Mathematical checks

Assigned suppliers were read before their assigned consumers: coefficient and Sobolev postcomposition, weak equation, fixed-support Cauchy estimate, affine freezing/contraction, weak factorization, smooth atlas/uniformization, area bounds, global measurable theorem, and its regularity/local-integrability consequences. The examples were checked against these suppliers. The remaining elementary derivative and determinant interfaces were opened when their uses were encountered.

The Cauchy transform has the sign T=-4 partial_z N and S kernel -1/(pi z^2). The Hessian correction cancels in the trace-free combination; the global Hölder estimate controls the reflected boundary term and the far annular flux, and higher derivatives commute with the fixed-support operator. Affine freezing gives (mu-a)/(1-conjugate(a)mu); rescaling makes the cutoff coefficient small in the full Hölder norm. The fixed point has a derivative perturbation below 1/4 and gives a genuine nondegenerate local coordinate and a Hölder inverse. Weak factorization divides only by the chart derivative and 1-|mu|^2, never by the arbitrary weak solution derivative. Injectivity of the global solution then makes its holomorphic factor have nonzero derivative, giving the full exact-alpha regularity and positive Jacobian.

The smooth global solution uses a finite chart atlas and uniformization of the unchanged compact simply connected topological sphere. The measurable approximation glues local sections by nonnegative partition weights and the unimodular transition; the image-area bound controls the weak L2 derivative limit. The product-limit estimate is valid by strong convergence of a fixed test times the bounded coefficients. Coefficient equality additionally needs the established area formula and inverse-N, both opened in the independent batch-12 inverse/area chain. Normalized compactness uses short spherical image circles, equicontinuity of maps and inverses, and weak Jacobian closure with the exact distortion constant.

The dyadic and triangular approximation estimates compare the averaging cell/ball to a shrinking ball centered at each Lebesgue point. The triangle construction uses barycenter ball averages without a shape condition, and explicitly needs shape regularity for triangle averages. The affine inverse, maximal dilatation, normalized formula, inversion-chart expression, and zero-coefficient identity/inversion witness were checked algebraically.

## Repairs and evidence

| Carrier | Exact location and defect | Repair and evidence |
| --- | --- | --- |
| `def-measurable-beltrami-coefficient` | Definition (d), displayed infinity-chart equation and the following calculation: the exponent contained a literal comma, `^{,2}`. | Replaced it with `^{\,2}` (spacing then exponent 2), consistent with conjugating psi'(w)=-w^{-2}. Both occurrences corrected. |
| `lem-local-postcomposition-chain-rule-for-w-one-two` | Fact F7 asserted total differentiability of a C1 map while citing only the Ck definition. | Added the precise published continuous-partials/total-differentiability theorem to F7 and deps; its opened Statement supplies the implication consumed in the classical chain rule. |
| `lem-local-holder-cauchy-transform-estimate` | Fact F3 attributed -Delta Gamma=delta_0 to a definition that explicitly leaves this equation to a later theorem; the batch contract also omitted this proof-bearing item. | Added `thm-minus-laplacian-of-the-fundamental-solution-is-dirac` to F3/deps after opening its Statement, and supplied a complete proof contract covering all numbered steps and boundary cases. The argument and transform signs are unchanged. |
| `thm-measurable-riemann-mapping-sphere` | Fact F9 and step 1.3 used almost-everywhere vanishing mean oscillation, while the cited differentiation theorem stated only convergence of ball averages. F9 also cited a real-line null-union theorem for planar null sets. Step 1.5 contained a non-wikilink theorem token. | Replaced the average-only supplier with the opened `thm-almost-every-point-is-a-lebesgue-point`, whose proof and mean-oscillation Statement were read; supplied planar complete-measure and countable-subadditivity interfaces for null unions; changed the step 1.5 token to F16. The essential smoothing estimate and theorem Statement are unchanged. |
| `ex-constant-coefficients-and-affine-solutions` | Facts F4/F7, Proof 1.1/2.1: passage from classical affine or punctured infinity-chart derivatives to local Sobolev membership lacked a precise supplier. | Added the published ACL characterization and explicitly checked absolute continuity on coordinate lines and local square integrability. For the infinity expression, bounded degree-zero derivatives and continuity give a segment Lipschitz bound, and increment sums give absolute continuity. |
| `ex-normalization-by-mobius-maps` | Fact F5 and Proof 3.1: the denominator bound by itself gives continuity, not the claimed Lipschitz and Sobolev conclusions. | Added the ACL characterization; used smooth degree-one homogeneity to bound derivatives on the punctured chart, integrated along segments through/away from zero, and checked coordinate-line absolute continuity and square-integrable derivatives. |
| `ex-pullback-of-a-measurable-ellipse-field` | Fact F5 and Verification 2.2: classical derivatives of the affine test map were used as weak derivatives without a supplier. | Added the opened classical-to-weak derivative lemma and the local compact-patch integrability explanation to F5/deps. |

These repairs preserve the intended claims and all parameter ranges. No proposed withdrawal was removed. None of the edited carriers contained a `verification.judge` record, so none needed removal.

The batch proof-contract artifact was updated: missing Cauchy entry added, changed citations/derivations refreshed, and affected verbatim supplier quotations refreshed throughout the assigned contracts. Five stale boundary descriptions were corrected: the zero-coefficient local construction is Phi(z)=z/r with Jacobian r^{-2}, not the identity with Jacobian 1; the smooth lemma uses bound k, not a fixed 1/2 bound; MRMT zero/degenerate cases no longer describe a now-proved supplier as open; and local-integrability/regularity zero cases no longer call the current global theorem provisional. These are evidence descriptions, not acceptance decisions.

## Outside-scope defects and concurrent producer corrections

Both subjects are draft suppliers in exact current-run batch 12, confirmed against that batch's page manifest. They were not edited by this reader. Each original carrier was read and independently raw-hashed before its producer changed it. Those observed hashes subsequently matched the immutable batch-12 pre-reader fingerprint, permitting `observed_source.snapshot=pre`; this is not an observation claim inferred merely from a stored baseline.

1. **`def-acl-sobolev-quasiconformal-homeomorphism`, Definition first paragraph, original line 33 — fatal false claim.** The original equivalence omitted the L2 condition on ACL derivatives. On the square (-1,1)^2, f(x+iy)=sgn(x)|x|^{1/4}+iy is a homeomorphism and ACL on every coordinate line; h'(x)=(1/4)|x|^{-3/4}, so its squared derivative integrates as (1/16)|x|^{-3/2} and diverges on every rectangle crossing x=0. The opened published ACL theorem requires square-integrable coordinate derivatives, not ACL alone. Assigned consumer: `thm-measurable-riemann-mapping-sphere`. Required repair: restore the L2 hypothesis in the alternate description. The producer's current first paragraph now states it explicitly, and that corrected clause was opened. Original observed SHA-256: `6b9a6349622179472876746e216138a77e0f0bb33eb556d9ff31c2d8cfa1540c`.

2. **`thm-one-quasiconformal-is-conformal`, Statement (b) — fatal false claim.** The original alternate characterization claimed mu_f=0 iff f_zbar=0 under only Sobolev regularity. Complex conjugation on C is a Sobolev homeomorphism with f_z=0 and f_zbar=1; the opened coefficient definition assigns mu_f=0 on the entire zero set of f_z. Thus the original alternate equivalence fails. Its proof's Fact F1 correctly restricted the ratio conclusion to the analytic quasiconformal class, which did not supply that missing restriction in the Statement. Assigned consumer: `cex-uniqueness-of-beltrami-solutions-without-normalization`. Required repair: include f_zbar=0 on {f_z=0}, or restrict the alternate characterization to analytic quasiconformal maps. The producer's current Statement (b) adds the zero-set condition, and that corrected clause was opened. Original observed SHA-256: `c0c19a4e8d31ec8d59ba230ddd389071775520e369b515deaa8bf252276703b3`.

Both original findings are retained in the JSON for normal historical routing and independent disposition. The assigned consumers use the explicit Sobolev condition and the valid holomorphy/one-quasiconformal implication; neither relies on the defective stronger paraphrase. No further current mathematical defect was confirmed in the opened supplier chain. No published-content edit was made.

## Authoritative source passages actually consulted

- [Lyubich, book draft](https://www.math.stonybrook.edu/~mlyubich/book.pdf): printed pp. 195–198, MRMT statement, Theorem 14.1 and complete §§14.1–14.6; printed pp. 200–201, complete Theorem 14.11 argument and §14.10.3 transform formula. These give the normalization, atlas/uniformization route, weak-product limit, conformal-structure chart setting, and Cauchy-transform sign. The source's real-analytic construction is contextual, rather than a Hölder proof.
- [Bishop, Quasiconformal Mappings](https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf): printed pp. 49–51, linear distortion/axis direction and complete coefficient-chain computation; p. 88, Theorem 2.11 with its proof; pp. 103–105, Theorem 6.1 with its complete proof. The latter explains the weak-coefficient limit but asserts a.e. derivative nonvanishing; the item closes that prerequisite using its earlier area/inverse-N supplier. The sign typo and unresolved cross-reference in Theorem 2.11 were verified directly.
- [Hunter, Notes on PDE](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf): printed pp. 40–43, Theorem 2.28 and its complete near/far and boundary-flux proof. The exact strict range 0<alpha<1 and reflected boundary term were checked. Its printed theorem assumes smooth compact data; the opened library Newtonian theorem supplies the Hölder-data version used locally.

The web viewer could not open Lyubich's PDF, so it was downloaded and its relevant pages read with PyMuPDF. Bishop and Hunter were likewise checked in bounded PDF page sections. The Astala et al. reference was not independently read; none of the local repairs requires its argument, and no source-reading claim for that paper is made here.

## Validation

- Reflow ran on all seven changed paths and reported each unchanged by formatting.
- Precheck ran on all seven paths: six proof-bearing items checked, zero failures; the pure coefficient definition has no proof phase. After the final extra F4 clarification, the affine item was reflowed and prechecked again: pass.
- Renderer check on seven changed paths: pass, including real KaTeX and renderer YAML parsing. After the final F4 edit, the affine item passed rendering again.
- Strict proof-contract check: all 15 proof-bearing assigned entries passed with zero errors/warnings. The affine entry was regenerated and passed its scoped strict check after the final F4 edit.
- Required final batched command, run after every item edit and formatter: `node tools/proof-layout.mjs items/def-measurable-beltrami-coefficient.md items/lem-local-postcomposition-chain-rule-for-w-one-two.md items/lem-local-holder-cauchy-transform-estimate.md items/thm-measurable-riemann-mapping-sphere.md items/ex-constant-coefficients-and-affine-solutions.md items/ex-normalization-by-mobius-maps.md items/ex-pullback-of-a-measurable-ellipse-field.md`: **7 items, 40 steps, 0 defects**.

These are local structural checks, not mathematical judgment or engine gate certification. An exploratory `rendercheck --help` invocation began a broad read-only scan because that tool does not implement help; it was interrupted, and no result from it is used as evidence.

## Coverage and limitations

Both assigned pages and all 16 items were opened in full. The inventory below distinguishes direct supplier interfaces from the principal supplier proofs read. Repeated source quotations in contracts were checked against the opened supplier statements rather than treated as new mathematical evidence. This review is not a recursive audit of every foundational theorem in the full transitive closure. Both original outside findings have current producer corrections, but their historical Step 5b disposition remains with the lead. There is no unresolved mathematical blocker to the current assigned proofs identified by this reader.

## Opened assigned inventory

- `library/complex-analysis/beltrami-equation-and-measurable-riemann-mapping.md` — A page.
- `library/complex-analysis/beltrami-equation-and-measurable-riemann-mapping-examples.md` — B page.
- `items/def-measurable-beltrami-coefficient.md` — full authored item.
- `items/lem-local-postcomposition-chain-rule-for-w-one-two.md` — full authored item.
- `items/def-weak-solution-beltrami-equation.md` — full authored item.
- `items/lem-local-holder-cauchy-transform-estimate.md` — full authored item.
- `items/lem-nondegenerate-local-holder-beltrami-coordinates.md` — full authored item.
- `items/lem-weak-beltrami-factorization-in-holder-coordinates.md` — full authored item.
- `items/lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions.md` — full authored item.
- `items/lem-area-and-l2-derivative-bounds-for-quasiconformal-maps.md` — full authored item.
- `items/thm-measurable-riemann-mapping-sphere.md` — full authored item.
- `items/cor-local-integrability-beltrami-structures.md` — full authored item.
- `items/thm-holder-regularity-beltrami-solutions.md` — full authored item.
- `items/ex-constant-coefficients-and-affine-solutions.md` — full authored item.
- `items/ex-piecewise-affine-approximations.md` — full authored item.
- `items/ex-normalization-by-mobius-maps.md` — full authored item.
- `items/ex-pullback-of-a-measurable-ellipse-field.md` — full authored item.
- `items/cex-uniqueness-of-beltrami-solutions-without-normalization.md` — full authored item.

## Opened direct supplier interfaces

- `items/cor-cauchy-schwarz-inequality-for-l-two.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-hilbert-spaces-are-reflexive.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-holomorphic-functions-are-real-analytic-and-smooth.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-injective-holomorphic-derivative-nonzero.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-jacobian-determinant-of-a-holomorphic-map.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-mean-value-theorem.md` — statement/definition and any relevant adjoining conventions.
- `items/cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence.md` — statement/definition and any relevant adjoining conventions.
- `items/def-acl-sobolev-quasiconformal-homeomorphism.md` — statement/definition and any relevant adjoining conventions.
- `items/def-axiom-of-choice.md` — statement/definition and any relevant adjoining conventions.
- `items/def-ball-average-operator-on-r-n.md` — statement/definition and any relevant adjoining conventions.
- `items/def-beltrami-coefficient-and-maximal-dilatation.md` — statement/definition and any relevant adjoining conventions.
- `items/def-biholomorphic-map.md` — statement/definition and any relevant adjoining conventions.
- `items/def-borel-and-lebesgue-measurable-function-on-rn.md` — statement/definition and any relevant adjoining conventions.
- `items/def-chordal-metric-riemann-sphere.md` — statement/definition and any relevant adjoining conventions.
- `items/def-ck-and-multi-index-notation-in-several-variables.md` — statement/definition and any relevant adjoining conventions.
- `items/def-compact-space.md` — statement/definition and any relevant adjoining conventions.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md` — statement/definition and any relevant adjoining conventions.
- `items/def-complex-domain.md` — statement/definition and any relevant adjoining conventions.
- `items/def-complex-lp-and-euclidean-test-function-conventions.md` — statement/definition and any relevant adjoining conventions.
- `items/def-countable-choice.md` — statement/definition and any relevant adjoining conventions.
- `items/def-distributional-harmonicity-and-poisson-equation-in-rn.md` — statement/definition and any relevant adjoining conventions.
- `items/def-geometric-quasiconformal-homeomorphism.md` — statement/definition and any relevant adjoining conventions.
- `items/def-holder-spaces-c-k-alpha-and-their-scaled-norms.md` — statement/definition and any relevant adjoining conventions.
- `items/def-holomorphic-and-meromorphic-map-of-riemann-surfaces.md` — statement/definition and any relevant adjoining conventions.
- `items/def-homeomorphism-and-open-maps.md` — statement/definition and any relevant adjoining conventions.
- `items/def-jacobian-determinant-of-a-c-one-map.md` — statement/definition and any relevant adjoining conventions.
- `items/def-l-infinity-on-a-measure-space.md` — statement/definition and any relevant adjoining conventions.
- `items/def-l-p-space-as-a-quotient-by-null-functions.md` — statement/definition and any relevant adjoining conventions.
- `items/def-laplace-fundamental-solution-with-positive-minus-laplacian-sign.md` — statement/definition and any relevant adjoining conventions.
- `items/def-laplacian-of-a-c2-function.md` — statement/definition and any relevant adjoining conventions.
- `items/def-lebesgue-outer-measure.md` — statement/definition and any relevant adjoining conventions.
- `items/def-lebesgue-point-and-lebesgue-set.md` — statement/definition and any relevant adjoining conventions.
- `items/def-locally-integrable-function-on-r-n.md` — statement/definition and any relevant adjoining conventions.
- `items/def-mobius-transformation.md` — statement/definition and any relevant adjoining conventions.
- `items/def-mollifier-family-generated-by-a-unit-mass-smooth-bump.md` — statement/definition and any relevant adjoining conventions.
- `items/def-newtonian-potential.md` — statement/definition and any relevant adjoining conventions.
- `items/def-r-orientation-of-a-topological-manifold.md` — statement/definition and any relevant adjoining conventions.
- `items/def-regular-distribution-from-a-locally-integrable-function.md` — statement/definition and any relevant adjoining conventions.
- `items/def-riemann-sphere-holomorphic-charts.md` — statement/definition and any relevant adjoining conventions.
- `items/def-riemann-surface-and-holomorphic-atlas.md` — statement/definition and any relevant adjoining conventions.
- `items/def-smooth-atlas.md` — statement/definition and any relevant adjoining conventions.
- `items/def-smooth-manifold.md` — statement/definition and any relevant adjoining conventions.
- `items/def-smooth-partition-of-unity-subordinate-to-an-open-cover.md` — statement/definition and any relevant adjoining conventions.
- `items/def-sobolev-space-wkp-and-its-norm.md` — statement/definition and any relevant adjoining conventions.
- `items/def-weak-derivative-of-a-locally-integrable-function.md` — statement/definition and any relevant adjoining conventions.
- `items/def-wirtinger-derivatives.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-analytic-quasiconformality-implies-modulus-distortion.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-c-k-boundary-flattening-preserves-wkp-locally.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-classical-derivatives-are-weak-derivatives.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-complex-conjugation-and-modulus-laws.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-coordinate-ball-classes-identify-local-homology-stalks.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-euclidean-linear-maps-have-matrices-and-are-bounded.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-smooth-bump-between-concentric-euclidean-balls.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-test-function-cutoffs-and-euclidean-localization.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-three-simply-connected-models-are-inequivalent.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-weak-derivative-linearity-locality-and-commutation.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-weak-derivatives-are-unique-almost-everywhere.md` — statement/definition and any relevant adjoining conventions.
- `items/lem-weak-stability-of-sobolev-derivatives.md` — statement/definition and any relevant adjoining conventions.
- `items/prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets.md` — statement/definition and any relevant adjoining conventions.
- `items/prop-relative-homology-is-functorial-for-maps-of-pairs.md` — statement/definition and any relevant adjoining conventions.
- `items/rem-complex-plane-euclidean-dictionary.md` — statement/definition and any relevant adjoining conventions.
- `items/rem-riemann-sphere-one-point-compactification.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-acl-characterisation-of-w-one-p.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-algebra-of-derivatives.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-almost-every-point-is-a-lebesgue-point.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-banach-fixed-point.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-biholomorphic-self-maps-riemann-sphere-are-mobius.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-chain-rule-for-total-derivatives.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-choice-implies-dependent-implies-countable-choice.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-chordal-metric-induces-sphere-topology.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-closed-subspace-of-a-compact-space-is-compact.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-complete-subspace-iff-closed.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-complex-holder-minkowski-and-the-quotient-norm.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-composition-and-inverse-quasiconformal.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-continuous-image-of-a-compact-space-is-compact.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-continuous-partial-derivatives-imply-total-differentiability.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-continuous-partials-and-cauchy-riemann-imply-holomorphic.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-countable-union-of-null-is-null.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-determinant-multiplicative.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-determinant-sign-detects-orientation-change.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-differentiation-under-the-integral-sign.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-distributional-differentiation-is-continuous-and-commutes.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-divergence-theorem-for-bounded-c-one-euclidean-domains.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-dominated-convergence.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-euclidean-inverse-function-theorem.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-extreme-value-metric.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-finite-and-countable-subadditivity-of-measures.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-geometric-and-analytic-quasiconformality-equivalent.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-hahn-banach-dominated-extension.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-heine-borel-rn.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-hk-is-a-hilbert-space.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-holder-inequality-for-integrals.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-holder-spaces-on-bounded-domains-are-banach-spaces.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-lebesgue-measure-is-a-complete-measure.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-lebesgue-measure-of-a-box-of-every-kind.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-lebesgue-number-lemma.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-linear-change-of-variables-for-lebesgue-measure.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-local-homology-detects-interior-points-boundary-points-and-dimension.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-locally-integrable-functions-embed-in-distributions.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-logarithm-derivative-and-integral.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-meyers-serrin-density-on-an-arbitrary-open-set.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-mobius-transformations-biholomorphic-sphere.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-newtonian-potential-for-holder-data-is-classical.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-normalized-quasiconformal-compactness.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-one-point-compactification-properties.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-one-quasiconformal-is-conformal.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-polar-coordinates-formula-for-lebesgue-measure.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-rational-points-and-boxes-in-rn.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-singular-chain-homotopy-formula.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-smooth-partitions-of-unity-exist-on-manifolds.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-symmetry-of-higher-mixed-partials.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-the-lebesgue-integral-respects-almost-everywhere-equality.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-three-point-transitivity-mobius-transformations.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-ultrafilter-lemma.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-uniformization-simply-connected-riemann-surfaces.md` — statement/definition and any relevant adjoining conventions.
- `items/thm-weyl-lemma-for-the-laplacian.md` — statement/definition and any relevant adjoining conventions.

## Additional supplier interfaces and principal supplier proofs

- `items/thm-minus-laplacian-of-the-fundamental-solution-is-dirac.md` — additional interface opened.
- `items/lem-inverse-of-a-quasiconformal-map-is-quasiconformal.md` — additional interface opened.
- `items/lem-c-k-boundary-flattening-preserves-wkp-locally.md` — full proof read.
- `items/thm-uniformization-simply-connected-riemann-surfaces.md` — full proof read.
- `items/lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds.md` — full proof read.
- `items/thm-geometric-and-analytic-quasiconformality-equivalent.md` — full proof read.
- `items/lem-inverse-of-a-quasiconformal-map-is-quasiconformal.md` — full proof read.
- `items/lem-analytic-quasiconformality-implies-modulus-distortion.md` — full proof read.
- `items/thm-composition-and-inverse-quasiconformal.md` — full proof read.
- `items/thm-one-quasiconformal-is-conformal.md` — full proof read.
- `items/thm-normalized-quasiconformal-compactness.md` — full proof read.
- `items/thm-almost-every-point-is-a-lebesgue-point.md` — full proof read.
- `items/thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n.md` — full proof read.

Opened workflow/evidence artifacts: `CLAUDE.md`, `README.md`, `SCHEMA.md`, relevant Step-5 clauses of `WORKFLOW.md`, `briefs/reader.md`, the exact batch-13 pages manifest, proof-contracts, cross-batch dependency entries, selected batch notes/coverage clauses, batch-12 producer membership, and the pre-reader hash records. No rendered reader evidence bundle was found at the queried current-run paths; source items were used directly. Author assertions and existing decisions were not used as verdicts.
