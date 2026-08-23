---
id: fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability
kind: false-statement
title: 'FALSE: one existing iterated integral guarantees multiple Riemann integrability'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-fubini-on-product-rectangles, def-dirichlet-and-thomae-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 10.2.8"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

**False claim:** if one ordinary iterated Riemann integral of a bounded function on a rectangle exists, then the function is Riemann integrable on the rectangle.

## Facts & Assumptions

**Given:** On $[-1,1]\times[0,1]$, define $f(x,y)=x$ when $y$ is rational and $f(x,y)=0$ when $y$ is irrational.

[F2] A real is rational when it lies in $\mathbb Q$ and irrational otherwise; both classes are dense ([[def-dirichlet-and-thomae-functions]]).

[F1] For a Riemann-integrable function on a product rectangle, the lower and upper section-integral envelopes are integrable and have the same value; the theorem does not assert that every section of an integrable function is integrable ([[thm-riemann-fubini-on-product-rectangles]]).

## Refutation

**Proof technique:** direct.

1.1 For each fixed $y$, the $x$-section is either $x\mapsto x$ or the zero function, and in either case its integral over $[-1,1]$ is $0$. Thus the $x$-first iterated integral exists and equals $0$. [given, algebra]

2.1 For fixed $x\ne0$, density from [F2] makes the lower and upper integrals of the $y$-section equal to $\min\{x,0\}$ and $\max\{x,0\}$. Integrating these envelopes over $[-1,1]$ gives $-1/2$ and $1/2$, which are unequal; [F1] therefore rules out multiple Riemann integrability. [step 1.1, F1, F2, algebra]

3.1 The bounded function $f$ has the iterated integral from step 1.1 but is not Riemann integrable on the rectangle, so the claim is false. [step 1.1, step 2.1] ∎

## Remarks

The published [[cex-one-existing-iterated-integral-does-not-give-riemann-integrability]] refutes the same claim with the same witness. It lives on an examples page, so it cannot be a dependency here, and the witness is reproduced from Lebl rather than cited. A reader who has met that page has met this counterexample already.
