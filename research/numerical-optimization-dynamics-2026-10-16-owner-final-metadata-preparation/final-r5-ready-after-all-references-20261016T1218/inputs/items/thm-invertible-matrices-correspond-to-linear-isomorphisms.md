---
id: thm-invertible-matrices-correspond-to-linear-isomorphisms
kind: theorem
title: 'A square matrix is invertible exactly when its multiplication map is a linear isomorphism; matrices preserve inverses of linear isomorphisms'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-invertible-matrix-and-general-linear-group,
       def-linear-isomorphism-and-invertible-linear-map,
       thm-coordinate-action-of-a-linear-map, thm-matrix-of-a-composite-is-the-product,
       thm-matrix-multiplication-laws,
       thm-matrix-representation-is-a-vector-space-isomorphism, def-dimension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., Theorem 3.86'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, invertibility section'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

For $A\in M_n(F)$, let $L_A:M_{n\times1}(F)\to M_{n\times1}(F)$ be
$L_A(x)=Ax$. Then $A$ is invertible if and only if $L_A$ is a linear
isomorphism.

More generally, if $T:V\to W$ is a linear isomorphism between finite-dimensional
spaces and $\mathcal B,\mathcal C$ are ordered bases, then
$[T]_{\mathcal B}^{\mathcal C}$ is invertible and

$$[T^{-1}]_{\mathcal C}^{\mathcal B}=([T]_{\mathcal B}^{\mathcal C})^{-1}.$$

## Facts & Assumptions

**Given:** A field $F$, a natural $n$, and the matrix multiplication map $L_A$; for the general claim, an isomorphism $T$ and ordered bases $\mathcal B,\mathcal C$.

[L1] An invertible matrix has a two-sided matrix inverse, and a linear isomorphism has a two-sided linear inverse ([[def-invertible-matrix-and-general-linear-group]], [[def-linear-isomorphism-and-invertible-linear-map]]).

[L2] Matrix representation sends a composite of linear maps to the product of their matrices ([[thm-matrix-of-a-composite-is-the-product]]).

[L3] Matrix multiplication distributes over addition and is compatible with scalar multiplication ([[thm-matrix-multiplication-laws]]).

[L4] Every linear map between finite-dimensional coordinate spaces has a matrix in chosen ordered bases ([[thm-matrix-representation-is-a-vector-space-isomorphism]]).

[L5] The dimension of a finite-dimensional vector space is the common size of its finite bases ([[def-dimension]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $L_A$ and $L_B$ are linear. If $AB=BA=I_n$, then $L_AL_B=L_{AB}=\operatorname{id}$ and $L_BL_A=L_{BA}=\operatorname{id}$, so $L_A$ is a linear isomorphism with inverse $L_B$. This includes $n=0$, where the unique empty matrix and the unique zero-space map are their own inverses. [given, L1, L3]

2.1 Conversely, if $L_A$ has a linear inverse $S$, [L4] represents $S$ by a matrix $B$ in the standard coordinate basis. The two identity composites and [L2] give $AB=I_n=BA$, so $A$ is invertible. [step 1.1, L1, L2, L4]

3.1 For a general linear isomorphism $T$, the list $T(\mathcal B)$ is an ordered basis of $W$: $T^{-1}$ transfers both linear independence and spanning back to $\mathcal B$. Hence [L5] shows that $\mathcal B$ and $\mathcal C$ have the same length, so the two displayed representation matrices are square. Representing $T^{-1}\circ T$ and $T\circ T^{-1}$ in the chosen bases, [L2] gives both inverse equations for $[T]_{\mathcal B}^{\mathcal C}$ and $[T^{-1}]_{\mathcal C}^{\mathcal B}$. [step 2.1, L1, L2, L5] ∎
