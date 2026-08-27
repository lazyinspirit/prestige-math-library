---
id: ex-the-quotient-witness-reduction-in-a-four-block-configuration
kind: example
title: "The quotient-witness reduction in a three-block configuration"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks, def-quotient-blockade-by-mixed-block-reachability]
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

Take original blocks $A_1,A_2,B$ and outside vertices $x,y,u$ with the
following adjacency pattern:

1. each of $A_1$, $A_2$, and $B$ induces a connected subgraph;
2. $A_1$ and $A_2$ are mixed;
3. $B$ is complete to $A_1$ and anticomplete to $A_2$;
4. $x$ and $y$ are nonadjacent and both are complete to $A_1\cup A_2\cup B$;
5. $u$ is adjacent to $x$, nonadjacent to $y$, complete to $A_1\cup A_2$, and
   anticomplete to $B$.

Then the quotient blocks are $D_1:=A_1\cup A_2$ and $D_2:=B$, and the
quotient-level witness descends to the original mixed pair $A_1,A_2$.

## Facts & Assumptions

**Given:** The three-block configuration described in the Statement.

[L1] Mixed original blocks lie in one quotient block, so $A_1$ and $A_2$ merge into $D_1$, while $B$ stays separate because it is pure to each of $A_1$ and $A_2$ ([[def-quotient-blockade-by-mixed-block-reachability]]).

[L2] The descent lemma turns a quotient-level witness on $D_1,D_2$ into a witness on mixed original blocks inside $D_1$ ([[lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks]]).

## Verification

**Proof technique:** direct.

1.1 By item 2 of the configuration and [L1], the two original blocks $A_1,A_2$ form one quotient block $D_1=A_1\cup A_2$, while $D_2=B$ is the other quotient block. Because $B$ is complete to $A_1$ and anticomplete to $A_2$, the quotient blocks $D_1$ and $D_2$ are mixed. [given, L1]

2.1 Item 1 of the configuration says that every original block of the blockade is connected, so the connectivity hypothesis of [L2] holds. No vertex of $D_1$ is mixed on $D_2$: every vertex of $A_1$ is complete to $B$, and every vertex of $A_2$ is anticomplete to $B$. The outside vertices satisfy the remaining hypotheses of [L2]: $x$ and $y$ are nonadjacent and complete to $D_1\cup D_2$, while $u\in N(x)\setminus N(y)$ is complete to $D_1$ and anticomplete to $D_2$. [step 1.1, given]

3.1 Applying [L2] therefore yields mixed original blocks $A_1,A_2$ inside $D_1$ and vertices $x',y',u'$ outside $A_1\cup A_2$ with the required adjacency pattern. Thus the quotient-level witness has been pushed down to a witness on the original mixed pair inside $D_1$. [step 2.1, L2] ∎
