---
id: ex-cauchy-integral-formula-cosine-third-order-pole
kind: example
title: 'The circle integral of $\cos z/(z-1)^3$ over $|z|=2$ is $-\pi i\cos 1$'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The pole order must correspond to the natural index $n=2$, including the factor $2!$, and the sign of the second cosine derivative must be negative."
  counterexample_search: 'Substituted $n=2$ into the higher-derivative formula and differentiated cosine twice; the resulting coefficient is $-\pi i\cos 1$, with no conflicting case.'
deps: [thm-cauchy-integral-formula-higher-derivatives, cor-complex-trigonometric-and-hyperbolic-derivatives]
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

If $\gamma(t)=2\exp(it)$ for $0\le t\le2\pi$, then

$$\int_\gamma\frac{\cos z}{(z-1)^3}\,dz=-\pi i\cos1.$$

## Facts & Assumptions

**Given:** The positively oriented radius-$2$ circle and the displayed integrand.

[L1] If $f$ is holomorphic on $D(a,R)$, $0<r<R$, $z\in D(a,r)$, $n\in\mathbb N$, and $\gamma(t)=a+r\exp(it)$ for $0\le t\le2\pi$, then $\int_\gamma f(\zeta)/(\zeta-z)^{n+1}\,d\zeta=(2\pi i/n!)f^{(n)}(z)$ ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L2] The complex cosine is entire, with $(\cos z)'=-\sin z$ and $(\sin z)'=\cos z$ ([[cor-complex-trigonometric-and-hyperbolic-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 The point $1$ lies strictly inside the radius-$2$ circle and the denominator is nonzero on it; by [L2], $f(z)=\cos z$ is entire and $f''(1)=-\cos1$. [given, L2, algebra]

2.1 Apply [L1] with $n=2$ and $z=1$: the integral is $(2\pi i/2!)f''(1)=-\pi i\cos1$. [step 1.1, L1, algebra] ∎
