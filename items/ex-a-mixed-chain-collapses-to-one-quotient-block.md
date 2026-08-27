---
id: ex-a-mixed-chain-collapses-to-one-quotient-block
kind: example
title: "A mixed chain of blocks collapses to one quotient block"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-quotient-blockade-by-mixed-block-reachability, lem-mixed-block-reachability-is-an-equivalence-relation]
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

Let $\mathcal L=(A,B,C,D)$ be a blockade in which $(A,B)$ and $(B,C)$ are
mixed, while every pair involving $D$ is anticomplete and $(A,C)$ is also
anticomplete. Then the quotient blockade $\mathcal L/\mathcal M$ has exactly
two blocks, namely $A\cup B\cup C$ and $D$.

## Facts & Assumptions

**Given:** The four-block configuration in the Statement.

[L1] The mixed-block reachability relation is an equivalence relation, so its equivalence classes are the blocks of the quotient blockade ([[lem-mixed-block-reachability-is-an-equivalence-relation]], [[def-quotient-blockade-by-mixed-block-reachability]]).

## Verification

**Proof technique:** direct.

1.1 Because $(A,B)$ and $(B,C)$ are mixed, there is a mixed chain from $A$ to $C$ through $B$. Thus $A$, $B$, and $C$ lie in the same $\mathcal M$-class. [given, L1]

1.2 No pair involving $D$ is mixed, so there is no mixed chain from $D$ to any of $A$, $B$, or $C$. Therefore $D$ lies in a different $\mathcal M$-class. [given, L1]

2.1 By [L1], the quotient blockade has one block equal to the union $A\cup B\cup C$ of the first class and one block equal to $D$ from the second class. [step 1.1, step 1.2, L1] ∎
