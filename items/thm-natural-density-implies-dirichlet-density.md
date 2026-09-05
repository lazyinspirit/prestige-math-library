---
id: thm-natural-density-implies-dirichlet-density
kind: theorem
title: "Natural density implies Dirichlet density"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-natural-and-dirichlet-density, thm-dirichlet-series-summatory-integral]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Lemma 4.7"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $A\subseteq\mathbb N_{\ge1}$ has natural density $\delta$, then $A$ has
Dirichlet density $\delta$.

## Facts & Assumptions

**Given:** A subset $A\subseteq\mathbb N_{\ge1}$ with counting function $A(x)$ and natural density $\delta$.

[L1] Natural density means $A(x)=\delta x+o(x)$ ([[def-natural-and-dirichlet-density]]).

[L2] If the summatory function of coefficients is $O(x^\theta)$, Abel summation gives a Dirichlet-series integral formula ([[thm-dirichlet-series-summatory-integral]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the coefficients $a_n=\mathbf 1_A(n)$. Then for $s>1$ one has $\sum_{n\in A}n^{-s}=s\int_1^\infty A(x)x^{-s-1}\,dx$. Now write $A(x)=\delta x+E(x)$ with $E(x)=o(x)$ by [L1]. [L1, L2, given, algebra]

2.1 Substituting into step 1.1 gives $\sum_{n\in A}n^{-s}=\delta s\int_1^\infty x^{-s}\,dx+s\int_1^\infty E(x)x^{-s-1}\,dx=\delta s/(s-1)+s\int_1^\infty E(x)x^{-s-1}\,dx$. It therefore suffices to show that $(s-1)\int_1^\infty E(x)x^{-s-1}\,dx\to0$ as $s\downarrow1$. [step 1.1, algebra]

3.1 Fix $\varepsilon>0$. Because $E(x)=o(x)$, choose $X\ge1$ so that $|E(x)|\le\varepsilon x$ for every $x\ge X$. For $1<s\le2$, the quantity $\left|(s-1)s\int_1^\infty E(x)x^{-s-1}\,dx\right|$ is at most $(s-1)s\int_1^X |E(x)|x^{-s-1}\,dx+\varepsilon s(s-1)\int_X^\infty x^{-s}\,dx$. The first term tends to $0$ because the integral over $[1,X]$ is bounded, and the second term is at most $2\varepsilon X^{1-s}\le2\varepsilon$. Since $\varepsilon$ is arbitrary, the whole expression tends to $0$. Hence $(s-1)\sum_{n\in A}n^{-s}\to\delta$, which is exactly the Dirichlet-density statement from [[def-natural-and-dirichlet-density]]. [step 2.1, L1, algebra] ∎
