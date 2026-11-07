---
id: def-uniform-distribution-mod-one-in-k-dimensions
kind: definition
title: Uniform distribution modulo one in k dimensions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-equidistribution-mod-one
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Definition 1.1, §1, box-frequency convention and T^k identification"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Definition 1.1, §1, box-frequency convention and T^k identification; full relevant passage inspected"
    - title: L. Kuipers and H. Niederreiter, Uniform Distribution of Sequences
      url: https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf
      locator: "Chapter 4, §1, uniform distribution in compact groups and Haar measure, printed pp. 220–228"
---

## Definition

Let $k\ge1$. Write $\mathbb T^k=(\mathbb R/\mathbb Z)^k$ and give it normalized product Lebesgue measure. For a sequence $x_n=(x_{n,1},\ldots,x_{n,k})\in\mathbb R^k$, indexed by $n\ge1$, say that $(x_n)$ is **uniformly distributed modulo one** if for every half-open box $B=\prod_{j=1}^k[u_j,v_j)\subseteq[0,1)^k$, where $0\le u_j\le v_j\le1$,

$$\frac1N\#\left\{1\le n\le N:(\{x_{n,1}\},\ldots,\{x_{n,k}\})\in B\right\}\longrightarrow\prod_{j=1}^k(v_j-u_j)\qquad(N\to\infty).$$

Here $\{t\}=t-\lfloor t\rfloor\in[0,1)$ is the scalar fractional part; a factor with $u_j=v_j$ is empty and $[0,1)$ is the full coordinate interval.

## Definition references

[[def-equidistribution-mod-one]]

[Bergelson–Moreira, Definition 1.1](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Kuipers–Niederreiter, Chapter 4, §1](https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)
