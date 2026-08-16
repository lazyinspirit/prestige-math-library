---
id: thm-real-line-covers-real-line-mod-integers
kind: theorem
title: "$p:\\mathbb R\\to\\mathbb R/\\mathbb Z$ is a covering map with translated interval sheets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-open-quotient-arcs-in-real-line-mod-integers, def-covering-map-and-evenly-covered-neighbourhoods]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

$p:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map. More explicitly, for
every $x\in\mathbb R$, let

$$J_x=(x-1/3,x+1/3),\qquad U_x=p[J_x].$$

Then $U_x$ is an open neighbourhood of $[x]$,

$$p^{-1}(U_x)=\coprod_{n\in\mathbb Z}(J_x+n),$$

and every restriction $p|_{J_x+n}:J_x+n\to U_x$ is a homeomorphism.

## Facts & Assumptions

**Given:** The quotient map $p:\mathbb R\to\mathbb R/\mathbb Z$ and a real representative $x$ of an arbitrary quotient class.

[L1] The quotient map is open, and every interval shorter than one embeds in $\mathbb R/\mathbb Z$. Moreover, $p^{-1}(p[V])=\bigcup_{n\in\mathbb Z}(V+n)$ for open $V\subseteq\mathbb R$ ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

[L2] A covering map is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sheets $V_j$, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

## Proof

**Proof technique:** direct.

1.1 The interval $J_x=(x-1/3,x+1/3)$ has length $2/3<1$. Its image $U_x=p[J_x]$ is open by [L1] and contains $p(x)=[x]$. [L1]

1.2 By the saturation formula in [L1], $p^{-1}(U_x)=\bigcup_{n\in\mathbb Z}(J_x+n)$. These open intervals are pairwise disjoint: if $y$ belonged to $J_x+m$ and $J_x+n$, then $|(y-m)-(y-n)|=|n-m|<2/3$, and an integer of absolute value below one is zero, so $m=n$. [L1, algebra]

2.1 Every translate $J_x+n$ has length $2/3<1$, so [L1] makes $p|_{J_x+n}$ a homeomorphism onto its image; its image is $p[J_x+n]=p[J_x]=U_x$. The map $p$ is already a continuous surjection because it is a quotient projection, and steps 1.1 and 1.2 give an open neighbourhood with a disjoint union of open sheets. Thus every clause of [L2] holds, and $p$ is a covering map. [step 1.1, step 1.2, L1, L2] ∎
