---
id: thm-hadamard-product-for-riemann-xi
kind: theorem
title: "The Riemann xi function has its genus-one Hadamard product over the nontrivial zeros of zeta"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-xi-function, thm-riemann-xi-is-entire-of-order-one, thm-hadamard-factorization-for-finite-order-entire-functions, thm-trivial-zeros-and-critical-strip, thm-completed-riemann-zeta-functional-equation, cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one, thm-gamma-meromorphic-continuation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8, Theorem 4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

There exist constants $A,B\in\mathbb C$ such that

$$\xi(s)=e^{A+Bs}\prod_\rho E_1(s/\rho),$$

where the product runs over the nontrivial zeros $\rho$ of $\zeta$, counted
with multiplicity, and

$$E_1(w)=(1-w)e^w.$$

The product converges in the genus-one canonical sense.

## Facts & Assumptions

**Given:** The xi function and its growth.

[L1] The xi function is entire of order $1$ ([[thm-riemann-xi-is-entire-of-order-one]]).

[L2] Hadamard factorization for an entire function of order $\rho$ uses the canonical factors $E_{\lfloor\rho\rfloor}$ ([[thm-hadamard-factorization-for-finite-order-entire-functions]]).

[L3] The only zeros of zeta outside the critical strip are the trivial zeros $-2,-4,\dots$ ([[thm-trivial-zeros-and-critical-strip]]).

[L4] The completed-function theorem gives the split formula $$\Lambda(s)=\frac{1}{s(s-1)}+H(s),$$ with $H$ entire and $\Lambda(s)=\Lambda(1-s)$ ([[thm-completed-riemann-zeta-functional-equation]]).

[L5] The xi function is $\xi(s)=\tfrac12 s(s-1)\Lambda(s)$ ([[def-riemann-xi-function]]).

[L6] Zeta has no zeros on $\operatorname{Re}s>1$ ([[cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one]]).

[L7] Gamma is meromorphic on $\mathbb C$ with poles only at the nonpositive integers ([[thm-gamma-meromorphic-continuation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], xi is entire of finite order $1$. Applying [L2] with $\rho=1$ therefore yields constants $A,B\in\mathbb C$ such that $$\xi(s)=e^{A+Bs}\prod_{\rho'}E_1(s/\rho'),$$ where the product runs over the zeros $\rho'$ of xi, counted with multiplicity. [L1, L2, given, construct]

1.2 By [L5] and [L4], $$\xi(s)=\frac12+\frac12 s(s-1)H(s).$$ Hence $\xi(0)=\xi(1)=1/2$, so neither $0$ nor $1$ is a zero of xi. Now fix $m\ge1$. The symmetry from [L4] and [L5] gives $$\xi(-2m)=\xi(1+2m).$$ Since $1+2m>1$, [L6] gives $\zeta(1+2m)\ne0$, and [L7] shows that $\Gamma((1+2m)/2)$ is finite because $(1+2m)/2$ is not a nonpositive integer. The scalar factor $\tfrac12(1+2m)(2m)$ is also nonzero, so [L5] gives $\xi(1+2m)\ne0$, hence $\xi(-2m)\ne0$. Together with [L3], this shows that the zeros of xi are exactly the nontrivial zeros of zeta. [L3, L4, L5, L6, L7, algebra]

2.1 Replacing the zero set $\{\rho'\}$ in step 1.1 by the nontrivial zeros of zeta from step 1.2 gives the announced product. The phrase "genus-one canonical sense" is exactly the convergence prescription supplied by [L2] for an order-one entire function. [step 1.1, step 1.2, L2, algebra] ∎
