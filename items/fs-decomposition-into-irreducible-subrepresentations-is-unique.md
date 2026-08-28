---
id: fs-decomposition-into-irreducible-subrepresentations-is-unique
kind: false-statement
title: "False statement: a completely reducible representation has a unique decomposition into irreducible subrepresentations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component, rem-decomposition-into-irreducible-summands-need-not-be-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

**False claim.** A completely reducible representation has a unique
decomposition into irreducible subrepresentations.

## Facts & Assumptions

**Given:** The two-dimensional trivial representation of $C_2$.

[L1] The two-dimensional trivial representation of $C_2$ has two different decompositions into irreducible subrepresentations, while its isotypic component is still unique ([[ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component]]).

[L2] The uniqueness theorem concerns the isotypic decomposition, not the choice of individual irreducible summands ([[rem-decomposition-into-irreducible-summands-need-not-be-unique]]).

## Refutation

**Proof technique:** direct.

1.1 The example [L1] exhibits one completely reducible representation with two different decompositions into irreducible subrepresentations. [L1, given]

2.1 By [L2], this does not contradict isotypic uniqueness: the isotypic block is canonical, but the individual irreducible splitting is not. Therefore the displayed example refutes the claim. [L2, step 1.1] ∎
