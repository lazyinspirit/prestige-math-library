---
id: fs-real-differentiability-implies-complex-differentiability
kind: false-statement
title: "FALSE: real differentiability as a map $\\mathbb R^2\\to\\mathbb R^2$ implies complex differentiability; conjugation is the counterexample"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, thm-complex-numbers-are-the-real-coordinate-plane, def-complex-conjugate-real-imaginary-part-and-modulus]
aliases: []
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: frontier-12
---

## Statement

**False claim:** if a map $f:\mathbb C\to\mathbb C$, regarded as a map $\mathbb R^2\to\mathbb R^2$, is real totally differentiable at a point, then it is complex differentiable there.

## Facts & Assumptions
**Given:** The conjugation map $f(z)=\bar z$.

[L1] Under the real-coordinate identification $\Phi(a+bi)=(a,b)$ ([[thm-complex-numbers-are-the-real-coordinate-plane]]), $x+iy$ corresponds to $(x,y)$; conjugation is $\overline{x+iy}=x-iy$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]), so it corresponds to $(x,y)\mapsto(x,-y)$.

[L2] Complex differentiability is equivalent to real total differentiability together with the Cauchy–Riemann equations $u_x=v_y$ and $u_y=-v_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

## Refutation

**Proof technique:** direct counterexample.

1.1 By [L1], $f$ is the real-linear map $(x,y)\mapsto(x,-y)$. Its increment is exactly its linear action, so it is real totally differentiable everywhere with derivative matrix $\operatorname{diag}(1,-1)$. [L1, algebra]

1.2 Directly, for nonzero real $t$ the quotient $(\overline{z+t}-\bar z)/t$ is $1$, whereas the quotient for the increment $it$ is $(\overline{z+it}-\bar z)/(it)=-1$. Thus the complex difference quotient has incompatible directional limits. [given, algebra]

2.1 Its components $u=x$ and $v=-y$ have $u_x=1$ and $v_y=-1$, so the first Cauchy–Riemann equation fails at every point. By [L2], $f$ is nowhere complex differentiable. [step 1.1, L2]

3.1 The same map is real totally differentiable everywhere by step 1.1 and complex differentiable nowhere by steps 1.2 and 2.1, so it refutes the claim. [step 1.1, step 2.1, step 1.2] ∎
