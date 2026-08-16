---
id: fs-every-irreducible-polynomial-is-separable
kind: false-statement
title: "FALSE: every irreducible polynomial over a field is separable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-x-p-minus-t-is-irreducible-and-inseparable]
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

## Statement

Every irreducible polynomial over every field is separable.

## Facts & Assumptions

**Given:** The universal claim in the Statement.

[L1] Over $\mathbb F_p(t)$, the polynomial $x^p-t$ is irreducible, has zero derivative, and is inseparable ([[ex-x-p-minus-t-is-irreducible-and-inseparable]]).

## Refutation

**Proof technique:** direct.

1.1 The polynomial in [L1] is an irreducible polynomial over a field which is not separable. [L1]

2.1 It is a counterexample to the universal claim, so the Statement is false. [step 1.1] ∎
