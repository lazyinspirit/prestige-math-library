# Step 3a reader report — batch 5

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: `reader-5`  
Batch: `5`

## Opened inventory

Assigned pages:

- A page `measure-theoretic-information-and-conditioning`.
- B page `measure-theoretic-information-and-conditioning-examples`.

The A-page prerequisite pages `finite-alphabet-entropy-and-divergence`,
`conditional-distributions-and-regular-conditional-probability`, and
`numerical-optimization-for-statistical-computation` were opened. The B-page
prerequisites `measure-theoretic-information-and-conditioning` and
`fdr-control-under-dependence` were opened. The IT02 description in
`research/plan-information-theory-track.md` was checked against the A-page
summary.

Assigned A-page items opened (17):

- `lem-kl-invariant-under-measurable-bijections`
- `lem-product-of-two-probability-kernels`
- `def-measure-theoretic-mutual-information`
- `lem-same-marginal-conditional-product-law-well-defined`
- `thm-general-kl-variational-and-partition-formulas`
- `def-finite-alphabet-conditional-entropy-given-observation`
- `def-law-entropy-as-self-mutual-information`
- `def-standard-borel-conditional-mutual-information`
- `thm-conditional-kl-is-measurable`
- `def-conditional-kl-for-probability-kernels`
- `rem-general-law-entropy-versus-differential-entropy`
- `thm-finite-alphabet-conditional-entropy-version-and-chain-rule`
- `thm-law-entropy-countable-support-characterization`
- `thm-mutual-information-and-conditional-mutual-information-equality-conditions`
- `thm-mutual-information-and-conditional-mutual-information-quantization`
- `thm-general-kl-chain-rule-for-standard-borel-kernels`
- `thm-mutual-information-chain-rule`

Assigned B-page items opened (4):

- `ex-finite-deterministic-copy-has-mutual-information-equal-to-entropy`
- `ex-coarsening-conditioning-can-increase-conditional-mutual-information`
- `ex-null-conditional-kernel-version-does-not-change-information`
- `ex-uniform-law-has-infinite-self-information-entropy`

Direct external item suppliers opened for their relevant statements and proof
interfaces (50):

`cor-archimedean-reciprocal`, `cor-expectation-agrees-with-the-finite-weighted-sum`,
`cor-finite-nonnegative-integral-implies-finite-almost-everywhere`,
`cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras`,
`def-axiom-of-choice`, `def-conditional-expectation-given-a-sigma-algebra`,
`def-conditional-independence-given-a-sigma-algebra`,
`def-conditional-law-given-a-random-element`, `def-countable-choice`,
`def-it-finite-conditional-entropy`, `def-it-finite-conditional-mutual-information`,
`def-it-finite-mutual-information`, `def-it-information-units-and-logarithm-base`,
`def-kullback-leibler-divergence`, `def-law-or-distribution-of-a-random-element`,
`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
`def-measurable-function-between-measurable-spaces`,
`def-measure-kernel-and-probability-kernel`, `def-nonnegative-lebesgue-integral`,
`def-polish-space`, `def-probability-measure`,
`def-product-measure-on-sigma-finite-spaces`,
`def-product-sigma-algebra-and-finite-product-sigma-algebras`,
`def-qa-35-finite-probability-entropy-and-stochastic-matrices`,
`def-regular-conditional-distribution`, `def-separable-space`,
`def-standard-borel-space`,
`lem-finite-products-of-standard-borel-spaces-are-standard-borel`,
`lem-it-finite-kl-agrees-with-measurable-kl`,
`lem-prior-and-model-kernel-define-joint-law`,
`lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`,
`lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`,
`lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions`,
`lem-unit-interval-is-standard-borel`,
`thm-borel-sets-are-lebesgue-measurable`,
`thm-change-of-variables-for-expectation`,
`thm-conditional-fatou-and-dominated-convergence`,
`thm-continuity-from-below-for-measures`,
`thm-disintegration-of-a-joint-law-on-standard-borel-spaces`,
`thm-dominated-convergence`, `thm-dynkin-pi-lambda`,
`thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`,
`thm-integration-against-a-radon-nikodym-derivative`,
`thm-kullback-leibler-is-nonnegative`,
`thm-lebesgue-measure-of-a-box-of-every-kind`,
`thm-measurability-of-integration-against-a-kernel`,
`thm-monotone-convergence-for-the-integral`,
`thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
`thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`,
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`.

Three additional published suppliers were opened for repairs:
`thm-integration-against-a-density`,
`thm-composition-with-borel-functions-preserves-measurability`, and
`thm-arithmetic-and-lattice-operations-preserve-measurability`.

The relevant source passages reviewed include Gray, [*Entropy and Information
Theory*](https://ee-www.stanford.edu/~gray/it.pdf), corrected first edition,
Chapter 5 §5.2, Theorem 5.2.1: for $P\ll M$, divergence is the supremum of
$\mathbb E_P\Phi-\ln\mathbb E_Me^\Phi$ over functions with $e^\Phi$ integrable
under $M$ and $\mathbb E_P\Phi$ defined; and §5.5, Lemmas 5.5.5 and 5.5.7,
which state the unconditional and conditional finite-quantization limits for
standard alphabets. MIT 6.441 Chapter 3 §3.4, [Theorem
3.7](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/486b7d83cc428acf75b74323ecafcc11_MIT6_441S16_chapter_3.pdf),
gives the finite-partition divergence supremum. Duchi, [*Lecture Notes on
Statistics and Information Theory*](https://web.stanford.edu/class/stats311/lecture-notes.pdf),
Chapter 5 §5.1, Theorem 5.1.1, states the Donsker–Varadhan variational
representation over measurable $g$ with $\mathbb E_Qe^g<\infty$. The local
variational proof handles singular cases separately; Gray Theorem 5.2.1 itself
assumes absolute continuity.

## Repairs

1. `thm-finite-alphabet-conditional-entropy-version-and-chain-rule`, Proof
steps 1.2–3.1. The original pointwise entropy calculation used
`p_{ij}/p_i` as the conditional law of U given (X,Z) without showing that it
agrees almost everywhere with the supplied regular conditional law used in
`H(U|X,Z)`. The repair disintegrates over Z and over (X,Z), equates the
integrals on every conditioning event, proves equality of the bounded
integrands almost everywhere by threshold sets, and then applies the finite
entropy identity. The existing disintegration, simultaneous uniqueness,
finite-product, and AC suppliers provide the hypotheses. The proof contract
was regenerated. Reflow left the item unchanged; after adopting precheck's
canonical phase numbering, precheck passed.

2. `thm-law-entropy-countable-support-characterization`, Proof step 1.2. The
original proof asserted that a countably supported function was a measurable
Radon–Nikodym density and that its KL integral was the corresponding infinite
sum without justifying either passage. The repair records measurability from
the Borel singletons, uses increasing finite partial sums for the density and
its logarithm, and invokes monotone convergence. The MCT supplier was added to
`deps` and Facts & Assumptions. The proof contract was regenerated. Reflow left
the item unchanged and precheck passed.

3. `thm-general-kl-chain-rule-for-standard-borel-kernels`, Proof steps 1.2 and
2.1. The original proof changed the base measure from μ to ν inside a kernel
integral using only the setwise Radon–Nikodym identity; the cited RN integration
supplier covered simple functions, not this general nonnegative integrand.
The repair defines the kernel integral `g_C`, applies the published
integration-against-a-density theorem, and makes the measurability of the
fiber density explicit. The density-integration, Borel-composition, and
measurable-arithmetic suppliers were added to `deps` and Facts & Assumptions.
The proof contract was regenerated. Reflow left the item unchanged and
precheck passed.

No stale `verification.judge` records were present on the three repaired items.
The one batched `proof-layout` run covered all three changed paths and reported
3 items, 11 steps, and 0 defects.

## Defects not edited

None found. The draft suppliers from other current-run batches that occur in
this batch's dependency closure (`def-it-information-units-and-logarithm-base`,
`def-it-finite-conditional-entropy`, `def-it-finite-mutual-information`,
`def-it-finite-conditional-mutual-information`, and
`lem-it-finite-kl-agrees-with-measurable-kl`) were opened as read-only
dependencies; no defect requiring an uneditable finding was identified.

## Page verdicts

- `measure-theoretic-information-and-conditioning` (A): pass. Its summary
  matches the assigned item inventory and the IT02 plan description; the
  promised general KL, conditional-information, chain-rule, equality, and
  quantization results are present. No page prose edit was needed.
- `measure-theoretic-information-and-conditioning-examples` (B): pass. Its
  summary accurately describes all four assigned computations. B-page prose
  was not edited.

## Blocker and coverage note

No blocker. All assigned pages and items and the direct external suppliers
needed to check their claims were opened. The first two dependency-level-0
items were opened before their external supplier files; those suppliers were
then read, and the remaining assigned items were reviewed after their
suppliers. I did not audit the full transitive proof closure of every published
supplier. Other unrelated worktree changes were present during the review and
were left untouched.
