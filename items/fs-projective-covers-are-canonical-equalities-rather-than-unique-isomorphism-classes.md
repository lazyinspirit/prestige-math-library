---
id: fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes
kind: false-statement
title: "A module has one literally canonical projective cover, not just a unique isomorphism class over the target"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Every finite-dimensional module has one literally canonical projective cover,
not merely a unique isomorphism class over the target.

## Facts & Assumptions

**Given:** A finite-dimensional module over a finite-dimensional algebra.

[L1] Projective covers are unique up to isomorphism over the target
([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]).

## Refutation

**Proof technique:** direct.

1.1 The theorem [L1] proves uniqueness only in the sense of an isomorphism commuting with the maps to the target module. [L1, given]

2.1 Equality of source modules is stronger than existence of such an isomorphism. Different free modules with identified summands can realize the same cover up to isomorphism without being literally equal as sets or chosen objects. Hence the stronger claim fails. [step 1.1, algebra]

3.1 Therefore the statement is false. [step 1.1, step 2.1] ∎
