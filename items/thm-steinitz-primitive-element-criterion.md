---
id: thm-steinitz-primitive-element-criterion
kind: theorem
title: "A finite field extension is simple if and only if it has finitely many intermediate fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-simple-finite-extension-has-finitely-many-intermediate-fields, lem-finite-extension-with-finitely-many-intermediate-fields-is-simple]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

A finite field extension $E/F$ is simple if and only if it has finitely many
intermediate fields.

## Facts & Assumptions

**Given:** A finite field extension $E/F$.

[L1] A simple finite extension has only finitely many intermediate fields ([[lem-simple-finite-extension-has-finitely-many-intermediate-fields]]).

[L2] A finite extension with only finitely many intermediate fields is simple ([[lem-finite-extension-with-finitely-many-intermediate-fields-is-simple]]).

## Proof

**Proof technique:** direct.

1.1 If $E/F$ is simple, [L1] gives finitely many intermediate fields. [L1]

1.2 If $E/F$ has finitely many intermediate fields, [L2] makes it simple. [L2]

2.1 Steps 1.1 and 1.2 prove both directions of the equivalence. [step 1.1, step 1.2] ∎
