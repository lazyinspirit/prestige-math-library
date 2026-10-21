# Step 3a reader report — batch 12

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Scope: batch `12`

## Opened inventory

### Assigned pages

- `library/inverse-problems/feature-inference-and-map-testing.md` — A page, YAML frontmatter only; opened and checked against the batch manifest.
- `library/inverse-problems/feature-inference-and-map-testing-examples.md` — B page, YAML frontmatter only; opened and checked against the batch manifest.

Both pages preserve `status: draft` and `page_layout: compact-v1`; neither has a Markdown summary body.

### Assigned items, reviewed in dependency order

1. `items/def-ip-feature-estimability-through-adjoint-range.md`
2. `items/thm-ip-isonormal-gaussian-posterior-law.md`
3. `items/alg-ip-gaussian-map-feature-test.md`
4. `items/thm-ip-map-test-level-and-power.md`
5. `items/thm-ip-unrestricted-map-test-can-have-level-one.md`
6. `items/ex-ip-adjoint-range-feature-is-estimable.md`
7. `items/ex-ip-closure-only-feature-is-not-exactly-estimable.md`
8. `items/ex-ip-non-eigenfeature-map-test-has-level-one.md`

The exact statements, Facts & Assumptions, proofs or algorithm, remarks, references, metadata, and diagrams were checked for these items.

### Dependency context opened

The assigned A page's required pages were opened: `statistical-inverse-experiments-and-white-noise`, `linear-operators-pseudoinverses-and-picard-criteria`, `hilbert-space-geometry-and-riesz-representation`, `bayesian-models-priors-and-posterior-laws`, `gaussian-process-priors-and-posterior-laws`, `gaussian-process-support-and-concentration`, `numerical-inverse-problems-and-regularization-error`, `detection-and-quantification-limits`, and `continuous-functional-calculus-for-self-adjoint-and-normal-operators`. The B page's additional required page `spectral-regularization-and-parameter-choice` was also opened. These supplied page files were context only; their prose was not treated as proof of the assigned claims.

The direct item-supplier interfaces used by the assigned proofs were opened, including the current-run draft suppliers `def-ip-isonormal-white-noise-experiment` (batch 7) and `def-ip-compact-linear-inverse-model` (batch 2). Supplier sections inspected were the relevant Definition or Statement sections; this was not a transitive proof re-audit. The opened supplier IDs were:

- Foundations and experiment: `def-countable-choice`, `def-axiom-of-choice`, `def-hilbert-space`, `def-ip-isonormal-white-noise-experiment`, `def-statistical-experiment`, `def-random-element-and-real-random-variable`, `def-l-p-space-as-a-quotient-by-null-functions`, `lem-law-of-a-random-element-is-a-probability-measure`, `def-independent-random-elements`, `def-bayesian-model-as-prior-and-sampling-kernel`, `def-bayesian-posterior-as-regular-conditional-law`, `def-gaussian-process`, `def-borel-gaussian-random-element-on-a-separable-banach-space`, and `lem-measurable-functions-preserve-independence`.
- Hilbert and operator facts: `thm-riesz-representation-for-hilbert-space`, `def-hilbert-space-adjoint`, `def-bounded-linear-operator`, `def-self-adjoint-positive-unitary-and-normal-operator`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `def-isometry-coisometry-and-partial-isometry`, `thm-cauchy-schwarz-in-an-inner-product-space`, `lem-hilbert-tikhonov-normal-operator-invertible`, `lem-positive-square-root-of-a-compact-positive-operator`, `lem-compositions-with-a-compact-operator-are-compact`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-hilbert-space-fourier-expansion`, and `thm-parseval-equivalences-for-a-complete-orthonormal-family`.
- Probability, trace, and measurability facts: `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`, `lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent`, `def-trace-class-operator`, `def-hilbert-schmidt-operator`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-trace-is-absolutely-convergent-and-basis-independent`, `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`, `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators`, `thm-hilbert-schmidt-operators-form-a-two-sided-ideal`, `thm-hilbert-schmidt-norm-is-basis-independent`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-measurability-of-integration-against-a-kernel`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-first-borel-cantelli`, and `lem-standard-normal-cdf-quantiles-and-symmetry`.
- Example facts: `def-ip-compact-linear-inverse-model`, `lem-finite-rank-operators-are-compact`, `def-square-summable-family-on-an-arbitrary-index-set`, `lem-square-summable-sequences-form-a-hilbert-space`, `thm-norm-limit-of-compact-operators-is-compact`, and `thm-p-series-real-exponents`.

## Mathematical review and edits

- `def-ip-feature-estimability-through-adjoint-range`: the adjoint identity gives the probe mean; testing unbiasedness at `x = K^*Φ − hφ` proves necessity, and range membership supplies the reverse direction. The noise covariance gives the stated variance. No edit.
- `thm-ip-isonormal-gaussian-posterior-law`: the operator identities give the posterior covariance and residual covariance; the coordinate series is square-summable almost surely, its reconstruction is measurable, and the residual is independent of the full cylinder field after the basis-coordinate completion argument. The convolution kernel is measurable and satisfies the RCD identity. The feature identity is correctly stated only almost surely for each fixed feature, with a feature-dependent exceptional set. The proof mathematics and claim are sound. **Edit:** inserted blank lines between numbered proof steps to meet the required proof layout. No proof text, tags, facts, dependencies, or statement changed.
- `alg-ip-gaussian-map-feature-test`: the definition specifies the model conditions, feature input, probe/threshold calculation, field input, strict comparison, and both output branches. It is a procedure definition and makes no unsupported correctness or complexity claim. No edit.
- `thm-ip-map-test-level-and-power`: the raw tail formula follows from the scalar normal law, the calibrated threshold bounds the null mean by the dual residual norm, and the zero-probe branch never rejects. The common-eigenbasis construction and coordinate minimization verify the weighted identity. The polar-factorization diagram matches the stated real factorization and the proof; no additional diagram is required. The same-sample tuning caveat is preserved. The proof mathematics and claim are sound. **Edit:** inserted blank lines between numbered proof steps; no proof text, tags, facts, dependencies, statement, remark, or diagram changed.
- `thm-ip-unrestricted-map-test-can-have-level-one`: the resolvent transform `A = B(B+ε²I)^{-1}` has the same eigenvectors as `B`; the orthogonal projection of `Ah` onto `h⊥` gives a null ray with linearly diverging test mean and fixed positive variance. The supremum is one. No edit to the mathematics. **Edit:** inserted blank lines between numbered proof steps; no proof text, tags, facts, dependencies, or statement changed.
- `ex-ip-adjoint-range-feature-is-estimable`: the finite-rank map is compact, its adjoint sends `(1,0)` to the feature vector, and the observation has the claimed mean and variance. No edit.
- `ex-ip-closure-only-feature-is-not-exactly-estimable`: the diagonal map is bounded and compact by finite-rank truncation, finitely supported sequences lie in the adjoint range and are dense, while a preimage of `(1/j)` would be the nonsquare-summable constant sequence. No edit.
- `ex-ip-non-eigenfeature-map-test-has-level-one`: `B = diag(1,4)`, `R = diag(1/2,1/5)`, `Φh = (1/2,2/5)`, `c_h = 0`, and the null ray has mean `3t/10` and variance `41/100`; the displayed tail is `G(3t/√41)`. No edit.

All assigned statement/definition/example sections are uninterrupted by hyperlinks; their references occur after the complete section. No TikZ or other diagram occurs in the two example items. The A and B page inventories match the manifest and both page bodies are empty.

The three item edits are formatting-only. The affected proof contracts remain valid, no `verification.judge` entry was present in the changed items, and no reflow or precheck was needed because no mathematical content or metadata changed. The required final command, `node tools/proof-layout.mjs items/thm-ip-isonormal-gaussian-posterior-law.md items/thm-ip-map-test-level-and-power.md items/thm-ip-unrestricted-map-test-can-have-level-one.md`, reported `3 items, 15 steps, 0 defects`.

## Page verdicts

- `feature-inference-and-map-testing` (A): pass. The item inventory, `examples: []`, required-page list, draft status, and compact layout match the manifest; no summary body is present.
- `feature-inference-and-map-testing-examples` (B): pass. Its examples inventory and required pages match the manifest; `items: []`, draft status, compact layout, and empty body are correct.

## Source check

I inspected the relevant passages of Kretschmann and Werner, *Maximum a posteriori testing in statistical inverse problems*, [arXiv:2402.00686](https://arxiv.org/pdf/2402.00686): the indexed white-noise model (§1.1, PDF pp. 1–2); the posterior mean/covariance and MAP feature probe (§1.3 and Theorem 2.3); the weighted minimizer formula under compact T and commuting C₀,T*T (Theorem 2.4 and proof, PDF pp. 5–6); the exact normal-tail size formula (Theorem 2.5, PDF p. 6); the level-one statement that if C₀ commutes with T*T and the feature is not an eigenvector of C₀^(1/2)T*T C₀^(1/2), then the MAP level over the feature null half-space is one (Theorem 2.6 and proof, PDF pp. 6–7); the calibrated threshold σ‖Φ‖Q⁻¹(1−α)+‖T*Φ−φ‖_(V*) and its level-α bound (Theorem 2.12, PDF p. 10); and the caveat that same-sample, data-dependent prior tuning does not inherit the fixed-prior power formula (§3.2, PDF p. 18). Theorem 2.4 assumes compact T, narrower than the assigned statement; the local weighted-minimizer proof establishes the assigned bounded-K formulation directly. The assigned posterior proof also constructs the local cylinder-field kernel directly. I did not independently read the full Stuart, Giné–Nickl, or arXiv:2212.12897 texts and did not rely on them to close a proof gap.

## Uneditable defects and blockers

No uneditable mathematical defects were found in the assigned scope. The findings JSON has an empty `findings` array; the repaired proof-spacing issues are reported here rather than routed as findings.

**Native coverage blocker:** After the report and findings file were written, recomputed `autopilot status` still showed stage `3a-read` at `9/109 covered` and listed batch `12` among missing units. The stage definition requires a successful dispatch result receipt as well as the two output artifacts. This reader session did not produce that native dispatch receipt, and I did not create a synthetic one. The review artifacts are ready, but batch 12 is not yet credited by the run engine.
