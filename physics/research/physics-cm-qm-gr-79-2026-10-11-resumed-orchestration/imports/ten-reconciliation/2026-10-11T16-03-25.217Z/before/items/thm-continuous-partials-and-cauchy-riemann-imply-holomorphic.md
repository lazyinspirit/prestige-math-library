---
id: thm-continuous-partials-and-cauchy-riemann-imply-holomorphic
kind: theorem
title: "Continuous first partial derivatives and the Cauchy–Riemann equations imply complex differentiability pointwise, and holomorphy when they hold throughout an open set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-continuous-partial-derivatives-imply-total-differentiability]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 2.1.5"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, Theorem 3.2.7"
      url: "https://complexanalysis.org/web/sec_cauchy-riemann.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $a\in U$, and write $f=u+iv:U\to\mathbb C$. Suppose the four first partial derivatives of $u$ and $v$ exist on a neighbourhood of $a$, are continuous at $a$, and satisfy

$$ u_x(a)=v_y(a),\qquad u_y(a)=-v_x(a). $$

Then $f$ is complex differentiable at $a$. Consequently, if these hypotheses hold at every point of $U$, then $f$ is holomorphic on $U$.

## Facts & Assumptions

**Given:** The open set, point, function, partial-derivative hypotheses, and Cauchy–Riemann equations stated above.

[L1] If every partial derivative of a Euclidean map exists on a neighbourhood of a point and is continuous at that point, then the map is totally differentiable there with derivative matrix equal to its Jacobian ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L2] Real total differentiability together with the Cauchy–Riemann equations is equivalent to complex differentiability ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the coordinate map $(u,v)$: it is real totally differentiable at $a$. [given, L1]

2.1 The assumed Cauchy–Riemann equations and [L2] now give complex differentiability at $a$. [step 1.1, given, L2]

3.1 If the hypotheses hold at every point of $U$, step 2.1 applies at every point, which is precisely holomorphy on $U$. [step 2.1] ∎
