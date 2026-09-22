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
$\mathfrak h\cong\mathbb C^{n-1}$ for $\mathfrak{sl}_n$ while
$\mathfrak h\cong\mathbb C^n$ for each symplectic or orthogonal algebra; it
is maximal toral and equals its own centralizer in $\mathfrak g$.

## Facts & Assumptions

**Given:** One of the matrix Lie algebras above, its diagonal subalgebra $\mathfrak h$, and the matrix units $E_{ab}$.

[L1] The algebras are the sets described in [[def-classical-complex-matrix-lie-algebras]], with the block forms $A=\begin{pmatrix}a&b\\c&-a^{T}\end{pmatrix}$ (a diagonal in $\mathfrak h$, $b=c=0$) and the analogous odd orthogonal form. In all cases $[H,E_{ab}]=(H_{aa}-H_{bb})E_{ab}$ when $H$ is diagonal.

[L2] A Cartan subalgebra is a nilpotent Lie subalgebra equal to its own normalizer; the normalizer and torality conventions are those of [[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]] and [[def-toral-and-maximal-toral-subalgebra]].

## Proof

**Proof technique:** direct.

1.1 $\mathfrak h$ is abelian, hence nilpotent, and the linear map sending a diagonal matrix to its diagonal vector is an isomorphism of $\mathfrak h$ with the sum-zero hyperplane of $\mathbb C^n$ (respectively with $\mathbb C^n$ in the non-special-linear cases); the relevant dimensions are $n-1$ for $\mathfrak{sl}_n$ and $n$ otherwise. [L1, L2, algebra]

1.2 Choose $H_0\in\mathfrak h$ whose full ambient diagonal entries are pairwise distinct: in $\mathfrak{sl}_n$ take $h_i=i-(n+1)/2$; in the even symplectic and orthogonal cases take the diagonal entries $1,\dots,n,-1,\dots,-n$; and in the odd orthogonal case insert $0$ before those $2n$ entries. If $X\in N_{\mathfrak g}(\mathfrak h)$, then $[X,H_0]\in\mathfrak h$ is diagonal. On the other hand every diagonal entry of a commutator with a diagonal matrix is zero, so $[X,H_0]=0$. Its $(a,b)$ entry is $(H_{0,bb}-H_{0,aa})X_{ab}$; distinctness therefore makes every off-diagonal entry of $X$ vanish. Intersecting the ambient diagonal matrices with the defining trace or form-preservation equations in [L1] gives exactly $\mathfrak h$. Thus $N_{\mathfrak g}(\mathfrak h)=\mathfrak h$, and consequently $C_{\mathfrak g}(\mathfrak h)=\mathfrak h$ as well. [L1, L2, algebra]

2.1 The adjoint action of $\mathfrak h$ on the ambient matrix algebra is simultaneously diagonalizable: the matrix units $E_{ab}$ are common eigenvectors with eigenvalue $H_{aa}-H_{bb}$ by [L1]. Since $\mathfrak g$ is invariant under every $\operatorname{ad}_H$, their restrictions to $\mathfrak g$ are simultaneously diagonalizable, so $\mathfrak h$ is toral. Any toral subalgebra containing $\mathfrak h$ is abelian and hence lies in $C_{\mathfrak g}(\mathfrak h)=\mathfrak h$ by step 1.2; therefore $\mathfrak h$ is maximal toral. [L1, L2, step 1.2, algebra]

3.1 By steps 1.1 and 1.2 the subalgebra $\mathfrak h$ is nilpotent and equal to its normalizer, hence is a Cartan subalgebra; by step 2.1 it is maximal toral and equals its centralizer. This proves all the assertions. [L2, step 1.1, step 1.2, step 2.1, algebra] ∎
