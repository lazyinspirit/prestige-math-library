---
id: cor-nilpotent-similarity-classified-by-power-ranks
kind: corollary
title: "Nilpotent similarity is classified by the ranks of all powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-power-ranks-determine-nilpotent-jordan-blocks, thm-similarity-is-an-equivalence-relation-and-models-basis-change]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Sections 4.3-4.4"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

Let $N$ and $M$ be nilpotent endomorphisms of finite-dimensional vector spaces $V$ and $W$ **over the same field $F$**, where similar means that some $F$-linear isomorphism $\varphi:V\to W$ satisfies $M=\varphi N\varphi^{-1}$. Then $N$ and $M$ are similar if and only if
$$\operatorname{rank}N^k=\operatorname{rank}M^k\qquad\text{for every }k\ge0.$$
The $k=0$ equality includes equality of the dimensions.

The common field is a hypothesis, not a convenience: rank sequences are integers and can agree across different fields, while similarity cannot. The zero endomorphisms of the one-dimensional spaces over $\mathbf F_2$ and over $\mathbf F_3$ have rank $1$ at $k=0$ and rank $0$ for every $k\ge1$, and there is no linear isomorphism between them at all.

## Facts & Assumptions

**Given:** Finite-dimensional nilpotent endomorphisms $N$ and $M$ over the same field.

[L1] The ranks of all powers determine every nilpotent Jordan-block multiplicity ([[thm-power-ranks-determine-nilpotent-jordan-blocks]]).

[L2] Similarity is change of basis for one endomorphism and is an equivalence relation ([[thm-similarity-is-an-equivalence-relation-and-models-basis-change]]).

## Proof

**Proof technique:** direct.

1.1 If $N$ and $M$ are similar, conjugating $N^k$ gives $M^k$; an invertible change of coordinates preserves image dimension, so their ranks agree for every $k\ge0$. [L2, algebra]

1.2 Conversely, equality of all power ranks makes the two Jordan-block multisets equal by [L1]. Choose Jordan-string bases $\mathcal B$ of $V$ and $\mathcal C$ of $W$ realising those multisets; since the multisets agree, both bases have the same length and $N$ and $M$ have the same block diagonal matrix in them. Because $V$ and $W$ are spaces over the same field $F$, sending the $i$th vector of $\mathcal B$ to the $i$th vector of $\mathcal C$ defines an $F$-linear isomorphism $\varphi:V\to W$, and matching the block matrices entry by entry gives $\varphi N=M\varphi$, hence $M=\varphi N\varphi^{-1}$; [L2] identifies this with similarity. [L1, L2, given, choose]

2.1 Steps 1.1 and 1.2 establish both directions, with the empty block multiset covering zero-dimensional spaces. [step 1.1, step 1.2] ∎
