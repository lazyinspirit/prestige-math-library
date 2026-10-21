# Step 3a reader report — batch 54

## Scope and inventory

I reviewed the batch-54 manifest independently and opened both assigned pages and all ten assigned items. I also opened the dependency statements and proofs needed to check the definitions, Gaussian identities, numerical bounds, and examples.

**Pages:** `bayesian-inverse-experimental-design-and-information-gain`; `bayesian-inverse-experimental-design-and-information-gain-examples`.

**Assigned items:** `def-ip-design-indexed-inverse-experiment`; `def-ip-expected-information-gain`; `thm-ip-eig-is-joint-relative-entropy`; `thm-ip-linear-gaussian-information-gain-logdet`; `alg-ip-finite-candidate-information-design`; `thm-ip-finite-candidate-information-design-correctness`; `cex-ip-eig-cannot-identify-wrong-forward-operator`; `ex-ip-eig-high-prior-variance-direction`; `ex-ip-eig-repeated-correlated-noise`; `ex-ip-eig-singular-prior-support`.

**Dependencies inspected:**

- Measure and probability: `def-measurable-space`; `def-finite-cardinality`; `def-probability-measure`; `def-measure-kernel-and-probability-kernel`; `def-finite-sigma-finite-and-semifinite-measures`; `def-product-sigma-algebra-and-finite-product-sigma-algebras`; `def-measurable-function-between-measurable-spaces`; `def-bayesian-posterior-as-regular-conditional-law`; `def-kullback-leibler-divergence`; `def-axiom-of-choice`; `thm-kullback-leibler-is-nonnegative`; `thm-bayes-formula-for-dominated-kernels`; `thm-conditional-density-formula`; `thm-tonelli-theorem-for-sigma-finite-product-spaces`; `thm-measure-uniqueness-on-a-sigma-finite-pi-system`; `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`; `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`; `thm-integration-against-a-density`; `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`.
- Gaussian model: `thm-ip-finite-linear-gaussian-posterior`; `thm-finite-gaussian-process-posterior-and-predictive-laws`; `thm-ip-function-space-posterior-propriety`; `def-ip-misfit-evidence-and-posterior-law`; `def-multivariate-normal-law`; `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`; `thm-nondegenerate-multivariate-normal-law-has-density`; `thm-non-negative-square-root-exists-and-is-unique`; `def-determinant-of-a-square-matrix`; `def-natural-logarithm`; `thm-determinant-multiplicative`; `def-gaussian-process`; `def-independent-random-elements`; `lem-measurable-functions-preserve-independence`; `lem-ip-singular-gaussian-support-and-pseudoinverse`.
- Numerical linear algebra: `def-cholesky-factorisation-with-positive-diagonal`; `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`; `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`; `thm-determinant-of-a-triangular-matrix`; `alg-rounded-cholesky-with-failure-status`; `lem-rounded-triangular-substitution-componentwise-backward-error`; `thm-rounded-cholesky-componentwise-and-normwise-backward-error`; `lem-information-matrix-perturbation-bound`; `lem-logdet-information-perturbation-bound`; `def-nonlinear-experimental-design-and-local-identifiability`.

Repository context consulted: `CLAUDE.md`, `README.md`, `briefs/reader.md`, the batch-54 manifest, and relevant `SCHEMA.md`/`WORKFLOW.md` guidance. The assigned pages contain YAML frontmatter only and no summaries. A scoped search found no TikZ or tikzcd diagrams in the assigned pages or items.

## Repairs and evidence

- **`def-ip-expected-information-gain`:** Added the missing measurability justification for the datum-indexed KL integrand. Tonelli gives measurability of the predictive density and positive/negative section integrals; the posterior density is the likelihood divided by the positive finite predictive density, with the infinite-likelihood null set removed. The KL definition supplies a finite negative part, and KL nonnegativity gives the stated `[0,+∞]` range. Added `thm-tonelli-theorem-for-sigma-finite-product-spaces` to `deps` and its definition-reference section.
- **`thm-ip-eig-is-joint-relative-entropy`:** Repaired Step 2.1. The proof now constructs the density measure for `Q_d`, verifies agreement with `Q_d` on rectangles, gives the increasing finite-measure rectangle exhaustion required by the cited uniqueness theorem, and then uses the density integration identity to establish the Radon–Nikodym derivative. Added the exact measure, integration, sigma-finiteness, and product-measure dependencies and their proof facts.
- **`alg-ip-finite-candidate-information-design`:** Added the missing branch: if any `CertifyScore` call returns `unresolved`, the algorithm returns `numerically-unresolved` without an optimum claim. Updated its boundary contract and refreshed the changed source quotes in the dependent contracts.
- Updated batch-54 proof-contract records for the new supplier facts, revised proof steps, and changed definitions. None of the three repaired items had a `verification.judge` record to remove.

**Required checks:** Reflow reported unchanged for all three changed items. Precheck reported `0 checked, 0 failing` for the two definition/algorithm items and `1 checked, 0 failing` for the theorem. The scoped strict proof-contract check passed `5/5` affected contracts with `0 errors, 0 warnings`. Final proof-layout check: `3 items, 4 steps, 0 defects`.

## Uneditable findings

These are published dependency files outside the assigned write scope. Their complete statements or definitions are interrupted by inline wikilinks, which must be moved to immediately following references sections under the uninterrupted-statement rule. The mathematical content is otherwise usable; these are fatal to the required editorial conformance.

- **`def-axiom-of-choice`, `## Definition`, quoted axiom sentence:** `[[def-choice-function]]` is embedded inside the displayed formulation. It interrupts the complete definition and should move to `Definition references`. The assigned consumer is `def-ip-expected-information-gain`.
- **`def-bayesian-posterior-as-regular-conditional-law`, `## Definition`, paragraphs 1–3:** Wikilinks to the joint-law, probability, random-element, regular-conditional-law, kernel, conditional-law, and Bayes suppliers occur inside the definition. Move them to a following `Definition references` section. The assigned consumer is `def-ip-design-indexed-inverse-experiment`.
- **`alg-rounded-cholesky-with-failure-status`, `## Definition`, instruction paragraphs; `## Remarks`, paragraph 1:** The instructions contain links to the Cholesky convention and operationwise model, and the remarks link to the termination lemma. Move these to following `Definition references` and `Remarks references` sections. The assigned consumer is `alg-ip-finite-candidate-information-design`.
- **`lem-rounded-triangular-substitution-componentwise-backward-error`, `## Statement`, opening paragraph:** The statement embeds a link to the operationwise floating-point model and has no following `Statement references` section. The assigned consumer is `alg-ip-finite-candidate-information-design`.
- **`lem-information-matrix-perturbation-bound`, `## Statement`, opening sentence:** The statement embeds a link to the nonlinear-design definition and has no following `Statement references` section. The assigned consumer is `alg-ip-finite-candidate-information-design`.
- **`def-nonlinear-experimental-design-and-local-identifiability`, `## Definition`, paragraphs 1–2; `## Remarks`, paragraph 1:** The definition embeds links to the differentiability and approximate-design definitions, and the remarks embed another approximate-design link. Move them to following `Definition references` and `Remarks references` sections. The assigned consumer is `alg-ip-finite-candidate-information-design`.

No mathematical dependency defect remained uneditable after the repairs above. No cross-batch in-run dependency finding was needed.

## Page verdicts

- **`bayesian-inverse-experimental-design-and-information-gain` (A page):** Page frontmatter and all six assigned items were reviewed. The page prose/layout is compliant; the EIG measurability gap and joint-KL exhaustion gap were repaired. Published dependency formatting findings are listed above.
- **`bayesian-inverse-experimental-design-and-information-gain-examples` (B page):** Page frontmatter and all four assigned examples/counterexample were reviewed. The page and those four items required no direct repair; their claims were checked against the repaired EIG/Gaussian suppliers. This page's dependency closure also reaches the published formatting findings above.

## Blocker and coverage

No workflow blocker was present at handoff. The run remained active, with no task in flight; the current status showed 59/109 reader batches and 51/109 split batches covered. The review covered every assigned page and item and the dependency sections needed to verify their claims. No external source search was needed to resolve mathematical uncertainty.
