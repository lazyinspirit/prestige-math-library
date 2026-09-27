---
id: def-periodic-ltwo-weak-derivative
kind: definition
title: "Periodic L2 weak derivative on the circle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE, Section 1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Definition

For $f,g\in L^2(\mathbb T)$, say that $g$ is the **periodic weak derivative** of $f$, written $g=f'$, if
$$\int_0^1f(x)\varphi'(x)\,dx=-\int_0^1g(x)\varphi(x)\,dx$$
for every smooth one-periodic complex-valued test function $\varphi$. This is a statement about almost-everywhere classes, using the circle and integral convention of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].
