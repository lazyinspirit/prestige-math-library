---
id: thm-change-of-basis-matrices-are-inverses
kind: theorem
title: '$[v]_{\mathcal C}=P_{\mathcal C\leftarrow\mathcal B}[v]_{\mathcal B}$ and $P_{\mathcal B\leftarrow\mathcal C}=P_{\mathcal C\leftarrow\mathcal B}^{-1}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-change-of-basis-matrix, thm-coordinate-action-of-a-linear-map,
       thm-matrix-of-a-composite-is-the-product,
       def-invertible-matrix-and-general-linear-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Definition 3.82'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, Corollary 36'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

For ordered bases $\mathcal B,\mathcal C$ of a finite-dimensional vector space
$V$ and every $v\in V$,

$$[v]_{\mathcal C}=P_{\mathcal C\leftarrow\mathcal B}[v]_{\mathcal B}.$$

Moreover,

$$P_{\mathcal B\leftarrow\mathcal C}=P_{\mathcal C\leftarrow\mathcal B}^{-1}.$$

## Facts & Assumptions

**Given:** Ordered bases $\mathcal B,\mathcal C$ of $V$ and a vector $v\in V$.

[L1] $P_{\mathcal C\leftarrow\mathcal B}$ is the matrix of $\operatorname{id}_V$ from $\mathcal B$-coordinates to $\mathcal C$-coordinates ([[def-change-of-basis-matrix]]).

[L2] Coordinate action converts a vector's coordinate column by the matrix of the map, and matrix representation sends composites to products ([[thm-coordinate-action-of-a-linear-map]], [[thm-matrix-of-a-composite-is-the-product]]).

## Proof

**Proof technique:** direct.

1.1 Applying coordinate action from [L2] to $\operatorname{id}_V$ and using [L1] gives $[v]_{\mathcal C}=P_{\mathcal C\leftarrow\mathcal B}[v]_{\mathcal B}$. [given, L1, L2]

2.1 Represent the identity composition $\operatorname{id}_V\circ\operatorname{id}_V$ first from $\mathcal B$ through $\mathcal C$ back to $\mathcal B$, and then from $\mathcal C$ through $\mathcal B$ back to $\mathcal C$. [step 1.1, L1, L2]

3.1 The composite-matrix formula in [L2] gives $P_{\mathcal B\leftarrow\mathcal C}P_{\mathcal C\leftarrow\mathcal B}=I$ and $P_{\mathcal C\leftarrow\mathcal B}P_{\mathcal B\leftarrow\mathcal C}=I$, so the two matrices are inverses. Empty ordered bases give the same two equations in $M_0(F)$. [step 2.1, L1, L2] ∎
