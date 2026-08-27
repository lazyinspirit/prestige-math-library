---
id: fs-every-representation-is-faithful
kind: false-statement
title: "FALSE: every representation is faithful"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-intertwiner-equivalent-and-faithful-representations, def-trivial-regular-and-permutation-representations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 1.1.1"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every representation of a group is faithful.

## Facts & Assumptions

**Given:** A nontrivial group $G$ and its trivial representation over a field $k$.

[L1] In the trivial representation, every group element acts as the identity map ([[def-trivial-regular-and-permutation-representations]]).

[L2] A representation is faithful when only the identity group element acts as the identity map ([[def-intertwiner-equivalent-and-faithful-representations]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], every element of the nontrivial group $G$ acts as the identity in the trivial representation. [L1, given]

2.1 Since some element of $G$ is not the identity, [L2] shows that this representation is not faithful. Therefore the stated claim is false. [step 1.1, L2] ∎
