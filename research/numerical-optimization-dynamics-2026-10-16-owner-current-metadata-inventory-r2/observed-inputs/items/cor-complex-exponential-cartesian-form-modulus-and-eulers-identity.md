---
id: cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
kind: corollary
title: "$\\exp(x+iy)=e^x(\\cos y+i\\sin y)$, $|\\exp(x+iy)|=e^x$, and $e^{i\\pi}+1=0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-exponential-addition-and-real-extension, thm-eulers-formula, lem-complex-conjugation-and-modulus-laws, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, cor-exponential-reciprocal-and-positivity, thm-quarter-turn-values-and-shift-formulas, def-pi-via-first-positive-cosine-zero]
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

## Statement

For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$. In particular $e^{i\pi}+1=0$. The conventions and prerequisite facts used below are recorded in [[thm-complex-exponential-addition-and-real-extension]], [[thm-eulers-formula]], [[lem-complex-conjugation-and-modulus-laws]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]], [[cor-exponential-reciprocal-and-positivity]], [[thm-quarter-turn-values-and-shift-formulas]], [[def-pi-via-first-positive-cosine-zero]].

## Facts & Assumptions

**Given:** Reals $x,y$.

## Proof

**Proof technique:** direct.

1.1 Apply the addition law to $x+iy$ and Euler's formula. [given]

1.2 Multiplicativity of modulus, the Pythagorean identity, and positivity of $e^x$ give the modulus formula. [given]

2.1 The defining quarter-turn value $\cos\pi=-1$ and $\sin\pi=0$ give Euler's identity. [given] ∎
