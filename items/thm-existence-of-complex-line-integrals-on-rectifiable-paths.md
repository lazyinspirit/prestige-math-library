---
id: thm-existence-of-complex-line-integrals-on-rectifiable-paths
kind: theorem
title: "Continuous integrands have complex and absolute line integrals along every rectifiable path"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-line-integral-over-a-rectifiable-path, def-absolute-line-integral-over-a-rectifiable-path, thm-rectifiable-iff-coordinate-functions-have-bounded-variation, lem-arc-length-function-is-continuous-and-nondecreasing, thm-riemann-stieltjes-existence-continuous-bv]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be rectifiable and let $f$ be continuous on its trace. Then the complex line integral [[def-complex-line-integral-over-a-rectifiable-path]] and the absolute line integral [[def-absolute-line-integral-over-a-rectifiable-path]] both exist.

## Facts & Assumptions

**Given:** A rectifiable $\gamma=x+iy$ and a continuous $f=u+iv$ on its trace.

[L1] A planar path is rectifiable if and only if each coordinate function has bounded variation ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]).

[L2] The arc-length function of a rectifiable path is continuous and nondecreasing ([[lem-arc-length-function-is-continuous-and-nondecreasing]]).

[L3] If a real integrand is continuous and a real integrator has bounded variation, then its Riemann–Stieltjes integral exists ([[thm-riemann-stieltjes-existence-continuous-bv]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $x$ and $y$ have bounded variation. The four real functions $u\circ\gamma$ and $v\circ\gamma$ are continuous, so [L3] gives all four Stieltjes integrals in the complex definition. [L1, L3]

1.2 The function $|f\circ\gamma|$ is continuous, and [L2] makes $s_\gamma$ a bounded-variation integrator, so [L3] gives the absolute integral. [L2, L3]

2.1 Thus both definitions are well-defined. On a singleton or constant path the relevant integrators are constant and every integral is $0$. [step 1.1, step 1.2] ∎
