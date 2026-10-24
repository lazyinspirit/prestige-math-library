---
id: thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators
kind: theorem
title: "The two FTC forms for a Riemann–Stieltjes integral with a $C^1$ integrator"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-riemann-stieltjes-c1-integrator-reduction, thm-ftc-first-part, thm-newton-leibniz-with-interior-derivative, thm-continuous-implies-integrable, cor-integrability-of-absolute-values-products-and-lattice-operations]
justified_by: []
aliases: []
landmark: true
proof_strategy: reduction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. M. Apostol, Mathematical Analysis, 2nd ed., Chapter 7"
      url: "https://studylib.net/doc/27619444/mathematical-analysis-2e-apostol"
pipeline_run: null
---

## Statement

Let $a<b$. Suppose $\alpha:[a,b]\to\mathbb R$ is continuous, differentiable on $(a,b)$, and its derivative extends to a continuous function $q:[a,b]\to\mathbb R$.

1. If $f:[a,b]\to\mathbb R$ is Riemann integrable and continuous at $c$, then $A(x):=\int_a^x f\,d\alpha$ is differentiable at $c$ and $A'(c)=f(c)q(c)$.
2. If $f$ is Riemann integrable, $G:[a,b]\to\mathbb R$ is continuous and differentiable on $(a,b)$, and $G'(x)=f(x)q(x)$ there, then $\int_a^b f\,d\alpha=G(b)-G(a)$.

Endpoint derivatives in clause 1 are relative. Clause 2 does not divide by $q$ and remains valid where $q$ vanishes.

## Facts & Assumptions

**Given:** The functions in the statement.

[L1] For a continuous integrator whose interior derivative extends continuously as $q$, every Riemann-integrable $f$ is Riemann--Stieltjes integrable and $\int_u^v f\,d\alpha=\int_u^v fq$ on each closed subinterval ([[thm-riemann-stieltjes-c1-integrator-reduction]]).

[L2] A continuous function on a compact interval is Riemann integrable, and products of Riemann-integrable functions are integrable; hence $fq$ is integrable because $q$ is continuous ([[thm-continuous-implies-integrable]], [[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L3] The integral function of an integrable function is differentiable at each continuity point, with derivative equal to the integrand ([[thm-ftc-first-part]]).

[L4] A continuous function with an interior derivative admitting an integrable extension satisfies Newton--Leibniz ([[thm-newton-leibniz-with-interior-derivative]]).

## Proof

**Proof technique:** reduction.

1.1 By [L1], $A(x)=\int_a^x f(t)q(t)\,dt$. The product $fq$ is integrable by [L2] and is continuous at $c$. [given, L1, L2]

1.2 Under the hypotheses of clause 2, [L1] and [L2] give $\int_a^b f\,d\alpha=\int_a^b fq$, while $fq$ is an integrable extension of the interior derivative of $G$. [given, L1, L2]

2.1 Applying [L3] to the ordinary integral function in step 1.1 gives $A'(c)=f(c)q(c)$, including either relative endpoint case. [step 1.1, L3]

3.1 Applying [L4] to $G$ gives $\int_a^b fq=G(b)-G(a)$, and step 1.2 proves the second clause without any division by $q$. [step 1.2, L4] ∎
