---
id: cex-directional-derivatives-without-total-differentiability
kind: counterexample
title: "$x^2y/(x^2+y^2)$ has every directional derivative at the origin but is not totally differentiable there"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-directional-and-partial-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-euclidean-linear-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement refuted

If every directional derivative of a real function exists at a point, then the function is totally differentiable there.

## Facts & Assumptions

**Given:** $f(0,0)=0$ and $f(x,y)=x^2y/(x^2+y^2)$ away from the origin.

[L1] The directional derivative is the derivative of $t\mapsto f(a+tv)$ at zero ([[def-directional-and-partial-derivatives]]).

[L2] A total derivative computes every directional derivative, so $v\mapsto D_vf(a)$ would be the linear map $Df(a)$ applied to $v$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Counterexample

**Proof technique:** direct.

1.1 For $v=(a,b)\ne0$, $f(ta,tb)=t\,a^2b/(a^2+b^2)$, so [L1] gives $D_vf(0,0)=a^2b/(a^2+b^2)$; for $v=0$ it is $0$. [L1, L2]

2.1 This direction map has value $0$ at $(1,0)$ and $(0,1)$ but value $1/2$ at their sum $(1,1)$, so it is not additive. [step 1.1, L2, algebra]

3.1 By [L2], total differentiability would make the directional-derivative map linear, contradicting step 2.1. Thus $f$ is not totally differentiable at the origin. [step 1.1, step 2.1] ∎
