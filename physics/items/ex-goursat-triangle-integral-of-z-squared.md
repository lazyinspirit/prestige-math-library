---
id: ex-goursat-triangle-integral-of-z-squared
kind: example
title: "The three edge integrals of $z^2$ around the triangle with vertices $0$, $1$, and $i$ sum to zero"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The three endpoint increments must follow the positive boundary order $0$ to $1$ to $i$ to $0$ and sum to zero."
  counterexample_search: "Computed all endpoint increments from the polynomial primitive and independently checked the total with Goursat's theorem; no discrepancy was found."
deps: [def-oriented-complex-triangle-and-boundary, thm-fundamental-theorem-for-complex-line-integrals, thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-goursat-triangle-theorem, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For the positively oriented boundary of $\Delta[0,1,i]$,

$$\int_{\partial\Delta[0,1,i]}z^2\,dz=0.$$

More precisely, the integrals along the directed edges $0\to1$, $1\to i$, and $i\to0$ are respectively

$$\frac13,\qquad\frac{-i-1}{3},\qquad\frac{i}{3}.$$

## Facts & Assumptions

**Given:** The oriented triangle $\Delta[0,1,i]$ and the integrand $f(z)=z^2$.

[L1] The oriented triangle boundary follows the directed edges $0\to1\to i\to0$ ([[def-oriented-complex-triangle-and-boundary]]).

[L2] Complex polynomials are entire and obey the power derivative rule ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L3] If $F$ is holomorphic with continuous derivative on an open set containing a rectifiable contour from $u$ to $v$, then $\int F'=F(v)-F(u)$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L4] Goursat's theorem gives zero integral for a holomorphic function around every filled triangle contained in its domain ([[thm-goursat-triangle-theorem]]).

[L5] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial $F(z)=z^3/3$ is entire with $F'(z)=z^2$; this derivative is holomorphic by [L2] and continuous by [L5], so every hypothesis of [L3] holds on each edge. [L2, L3, L5]

2.1 In the orientation of [L1], the endpoint increments are $F(1)-F(0)=1/3$, $F(i)-F(1)=(-i-1)/3$, and $F(0)-F(i)=i/3$. [step 1.1, L1, L3, algebra]

3.1 Their sum is zero, proving the displayed integral directly; [L4] gives the same value because $z^2$ is entire. [step 2.1, L2, L4, algebra] ∎
