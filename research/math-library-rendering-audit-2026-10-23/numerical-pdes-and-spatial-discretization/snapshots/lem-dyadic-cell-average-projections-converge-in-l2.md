---
id: lem-dyadic-cell-average-projections-converge-in-l2
kind: lemma
title: Dyadic cell-average projections converge strongly in L2 of a bounded set
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-l-p-space-as-a-quotient-by-null-functions, lem-b-adic-step-functions-dense-in-l2-cube, thm-linear-change-of-variables-for-lebesgue-measure, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-completion-measurable-functions-have-base-measurable-representatives, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used for the stated linear change-of-variables and completed-measurable representative suppliers. The projection argument uses finite sums and no further arbitrary-index choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §6"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
      locator: "Base-b elementary-box density in L2; the restriction to a bounded measurable set is proved locally."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Chapter 3, §3.3, the finite-dimensional discretization setting, printed pp. 60–65; dyadic projection convergence is derived locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^3$ be bounded and Lebesgue measurable, and choose a half-open cube $Q$ of positive side length containing $D$. Subdivide $Q$ into its nested dyadic cubes at mesh $h_N=2^{-N}\operatorname{side}(Q)$. Let $E_{N,j}=D\cap Q_{N,j}$ range over the finitely many cells of positive measure, let $V_N\subset L^2(D;\mathbb C)$ be the functions constant on each such cell, and define $P_N$ by replacing a function on each $E_{N,j}$ by its cell average. Then $P_N$ is the orthogonal projection onto $V_N$, $\|P_N\|\le1$, the spaces $V_N$ are increasing, and $P_Nv\to v$ in $L^2(D;\mathbb C)$ for every $v\in L^2(D;\mathbb C)$.

## Facts & Assumptions

**Given:** Countable Choice, a bounded measurable $D$, a positive-side containing cube $Q$, its nested dyadic partitions, and $v\in L^2(D;\mathbb C)$.

[F1] Finite linear combinations of dyadic box indicators are dense in real $L^2$ of the Borel cube ([[lem-b-adic-step-functions-dense-in-l2-cube]]); the complex conclusion follows by applying the real result to real and imaginary parts.

[F2] Complex $L^2$ Cauchy--Schwarz holds, and Lebesgue measure is invariant under translations and scales under invertible linear changes of variables ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-linear-change-of-variables-for-lebesgue-measure]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

[F3] Under Countable Choice, a function measurable for the completion is almost everywhere equal to a Borel-measurable function when the base sigma-algebra is Borel ([[thm-completion-measurable-functions-have-base-measurable-representatives]]).

## Proof

**Given:** Countable Choice, a bounded measurable $D$, a positive-side containing cube $Q$, its nested dyadic partitions, and $v\in L^2(D;\mathbb C)$.

1.1 For each positive-measure cell $E_{N,j}$ the average is finite by Cauchy–Schwarz, since $\int_{E_{N,j}}|v|\le |E_{N,j}|^{1/2}\|v\|_{L^2(E_{N,j})}$. For every function constant on the cells, the integral of $v-P_Nv$ against that function is zero cell by cell. Thus $v-P_Nv\perp V_N$ and $P_Nv\in V_N$, so $P_N$ is the orthogonal projection. Pythagoras gives $\|P_Nv\|_2\le\|v\|_2$. [given, F2, construct, algebra]

1.2 Extend $v$ by zero from $D$ to $Q$. The extension is measurable for completed Lebesgue measure; rescale and translate $Q$ to $[0,1)^3$, which preserves completed measurability by [F2]. Apply [F3] separately to the real and imaginary parts to obtain a Borel-measurable representative of the rescaled extension equal to it almost everywhere. This representative is in Borel $L^2$ because the original extension is square integrable and the affine change multiplies its squared integral by the fixed positive factor $\operatorname{side}(Q)^{-3}$. Applying [F1] to its real and imaginary parts gives dyadic box step functions converging in Borel $L^2([0,1)^3)$, hence also in completed $L^2$. Pulling them back to $Q$ and restricting to $D$ preserves convergence up to the fixed affine measure factor. Every finite family of base-2 boxes is constant on the cells of a sufficiently fine common dyadic partition, so the restrictions belong to some $V_N$. Thus $\bigcup_NV_N$ is dense in $L^2(D;\mathbb C)$; the partitions are nested, so $V_N\subseteq V_{N+1}$. [F1, F2, F3, given, construct]

2.1 Fix $\varepsilon>0$. By step 1.2 choose $w\in V_m$ with $\|v-w\|_2<\varepsilon/2$. For every $N\ge m$, nesting gives $P_Nw=w$. Therefore $\|P_Nv-v\|_2\le\|P_N(v-w)\|_2+\|v-w\|_2\le2\|v-w\|_2<\varepsilon$, by step 1.1. Thus $P_Nv\to v$ in $L^2(D;\mathbb C)$. [given, step 1.1, step 1.2, algebra] ∎
