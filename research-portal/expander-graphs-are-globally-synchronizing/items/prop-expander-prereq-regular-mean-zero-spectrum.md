---
id: prop-expander-prereq-regular-mean-zero-spectrum
kind: proposition
title: Regular adjacency spectra and normalized expansion
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-vertex-hilbert-space
  - math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - math:lem-symmetric-matrix-operator-norm-rayleigh
  - math:def-orthogonal-projection
  - math:def-regular-multigraph-and-normalized-adjacency
  - math:def-spectral-edge-and-vertex-expansion
  - math:lem-constant-vector-is-a-top-eigenvector
  - math:thm-expander-mixing-lemma
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  math:lem-symmetric-matrix-operator-norm-rayleigh: mathematical-premise
  math:def-orthogonal-projection: mathematical-premise
  math:def-regular-multigraph-and-normalized-adjacency: mathematical-premise
  math:def-spectral-edge-and-vertex-expansion: mathematical-premise
  math:lem-constant-vector-is-a-top-eigenvector: mathematical-premise
  math:thm-expander-mixing-lemma: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $V$ be a finite set with $n=|V|\ge1$, and let $A=(A_{xy})_{x,y\in V}$ be a real symmetric matrix with nonnegative entries and every row sum equal to $d>0$. Write $\mathbf1$ for the constant-one vector, $J$ for the all-ones matrix, and $\mathbf1^\perp=\{f:\sum_x f(x)=0\}$. Use the Euclidean operator norm induced by $\|f\|_2^2=\sum_x|f(x)|^2$. Then $A\mathbf1=d\mathbf1$, $\mathbf1^\perp$ is invariant under $A$, and

$$\left\|A-\frac dnJ\right\|_{\mathrm{op}}=\left\|A\big|_{\mathbf1^\perp}\right\|_{\mathrm{op}}.$$

The norm of an operator on the zero space is zero. For $n\ge2$, choose an orthonormal real eigenbasis of $A$ whose first vector is $\mathbf1/\sqrt n$, and denote the corresponding eigenvalues by $d=\lambda_1,\lambda_2,\ldots,\lambda_n$, with multiplicity. Then both norms equal $\max_{i\ge2}|\lambda_i|$. A further eigenvector with eigenvalue $d$, or an eigenvector with eigenvalue $-d$, is included in this maximum. For $n=1$ both norms are zero and the maximum over $i\ge2$ is not used.

Put $M=A/d$. Its restriction to $\mathbf1^\perp$ has norm $\alpha=\|A-(d/n)J\|_{\mathrm{op}}/d$. If $A$ is specifically the integer adjacency-slot matrix of a finite $d$-regular graph in the convention of [[math:def-regular-multigraph-and-normalized-adjacency]], then for subsets $S,T\subseteq V$, with $e(S,T)=\sum_{x\in S,y\in T}A_{xy}$ counting ordered slots, the expander mixing estimate is

$$\left|e(S,T)-\frac{d|S||T|}{n}\right|\le d\alpha\sqrt{|S|(1-|S|/n)\,|T|(1-|T|/n)}.$$

Here diagonal entries count loop slots; overlap between $S$ and $T$ is allowed. For a disconnected slot graph, another eigenvector of $A$ with eigenvalue $d$ exists. For a connected slot graph whose positive slots join opposite parts of a bipartition, $-d$ is an eigenvalue. In either case the corresponding eigenvalue is retained in the mean-zero spectrum.

## Facts & Assumptions

**Given:** The matrix and, where invoked, the adjacency-slot graph described in the statement.

**Goal:** Prove the centered norm identity, its normalized form, and the stated graph consequences.

[F1] The vertex space has the stated Euclidean inner product and matrix action; a real symmetric matrix acts self-adjointly ([[def-expander-prereq-vertex-hilbert-space]]).

[F2] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([[math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F3] For a symmetric real square matrix of positive order, its Euclidean operator norm is the largest absolute value of its eigenvalues ([[math:lem-symmetric-matrix-operator-norm-rayleigh]]).

[F4] Orthogonal projection onto a subspace sends each vector to its component in that subspace along its orthogonal complement ([[math:def-orthogonal-projection]]).

[F5] In the adjacency-slot convention, $A$ is a symmetric nonnegative integer matrix with row sum the positive integer $d$; $A_{xy}$ counts slots, diagonal entries count loop slots, and normalized adjacency is $M=A/d$ ([[math:def-regular-multigraph-and-normalized-adjacency]]). The normalized spectral parameter is $\alpha=\|M|_{\mathbf1^\perp}\|$, with $\alpha=0$ for $n=1$ ([[math:def-spectral-edge-and-vertex-expansion]]).

[F6] For such a slot graph the multiplicity of eigenvalue $1$ of $M$ is the number of connected components. For a connected graph, $-1$ is an eigenvalue exactly when its positive slots join opposite parts of a bipartition ([[math:lem-constant-vector-is-a-top-eigenvector]]).

[F7] The expander mixing lemma gives the displayed ordered-slot estimate for the conventions and parameter in [F5], including loops and overlapping subsets ([[math:thm-expander-mixing-lemma]]).

[F8] For a linear map $T:E\to F$ between finite-dimensional real or complex inner product spaces, its operator norm is $\max_{\|v\|=1}\|Tv\|$ when $E\ne\{0\}$ and is zero when $E=\{0\}$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 The row-sum condition gives $A\mathbf1=d\mathbf1$. For any $f$, self-adjointness gives $\langle\mathbf1,Af\rangle=\langle A\mathbf1,f\rangle=d\langle\mathbf1,f\rangle$; hence $A$ preserves $\mathbf1^\perp$. The vector $(n^{-1}\sum_x f(x))\mathbf1$ lies in the constant subspace and its difference from $f$ is mean zero. By [F4], $P=J/n$ is the orthogonal projection onto the constants. Thus $A-(d/n)J=A-dP$ is zero on constants and agrees with $A$ on $\mathbf1^\perp$. [F1, F4, algebra]

2.1 The restriction of $A$ to the real mean-zero subspace is self-adjoint. If $n\ge2$, apply [F2] to that restriction and adjoin $\mathbf1/\sqrt n$ to obtain the stated eigenbasis. In this basis $A-dP$ has eigenvalues $0,\lambda_2,\ldots,\lambda_n$. By [F3], its norm is $\max_{i\ge2}|\lambda_i|$; the same calculation on the restriction gives the same norm. A real eigenbasis also computes the complex operator norm: expanding a complex vector in this basis gives the same upper bound, attained at a real maximizing eigenvector. When $n=1$, $P=I$ and the mean-zero space is zero, so both norms are zero. [F2, F3, F8, step 1.1, algebra]

3.1 A second independent $d$-eigenvector can be made orthogonal to $\mathbf1$ by subtracting its constant projection, leaving a nonzero $d$-eigenvector. A $-d$-eigenvector is orthogonal to $\mathbf1$ because self-adjointness and $d>0$ give $-d\langle\mathbf1,v\rangle=d\langle\mathbf1,v\rangle$. Thus neither is discarded when the first constant vector is removed. Division by $d$ gives $\|M|_{\mathbf1^\perp}\|=\|A-(d/n)J\|_{\mathrm{op}}/d$, including the zero-space case. [F1, F8, step 1.1, step 2.1, algebra]

4.1 Under the additional integer slot hypotheses, [F5] identifies this normalized norm with the mixing lemma's $\alpha$, and [F7] gives the displayed estimate with precisely its ordered-slot, loop and overlap conventions. By [F6], disconnectedness supplies a second $1$-eigenvector of $M$, while the stated connected bipartition supplies a $-1$-eigenvector. Multiplication by $d$ and step 3.1 give the final assertions. This proves all claims. [F5, F6, F7, step 3.1, algebra] ∎
