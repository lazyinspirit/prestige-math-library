---
id: fs-the-real-numbers-are-algebraically-closed
kind: false-statement
title: "FALSE: the real numbers are algebraically closed"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-algebraically-closed-field, lem-x-squared-plus-one-is-irreducible-over-the-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, extension fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: frontier-20
---

## Statement

**False claim:** the field $\mathbb R$ is algebraically closed.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^2+1 \in \mathbb R[x]$.

[L1] A field is algebraically closed exactly when every nonconstant polynomial over it has a root in the field ([[def-algebraically-closed-field]]).

[L2] The polynomial $x^2+1$ is irreducible in $\mathbb R[x]$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2], the polynomial $x^2+1$ has no real root. [L2, algebra]

2.1 Therefore $\mathbb R$ fails the defining property in [L1] for algebraic closedness. [L1, step 1.1]

3.1 So the real numbers are not algebraically closed. [step 2.1] ∎
