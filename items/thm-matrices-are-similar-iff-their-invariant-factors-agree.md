---
id: thm-matrices-are-similar-iff-their-invariant-factors-agree
kind: theorem
title: "Two matrices are similar exactly when their invariant factors agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rational-canonical-form-existence-and-uniqueness, def-invariant-factors-and-elementary-divisors-of-an-endomorphism, def-similar-matrices]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Sections 5.4 and 7.2"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lecture 11"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Statement

Two square matrices over a field are similar exactly when their invariant factors agree. No splitting hypothesis is required.

## Facts & Assumptions

**Given:** Similar matrices in the sense of [[def-similar-matrices]] and the endomorphism invariant factors of [[def-invariant-factors-and-elementary-divisors-of-an-endomorphism]].

[L1] Every square matrix over a field is similar to the unique rational canonical form determined by its invariant factors ([[thm-rational-canonical-form-existence-and-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, if $B=P^{-1}AP$, then $P$ intertwines the two endomorphisms and hence is an isomorphism of their polynomial modules. Module classification, equivalently [L1], gives equal invariant factors. [L1, given]

2.1 For the reverse direction, if the invariant factors agree, [L1] makes both matrices similar to the same rational canonical block matrix. Composing the two conjugating changes of basis shows that they are similar to each other. The argument covers nonsplit factors, repeated factors, zero matrices, one-by-one matrices, and the unique zero-by-zero matrix. [L1, step 1.1] ∎
