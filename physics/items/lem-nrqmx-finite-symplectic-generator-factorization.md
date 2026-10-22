---
id: lem-nrqmx-finite-symplectic-generator-factorization
kind: lemma
domain: mathematics
title: Finite symplectic generator factorization
status: published
origin: pipeline
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Arvind, B. Dutta, N. Mukunda and R. Simon, The Real Symplectic Groups in Quantum Mechanics and Optics, §§II and IV"
      url: "https://arxiv.org/pdf/quant-ph/9509002"
---

## Statement

Let $r\ge1$, $J_0=\begin{pmatrix}0&I_r\\-I_r&0\end{pmatrix}$, and
$$\operatorname{Sp}(2r,\mathbb R)=\{S\in M_{2r}(\mathbb R):S^TJ_0S=J_0\}.$$
Every $S\in\operatorname{Sp}(2r,\mathbb R)$ is a finite product of matrices
of the following three types and their inverses:
$$U_X=\begin{pmatrix}I&X\\0&I\end{pmatrix},\quad L_Y=\begin{pmatrix}I&0\\Y&I\end{pmatrix},\quad D_A=\begin{pmatrix}A&0\\0&A^{-T}\end{pmatrix},$$
where $X,Y$ are real symmetric and $A$ is real invertible. Partial Fourier
rotations, which act by $(q_j,p_j)\mapsto(-p_j,q_j)$ on any selected set of
coordinates and fix the others, are also products of these matrices.
In addition, for every $S$ there is a product $G$ of these generators such
that the upper-left block of $SG$ is invertible.

## Facts & Assumptions

**Given:** $r\ge1$ and a real matrix $S$ satisfying the displayed symplectic
identity. Blocks are written in grouped coordinate order $z=(q,p)$ with
$q,p\in\mathbb R^r$.

[A1] The input matrix obeys $S^TJ_0S=J_0$ for
$J_0=\begin{pmatrix}0&I_r\\-I_r&0\end{pmatrix}$, and $r\ge1$.

[F1] Block multiplication gives, for
$S=\begin{pmatrix}A&B\\C&D\end{pmatrix}$, the equivalent relation
$S J_0 S^T=J_0$ and in particular $AB^T=BA^T$; the original relation
$S^TJ_0S=J_0$ gives $A^TC=C^TA$ and $A^TD-C^TB=I$. These relations also
imply that the first $r$ rows of $S$ have rank $r$.

## Proof

1.1 Each listed matrix is symplectic by direct multiplication with $J_0$:
$U_X^TJ_0U_X=J_0$ iff $X=X^T$, $L_Y^TJ_0L_Y=J_0$ iff $Y=Y^T$, and
$D_A^TJ_0D_A=J_0$. A quarter-turn on a subset is itself a block diagonal
product of two-dimensional matrices $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$
and identities, so is symplectic; on one selected coordinate it equals the
product $U_{-1}L_1U_{-1}$ in that coordinate. Thus all proposed generators
are symplectic. [given, A1, F1, algebra]

1.2 First suppose the upper-left block $A$ is invertible. The block equations
in [F1] imply $A^{-1}B=(A^{-1}B)^T$ and $CA^{-1}=(CA^{-1})^T$ by multiplying
$AB^T=BA^T$ and $A^TC=C^TA$ by the relevant inverses. They also give
$D=A^{-T}+CA^{-1}B$ from $A^TD-C^TB=I$. Therefore direct block
multiplication yields
$$S=L_{CA^{-1}}D_AU_{A^{-1}B},$$
which is the required factorization in this case. [given, F1, algebra]

1.3 For arbitrary $A$, let $k=\operatorname{rank}A$. Choose invertible real
matrices $L,R$ with $LAR=\operatorname{diag}(I_k,0)$, using row and column
reduction, and replace $S$ by $S'=D_LSD_R$. This replacement is symplectic.
Write its upper-right block as $B'$ and partition rows and columns after the
first $k$. The identity $A'B'^T=B'A'^T$ in [F1], with
$A'=\operatorname{diag}(I_k,0)$, forces the lower-left rectangular block of
$B'$ to vanish. Since the first $r$ rows of $S'$ are independent, the bottom
$r-k$ rows of $B'$ restricted to its last $r-k$ columns form an invertible
matrix $B_{22}$. Right-multiply $S'$ by the inverse partial Fourier rotation
$F$ on those last coordinates, $(q_j,p_j)\mapsto(p_j,-q_j)$. It is a product
of the inverse listed generators. The resulting upper-left block is block upper
triangular with diagonal blocks $I_k$ and $-B_{22}$, hence is invertible.
This argument also
covers $k=0$ and $k=r$ (with the empty block omitted). [given, F1, algebra]

2.1 The matrix $S'F$ has invertible upper-left block, so step 1.2 factors it
into the stated generators. Since $S=D_L^{-1}(S'F)F^{-1}D_R^{-1}$ and the
inverses of $D_L,D_R,F$ are of the same listed types, the same is true of
$S$. This proves the factorization for every symplectic matrix. [step 1.1,
step 1.2, step 1.3, algebra] ∎
