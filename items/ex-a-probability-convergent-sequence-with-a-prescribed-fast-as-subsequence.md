---
id: ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence
kind: example
title: "A probability-convergent sequence with a prescribed fast almost-sure subsequence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-probability, thm-almost-sure-subsequence-from-convergence-in-probability]
proof_strategy: constructive
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
---

## Example

Suppose $X_n\to X$ in probability. Given any sequences $a_k>0$ with
$a_k\downarrow0$ and $b_k>0$ with $\sum_kb_k<\infty$, one can choose
increasing $n_k$ so that
$$\mathbb P(|X_{n_k}-X|>a_k)<b_k$$
and $X_{n_k}\to X$ almost surely.

## Facts & Assumptions

**Given:** $X_n\to X$ in probability, $a_k>0$ with $a_k\downarrow0$, and $b_k>0$ with $\sum_k b_k<\infty$.

[L1] Probability convergence supplies a later index for every positive threshold and positive bound ([[def-convergence-in-probability]]).

[L2] The least-index construction with a summable error schedule yields an almost-surely convergent subsequence ([[thm-almost-sure-subsequence-from-convergence-in-probability]]).

## Verification

**Proof technique:** constructive.

1.1 After $n_{k-1}$, choose $n_k$ least with $\mathbb P(|X_{n_k}-X|>a_k)<b_k$; [L1] makes every choice possible. [L1, construct]

2.1 The proof of [L2] uses only that the displayed probabilities are summable and that $a_k\to0$. Thus it applies to these $n_k$ and gives almost-sure convergence. [step 1.1, L2, discharge-construct] ∎
