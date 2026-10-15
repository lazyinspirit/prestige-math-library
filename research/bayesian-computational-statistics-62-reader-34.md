# Step 3a reader report — batch 34

Run: `bayesian-computational-statistics-62`  
Role: reader  
Scope: BCS-31, Gibbs sampling and scan schemes

## Review basis and inventory

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `briefs/reader.md`, then the current batch manifest, notes, coverage record, cross-batch dependency record, and proof contracts. The records were treated as navigation and evidence, not as verdicts. The run status showed batch 34 still awaiting its Step 3a reader artifact.

Opened both assigned pages: `gibbs-sampling-and-scan-schemes` (A) and `gibbs-sampling-and-scan-schemes-examples` (B). Read all 16 assigned items in dependency order:

- Level 0: `def-gibbs-full-conditional-kernel`, `def-gibbs-reversibility-for-a-markov-kernel`, `def-finite-markov-chain-reducible`.
- Level 1: `cor-gibbs-density-formula-supplies-full-conditional-kernels`, `alg-gibbs-block-update`.
- Level 2: `cor-bivariate-normal-full-conditional-kernels`, `lem-gibbs-block-update-is-a-probability-kernel`, `alg-gibbs-scan-schemes`, `ex-single-site-gibbs-reducible-on-disconnected-support`.
- Level 3: `lem-gibbs-block-refresh-is-conditionally-independent`, `lem-gibbs-block-update-is-reversible-and-invariant`, `lem-gibbs-scan-schemes-are-probability-kernels`, `ex-bivariate-normal-gibbs-full-conditionals`.
- Level 4: `thm-random-scan-gibbs-is-reversible-and-invariant`, `thm-systematic-gibbs-sweep-preserves-target`.
- Level 5: `ex-systematic-gibbs-sweep-is-not-reversible`.

Opened the direct published item dependencies used by those items: `cor-additivity-of-the-nonnegative-lebesgue-integral`, `def-axiom-of-choice`, `def-composition-of-probability-kernels`, `def-conditional-independence-given-a-sigma-algebra`, `def-countable-choice`, `def-invariant-and-stationary-distribution-for-a-markov-kernel`, `def-measurable-function-between-measurable-spaces`, `def-measure-kernel-and-probability-kernel`, `def-moments-variance-and-covariance`, `def-multivariate-normal-law`, `def-probability-measure`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-regular-conditional-distribution`, `def-standard-normal-and-normal-laws`, `def-transition-matrix-and-n-step-transition-probabilities`, `lem-ac-supplies-sequential-choices-for-probability-constructions`, `lem-finite-products-of-probability-kernels`, `lem-kernel-composition-is-well-defined-and-associative`, `lem-prior-and-model-kernel-define-joint-law`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-conditional-density-formula`, `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets`, `thm-measurability-of-integration-against-a-kernel`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-monotone-convergence-for-the-integral`, and `thm-nondegenerate-multivariate-normal-law-has-density`.

For page context, opened the summaries of `general-state-mcmc-kernels-and-reversibility`, `metropolis-hastings-algorithm-and-invariance`, `mixed-effects-and-longitudinal-models`, and `structural-causal-models-dags-and-adjustment`, the A-page prerequisites in the current plan and the transitive general-state context recorded for the MH page. No BCS-31 item imports an item from those pages as a logical premise. Checked the proof-contract citations, derivation steps, and boundary/risk entries against the current item bodies.

## Mathematical review

The full-conditional definition is pointwise and correctly makes no existence claim. Its event identity matches the supplied conditional-kernel interface. The density corollary uses the published density formula only on finite positive marginal-density fibres and uses the supplied filler elsewhere; its rectangle-to-product-sigma extension uses finite-measure uniqueness with the whole space as a finite exhaustion member. The block-update procedure and scan algorithms specify their inputs, outputs, admissibility, update order, and kernel formulas. The finite-product coordinate maps used in the arguments are measurable from the rectangle-generated product sigma-algebras.

The Gaussian derivation preserves the strict hypotheses σX,σY > 0 and −1 < r < 1, verifies positive definiteness, completes the square in both coordinate orders, and normalizes the conditional densities by the stated change-of-variables result. The choice assumptions for the Gaussian suppliers and for the library's conditional-expectation-class definition of conditional independence are stated where used.

The block-update lemma correctly identifies the two-time flow as a mixture of symmetric product conditional measures, yielding detailed balance and then invariance. The conditional-independence lemma derives the bounded-function definition from rectangle tests and uniform simple-function approximation. The finite random-scan mixture preserves detailed balance by finite additivity and nonnegative homogeneity. The systematic-sweep induction uses chronological composition and the invariance of each component. Its finite witness has conditional rows matching the stated target masses and gives unequal two-time flows. The Gaussian nonreversibility example's covariance values are ρ and ρ³; at ρ = 1/2 they differ, while the sweep preserves the target. The diagonal-support example supplies both conditional kernels and exhibits proper closed singleton classes.

The item titles, statements, witnesses, computations, contracts, and page summaries agree with the arguments. The bibliography entries have valid titles and URLs; the Roberts–Rosenthal citation matches the checked sections. I could not independently check the Owen PDF's source support. No silent missing hypothesis or unsupported inference requiring repair was confirmed. Elementary uses of finite-product coordinate maps and the σ-finiteness of Lebesgue measure close directly from the stated product conventions and standard exhaustion by bounded intervals; they do not alter any claimed conclusion.

## Page verdicts

- `gibbs-sampling-and-scan-schemes` (A): no confirmed defect. The summary matches the proved pointwise-kernel, random-scan, systematic-scan, and exceptional-density-fibre results.
- `gibbs-sampling-and-scan-schemes-examples` (B): no confirmed defect. The diagonal-support, bivariate-normal, and systematic-sweep summaries match their examples.

## Edits, remaining defects, and blockers

No item or page was edited. No confirmed defect remains unedited. Since no item changed, reflow, precheck, and proof-layout were not run. No mathematical blocker remains.

The browser could not fetch Owen's author-hosted `Ch-MCMC.pdf` (403), so I do not claim to have independently read that source. I did read Roberts and Rosenthal, “General State Space Markov Chains and MCMC Algorithms,” §§2.2–2.3, PDF pp. 6–7: §2.2 states that composition preserves a common stationary law and need not preserve reversibility; §2.3 describes coordinate Gibbs updates from full conditionals, random-scan mixtures, systematic composition, and their stationarity/reversibility properties. The local batch proofs provide the general-kernel and exact measure-theoretic arguments. The four page-only prerequisites were reviewed at the page-summary level, not re-audited item by item; none is used as a logical supplier in the assigned proofs.
