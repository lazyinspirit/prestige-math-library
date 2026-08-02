---
id: cex-zero-hessian-does-not-classify-a-critical-point
kind: counterexample
title: "A zero Hessian occurs at a strict minimum, a strict maximum, and a saddle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hessian-and-euclidean-critical-point, thm-multivariable-second-derivative-test]
aliases: []
landmark: false
proof_strategy: calculation
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Statement refuted

Refuted: a zero Hessian determines the local type of a critical point.

## Facts & Assumptions

**Given:** $f_+(x,y)=x^4+y^4$, $f_-(x,y)=-(x^4+y^4)$, and $f_s(x,y)=x^4-y^4$.

[L1] The second-derivative test gives no conclusion for a semidefinite but not definite Hessian ([[thm-multivariable-second-derivative-test]]).

## Counterexample

## Proof

**Proof technique:** calculation.

1.1 Each displayed function has zero gradient and zero Hessian at $(0,0)$. [given, algebra]

1.2 $f_+$ is positive off the origin, so the origin is a strict local minimum; $f_-$ is negative off the origin, so it is a strict local maximum. [given, algebra]

1.3 The values $f_s(t,0)=t^4$ and $f_s(0,t)=-t^4$ have opposite signs for $t\ne0$, so the origin is a saddle. [given, algebra]

2.1 These three different local types share the same zero Hessian, exactly as the inconclusive clause [L1] permits. [step 1.1, step 1.2, step 1.3, L1, algebra] ∎
