---
id: lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks
kind: lemma
title: "A quotient-level mixed-block witness descends to two mixed member blocks"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-quotient-blocks-preserve-connectedness-and-anticonnectedness, lem-blocks-from-different-mixed-block-classes-form-pure-pairs, lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.2"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal L$ be a blockade in a graph $G$, and suppose that every block of
$\mathcal L$ is connected or every block is anticonnected. Let $D_1,D_2$ be
distinct mixed blocks of the quotient blockade $\mathcal L/\mathcal M$. Assume
there are vertices $x,y,u\notin D_1\cup D_2$ such that:

1. $x$ and $y$ are nonadjacent and both are complete to $D_1\cup D_2$;
2. $u\in N(x)\setminus N(y)$, with $u$ complete to $D_1$ and anticomplete to
   $D_2$; and
3. no vertex of $D_1$ is mixed on $D_2$.

Then there are mixed original blocks $A_1,A_2$ of $\mathcal L$, both contained
in $D_1$, and vertices $x',y',u'\notin A_1\cup A_2$ such that:

1. $x'$ and $y'$ are nonadjacent and both are complete to $A_1\cup A_2$; and
2. $u'\in N(x')\setminus N(y')$, with $u'$ complete to $A_1$ and anticomplete
   to $A_2$.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[L1] Distinct original blocks lying in different quotient blocks are pure to each other ([[lem-blocks-from-different-mixed-block-classes-form-pure-pairs]]).

[L2] If a vertex outside a quotient block is mixed on that quotient block but pure to each original block inside it, then two mixed original member blocks witness opposite adjacency to that vertex ([[lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks]]).

## Proof

**Proof technique:** direct.

1.1 Since $D_1$ and $D_2$ are mixed as quotient blocks, there is a vertex in one of them that is mixed on the other. Hypothesis 3 excludes the possibility that a vertex of $D_1$ is mixed on $D_2$, so choose a vertex $b_2\in D_2$ that is mixed on $D_1$. [given, choose]

2.1 The quotient blocks $D_1$ and $D_2$ are distinct. Therefore [L1] implies that every original block of $\mathcal L$ contained in $D_2$ is pure to every original block of $\mathcal L$ contained in $D_1$. In particular, if $B$ is the original block of $\mathcal L$ containing $b_2$, then $b_2$ is pure to every original block contained in $D_1$. [step 1.1, L1]

3.1 Now $b_2$ is outside $D_1$, is mixed on $D_1$ by step 1.1, and is pure to every original block inside $D_1$ by step 2.1. Applying [L2], choose mixed original blocks $A_1,A_2\subseteq D_1$ such that $b_2$ is complete to $A_1$ and anticomplete to $A_2$. [step 2.1, L2, choose]

4.1 Set $x':=y$, $y':=u$, and $u':=b_2$. Because $y$ is complete to $D_1\cup D_2$, it is complete to $A_1\cup A_2$ and adjacent to $b_2$. Because $u$ is complete to $D_1$ and anticomplete to $D_2$, it is complete to $A_1\cup A_2$ and nonadjacent to $b_2$. Hypothesis 2 gives $u\in N(x)\setminus N(y)$, so $y$ and $u$ are nonadjacent. Therefore $u'=b_2\in N(x')\setminus N(y')$, while $u'$ is complete to $A_1$ and anticomplete to $A_2$ by step 3.1. This is exactly the required witness. [step 3.1, given, algebra] ∎
