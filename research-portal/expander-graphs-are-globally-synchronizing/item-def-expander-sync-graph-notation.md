---
title: Adjacency, degrees, graph Laplacian, and spectral notation
status: published
research_item: def-expander-sync-graph-notation
dependency_level: 1
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 6, Section 1.2; PDF p. 18, opening of Section 3
      statement: The article uses adjacency, degree, Laplacian and ordered eigenvalue
        notation, counting a self-loop once in the degree.
      hypotheses: A finite graph with symmetric binary adjacency matrix; the degree
        extrema require a nonempty vertex set.
      reading_limits: Sections 1.2 and the opening of Section 3 were inspected in the
        extracted article text. This reference attributes the notation; the
        justification below uses independent mathematical suppliers.
---

PDF p. 6: ` Section 1.2 `; PDF p. 18: ` Section 3 opening `

## Prerequisites

- [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)
- [math:def-unordered-pair-and-singleton](https://alphabetamath.cc/item/def-unordered-pair-and-singleton)
- [math:def-algebraic-and-geometric-multiplicity-of-an-eigenvalue](https://alphabetamath.cc/item/def-algebraic-and-geometric-multiplicity-of-an-eigenvalue)
- [math:thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree](https://alphabetamath.cc/item/thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree)


## Definition

Let $G=(V,E)$ be a finite undirected graph with nonempty vertex set $V$, $n=|V|$, and at most one edge between each pair of vertices, allowing a self-loop at a vertex. Thus $E$ is a set of unordered pairs $\{x,y\}$ with $x,y\in V$; $x=y$ represents a self-loop. Its adjacency matrix $A=(A_{xy})_{x,y\in V}$ has $A_{xy}=1$ when $\{x,y\}\in E$ and $A_{xy}=0$ otherwise. It is a symmetric matrix in $\{0,1\}^{n\times n}$ after an ordering of $V$.

The degree of $x$ is $d(x)=\sum_{y\in V}A_{xy}$, so a self-loop contributes once. The degree matrix $D$ is diagonal with $D_{xx}=d(x)$, and the graph Laplacian is $L=D-A$. Put $d_{\min}=\min_{x\in V}d(x)$ and $d_{\max}=\max_{x\in V}d(x)$. The graph is $d$-regular when $d(x)=d$ for every $x\in V$.

An eigenvalue of $A$ is a scalar $\lambda$ for which $Af=\lambda f$ for some nonzero vector $f\in\mathbb C^V$. List the real eigenvalues with algebraic multiplicity in nonincreasing order as $\lambda_1(A)\ge\cdots\ge\lambda_n(A)$. Write $\mathbf1\in\mathbb C^V$ for the vector whose entries are all $1$, $J=\mathbf1\mathbf1^\top$ for the all-ones matrix, and $I$ for the identity matrix of the appropriate size.

## Definition references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[math:def-unordered-pair-and-singleton](https://alphabetamath.cc/item/def-unordered-pair-and-singleton)

[math:def-algebraic-and-geometric-multiplicity-of-an-eigenvalue](https://alphabetamath.cc/item/def-algebraic-and-geometric-multiplicity-of-an-eigenvalue)

[math:thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree](https://alphabetamath.cc/item/thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree)

## Facts & Assumptions

[F1] A finite symmetric nonnegative matrix defines a network whose degree is its row sum, with the diagonal counted once, and whose Laplacian is the degree matrix minus the matrix itself ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)).

[F2] Matrices act on $\mathbb C^V$ by finite row sums; the adjoint is the conjugate transpose, so a real symmetric matrix is self-adjoint ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F3] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)).

[F4] The unordered pair $\{x,y\}$ is the set whose elements are exactly $x$ and $y$; it equals $\{y,x\}$, and $\{x,x\}=\{x\}$ is the singleton of $x$ ([math:def-unordered-pair-and-singleton](https://alphabetamath.cc/item/def-unordered-pair-and-singleton)).

[F5] For a finite-dimensional endomorphism, the algebraic multiplicity of an eigenvalue $\lambda$ is its root multiplicity in the characteristic polynomial, and its geometric multiplicity is the dimension of its eigenspace ([math:def-algebraic-and-geometric-multiplicity-of-an-eigenvalue](https://alphabetamath.cc/item/def-algebraic-and-geometric-multiplicity-of-an-eigenvalue)).

[F6] A diagonalizable endomorphism of a finite-dimensional vector space over a field has a split characteristic polynomial, and each eigenvalue's algebraic multiplicity equals its geometric multiplicity ([math:thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree](https://alphabetamath.cc/item/thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree)).

## Justification

**Given:** A finite nonempty undirected graph with binary adjacency and possible self-loops, as specified above.

**Goal:** Verify that the degree, Laplacian, eigenvalue ordering and matrix notation are well defined.

1.1 By [F4], $\{x,y\}=\{y,x\}$, including $\{x,x\}=\{x\}$ for a loop, so $A_{xy}=A_{yx}$ and $A$ is a symmetric nonnegative binary matrix. Thus [F1] applies: each row sum is a finite degree, a diagonal entry contributes once, and $D-A$ is the corresponding network Laplacian. Since $V$ is finite and nonempty, its degrees have a minimum and maximum. The regularity condition is equality of these finite row sums to the specified number $d$. [given, F1, F4]

2.1 By [F2], $A$ acts on the finite-dimensional complex vertex space and is self-adjoint, hence normal. By [F3] it has an orthonormal eigenbasis. Each associated eigenvalue $\lambda$ is real: for a unit eigenvector $f$, the self-adjoint identity gives $\langle f,Af\rangle=\overline{\langle f,Af\rangle}$, while $\langle f,Af\rangle=\lambda$. The eigenbasis diagonalizes $A$. In these coordinates, the equation $Af=\lambda f$ forces all coordinates with diagonal entry different from $\lambda$ to vanish; hence the eigenbasis vectors with diagonal entry $\lambda$ form a basis of its eigenspace. By [F5] and [F6], their number is the algebraic multiplicity of $\lambda$. Thus the $n$ diagonal entries give all eigenvalues counted with algebraic multiplicity, and this finite list of real numbers can be sorted nonincreasingly. The outer product $\mathbf1\mathbf1^\top$ has every entry equal to $1$, and $I$ acts by leaving each vector unchanged. This establishes the notation. [F2, F3, F5, F6, step 1.1, algebra] ∎

## Source notes

The article's notation and its convention of counting a self-loop once are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Section 1.2 and the opening of Section 3. The justification above does not use the article as a proof.
