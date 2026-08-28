---
id: thm-spectrum-of-the-petersen-graph
kind: theorem
title: "The Petersen graph has adjacency spectrum $\\{3,1^5,(-2)^4\\}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-graph-spectrum-spectral-radius-and-cospectrality, def-petersen-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steve Butler, Spectral Graph Theory course notes, lecture 9"
      url: "https://www.stevebutler.org/spectral2023"
---

## Statement

The Petersen graph has adjacency spectrum

$$\{3,1^5,(-2)^4\}.$$

## Facts & Assumptions

**Given:** The Petersen graph $P$ on the two-element subsets of a five-element set.

[F1] Two vertices of $P$ are adjacent exactly when the corresponding two-element subsets are disjoint ([[def-petersen-graph]]).

[F2] The adjacency spectrum is the multiset of adjacency eigenvalues ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

## Proof

**Proof technique:** direct.

1.1 Fix a vertex $X$. There are exactly three two-element subsets disjoint from $X$, so every vertex has degree $3$. If $X$ and $Y$ are adjacent, then they are disjoint and use four of the five points, so there is no two-element subset disjoint from both; if $X$ and $Y$ are nonadjacent, then they meet in one point and exactly one two-element subset is disjoint from both. Therefore the adjacency matrix $A$ satisfies $A^2=3I+(J-I-A)=2I+J-A$. [F1, algebra]

2.1 The all-ones vector $\mathbf 1$ is an eigenvector with eigenvalue $3$. If $x\perp\mathbf 1$, then $Jx=0$, so step 1.1 gives $A^2x=(2I-A)x$. Thus any eigenvalue $\theta$ of $A$ on $\mathbf 1^\perp$ satisfies $\theta^2+\theta-2=0$, so $\theta\in\{1,-2\}$. If $m_1$ and $m_{-2}$ are their multiplicities, then $m_1+m_{-2}=9$ and $\operatorname{tr}(A)=0$ gives $3+m_1-2m_{-2}=0$. Solving yields $m_1=5$ and $m_{-2}=4$. [step 1.1, algebra]

3.1 Hence the eigenvalues are $3$, $1$ with multiplicity $5$, and $-2$ with multiplicity $4$, which is the stated spectrum by [F2]. [step 2.1, F2] ∎
