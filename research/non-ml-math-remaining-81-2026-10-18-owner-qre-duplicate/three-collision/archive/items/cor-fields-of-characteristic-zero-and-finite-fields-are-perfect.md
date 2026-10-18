---
id: cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
kind: corollary
title: "Fields of characteristic zero, finite fields, and algebraically closed fields are perfect"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraically-closed-field, thm-perfect-field-characterizations, thm-frobenius-endomorphism-and-finite-field-automorphism]
justified_by: []
aliases: []
landmark: false
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
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Every field of characteristic zero is perfect. Every finite field is perfect,
and every algebraically closed field is perfect.

## Facts & Assumptions

**Given:** A field $F$ in one of the classes named in the Statement.

[L1] Perfectness is equivalent to characteristic zero or, in characteristic $p>0$, surjectivity of Frobenius ([[thm-perfect-field-characterizations]]).

[L2] Frobenius is an automorphism of every finite field ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L3] In an algebraically closed field, every nonconstant polynomial has a root ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 The characteristic-zero case is immediate from [L1]. [L1]

1.2 If $F$ is finite of characteristic $p$, [L2] makes Frobenius surjective, so [L1] makes $F$ perfect. [L1, L2]

2.1 If $F$ is algebraically closed of characteristic $p$, then for every $a\in F$ the polynomial $x^p-a$ has a root by [L3]; hence every $a$ is a $p$th power and [L1] makes $F$ perfect. [L1, L3] ∎
