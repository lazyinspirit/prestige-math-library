---
id: thm-triple-angle-identities
kind: theorem
title: "Triple-angle identities for sine, cosine, and tangent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-double-angle-and-power-reduction-identities, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, def-tangent-cotangent-secant-cosecant]
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
$$\sin3x=3\sin x-4\sin^3x,\qquad \cos3x=4\cos^3x-3\cos x.$$
If $\tan x$ and $\tan3x$ are defined and $1-3\tan^2x\ne0$, then $\tan3x=(3\tan x-\tan^3x)/(1-3\tan^2x)$. The conventions and prerequisite facts used below are recorded in [[thm-double-angle-and-power-reduction-identities]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-tangent-cotangent-secant-cosecant]].

## Facts & Assumptions

**Given:** A real $x$ satisfying the displayed tangent hypotheses where required.

## Proof

**Proof technique:** direct.

1.1 Expand $\sin(2x+x)$ and $\cos(2x+x)$ by addition, then substitute the double-angle identities. [given]

1.2 Use $\sin^2x=1-\cos^2x$ and $\cos^2x=1-\sin^2x$ to collect the stated cubic forms. [algebra]

2.1 Divide the two cubic identities under the stated nonzero conditions and cancel the common cosine power. [algebra] ∎
