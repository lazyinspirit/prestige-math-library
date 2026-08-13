---
id: ex-gradient-theorem-for-a-polynomial-potential
kind: example
title: "A polynomial potential evaluates work along every path by endpoints"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-gradient-theorem-for-line-integrals, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, lem-derivative-of-a-power, thm-newton-leibniz-with-interior-derivative]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. Lebl, Basic Analysis II, section 9.3"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Example

Let

$$\phi(x,y,z)=x^2y+yz^2,\qquad F=\nabla\phi=(2xy,x^2+z^2,2yz).$$

Every piecewise-$C^1$ path from $p=(0,0,0)$ to $q=(1,2,1)$ satisfies

$$\int_\gamma F\cdot d\mathbf r=4.$$

## Facts & Assumptions
**Given:** The polynomial potential, field, and endpoints in the Example.

[L1] The gradient theorem gives $\int_\gamma\nabla\phi\cdot d\mathbf r=\phi(q)-\phi(p)$ for every piecewise-$C^1$ path from $p$ to $q$ ([[thm-gradient-theorem-for-line-integrals]]).

[L2] On a $C^1$ path $\gamma$, the vector line integral is the integral of $\langle F(\gamma(t)),\gamma'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L3] The power rule gives $(t^3)'=3t^2$ ([[lem-derivative-of-a-power]]), and for a continuous function whose interior derivative admits an integrable extension, Newton-Leibniz integrates that extension to the endpoint increment ([[thm-newton-leibniz-with-interior-derivative]]).



## Verification

**Proof technique:** direct.

1.1 Coordinate differentiation gives the displayed gradient, and direct evaluation gives $\phi(q)=4$ and $\phi(p)=0$. [given, algebra]

1.2 For the affine segment $\gamma(t)=(t,2t,t)$, one has $F(\gamma(t))=(4t^2,2t^2,4t^2)$ and $q-p=(1,2,1)$. Thus [L2] gives the integrand $12t^2$. [given, L2, algebra]

2.1 Apply [L1] and step 1.1 to any path from $p$ to $q$. Its integral is $4-0=4$. [step 1.1, L1, algebra]

3.1 Since $12t^2=(4t^3)'$, [L3] gives $\int_0^1 12t^2dt=4$, agreeing with step 2.1. [step 1.2, L3, algebra] ∎
