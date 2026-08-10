---
id: ex-riemann-stieltjes-substitution
kind: example
title: "A nonlinear reparametrisation leaves a Stieltjes integral unchanged"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-stieltjes-change-of-variable,
       thm-riemann-stieltjes-c1-integrator-reduction,
       cor-riemann-stieltjes-agrees-with-riemann, def-derivative,
       thm-ftc-second-part, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.19"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Example

For $\phi(t)=t^2$ on $[0,1]$, the change-of-variable theorem gives the concrete identity
$$\int_0^1x\,dx=\int_0^1t^2\,d(t^2)=\frac12.$$

## Facts & Assumptions

**Given:** $f(x)=x$, $\alpha(x)=x$, and $\phi(t)=t^2$ on $[0,1]$.

[L1] Increasing continuous reparametrization preserves a Stieltjes integral ([[thm-riemann-stieltjes-change-of-variable]]).

[L2] The identity integrator gives the ordinary Riemann integral ([[cor-riemann-stieltjes-agrees-with-riemann]]).

[L3] A $C^1$ integrator reduces the integral to one against its derivative ([[thm-riemann-stieltjes-c1-integrator-reduction]]).

## Verification

**Proof technique:** computation.

1.1 The map $\phi(t)=t^2$ is a strictly increasing continuous bijection of $[0,1]$ onto itself. Applying [L1] gives $\int_0^1x\,dx=\int_0^1t^2\,d(t^2)$.

1.2 Direct difference quotients give $(t^2)'=2t$ and $(t^4/2)'=2t^3$. Hence [L2], [L3], and the FTC give
$$\int_0^1x\,dx=\frac12,qquad \int_0^1t^2\,d(t^2)=\int_0^1 2t^3\,dt=\frac12.$$ ∎
