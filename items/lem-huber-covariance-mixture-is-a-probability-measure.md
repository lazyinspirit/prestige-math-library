---
id: lem-huber-covariance-mixture-is-a-probability-measure
kind: lemma
title: The Gaussian Huber covariance mixture is a probability law
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-huber-covariance-model
  - def-probability-measure
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: AC is inherited only from the Gaussian-law supplier in the model definition; the convex-mixture calculation is choice-free.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, §2"
      url: "https://arxiv.org/pdf/1506.00691"
dependency_level: 3
---

## Statement

For every admissible $p,\epsilon,\Sigma,Q$ in
[[def-huber-covariance-model]], $P_{\epsilon,\Sigma,Q}$ is a probability
measure on the Borel subsets of $\mathbb R^p$.

## Facts & Assumptions

**Given:** A probability law $N_p(0,\Sigma)$, a Borel probability law $Q$,
and $0\le\epsilon\le1$.

[F1] [[def-huber-covariance-model]] defines
$P_{\epsilon,\Sigma,Q}=(1-\epsilon)N_p(0,\Sigma)+\epsilon Q$.

[F2] [[def-probability-measure]]: both component laws are nonnegative,
countably additive, and have total mass one.

## Proof

1.1 For each Borel set $A$, the mixture assigns $P_{\epsilon,\Sigma,Q}(A)=(1-\epsilon)N_p(0,\Sigma)(A)+\epsilon Q(A)$, which is nonnegative because both coefficients are nonnegative. Its value at the empty set is zero because each component measure vanishes there. [F1, F2, given, algebra]

2.1 Let $(A_j)_{j\ge1}$ be pairwise disjoint Borel sets. Countable additivity of the two component laws in [F2] gives their values on the union as the corresponding nonnegative series; distributing the fixed nonnegative coefficients over partial sums and taking limits yields $P_{\epsilon,\Sigma,Q}(\bigcup_jA_j)=\sum_jP_{\epsilon,\Sigma,Q}(A_j)$. The total mass is $(1-\epsilon)+\epsilon=1$. Together with step 1.1, these are the probability-measure axioms. [F1, F2, step 1.1, algebra] ∎