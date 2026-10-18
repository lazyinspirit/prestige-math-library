---
id: thm-one-step-algebraic-root-extension-is-algebraically-closed
kind: theorem
title: "An algebraic extension containing a root of every nonconstant base polynomial is algebraically closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed, lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic, cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]
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
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 6.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $L/F$ be algebraic. If every nonconstant polynomial in $F[x]$ has a root
in $L$, then $L$ is algebraically closed. One root-adjoining extension suffices;
no iterated tower of root extensions is required.

## Facts & Assumptions

**Given:** An algebraic extension $L/F$ containing a root of every nonconstant polynomial over $F$.

[L1] The one-step root condition over a perfect base makes an algebraic extension algebraically closed ([[lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed]]).

[L2] In positive characteristic, the elements with a suitable $p$-power in the base form a perfect intermediate field whose polynomials retain the root condition in $L$ ([[lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic]]).

[L3] Every characteristic-zero field is perfect ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ has characteristic zero, [L3] makes it perfect and [L1] makes $L$ algebraically closed. [L1, L3]

1.2 If $F$ has characteristic $p>0$, let $F'$ be the perfect intermediate field from [L2]. The extension $L/F'$ is algebraic because $L/F$ is algebraic, and [L2] gives the one-step root condition over $F'$, so [L1] again makes $L$ algebraically closed. [L1, L2]

2.1 The characteristic-zero and positive-characteristic cases exhaust all fields and establish the conclusion without repeating the root-extension construction. [step 1.1, step 1.2] ∎
