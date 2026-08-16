---
id: thm-existence-of-algebraic-closures
kind: theorem
title: "Assuming Choice, every field has an algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-one-step-simultaneous-root-extension, thm-one-step-algebraic-root-extension-is-algebraically-closed, def-algebraic-closure]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, every field has an algebraic closure.

## Facts & Assumptions

**Given:** A field $F$ and the Axiom of Choice.

[L1] Assuming Choice, there is an algebraic extension $L/F$ containing a root of every nonconstant polynomial over $F$ ([[thm-one-step-simultaneous-root-extension]]).

[L2] Every algebraic extension with that one-step root property is algebraically closed ([[thm-one-step-algebraic-root-extension-is-algebraically-closed]]).

[L3] An algebraic closure is an algebraic extension that is algebraically closed ([[def-algebraic-closure]]).

## Proof

**Proof technique:** constructive.

1.1 Use [L1] to construct an algebraic extension $L/F$ containing a root of every nonconstant base polynomial. [L1, construct]

2.1 By [L2], this same field $L$ is already algebraically closed. [step 1.1, L2]

3.1 Thus $L/F$ is an algebraic closure by [L3]. [step 1.1, step 2.1, L3, discharge-construct] ∎
