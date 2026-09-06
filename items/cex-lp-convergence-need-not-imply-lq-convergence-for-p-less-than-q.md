---
id: cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q
kind: counterexample
title: "$L^p$ convergence need not imply $L^q$ convergence when $p<q$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-lp-for-random-variables]
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

For $1\le p<q<\infty$, $L^p$ convergence need not imply $L^q$ convergence.

## Facts & Assumptions

**Given:** Lebesgue probability space $(0,1)$, $1\le p<q<\infty$, and
$X_n=(n+1)^{1/q}\mathbf1_{(0,1/(n+1))}$ for $n\in\mathbb N$.

[L1] $L^r$ convergence is vanishing of $\mathbb E|X_n-X|^r$ for the relevant exponent $r$ ([[def-convergence-in-lp-for-random-variables]]).

## Counterexample

**Proof technique:** direct.

1.1 Direct calculation gives [L1]
$\mathbb E|X_n|^p=(n+1)^{p/q-1}\to0$, since $p/q-1<0$. Thus
$X_n\to0$ in $L^p$ by [L1]. [L1]

2.1 But $\mathbb E|X_n|^q=(n+1)/(n+1)=1$ for every $n$, so the [step 1.1, L1]
$L^q$ norm never tends to zero. Hence [L1] rules out $L^q$ convergence.
[step 1.1, L1] ∎
