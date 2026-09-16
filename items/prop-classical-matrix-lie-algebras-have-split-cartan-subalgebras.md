---
id: prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras
kind: proposition
title: Split Cartan subalgebras of classical matrix Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-classical-complex-matrix-lie-algebras, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-toral-and-maximal-toral-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20.3, Examples 20.12-20.14, printed pp. 110-111"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak g$ be one of $\mathfrak{sl}_n(\mathbb C)$,
$\mathfrak{sp}_{2n}(\mathbb C)$, $\mathfrak{so}_{2n}(\mathbb C)$,
$\mathfrak{so}_{2n+1}(\mathbb C)$
([[def-classical-complex-matrix-lie-algebras]]). Then the matrices whose
$a$-part is a diagonal matrix $\operatorname{diag}(x_1,\dots,x_n)$ (in the
$\mathfrak{sl}_n$ case, with $\sum_ix_i=0$) and whose remaining blocks vanish
form a Cartan subalgebra $\mathfrak h$
([[def-cartan-subalgebra-of-a-lie-algebra]]); it is abelian and
$\mathfrak h\cong\mathbb C^n$ (respectively $\mathbb C^{n-1}$), is maximal
toral, and equals its own centralizer in $\mathfrak g$.

## Facts & Assumptions

**Given:** One of the matrix Lie algebras above, its diagonal subalgebra $\mathfrak h$, and the matrix units $E_{ab}$.

[L1] The algebras are the sets described in [[def-classical-complex-matrix-lie-algebras]], with the block forms $A=\begin{pmatrix}a&b\\c&-a^{T}\end{pmatrix}$ (a diagonal in $\mathfrak h$, $b=c=0$) and the analogous odd orthogonal form. In all cases $[H,E_{ab}]=(H_{aa}-H_{bb})E_{ab}$ when $H$ is diagonal.

[L2] A Cartan subalgebra is a nilpotent Lie subalgebra equal to its own normalizer; the normalizer and torality conventions are those of [[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]] and [[def-toral-and-maximal-toral-subalgebra]].

## Proof

**Proof technique:** direct.

1.1 $\mathfrak h$ is abelian, hence nilpotent, and the linear map sending a diagonal matrix to its diagonal vector is an isomorphism of $\mathfrak h$ with the sum-zero hyperplane of $\mathbb C^n$ (respectively with $\mathbb C^n$ in the non-special-linear cases); the relevant dimensions are $n-1$ for $\mathfrak{sl}_n$ and $n$ otherwise. [L1, L2, algebra]

1.2 $\mathfrak h$ is self-normalizing. Let $X$ be in $\mathfrak g$ with $[X,H]\in\mathfrak h$ for every $H\in\mathfrak h$; taking $H=\operatorname{diag}(h_1,\dots,h_n)$ with pairwise distinct $h_i$ (shifted to be traceless in the $\mathfrak{sl}_n$ case) and using [L1], the off-diagonal matrix-unit coefficients of $[X,H]$ are $(h_b-h_a)X_{ab}=0$, so $X_{ab}=0$ for $a\ne b$ in each diagonal block; the block conditions $AJ+JA^{T}=0$ then force all remaining blocks to vanish (they are linear in the off-diagonal entries already shown to vanish), so $X$ is diagonal and lies in $\mathfrak h$. Hence $N_{\mathfrak g}(\mathfrak h)=\mathfrak h$. [L1, L2, algebra]

2.1 The adjoint action of $\mathfrak h$ on $\mathfrak g$ is simultaneously diagonalizable: in the matrix-unit basis every $[H,\,\cdot\,]$ has the eigenvectors $E_{ab}$ with eigenvalue $H_{aa}-H_{bb}$ by [L1], so $\mathfrak h$ is toral; it is maximal toral because a larger abelian subalgebra commuting with $\mathfrak h$ would lie in the centralizer $C_{\mathfrak g}(\mathfrak h)=\mathfrak h$ computed in step 1.2. [L1, L2, step 1.2, algebra]

3.1 By steps 1.1 and 1.2 the subalgebra $\mathfrak h$ is nilpotent and equal to its normalizer, hence is a Cartan subalgebra; by step 2.1 it is maximal toral and equals its centralizer. This proves all the assertions. [L2, step 1.1, step 1.2, step 2.1, algebra] ∎
