---
id: lem-rmk-compact-set-formula-and-local-finiteness
kind: lemma
title: "Compact-set formula and local finiteness of the RMK measure"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rmk-open-sets-are-caratheodory-measurable, lem-rmk-functional-outer-content-is-well-defined, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]
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

For every compact $K\subseteq X$,
$$\mu(K)=\inf\{\Lambda(f):f\in C_c(X),\ \mathbf1_K\le f\}.$$
In particular $\mu(K)<\infty$.

## Facts & Assumptions

**Given:** The Borel measure $\mu$ constructed from $\Lambda$.

[L1] LCH cutoffs exist between a compact set and an open neighbourhood. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathbf1_K\le f\in C_c(X)$. For $0<\varepsilon<1$, the open set $U_\varepsilon=\{f>1-\varepsilon\}$ contains $K$. Every $g\prec U_\varepsilon$ satisfies $g\le f/(1-\varepsilon)$, so positivity gives $\rho(U_\varepsilon)\le\Lambda(f)/(1-\varepsilon)$. Outer regularity therefore yields $\mu(K)\le\Lambda(f)/(1-\varepsilon)$, and then $\mu(K)\le\Lambda(f)$. [given]

1.2 Conversely, for every open $U\supseteq K$, choose an open $V$ with [L1, choose]
$K\subseteq V\subseteq\overline V\subseteq U$ and compact closure. [L1]
applied to $K\subseteq V$ supplies $f\in C_c(X)$ with
$\mathbf1_K\le f\le\mathbf1_V$. Since $f=0$ off $V$,
$\operatorname{supp}f\subseteq\overline V\subseteq U$, and hence $f\prec U$.
Thus $\Lambda(f)\le\rho(U)$. Taking first the infimum over $f$, then over
$U$, gives the reverse inequality. For $K=\varnothing$, $f=0$ gives both
sides zero. [L1]

2.1 Choosing one relatively compact open neighbourhood $U$ of $K$ and the [step 1.1, step 1.2, L1]
cutoff produced in step 1.2 gives $\mu(K)\le\Lambda(f)<\infty$.
[step 1.1, step 1.2, L1] ∎
