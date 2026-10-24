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
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (def-periodic-ltwo-weak-derivative). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE, Section 1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Definition

Assume the Axiom of Countable Choice for the torus Lebesgue integrals used
below. For $f,g\in L^2(\mathbb T)$, say that $g$ is the **periodic weak derivative** of $f$, written $g=f'$, if
$$\int_0^1f(x)\varphi'(x)\,dx=-\int_0^1g(x)\varphi(x)\,dx$$
for every smooth one-periodic complex-valued test function $\varphi$. This is a statement about almost-everywhere classes, using the circle and integral convention of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].
