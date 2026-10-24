---
id: ex-complex-sine-is-unbounded-on-the-imaginary-axis
kind: example
title: "Complex sine is unbounded on the imaginary axis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-trigonometric-hyperbolic-dictionary, thm-exponential-limits-and-range]
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

For real $t$, $\sin(it)=i\sinh t$, so complex sine is unbounded on the imaginary axis. The conventions and prerequisite facts used below are recorded in [[thm-complex-trigonometric-hyperbolic-dictionary]], [[thm-exponential-limits-and-range]].

## Facts & Assumptions

**Given:** A real parameter $t$.

## Verification

1.1 The dictionary gives $\sin(it)=i\sinh t$. [given]

2.1 Since $\sinh t=(e^t-e^{-t})/2$ is unbounded as $t\to\infty$, so is its modulus. [given] ∎
