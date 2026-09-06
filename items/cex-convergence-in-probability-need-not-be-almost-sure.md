---
id: cex-convergence-in-probability-need-not-be-almost-sure
kind: counterexample
title: "Convergence in probability need not be almost sure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-second-borel-cantelli-lemma-under-pairwise-independence, def-almost-sure-convergence-of-random-variables, def-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Example 3.11"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

Convergence in probability need not imply almost-sure convergence.

## Facts & Assumptions

**Given:** Independent events $E_n$ with $\mathbb P(E_n)=1/(n+1)$, and $X_n=\mathbf1_{E_n}$.

[L1] Pairwise independent events with divergent probability sum occur infinitely often almost surely ([[cor-second-borel-cantelli-lemma-under-pairwise-independence]]).

[L2] Convergence in probability is fixed-threshold tail convergence ([[def-convergence-in-probability]]).

## Counterexample

**Proof technique:** direct.

1.1 For $0<\varepsilon<1$, $\mathbb P(|X_n|>\varepsilon)=1/(n+1)\to0$; for $\varepsilon\ge1$ it is zero. Hence $X_n\to0$ in probability by [L2]. [L2]

2.1 But $\sum_n\mathbb P(E_n)=\infty$, so [L1] gives $E_n$ infinitely often almost surely. On that event $X_n$ has infinitely many values $1$, and therefore cannot converge to $0$. [step 1.1, L1] ∎
