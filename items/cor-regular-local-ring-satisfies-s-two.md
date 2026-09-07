---
id: "cor-regular-local-ring-satisfies-s-two"
kind: "corollary"
title: "regular local ring satisfies s two"
deps: ["def-serre-r-k-and-s-k-conditions", "cor-localisations-of-regular-local-rings-are-regular", "thm-regular-local-rings-are-domains-and-cohen-macaulay"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.157.5, S2 implication"
      url: "https://stacks.math.columbia.edu/tag/031O"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Every regular local ring satisfies $(S_j)$ for every integer $j\ge0$, in particular $(S_2)$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-serre-r-k-and-s-k-conditions]]: For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. A finite module $M$ satisfies $(S_j)$ if $\operatorname{depth}_{R_{\mathfrak p}}M_{\mathfrak p}\ge\min\{j,\dim\operatorname{Supp}_{R_{\mathfrak p}}M_{\mathfrak p}\}$ for every prime in its support. Outside the support the condition is vacuous, consistent with depth of the zero module being $+\infty$ and the empty support having no nonnegative dimension. Thus the zero module satisfies all $(S_j)$ conditions, and the zero ring satisfies both families vacuously.

[F2] [[cor-localisations-of-regular-local-rings-are-regular]]: Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$.

[F3] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$.

## Proof

1.1 At every prime the local ring is regular, hence Cohen–Macaulay. Its depth therefore equals its dimension. [F2, F3]

2.1 For every $j\ge0$, that dimension is at least its minimum with $j$, which is the $(S_j)$ inequality. The inequality includes $j=0$ and local dimension zero. [F1, step 1.1, algebra] ∎
