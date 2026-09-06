---
id: cex-convergence-in-probability-need-not-imply-lp-convergence
kind: counterexample
title: "Convergence in probability need not imply $L^p$ convergence"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-lp-for-random-variables, def-convergence-in-probability]
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

Convergence in probability need not imply $L^p$ convergence, for $1\le p<\infty$.

## Facts & Assumptions

**Given:** $1\le p<\infty$, events $E_n$ with
$\mathbb P(E_n)=1/(n+1)$, and $X_n=(n+1)^{1/p}\mathbf1_{E_n}$ for
$n\in\mathbb N$.

[L1] Convergence in probability is fixed-threshold tail convergence ([[def-convergence-in-probability]]).

[L2] $L^p$ convergence requires the $p$th moment of the difference to tend to zero ([[def-convergence-in-lp-for-random-variables]]).

## Counterexample

**Proof technique:** direct.

1.1 For fixed $\varepsilon>0$, $X_n$ is nonzero only on $E_n$, hence [L1]
$\mathbb P(|X_n|>\varepsilon)\le1/(n+1)\to0$. Thus $X_n\to0$ in
probability by [L1]. [L1]

2.1 Nevertheless, [step 1.1, L2]
$\mathbb E|X_n|^p=(n+1)\mathbb P(E_n)=1$ for all $n$. By [L2], $X_n$ does
not converge to zero in $L^p$. [step 1.1, L2] ∎
