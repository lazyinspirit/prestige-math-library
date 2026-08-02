---
id: ex-all-values-of-i-to-the-i
kind: example
title: "All values of $i^i$ are the positive real numbers $e^{-\\pi/2-2\\pi k}$, $k\\in\\mathbb Z$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-logarithms-principal-logarithm-and-complex-powers, thm-classification-of-complex-logarithms]
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

All values of $i^i$ are $e^{-\pi/2-2\pi k}$ for $k\in\mathbb Z$, and each is a positive real number. The conventions and prerequisite facts used below are recorded in [[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-classification-of-complex-logarithms]].

## Facts & Assumptions

**Given:** $\operatorname{Log}i=i\pi/2$.

## Verification

1.1 The logarithms of $i$ are $i(\pi/2+2\pi k)$. [given]

2.1 Multiplication by $i$ gives the real exponents $-\pi/2-2\pi k$, whose exponentials are positive. [algebra] ∎
