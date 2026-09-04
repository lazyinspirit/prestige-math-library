---
id: fs-projective-and-injective-modules-coincide-over-every-ring
kind: false-statement
title: "Projective and injective modules coincide over every ring"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-finitely-generated-projective-kg-modules-are-injective-and-conversely]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Projective and injective modules coincide over every ring.

## Facts & Assumptions

**Given:** The finite group algebra setting of the preceding corollary.

[L1] Projective and injective coincide here only for finite-dimensional modules
over the symmetric group algebra $k[G]$ ([[cor-finitely-generated-projective-kg-modules-are-injective-and-conversely]]).

## Refutation

**Proof technique:** direct.

1.1 The corollary [L1] is explicitly a special finite-dimensional group-algebra statement. [L1, given]

2.1 Removing those hypotheses widens the claim far beyond what was proved. Standard counterexamples over rings such as $\mathbb Z$ show that injective and projective need not agree. Hence the universal statement is false. [step 1.1, algebra]

3.1 Therefore projective and injective modules do not coincide over every ring. [step 1.1, step 2.1] ∎
