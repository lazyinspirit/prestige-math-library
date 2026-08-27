---
id: ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block
kind: example
title: "A vertex may be mixed on a quotient block while pure on each member block"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-mixed-block-reachability-relation-on-a-blockade,
       def-quotient-blockade-by-mixed-block-reachability,
       lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal L=(A_1,A_2)$ be a two-block blockade in which $A_1$ and $A_2$
are mixed. Then its quotient blockade has the single block
$D:=A_1\cup A_2$. If a vertex $u\notin D$ is complete to $A_1$ and
anticomplete to $A_2$, then $u$ is mixed on $D$ although it is pure to each
member block separately.

## Facts & Assumptions

**Given:** A two-block blockade $\mathcal L=(A_1,A_2)$ whose blocks are mixed, and a vertex $u\notin A_1\cup A_2$ that is complete to $A_1$ and anticomplete to $A_2$.

[L1] Mixed blocks are joined by a one-link mixed chain, and quotient blocks are the unions of mixed-reachability classes ([[def-mixed-block-reachability-relation-on-a-blockade]], [[def-quotient-blockade-by-mixed-block-reachability]]).

[L2] The preceding lemma characterizes exactly this situation ([[lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks]]).

## Verification

**Proof technique:** direct.

1.1 Since $A_1$ and $A_2$ are mixed, [L1] places them in the same mixed-reachability class. They are the only blocks of $\mathcal L$, so their class has union $D=A_1\cup A_2$, the unique quotient block. [given, L1]

2.1 The vertex $u$ is adjacent to every vertex of $A_1$ and to no vertex of $A_2$. Therefore $u$ is neither complete nor anticomplete to $D$, so $u$ is mixed on $D$. At the same time it is pure to $A_1$ and pure to $A_2$ individually. [step 1.1, given]

3.1 This is exactly the phenomenon isolated by [L2]: the mixing appears only after passing to the quotient union. [step 2.1, L2] ∎
