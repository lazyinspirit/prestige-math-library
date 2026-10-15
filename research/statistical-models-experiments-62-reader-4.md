# Step 3a reader report — batch 4

Run: `statistical-models-experiments-62`  
Batch: `4`  
Role: `reader-4`  
Date: 2026-10-15

## Coverage and run state

I independently reviewed the current authored mathematics and its actual item dependencies. The live autopilot status at the start of the review showed the run in `3a-read`, with no worker then running and no read results yet collected. I did not change run controls or make a judgment stamp.

## Opened inventory

### Assigned pages

- `library/statistical-models-and-experiments/generalized-linear-models-and-fisher-scoring.md` — assigned A page.
- `library/statistical-models-and-experiments/generalized-linear-models-and-fisher-scoring-examples.md` — assigned B/examples page.

I also opened the page linked by the A-page summary, `library/statistical-models-and-experiments/scientific-statistical-model-contracts.md`, and its item supplier `items/def-scientific-statistical-model-contract.md`.

### Assigned items, read in dependency order

- Level 1: `def-glm-observation-family`.
- Level 2: `lem-glm-mean-and-variance-identities`; `lem-glm-product-density`.
- Level 3: `def-generalized-linear-model`.
- Level 4: `def-nested-model-deviance`; `thm-canonical-glm-score-and-hessian`; `thm-glm-general-link-score-and-information`.
- Level 5: `lem-nested-model-deviance-nonnegative`; `thm-canonical-glm-strict-concavity`; `alg-fisher-scoring-irls`.
- Level 6: `lem-fisher-scoring-irls-is-well-defined`; `thm-irls-is-fisher-scoring-step`.
- Examples: `ex-poisson-overdispersion`; `ex-identity-link-bernoulli-boundary`; `ex-logistic-separation-no-finite-mle`; `ex-singular-fisher-information-nonunique-irls`; `ex-bernoulli-logit-glm-one-step`; `ex-poisson-log-glm-one-step`.

### Mathematical suppliers opened

For the response-family and product-density arguments I opened `def-dominated-statistical-experiment`, `def-independent-random-elements`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-measure-with-density`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, and `thm-arithmetic-and-lattice-operations-preserve-measurability`.

For the mean and variance proof I opened `cor-mean-value-theorem`, `thm-dominated-convergence`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-moments-variance-and-covariance`, `thm-integration-against-a-density`, and `prop-order-and-scalar-rules-for-the-nonnegative-integral`.

For the score, information, and IRLS arguments I opened `thm-chain-rule`, `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`, `thm-factorization-of-expectations-for-independent-variables`, `thm-of-square-roots`, `def-moore-penrose-pseudoinverse`, `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`, and `thm-least-squares-solutions-and-normal-equation`. I also read `cor-moore-penrose-image-and-kernel-identities`, `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces`, `thm-adjoint-kernel-and-range-orthogonality`, and `thm-singular-value-decomposition` while checking those linear-algebra suppliers.

For the explicit example laws I opened `def-bernoulli-and-binomial-random-variables`, `lem-bernoulli-and-binomial-mean-and-variance`, `def-real-exponential-function-and-e`, `thm-exponential-addition-formula`, `def-factorial-and-falling-factorial`, `thm-derivative-of-exponential`, and `thm-logarithm-derivative-and-integral`. I inspected `def-scalar-poisson-count-law` and `lem-poisson-count-law-normalization-and-moments` as candidate context; the repaired Poisson examples state and verify their response law locally and do not add those current-run drafts to their dependency lists.

I reviewed `research/statistical-models-experiments-62-batch-4.proof-contracts.json` as evidence against the actual proofs, and checked the assigned manifest against the current item and page carriers.

## Repairs and evidence

1. **Product-measure prerequisites:** `def-glm-observation-family` specifies finite product response laws and a finite product base measure but did not list the product sigma-algebra and product-measure existence suppliers. I added `def-product-sigma-algebra-and-finite-product-sigma-algebras` and `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` to its dependencies. These suppliers establish the measurable product spaces and the finite products needed by its definition.

2. **Pointwise likelihood domain:** `def-glm-observation-family` guarantees positivity on its support only up to a fixed null set. Accordingly, I changed `lem-glm-product-density` to state the log-factorization only where every component factor is positive. I aligned `def-generalized-linear-model`, `def-nested-model-deviance`, `thm-canonical-glm-score-and-hessian`, `thm-glm-general-link-score-and-information`, and `alg-fisher-scoring-irls` with that pointwise domain. The strict-concavity theorem now also requires the fixed response's component densities to remain positive throughout the parameter domain. The source statement and proofs continue to assert the product-density identity without this extra pointwise restriction.

3. **Proof precision:** in `lem-glm-mean-and-variance-identities`, I qualified the off-support derivative statement by the fixed null exception. The density and its parameter derivatives vanish there almost everywhere, which is the condition needed by the integral argument.

4. **Algorithm title and page summary:** I retitled `alg-fisher-scoring-irls` as “One minimum-norm IRLS step.” Its definition supplies the minimum-norm update even at rank-deficient designs, while `thm-irls-is-fisher-scoring-step` identifies it with Fisher scoring only under additional regularity and invertible-information hypotheses. The A-page summary now states those hypotheses for the concavity result: open convex domain, full column rank, positive common scale, and positive curvature throughout the predictor image. It also distinguishes the one-step IRLS definition from the Fisher-scoring equivalence theorem.

5. **Example regularity:** the Bernoulli examples now give the normalized two-point mass and show finite moments and locally bounded first and second parameter derivatives on finite support. The Poisson examples now give the counting-measure mass, establish normalization from the exponential series, display the first two density derivatives, give a summable compact-parameter envelope, and compute a finite second moment. The corresponding published Bernoulli, exponential, logarithm, and factorial dependencies and proof-contract citations were added.

I updated the affected rows in `research/statistical-models-experiments-62-batch-4.proof-contracts.json` to match the corrected statements, new regularity facts, and cited suppliers. None of the changed items had a `verification.judge` record to remove.

## Validation

For all 15 changed items, `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` reported `unchanged`. The paired `precheck.mts` calls passed for all 11 proof-bearing items; the four definition/algorithm items returned `0 checked, 0 failing` as not applicable. After those commands, the single batched layout check reported `proof-layout: 15 items, 25 steps, 0 defects`.

## Page verdicts

- `generalized-linear-models-and-fisher-scoring` (A): **pass after the summary repair**. The summary now reflects the theorem hypotheses and describes the minimum-norm IRLS algorithm and its conditional Fisher-scoring interpretation accurately.
- `generalized-linear-models-and-fisher-scoring-examples` (B): **pass**. Its six examples and summary match the scoped calculations; I made no B-page edits.
- Linked context page `scientific-statistical-model-contracts`: **consistent with the A-page reference**. It describes the interpretation record and does not assert that mathematical model validity establishes empirical adequacy.

## Unedited defects and blocker

I found no confirmed mathematical defect in an uneditable assigned dependency or page.

The assigned batch manifest remains outside this reader's edit scope. Its batch-4 rows still have the pre-review dependency arrays for `def-glm-observation-family` and the six examples, and its algorithm title remains the old Fisher-scoring/IRLS title. The owner or engine must reconcile those manifest projections with the repaired item carriers before mechanical closure. The new dependencies are published suppliers, so they do not change the current-run dependency levels.

## Coverage note

I opened both assigned pages, all 18 assigned items, the linked model-contract page, and the item suppliers used by their mathematical arguments. I did not audit the full prose of all nine background pages listed in the batch manifest's `requires`; no claim here relies on their unreviewed page summaries. I consulted the MIT OpenCourseWare GLM lecture, PDF pp. 16–21 and 43–50, and the CMU GLM notes, PDF pp. 1–4, to check the cited family, score, and IRLS formulations: [MIT 18.650 Lecture 10](https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf), [CMU Generalized Linear Models notes](https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf). The repairs rely on the displayed local proofs and finite calculations, not on broader asymptotic or convergence claims from those notes.
