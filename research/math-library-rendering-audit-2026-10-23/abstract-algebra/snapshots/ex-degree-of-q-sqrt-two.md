---
id: ex-degree-of-q-sqrt-two
kind: example
title: "$\\mathbb Q(\\sqrt2)/\\mathbb Q$ has degree two"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-eisenstein-irreducibility-criterion, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Example

The extension $\mathbb Q(\sqrt2)/\mathbb Q$ has degree $2$ and basis $(1,\sqrt2)$. Its coordinate arithmetic includes

$$(a+b\sqrt2)(c+d\sqrt2)=(ac+2bd)+(ad+bc)\sqrt2.$$

## Facts & Assumptions

**Given:** The positive real number $s=\sqrt2$.

[L1] If an algebraic element has irreducible minimal polynomial of degree $n$, its simple extension has power basis $1,a,\ldots,a^{n-1}$ and degree $n$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L2] Eisenstein's criterion proves suitable primitive integer polynomials irreducible over $\mathbb Q$ ([[thm-eisenstein-irreducibility-criterion]]).

[L3] Every nonnegative real has a unique nonnegative square root ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], $s^2=2$. The polynomial $t^2-2$ is Eisenstein at $2$, so [L2] makes it irreducible over $\mathbb Q$. [given, L2, L3]

2.1 Apply [L1] to obtain the basis $(1,s)$ and degree $2$. [step 1.1, L1]

3.1 Multiplying $(a+bs)(c+ds)$ and reducing $s^2$ to $2$ gives the displayed coordinate formula. [step 1.1, algebra] ∎
