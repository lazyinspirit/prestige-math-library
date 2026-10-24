---
id: cex-smooth-linewise-minimum-without-an-extremum
kind: counterexample
title: "A smooth flat refinement has a strict minimum on every line through the origin but no local extremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-local-extrema-and-critical-points, thm-exponential-beats-every-polynomial]
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

Refuted: smoothness together with a strict minimum on every line through a point forces a local minimum.

## Facts & Assumptions

**Given:** $r(0)=0$, $r(x)=e^{-1/x^2}$ for $x\ne0$, and $q(x,y)=(y-3r(x))(y-r(x))$.

[L1] The exponential dominates every polynomial at infinity ([[thm-exponential-beats-every-polynomial]]).

## Counterexample

## Proof

**Proof technique:** direct.

1.1 The flat function $r$ is smooth at $0$: every derivative is a polynomial in $1/x$ times $e^{-1/x^2}$ off $0$ and tends to $0$ by [L1]. [L1, algebra]

1.2 Along $y=2r(x)$, $q(x,2r(x))=-r(x)^2<0$ for $x\ne0$. [given, algebra]

2.1 On each line $y=mx$, the factor $r(x)$ is smaller than every positive power of $|x|$, so $q(x,mx)>0$ for sufficiently small nonzero $x$; the same holds on $y=0$. [step 1.1, L1, algebra]

3.1 Thus $q$ is smooth and linewise strictly minimal at the origin but has no local minimum there. [step 1.1, step 2.1, step 1.2] ∎
