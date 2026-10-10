# Reader 19 — batch 19

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a review; no acceptance stamps.

## Review outcome

Both assigned pages and all three assigned items reviewed. Confirmed defects repaired in the owned draft items and affected contracts. No remaining uneditable defect identified. This is a reader report, not an adjudication or acceptance stamp.

## Assigned carriers before repair

- `items/thm-em-causal-dispersive-response.md`: raw SHA-256 `e39c7198c4fc3d22900da541c96916664c8020959473a40e9648f09b294ed04d`.
- `items/thm-em-radiation-asymptotic-flux.md`: raw SHA-256 `bd76ebab5d0b4e74873126f9f80515a5b43ae10061a3b7db6a3d05c398ce138e`.
- `items/ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries.md`: raw SHA-256 `b1d08dbf59943c559f8ef60d9c79e56617ed4796b8b6c52e691c79579aa72aaf`.

## Source reading

Tong, Kinetic Theory chapter 4, §§4.1.1–4.1.3, printed pp. 80–86, equations (4.4)–(4.15): causal transform convention, Hermitian dissipative part and dispersion signs checked. The notes impose additional decay; the local L1 lemma proves its own exact decay and contour hypotheses. URL: https://davidtong.org/pdfs/teaching/kinetic-theory/kinetic4.pdf .

Fitzpatrick, Retarded potentials, equations (509)–(510), and Retarded fields, equations (533)–(542), (548)–(555): conventions and cross-product signs checked. URLs: https://farside.ph.utexas.edu/teaching/em/lectures/node50.html and https://farside.ph.utexas.edu/teaching/em/lectures/node52.html . Uniform error constants and exact flux limits require the local proof, not the notes’ qualitative asymptotics.

No reported measurements or statistical inference occur in this batch.

## Repairs and evidence

- `thm-em-causal-dispersive-response`, Facts [F12]: separate the real Euclidean inner product from its complex-bilinear extension and the conjugated pairing. The old wording attributed a Euclidean norm to the complex-bilinear form; at x=i in dimension one its square is -1. No statement or work formula changed. Contracts synchronized; final checks passed.

- `thm-em-radiation-asymptotic-flux`: define the potentials and derivatives on the open exterior |x|>a, then restrict the promised conclusions to r≥2a; explicitly zero-extend the supported spatial integrands. Supply the spatial differential-operator definitions and exact published smooth-power, composition, compactness and Euclidean inequality prerequisites. Step 3.1 now applies the affine substitution on open intervals and handles t=t0 separately. Step 3.2 explains the vector difference bound by a scalar projection and Cauchy–Schwarz. All field formulas, uniform constants and flux conclusions are preserved. Contracts synchronized; final checks passed.

- `ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries`, clause (ii), new steps 1.2–2.2 and conclusion 6.1: replace the unsupported inference that differing parameterizations alone imply differing limits by an explicit smooth conserved-source witness. Two published smooth bumps give rho=-partial_3(psi)f and J=(0,0,psi f′), with f quadratic near the chosen retarded time. The resulting V=2 C_psi e_3 gives strictly positive limit 2 mu0 C_psi²/(3 pi c). Coordinate symmetry computes the sphere integral, and the original fixed-time zero calculation remains. Explicitly retain the possibility that both limits vanish for a particular source. Add the exact exponential addition/real-extension supplier for step 3.1. Contracts synchronized; final checks passed.

- Contracts: synchronized the three owned entries in both batch 19 and the run aggregate, preserving other entries. Added exact new supplier statements/definitions and current step-use maps. Replaced inaccurate radiation temporal/spatial endpoint explanations and the overstrong V=0 finite-field interpretation; corrected work/M equivalence step locators, literal vertical-tab corruption in varphi/varepsilon evidence, and the example’s erroneous direction-of-equivalence records. Main theorem now defines Hermitian and positive semidefinite matrices and checks M*=M; nonimplication is established by the separate companion witness, rather than inferred merely from an unused hypothesis. Final scoped checks passed.

- Final definition clarification: the causal theorem’s compact branch and the example’s bump fact explicitly define support as the closure of the nonzero locus.
- Formatting repair: the initial insertion introduced escaped-character corruption, detected during checks and corrected before handoff. The example’s added construction and flux steps are now 1.2 and 2.2 in dependency layers; its final conclusion is 6.1. Current source has no unintended control characters. No stale verification.judge record was present in any changed item; no judge or independent-audit record was added.
- Consumer check: the assigned example was checked against both repaired theorem interfaces. All original kernel hypotheses, field formulas, error constants, and promised flux conclusions remain. The exterior definition is made on an open neighbourhood of the originally claimed radial region. No physical public interface or empirical premise was altered.

## Opened inventory

Assigned pages (complete prose and placement):

- `library/classical-electromagnetism-mathematics/em-causal-response-and-radiation-prerequisites.md` (A).
- `library/classical-electromagnetism-mathematics/em-causal-response-and-radiation-prerequisites-examples.md` (B).

Assigned items (titles, metadata, statements/example, facts, complete proof/verification and contracts):

- `items/thm-em-causal-dispersive-response.md`.
- `items/thm-em-radiation-asymptotic-flux.md`.
- `items/ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries.md`.

Supplier arguments inspected in full across the indicated source sections:

- `items/lem-em-integrable-causal-dispersion.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.
- `items/lem-em-parameter-integrals.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.
- `items/lem-em-period-average.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.
- `items/lem-em-spherical-mean-family-smoothness.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.
- `items/lem-em-spherical-mean-wave-identity.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.
- `items/lem-smooth-bump-between-concentric-euclidean-balls.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.
- `items/thm-em-wave-cauchy-kirchhoff.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.
- `items/thm-the-standard-flat-function-is-smooth-and-flat-at-zero.md`: Statement, Facts & Assumptions, Proof; also applicable Remarks.

Additional supplier statements/definitions inspected (not claimed as whole-item independent audits):

- `items/cor-c-one-change-of-variables-for-l-one-functions.md`.
- `items/cor-cauchy-theorem-for-null-homotopic-loops.md`.
- `items/cor-cauchy-theorem-star-shaped-domain.md`.
- `items/cor-complex-differentiability-implies-continuity.md`.
- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`.
- `items/cor-continuous-functions-are-borel-measurable.md`.
- `items/cor-exponential-reciprocal-and-positivity.md`.
- `items/cor-mean-value-theorem.md`.
- `items/cor-ml-estimate-for-complex-line-integrals.md`.
- `items/def-absolutely-continuous-function.md`.
- `items/def-ck-euclidean-maps-and-diffeomorphisms.md`.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md`.
- `items/def-complex-differentiability-holomorphic-and-entire.md`.
- `items/def-complex-domain.md`.
- `items/def-complex-exponential.md`.
- `items/def-complex-line-integral-over-a-rectifiable-path.md`.
- `items/def-complex-primitive.md`.
- `items/def-countable-choice.md`.
- `items/def-cross-product-in-r3.md`.
- `items/def-dependent-choice.md`.
- `items/def-divergence-and-curl-of-a-c1-vector-field.md`.
- `items/def-em-complex-plane-wave.md`.
- `items/def-euclidean-inner-product.md`.
- `items/def-integrable-real-and-complex-functions-and-their-integrals.md`.
- `items/def-integral-over-a-measurable-set.md`.
- `items/def-jacobian-matrix-and-gradient.md`.
- `items/def-l-one-of-a-measure.md`.
- `items/def-real-exponential-function-and-e.md`.
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`.
- `items/def-the-standard-flat-function.md`.
- `items/def-the-standard-smooth-step-function.md`.
- `items/lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness.md`.
- `items/lem-complex-conjugation-and-modulus-laws.md`.
- `items/lem-complex-exponential-series-converges-everywhere.md`.
- `items/lem-derivative-of-an-integral-with-moving-endpoints.md`.
- `items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md`.
- `items/lem-euclidean-chart-measure-agrees-with-polar-surface-measure.md`.
- `items/lem-exponential-decay-dominates-every-inverse-power.md`.
- `items/lem-first-moment-of-the-unit-sphere-vanishes.md`.
- `items/lem-surface-integral-is-independent-of-c-one-boundary-charts.md`.
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md`.
- `items/thm-algebra-of-derivatives.md`.
- `items/thm-arithmetic-and-lattice-operations-preserve-measurability.md`.
- `items/thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral.md`.
- `items/thm-c1-lipschitz-ac-bv-hierarchy.md`.
- `items/thm-cauchy-schwarz-and-the-euclidean-norm.md`.
- `items/thm-chain-rule-for-complex-derivatives.md`.
- `items/thm-chain-rule-for-total-derivatives.md`.
- `items/thm-ck-euclidean-maps-closed-under-algebra-and-composition.md`.
- `items/thm-complex-exponential-addition-and-real-extension.md`.
- `items/thm-complex-exponential-is-entire-with-derivative-itself.md`.
- `items/thm-continuity-under-the-integral-sign.md`.
- `items/thm-continuous-partials-and-cauchy-riemann-imply-holomorphic.md`.
- `items/thm-derivative-of-exponential.md`.
- `items/thm-differentiation-under-the-integral-sign.md`.
- `items/thm-differentiation-under-the-integral-sign-on-a-compact-rectangle.md`.
- `items/thm-divergence-theorem-for-bounded-c-one-euclidean-domains.md`.
- `items/thm-domain-of-dependence-and-local-uniqueness.md`.
- `items/thm-dominated-convergence.md`.
- `items/thm-existence-of-complex-line-integrals-on-rectifiable-paths.md`.
- `items/thm-extreme-value-metric.md`.
- `items/thm-fundamental-theorem-for-complex-line-integrals.md`.
- `items/thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions.md`.
- `items/thm-heine-borel-rn.md`.
- `items/thm-heine-cantor-metric.md`.
- `items/thm-integral-triangle-inequality.md`.
- `items/thm-integration-by-parts.md`.
- `items/thm-integration-by-parts-for-absolutely-continuous-functions.md`.
- `items/thm-linearity-of-the-lebesgue-integral-on-l-one.md`.
- `items/thm-monotone-convergence-for-the-integral.md`.
- `items/thm-newton-leibniz-with-interior-derivative.md`.
- `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`.
- `items/thm-real-power-agrees-with-rational-exponent.md`.
- `items/thm-real-power-continuity-and-derivatives.md`.
- `items/thm-riemann-stieltjes-and-parametric-contour-integrals-agree.md`.
- `items/thm-sine-and-cosine-derivatives.md`.
- `items/thm-the-lebesgue-integral-respects-almost-everywhere-equality.md`.
- `items/thm-uniform-limit-interchanges-complex-line-integrals.md`.

Instruction and ownership context: ../CLAUDE.md, workspace CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, ../PHYSICS-CONTENT-MODEL.md, briefs/reader.md, batch 19 manifest and proof contracts, run owner directions concerning causal response/radiation, and applicable research/math-imports.json registry entries. Current item carriers were the review evidence; historical decisions were not treated as verdicts. Published home metadata for the added bump and power suppliers was checked in the current plan; their P pages precede this batch. No plan entry or imported carrier was edited.

## Mathematical checks

For causal response, checked the componentwise L1 majorant, boundedness, continuity, causality, entire compact-kernel transform, twice-integrated decay, slit-domain contour, indentation signs, boundary cancellation and absolute tails. The integrable supplier supplies the exact AC/DC branch, the limit K(s)→0, the integration-by-parts 1/|z| bound, vertical contour shifts and boundary C1 divided differences. Checked the scalar period average and the conjugate-transpose quadratic-form identity without imposing an unjustified symmetry on the matrix.

For radiation, checked the retarded derivative signs, polar/Duhamel factors of c, conservation on the tilted source-time slice, uniform geometry bounds and both explicit error constants. The stated constants follow by decomposing each source-derivative term into the geometric difference times the retarded source plus the leading 1/r coefficient times the time difference; thus the displayed single a² coefficients are valid. The vector time-difference estimate uses a scalar projection. Checked the transverse leading field, cross-product flux coefficient, uniform 1/r remainder after multiplying by r² and finite sphere integration. Source derivatives zero outside the compact support make the stipulated suprema bound all shifted arguments.

For the example, checked the exponential integrals and limits using the nonnegative series, the upper-half-plane rational transform and its strict work sign for nonzero amplitude. Checked the fixed-observation-time zero region and the explicit conserved-source witness. Its positive sphere integral proves nonreplacement for the full source class while retaining the zero-source exception.

## Validation

- Reflow run on each changed item after material edits; final runs left the source unchanged.
- Precheck: all three items pass; the example’s proposed renumbering was adopted and rechecked.
- Batch proof contract: node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-19.proof-contracts.json --strict — 3/3 items, zero errors or warnings. Run aggregate checked with the exact three item IDs — same result. Only these three contract entries were updated in the aggregate.
- Rendercheck: exact three item paths and both assigned page paths — five files pass real KaTeX and renderer YAML checks. The two final definition edits were rendered again successfully.
- Focused depcheck: --items-file containing exactly the three manifest IDs, --json — exit 0, zero errors or warnings; checks both assigned home pages and prerequisite graph cycles (1250 dependency-context items, 310 dependency-context pages). An earlier attempt used unsupported --items, causing an unscoped failure on unrelated corpus metadata; that is not a scoped pass or a mathematical finding. The corrected selection passed.
- Final required command: node tools/physics-support/proof-layout.mjs items/thm-em-causal-dispersive-response.md items/thm-em-radiation-asymptotic-flux.md items/ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries.md — 3 items, 34 steps, zero defects.

## Page verdicts and unresolved findings

- A page em-causal-response-and-radiation-prerequisites: reader verdict — no remaining identified defect after item repairs. Its summary matches the two conditional mathematical theorems and distinguishes their use from empirical physics.
- B page em-causal-response-and-radiation-prerequisites-examples: reader verdict — no remaining identified defect after the item repair. Its general nonreplacement claim is now witnessed by a strictly positive retarded-time limit. B-page prose was not edited.
- Uneditable findings: none identified. No withdrawal proposed and no substantive blocker remains.

## Coverage limits

This review covers the assigned carriers, the listed supplier definitions/statements and complete listed supplier arguments. It does not re-audit every proof in the 1250-item prerequisite closure, every outside-batch consumer, or full source textbooks. Source reading was limited to the relevant linear-response sections and retarded-potential/field passages stated above. Local checks establish format, citation correspondence and graph consistency; they are not independent mathematical acceptance or evidence about nature.

## Final carrier hashes

- `items/thm-em-causal-dispersive-response.md`: raw SHA-256 `d5d912c7af75fc0f46578b024f0ce474881abb9a63929b39abd2e25934190955`.
- `items/thm-em-radiation-asymptotic-flux.md`: raw SHA-256 `4377f1e922f446ad568ff98a73730c1786068440ecf80cf31be2967b68eef8b2`.
- `items/ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries.md`: raw SHA-256 `97c8ba48800113a98b01406e24a021e835f249cc53f13a90f4ea554299ad23a8`.
