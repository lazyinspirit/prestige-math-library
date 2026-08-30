---
id: ex-one-over-z-not-polynomially-approximable-on-unit-circle
kind: example
title: "$1/z$ is not uniformly approximable by polynomials on the unit circle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-runge-polynomial-approximation,
       thm-fundamental-theorem-for-complex-line-integrals,
       def-complex-trigonometric-and-hyperbolic-functions]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: contradiction
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 9.1.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Example

Let $\gamma(t)=e^{it}$ for $0\le t\le2\pi$. The function $z\mapsto1/z$ on the
unit circle is not the uniform limit there of any sequence of polynomials.

## Facts & Assumptions

**Given:** The unit-circle contour $\gamma(t)=e^{it}$ and the function $1/z$ on
$\gamma^\ast$.

[L1] Every polynomial has a global primitive, so its integral around a closed
contour is $0$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L2] The exponential parametrizes the unit circle
([[def-complex-trigonometric-and-hyperbolic-functions]]).

## Verification

**Proof technique:** contradiction.

1.1 Suppose polynomials $p_n$ converge uniformly to $1/z$ on $\gamma^\ast$. Then contour integration along the fixed rectifiable contour $\gamma$ preserves the limit, so $\int_\gamma p_n(z)\,dz\to\int_\gamma dz/z$. [given, assume-contra]

2.1 By [L1], every $\int_\gamma p_n(z)\,dz$ is $0$. But [L2] gives $\int_\gamma dz/z=\int_0^{2\pi} i\,dt=2\pi i$. This contradiction shows that no such polynomial sequence exists. [L1, L2, step 1.1, discharge-contradiction] ∎