---
id: def-polynomial-family-mean-value
kind: definition
title: "Mean Value of a Polynomial-Family Exponential Sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "T. D. Wooley, Nested Efficient Congruencing and Relatives of Vinogradov's Mean Value Theorem"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "§1, the definition of J_{s,k}(X), printed p. 943, and Theorem 1.1"
    - title: "Terence Tao, 254A Notes 5: Bounding Exponential Sums and the Zeta Function"
      url: "https://terrytao.wordpress.com/2015/02/07/254a-notes-5-bounding-exponential-sums-and-the-zeta-function/"
      locator: "The Vinogradov mean-value discussion, equations (17), (19), and (22), and Theorem 13"
verification:
  precheck: n/a
---

## Definition

Let $k\ge1$, let $\boldsymbol\phi=(\phi_1,\ldots,\phi_k)$ with $\phi_j\in\mathbb Z[t]$, let $X\ge1$ be real, and let $s>0$ be real. Let $j:\mathbb R\to\mathbb C$ be the real embedding $j(u)=u+0i$, and for $u\in\mathbb R$ put $e(u)=\exp(2\pi i j(u))$. For complex coefficients $\mathbf a=(a_n)_{n\in\mathbb Z}$, define the finite exponential sum

$$F_{\boldsymbol\phi,\mathbf a}(\boldsymbol\alpha;X):=\sum_{|n|\le X}a_n e\!\left(\sum_{j=1}^k\alpha_j\phi_j(n)\right),\qquad \boldsymbol\alpha\in[0,1)^k,$$

and define its $2s$-th mean value by

$$J_{s,\boldsymbol\phi}(X;\mathbf a):=\int_{[0,1)^k}|F_{\boldsymbol\phi,\mathbf a}(\boldsymbol\alpha;X)|^{2s}\,d\boldsymbol\alpha,$$

where $d\boldsymbol\alpha$ is product Lebesgue measure on the unit cube, of total mass one. The unweighted mean value on the positive interval is the same integral with $a_n=1$ for $1\le n\le X$ and $a_n=0$ otherwise.

## Definition references

[[def-exponential-character-e]]

[Wooley, §1 and Theorem 1.1](https://arxiv.org/pdf/1708.01220v2)

[Tao, 254A Notes 5, Vinogradov mean-value discussion](https://terrytao.wordpress.com/2015/02/07/254a-notes-5-bounding-exponential-sums-and-the-zeta-function/)
