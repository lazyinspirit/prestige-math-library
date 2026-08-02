---
id: thm-double-angle-and-power-reduction-identities
kind: theorem
title: "Double-angle and quadratic power-reduction identities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, def-tangent-cotangent-secant-cosecant]
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
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

For every real $x$,
$$\sin(2x)=2\sin x\cos x,\quad \cos(2x)=\cos^2x-\sin^2x=2\cos^2x-1=1-2\sin^2x,$$
and
$$\sin^2x=(1-\cos2x)/2,\qquad \cos^2x=(1+\cos2x)/2.$$
When defined, $\tan(2x)=2\tan x/(1-\tan^2x)$. The conventions and prerequisite facts used below are recorded in [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-tangent-cotangent-secant-cosecant]].

## Facts & Assumptions

**Given:** A real $x$.

## Proof

**Proof technique:** direct.

1.1 Put $u=v=x$ in the addition formulas. [given]

1.2 Use $\sin^2x+\cos^2x=1$ to rewrite the cosine identity and solve both resulting equalities for the squares. [algebra]

2.1 Divide the double-angle sine identity by the double-angle cosine identity only when both quotient expressions are defined. [algebra] ∎
