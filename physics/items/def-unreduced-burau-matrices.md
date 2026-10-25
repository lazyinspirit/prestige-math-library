---
id: def-unreduced-burau-matrices
kind: definition
title: "The unreduced Burau matrices"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps:
  - def-unreduced-burau-relative-homology-module
  - lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine
  - def-braid-group-by-the-artin-presentation
  - def-invertible-matrix-and-similarity-over-a-commutative-ring
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
  - ex-two-by-two-determinant-formula
  - def-the-laurent-polynomial-ring
  - lem-units-and-powers-of-the-laurent-polynomial-ring
justified_by:
  - lem-unreduced-burau-matrices-satisfy-the-artin-relations
  - thm-topological-and-matrix-burau-representations-agree
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $U=H_1(\tilde X,p^{-1}d;\mathbb Z)$ be the unreduced Burau module over
$\Lambda_1=\mathbb Z[t^{\pm1}]$
([[def-unreduced-burau-relative-homology-module]]) and use the **relative
lifted-edge basis** $e_1,\dots,e_n$ of the lifted spine $\Sigma$, where for the
design's conventions $e_i$ is the relative class of the $i$-th lifted spine
edge taken at deck level $i-1$: $e_i=t^{i-1}\epsilon_i$ with $\epsilon_i$ the
level-$0$ class of
[[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]].
The **unreduced Burau matrices** are the matrices
$B_1,\dots,B_{n-1}\in\operatorname{GL}_n(\Lambda_1)$ that are the identity
outside rows and columns $i,i+1$ and whose $2\times2$ block in rows and columns
$i,i+1$ is
$$B_i=\begin{pmatrix}1-t&t\\1&0\end{pmatrix},$$
acting on column vectors: the first column is the image of $e_i$ and the second
the image of $e_{i+1}$, so $e_i\mapsto(1-t)e_i+e_{i+1}$ and
$e_{i+1}\mapsto te_i$. Each $B_i$ is invertible with
$$B_i^{-1}=t^{-1}\begin{pmatrix}0&t\\1&t-1\end{pmatrix},$$
since $\det B_i=-t$ is a unit of $\Lambda_1$. The assignment
$\sigma_i\mapsto B_i$ defines a representation of the presented braid group
only through [[lem-unreduced-burau-matrices-satisfy-the-artin-relations]]; its
topological meaning on $U$ is
[[thm-topological-and-matrix-burau-representations-agree]]. Convention: matrix
multiplication follows the library composition order, so a braid word
$\sigma_{i_1}\cdots\sigma_{i_k}$ acts by $B_{i_1}\cdots B_{i_k}$ on column
vectors, the rightmost letter acting first; this displayed block and that order
control every later matrix.

## Facts & Assumptions

**Given:** $n\ge1$, the unreduced Burau module $U$ with its $\Lambda_1$-module structure, the relative lifted-edge basis $\epsilon_1,\dots,\epsilon_n$ of the lifted spine $\Sigma$, and the ring $\Lambda_1=\mathbb Z[t^{\pm1}]$.

[F1] The deck-equivariant homotopy equivalence of pairs identifies $U=H_1(\tilde X,p^{-1}d;\mathbb Z)$ with $H_1(\Sigma,\Sigma^0)$, which is the free $\Lambda_1$-module $\bigoplus_{i=1}^n\Lambda_1\epsilon_i$ on the relative classes of the level-$0$ edges; the deck generator acts by $t\cdot\epsilon_i=\epsilon_i^{(1)}$, the level-$1$ class ([[lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine]], [[def-unreduced-burau-relative-homology-module]]).

[F2] $t$ is a unit of $\Lambda_1$, so every power $t^{i-1}$ is a unit and $-t$ is a unit; multiplication by a unit carries a basis to a basis ([[def-the-laurent-polynomial-ring]], [[lem-units-and-powers-of-the-laurent-polynomial-ring]]).

[F3] $\operatorname{GL}_n(\Lambda_1)$ is the group of invertible $n\times n$ matrices over $\Lambda_1$, the matrix of a $\Lambda_1$-linear map in a fixed basis has as its columns the images of the basis vectors, and the determinant of a square matrix is computed from its entries; a $2\times2$ matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ has determinant $ad-bc$ ([[def-invertible-matrix-and-similarity-over-a-commutative-ring]], [[ex-two-by-two-determinant-formula]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]]).

## Proof

**Proof technique:** direct.

1.1 *The relative lifted-edge basis.* By [F1] the classes $\epsilon_1,\dots,\epsilon_n$ form a $\Lambda_1$-basis of $U$; since $e_i=t^{i-1}\epsilon_i$ differs from $\epsilon_i$ by the unit $t^{i-1}$ by [F2], the family $e_1,\dots,e_n$ is again a $\Lambda_1$-basis of $U$. In particular every element of $U$ has a unique expression $\sum_{i=1}^nc_ie_i$ with $c_i\in\Lambda_1$. [F1, F2]

1.2 *Invertibility.* Put $C_i:=t^{-1}\begin{pmatrix}0&t\\1&t-1\end{pmatrix}=\begin{pmatrix}0&1\\t^{-1}&(t-1)t^{-1}\end{pmatrix}$, the identity outside the same block. Multiplying the two $2\times2$ blocks in the order $B_iC_i$ gives $\begin{pmatrix}1-t&t\\1&0\end{pmatrix}\begin{pmatrix}0&1\\t^{-1}&(t-1)t^{-1}\end{pmatrix}=\begin{pmatrix}1&(1-t)+(t-1)\\0&1\end{pmatrix}=I_2$, and the reverse order gives $I_2$ by the same computation, so $B_iC_i=I_n=C_iB_i$: $B_i$ is invertible with inverse $C_i$, and $\det B_i=(1-t)\cdot0-t\cdot1=-t$ by the $2\times2$ formula, a unit of $\Lambda_1$ by [F2]. [F2, F3, algebra]

2.1 *The block action.* For $i\in\{1,\dots,n-1\}$ let $B_i$ be the identity outside rows and columns $i,i+1$ with the displayed $2\times2$ block. By the column convention of [F3] the images of the basis vectors are the columns of $B_i$, namely $e_i\mapsto(1-t)e_i+e_{i+1}$, $e_{i+1}\mapsto te_i$ and $e_j\mapsto e_j$ for $j\notin\{i,i+1\}$; these three formulas determine $B_i$ uniquely as a $\Lambda_1$-linear map on $U$ followed by the chosen basis. [F3, step 1.1]

3.1 *Conventions and what is deferred.* The assignment $\sigma_i\mapsto B_i$ is defined for $1\le i\le n-1$; that it extends to a homomorphism on the presented braid group of [[def-braid-group-by-the-artin-presentation]] requires the Artin relations verified in [[lem-unreduced-burau-matrices-satisfy-the-artin-relations]], and that its action on $U$ is realised by the geometric half twists is [[thm-topological-and-matrix-burau-representations-agree]]; both are proved later on this page and are not used here. Matrices act on column vectors, and a word $\sigma_{i_1}\cdots\sigma_{i_k}$ acts by $B_{i_1}\cdots B_{i_k}$ with the rightmost letter first, matching the library's leftmost-outermost composition convention of [F3]. [F1, F3, step 1.1, step 2.1] ∎
