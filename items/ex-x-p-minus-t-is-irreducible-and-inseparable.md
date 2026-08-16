---
id: ex-x-p-minus-t-is-irreducible-and-inseparable
kind: example
title: "$x^p-t$ is irreducible and inseparable over $\\mathbb F_p(t)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-function-field-as-a-fraction-field, thm-polynomial-ring-over-a-field-is-a-ufd, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-polynomial-is-separable-iff-coprime-to-its-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

Over the rational function field $\mathbb F_p(t)$, the polynomial $x^p-t$ is
irreducible and inseparable. In a field containing a $p$th root $t^{1/p}$, it
equals $(x-t^{1/p})^p$.

## Facts & Assumptions

**Given:** A prime $p$ and the rational function field $\mathbb F_p(t)$.

[L1] The rational function field is the fraction field of $\mathbb F_p[t]$ ([[cor-rational-function-field-as-a-fraction-field]]).

[L2] A polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] If a constant is not a $p$th power, then $x^p-a$ is irreducible in characteristic $p$ ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L4] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

## Verification

**Proof technique:** direct.

1.1 Suppose $t=(u/v)^p$ with coprime nonzero $u,v\in\mathbb F_p[t]$, using [L1]. Then $u^p=tv^p$. In the UFD of [L2], the exponent of the irreducible factor $t$ on the left is divisible by $p$, while on the right it is congruent to $1$ modulo $p$, a contradiction. Thus $t$ is not a $p$th power in $\mathbb F_p(t)$. [L1, L2, algebra]

2.1 By [L3], $x^p-t$ is irreducible. [step 1.1, L3]

3.1 Its derivative is zero, so [L4] makes it inseparable. In an extension containing $t^{1/p}$, the characteristic-$p$ binomial identity gives $x^p-t=(x-t^{1/p})^p$. [L4, algebra] ∎
