---
id: thm-sine-and-cosine-subtraction-formulas
kind: theorem
title: "The subtraction formulas for sine and cosine"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity]
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

For all real $u,v$,
$$\sin(u-v)=\sin u\cos v-\cos u\sin v,\qquad \cos(u-v)=\cos u\cos v+\sin u\sin v.$$ The conventions and prerequisite facts used below are recorded in [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]].

## Facts & Assumptions

**Given:** Reals $u,v$.

## Proof

**Proof technique:** direct.

1.1 Apply the addition formulas to $u+(-v)$. [given]

2.1 Replace $\sin(-v)$ and $\cos(-v)$ by their parity values and simplify. [algebra] ∎
