# Step 3a reader report — batch 97

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-97`)  
Scope: batch `97` only

## Opened inventory

Assigned pages:

- `library/machine-learning/discrete-masked-diffusion-and-reverse-generation.md` (A page): frontmatter only, `page_layout: compact-v1`, draft status, 15 assigned items, and no summary body.
- `library/machine-learning/discrete-masked-diffusion-and-reverse-generation-examples.md` (B page): frontmatter only, `page_layout: compact-v1`, draft status, and three assigned examples/counterexamples with no summary body.

Assigned items reviewed in dependency order:

- `def-finite-masking-diffusion-chain`
- `lem-finite-state-kernel-error-controls-mixtures`
- `lem-finite-product-kl-additivity`
- `thm-finite-chain-reverse-kernel-error-telescope`
- `lem-finite-masking-chain-is-well-defined`
- `alg-finite-grid-masked-diffusion-sampler`
- `lem-finite-grid-masked-sampler-is-well-defined`
- `thm-masking-chain-posterior`
- `lem-finite-masking-path-reversal-factorization`
- `thm-masked-diffusion-kl-reduces-to-cross-entropy`
- `def-finite-masked-diffusion-generative-model`
- `lem-finite-masked-generative-joint-law-is-normalized`
- `lem-forward-path-is-admissible-for-finite-masked-model`
- `cor-masked-diffusion-finite-elbo-cross-entropy`
- `rem-discrete-diffusion-factorization-and-endpoint-limits`
- `ex-finite-chain-model-error-accumulates-with-zero-mesh-error`
- `cex-factorized-reverse-kernel-fails-for-correlated-tokens`
- `ex-masked-diffusion-single-token-posterior`

Direct item suppliers opened to check the arguments:

- Published: `def-measure-kernel-and-probability-kernel`, `def-total-variation-distance-for-probability-laws`, `def-finite-kullback-leibler-divergence`, `lem-total-variation-coupling-and-kernel-contraction`, `def-variational-family-and-elbo`, `def-axiom-of-choice`, and `thm-elbo-kl-decomposition`.
- Current-run batch-2 suppliers: `def-supervised-learning-problem`, `def-population-and-empirical-risk`, and `lem-population-and-empirical-risk-are-measurable`. Their current carriers were inspected for the use in `thm-masked-diffusion-kl-reduces-to-cross-entropy`; no defect was found.
- Additional supporting results opened for the cited supplier arguments: `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-measurable-function-between-measurable-spaces`, `def-extended-real-valued-measurable-function`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-loss-function-and-risk`, and `thm-kullback-leibler-is-nonnegative`.

The batch dependency-input record identified the three risk items above as current-run batch-2 suppliers and reported no unresolved suppliers. I did not treat its readiness labels as mathematical verdicts.

## Review and edits

1. In `items/def-finite-masking-diffusion-chain.md`, the text before the TikZ diagram said it displayed “exactly the nonzero transition probabilities.” Since `r_N=\alpha_N/\alpha_{N-1}=0`, the drawn clean-state loop is zero at the terminal step. I changed the description to say that the diagram records transition formulas and to identify the terminal zero-probability loop. The three arrows and their labels agree with the definition.

2. In `items/rem-discrete-diffusion-factorization-and-endpoint-limits.md`, the remark said Sahoo et al. explicitly qualify their use of “Rao–Blackwellization” as loose. The cited paper does not make that qualification. I replaced that sentence with the supported description: it labels zero-masking and carry-over substitutions “RB techniques” and calls the simplified objective “Rao–Blackwellized”; this finite identity itself asserts no variance-reduction theorem. I also corrected the source locator to §3.3 and Appendix B.1.1–B.1.2.

3. In `items/thm-masking-chain-posterior.md` and `items/ex-masked-diffusion-single-token-posterior.md`, the source locator cited Eq. (8) for the posterior, but Eq. (8) is the diffusion loss. I corrected both locators to §3.2.1, Eq. (6), and Appendix A.2.1, Eqs. (19)–(22).

4. In `items/lem-finite-masking-path-reversal-factorization.md`, the old locator described Appendix A.2 as proving the whole-path factorization. That appendix gives the one-step posterior rows; the path factorization is established in the item’s own finite conditioning proof. I changed the locator to identify the source’s one-step posterior equations and explicitly state that the factorization is proved locally.

The source checks used Sahoo et al., [*Simple and Effective Masked Diffusion Language Models*](https://arxiv.org/pdf/2406.07524v1), especially §3.2.1 Eq. (6), §3.2.3, §3.3 Eq. (8), Appendix A.2.1 Eqs. (19)–(22), and Appendix B.1.1–B.1.2 Eqs. (39)–(41). These passages support the absorbing-mask posterior and the paper’s terminology, but do not state that “Rao–Blackwellization” is used loosely. I also checked Austin et al., [*Structured Denoising Diffusion Models in Discrete State-Spaces*](https://papers.neurips.cc/paper/2021/file/958c530554f78bcd8e97125b70e6973d-Paper.pdf), §3 Eq. (3) and the absorbing-state discussion in §3. The assigned finite proofs supply their own normalization, posterior, product-KL, telescope, and ELBO steps.

No proof contract required a change: the proofs and their claims were not altered. The changed definition and remark have no proof-contract entries. None of the edited items contained a stale `verification.judge` record.

## Validation

- Reflow ran for all five changed items and reported each unchanged.
- Precheck ran for all five changed items: zero failures. The theorem, lemma, and example proof checks each passed.
- Final required layout check: `node tools/proof-layout.mjs items/def-finite-masking-diffusion-chain.md items/rem-discrete-diffusion-factorization-and-endpoint-limits.md items/thm-masking-chain-posterior.md items/lem-finite-masking-path-reversal-factorization.md items/ex-masked-diffusion-single-token-posterior.md` — 5 items, 7 proof steps, 0 defects.

## Page verdicts

- A page `discrete-masked-diffusion-and-reverse-generation`: pass. Its draft inventory matches the 15 assigned A items, the body is empty, and its only TikZ diagram is accurate after the caption repair.
- B page `discrete-masked-diffusion-and-reverse-generation-examples`: pass. Its draft inventory matches the three assigned example/counterexample items, and its body is empty. The witnesses and computations checked out; no B-page prose was edited.

## Unedited defects and blockers

- Unedited defects: none found.
- Batch blocker: none.
- At review time the autopilot status also showed existing `3a-collect` and `3a-split` blockers for batches 57 and 89; these are outside batch 97 and did not block this review.

## Coverage note

All 18 assigned items, both assigned pages, and the direct item suppliers used by the proofs were opened. I did not independently re-audit unrelated transitive dependencies of the published suppliers or the narrative content of page-level prerequisites that no item proof used.
