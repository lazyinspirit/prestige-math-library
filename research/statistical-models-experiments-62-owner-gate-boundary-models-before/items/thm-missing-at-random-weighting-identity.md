---
id: thm-missing-at-random-weighting-identity
kind: theorem
title: "Inverse response-probability weighting identifies the mean under MAR"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - alg-response-probability-weighting
  - def-axiom-of-choice
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-independence-given-a-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-full-observed-and-missing-data
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - lem-missing-at-random-integrable-factorization
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-monotone-convergence-for-the-integral
  - thm-tower-property-of-conditional-expectation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, updated author-hosted PDF"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "Chapter 8 §8.5, printed pp. 117–120; §12.6, printed pp. 172–173."
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
      locator: "Printed pp. 47–58 and 70–77, especially univariate IPW, positivity, and sensitivity assumptions."
    - title: "L. Mao, Missing Data: Foundations and Methods, Chapter 1"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
      locator: "§1.12, Weighted equations and causal inference, current HTML lines 304–353."
---

## Statement

Assume AC. Let $(\Omega,\mathcal F,P)$ be a probability space, $X$ a fully observed random element, $G=\sigma(X)$, $R\in\{0,1\}$ the response indicator ($R=1$ exactly when the real full-data outcome $Y$ is observed, under the one-outcome convention of [[def-full-observed-and-missing-data]]), and $Y\in L^1(P)$. Suppose $R$ and $Y$ are conditionally independent given $G$, the MAR condition in the assigned one-outcome, fully observed-$X$ formulation. Let $\pi$ be a chosen version of $E[R\mid G]$ and assume $\pi>0$ almost surely on the target law. Define $RY/\pi$ to be zero on the null set where $\pi=0$. Then $RY/\pi\in L^1(P)$ and
$$E\!\left[\frac{RY}{\pi}\right]=E[Y].$$

Here $\pi$ is the true response probability, not a fitted estimate. This is a population identity; by itself it gives no finite-sample stability or estimated-weight inference result.

## Facts & Assumptions

**Given:** AC, the probability space and random elements above, $Y\in L^1(P)$, $R\in\{0,1\}$, $R\perp\!\!\!\perp Y\mid G$, $\pi=E[R\mid G]$, and $\pi>0$ almost surely.

[L1] Under conditional independence, $E[R\varphi(Y)\mid G]=E[R\mid G]E[\varphi(Y)\mid G]$ for every Borel $\varphi$ with $\varphi(Y)$ integrable. ([[lem-missing-at-random-integrable-factorization]])

[F1] Conditional-expectation versions are measurable and integrable and have the defining event integrals. ([[def-conditional-expectation-given-a-sigma-algebra]])

[F2] Conditional expectation is positive, preserves order and constants, and preserves the unconditional expectation. ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]])

[F3] Assume AC. For $H\subseteq G$ and integrable $U$, $E[E[U\mid G]\mid H]=E[U\mid H]$ almost surely. ([[thm-tower-property-of-conditional-expectation]])

[F4] Increasing nonnegative measurable functions pass to the limit under the integral. ([[thm-monotone-convergence-for-the-integral]])

[F5] The expectation of an integrable real random variable is its Lebesgue integral. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])


[A1] AC is assumed for conditional independence, conditional-expectation existence, and the tower property used here. ([[def-axiom-of-choice]], [[def-conditional-independence-given-a-sigma-algebra]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-tower-property-of-conditional-expectation]])

## Proof

1.1 Let $G=\sigma(X)$ and choose the stated version $\pi=E[R\mid G]$. By [F2], $0\le\pi\le1$ almost surely, so replacing it by $\min(1,\max(0,\pi))$ gives a $G$-measurable version with $0\le\pi\le1$ everywhere. For each nonnegative $S\in\{|Y|,Y^+,Y^-\}$, choose a $G$-measurable version $U_S$ of $E[S\mid G]$, replace it by $\max(U_S,0)$, and set it equal to zero on $\{\pi=0\}$. Positivity [F2] and $\pi>0$ almost surely show these changes are on $G$-measurable null sets, so each $U_S$ remains a version by [F1]; it is pointwise nonnegative and vanishes on $\{\pi=0\}$. On $\{\pi>0\}$ set $q_m=\min(m,1/\pi)$ and set $q_m=0$ on $\{\pi=0\}$. For fixed $m$, the bounded $G$-measurable functions $q_{m,n}=2^{-n}\lfloor 2^nq_m\rfloor$ are simple, nonnegative, and increase to $q_m$. For any such $S$, [F1] gives $E[q_{m,n}RS]=E[q_{m,n}E[RS\mid G]]$ by summing the event-integral identities over the level sets of $q_{m,n}$. Applying [L1] with $\varphi(y)=|y|$, $y^+$, or $y^-$, then using [F4] on the increasing nonnegative products as $n\to\infty$, yields $E[q_mRS]=E[q_m\pi U_S]$. [given, A1, F1, F2, F4, L1, construct]

2.1 As $m\to\infty$, $q_mRS\uparrow RS/\pi$ under the stated zero convention. On $\{\pi>0\}$, $q_m\pi U_S=\min(m\pi,1)U_S\uparrow U_S$; on $\{\pi=0\}$ both sides are zero by the representative chosen in step 1.1. Thus $q_m\pi U_S\uparrow U_S$ pointwise. By [F4], the equalities in step 1.1 pass to these limits. The tower property [F3] with $H=\{\varnothing,\Omega\}$ gives $E[U_S\mid H]=E[S\mid H]$; by the defining event-integral property [F1], conditioning on this trivial sigma-algebra yields the constant unconditional expectation. Thus $E[U_S]=E[S]$, with [F5] identifying these finite expectations with their integrals. This holds for each of $S=|Y|,Y^+,Y^-$. In particular $E|RY/\pi|=E|Y|<\infty$. [given, F1, F2, F3, F4, F5, step 1.1]

3.1 Subtracting the finite identities for $Y^+$ and $Y^-$ from step 2.1 is legitimate by the absolute-integrability conclusion there. Since $Y=Y^+-Y^-$, this gives $E[RY/\pi]=E[Y]$. [F5, step 2.1, algebra] ∎

## Remarks

The proof uses the true conditional response probability and the explicit conditional-independence hypothesis. If $\pi$ is estimated, or if treatment and observation are weighted jointly, a separate sampling or joint/sequential law and its own positivity and proof are required. Strict positivity alone does not bound the weights; the companion example exhibits this boundary.
