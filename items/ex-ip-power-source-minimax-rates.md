---
id: ex-ip-power-source-minimax-rates
kind: example
title: First-order power-source rates in polynomial and exponential spectra
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - cor-ip-mild-and-severe-estimation-rates
  - lem-ip-power-source-class-as-statistical-ellipsoid
  - def-ip-power-source-set
  - def-ip-gaussian-sequence-inverse-model
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the source-class and sequence-model definitions; the rate specialization is choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass

sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Definition 2 and §3, Table 1, PDF pp. 2 and 5–6"
      url: https://arxiv.org/pdf/1707.01706v2
---

## Example

Assume Countable Choice. Let $X$ and $Y$ be real Hilbert spaces, let $K:X\to Y$ be a compact operator of infinite rank, and write $s_1\ge s_2\ge\cdots>0$, $s_j\to0$, for its positive singular values. Set $Q=\rho>0$ and $\nu=1$. Over the minimum-norm power source ball $X_{1,\rho}(K)$ in the Gaussian sequence inverse model associated with this singular system, if $s_j\asymp j^{-1}$ then the minimax RMS error is of order $\epsilon^{2/5}$; if $s_j\asymp e^{-j}$ then it is of order $\epsilon^{1/2}$ as $\epsilon\downarrow0$. The constants may depend on $\rho$ and the fixed singular-value comparison constants.

## Example references

[[lem-ip-power-source-class-as-statistical-ellipsoid|Power source balls are weighted statistical ellipsoids]]

[[cor-ip-mild-and-severe-estimation-rates|Polynomial and exponential minimax estimation rates]]

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, Definition 2 and §3, Table 1](https://arxiv.org/pdf/1707.01706v2)

## Facts & Assumptions

[F1] [[lem-ip-power-source-class-as-statistical-ellipsoid]]: $X_{\nu,\rho}(K)$ has ellipsoid weights $a_j=s_j^{-\nu}$ and radius $Q=\rho$.

[F2] [[cor-ip-mild-and-severe-estimation-rates]]: For polynomial singular values with polynomial axes, the rate is $\epsilon^{\kappa/(\kappa+p+1/2)}$; for exponential singular values with exponential axes, the rate is $\epsilon^{\kappa/(p+\kappa)}$.

[F3] [[def-ip-power-source-set]] and [[def-ip-gaussian-sequence-inverse-model]]: The source class is $X_{\nu,\rho}(K)=\{|K|^\nu w:\|w\|_X\le\rho\}$ in the real Gaussian sequence inverse model.

[A1] [[def-countable-choice]]: Countable Choice is inherited through the compact singular system.

**Given:** Countable Choice, real Hilbert spaces $X,Y$, a compact infinite-rank operator $K:X\to Y$ with positive singular values $s_1\ge s_2\ge\cdots>0$ and $s_j\to0$, $\rho>0$, $\nu=1$, and either $s_j\asymp j^{-1}$ or $s_j\asymp e^{-j}$.

## Verification

1.1 If $s_j\asymp j^{-1}$, [F1] gives $a_j=s_j^{-1}\asymp j$, so the first formula of [F2] applies with $p=\kappa=1$ and gives $\epsilon^{2/5}$. [given, F1, F2, algebra]

1.2 If $s_j\asymp e^{-j}$, [F1] gives $a_j=s_j^{-1}\asymp e^j$, so the second formula of [F2] applies with $p=\kappa=1$ and gives $\epsilon^{1/2}$. [given, F1, F2, algebra]

2.1 By [A1], the compact singular-system coordinate model is interpreted with its stated Countable Choice prerequisite. Both substitutions use the exact coefficient ellipsoid from [F1] and preserve the stated radius $\rho$, so they yield the two source-ball rates in the Example. [given, A1, F1, F2, F3, step 1.1, step 1.2, algebra] ∎
