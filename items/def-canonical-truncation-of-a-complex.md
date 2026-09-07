---
id: "def-canonical-truncation-of-a-complex"
kind: "definition"
title: "Canonical truncation of a complex"
deps: ["def-brutal-truncation-of-a-complex", "def-cohomology-object-of-a-cochain-complex"]
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
justified_by: ["lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology"]
---

## Definition

For a cochain complex $X$, define the **canonical truncations** by

$$ (\tau^{\leq n}X)^i=\begin{cases}X^i&i<n,\\\ker d_X^n&i=n,\\0&i>n,\end{cases}\qquad (\tau^{\geq n}X)^i=\begin{cases}0&i<n,\\\operatorname{coker}d_X^{n-1}&i=n,\\X^i&i>n.\end{cases} $$

The differential into $\ker d_X^n$ is the factorization of $d_X^{n-1}$; the differential out of $\operatorname{coker}d_X^{n-1}$ is induced by $d_X^n$. All other retained differentials are those of $X$. There are natural maps $\tau^{\leq n}X\to X\to\tau^{\geq n}X$. Unlike [[def-brutal-truncation-of-a-complex]], these constructions correct the boundary using the cycle and boundary objects of [[def-cohomology-object-of-a-cochain-complex]].
