---
id: cex-zero-directional-derivatives-without-continuity
kind: counterexample
title: "The map $y(x^2+y^2)/x$ off the line $x=0$, extended by zero on that line, has every directional derivative zero at the origin but is discontinuous there"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-directional-and-partial-derivatives, thm-total-differentiability-gives-a-local-linear-bound-and-continuity, def-metric-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement refuted

If every directional derivative at a point is zero, then the function is continuous there.

## Facts & Assumptions

**Given:** $f(x,y)=y(x^2+y^2)/x$ for $x\ne0$, and $f(0,y)=0$.

[L1] The directional derivative is the derivative of $t\mapsto f(a+tv)$ at zero ([[def-directional-and-partial-derivatives]]).

[L2] Total differentiability gives a local $O(\|h\|_2)$ increment bound and therefore continuity ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

## Counterexample

**Proof technique:** direct.

1.1 Along $(ta,tb)$, the restriction is $t^2b(a^2+b^2)/a$ when $a\ne0$ and is $0$ when $a=0$; [L1] therefore gives zero directional derivative in every direction. [L1, L2]

2.1 Along the curve $(x,y)=(t^3,t)$ with $t\ne0$, $f(t^3,t)=1+t^4\to1$. [step 1.1, L2, algebra]

3.1 Thus $f$ is discontinuous at the origin, and by [L2] it cannot be totally differentiable there either. [step 1.1, step 2.1] ∎
