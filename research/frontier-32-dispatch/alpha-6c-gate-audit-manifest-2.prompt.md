# Step-6 Alpha

The task determines whether this is group adjudication, cross-group closure, or
a named repair. It owns the exact queue, writable artifacts, verdict schema,
and focused gates. Read it first, then verify all reader, refuter, detector,
and prior-retry evidence against the current files; a report is evidence, not a
verdict.

Work only in the task's live scope. A group Alpha writes only for its assigned
batches; the 6c lead handles only computed cross-group work; a repair dispatch
handles only the live ids it names. You may open dependencies outside that
scope to test a claim. Do not rerun independent readers or refuters, dispatch
new work, decide a stage transition, or edit an item that belongs to another
group unless the task's published-content protocol expressly permits it.

Apply the mathematical standard throughout: check the written claim, all
hypotheses and quantifiers, exact cited statements, typing and well-formedness,
and relevant empty, zero, endpoint, choice, and iff cases. A short
proof-step omission may be nonfatal only when a competent reader can supply it
immediately; it never excuses a defective claim, definition, title, witness,
computation, or citation. When uncertain, consult authoritative sources rather
than infer from memory.

For a confirmed defect, make the smallest coherent repair the task licenses
and update every affected contract, manifest, provenance, and stale
verification record. Preserve stable item ids. Run the task's focused checks;
after a material item edit, reflow and precheck it unless the task explicitly
supersedes those commands. A proposed withdrawal remains present until the
task's authorised lead disposition.

Write every required decision and defect outcome through the task-specified
append-only interface. Do not rewrite shared ledgers or invent a defect row for
a purely mechanical failure. A clean decision needs evidence; an unresolved
case is a named blocker.

You neither judge nor stamp. The configured judge set and its current-coverage
rules are resolved by `tools/models.mjs`; do not hard-code, substitute, or
self-certify a judge outcome. Do not request permissions.


---

# This dispatch

run: frontier-32
role: alpha
label: 6c-gate-audit-manifest-2

# Step 6c repair — audit-manifest

This file is the authority for repair cycle 2.
Primary gate: `audit-manifest`
Reason: - [dependency; published-backward] lem-germ-equivalence-relation (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-equivalence-relation (relations-functions-and-quotients)
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `*`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
# Audit manifest

## Batches
- frontier-32-batch-1: boolean-circuits-and-nonuniform-complexity, boolean-circuits-and-nonuniform-complexity-examples, counting-complexity-and-sharpp, counting-complexity-and-sharpp-examples
- frontier-32-batch-2: interactive-proof-systems-and-public-coins, interactive-proof-systems-and-public-coins-examples, kolmogorov-complexity-and-algorithmic-randomness, kolmogorov-complexity-and-algorithmic-randomness-examples
- frontier-32-batch-3: radon-measures-and-the-riesz-markov-kakutani-theorem, radon-measures-and-the-riesz-markov-kakutani-theorem-examples
- frontier-32-batch-4: the-baire-principles-of-functional-analysis, the-baire-principles-of-functional-analysis-examples
- frontier-32-batch-5: modes-of-convergence-for-random-variables, modes-of-convergence-for-random-variables-examples
- frontier-32-batch-6: lacunary-fourier-series-and-sidon-sets, lacunary-fourier-series-and-sidon-sets-examples
- frontier-32-batch-7: perron-inversion-and-the-explicit-formula, perron-inversion-and-the-explicit-formula-examples, prime-ideal-decomposition-ramification-and-the-different, prime-ideal-decomposition-ramification-and-the-different-examples
- frontier-32-batch-8: triangulated-categories, triangulated-categories-examples
- frontier-32-batch-9: depth-and-cohen-macaulay-modules, depth-and-cohen-macaulay-modules-examples
- frontier-32-batch-10: cw-complexes-and-cellular-homology, cw-complexes-and-cellular-homology-examples
- frontier-32-batch-11: products-segre-and-veronese-embeddings-and-grassmannians, products-segre-and-veronese-embeddings-and-grassmannians-examples
- frontier-32-batch-12: presheaves-sheaves-stalks-and-sheafification, presheaves-sheaves-stalks-and-sheafification-examples, schemes-subschemes-and-morphisms-locally-of-finite-type, schemes-subschemes-and-morphisms-locally-of-finite-type-examples
- frontier-32-batch-13: co-e-free-comb-structure, co-e-free-comb-structure-examples
- frontier-32-batch-14: harmonic-functions-and-mean-values-in-rn, harmonic-functions-and-mean-values-in-rn-examples
- frontier-32-batch-15: manifolds-with-boundary-collars-and-orientations, manifolds-with-boundary-collars-and-orientations-examples
- frontier-32-batch-16: homomorphisms-between-verma-modules-and-linkage, homomorphisms-between-verma-modules-and-linkage-examples
- frontier-32-batch-17: schur-indices-and-fields-of-definition, schur-indices-and-fields-of-definition-examples
- frontier-32-batch-18: stable-unstable-manifolds-and-morse-smale-transversality, stable-unstable-manifolds-and-morse-smale-transversality-examples
- frontier-32-batch-19: oracle-computability-the-jump-and-turing-degrees, oracle-computability-the-jump-and-turing-degrees-examples

## Edge summary
- published-backward: 612
- same-batch: 1199
- unresolved: 1

## Relationships to audit outside a single batch
- [dependency; published-backward] thm-p-is-contained-in-p-poly (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> def-p (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] thm-undecidable-languages-exist-in-p-poly (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> thm-halting-is-recognizable-and-undecidable (diagonalization-and-the-halting-problem)
- [dependency; published-backward] def-ac-zero-nc-one-and-nc (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> def-logspace-uniform-circuit-family (logarithmic-space-nl-and-reachability)
- [dependency; published-backward] prop-nc-one-is-contained-in-l-and-l-in-nc-two (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> def-l-and-nl (logarithmic-space-nl-and-reachability)
- [dependency; published-backward] lem-counting-circuits-of-bounded-size (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> thm-product-rule (finite-counting-and-binomial-coefficients)
- [dependency; published-backward] thm-shannon-almost-all-functions-require-exponential-circuits (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> thm-cardinality-of-a-set-of-functions (finite-counting-and-binomial-coefficients)
- [dependency; published-backward] thm-circuit-sat-is-np-complete (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> thm-cook-levin-sat-is-np-complete (the-cook-levin-theorem)
- [dependency; published-backward] thm-circuit-sat-is-np-complete (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> def-polynomial-time-many-one-reduction (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] thm-circuit-sat-is-np-complete (boolean-circuits-and-nonuniform-complexity, frontier-32-batch-1) -> def-np-hard-and-np-complete (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] def-number-sat (counting-complexity-and-sharpp, frontier-32-batch-1) -> def-boolean-formula-cnf-and-sat (the-cook-levin-theorem)
- [dependency; published-backward] lem-cook-levin-can-be-made-parsimonious (counting-complexity-and-sharpp, frontier-32-batch-1) -> def-bounded-computation-tableau (the-cook-levin-theorem)
- [dependency; published-backward] lem-cook-levin-can-be-made-parsimonious (counting-complexity-and-sharpp, frontier-32-batch-1) -> lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs (the-cook-levin-theorem)
- [dependency; published-backward] lem-cook-levin-can-be-made-parsimonious (counting-complexity-and-sharpp, frontier-32-batch-1) -> lem-cook-levin-map-is-polynomial-time (the-cook-levin-theorem)
- [dependency; published-backward] thm-pp-is-sign-testing-gap-p (counting-complexity-and-sharpp, frontier-32-batch-1) -> def-rp-corp-zpp-bpp-and-pp (randomized-complexity-and-amplification)
- [dependency; published-backward] def-p-with-a-sharpp-oracle (counting-complexity-and-sharpp, frontier-32-batch-1) -> def-p (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] fs-every-many-one-reduction-is-parsimonious (counting-complexity-and-sharpp, frontier-32-batch-1) -> def-polynomial-time-many-one-reduction (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] def-interactive-proof-transcript-round-and-strategy (interactive-proof-systems-and-public-coins, frontier-32-batch-2) -> def-probabilistic-polynomial-time-machine (randomized-complexity-and-amplification)
- [dependency; published-backward] def-ip (interactive-proof-systems-and-public-coins, frontier-32-batch-2) -> def-probabilistic-polynomial-time-machine (randomized-complexity-and-amplification)
- [dependency; published-backward] prop-np-is-contained-in-ip (interactive-proof-systems-and-public-coins, frontier-32-batch-2) -> def-np-by-verifiers (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] lem-sequential-repetition-amplifies-error (interactive-proof-systems-and-public-coins, frontier-32-batch-2) -> lem-chernoff-bound-for-bernoulli-trials (randomized-complexity-and-amplification)
- [dependency; published-backward] lem-hashing-commits-public-randomness (interactive-proof-systems-and-public-coins, frontier-32-batch-2) -> def-pairwise-independent-hash-family (randomized-complexity-and-amplification)
- [dependency; published-backward] lem-protocol-value-is-computable-in-polynomial-space (interactive-proof-systems-and-public-coins, frontier-32-batch-2) -> def-pspace-and-npspace (space-complexity-savitch-and-tqbf)
- [dependency; published-backward] def-description-machine-and-plain-kolmogorov-complexity (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-computable-and-partial-computable-function (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] def-description-machine-and-plain-kolmogorov-complexity (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-computation-alphabet-and-word-convention (formal-languages-encodings-and-decision-problems)
- [dependency; published-backward] lem-most-strings-are-incompressible (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-finite-probability-space-and-event (finite-probability-spaces-and-random-variables)
- [dependency; published-backward] thm-kolmogorov-complexity-is-not-computable (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-computable-and-partial-computable-function (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] def-conditional-kolmogorov-complexity (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-effective-binary-encoding-and-decoder (formal-languages-encodings-and-decision-problems)
- [dependency; published-backward] thm-invariance-for-prefix-complexity (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-universal-and-acceptable-numbering (acceptable-numberings-smn-and-the-recursion-theorem)
- [dependency; published-backward] def-effectively-open-set-in-cantor-space (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-computable-and-partial-computable-function (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] def-effectively-open-set-in-cantor-space (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-computation-alphabet-and-word-convention (formal-languages-encodings-and-decision-problems)
- [dependency; published-backward] lem-universal-martin-lof-test-exists (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-universal-and-acceptable-numbering (acceptable-numberings-smn-and-the-recursion-theorem)
- [dependency; published-backward] def-computable-martingale (kolmogorov-complexity-and-algorithmic-randomness, frontier-32-batch-2) -> def-computation-alphabet-and-word-convention (formal-languages-encodings-and-decision-problems)
- [dependency; published-backward] def-compact-support-c-c-and-c-zero-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-locally-compact-space (compactness)
- [dependency; published-backward] def-compact-support-c-c-and-c-zero-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-hausdorff-space (subspaces-products-and-quotients)
- [dependency; published-backward] def-compact-support-c-c-and-c-zero-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-compact-space (compactness)
- [dependency; published-backward] def-radon-measure-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-borel-sigma-algebra (sigma-algebras-and-borel-sets)
- [dependency; published-backward] def-radon-measure-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-measure (measures-and-their-basic-properties)
- [dependency; published-backward] def-radon-measure-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-compact-space (compactness)
- [dependency; published-backward] def-regular-complex-borel-measure-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-complex-measure (signed-and-complex-measures-hahn-and-jordan)
- [dependency; published-backward] def-regular-complex-borel-measure-on-an-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-total-variation-of-a-signed-or-complex-measure (signed-and-complex-measures-hahn-and-jordan)
- [dependency; published-backward] lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure (hausdorff-via-the-diagonal)
- [dependency; published-backward] lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-urysohn-lemma (urysohn-lemma-and-tietze)
- [dependency; published-backward] lem-finite-lch-partition-of-unity-near-a-compact-set (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> cor-compact-hausdorff-partitions-of-unity (partitions-of-unity-and-paracompactness)
- [dependency; published-backward] thm-rmk-open-sets-are-caratheodory-measurable (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-caratheodory-outer-measure-theorem (outer-measure-and-the-caratheodory-extension-theorem)
- [dependency; published-backward] thm-rmk-positive-functional-is-integration-against-its-representing-measure (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-caratheodory-outer-measure-theorem (outer-measure-and-the-caratheodory-extension-theorem)
- [dependency; published-backward] cor-second-countable-lch-locally-finite-borel-measures-are-regular (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-second-countable-space (countability-axioms-and-cardinal-functions)
- [dependency; published-backward] cor-second-countable-lch-locally-finite-borel-measures-are-regular (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure (hausdorff-via-the-diagonal)
- [dependency; published-backward] thm-lebesgue-measure-is-a-radon-measure-on-rn (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> cor-rn-is-locally-compact-and-sigma-compact (the-topology-of-euclidean-space)
- [dependency; published-backward] thm-lebesgue-measure-is-a-radon-measure-on-rn (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-lebesgue-measure-is-a-radon-measure-on-rn (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-lebesgue-outer-regularity-for-arbitrary-subsets (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-lebesgue-measure-is-a-radon-measure-on-rn (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-lebesgue-inner-regularity-by-closed-and-compact-sets (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-borel-measure-finite-on-compact-sets-on-r (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-existence-of-the-lebesgue-stieltjes-measure (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] prop-lebesgue-stieltjes-and-lch-radon-conventions-agree-on-r (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-lebesgue-stieltjes-measures-are-regular-on-r (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] thm-c-c-is-dense-in-l-p-for-radon-measures (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p (density-separability-and-convolution-in-lp)
- [dependency; published-backward] thm-c-c-is-dense-in-l-p-for-radon-measures (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-l-p-space-as-a-quotient-by-null-functions (the-lp-spaces-holder-minkowski-and-riesz-fischer)
- [dependency; published-backward] thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-total-variation-is-a-measure (signed-and-complex-measures-hahn-and-jordan)
- [dependency; published-backward] thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-integration-against-a-signed-or-complex-measure (signed-and-complex-measures-hahn-and-jordan)
- [dependency; published-backward] lem-countable-intersections-of-club-subsets-of-omega-one-are-club (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] lem-countable-intersections-of-club-subsets-of-omega-one-are-club (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-first-uncountable-ordinal (ordinal-arithmetic)
- [dependency; published-backward] lem-countable-intersections-of-club-subsets-of-omega-one-are-club (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-order-topology-on-an-ordinal (separation-axioms)
- [dependency; published-backward] lem-countable-intersections-of-club-subsets-of-omega-one-are-club (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-countable-subsets-of-omega-one-are-bounded (ordinal-arithmetic)
- [dependency; published-backward] thm-dieudonne-club-set-function-is-a-borel-measure (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-dieudonne-club-set-function-is-a-borel-measure (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-borel-sigma-algebra (sigma-algebras-and-borel-sets)
- [dependency; published-backward] thm-dieudonne-club-set-function-is-a-borel-measure (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-measure (measures-and-their-basic-properties)
- [dependency; published-backward] lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-first-uncountable-ordinal (ordinal-arithmetic)
- [dependency; published-backward] lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-order-topology-on-an-ordinal (separation-axioms)
- [dependency; published-backward] lem-continuous-functions-on-omega-one-plus-one-are-eventually-constant (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-countable-subsets-of-omega-one-are-bounded (ordinal-arithmetic)
- [dependency; published-backward] lem-dieudonne-measure-and-top-dirac-agree-on-continuous-functions (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> def-dirac-measure (measures-and-their-basic-properties)
- [dependency; published-backward] fs-every-borel-measure-on-an-lch-space-is-radon (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-ordinal-spaces-and-compactness (compactness)
- [dependency; published-backward] fs-every-finite-borel-measure-on-a-compact-hausdorff-space-is-regular (radon-measures-and-the-riesz-markov-kakutani-theorem, frontier-32-batch-3) -> thm-ordinal-spaces-and-compactness (compactness)
- [dependency; published-backward] ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> lem-compactly-supported-riemann-integral-is-well-defined (fubini-and-change-of-variables)
- [dependency; published-backward] ex-riemann-integral-functional-is-represented-by-interval-lebesgue-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral (the-lebesgue-and-riemann-integrals-compared)
- [dependency; published-backward] ex-point-evaluation-functional-is-represented-by-a-dirac-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> def-dirac-measure (measures-and-their-basic-properties)
- [dependency; published-backward] ex-point-evaluation-functional-is-represented-by-a-dirac-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> prop-dirac-measure-is-a-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] ex-point-evaluation-functional-is-represented-by-a-dirac-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> def-nonnegative-lebesgue-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] ex-point-evaluation-functional-is-represented-by-a-dirac-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> def-integrable-real-and-complex-functions-and-their-integrals (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] ex-point-evaluation-functional-is-represented-by-a-dirac-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> thm-increasing-simple-approximation-of-a-nonnegative-measurable-function (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] ex-point-evaluation-functional-is-represented-by-a-dirac-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> thm-monotone-convergence-for-the-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] ex-locally-integrable-density-functional-is-represented-by-g-dlambda (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> def-locally-integrable-function-on-r-n (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] ex-locally-integrable-density-functional-is-represented-by-g-dlambda (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> def-measure-with-density (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] ex-lebesgue-stieltjes-functional-is-represented-by-its-stieltjes-measure (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> thm-existence-of-the-lebesgue-stieltjes-measure (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] ex-counting-functional-on-a-discrete-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> def-counting-measure (measures-and-their-basic-properties)
- [dependency; published-backward] ex-counting-functional-on-a-discrete-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> prop-counting-measure-is-a-measure (measures-and-their-basic-properties)
- [dependency; published-backward] ex-counting-functional-on-a-discrete-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> def-nonnegative-lebesgue-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] ex-counting-functional-on-a-discrete-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> prop-the-nonnegative-integral-agrees-with-the-simple-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] ex-counting-functional-on-a-discrete-lch-space (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> thm-monotone-convergence-for-the-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] cex-dieudonne-borel-measure-on-omega-one-plus-one-is-not-regular (radon-measures-and-the-riesz-markov-kakutani-theorem-examples, frontier-32-batch-3) -> thm-ordinal-spaces-and-compactness (compactness)
- [dependency; published-backward] thm-uniform-boundedness-principle (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-uniform-boundedness-principle (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-uniform-boundedness-principle (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-baire-category-for-complete-metric-spaces (approximation-and-compactness-in-ck)
- [dependency; published-backward] thm-banach-steinhaus-dichotomy (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-banach-steinhaus-dichotomy (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-banach-steinhaus-dichotomy (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-baire-category-for-complete-metric-spaces (approximation-and-compactness-in-ck)
- [dependency; published-backward] cor-pointwise-limit-of-bounded-operators-is-bounded (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-pointwise-limit-of-bounded-operators-is-bounded (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] lem-sokal-local-operator-norm-lower-bound (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] lem-sokal-local-operator-norm-lower-bound (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-sokal-gliding-hump-uniform-boundedness (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-banach-space (normed-and-banach-spaces)
- [dependency; published-backward] thm-sokal-gliding-hump-uniform-boundedness (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-sokal-gliding-hump-uniform-boundedness (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-sokal-gliding-hump-uniform-boundedness (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] lem-open-mapping-ball-closure-step (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] lem-open-mapping-ball-closure-step (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-metric-interior-closure-boundary (metric-spaces)
- [dependency; published-backward] lem-open-mapping-ball-closure-step (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-baire-category-for-complete-metric-spaces (approximation-and-compactness-in-ck)
- [dependency; published-backward] lem-open-mapping-successive-approximation (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-banach-series-criterion (normed-and-banach-spaces)
- [dependency; published-backward] lem-open-mapping-successive-approximation (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-bounded-linear-operator-equivalences (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-open-mapping-theorem (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-bounded-inverse-theorem (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-bounded-linear-operator-equivalences (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] def-graph-of-a-linear-operator (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-linear-subspace (vector-spaces-and-subspaces)
- [dependency; published-backward] def-graph-of-a-linear-operator (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-product-norms-on-finitely-many-normed-spaces (normed-and-banach-spaces)
- [dependency; published-backward] thm-closed-graph-theorem (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> lem-closed-subspace-of-a-banach-space-is-banach (normed-and-banach-spaces)
- [dependency; published-backward] thm-closed-graph-theorem (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-finite-products-of-banach-spaces-are-banach (normed-and-banach-spaces)
- [dependency; published-backward] def-closable-linear-operator (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-metric-interior-closure-boundary (metric-spaces)
- [dependency; published-backward] thm-closability-sequential-criterion (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-metric-interior-closure-boundary (metric-spaces)
- [dependency; published-backward] thm-closability-sequential-criterion (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-bilinear-map (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> thm-bounded-bilinear-map-equivalences (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-equivalent-complete-norms-from-one-sided-comparison (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-banach-space (normed-and-banach-spaces)
- [dependency; published-backward] cor-equivalent-complete-norms-from-one-sided-comparison (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-equivalent-norms (rn-as-a-normed-space)
- [dependency; published-backward] cor-equivalent-complete-norms-from-one-sided-comparison (the-baire-principles-of-functional-analysis, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cex-uniform-boundedness-fails-on-an-incomplete-domain (the-baire-principles-of-functional-analysis-examples, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cex-uniform-boundedness-fails-on-an-incomplete-domain (the-baire-principles-of-functional-analysis-examples, frontier-32-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cex-open-mapping-fails-without-completeness (the-baire-principles-of-functional-analysis-examples, frontier-32-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] ex-a-closed-unbounded-differential-operator (the-baire-principles-of-functional-analysis-examples, frontier-32-batch-4) -> def-the-integral-function (properties-of-the-integral-and-the-working-ftc)
- [dependency; published-backward] ex-a-closed-unbounded-differential-operator (the-baire-principles-of-functional-analysis-examples, frontier-32-batch-4) -> thm-continuous-implies-integrable (the-riemann-integral)
- [dependency; published-backward] ex-a-closed-unbounded-differential-operator (the-baire-principles-of-functional-analysis-examples, frontier-32-batch-4) -> thm-newton-leibniz-with-interior-derivative (the-fundamental-theorems-of-calculus)
- [dependency; published-backward] def-almost-sure-convergence-of-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] def-almost-sure-convergence-of-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-random-element-and-real-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-almost-sure-convergence-of-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-real-limit (construction-of-r-via-cauchy-sequences)
- [dependency; published-backward] def-convergence-in-probability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-convergence-in-measure (modes-of-convergence-egorov-and-lusin)
- [dependency; published-backward] def-convergence-in-probability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] def-convergence-in-probability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-random-element-and-real-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-convergence-in-lp-for-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-l-p-space-as-a-quotient-by-null-functions (the-lp-spaces-holder-minkowski-and-riesz-fischer)
- [dependency; published-backward] def-convergence-in-lp-for-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-random-element-and-real-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-convergence-in-distribution-for-real-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-atom-and-continuity-point-of-a-law (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-convergence-in-distribution-for-real-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-cumulative-distribution-function-of-a-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-convergence-in-distribution-for-real-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-law-or-distribution-of-a-random-element (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] thm-almost-sure-convergence-implies-convergence-in-probability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> thm-dominated-convergence (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-lp-convergence-implies-convergence-in-probability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> cor-markov-inequality-for-random-variables (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] thm-lq-convergence-implies-lp-convergence-on-a-probability-space (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] thm-lq-convergence-implies-lp-convergence-on-a-probability-space (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> thm-finite-measure-l-r-includes-into-l-p-for-p-less-r (the-lp-spaces-holder-minkowski-and-riesz-fischer)
- [dependency; published-backward] thm-convergence-in-probability-implies-convergence-in-distribution (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-atom-and-continuity-point-of-a-law (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] thm-almost-sure-subsequence-from-convergence-in-probability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> cor-first-borel-cantelli-lemma-for-events (independence-borel-cantelli-and-zero-one-laws)
- [dependency; published-backward] def-probability-convergence-metric (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-expectation-of-a-nonnegative-or-integrable-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-probability-convergence-metric (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-measure-null-set-and-almost-everywhere (measures-and-their-basic-properties)
- [dependency; published-backward] def-probability-convergence-metric (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] def-probability-convergence-metric (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-random-element-and-real-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] thm-probability-convergence-is-metrized-by-d-zero (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> lem-expectation-is-independent-of-the-ae-representative (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] thm-probability-convergence-is-metrized-by-d-zero (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> thm-nonnegative-integral-zero-iff-zero-almost-everywhere (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-dominated-convergence-in-lp (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> thm-dominated-convergence (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-convergence-in-measure (modes-of-convergence-egorov-and-lusin)
- [dependency; published-backward] thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-uniformly-integrable-family (modes-of-convergence-egorov-and-lusin)
- [dependency; published-backward] thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces (modes-of-convergence-egorov-and-lusin)
- [dependency; published-backward] thm-l1-convergence-implies-uniform-integrability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-convergence-in-l-one-of-a-measure (modes-of-convergence-egorov-and-lusin)
- [dependency; published-backward] thm-l1-convergence-implies-uniform-integrability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] thm-l1-convergence-implies-uniform-integrability (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-uniformly-integrable-family (modes-of-convergence-egorov-and-lusin)
- [dependency; published-backward] thm-slutsky-for-real-random-variables (modes-of-convergence-for-random-variables, frontier-32-batch-5) -> def-random-element-and-real-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] cex-convergence-in-probability-need-not-be-almost-sure (modes-of-convergence-for-random-variables-examples, frontier-32-batch-5) -> cor-second-borel-cantelli-lemma-under-pairwise-independence (independence-borel-cantelli-and-zero-one-laws)
- [dependency; published-backward] cex-almost-sure-convergence-does-not-imply-convergence-of-expectations (modes-of-convergence-for-random-variables-examples, frontier-32-batch-5) -> def-expectation-of-a-nonnegative-or-integrable-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] ex-uniform-integrability-repairs-the-expectation-limit (modes-of-convergence-for-random-variables-examples, frontier-32-batch-5) -> def-uniformly-integrable-family (modes-of-convergence-egorov-and-lusin)
- [dependency; published-backward] def-hadamard-lacunary-sequence-and-lacunary-trigonometric-series (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> def-period-one-fourier-coefficients-partial-sums-and-convolution (dirichlet-kernel-localisation-and-pointwise-fourier-convergence)
- [dependency; published-backward] thm-lacunary-lp-norm-equivalence (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> thm-holder-inequality-for-integrals (the-lp-spaces-holder-minkowski-and-riesz-fischer)
- [dependency; published-backward] cor-lacunary-series-lp-membership-is-coefficient-ell-two (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> thm-riesz-fischer-completeness-of-l-p (the-lp-spaces-holder-minkowski-and-riesz-fischer)
- [dependency; published-backward] cor-lacunary-series-lp-membership-is-coefficient-ell-two (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric (the-lp-spaces-holder-minkowski-and-riesz-fischer)
- [dependency; published-backward] def-sidon-set-in-the-integer-dual (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> def-period-one-fourier-coefficients-partial-sums-and-convolution (dirichlet-kernel-localisation-and-pointwise-fourier-convergence)
- [dependency; published-backward] thm-hadamard-lacunary-sets-are-sidon (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> thm-holder-inequality-for-integrals (the-lp-spaces-holder-minkowski-and-riesz-fischer)
- [dependency; published-backward] cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> lem-fejer-kernel-is-a-positive-approximate-identity (fejer-and-poisson-summability-of-fourier-series)
- [dependency; published-backward] cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients (lacunary-fourier-series-and-sidon-sets, frontier-32-batch-6) -> thm-fejer-uniform-convergence-for-continuous-periodic-functions (fejer-and-poisson-summability-of-fourier-series)
- [dependency; published-backward] def-half-weighted-chebyshev-psi (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> def-von-mangoldt-function (arithmetic-functions-and-dirichlet-convolution)
- [dependency; published-backward] def-half-weighted-chebyshev-psi (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> def-chebyshev-psi-function (chebyshev-bounds-and-mertens-theorems)
- [dependency; published-backward] def-riemann-zeta-zero-counting (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-riemann-zeta-meromorphic-continuation (the-riemann-zeta-function)
- [dependency; published-backward] thm-riemann-von-mangoldt-zero-counting (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> def-riemann-xi-function (the-riemann-zeta-function)
- [dependency; published-backward] thm-riemann-von-mangoldt-zero-counting (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-argument-principle-null-homologous-cycle (the-argument-principle-and-rouche)
- [dependency; published-backward] thm-riemann-von-mangoldt-zero-counting (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-stirling-formula-gamma (the-gamma-function)
- [dependency; published-backward] lem-local-logarithmic-derivative-zeta (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-hadamard-product-for-riemann-xi (the-riemann-zeta-function)
- [dependency; published-backward] lem-logarithmic-derivative-zeta-left-half-plane (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-riemann-zeta-functional-equation (the-riemann-zeta-function)
- [dependency; published-backward] lem-logarithmic-derivative-zeta-left-half-plane (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-stirling-formula-gamma (the-gamma-function)
- [dependency; published-backward] lem-von-mangoldt-explicit-formula-residues (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-riemann-zeta-meromorphic-continuation (the-riemann-zeta-function)
- [dependency; published-backward] lem-von-mangoldt-explicit-formula-residues (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> thm-von-mangoldt-logarithmic-derivative-zeta (dirichlet-series-and-euler-products)
- [dependency; published-backward] thm-von-mangoldt-explicit-formula-smoothed (perron-inversion-and-the-explicit-formula, frontier-32-batch-7) -> def-von-mangoldt-function (arithmetic-functions-and-dirichlet-convolution)
- [dependency; published-backward] cex-right-continuous-psi-has-the-wrong-perron-endpoint (perron-inversion-and-the-explicit-formula-examples, frontier-32-batch-7) -> def-chebyshev-psi-function (chebyshev-bounds-and-mertens-theorems)
- [dependency; published-backward] lem-nonzero-number-field-ideal-has-finite-quotient (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> thm-ring-of-integers-free-of-rank-degree (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] thm-number-field-integral-ideal-factorisation-in-zf (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> thm-chinese-remainder-theorem-for-comaximal-ideals (artinian-rings-and-length)
- [dependency; published-backward] thm-principal-ideal-norm-is-absolute-field-norm (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> cor-trace-and-norm-of-an-algebraic-integer (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] cor-norm-of-a-prime-ideal (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-finite-field-and-its-order (algebraic-extensions-degree-and-finite-fields)
- [dependency; published-backward] def-prime-above-and-residue-degree (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-ring-of-integers-of-a-number-field (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] def-prime-above-and-residue-degree (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-finite-field-and-its-order (algebraic-extensions-degree-and-finite-fields)
- [dependency; published-backward] thm-dedekind-kummer-prime-factorisation (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-integral-basis-and-power-integral-basis (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] thm-ramified-primes-and-the-number-field-discriminant (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> thm-number-field-discriminant-is-well-defined-and-nonzero (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] def-trace-dual-and-codifferent-of-a-number-field (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-fractional-ideal (dedekind-domains-and-ideal-classes)
- [dependency; published-backward] def-trace-dual-and-codifferent-of-a-number-field (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> lem-trace-pairing-for-a-finite-separable-extension (dedekind-domains-and-ideal-classes)
- [dependency; published-backward] lem-codifferent-is-a-fractional-ideal (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-fractional-ideal (dedekind-domains-and-ideal-classes)
- [dependency; published-backward] def-different-of-a-number-field (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-invertible-fractional-ideal (dedekind-domains-and-ideal-classes)
- [dependency; published-backward] thm-different-of-a-monogenic-number-field (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-integral-basis-and-power-integral-basis (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] thm-discriminant-is-the-norm-of-the-different (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> thm-number-field-discriminant-is-well-defined-and-nonzero (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] thm-prime-support-of-the-different-is-ramification (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-prime-ideal-valuations-on-fractional-ideals (dedekind-domains-and-ideal-classes)
- [dependency; published-backward] cor-discriminant-valuation-from-different-exponents (prime-ideal-decomposition-ramification-and-the-different, frontier-32-batch-7) -> def-prime-ideal-valuations-on-fractional-ideals (dedekind-domains-and-ideal-classes)
- [dependency; published-backward] cex-dedekind-kummer-without-the-index-hypothesis (prime-ideal-decomposition-ramification-and-the-different-examples, frontier-32-batch-7) -> cor-order-index-discriminant-formula (number-fields-rings-of-integers-and-discriminants)
- [dependency; published-backward] ex-cyclotomic-different-preview (prime-ideal-decomposition-ramification-and-the-different-examples, frontier-32-batch-7) -> def-cyclotomic-extension (finite-fields-and-cyclotomic-extensions)
- [dependency; published-backward] def-category-with-translation (triangulated-categories, frontier-32-batch-8) -> def-additive-category (preadditive-and-additive-categories-and-biproducts)
- [dependency; published-backward] prop-zero-and-split-triangles-are-distinguished (triangulated-categories, frontier-32-batch-8) -> def-biproduct (preadditive-and-additive-categories-and-biproducts)
- [dependency; published-backward] def-homological-functor-on-a-triangulated-category (triangulated-categories, frontier-32-batch-8) -> def-additive-functor (preadditive-and-additive-categories-and-biproducts)
- [dependency; published-backward] def-homological-functor-on-a-triangulated-category (triangulated-categories, frontier-32-batch-8) -> def-abelian-category (abelian-categories)
- [dependency; published-backward] def-cohomological-functor-on-a-triangulated-category (triangulated-categories, frontier-32-batch-8) -> def-functor-and-contravariant-functor (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-cohomological-functor-on-a-triangulated-category (triangulated-categories, frontier-32-batch-8) -> def-abelian-category (abelian-categories)
- [dependency; published-backward] thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological (triangulated-categories, frontier-32-batch-8) -> thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups (preadditive-and-additive-categories-and-biproducts)
- [dependency; published-backward] cor-triangulated-five-lemma (triangulated-categories, frontier-32-batch-8) -> thm-five-lemma-for-a-morphism-of-long-exact-sequences (the-diagram-lemmas-in-an-abelian-category)
- [dependency; published-backward] prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes (triangulated-categories, frontier-32-batch-8) -> thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups (preadditive-and-additive-categories-and-biproducts)
- [dependency; published-backward] prop-a-distinguished-triangle-with-zero-first-map-is-split (triangulated-categories, frontier-32-batch-8) -> def-split-monomorphism-and-split-epimorphism (categories-functors-and-natural-transformations)
- [dependency; published-backward] prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes (triangulated-categories, frontier-32-batch-8) -> def-split-monomorphism-and-split-epimorphism (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-exact-functor-between-triangulated-categories (triangulated-categories, frontier-32-batch-8) -> def-additive-functor (preadditive-and-additive-categories-and-biproducts)
- [dependency; published-backward] def-exact-functor-between-triangulated-categories (triangulated-categories, frontier-32-batch-8) -> def-natural-isomorphism (categories-functors-and-natural-transformations)
- [dependency; published-backward] prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility (triangulated-categories, frontier-32-batch-8) -> def-natural-isomorphism (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-thick-subcategory (triangulated-categories, frontier-32-batch-8) -> def-split-monomorphism-and-split-epimorphism (categories-functors-and-natural-transformations)
- [dependency; published-backward] prop-the-total-kernel-of-a-cohomological-functor-is-thick (triangulated-categories, frontier-32-batch-8) -> def-split-monomorphism-and-split-epimorphism (categories-functors-and-natural-transformations)
- [dependency; published-backward] prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> def-homotopy-category-of-chain-complexes (chain-homotopy-and-the-homotopy-category)
- [dependency; published-backward] prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> def-exactness-of-a-complex-at-a-degree-and-acyclic-complex (chain-complexes-and-homology)
- [dependency; published-backward] prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> thm-the-cone-long-exact-sequence (long-exact-sequences-in-homology)
- [dependency; published-backward] prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> prop-finite-biproducts-of-complexes-are-computed-degreewise (chain-complexes-and-homology)
- [dependency; published-backward] def-standard-cone-triangle-in-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> def-homotopy-category-of-chain-complexes (chain-homotopy-and-the-homotopy-category)
- [dependency; published-backward] def-standard-cone-triangle-in-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> def-cone-triangle-of-a-chain-map (mapping-cones-cylinders-and-chain-triangles)
- [dependency; published-backward] def-standard-cone-triangle-in-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories (chain-homotopy-and-the-homotopy-category)
- [dependency; published-backward] lem-cone-triangles-satisfy-tr-one (triangulated-categories, frontier-32-batch-8) -> thm-the-cone-of-an-identity-map-is-contractible (mapping-cones-cylinders-and-chain-triangles)
- [dependency; published-backward] lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign (triangulated-categories, frontier-32-batch-8) -> thm-the-cone-of-an-identity-map-is-contractible (mapping-cones-cylinders-and-chain-triangles)
- [dependency; published-backward] lem-cone-triangles-satisfy-the-octahedral-axiom (triangulated-categories, frontier-32-batch-8) -> lem-the-three-cone-calculation-for-a-composite-chain-map (mapping-cones-cylinders-and-chain-triangles)
- [dependency; published-backward] thm-the-homotopy-category-of-an-abelian-category-is-triangulated (triangulated-categories, frontier-32-batch-8) -> def-homotopy-category-of-chain-complexes (chain-homotopy-and-the-homotopy-category)
- [dependency; published-backward] thm-the-homotopy-category-of-an-abelian-category-is-triangulated (triangulated-categories, frontier-32-batch-8) -> thm-the-homotopy-category-is-additive (chain-homotopy-and-the-homotopy-category)
- [dependency; published-backward] thm-the-homotopy-category-of-an-abelian-category-is-triangulated (triangulated-categories, frontier-32-batch-8) -> thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories (chain-homotopy-and-the-homotopy-category)
- [dependency; published-backward] thm-homology-is-a-homological-functor-on-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> thm-homology-factors-uniquely-through-the-homotopy-category (chain-homotopy-and-the-homotopy-category)
- [dependency; published-backward] thm-homology-is-a-homological-functor-on-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> thm-the-cone-long-exact-sequence (long-exact-sequences-in-homology)
- [dependency; published-backward] thm-homology-is-a-homological-functor-on-the-homotopy-category (triangulated-categories, frontier-32-batch-8) -> prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign (long-exact-sequences-in-homology)
- [dependency; published-backward] prop-an-additive-functor-on-abelian-categories-induces-an-exact-functor-on-homotopy-categories (triangulated-categories, frontier-32-batch-8) -> prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps (chain-complexes-and-homology)
- [dependency; published-backward] prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language (triangulated-categories, frontier-32-batch-8) -> def-quasi-isomorphism (chain-complexes-and-homology)
- [dependency; published-backward] prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language (triangulated-categories, frontier-32-batch-8) -> thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic (mapping-cones-cylinders-and-chain-triangles)
- [dependency; published-backward] prop-a-quasi-isomorphism-has-an-acyclic-cone-in-the-triangulated-language (triangulated-categories, frontier-32-batch-8) -> def-exactness-of-a-complex-at-a-degree-and-acyclic-complex (chain-complexes-and-homology)
- [dependency; published-backward] fs-the-third-map-in-a-morphism-of-triangles-is-unique (triangulated-categories, frontier-32-batch-8) -> def-zero-and-stalk-complex (chain-complexes-and-homology)
- [dependency; published-backward] fs-every-triangulated-subcategory-is-thick (triangulated-categories, frontier-32-batch-8) -> def-zero-and-stalk-complex (chain-complexes-and-homology)
- [dependency; published-backward] ex-the-cone-triangle-of-multiplication-by-m (triangulated-categories-examples, frontier-32-batch-8) -> def-zero-and-stalk-complex (chain-complexes-and-homology)
- [dependency; published-backward] ex-an-octahedron-for-two-composable-maps-of-stalk-complexes (triangulated-categories-examples, frontier-32-batch-8) -> lem-the-three-cone-calculation-for-a-composite-chain-map (mapping-cones-cylinders-and-chain-triangles)
- [dependency; published-backward] ex-an-octahedron-for-two-composable-maps-of-stalk-complexes (triangulated-categories-examples, frontier-32-batch-8) -> def-zero-and-stalk-complex (chain-complexes-and-homology)
- [dependency; published-backward] cex-a-three-term-zero-composite-diagram-that-is-not-distinguished (triangulated-categories-examples, frontier-32-batch-8) -> def-zero-and-stalk-complex (chain-complexes-and-homology)
- [dependency; published-backward] def-depth-with-respect-to-an-ideal (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-depth-infinity-when-ideal-acts-surjectively (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-nakayama-lemma (localisation-of-modules-and-support)
- [dependency; published-backward] lem-regular-element-exists-by-prime-avoidance (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-associated-prime-of-a-module (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-regular-element-exists-by-prime-avoidance (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-existence-of-associated-primes (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-regular-element-exists-by-prime-avoidance (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-finiteness-of-associated-primes (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-regular-element-exists-by-prime-avoidance (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-zero-divisor-annihilator-contained-in-associated-prime (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-regular-element-exists-by-prime-avoidance (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-finite-prime-avoidance (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-maximal-regular-sequence-stops-at-associated-prime (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-ext-depth-zero-identifies-annihilated-elements (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-balanced-ext-bifunctor (ext-and-balanced-resolutions)
- [dependency; published-backward] lem-ext-depth-shift-across-a-regular-element (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-ext-depth-shift-across-a-regular-element (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-long-exact-ext-sequence-in-the-second-variable (ext-and-balanced-resolutions)
- [dependency; published-backward] lem-depth-quotient-by-regular-element (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-associated-prime-after-power-regular-quotient (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-associated-prime-of-a-module (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-associated-prime-after-power-regular-quotient (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-associated-prime-equivalent-cyclic-embedding (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-associated-prime-after-power-regular-quotient (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-artin-rees-lemma (rees-modules-artin-rees-and-hilbert-samuel-theory)
- [dependency; published-backward] lem-associated-prime-after-power-regular-quotient (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-minimal-support-primes-are-associated (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-depth-bounded-by-associated-prime-quotient-dimension (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-krull-principal-ideal-theorem (krull-dimension-and-height-theorems)
- [dependency; published-backward] lem-depth-localisation-inequality (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-finite-prime-avoidance (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-depth-localisation-inequality (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-zero-divisor-annihilator-contained-in-associated-prime (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-depth-lemma-lower-bound-middle (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-long-exact-ext-sequence-in-the-second-variable (ext-and-balanced-resolutions)
- [dependency; published-backward] lem-depth-lemma-lower-bound-left (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-long-exact-ext-sequence-in-the-second-variable (ext-and-balanced-resolutions)
- [dependency; published-backward] lem-depth-lemma-lower-bound-right (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-long-exact-ext-sequence-in-the-second-variable (ext-and-balanced-resolutions)
- [dependency; published-backward] lem-koszul-depth-first-nonzero-cohomology (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-koszul-complex-of-a-sequence-with-coefficients (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-koszul-depth-first-nonzero-cohomology (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-regular-sequences-give-acyclic-koszul-complexes (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-koszul-depth-first-nonzero-cohomology (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-finiteness-of-associated-primes (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-koszul-depth-first-nonzero-cohomology (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-zero-divisor-annihilator-contained-in-associated-prime (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-koszul-depth-first-nonzero-cohomology (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-finite-prime-avoidance (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-koszul-depth-first-nonzero-cohomology (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-krull-height-theorem (krull-dimension-and-height-theorems)
- [dependency; published-backward] lem-depth-at-a-prime-bounded-by-local-dimension (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-depth-at-a-prime-bounded-by-local-dimension (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-dimension-and-parameters-for-modules (rees-modules-artin-rees-and-hilbert-samuel-theory)
- [dependency; published-backward] lem-depth-at-a-prime-bounded-by-local-dimension (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-krull-height-theorem (krull-dimension-and-height-theorems)
- [dependency; published-backward] def-cohen-macaulay-local-module-and-ring (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-support-of-a-module (localisation-of-modules-and-support)
- [dependency; published-backward] lem-regular-quotient-preserves-depth-dimension-gap (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> lem-parameter-dimension-drop-is-exact (krull-dimension-and-height-theorems)
- [dependency; published-backward] lem-associated-primes-of-cohen-macaulay-module-have-full-dimension (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-associated-prime-of-a-module (associated-primes-and-primary-decomposition)
- [dependency; published-backward] lem-cohen-macaulay-parameter-first-element-regular (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-dimension-and-parameters-for-modules (rees-modules-artin-rees-and-hilbert-samuel-theory)
- [dependency; published-backward] lem-cohen-macaulay-parameter-sequence-induction (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-dimension-and-parameters-for-modules (rees-modules-artin-rees-and-hilbert-samuel-theory)
- [dependency; published-backward] cor-one-regular-system-of-parameters-implies-cohen-macaulay (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-system-of-parameters-and-parameter-ideal (krull-dimension-and-height-theorems)
- [dependency; published-backward] lem-polynomial-extension-depth-increases-by-one (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-completion-preserves-regular-sequences (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-completion-preserves-regular-sequences (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-flatness-of-noetherian-completion (inverse-limits-and-noetherian-completion)
- [dependency; published-backward] lem-completion-preserves-regular-sequences (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-faithful-flatness-of-jacobson-adic-completion (inverse-limits-and-noetherian-completion)
- [dependency; published-backward] lem-completion-reflects-depth (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-faithful-flatness-of-jacobson-adic-completion (inverse-limits-and-noetherian-completion)
- [dependency; published-backward] cor-completion-preserves-cohen-macaulayness-two-directions (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-completion-preserves-dimension-and-hilbert-samuel-data (inverse-limits-and-noetherian-completion)
- [dependency; published-backward] lem-flat-local-depth-formula-regular-sequence-split (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-flat-and-faithfully-flat-modules-and-ring-maps (tensor-products-of-modules)
- [dependency; published-backward] lem-flat-local-depth-formula-regular-sequence-split (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> def-regular-sequence-on-a-module (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] lem-flat-local-depth-formula-regular-sequence-split (depth-and-cohen-macaulay-modules, frontier-32-batch-9) -> thm-localisation-and-flat-base-change-of-regular-sequences (koszul-complexes-and-regular-sequences)
- [dependency; published-backward] thm-relative-homology-of-consecutive-cw-skeleta (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> thm-excision-for-singular-homology (relative-homology-excision-and-mayer-vietoris)
- [dependency; published-backward] thm-relative-homology-of-consecutive-cw-skeleta (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient (relative-homology-excision-and-mayer-vietoris)
- [dependency; published-backward] thm-relative-homology-of-consecutive-cw-skeleta (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> cor-homology-of-spheres (relative-homology-excision-and-mayer-vietoris)
- [dependency; published-backward] def-cellular-boundary-from-three-consecutive-skeleta (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> thm-long-exact-sequence-of-a-pair-in-singular-homology (relative-homology-excision-and-mayer-vietoris)
- [dependency; published-backward] lem-the-cellular-boundary-squares-to-zero (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> thm-long-exact-sequence-of-a-pair-in-singular-homology (relative-homology-excision-and-mayer-vietoris)
- [dependency; published-backward] lem-skeletal-homology-stabilizes-away-from-the-cell-dimension (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> thm-long-exact-sequence-of-a-pair-in-singular-homology (relative-homology-excision-and-mayer-vietoris)
- [dependency; published-backward] lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> def-singular-chain-complex-and-singular-homology (singular-chains-and-singular-homology)
- [dependency; published-backward] thm-relative-cellular-homology-computes-relative-singular-homology (cw-complexes-and-cellular-homology, frontier-32-batch-10) -> cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient (relative-homology-excision-and-mayer-vietoris)
- [dependency; published-backward] def-product-varieties-universal-property (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-products-and-coproducts (limits-and-colimits)
- [dependency; published-backward] def-product-varieties-universal-property (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-affine-algebraic-set (affine-algebraic-sets-and-coordinate-rings)
- [dependency; published-backward] def-product-varieties-universal-property (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-projective-algebraic-set (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] thm-affine-variety-product-coordinate-ring (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-affine-variety-classical (affine-algebraic-sets-and-coordinate-rings)
- [dependency; published-backward] thm-affine-variety-product-coordinate-ring (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> cor-affine-algebraic-set-coordinate-duality-complete (morphisms-local-rings-and-rational-maps-of-affine-varieties)
- [dependency; published-backward] thm-affine-variety-product-coordinate-ring (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-affine-morphisms-coordinate-ring-anti-equivalence (morphisms-local-rings-and-rational-maps-of-affine-varieties)
- [dependency; published-backward] thm-affine-variety-product-coordinate-ring (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-coproduct-property-of-tensor-products-of-commutative-algebras (tensor-products-of-modules)
- [dependency; published-backward] thm-affine-variety-product-coordinate-ring (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-affine-variety-prime-coordinate-ring (affine-algebraic-sets-and-coordinate-rings)
- [dependency; published-backward] lem-affine-product-topology-not-product-topology (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-product-topology (subspaces-products-and-quotients)
- [dependency; published-backward] def-segre-map (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-projective-space-points (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] def-segre-map (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-morphism-to-projective-space-homogeneous-coordinates (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] lem-segre-map-well-defined-injective (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> lem-projective-coordinate-morphisms-well-defined (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] thm-segre-image-rank-one-minors (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-projective-algebraic-set (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] thm-segre-image-rank-one-minors (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-closed-projective-embedding-by-homogeneous-generators (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] cor-projective-variety-product-exists (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-projective-variety-classical (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] def-veronese-map (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-projective-space-points (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] def-veronese-map (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-morphism-to-projective-space-homogeneous-coordinates (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] lem-veronese-map-well-defined-closed-immersion (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> lem-projective-coordinate-morphisms-well-defined (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] lem-veronese-map-well-defined-closed-immersion (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-closed-projective-embedding-by-homogeneous-generators (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] cor-homogeneous-polynomial-becomes-hyperplane-section (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-degree-projective-hypersurface (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] def-grassmannian-subspaces (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-vector-space (vector-spaces-and-subspaces)
- [dependency; published-backward] def-grassmannian-subspaces (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-linear-subspace (vector-spaces-and-subspaces)
- [dependency; published-backward] def-grassmannian-subspaces (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-dimension (linear-independence-bases-and-dimension)
- [dependency; published-backward] def-plucker-coordinates (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-decomposable-k-vector-and-basic-wedge-product (exterior-powers-orientation-and-hodge-duality)
- [dependency; published-backward] def-plucker-coordinates (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> cor-the-top-exterior-power-acts-by-the-determinant (exterior-powers-orientation-and-hodge-duality)
- [dependency; published-backward] lem-plucker-map-well-defined-injective (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-exterior-algebra-laws (exterior-powers-orientation-and-hodge-duality)
- [dependency; published-backward] lem-plucker-map-well-defined-injective (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors (exterior-powers-orientation-and-hodge-duality)
- [dependency; published-backward] thm-plucker-image-closed (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-closed-projective-embedding-by-homogeneous-generators (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] thm-plucker-image-closed (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> thm-exterior-algebra-laws (exterior-powers-orientation-and-hodge-duality)
- [dependency; published-backward] lem-fibre-as-base-change-to-point-classical (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-regular-map-image-and-fibre-classical (morphisms-local-rings-and-rational-maps-of-affine-varieties)
- [dependency; published-backward] thm-multihomogeneous-map-to-projective-space (products-segre-and-veronese-embeddings-and-grassmannians, frontier-32-batch-11) -> def-morphism-to-projective-space-homogeneous-coordinates (projective-algebraic-sets-projective-morphisms-and-cones)
- [dependency; published-backward] cex-zariski-product-topology-too-coarse (products-segre-and-veronese-embeddings-and-grassmannians-examples, frontier-32-batch-11) -> def-product-topology (subspaces-products-and-quotients)
- [dependency; published-backward] def-open-set-category-topological-space (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-category (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-open-set-category-topological-space (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-topological-space (topological-spaces-and-continuity)
- [dependency; published-backward] def-presheaf-on-topological-space (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-functor-and-contravariant-functor (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-presheaf-on-topological-space (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> prop-sets-and-functions-form-category-set (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-morphism-of-presheaves (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-natural-transformation (categories-functors-and-natural-transformations)
- [dependency; published-backward] thm-sheaf-equalizer-condition (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-equalizers-and-coequalizers (limits-and-colimits)
- [dependency; published-backward] lem-sheaf-condition-check-on-basis (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-topology-basis-subbasis (topological-spaces-and-continuity)
- [dependency; published-backward] def-presheaf-of-groups-rings-modules (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> prop-groups-and-homomorphisms-form-category-grp (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-presheaf-of-groups-rings-modules (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> prop-rings-and-homomorphisms-form-category-ring (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-presheaf-of-groups-rings-modules (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> prop-modules-and-homomorphisms-form-category-rmod (categories-functors-and-natural-transformations)
- [dependency; published-backward] def-stalk-of-presheaf (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-neighbourhood-top (topological-spaces-and-continuity)
- [dependency; published-backward] def-stalk-of-presheaf (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-filtered-category-and-filtered-colimit (limits-and-colimits)
- [dependency; published-backward] lem-germ-equivalence-relation (presheaves-sheaves-stalks-and-sheafification, frontier-32-batch-12) -> def-equivalence-relation (relations-functions-and-quotients)

```

## Advisory failures

```json
[]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/frontier-32-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

# Step 6c — cross-batch audit and closure

Read `research/frontier-32-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/frontier-32-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run frontier-32 --id ITEM_ID` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/frontier-32-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.



## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
