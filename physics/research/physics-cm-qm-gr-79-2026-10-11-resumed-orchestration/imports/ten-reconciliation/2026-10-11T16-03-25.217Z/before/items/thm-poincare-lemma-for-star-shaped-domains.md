---
id: thm-poincare-lemma-for-star-shaped-domains
kind: theorem
title: "Poincare's lemma on a star-shaped domain: every closed C1 field is exact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-closed-and-exact-c1-vector-fields, def-star-shaped-open-subset-of-rn, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-newton-leibniz-with-interior-derivative, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J.-B. Campesato, Poincare Lemma, section 2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/poincare.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open and star-shaped with respect to $a\in U$. Every closed $C^1$ field $F:U\to\mathbb R^n$ is exact. A $C^2$ potential is

$$\phi(x):=\int_0^1\left\langle F(a+t(x-a)),x-a\right\rangle\,dt.$$

## Facts & Assumptions
**Given:** The star-shaped domain, centre, and closed $C^1$ field in the Statement.

[L1] Star-shapedness gives $a+t(x-a)\in U$ for every $x\in U$ and $0\leq t\leq1$ ([[def-star-shaped-open-subset-of-rn]]).

[L2] Closedness is the system $\partial_jF_i=\partial_iF_j$, and exactness requires a $C^2$ function with gradient $F$ ([[def-closed-and-exact-c1-vector-fields]]).

[L3] On a compact rectangle, a continuous parameter derivative may be passed through the integral when it is represented by a continuous function ([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]).

[L4] If a continuous function has an integrable interior derivative on a compact interval, the integral of that derivative is the endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).

[L5] Continuous partial derivatives imply total differentiability, with derivative matrix equal to the Jacobian ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).



## Proof

**Proof technique:** direct.

1.1 By [L1], the integrand defining $\phi(x)$ is defined for every $t\in[0,1]$; it is continuous, so the integral exists. Fix $x\in U$ and a coordinate $j$. Openness and [L1] provide a small closed coordinate interval about $x$ whose radial segments from $a$ remain in $U$. [given, L1]

2.1 On that interval, [L3] differentiates the defining integral with respect to $x_j$ and gives $$\partial_j\phi(x)=\int_0^1\left(F_j(z_t)+t\sum_i\partial_jF_i(z_t)(x_i-a_i)\right)dt,$$ where $z_t=a+t(x-a)$. The integrand and its parameter derivative are continuous because $F$ is $C^1$. [step 1.1, L3, algebra]

3.1 By closedness in [L2], $\partial_jF_i=\partial_iF_j$. Thus the integrand in step 2.1 is $$F_j(z_t)+t\sum_i\partial_iF_j(z_t)(x_i-a_i) =\frac d{dt}\bigl(tF_j(z_t)\bigr).$$ [given, step 2.1, L2, algebra]

4.1 Apply [L4] to step 3.1. The endpoint at $t=0$ is $0\cdot F_j(a)=0$, and the endpoint at $t=1$ is $F_j(x)$, so $\partial_j\phi(x)=F_j(x)$. [step 2.1, step 3.1, L4, algebra]

5.1 Since this holds for every $x$ and $j$, the partial derivatives of $\phi$ are the $C^1$ functions $F_j$. In particular they are continuous, so [L5] gives $\nabla\phi=F$, and their first partials are continuous; hence $\phi$ is $C^2$. [step 4.1, L5, given]

6.1 By the definition in [L2], step 5.1 makes $F$ exact with the displayed potential. [step 5.1, L2] ∎
