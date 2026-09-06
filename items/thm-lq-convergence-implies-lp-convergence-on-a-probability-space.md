---
id: thm-lq-convergence-implies-lp-convergence-on-a-probability-space
kind: theorem
title: "$L^q$ convergence implies $L^p$ convergence on a probability space"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-lp-for-random-variables, def-probability-measure, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $1\le p<q\le\infty$ and $X_n\to X$ in $L^q$ on a probability space, then
$X_n\to X$ in $L^p$.

## Facts & Assumptions

**Given:** $1\le p<q\le\infty$ and $X_n\to X$ in $L^q$.

[L1] A probability measure has total mass one ([[def-probability-measure]]).

[L2] On a finite measure space, $\|f\|_p\le\mu(\Omega)^{1/p-1/q}\|f\|_q$ for $p<q$, including the $q=\infty$ case ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to $X_n-X$ and use [L1] to obtain the following bound. [L1, L2] $\|X_n-X\|_p\le\|X_n-X\|_q$. [L1, L2]

2.1 The right-hand side in step 1.1 tends to zero by the given $L^q$ convergence, so the left-hand side does too. This is $L^p$ convergence. [step 1.1] ∎
