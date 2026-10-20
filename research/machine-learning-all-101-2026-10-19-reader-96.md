# Step 3a reader report — batch 96

## Reviewed inventory

Assigned pages:

- `preference-learning-and-direct-preference-optimization` (A page)
- `preference-learning-and-direct-preference-optimization-examples` (B page)

Assigned items, reviewed in dependency order:

- Definitions: `def-kl-regularized-policy-improvement`, `def-bradley-terry-preference-model`.
- Results: `thm-finite-action-gibbs-policy-optimum`, `thm-dpo-reward-policy-reparameterization`.
- Remark: `rem-preference-coverage-and-model-misspecification`.
- Procedure and result: `alg-direct-preference-optimization-finite-budget`, `lem-finite-budget-dpo-properties-and-work`.
- Examples and counterexamples: `ex-two-response-kl-regularized-gibbs-policy`, `cex-disconnected-comparison-support-does-not-identify-policy`, `ex-prompt-reward-offset-leaves-policy-unchanged`, `cex-zero-reference-support-breaks-dpo-log-ratio`.

Opened direct item suppliers: `def-finite-kullback-leibler-divergence`, `def-natural-logarithm`, `def-binary-logistic-and-multiclass-softmax-models`, `def-proper-scoring-rule`, `thm-log-and-brier-strict-propriety`, `thm-chain-rule-for-total-derivatives`, `thm-logarithm-derivative-and-integral`, `thm-derivative-of-exponential`, `def-finite-straight-line-computational-program`, `def-c-one-map-and-local-inverse`, `alg-reverse-mode-automatic-differentiation`, `thm-reverse-mode-computes-gradient`, `cor-exponential-reciprocal-and-positivity`, and `thm-exponential-addition-formula`. I also opened `lem-finite-straight-line-program-defines-c1-map`, used by the reverse-mode correctness theorem.

## Review and repair

The finite Gibbs formula, its objective-gap identity, the Bradley–Terry reward reparameterization, and the DPO loss gradient are mathematically correct under the stated finite-set, full-support, and positive-temperature hypotheses. The original DPO paper states the corresponding Gibbs policy and reward relation in §4, Eqs. (4)–(6), the loss in Eq. (7), and the derivations in Appendices A.2 and A.4 ([Rafailov et al., arXiv:2305.18290v3](https://arxiv.org/pdf/2305.18290v3), pp. 3–4 and 15–16). I independently checked the finite versions against the local proofs. The fixed-prompt reward-offset remark and all four example/counterexample computations are correct. The comparison-graph TikZ diagram matches the stated edge set and components; its proof is independent of the diagram.

I repaired `thm-finite-action-gibbs-policy-optimum`, Proof step 4.1. The theorem allows a singleton response set, but the strict-propriety supplier `thm-log-and-brier-strict-propriety` is stated for $K\ge2$. The proof now handles the one-point simplex directly, then applies that supplier only when $|Y|\ge2$. The statement is unchanged. I updated the `unique-maximizer` derivation and singleton boundary evidence in `research/machine-learning-all-101-2026-10-19-batch-96.proof-contracts.json`. The item's `verification` had no `judge` record to remove.

Required validation for the changed item:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-finite-action-gibbs-policy-optimum.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-finite-action-gibbs-policy-optimum.md` — pass; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-finite-action-gibbs-policy-optimum.md` — 1 item, 4 steps, 0 defects.

## Defects not edited

None found in the assigned items or pages. No unresolved mathematical uncertainty or blocker remains.

## Page verdicts

- `preference-learning-and-direct-preference-optimization`: pass. Its frontmatter-only A-page inventory matches the seven assigned items and manifest prerequisites; `page_layout: compact-v1` is present.
- `preference-learning-and-direct-preference-optimization-examples`: pass. Its frontmatter-only B-page inventory matches the four assigned examples/counterexamples and companion prerequisite; `page_layout: compact-v1` is present.

Both page bodies are empty as required. No page prose was edited.
