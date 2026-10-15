# Step 3a reader report — batch 8

Run: `bayesian-computational-statistics-62`  
Role: reader (`reader-8`)  
Review date: 2026-10-15

## Opened inventory

### Assigned pages

- `library/bayesian-computational-statistics/hierarchical-bayesian-models-and-partial-pooling.md` (A page)
- `library/bayesian-computational-statistics/hierarchical-bayesian-models-and-partial-pooling-examples.md` (B page)

### Assigned items, in dependency order

1. `lem-finite-products-of-dominated-kernels-have-product-density`
2. `lem-normal-location-scale-density`
3. `def-hierarchical-bayesian-model`
4. `thm-hierarchical-latent-tuple-has-rcd-given-data`
5. `thm-hierarchical-posterior-normalization-on-positive-finite-evidence`
6. `thm-normal-normal-hierarchical-shrinkage`
7. `def-current-and-new-group-posterior-predictive-laws`
8. `thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels`
9. `ex-improper-variance-hyperprior-can-make-posterior-improper`
10. `ex-full-hyperposterior-versus-plug-in-normal-hierarchy`
11. `ex-hierarchical-normal-pooling-extremes`

### Required-page context

- `library/bayesian-computational-statistics/conjugate-families-and-posterior-prediction.md`
- `library/probability/markov-kernels-and-markov-chains.md`
- `library/statistical-models-and-experiments/structural-causal-models-dags-and-adjustment.md`

### Direct dependency items inspected

- Product measure and density foundations: `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-extended-real-valued-measurable-function`, `lem-q-and-irrationals-dense-r`, `lem-finite-products-of-probability-kernels`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, and `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`.
- Normal-law and choice dependencies: `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `def-axiom-of-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-countable-choice`, and `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`.
- Model, kernel, and conditional-law dependencies: `def-parametric-statistical-model`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-measure-kernel-and-probability-kernel`, `def-standard-borel-space`, `def-conditional-independence-given-a-sigma-algebra`, `thm-independent-random-elements-have-product-joint-law`, `lem-prior-and-model-kernel-define-joint-law`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, and `def-regular-conditional-distribution`.
- Posterior and predictive dependencies: `thm-bayes-formula-for-dominated-kernels`, `thm-conditional-density-formula`, `thm-normal-normal-conjugate-update`, `thm-measurability-of-integration-against-a-kernel`, `thm-sections-of-product-measurable-functions-are-measurable`, `thm-conditional-integration-through-a-regular-conditional-law`, `thm-monotone-convergence-for-the-integral`, `def-bayesian-model-as-prior-and-sampling-kernel`, `def-posterior-evidence-normalizer-and-fiberwise-update`, and `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`.

I also read `research/bayesian-computational-statistics-62-batch-8.proof-contracts.json`, `research/bayesian-computational-statistics-62-batch-8.cross-batch-dependencies.json`, the batch notes, coverage record, and the live run status. Contracts and earlier decisions were treated as navigation and evidence; the findings below come from the current item and source text.

## Review result and edit

The current proofs support their claims. The finite product density proof handles extended nonnegative values under its stated `0·∞=0` convention, and the product-measure uniqueness step has a finite exhaustion by the whole product. The latent-tuple RCD and the likelihood posterior use distinct, compatible results: the former gives existence at every point under AC, while the latter gives the normalized density only on positive finite evidence fibers and uses the prior filler elsewhere. The Normal–Normal specialization has the required pointwise likelihood version and positive variances; its finite-group factorization and full hyperparameter mixture are justified. The posterior-predictive kernels are measurable probability kernels, and their conditional-event identities hold under the explicitly constructed product extension. The improper-scale integral diverges at zero by the disjoint dyadic lower bounds. The two-point mixture and pooling-limit calculations are correct.

I repaired one source locator in `items/thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels.md`. Its prior wording, “current-group prediction conditions on its posterior mean,” could be read as a plug-in posterior expectation. The cited source instead simulates the within-group observation at posterior draws of the observed group's mean and scale. Bayes Rules! Chapter 16, §16.5, lines 472–479 gives that current-group construction; lines 514–520 first draw a new group's mean from the population model and then draw its observation. The locator now states those two procedures accurately. The local proof-contract row records internal hypotheses and derivations, not bibliographic locators, so it was unaffected. This item has no `verification.judge` record to remove.

For the source check, see [Bayesian Data Analysis, 3rd ed., Chapter 5](https://sites.stat.columbia.edu/gelman/book/BDA3.pdf): §5.2, printed p. 105, says the finite exchangeability result does not follow from de Finetti's infinite limit; §5.4, printed pp. 115–118, gives the conditional Normal update, its groupwise independence, and the current/new-batch predictive construction; §5.7, printed pp. 129–130, explains why a uniform prior on `log τ` yields infinite posterior mass when the marginal likelihood approaches a finite nonzero limit as `τ→0`. The web extractor could not open the 56 MB original PDF, so I inspected the same edition from the coauthor-hosted [Aalto PDF mirror](https://users.aalto.fi/~ave/BDA3.pdf). The official [Bayes Rules! Chapter 15](https://www.bayesrulesbook.com/chapter-15.html) supports the complete/no/partial-pooling discussion; [Chapter 16](https://www.bayesrulesbook.com/chapter-16.html) §§16.3, 16.5, and 16.6 supports the hierarchy, current/new-group distinction, and shrinkage context.

Validation after the locator edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels.md` — 1 item, 3 steps, 0 defects.

No proof contract required a change because the proof derivations and internal citations were unchanged. No item mathematics or page prose was edited.

## Defects that could not be edited

None found. No finding remains for another batch, a published dependency, or page prose.

## Page verdicts

- **`hierarchical-bayesian-models-and-partial-pooling` (A): sound.** Its summary accurately describes the finite product-kernel assumption, evidence restriction, conditional shrinkage, hyperparameter uncertainty, current/new-group predictions, and the finite-exchangeability caveat. No page edit.
- **`hierarchical-bayesian-models-and-partial-pooling-examples` (B): sound.** Its summary accurately describes the degenerate complete-pooling boundary, no-pooling limit, two-point hyperposterior comparison, and improper log-scale hyperprior example. No page edit.

The other-batch current-run suppliers `thm-normal-normal-conjugate-update`, `def-posterior-evidence-normalizer-and-fiberwise-update`, and `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence` were opened and support their assigned consumers; no in-run dependency finding is needed.

## Blocker and coverage note

There is no mathematical blocker for batch 8. At the final live-status check, the run remained active in `3a-read` with other batch artifacts outstanding and no worker in flight; that run-wide wait does not prevent this batch's handoff. I inspected the directly cited dependencies and their relevant statements/proofs but did not re-audit every transitive foundational dependency of those established library results.
