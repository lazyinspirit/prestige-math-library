---
id: cex-almost-sure-convergence-need-not-imply-lp-convergence
kind: counterexample
title: "Almost-sure convergence need not imply $L^p$ convergence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-almost-sure-convergence-of-random-variables, def-convergence-in-lp-for-random-variables]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Example 3.11"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

Almost-sure convergence need not imply $L^p$ convergence, even for $1\le p<\infty$.

## Facts & Assumptions

**Given:** Lebesgue probability space $(0,1)$, $1\le p<\infty$, and
$X_n=(n+1)^{1/p}\mathbf1_{(0,1/(n+1))}$ for $n\in\mathbb N$.

[L1] Almost-sure convergence is pointwise convergence outside a null set ([[def-almost-sure-convergence-of-random-variables]]).

[L2] $L^p$ convergence requires the $L^p$ norm of the difference to vanish ([[def-convergence-in-lp-for-random-variables]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $x\in(0,1)$, eventually $1/(n+1)<x$, so $X_n(x)=0$. Thus $X_n\to0$ everywhere on $(0,1)$, hence almost surely by [L1]. [L1]

2.1 Yet $\mathbb E|X_n|^p=\int_0^{1/(n+1)}(n+1)\,dx=1$, so [step 1.1, L2]
$\|X_n\|_p=1$ for every $n$. By [L2], there is no $L^p$ convergence to zero.
[step 1.1, L2] ∎
