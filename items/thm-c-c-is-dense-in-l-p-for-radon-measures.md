---
id: thm-c-c-is-dense-in-l-p-for-radon-measures
kind: theorem
title: "C_c(X) is dense in L^p(mu) for a Radon measure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radon-measure-on-an-lch-space, def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, def-l-p-space-as-a-quotient-by-null-functions]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

If $\mu$ is a Radon measure on an LCH space $X$ and $1\le p<\infty$, then $C_c(X)$ is dense in $L^p(\mu)$.

## Facts & Assumptions

**Given:** $\mu$ is Radon and $1\le p<\infty$.

[L1] Finite-measure-support simple functions are dense in $L^p$. ([[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]])

[L2] LCH cutoffs exist between compact and open sets. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 It suffices by [L1] to approximate $\mathbf1_E$ when $\mu(E)<\infty$. [L1, choose]
Given $\eta>0$, outer regularity gives open $U\supseteq E$ with
$\mu(U\setminus E)<\eta^p/2$, and inner regularity of $U$ gives compact
$K\subseteq U$ with $\mu(U\setminus K)<\eta^p/2$. [L1]

2.1 Choose $f\in C_c(X)$ with $\mathbf1_K\le f\le\mathbf1_U$ by [L2]. [step 1.1, L2]
Then
$$|f-\mathbf1_E|\le\mathbf1_{U\setminus K}+\mathbf1_{U\setminus E}.$$
Since both indicators take only the values zero and one and their union is
$U\setminus(K\cap E)$, while $0\le f,\mathbf1_E\le1$, the error is bounded
by the indicator of that union. Hence
$$\|f-\mathbf1_E\|_p^p\le\mu(U\setminus K)+\mu(U\setminus E)<\eta^p.$$
Thus $\|f-\mathbf1_E\|_p<\eta$. [step 1.1, L2]

3.1 Approximate the finitely many indicator terms of a simple function separately and sum the resulting $C_c$ functions. Then use [L1] and the triangle inequality. [step 2.1, L1] ∎
