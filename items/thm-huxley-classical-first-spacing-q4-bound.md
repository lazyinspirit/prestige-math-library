---
id: thm-huxley-classical-first-spacing-q4-bound
kind: theorem
title: "Huxley Classical q=4 First-Spacing Bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "M. N. Huxley, Area, Lattice Points, and Exponential Sums"
      url: "https://doi.org/10.1093/oso/9780198534662.001.0001"
      locator: "Theorem 13.2.4"
    - title: "Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”"
      url: "https://arxiv.org/pdf/2308.14859v2"
      locator: "§3.2, q=4 baseline"
verification:
  precheck: n/a
---

## Statement

Let $K,L$ be positive integers and $\eta>0$ satisfy $1\le L<K\le\eta^{-1}\le KL$. Define
$$B_{K,L,\eta} =\{(x_1,x_2,x_3)\in\mathbb R^3: |x_1|\le1,\ |x_2|\le1,\ |x_3|\le(\eta L\sqrt K)^{-1}\}.$$
Let $\operatorname{meas}$ be Lebesgue measure on $\mathbb R^3$, put
$e(t)=e^{2\pi i t}$, and for complex coefficients $|a_{k\ell}|\le1$ define
$$G_4= \left(\operatorname{meas}(B_{K,L,\eta})^{-1} \int_{B_{K,L,\eta}} \left|\sum_{k=K}^{2K-1}\sum_{\ell=L}^{2L-1} a_{k\ell}e(\ell x_1+k\ell x_2+\ell\sqrt{k}\,x_3)\right|^4\,dx \right)^{1/4}.$$
The classical $q=4$ first-spacing estimate cited by Li–Yang states that for every $\varepsilon>0$ there is $C_\varepsilon>0$, independent of $K,L,\eta$ and the coefficients, such that
$$G_4\le C_\varepsilon K^\varepsilon(KL)^{1/2}.$$


## Statement references

[M. N. Huxley, Area, Lattice Points, and Exponential Sums](https://doi.org/10.1093/oso/9780198534662.001.0001)

[Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”](https://arxiv.org/pdf/2308.14859v2)

## Facts & Assumptions

**Given:** The q=4 first-spacing mean and parameter conventions from Li–Yang §3.1.

## Proof status
Li–Yang §3.2 imports the estimate and its normalized $G_4$ interface is now defined completely in the Statement. The cited Huxley book proof remains access-gated, so this theorem is not ready and stays escalated.
