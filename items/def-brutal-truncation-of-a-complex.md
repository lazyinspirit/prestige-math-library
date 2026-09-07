---
id: "def-brutal-truncation-of-a-complex"
kind: "definition"
title: "Brutal truncation of a complex"
deps: ["def-cochain-complex-in-an-abelian-category"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/0118"
      title: "12.15, all four chain and four cochain truncations"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

For a cochain complex $X$ and $n\in\mathbb Z$, the **brutal truncations** are $(\sigma^{\leq n}X)^i=X^i$ for $i\leq n$ and zero otherwise, and $(\sigma^{\geq n}X)^i=X^i$ for $i\geq n$ and zero otherwise. Retain the differentials between retained terms and use zero for all other differentials. The former is a quotient $X\to\sigma^{\leq n}X$; the latter is a subcomplex $\sigma^{\geq n}X\to X$. These are functorial constructions of cochain complexes as in [[def-cochain-complex-in-an-abelian-category]]; no kernel or cokernel correction is made at the cut.
