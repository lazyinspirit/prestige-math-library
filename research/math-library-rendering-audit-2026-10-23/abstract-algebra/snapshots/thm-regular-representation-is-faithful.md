---
id: thm-regular-representation-is-faithful
kind: theorem
title: "The regular representation is faithful"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-intertwiner-equivalent-and-faithful-representations, def-trivial-regular-and-permutation-representations]
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
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Example 4.3.4"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and let $k$ be a field. Then the regular
representation of $G$ over $k$ is faithful.

## Facts & Assumptions

**Given:** A finite group $G$ and its regular representation on $k[G]$.

[L1] In the regular representation, $g \cdot [h]=[gh]$ for all $g,h \in G$ ([[def-trivial-regular-and-permutation-representations]]).

[L2] A representation is faithful when the only group element acting as the identity linear map is the identity element of the group ([[def-intertwiner-equivalent-and-faithful-representations]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $g \in G$ acts as the identity in the regular representation. Applying that operator to the basis vector $[e]$ gives $[g]=g \cdot [e]=[e]$ by [L1]. [L1, L2, given]

2.1 The basis vectors of $k[G]$ are indexed by the elements of $G$, so $[g]=[e]$ forces $g=e$. By [L2], this is exactly faithfulness. [step 1.1, L2] ∎
