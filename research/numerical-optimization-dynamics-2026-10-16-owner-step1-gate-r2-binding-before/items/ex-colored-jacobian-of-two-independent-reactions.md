---
id: ex-colored-jacobian-of-two-independent-reactions
kind: example
title: "One color recovers two separated reaction columns of a sparse Jacobian"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-structural-column-coloring-for-sparse-jacobian-recovery, thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring, def-jacobian-matrix-and-gradient]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas F. Coleman and Jorge J. Moré, Estimation of Sparse Jacobian Matrices and Graph Coloring Problems, Argonne National Laboratory Report ANL-81-39"
      url: "https://digital.library.unt.edu/ark:/67531/metadc283504/"
    - title: "Bradley M. Bell and Kasper Kristensen, Computing Sparse Jacobians and Hessians Using Algorithmic Differentiation"
      url: "https://arxiv.org/pdf/2111.05207"
dependency_level: 2
---

## Example

Consider two independent first-order reactions $A\xrightarrow{k_1}B$ and $C\xrightarrow{k_2}D$, with $k_1,k_2>0$ and state $y=(a,b,c,d)$. Their vector field is $F(y)=(-k_1a,k_1a,-k_2c,k_2c)$.

## Facts & Assumptions

**Given:** The vector field and positive rates above.

[F1] [[def-jacobian-matrix-and-gradient]]: the Jacobian entries are the coordinate partial derivatives of the vector field.

[F2] [[def-structural-column-coloring-for-sparse-jacobian-recovery]]: columns sharing a row support interfere; a color seed is the indicator vector of its columns.

[F3] [[thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring]]: a proper coloring of a safe support pattern recovers each Jacobian entry from the corresponding compressed product.

## Verification



1.1 Differentiating the four components in coordinate order $(a,b,c,d)$, indexed $0,1,2,3$, gives $J=\begin{pmatrix}-k_1&0&0&0\\ k_1&0&0&0\\0&0&-k_2&0\\0&0&k_2&0\end{pmatrix}$. The row supports are $\{0\},\{0\},\{2\},\{2\}$, so no row contains two columns and the coloring that assigns all four columns one color is proper. [given, F1, F2, algebra]

2.1 Its seed is $s=(1,1,1,1)^T$ and $Js=(-k_1,k_1,-k_2,k_2)^T$. Each row has at most one supported column of this color, so [F3] recovers the nonzero entries from these four values; the remaining entries are zero by the declared pattern. [given, F2, F3, step 1.1, algebra] ∎
