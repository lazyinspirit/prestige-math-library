---
id: fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity
kind: false-statement
title: "FALSE: positive second Laplacian eigenvalue characterises 2-connectivity"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-algebraic-connectivity-characterises-connectedness, def-algebraic-connectivity-of-a-graph, def-vertex-and-edge-connectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, Algebraic Methods in Combinatorics, Section 14.2"
      url: "https://opikhurko.warwick.ac.uk/AlgMet.pdf"
---

## Statement

**False claim.** A finite simple graph has positive second Laplacian eigenvalue
if and only if it is $2$-connected.

## Facts & Assumptions

**Given:** The path graph $P_3$ on vertices $1-2-3$.

[L1] A graph with positive algebraic connectivity is connected, and conversely ([[cor-algebraic-connectivity-characterises-connectedness]]).

[F1] The algebraic connectivity is the second-smallest Laplacian eigenvalue ([[def-algebraic-connectivity-of-a-graph]]).

[F2] A graph is $2$-connected when deleting any one vertex leaves it connected ([[def-vertex-and-edge-connectivity]]).

## Refutation

**Proof technique:** direct.

1.1 The path $P_3$ is connected, so [L1] and [F1] show that its second Laplacian eigenvalue is positive. [L1, F1]

1.2 Deleting the middle vertex of $P_3$ leaves two isolated vertices, which is disconnected. Therefore [F2] shows that $P_3$ is not $2$-connected. [F2]

2.1 So $P_3$ has positive second Laplacian eigenvalue but is not $2$-connected, refuting the claim. [step 1.1, step 1.2] ∎
