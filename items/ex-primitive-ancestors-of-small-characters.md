---
id: ex-primitive-ancestors-of-small-characters
kind: example
title: "Primitive ancestors of small characters"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-dirichlet-character-primitive-induction]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, Theorem 16.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Example

The odd character $\chi_4$ modulo $4$ is primitive. Its induction to modulus
$12$ is zero at multiples of $2$ or $3$, including $3$, although $\chi_4(3)=-1$.
The induction of $\chi_4$ to modulus $8$ has conductor $4$; the primitive
quadratic character of conductor $8$ has values $1,-1,-1,1$ on $1,3,5,7$.

## Facts & Assumptions

**Given:** The unique-ancestor theorem ([[thm-dirichlet-character-primitive-induction]]).

## Verification

**Proof technique:** direct.

1.1 The displayed values are multiplicative on the listed unit groups; their zero extensions are therefore characters. [given]

2.1 Direct reduction of their unit values identifies the stated ancestor, and uniqueness in the given theorem fixes the conductors. [step 1.1, given] ∎
