---
id: ex-degree-of-q-cube-root-two
kind: example
title: "$\\mathbb Q(\\sqrt[3]{2})/\\mathbb Q$ has degree three"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-eisenstein-irreducibility-criterion, thm-nth-roots-exist]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Example

If $a=\sqrt[3]{2}$, then $\mathbb Q(a)/\mathbb Q$ has degree $3$ and basis $(1,a,a^2)$.

## Facts & Assumptions

**Given:** The positive real cube root $a$ of $2$.

[L1] A simple algebraic extension has degree equal to the degree of the element's minimal polynomial and has the corresponding power basis ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L2] Eisenstein's criterion proves suitable primitive integer polynomials irreducible over $\mathbb Q$ ([[thm-eisenstein-irreducibility-criterion]]).

[L3] The positive real $n$-th root exists uniquely for every positive input and $n\ge1$ ([[thm-nth-roots-exist]]).

## Verification

**Proof technique:** direct.

1.1 By [L3], $a^3=2$. The polynomial $t^3-2$ is Eisenstein at $2$, so it is irreducible by [L2]. [given, L2, L3]

2.1 Its minimal polynomial therefore has degree $3$, and [L1] gives degree $3$ and basis $(1,a,a^2)$. [step 1.1, L1] ∎
