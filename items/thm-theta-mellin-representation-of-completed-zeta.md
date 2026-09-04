---
id: thm-theta-mellin-representation-of-completed-zeta
kind: theorem
title: "The completed zeta function has its Mellin-theta integral representation on $\\operatorname{Re}s>1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-zeta-function, def-jacobi-theta-function, def-euler-gamma-function, thm-tonelli-theorem-for-sigma-finite-product-spaces]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12 §7"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

If $\operatorname{Re}s>1$, then

$$\pi^{-s/2}\Gamma(s/2)\zeta(s)=\frac12\int_0^\infty (\theta(t)-1)t^{s/2-1}\,dt.$$

## Facts & Assumptions

**Given:** A complex number $s$ with $\operatorname{Re}s>1$.

[L1] On $\operatorname{Re}s>1$,
$$\zeta(s)=\sum_{n\ge1}n^{-s}$$
([[def-riemann-zeta-function]]).

[L2] For $t>0$,
$$\theta(t)-1=2\sum_{n\ge1}e^{-\pi n^2 t}$$
([[def-jacobi-theta-function]]).

[L3] On $\operatorname{Re}z>0$,
$$\Gamma(z)=\int_0^\infty e^{-u}u^{z-1}\,du$$
([[def-euler-gamma-function]]).

[L4] Tonelli's theorem permits swapping a nonnegative sum and integral on a
sigma-finite product ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Write $\sigma:=\operatorname{Re}s$. By [L2], $$\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt=\sum_{n\ge1}\int_0^\infty e^{-\pi n^2 t}t^{s/2-1}\,dt,$$ provided the interchange is justified. Since $|t^{s/2-1}|=t^{\sigma/2-1}$ and $\sigma>1$, the summands are absolutely integrable and nonnegative after taking absolute values, so [L4] applies to the absolute-value kernel. [given, L2, L4, algebra]

1.2 For each $n\ge1$, substitute $u=\pi n^2 t$. Then $$\int_0^\infty e^{-\pi n^2 t}t^{s/2-1}\,dt=\pi^{-s/2}n^{-s}\int_0^\infty e^{-u}u^{s/2-1}\,du=\pi^{-s/2}\Gamma(s/2)n^{-s}$$ by [L3]. [L3, algebra]

2.1 Summing the identity of step 1.2 over $n$ and using [L1] yields $$\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt=\pi^{-s/2}\Gamma(s/2)\sum_{n\ge1}n^{-s}=\pi^{-s/2}\Gamma(s/2)\zeta(s).$$ This is the claimed Mellin representation. [step 1.1, step 1.2, L1, algebra] ∎
