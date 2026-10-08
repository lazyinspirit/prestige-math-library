# Reader 15 — batch 15

Run: `frontier-43-complex-representation-15`. Independent Step 5a review; no judgment or certification.

## Opened assigned inventory

- `library/complex-analysis/bergman-and-szego-kernels.md` (A).
- `library/complex-analysis/bergman-and-szego-kernels-examples.md` (B).

All 29 assigned item bodies, including frontmatter, facts, arguments and remarks, were opened. Review followed increasing supplier dependency level; the independent level-zero definitions and computations were read first. External supplier statements were checked before assessing their consumer uses.

- `items/lem-bergman-mean-value-l2-bound.md`.
- `items/lem-complex-hessian-domination-at-a-common-minimum.md`.
- `items/def-szego-kernel-smooth-bounded-domain.md`.
- `items/lem-monomial-integrals-over-disc-ball-and-polydisc.md`.
- `items/lem-complex-multinomial-theorem.md`.
- `items/lem-bergman-evaluation-bound-on-compact-subsets.md`.
- `items/lem-sphere-and-torus-monomial-integrals.md`.
- `items/lem-disc-hardy-traces-and-szego-reproducing.md`.
- `items/ex-polydisc-boundary-and-the-smooth-szego-hypotheses.md`.
- `items/def-bergman-space-and-kernel.md`.
- `items/lem-ball-hardy-traces-and-evaluation-bound.md`.
- `items/thm-bergman-basis-expansion-and-closedness.md`.
- `items/ex-square-integrable-entire-functions-vanish.md`.
- `items/thm-bergman-reproducing-projection-and-extremal.md`.
- `items/lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc.md`.
- `items/lem-bergman-kernel-smoothness-and-positive-diagonal.md`.
- `items/thm-bergman-kernel-biholomorphic-transformation.md`.
- `items/thm-model-domain-bergman-and-szego-kernels.md`.
- `items/def-bergman-metric-bounded-domain.md`.
- `items/ex-disc-monomial-bergman-basis-and-reproducing-check.md`.
- `items/ex-ball-monomial-norms-and-model-kernels.md`.
- `items/ex-half-plane-bergman-kernel-by-mobius-transport.md`.
- `items/ex-bergman-versus-szego-normalization-on-the-disc.md`.
- `items/ex-polydisc-bergman-product-and-distinguished-torus-kernel.md`.
- `items/thm-bergman-metric-positivity-and-biholomorphic-invariance.md`.
- `items/lem-bergman-determinant-over-kernel-invariant.md`.
- `items/lem-bergman-metric-determinants-of-ball-and-polydisc.md`.
- `items/thm-poincare-ball-and-polydisc-not-biholomorphic.md`.
- `items/fs-ball-and-polydisc-are-biholomorphic-for-n-at-least-two.md`.

## Initial review checkpoint (subsequently resolved below)

All assigned mathematics had been read. Confirmed repairs identified: mean-bound continuity citation dimension; boundedness scope in the smooth-kernel witness; incorrect basepoint equality and unjustified mixed quotient limit in the metric theorem; incorrect diagonal-minor description and radius endpoint in the model determinants; conjugated Fourier sums wrongly placed in the holomorphic Bergman space in the disc example; reversed paired signs in the half-plane modulus fact; missing uniform convergence and the dimension-one boundary exception in the distinguished-torus example. No withdrawal proposed.

## Sources consulted

- [Błocki, The Bergman Kernel and Metric](https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf), §1, printed pp. 1–5: evaluation and Riesz construction; transformation (1.2); model formulas; extremal formula; Theorem 1.1 and its complete argument through p. 5; metric invariance. The local proof avoids selecting a complete orthonormal system.
- [Lebl, Tasty Bits of Several Complex Variables](https://www.jirka.org/scv/scv.pdf), §5.2, printed pp. 160–165, Lemma 5.2.1, Proposition 5.2.2, Proposition 5.2.5 and exercises 5.2.2, 5.2.8–10; §5.3, printed pp. 165–166, trace closure and Examples/Exercises 5.3.1–3. Its general Szegő discussion omits details; the assigned disc and ball proofs supply regularity locally. §2.4, Proposition 2.4.9, printed p. 85: affine-line Levi test and complete relevant argument. §1.4, Theorem 1.4.4 and attribution: bidisc/ball inequivalence.
- [Stanley, Enumerative Combinatorics 1](https://math.mit.edu/~rstan/ec/ec1.pdf), §1.2, printed pp. 26–27, equations (1.23)–(1.24) and subsequent multinomial expansion. The factorial counting argument is given; expansion proof is left to the reader and supplied locally.

## Repair record

Eight item carriers and their affected contract entries were repaired as detailed below. All remain draft; no judgment or audit record was added.

### Repaired `lem-bergman-mean-value-l2-bound`

Facts F7 cited a one-variable result for several-variable continuity. Added the exact several-variable supplier; retained the one-variable citation for the disk slice. Evidence: the opened statements of `cor-complex-differentiability-implies-continuity` and `prop-holomorphic-functions-are-continuous-and-separately-holomorphic`. Claim unchanged.

### Repaired `lem-bergman-kernel-smoothness-and-positive-diagonal`

Proof 2.2 implicitly retained the conditional boundedness from 1.2. Made it explicit before forming the finite-volume constant witness. Nonfatal scope omission; claim unchanged.

### Repaired `ex-disc-monomial-bergman-basis-and-reproducing-check`

Proof 3.1 put conjugated (antiholomorphic) Fourier sums in A² and then paired them as though they were the original holomorphic sums. Replaced them by `T_N = sum conjugate(e_j(w)) e_j`, which converges in A², and used conjugate-linearity of the second slot. Evidence: the assigned expansion theorem, the opened first-variable-linear pairing, and direct finite orthonormal calculation. Formula unchanged.

### Repaired `ex-half-plane-bergman-kernel-by-mobius-transport`

Fact F3 reversed the paired signs: at z=i, |z+i|²=4 and |z−i|²=0. Corrected ∓ to ±. The Cayley-map proof already used the correct separate signs, and its kernel formula is unchanged.

### Repaired `thm-bergman-metric-positivity-and-biholomorphic-invariance`

Proof 1.3 asserted D(z)=|A(z)|²=M although A(z)=M. Corrected the square to M². Proof 4.1 silently used a smooth two-variable division result and a real second-order Taylor expansion, neither supplied. Replaced them with an explicit two-parameter residual estimate using the opened Banach-valued mean-value inequality twice; identified the mixed derivative directly, then used an explicit sequence and completeness to obtain the derivative representer (final step 4.1; mixed estimate is final step 2.2). Also corrected the evaluation singleton to {ζ}, stated X≠0 before the affine normalization, and treated X=0 in invariance. Statements, supremum attainment and invariant metric are preserved. Updated the proof contract and references to the final step numbers.

### Repaired `lem-bergman-metric-determinants-of-ball-and-polydisc`

F6 claimed that all deleted-row-and-column minors of a diagonal matrix are diagonal, which fails when different row and column indices are deleted; it also excluded r=0 although proof 2.1 uses it at the origin. Replaced this with the exact cofactor computation: diagonal cofactors have the displayed power, off-diagonal minors have a zero row, and the m=1 minor is 1. Added the scalar determinant rule from the opened Leibniz definition, closing its uncited use in 2.1. Kernel quotients and the strict comparison for m≥2 are unchanged; contract updated.

### Repaired `ex-polydisc-bergman-product-and-distinguished-torus-kernel`

The Example claimed a different boundary/surface construction without excluding m=1, where the torus is the smooth circle and the kernel is the normalized disc Szegő kernel. Qualified that comparison for m≥2 and recorded m=1 equality. Proof 1.2 inferred absolute convergence from a square sum; now a separate geometric absolute-sum calculation proves uniform convergence on the torus and puts the conjugate section in the Hardy closed span. Proof 2.1 called the extension analytic without proving local uniform convergence; an explicit coefficient-tail bound and the opened holomorphic-limit supplier now supply it, with bounded evaluation. Retained both formulas and the complete closed-span construction; updated contract.

### Repaired `def-bergman-metric-bounded-domain` and supplementary citations

The definition called its complex Hessian Hermitian without naming the mixed-partial commutation needed to establish that property. Added the explicit real-C²/Wirtinger calculation and the opened Clairaut–Schwarz supplier. The metric theorem now cites the same commutation for its mixed derivative calculation; the definition’s boundary contract records this justification. Also corrected the disc example’s source description: Lebl Exercise 5.2.9 concerns the ball, while the disc norm and complete basis are supplied locally.

Precheck requested canonical phase order for the added metric proof step. Adopted its mathematically equivalent order: the mixed quotient is now 2.2, positivity is 3.1, and the derivative representer is 4.1. All proof references and contract uses were updated.

The metric theorem F9 also explicitly names the already opened logarithm-derivative supplier for the computation in 1.3.

The strict contract checker caught stale citation-use mappings after the rewrites and disallowed a Proof-section citation. Updated the mappings and proved the short complex geometric identity directly inside torus step 1.2; removed its unused Cauchy-product fact/dependency. The mathematical claims are unchanged.

## Opened external supplier inventory

The following 178 external items were opened for their exact statements, definitions, conventions, or relevant clauses. These reads establish the hypotheses and direction of the uses in this batch; they are not a new independent audit of every foundational proof. Truncated command output was followed by bounded reads of the missing required clauses.

- `items/cor-c-one-change-of-variables-for-l-one-functions.md`.
- `items/cor-cauchy-estimates-taylor-coefficients.md`.
- `items/cor-complex-differentiability-implies-continuity.md`.
- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`.
- `items/cor-complex-jacobian-determinant-is-multiplicative.md`.
- `items/cor-continuous-functions-are-borel-measurable.md`.
- `items/cor-euclidean-closed-balls-and-spheres-are-compact.md`.
- `items/cor-hardy-one-cauchy-representation.md`.
- `items/cor-holomorphic-functions-in-several-variables-are-smooth.md`.
- `items/cor-holomorphic-mean-value-property.md`.
- `items/cor-real-gamma-positive-integer-values.md`.
- `items/cor-triangle-inequality-for-inner-product-norm.md`.
- `items/cor-uniqueness-of-complex-power-series-coefficients.md`.
- `items/cor-uniqueness-of-multivariable-power-series-coefficients.md`.
- `items/def-analytic-hardy-space-disc.md`.
- `items/def-balls-and-polydiscs-in-complex-euclidean-space.md`.
- `items/def-banach-space.md`.
- `items/def-based-loops-and-fundamental-group.md`.
- `items/def-biholomorphic-map-several-complex-variables.md`.
- `items/def-binomial-coefficient.md`.
- `items/def-borel-sigma-algebra.md`.
- `items/def-bounded-c-one-domain-boundary-charts-and-outward-normal.md`.
- `items/def-bounded-linear-operator.md`.
- `items/def-canonical-natural.md`.
- `items/def-ck-and-multi-index-notation-in-several-variables.md`.
- `items/def-ck-euclidean-maps-and-diffeomorphisms.md`.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md`.
- `items/def-complex-differentiability-holomorphic-and-entire.md`.
- `items/def-complex-integer-powers.md`.
- `items/def-complex-l-two-inner-product.md`.
- `items/def-complex-lp-and-euclidean-test-function-conventions.md`.
- `items/def-complex-metric-convergence-and-continuity.md`.
- `items/def-complex-series-power-series-and-absolute-convergence.md`.
- `items/def-countable.md`.
- `items/def-countable-choice.md`.
- `items/def-determinant-of-a-square-matrix.md`.
- `items/def-factorial-and-falling-factorial.md`.
- `items/def-finite-sum-in-a-commutative-monoid.md`.
- `items/def-hilbert-orthogonal-projection.md`.
- `items/def-hilbert-space-adjoint.md`.
- `items/def-holomorphic-function-in-several-complex-variables.md`.
- `items/def-holomorphic-map-and-complex-jacobian.md`.
- `items/def-homotopy-relative-and-path-homotopy.md`.
- `items/def-integer-power.md`.
- `items/def-lebesgue-measure-and-the-lebesgue-sigma-algebra.md`.
- `items/def-levi-form-and-strict-plurisubharmonicity.md`.
- `items/def-matrices-over-a-commutative-ring.md`.
- `items/def-matrix-minors-cofactors-and-adjugate.md`.
- `items/def-measurable-function-between-measurable-spaces.md`.
- `items/def-measure-preserving-transformation-and-system.md`.
- `items/def-metric-ball.md`.
- `items/def-metric-bounded-diameter.md`.
- `items/def-metric-compactness.md`.
- `items/def-metric-continuity.md`.
- `items/def-metric-space.md`.
- `items/def-metric-topology.md`.
- `items/def-mobius-transformation.md`.
- `items/def-monoid-finite-product.md`.
- `items/def-multinomial-coefficient.md`.
- `items/def-nat-addition.md`.
- `items/def-nat-multiplication.md`.
- `items/def-nat-order.md`.
- `items/def-natural-logarithm.md`.
- `items/def-norm-and-normed-space.md`.
- `items/def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis.md`.
- `items/def-path-connected.md`.
- `items/def-polar-surface-measure-on-the-unit-sphere.md`.
- `items/def-real-and-complex-inner-product-space.md`.
- `items/def-real-beta-integral.md`.
- `items/def-ring-matrix-product-identity-and-transpose.md`.
- `items/def-semigroup-and-monoid.md`.
- `items/def-series.md`.
- `items/def-simply-connected.md`.
- `items/def-square-summable-family-on-an-arbitrary-index-set.md`.
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`.
- `items/def-the-one-dimensional-torus-and-normalized-haar-integral.md`.
- `items/def-total-derivative-in-euclidean-space.md`.
- `items/def-trace-sigma-algebra.md`.
- `items/def-unit-disc-upper-half-plane-and-blaschke-factor.md`.
- `items/def-wirtinger-operators-in-several-complex-variables.md`.
- `items/lem-binomial-theorem-over-complex-numbers.md`.
- `items/lem-cauchy-product-of-absolutely-convergent-complex-series.md`.
- `items/lem-compactness-is-intrinsic.md`.
- `items/lem-complex-conjugation-and-modulus-laws.md`.
- `items/lem-derivative-of-a-power.md`.
- `items/lem-determinant-rank-one-update-over-a-commutative-ring.md`.
- `items/lem-distance-to-set-is-lipschitz.md`.
- `items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md`.
- `items/lem-euclidean-chart-measure-agrees-with-polar-surface-measure.md`.
- `items/lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric.md`.
- `items/lem-finite-sum-reindexing-and-fubini.md`.
- `items/lem-geometric-sequence-null.md`.
- `items/lem-hardy-radial-means-are-monotone.md`.
- `items/lem-l-two-with-the-integral-pairing-is-a-hilbert-space.md`.
- `items/lem-mean-value-inequality-for-a-differentiable-banach-valued-curve.md`.
- `items/lem-nat-finite-sum-laws-and-the-canonical-embedding.md`.
- `items/lem-nat-mult-cancellative.md`.
- `items/lem-negative-semidefinite-hessian-at-an-interior-local-maximum.md`.
- `items/lem-of-naturals-positive.md`.
- `items/lem-orthogonal-projection-is-linear-self-adjoint-contractive.md`.
- `items/lem-power-laws.md`.
- `items/lem-pythagorean-theorem-and-finite-orthogonal-sums.md`.
- `items/lem-real-jacobian-determinant-of-a-complex-linear-map.md`.
- `items/lem-vector-operations-are-continuous-in-a-normed-space.md`.
- `items/prop-algebra-of-holomorphic-functions-in-several-variables.md`.
- `items/prop-holomorphic-functions-are-continuous-and-separately-holomorphic.md`.
- `items/prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets.md`.
- `items/prop-measure-monotonicity.md`.
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md`.
- `items/prop-standard-coordinate-inner-products.md`.
- `items/rem-complex-euclidean-space-dictionary.md`.
- `items/thm-absolute-convergence-of-complex-series.md`.
- `items/thm-algebra-of-continuous-functions.md`.
- `items/thm-algebra-of-derivatives.md`.
- `items/thm-arithmetic-and-lattice-operations-preserve-measurability.md`.
- `items/thm-binomial-closed-formula.md`.
- `items/thm-borel-products-of-euclidean-spaces-are-euclidean-borel.md`.
- `items/thm-borel-sets-are-lebesgue-measurable.md`.
- `items/thm-borel-sigma-algebra-of-a-subspace-is-the-trace.md`.
- `items/thm-cauchy-estimates-on-a-polydisc.md`.
- `items/thm-cauchy-schwarz-in-an-inner-product-space.md`.
- `items/thm-chain-rule-for-holomorphic-maps-in-several-variables.md`.
- `items/thm-chain-rule-for-total-derivatives.md`.
- `items/thm-ck-euclidean-maps-closed-under-algebra-and-composition.md`.
- `items/thm-clairaut-schwarz-mixed-partials.md`.
- `items/thm-compactness-under-continuous-maps.md`.
- `items/thm-complex-exponential-addition-and-real-extension.md`.
- `items/thm-complex-exponential-is-entire-with-derivative-itself.md`.
- `items/thm-complex-numbers-form-a-field.md`.
- `items/thm-complex-plane-is-complete.md`.
- `items/thm-complex-polynomials-and-rational-functions-are-holomorphic.md`.
- `items/thm-componentwise-holomorphy-in-several-complex-variables.md`.
- `items/thm-continuous-partial-derivatives-imply-total-differentiability.md`.
- `items/thm-continuous-preimages-of-borel-sets-are-borel.md`.
- `items/thm-determinant-multiplicative.md`.
- `items/thm-determinant-of-a-triangular-matrix.md`.
- `items/thm-determinant-of-transpose.md`.
- `items/thm-dominated-convergence.md`.
- `items/thm-euclidean-implicit-function-theorem.md`.
- `items/thm-extreme-value-metric.md`.
- `items/thm-fatou-boundary-theorem-analytic-hardy-spaces.md`.
- `items/thm-fatou-lemma.md`.
- `items/thm-fundamental-group-laws.md`.
- `items/thm-geometric-series.md`.
- `items/thm-heine-borel-rn.md`.
- `items/thm-heine-cantor-metric.md`.
- `items/thm-hilbert-space-fourier-expansion.md`.
- `items/thm-induction-principle.md`.
- `items/thm-integrals-are-invariant-under-measure-preserving-maps.md`.
- `items/thm-lebesgue-measure-is-a-complete-measure.md`.
- `items/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant.md`.
- `items/thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets.md`.
- `items/thm-linear-change-of-variables-for-lebesgue-measure.md`.
- `items/thm-linearity-of-the-lebesgue-integral-on-l-one.md`.
- `items/thm-locally-bounded-separate-holomorphy.md`.
- `items/thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables.md`.
- `items/thm-logarithm-derivative-and-integral.md`.
- `items/thm-metric-open-set-algebra.md`.
- `items/thm-mobius-transformations-biholomorphic-sphere.md`.
- `items/thm-monotone-convergence-for-the-integral.md`.
- `items/thm-multinomial-theorem.md`.
- `items/thm-natural-logarithm-laws.md`.
- `items/thm-nonnegative-measurable-functions-admit-increasing-simple-approximations.md`.
- `items/thm-nth-roots-exist.md`.
- `items/thm-orthogonal-decomposition-by-a-closed-subspace.md`.
- `items/thm-parseval-equivalences-for-a-complete-orthonormal-family.md`.
- `items/thm-pascals-rule.md`.
- `items/thm-path-connected-implies-connected.md`.
- `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`.
- `items/thm-power-series-expansion-in-several-complex-variables.md`.
- `items/thm-ratio-test.md`.
- `items/thm-real-beta-gamma-identity.md`.
- `items/thm-real-beta-integral-convergence.md`.
- `items/thm-riesz-representation-for-hilbert-space.md`.
- `items/thm-substitution-for-improper-integrals.md`.
- `items/thm-taylor-expansion-holomorphic-function.md`.
- `items/thm-tonelli-theorem-for-sigma-finite-product-spaces.md`.
- `items/thm-trace-is-a-sigma-algebra.md`.

Additional opened items: `items/lem-surface-integral-is-independent-of-c-one-boundary-charts.md` (complete local argument, including finite surface measure); `items/lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves.md` and `items/cor-second-order-taylor-expansion-with-the-hessian.md` (considered for the metric repair, then unused because the mean-value estimate avoids their prerequisites). Repository instructions, the exact batch manifest, cross-batch dependency file (empty), proof contracts, and frozen pre-reader hashes were opened. No rendered evidence bundle was supplied in this dispatch.

## Final validation

- Reflow run on every changed item; all reported unchanged after editing.
- Precheck passes for all seven changed proof-bearing items. The changed definition has no phase proof: zero proofs checked, no failures. The initial metric phase-order request was adopted, with consistent renumbering.
- Renderer/KaTeX checks pass for all eight changed carriers, including the final torus rewrite.
- Strict proof-contract check: 8/8 changed items checked, zero errors and zero warnings. Stale use mappings from the rewrites were repaired before this passing result.
- Final mandatory batched `node tools/proof-layout.mjs` run after the final edits and formatter: 8 items, 39 numbered steps, zero defects.
- No stale `verification.judge` remains on any changed carrier; none was present in the initially opened versions. No judgment, audit stamp, or self-certification was created.
- Comparing raw source hashes against `research/frontier-43-complex-representation-15-step5-hash-15-pre.json` identifies exactly the eight item carriers listed in the repair record. The assigned page prose and unassigned carriers were not edited.

## Page verdicts and remaining findings

- `bergman-and-szego-kernels` (A): the reviewed arguments support the page after repairs. The general Szegő construction is conditional on its declared regularity; the disc and ball suppliers prove it locally. The Bergman metric is positive on bounded domains and its determinant quotient has the stated distinct ball/polydisc constants. Page summary is consistent; no prose repair needed.
- `bergman-and-szego-kernels-examples` (B): the computations and counterexamples are supported after repairs. The disc conjugation, half-plane signs, and m=1 torus exception are now correct. The ball example distinguishes the boundary Riesz representer from its interior kernel, and the false claim remains present with a valid convex-domain counterexample. B-page prose was read and left unchanged.

No confirmed or suspected uneditable mathematical defect remains from this review. No withdrawal is proposed. No blocker remains. These are reader conclusions, not gate judgments.

## Coverage limits

All assigned pages and 29 complete item bodies were read, together with the external supplier statements/clauses listed above and the named source sections. This review does not assert a fresh proof audit of the entire transitive foundational corpus or of the complete source books. No other-batch source defect was observed, and no historical-byte attribution is made. Mechanical checks assess formatting and contract consistency, not independent mathematical acceptance.
