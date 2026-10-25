---
id: cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable
kind: counterexample
title: "$1-2+3-4+\\cdots$ is Abel summable to $1/4$ but is not Cesaro summable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-abel-and-cesaro-summability-of-a-series, thm-termwise-differentiation-of-a-real-power-series, thm-geometric-series, def-cesaro-mean]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

The series $\sum_{n\ge0}(-1)^n\iota(n+1)$ is Abel summable to $1/4$, but its Cesaro means do not converge.

## Facts & Assumptions

**Given:** Coefficients $a_n=(-1)^n\iota(n+1)$.

[L1] The geometric series for $1/(1+x)$ may be differentiated term by term for $|x|<1$ ([[thm-geometric-series]], [[thm-termwise-differentiation-of-a-real-power-series]]).

[L2] Cesaro means average the inclusive partial sums ([[def-cesaro-mean]], [[def-abel-and-cesaro-summability-of-a-series]]).

## Verification

**Proof technique:** direct.

1.1 Differentiating $\sum_{n\ge0}(-1)^nx^n=1/(1+x)$ and combining with the original series gives $\sum_{n\ge0}(-1)^n\iota(n+1)x^n=1/(1+x)^2$ for $0\le x<1$. Its limit as $x\uparrow1$ is $1/4$. [L1, algebra]

1.2 The inclusive partial sums satisfy $S_{2m}=\iota(m+1)$ and $S_{2m+1}=-\iota(m+1)$. Hence $\sigma_{2m}=\iota(m+1)/\iota(2m+1)\to1/2$, while $\sigma_{2m+1}=0$. [L2, algebra]

2.1 Thus the Cesaro means have two distinct subsequential limits and do not converge, whereas step 1.1 proves Abel summability to $1/4$. [step 1.1, step 1.2] ∎
