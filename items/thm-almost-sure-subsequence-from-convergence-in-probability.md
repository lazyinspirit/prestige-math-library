---
id: thm-almost-sure-subsequence-from-convergence-in-probability
kind: theorem
title: "An almost-surely convergent subsequence from convergence in probability"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-first-borel-cantelli-lemma-for-events, def-almost-sure-convergence-of-random-variables, def-convergence-in-probability, lem-almost-sure-convergence-event-is-measurable]
proof_strategy: constructive
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
---

## Statement

If $X_n\to X$ in probability, then some subsequence $X_{n_k}$ converges to
$X$ almost surely.

## Facts & Assumptions

**Given:** $X_n\to X$ in probability.

[L1] Convergence in probability makes each fixed-threshold error probability
eventually arbitrarily small ([[def-convergence-in-probability]]).

[L2] A summable sequence of event probabilities gives only finitely many of
those events almost surely ([[cor-first-borel-cantelli-lemma-for-events]]).

## Proof

**Proof technique:** constructive.

1.1 Recursively choose $n_k>n_{k-1}$ least subject to the following bound. [L1, construct]
$\mathbb P(|X_{n_k}-X|>2^{-k})<2^{-k}$; [L1] makes every choice possible.
Put $A_k=\{|X_{n_k}-X|>2^{-k}\}$. [L1, construct]

2.1 The bounds in step 1.1 are summable, so [L2] applies. [step 1.1, L2, discharge-construct]
It says only finitely many $A_k$ occur almost surely. Hence $|X_{n_k}-X|\le2^{-k}$
eventually almost surely, so $X_{n_k}\to X$ almost surely. [step 1.1, L2, discharge-construct] ∎
