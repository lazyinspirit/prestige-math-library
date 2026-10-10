# Reader 13 — batch 13

Run `physics-em-sr-40-2026-10-08`; independent Step 5a review. All assigned carriers are draft. No judgment or acceptance stamp is supplied.

## Review checkpoint

Opened both assigned pages and all fourteen assigned items. Opened the direct mathematical supplier definitions/statements and the complete Stokes/pullback/Green proofs needed for the parametrized repair. Supplier proofs were not exhaustively re-audited. Contracts are being checked against current carriers.

## Repairs and evidence

- `def-em-complex-plane-wave`: Made the 0-based supplier / 1-based local coordinate relabeling explicit; the phase uses the three intended coordinates.

- `def-em-moving-patch`: Corrected velocity/field domains to open subsets of R^4 containing the swept graph, distinguished equal-time velocity compatibility, and removed the false implication from rank two to the published regular-patch definition. Preserved disconnected and noninjective parameter families using parametrized flux. Proved finite-union Jordan measurability without the countable-union Choice hypothesis. Singleton flux is retained without asserting a regular slice.

- `def-em-surface-distribution`: Specified that the slice-chart hypersurface has no manifold boundary and handled the empty-surface functional separately, so the sup-norm estimate does not require an undefined empty supremum.

- `lem-em-continuous-localization`: Repaired Proof 4.1: the hypothesis concerns closed discs, whereas the old proof silently applied it to open balls and assumed a positive component. A sign reversal and positive lower bound on an inner open disc now contradict the actual closed-disc hypothesis directly. Added the exact compactness supplier and the local Borel zero-extension argument.

- `lem-em-coulomb-dipole-remainder`: Defined the complex-bilinear moment pairing, which the real-only inner-product supplier did not define; assigned a value to the kernel at y=x so even exceptional representatives yield a well-formed measurable integrand. The r>=2a estimate and all moments are unchanged.

- `lem-em-point-current-continuity`: Defined the bilinear coordinate pairing for complex tests and treated J as a triple of scalar distributions; order-zero estimates now apply componentwise rather than invoking an undefined complex-vector norm. Properness and endpoint signs remain unchanged.

- `lem-em-quadratic-stress-identity`: Repaired the ill-formed angular branch: its old g:U->R^3 had no time variable. Specified U x I, matrix entries, spatial regularity and existence of the time derivative, leaving the first two spatial identities intact.

- `lem-em-interface-derivatives`: Removed the undefined edge exclusion: the cited slice-chart interface has no manifold boundary. Proof 1.2 now proves surface-measure nullity of seams, not merely ambient volume nullity. Proof 2.1 uses the divergence supplier's actual up-to-boundary C1 hypothesis and applies it componentwise to complex tests. Defined the permutation symbol.

- `lem-em-joint-smooth-potentials`: Replaced the distance-to-complement/sequence argument with a finite-ball tube argument valid also when N=R^4 and without sequential Choice. Corrected the singleton extension sentence using constant-in-time extensions; joint continuity at included endpoints is explicit.

- `def-em-moving-patch`: Also made extension independence a dense-set continuity argument rather than an unstated sequence selection, and clarified that a chosen singleton time jet need not admit a compatible velocity.

- `lem-em-moving-flux`: Closed the regular-patch citation gap without narrowing disconnected/noninjective families: explicitly defined parameter normals, multiplicity flux and image boundary chains, and proved parametric Stokes from three exact broader suppliers. Added the Riemann/Lebesgue bridge before differentiating. Excluded the false claim of a canonical derivative for singleton I while retaining its flux value; regular endpoint claims remain relative.

- `lem-em-period-average`: Defined the permutation symbol used by the vector proof and replaced the time-dependent comparison with a direct counterexample comparing the actual averages, 1 versus 0.

- `lem-em-interface-wave-linear-system`: Replaced L2's inaccurate attribution of general multiplication/conjugation laws to a definition with the exact coordinate modulus fact required by the proof.

- `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`: Separated the choice-free direct calculation from invocation of the AComega-qualified transport lemma, whose assumption was previously omitted. Verified the actual regular-patch injectivity and connectedness needed for Stokes. The example and its arithmetic remain choice-free.

- `lem-em-coulomb-dipole-remainder` Proof 1.1: supplied the omitted positive-root differentiability argument by rationalization and the quotient rule; added the exact square-root existence supplier.
- `lem-em-continuous-localization` Statement: defined the local basis, integrability condition and zero-extension convention explicitly.
- Assigned A-page prose: synchronized the parametrized/spacetime formulation, nondegenerate time domain and edge-free interface scope, and clarified conjugation in quadratic averages. B-page prose was left unchanged.

- `lem-em-point-current-continuity` Facts F5: made complex integration and its estimates explicit from real integral bounds and the modulus law; used a harmless factor 2 in order-zero bounds so no unlisted complex integral inequality is assumed.

## Validation

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-em-complex-plane-wave.md`: exit 0. unchanged items/def-em-complex-plane-wave.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-em-complex-plane-wave.md`: exit 0. 0 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-em-moving-patch.md`: exit 0. unchanged items/def-em-moving-patch.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-em-moving-patch.md`: exit 0. 0 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-em-surface-distribution.md`: exit 0. unchanged items/def-em-surface-distribution.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-em-surface-distribution.md`: exit 0. 0 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-continuous-localization.md`: exit 0. unchanged items/lem-em-continuous-localization.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-continuous-localization.md`: exit 0. PASS items/lem-em-continuous-localization.md (contradiction)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-coulomb-dipole-remainder.md`: exit 0. unchanged items/lem-em-coulomb-dipole-remainder.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-coulomb-dipole-remainder.md`: exit 0. PASS items/lem-em-coulomb-dipole-remainder.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-point-current-continuity.md`: exit 0. unchanged items/lem-em-point-current-continuity.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-point-current-continuity.md`: exit 0. PASS items/lem-em-point-current-continuity.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-quadratic-stress-identity.md`: exit 0. unchanged items/lem-em-quadratic-stress-identity.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-quadratic-stress-identity.md`: exit 0. PASS items/lem-em-quadratic-stress-identity.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-interface-derivatives.md`: exit 0. unchanged items/lem-em-interface-derivatives.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-interface-derivatives.md`: exit 0. PASS items/lem-em-interface-derivatives.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-joint-smooth-potentials.md`: exit 0. unchanged items/lem-em-joint-smooth-potentials.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-joint-smooth-potentials.md`: exit 0. PASS items/lem-em-joint-smooth-potentials.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-moving-flux.md`: exit 0. unchanged items/lem-em-moving-flux.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-moving-flux.md`: exit 0. PASS items/lem-em-moving-flux.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-period-average.md`: exit 0. unchanged items/lem-em-period-average.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-period-average.md`: exit 0. PASS items/lem-em-period-average.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-interface-wave-linear-system.md`: exit 0. unchanged items/lem-em-interface-wave-linear-system.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-em-interface-wave-linear-system.md`: exit 0. PASS items/lem-em-interface-wave-linear-system.md (direct)  1 checked, 0 failing — all clean
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries.md`: exit 0. unchanged items/ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries.md
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries.md`: exit 0. PASS items/ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries.md (direct)  1 checked, 0 failing — all clean

- Regenerated citations and derivations for all ten repaired proof-bearing entries from current carriers, retaining other boundary records. Strict batch contract check: exit 1. ERROR boundary-evidence-unanchored [def-em-moving-patch]: degenerate evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-coulomb-dipole-remainder]: degenerate evidence must name a step or statement ERROR citation-fact-uncontracted [lem-em-point-current-continuity]: F3 -> thm-heine-borel-rn, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-monotonicity-of-the-integral needs an exact citation contract ERROR boundary-evidence-unanchored [lem-em-quadratic-stress-identity]: empty evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-quadratic-stress-identity]: zero evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-quadratic-stress-identity]: endpoints evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-interface-derivatives]: endpoints evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-joint-smooth-potentials]: nonempty-choice evidence must name a step or statement ERROR citation-fact-uncontracted [lem-em-moving-flux]: F5 -> def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions, thm-greens-theorem-for-finite-unions-of-elementary-regions, lem-a-vector-line-integral-pulls-back-to-the-parameter-region, lem-the-stokes-integrand-identity-on-a-c2-patch, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals needs an exact citation contract ERROR boundary-evidence-unanchored [lem-em-moving-flux]: empty evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-moving-flux]: degenerate evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-moving-flux]: endpoints evidence must name a step or statement ERROR boundary-evidence-unanchored [lem-em-moving-flux]: nonempty-choice evidence must name a step or statement ERROR citation-duplicate [ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries]: L1 -> lem-em-moving-flux is repeated ERROR boundary-evidence-unanchored [ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries]: empty evidence must name a step or statement WARN shotgun-bracket [lem-em-continuous-localization]: 3.1 cites 6 of 8 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it WARN shotgun-bracket [lem-em-joint-smooth-potentials]: 4.1 cites 5 of 7 declared facts while 3 other step(s) cite none — cite each fact at the step that uses it proof-contract: 15 error(s), 2 warning(s), 14/14 item(s) checked

- Final checks caught two links accidentally expanded while adding dependency arrays and a duplicate L1 supplier link; corrected them and reran the affected formatting and contract checks. Renamed the moving-flux scalar integrand h so it does not shadow the open spacetime set W. Boundary evidence now names the relevant Statement/Definition/Proof.

- `node tools/physics-support/rendercheck.mjs items/def-em-complex-plane-wave.md items/def-em-moving-patch.md items/def-em-surface-distribution.md items/lem-em-continuous-localization.md items/lem-em-coulomb-dipole-remainder.md items/lem-em-parameter-integrals.md items/lem-em-point-current-continuity.md items/lem-em-quadratic-stress-identity.md items/lem-em-interface-derivatives.md items/lem-em-joint-smooth-potentials.md items/lem-em-moving-flux.md items/lem-em-period-average.md items/lem-em-interface-wave-linear-system.md items/ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries.md library/classical-electromagnetism-mathematics/em-elementary-mathematical-prerequisites.md library/classical-electromagnetism-mathematics/em-elementary-mathematical-prerequisites-examples.md`: exit 0. OK — 16 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.

- `node tools/physics-support/proof-layout.mjs items/def-em-complex-plane-wave.md items/def-em-moving-patch.md items/def-em-surface-distribution.md items/lem-em-continuous-localization.md items/lem-em-coulomb-dipole-remainder.md items/lem-em-point-current-continuity.md items/lem-em-quadratic-stress-identity.md items/lem-em-interface-derivatives.md items/lem-em-joint-smooth-potentials.md items/lem-em-moving-flux.md items/lem-em-period-average.md items/lem-em-interface-wave-linear-system.md items/ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries.md`: exit 0. proof-layout: 13 items, 55 steps, 0 defects

## Opened inventory

Assigned pages (complete frontmatter and prose):

- `library/classical-electromagnetism-mathematics/em-elementary-mathematical-prerequisites.md` (A).
- `library/classical-electromagnetism-mathematics/em-elementary-mathematical-prerequisites-examples.md` (B).

Assigned items (complete authored text, suppliers before the dependent review):

- `items/def-em-complex-plane-wave.md` — repaired.
- `items/def-em-moving-patch.md` — repaired.
- `items/def-em-surface-distribution.md` — repaired.
- `items/lem-em-continuous-localization.md` — repaired.
- `items/lem-em-coulomb-dipole-remainder.md` — repaired.
- `items/lem-em-parameter-integrals.md` — read, unchanged.
- `items/lem-em-point-current-continuity.md` — repaired.
- `items/lem-em-quadratic-stress-identity.md` — repaired.
- `items/lem-em-interface-derivatives.md` — repaired.
- `items/lem-em-joint-smooth-potentials.md` — repaired.
- `items/lem-em-moving-flux.md` — repaired.
- `items/lem-em-period-average.md` — repaired.
- `items/lem-em-interface-wave-linear-system.md` — repaired.
- `items/ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries.md` — repaired.

External direct suppliers (definition/statement sections; full proofs additionally opened for the four Stokes/Green subjects discussed below). All 109 match their import pins, with no mismatches. This is a source-byte check, not a proof audit:

- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`
- `items/cor-continuous-functions-are-borel-measurable.md`
- `items/cor-disc-jordan-content-is-pi-r-squared.md`
- `items/cor-jordan-content-finite-additivity.md`
- `items/cor-mean-value-theorem.md`
- `items/def-admissible-regular-parametrized-surface-patch.md`
- `items/def-borel-sigma-algebra.md`
- `items/def-bounded-c-one-domain-boundary-charts-and-outward-normal.md`
- `items/def-bounded-piecewise-c-one-euclidean-domain.md`
- `items/def-ck-euclidean-maps-and-diffeomorphisms.md`
- `items/def-closed-and-exact-c1-vector-fields.md`
- `items/def-codimension-and-hypersurface.md`
- `items/def-complete-ordered-field.md`
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md`
- `items/def-complex-exponential.md`
- `items/def-complex-numbers-and-arithmetic.md`
- `items/def-countable-choice.md`
- `items/def-cross-product-in-r3.md`
- `items/def-dirac-delta-and-its-derivatives.md`
- `items/def-directional-and-partial-derivatives.md`
- `items/def-distribution.md`
- `items/def-distributional-derivative.md`
- `items/def-divergence-and-curl-of-a-c1-vector-field.md`
- `items/def-embedded-submanifold-and-slice-chart.md`
- `items/def-euclidean-inner-product.md`
- `items/def-fixed-support-test-function-frechet-space.md`
- `items/def-improper-integral-at-a-finite-endpoint.md`
- `items/def-integrable-real-and-complex-functions-and-their-integrals.md`
- `items/def-integral-of-a-nonnegative-simple-function.md`
- `items/def-integral-over-a-measurable-set.md`
- `items/def-jacobian-matrix-and-gradient.md`
- `items/def-l-one-of-a-measure.md`
- `items/def-measure-null-set-and-almost-everywhere.md`
- `items/def-metric-ball.md`
- `items/def-metric-compactness.md`
- `items/def-metric-continuity.md`
- `items/def-metric-topology.md`
- `items/def-metric-uniform-continuity.md`
- `items/def-mixed-improper-integral.md`
- `items/def-multidimensional-darboux-integral.md`
- `items/def-multidimensional-darboux-sums.md`
- `items/def-multidimensional-grid-partition.md`
- `items/def-multidimensional-rectangle-and-volume.md`
- `items/def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions.md`
- `items/def-null-and-content-zero-in-rn.md`
- `items/def-oriented-unit-normal-and-flux-of-a-surface-patch.md`
- `items/def-positive-orientation-for-elementary-region-boundaries.md`
- `items/def-regular-distribution-from-a-locally-integrable-function.md`
- `items/def-riemann-integral-over-a-jordan-set.md`
- `items/def-scalar-and-vector-line-integrals-along-piecewise-c1-paths.md`
- `items/def-star-shaped-open-subset-of-rn.md`
- `items/def-surface-area-and-scalar-surface-integral-of-a-patch.md`
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`
- `items/def-test-function-space-d-of-an-open-set.md`
- `items/def-the-induced-boundary-chain-of-a-c2-surface-patch.md`
- `items/def-type-i-type-ii-and-elementary-green-regions.md`
- `items/def-vector-potential-of-a-c1-vector-field.md`
- `items/lem-a-vector-line-integral-pulls-back-to-the-parameter-region.md`
- `items/lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals.md`
- `items/lem-c-one-images-of-content-zero-compact-sets-have-content-zero.md`
- `items/lem-closed-subset-of-a-compact-space-is-compact.md`
- `items/lem-compact-null-iff-content-zero-in-rn.md`
- `items/lem-complex-conjugation-and-modulus-laws.md`
- `items/lem-cross-product-is-bilinear-alternating-and-orthogonal.md`
- `items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md`
- `items/lem-null-sets-in-rn-closed-under-subsets-and-countable-unions.md`
- `items/lem-rigidity-of-alternating-multilinear-matrix-functions.md`
- `items/lem-standard-basis-of-f-n.md`
- `items/lem-surface-integral-is-independent-of-c-one-boundary-charts.md`
- `items/lem-test-function-cutoffs-and-euclidean-localization.md`
- `items/lem-the-divergence-and-curl-of-a-cross-product.md`
- `items/lem-the-stokes-integrand-identity-on-a-c2-patch.md`
- `items/lem-uniform-integral-error-bound.md`
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md`
- `items/prop-the-nonnegative-integral-agrees-with-the-simple-integral.md`
- `items/thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential.md`
- `items/thm-absolute-improper-convergence-implies-convergence.md`
- `items/thm-additivity-over-subintervals.md`
- `items/thm-algebra-of-derivatives.md`
- `items/thm-cauchy-schwarz-and-the-euclidean-norm.md`
- `items/thm-chain-rule-for-total-derivatives.md`
- `items/thm-clairaut-schwarz-mixed-partials.md`
- `items/thm-compact-subset-is-closed-and-bounded.md`
- `items/thm-compactness-under-continuous-maps.md`
- `items/thm-comparison-test-for-improper-integrals.md`
- `items/thm-complex-exponential-addition-and-real-extension.md`
- `items/thm-complex-exponential-is-entire-with-derivative-itself.md`
- `items/thm-complex-numbers-form-a-field.md`
- `items/thm-continuous-functions-on-compact-jordan-sets-are-integrable.md`
- `items/thm-differentiation-under-the-integral-sign-on-a-compact-rectangle.md`
- `items/thm-divergence-theorem-for-bounded-piecewise-c-one-domains.md`
- `items/thm-extreme-value-metric.md`
- `items/thm-graph-of-continuous-function-on-a-compact-set-has-content-zero.md`
- `items/thm-greens-theorem-for-finite-unions-of-elementary-regions.md`
- `items/thm-heine-borel-rn.md`
- `items/thm-heine-cantor-metric.md`
- `items/thm-integral-triangle-inequality.md`
- `items/thm-jordan-boundary-criterion.md`
- `items/thm-kernel-and-fibres-of-complex-exponential.md`
- `items/thm-linearity-of-the-integral.md`
- `items/thm-linearity-of-the-lebesgue-integral-on-l-one.md`
- `items/thm-local-finite-order-characterization-of-distributions.md`
- `items/thm-monotonicity-of-the-integral.md`
- `items/thm-newton-leibniz-with-interior-derivative.md`
- `items/thm-of-square-roots.md`
- `items/thm-poincare-lemma-for-star-shaped-domains.md`
- `items/thm-surface-area-density-is-cross-product-norm.md`
- `items/thm-the-classical-stokes-theorem-for-a-c2-surface-patch.md`
- `items/thm-the-lebesgue-integral-respects-almost-everywhere-equality.md`

Additional evidence: `research/physics-em-sr-40-2026-10-08-batch-13.pages.json`, `.proof-contracts.json`, `.notes.md`, and `research/math-imports.json`; the applicable reader brief and workspace/content rules. Contracts and author notes were compared with the current proofs, not treated as verdicts.

## Source checks

- [Lebl, Green’s theorem](https://www.jirka.org/ra/html/sec_mvgreenstheorem.html): read the current theorem and complete type-III proof, lines 625–669, and the finite-gluing explanation at 684–686. This agrees with the parameter-space repair, while revealing the outdated/unspecified theorem-number locator.
- [OpenStax 6.7](https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem), Theorem 6.19, and [OpenStax 6.8](https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem), Theorem 6.20: opened both to verify the exact link/section mismatches. These are different theorems.
- [San Diego phasor notes](https://home.sandiego.edu/~ekim/e171f00/lectures/phasors): inspected extracted PDF text around pages 8–10, the averaging/conjugation warning and formulas. The screenshot request failed; no complete visual or whole-PDF reading is claimed. The local period-average proof was checked independently from the exact exponential suppliers and FTC. Two attempted Lebl HTML integral-rule URLs failed; no source-reading claim is made for those failed requests.

## Uneditable findings

The published snapshots are read-only. “Fatal” here follows the reader rule that a defective claim or citation cannot be waived as a short proof omission; it does not mean the locally proved Stokes/Green statements have been refuted. No assigned-item defect remains in the findings JSON.

- `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`, Proof, step 5.1: the assertion that curl F is a C1 field: **false-claim**. Only F in C1 is assumed. For F(x1,x2,x3)=(0,0,x1|x1|), curl F=(0,-2|x1|,0), which is continuous but not differentiable at x1=0. The flux definition requires only continuity, so the theorem can retain its statement by correcting this false regularity assertion; no C2 premise is available. Assigned consumer: `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`.
- `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`, Frontmatter, sources.references[1]: OpenStax Theorem 6.19 URL: **citation-inaccurate**. The reference names Theorem 6.19 but links https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem, inspected as section 6.8 / Theorem 6.20 (divergence). The named Stokes theorem is at https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem, Theorem 6.19. Correct the URL or provide the actual intended locator; the local proof is separately present. Assigned consumer: `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`.
- `lem-a-vector-line-integral-pulls-back-to-the-parameter-region`, Frontmatter, sources.references[0]: OpenStax section 6.7 URL: **citation-inaccurate**. The reference names OpenStax section 6.7 but links https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem, which is section 6.8. Both linked sections were opened; the intended section is https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem. Correct the section URL and identify the relevant argument. This is a citation defect in a published read-only supplier, not a refutation of its local proof. Assigned consumer: `lem-em-moving-flux`.
- `lem-the-stokes-integrand-identity-on-a-c2-patch`, Frontmatter, sources.references[0]: OpenStax section 6.7 URL: **citation-inaccurate**. The reference names OpenStax section 6.7 but links https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem, which is section 6.8. Both linked sections were opened; the intended section is https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem. Correct the section URL and identify the relevant argument. This is a citation defect in a published read-only supplier, not a refutation of its local proof. Assigned consumer: `lem-em-moving-flux`.
- `thm-greens-theorem-for-finite-unions-of-elementary-regions`, Frontmatter, sources.references[0].title: Lebl Theorem 10.6.1: **citation-inaccurate**. The currently linked https://www.jirka.org/ra/html/sec_mvgreenstheorem.html identifies Green as Theorem 10.6.4, with its type-III proof immediately following (lines 625-669); 10.6.1 is a domain definition. A dated older edition might explain the numbering, but none is specified. Identify that edition or update the locator. The source argument and the local finite-gluing proof agree on the asserted identity. Assigned consumer: `lem-em-moving-flux`.

## Interface propagation and page verdicts

The in-batch example was checked against the repaired suppliers, including its connected parameter square, injective positive-scale slices, orientation, both signs, a prime equal to zero, and its direct choice-free calculation. Its citations and boundary contract were refreshed. Cross-batch mathematical consumers were outside this reader’s edit/review assignment and need the lead’s interface propagation check; no physical interface was edited here.

Potential direct consumers named by current run manifests (metadata only; their authored proofs were not reviewed here):

- `def-em-complex-plane-wave` → `def-em-ideal-harmonic-dipole-model`, `def-em-monochromatic-source-free-phasors`, `def-em-plane-wave-definition`, `ex-em-residual-lorenz-example`, `ex-em-vacuum-energy-flow-example`, `pthm-em-medium-plane-wave-fields`.
- `def-em-moving-patch` → `def-em-moving-circuit-geometry`.
- `def-em-surface-distribution` → `def-em-weak-sources`, `ex-em-uniform-ball-coulomb`, `post-em-electrostatic-conductor-model`, `pthm-em-conductor-surface-charge`, `pthm-em-electrostatic-bvp-existence`, `pthm-em-fixed-vacuum-jumps`, `pthm-em-material-stationary-jumps`.
- `lem-em-continuous-localization` → `ex-em-compact-variation-example`, `ex-em-stationary-not-minimum`, `lem-em-fundamental-variation-lemma`.
- `lem-em-coulomb-dipole-remainder` → `lem-em-magnetic-dipole-remainder`, `pthm-em-electric-dipole-expansion`, `pthm-em-electric-general-multipoles`, `thm-em-spherical-multipole-basis`.
- `lem-em-interface-derivatives` → `ex-em-dielectric-sphere-example`, `ex-em-uniform-ball-coulomb`, `pthm-em-electrostatic-bvp-existence`, `pthm-em-fixed-vacuum-jumps`, `pthm-em-material-stationary-jumps`.
- `lem-em-joint-smooth-potentials` → `def-em-gauge-transformation`, `ex-em-pure-gauge-fields`, `pthm-em-gauge-invariance`, `pthm-em-gauge-reachability`, `pthm-em-lorenz-gauge-wave-form`, `pthm-em-spacetime-potentials`.
- `lem-em-moving-flux` → `pthm-em-motional-emf`.
- `lem-em-period-average` → `ex-em-plane-wave-infinite-energy`, `ex-em-rectangular-aperture`, `pthm-em-classical-interference`, `pthm-em-dipole-scattering-cross-section`, `pthm-em-guide-dispersion-energy`, `pthm-em-medium-plane-wave-fields`, `pthm-em-normal-fresnel`, `pthm-em-oblique-fresnel`, `pthm-em-scalar-aperture-diffraction`, `pthm-em-wave-energy-average`, `texp-em-radiation-pressure-example`, `thm-em-causal-dispersive-response`.
- `lem-em-point-current-continuity` → `def-em-weak-sources`, `ex-em-nonconserved-switched-charge`, `ex-em-smooth-and-point-source-types`, `lem-em-point-retarded-potential-and-fields`, `thm-em-retarded-point-distributional-maxwell`, `thm-em-retarded-root-and-fields`.
- `lem-em-quadratic-stress-identity` → `pthm-em-angular-balance`, `pthm-em-coupled-total-conservation`, `pthm-em-momentum-balance`.

- **A page `em-elementary-mathematical-prerequisites`:** within-scope defects repaired, prose synchronized, and local checks clean; requires Step 5b resolution of the five published-supplier findings and interface propagation before acceptance. All items remain present and draft; no withdrawal proposed.
- **B page `em-elementary-mathematical-prerequisites-examples`:** worked computation independently checked and its item repaired; B prose remains unchanged. Its published Stokes supplier findings remain for the lead.

## Final validation and limitations

All thirteen changed items received reflow and precheck after their material repairs. Three affected items received another reflow/precheck after the contract check exposed malformed links. Final strict contract check: 14/14 entries, 0 errors, 2 advisory shotgun-bracket warnings (localization 3.1 and radial potentials 4.1); these steps actually use the cited facts and the warning is not a soundness verdict. Rendercheck: all 14 items and both pages, exit 0. Final proof-layout: all 13 changed item paths in one invocation, 55 numbered steps, 0 defects. No changed item carries verification.judge; no audit/judge/acceptance stamp was added. No whole-run gate was attempted.

Opened all 14 assigned draft items and both pages, plus the definitions/statements of 109 direct imported suppliers and the relevant complete Stokes, pullback, integrand and Green proofs. Repaired 13 assigned items and A-page prose; validated their formatting, rendering and batch contracts. Did not exhaustively audit every transitive supplier proof or retrieve every bibliography source. Cross-batch consumers of changed mathematical interfaces were not reviewed; they require lead-directed propagation. Phasor PDF text was inspected only in the relevant averaging section; screenshot retrieval failed. Published suppliers remained byte-identical to import pins.

Blockers to batch acceptance: published-owner citation/regularity repairs and out-of-scope consumer review. These do not block delivery of this reader report and its bounded repairs.
