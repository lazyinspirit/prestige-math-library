---
id: thm-similarity-is-an-equivalence-relation-and-models-basis-change
kind: theorem
title: 'Similarity is an equivalence relation, and two matrices represent the same endomorphism in two bases exactly when they are similar'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-similar-matrices, thm-two-sided-change-of-basis-formula,
       thm-invertible-matrices-correspond-to-linear-isomorphisms,
       def-equivalence-relation, def-matrix-units, thm-matrix-multiplication-laws,
       def-linear-basis]
justified_by: []
aliases: []
landmark: true
short: 'Similarity is basis change'
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3D, result 3.84'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'S. Schiavone, MIT 18.700 Day 9, similarity section'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Statement

Similarity is an equivalence relation on $M_n(F)$. Moreover, matrices
$A,B\in M_n(F)$ are similar if and only if there are an $n$-dimensional
$F$-vector space $V$, an endomorphism $T:V\to V$, and ordered bases
$\mathcal B,\mathcal C$ such that
$A=[T]_{\mathcal B}^{\mathcal B}$ and
$B=[T]_{\mathcal C}^{\mathcal C}$.

## Facts & Assumptions

**Given:** A field $F$, a natural $n$, and matrices $A,B,C\in M_n(F)$.

[L1] $A$ and $B$ are similar when $B=P^{-1}AP$ for some invertible $P$ ([[def-similar-matrices]]).

[L2] The square change-of-basis formula conjugates the matrix of an endomorphism by the coordinate transition matrix ([[thm-two-sided-change-of-basis-formula]]).

[L3] The matrices $E_{i0}$ are the standard coordinate columns in $M_{n\times1}(F)$ ([[def-matrix-units]]).

[L4] Matrix multiplication is associative, unital, distributive, and compatible with scalar multiplication ([[thm-matrix-multiplication-laws]]).

[L5] A finite ordered list is an ordered basis exactly when it is linearly independent and spans the space ([[def-linear-basis]]).

## Proof

**Proof technique:** direct.

1.1 Taking $P=I_n$ proves reflexivity. If $B=P^{-1}AP$, then $A=(P^{-1})^{-1}BP^{-1}$, proving symmetry. If also $C=Q^{-1}BQ$, then associativity in [L4] gives $C=(PQ)^{-1}A(PQ)$, proving transitivity. Thus similarity is an equivalence relation. [given, L1, L4]

2.1 If $A$ and $B$ represent the same endomorphism in bases $\mathcal B$ and $\mathcal C$, [L2] gives $B=P^{-1}AP$ with $P=P_{\mathcal B\leftarrow\mathcal C}$, so they are similar. [step 1.1, L1, L2]

3.1 Conversely, suppose $B=P^{-1}AP$. On $V=M_{n\times1}(F)$ let $T=L_A$, which is linear by [L4], and let $\mathcal E=(E_{i0})_{i<n}$. By [L3], every column $y$ has the unique expansion $y=\sum_{i<n}y_iE_{i0}$, so [L5] makes $\mathcal E$ the standard ordered basis. The columns of invertible $P$ form an ordered basis $\mathcal C$: independence follows by multiplying $Px=0$ by $P^{-1}$, and every column vector $y$ equals $P(P^{-1}y)$, so [L5] applies. Moreover, $[T]_{\mathcal E}^{\mathcal E}=A$ because $T(E_{j0})$ is the $j$-th column of $A$. The change matrix $P_{\mathcal E\leftarrow\mathcal C}$ is $P$, so [L2] gives $[T]_{\mathcal C}^{\mathcal C}=P^{-1}AP=B$. [step 2.1, L1, L2, L3, L4, L5]

4.1 Steps 2.1 and 3.1 prove both directions of the characterisation, including $n=0$, where the unique empty matrix represents the unique endomorphism of the zero space. [step 2.1, step 3.1, L1, L2, L3, L4, L5] ∎
