---
id: ex-decategorifying-a-khovanov-seidel-generator
kind: example
title: "Decategorifying a generator on the vertex-projective basis"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
deps:
  - prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action
  - lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives
  - def-unreduced-burau-matrices
  - def-graded-grothendieck-group-of-a-m-perfect-complexes
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 2e.1"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 2e.1, printed pp. 14-15 (the displayed action of the generators)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Take $m=2$. By
[[lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives]]
the group $G(A_2)$ is free over $\mathbb Z[q,q^{-1}]$ on the basis
$[P_0],[P_1],[P_2]$. By
[[prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action]] the
operator $[R_1]$ acts on coefficient column vectors in the ordered basis
$([P_0],[P_1],[P_2])$ by
$$[R_1]=\begin{pmatrix}1&0&0\\-q&-q&-1\\0&0&1\end{pmatrix},$$
whose columns are the images of $[P_0],[P_1],[P_2]$: the first column is
$[P_0]-q[P_1]$, the second $-q[P_1]$, and the third $[P_2]-[P_1]$. The matrix
$$C=\begin{pmatrix}q^2&q^2&0\\0&-q&-q\\0&0&1\end{pmatrix}$$
is invertible over $\mathbb Z[q,q^{-1}]$ (it is upper triangular with diagonal
entries $q^2,-q,1$, all units) and
$$C\,[R_1]\,C^{-1}=B_1,$$
where
$$B_1=\begin{pmatrix}1-t&t&0\\1&0&0\\0&0&1\end{pmatrix}$$
is the first unreduced Burau matrix at $t=q$, in the column-vector convention of
[[def-unreduced-burau-matrices]]. In the Burau coordinates $z=Cv$, the standard coordinate vectors satisfy
$e_0\mapsto(1-q)e_0+e_1$, $e_1\mapsto qe_0$, and $e_2\mapsto e_2$.
The displayed vertex-projective formulas describe the original basis before
this change of coordinates. The example records the
conventions: $q=t$, matrices act on column vectors, and the generator $\sigma_i$
is the one that moves the vertex classes $i-1,i,i+1$.

## Facts & Assumptions
**Given:** The index $m=2$, the free basis $[P_0],[P_1],[P_2]$ of $G(A_2)$ over $\mathbb Z[q,q^{-1}]$, the operator $[R_1]$ of the decategorification proposition, and the unreduced Burau matrix $B_1$ with parameter $t$.

[L1] $G(A_2)$ is free on $[P_0],[P_1],[P_2]$ and the class map is additive with $[X\{r\}]=q^r[X]$ ([[lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives]], [[def-graded-grothendieck-group-of-a-m-perfect-complexes]]).

[L2] $[R_i][P_i]=-q[P_i]$, $[R_i][P_{i+1}]=[P_{i+1}]-[P_i]$, $[R_i][P_{i-1}]=[P_{i-1}]-q[P_i]$ and $[R_i][P_j]=[P_j]$ for $|i-j|>1$, with terms omitted at the boundary; and $C[R_i]C^{-1}=B_i|_{t=q}$ with $C_{r,r}=C_{r,r+1}=(-q)^{m-r}$, $C_{m,m}=1$, for every $i$ ([[prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action]]).

[L3] The unreduced Burau matrix $B_1$ has the block $\begin{pmatrix}1-t&t\\1&0\end{pmatrix}$ at rows and columns $0,1$ and the identity elsewhere, and acts on column vectors ([[def-unreduced-burau-matrices]]).



## Verification

**Proof technique:** direct.

1.1 *The matrix of $[R_1]$ for $m=2$.* By [L2] with $i=1$ and $m=2$: $[R_1][P_1]=-q[P_1]$, $[R_1][P_2]=[P_2]-[P_1]$, and $[R_1][P_0]=[P_0]-q[P_1]$, there being no $P_{-1}$ term; no $j\in\{0,1,2\}$ satisfies $|1-j|>1$. Reading these as columns in the basis $[P_0],[P_1],[P_2]$ gives the displayed matrix $[R_1]$ with columns $(1,-q,0)^{\mathsf T}$, $(0,-q,0)^{\mathsf T}$ and $(0,-1,1)^{\mathsf T}$. [L1, L2]

1.2 *The change of basis.* For $m=2$ the matrix $C$ of [L2] is $C_{0,0}=C_{0,1}=(-q)^2=q^2$, $C_{1,1}=C_{1,2}=(-q)^1=-q$ and $C_{2,2}=1$, which is the displayed matrix; it is upper triangular with diagonal entries $q^2,-q,1$, all units of $\mathbb Z[q,q^{-1}]$, so it is invertible over $\mathbb Z[q,q^{-1}]$. [L2]

2.1 *The matrix identity.* Multiplying out, $C[R_1]=$ the matrix with rows $(q^2(1-q),-q^3,-q^2)$, $(q^2,q^2,0)$, $(0,0,1)$ and $C^{-1}$ has rows $(q^{-2},q^{-1},1)$, $(0,-q^{-1},-1)$, $(0,0,1)$; the product $C[R_1]C^{-1}$ has first row $(1-q,q,0)$, second row $(1,0,0)$ and third row $(0,0,1)$, which is exactly $B_1$ with $t=q$ as in [L3]. Hence $C[R_1]C^{-1}=B_1$. [step 1.1, step 1.2, L3]

3.1 *Conclusion.* The three-dimensional instance of the decategorification proposition is the displayed matrix computation: the operator $[R_1]$ in the vertex-projective basis is conjugate by the explicit invertible matrix $C$ to the unreduced Burau generator at $t=q$. No choice principle is used. [step 2.1] ∎ 