---
id: thm-lp-convergence-implies-convergence-in-probability
kind: theorem
title: "$L^p$ convergence implies convergence in probability"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-markov-inequality-for-random-variables, def-convergence-in-lp-for-random-variables, def-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Let $1\le p<\infty$. If $X_n\to X$ in $L^p$, then $X_n\to X$ in probability.

## Facts & Assumptions

**Given:** $1\le p<\infty$ and $X_n\to X$ in $L^p$.

[L1] Markov's inequality bounds $\mathbb P(Z\ge a)$ by $\mathbb E Z/a$ for nonnegative $Z$ and $a>0$ ([[cor-markov-inequality-for-random-variables]]).

[L2] $L^p$ convergence means $\mathbb E|X_n-X|^p\to0$ ([[def-convergence-in-lp-for-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 For $\varepsilon>0$, apply [L1] to $Z=|X_n-X|^p$ with $a=\varepsilon^p$ to obtain [L1] $$\mathbb P(|X_n-X|>\varepsilon)\le\varepsilon^{-p}\mathbb E|X_n-X|^p.$$ [L1]

2.1 The bound in step 1.1 tends to $0$ by [L2], so the definition of convergence in probability applies. [step 1.1, L2] ∎
