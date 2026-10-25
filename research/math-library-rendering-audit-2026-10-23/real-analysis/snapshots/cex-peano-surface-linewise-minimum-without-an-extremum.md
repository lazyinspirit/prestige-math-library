---
id: cex-peano-surface-linewise-minimum-without-an-extremum
kind: counterexample
title: "Peano's surface has a strict minimum on every line through the origin but no local extremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euclidean-local-extrema-and-critical-points]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "No minimum at the origin but a minimum among all lines"
      url: "https://www.mathcounterexamples.net/no-minimum-at-the-origin-but-a-minimum-among-all-lines/"
pipeline_run: null
---

## Statement refuted

Refuted: a strict minimum of a function on every line through a point is a local minimum.

## Facts & Assumptions

**Given:** $p(x,y)=(y-3x^2)(y-x^2)$.

## Counterexample

## Proof

**Proof technique:** direct.

1.1 On a nonvertical line $y=mx$, $p(x,mx)=x^2(m-3x)(m-x)$, which is positive for sufficiently small nonzero $x$ when $m\ne0$; on $y=0$ it is $3x^4>0$, and on the vertical line $x=0$ it is $y^2>0$. [given, algebra]

1.2 Along the parabola $y=2x^2$, $p(x,2x^2)=-x^4<0$ for $x\ne0$, whereas $p(0,0)=0$. [given, algebra]

2.1 Hence $(0,0)$ is a strict linewise minimum but is not a local minimum in the sense of [[def-euclidean-local-extrema-and-critical-points]]. [step 1.1, step 1.2] ∎
