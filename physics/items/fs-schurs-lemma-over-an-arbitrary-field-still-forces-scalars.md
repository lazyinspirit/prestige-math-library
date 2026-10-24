---
id: fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars
kind: false-statement
title: "FALSE: over every field, the endomorphism ring of an irreducible representation is just the base field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 9.2.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

**False claim.** Over every field $k$, every irreducible representation of a
group has endomorphism ring equal to $k$.

## Facts & Assumptions

**Given:** The real $2$-dimensional representation of $C_3$ from the companion example.

[L1] There is an irreducible real representation of $C_3$ whose endomorphism ring is a copy of $\mathbb C$ ([[ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], over the field $\mathbb R$ there exists an irreducible representation whose endomorphism ring is $\mathbb C$. [L1, given]

2.1 Since $\mathbb C \ne \mathbb R$, that representation contradicts the stated claim. Therefore the claim is false. [step 1.1] ∎
