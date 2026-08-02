---
id: cex-unsigned-half-angle-formula
kind: counterexample
title: "$\\sin(3\\pi/2)=-1$ shows that the positive square root is not an unconditional half-angle formula"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-half-angle-identities-with-sign-conditions, thm-quarter-turn-values-and-shift-formulas]
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

## Statement refuted

The unconditional assertion $\sin(x/2)=\sqrt{(1-\cos x)/2}$ for every real $x$ is false. The conventions and prerequisite facts used below are recorded in [[thm-half-angle-identities-with-sign-conditions]], [[thm-quarter-turn-values-and-shift-formulas]].

## Facts & Assumptions

**Given:** $x=3\pi$.

## Counterexample

1.1 Here $\sin(x/2)=\sin(3\pi/2)=-1$, while $\sqrt{(1-\cos3\pi)/2}=1$. [given]

2.1 Thus the positive square root loses the required quadrant sign. [algebra] ∎
