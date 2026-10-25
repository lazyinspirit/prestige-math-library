---
id: ex-all-complex-logarithms-of-minus-one
kind: example
title: "The logarithms of $-1$ are $(2k+1)\\pi i$, $k\\in\\mathbb Z$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-classification-of-complex-logarithms, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
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
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Example

The logarithms of $-1$ are $(2k+1)\pi i$ for $k\in\mathbb Z$. The conventions and prerequisite facts used below are recorded in [[thm-classification-of-complex-logarithms]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

## Facts & Assumptions

**Given:** $\operatorname{Log}(-1)=i\pi$.

## Verification

1.1 Add the kernel $2\pi i\mathbb Z$ to the principal logarithm. [given]

2.1 Simplifying $i\pi+2\pi ik$ gives $(2k+1)\pi i$ for every integer $k$. [algebra] ∎
