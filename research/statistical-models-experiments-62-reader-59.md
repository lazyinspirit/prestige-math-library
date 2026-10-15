# Step 3a reader report — batch 59

Run: `statistical-models-experiments-62`  
Role: reader  
Scope: batch `59`

## Inventory opened

- Batch manifest: `research/statistical-models-experiments-62-batch-59.pages.json`.
- Assigned A page: `library/statistical-models-and-experiments/sequential-likelihood-ratio-tests.md` (`sequential-likelihood-ratio-tests`).
- Assigned B page: `library/statistical-models-and-experiments/sequential-likelihood-ratio-tests-examples.md` (`sequential-likelihood-ratio-tests-examples`).
- Assigned items, reviewed in dependency order: `alg-sequential-likelihood-ratio-test`; `lem-iid-sequential-likelihood-ratio-factorization`; `thm-sequential-likelihood-ratio-test-error-bounds`; `thm-sequential-likelihood-ratio-test-terminates-under-drift`; `ex-bernoulli-sequential-likelihood-ratio-crossings`.
- Batch contracts: `research/statistical-models-experiments-62-batch-59.proof-contracts.json`; all five contract records were checked against the current item statements and proofs.

Direct item suppliers opened to check the assigned claims and proof uses:

- `def-axiom-of-choice`, `def-discrete-stopping-time`, `def-filtration-and-filtered-probability-space`, `def-likelihood-ratio-as-rn-derivative`, `def-probability-measure`.
- `def-identically-distributed-and-iid-random-variables`, `def-independent-random-elements`, `def-law-or-distribution-of-a-random-element`, `def-measurable-rectangle`, `def-pi-system`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `cor-continuous-functions-are-borel-measurable`, `lem-law-of-a-random-element-is-a-probability-measure`, `thm-rectangle-criterion-for-independent-random-elements`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-likelihood-ratio-change-of-measure`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-monotone-convergence-for-the-integral`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`.
- `def-adapted-and-integrable-stochastic-process`, `def-conditional-expectation-as-an-ae-class`, `def-conditional-expectation-given-a-sigma-algebra`, `def-martingale-submartingale-and-supermartingale`, `def-nonnegative-test-supermartingale`, `lem-conditional-expectation-is-unique-almost-surely`, `thm-conditional-expectation-exists-by-radon-nikodym`, `thm-villes-inequality`, `lem-measurable-functions-preserve-independence`, `thm-change-of-variables-for-expectation`, `thm-kolmogorov-iid-l1-strong-law`.

Additional proof-critical suppliers opened behind those arguments: `def-radon-nikodym-derivative`, `thm-optional-sampling-for-bounded-stopping-times`, `thm-bounded-predictable-transforms-preserve-martingales`, `cor-nonnegative-predictable-transforms-preserve-submartingale-gains`, `def-sigma-algebra-at-a-stopping-time`, `lem-stopped-random-variable-is-measurable-at-the-stopping-time`, `lem-summability-of-truncated-normalized-variances`, `lem-cesaro-limit-of-truncated-means`, `lem-iid-linear-truncation-occurs-only-finitely-often`, `thm-kolmogorov-strong-law-under-summable-normalized-variances`, `thm-kolmogorov-convergence-criterion`, and `lem-kronecker-summation-lemma`. The product-measure definition and the section-measurability and iterated-section-measure results used by Tonelli were also opened.

## Review and edit

The algorithm specifies its admissible inputs, chosen finite-time likelihood-ratio representatives, thresholds, branches, continuation, and infinite-time output. Its hypotheses support the finite-time density construction. The factorization lemma's rectangle and product-measure argument is valid under its stated IID and absolute-continuity assumptions. The error theorem correctly builds the forward likelihood-ratio martingale and reverse reciprocal martingale, then applies Ville's inequality without assuming termination. The drift theorem uses the (L^1) strong law with the required integrability and strict drift signs. The Bernoulli example's likelihood ratios, boundaries, block stopping argument, geometric error sums, and almost-sure stopping calculation are correct.

One citation locator was corrected in `items/thm-sequential-likelihood-ratio-test-terminates-under-drift.md`: both the `sources.references` title and the final Source notes now identify Durrett's Theorem 2.4.1 and proof as printed pages 76–78 rather than 76–77. The official fifth-edition PDF places the theorem statement on printed page 76 and completes its proof on printed page 78 ([Durrett, *Probability: Theory and Examples*, 5th ed.](https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf), §2.4, Theorem 2.4.1). The proof itself was unchanged, so the contract's proof-use records were unaffected; the item had no `verification.judge` record to remove.

The other assigned external locators were checked against the cited material: Wolpert's §1.2, PDF pages 4–5, presents the sequential likelihood-ratio rule and martingale error-control context ([Wolpert, *Introduction to Martingales*](https://www2.stat.duke.edu/courses/Fall18/sta711/lec/topics/mg.pdf)); Howard et al.'s Lemma 1 on PDF page 15 and its proof in §6.1 on PDF page 45 establish Ville's crossing bound ([Howard et al., *Time-uniform Chernoff bounds via nonnegative supermartingales*](https://arxiv.org/pdf/1808.03204)); Durrett's Theorem 2.1.11 on printed page 48 gives the finite IID product-law identity.

## Defect not edited

- Published dependency `thm-composition-with-borel-functions-preserves-measurability`, Proof step 1.1, has the phrase `Since g is measurable, [L1] gives [given, L1] ...` before repeating `[given, L1]` at the end of the step. The inline `[given, L1]` is a stray nonterminal proof-tag group and makes the step ill-formed. The underlying measurability inference is immediate, so this is nonfatal. It is a direct dependency of the assigned item `lem-iid-sequential-likelihood-ratio-factorization`; it was not edited because it is published content.

## Page verdicts

- `sequential-likelihood-ratio-tests` (A): pass. Its summary accurately states the procedure, terminal-error bounds without an almost-sure stopping assumption, and the separate drift conditions for almost-sure termination. The citation correction is contained in its assigned termination item; no page prose edit was needed.
- `sequential-likelihood-ratio-tests-examples` (B): pass. Its summary accurately describes the Bernoulli example, exact error probabilities, and both termination arguments. No page prose edit was needed.

## Validation and blocker

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-sequential-likelihood-ratio-test-terminates-under-drift.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-sequential-likelihood-ratio-test-terminates-under-drift.md`: PASS (direct), 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-sequential-likelihood-ratio-test-terminates-under-drift.md`: 1 item, 5 steps, 0 defects.
- Blocker: none.

## Coverage limitation

All assigned items and pages, the direct suppliers listed in the batch manifest, and additional proof-critical suppliers for the Ville and strong-law arguments were reviewed. The complete recursive foundational dependency closure was not audited; the declared graph expands to roughly 800 items. This report does not certify those unrelated background proofs beyond the statements and proof-critical supplier arguments inspected above.
