---
id: "def-serre-r-k-and-s-k-conditions"
kind: "definition"
title: "serre r k and s k conditions"
deps: ["def-embedding-dimension-and-regular-local-ring", "def-depth-with-respect-to-an-ideal", "def-height-of-a-prime-ideal"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Definition 10.157.1"
      url: "https://stacks.math.columbia.edu/tag/031O"
provenance:
  statement: literature-derived
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. A finite module $M$ satisfies $(S_j)$ if $\operatorname{depth}_{R_{\mathfrak p}}M_{\mathfrak p}\ge\min\{j,\dim\operatorname{Supp}_{R_{\mathfrak p}}M_{\mathfrak p}\}$ for every prime in its support. Outside the support the condition is vacuous, consistent with depth of the zero module being $+\infty$ and the empty support having no nonnegative dimension. Thus the zero module satisfies all $(S_j)$ conditions, and the zero ring satisfies both families vacuously.
