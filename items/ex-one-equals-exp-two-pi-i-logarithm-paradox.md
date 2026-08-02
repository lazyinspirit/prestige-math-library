---
id: ex-one-equals-exp-two-pi-i-logarithm-paradox
kind: example
title: "$1=e^{2\\pi i}$ does not imply $0=2\\pi i$: logarithms invert the exponential only modulo its kernel"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-kernel-and-fibres-of-complex-exponential, thm-classification-of-complex-logarithms]
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

Although $1=\exp(2\pi i)$, one may not conclude $0=2\pi i$: logarithms classify fibres only modulo $2\pi i\mathbb Z$. The conventions and prerequisite facts used below are recorded in [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-classification-of-complex-logarithms]].

## Facts & Assumptions

**Given:** The two complex numbers $0$ and $2\pi i$.

## Verification

1.1 Both lie in the fibre of $1$, and their difference is the nonzero kernel element $2\pi i$. [given]

2.1 Thus equality of exponential values identifies logarithms only modulo the kernel, not as equal complex numbers. [algebra] ∎
