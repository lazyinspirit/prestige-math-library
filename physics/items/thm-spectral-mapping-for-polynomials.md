---
id: thm-spectral-mapping-for-polynomials
kind: theorem
title: 'If $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in $F[x]$, then $\chi_{p(T)}(y)=\prod_{i<n}(y-p(\lambda_i))$ for every $p\in F[x]$: the eigenvalues of $p(T)$ are $p(\lambda_i)$, counted with algebraic multiplicity'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-polynomial-evaluation-at-an-endomorphism, def-characteristic-polynomial-of-an-operator, thm-spectrum-is-the-root-set-of-the-characteristic-polynomial, lem-characteristic-polynomial-of-block-triangular-matrix, def-algebraic-and-geometric-multiplicity-of-an-eigenvalue, thm-dimension-of-a-linear-subspace, def-coordinate-column-and-matrix-of-a-linear-map, thm-matrix-of-a-composite-is-the-product, thm-matrix-representation-is-a-vector-space-isomorphism, thm-polynomial-ring-over-a-field-is-a-ufd]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.3.3'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Let $T$ act on an $n$-dimensional $F$-vector space and suppose

$$\chi_T(x)=\prod_{i<n}(x-\lambda_i).$$

For every $p\in F[x]$,

$$\chi_{p(T)}(y)=\prod_{i<n}\bigl(y-p(\lambda_i)\bigr).$$

Consequently the eigenvalues of $p(T)$ are the values $p(\lambda_i)$, counted with the combined algebraic multiplicities shown by this product.

## Facts & Assumptions

**Given:** $T$, the displayed split factorization of $\chi_T$, and $p\in F[x]$.

[L1] Polynomial evaluation is $p(T)=\sum_k a_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]). Matrix representation sends sums and scalar multiples to matrix sums and scalar multiples ([[thm-matrix-representation-is-a-vector-space-isomorphism]]) and composites to matrix products ([[thm-matrix-of-a-composite-is-the-product]]).

[L2] The characteristic polynomial of an operator is computed in any basis and is $1$ in dimension zero ([[def-characteristic-polynomial-of-an-operator]]).

[L3] Roots of $\chi_T$ are exactly eigenvalues ([[thm-spectrum-is-the-root-set-of-the-characteristic-polynomial]]).

[L4] An independent subset of a finite-dimensional space extends without Choice to a basis ([[thm-dimension-of-a-linear-subspace]], clause 3), whose representing matrix records the coordinate columns of the images ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L5] A block-triangular characteristic polynomial is the product of the characteristic polynomials of its diagonal blocks ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

[L6] The ring $F[x]$ is a unique factorisation domain, hence an integral domain and admits cancellation of nonzero polynomials ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L7] Algebraic multiplicity is the exponent of a root's linear factor in the characteristic polynomial ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

## Proof

**Proof technique:** induction on $n$.

1.1 If $n=0$, both sides are the empty product $1$ by [L2]. [base, L2, algebra]

1.2 Assume $n>0$ and the result in dimension $n-1$. The factor $x-\lambda_0$ shows that $\lambda_0$ is a root of $\chi_T$, so [L3] supplies a nonzero eigenvector $v$. Extend $(v)$ by [L4] to a basis. In that basis [L4] gives $[T]=\begin{pmatrix}\lambda_0&*\\0&B\end{pmatrix}$. [ih, L3, L4, given, choose]

2.1 By [L5], $\chi_T(x)=(x-\lambda_0)\chi_B(x)$. Comparing with the given factorization and cancelling $x-\lambda_0$ in the domain [L6] gives $\chi_B(x)=\prod_{0<i<n}(x-\lambda_i)$. [step 1.2, L5, L6, given]

3.1 Powers, linear combinations, and [L1] preserve this block upper-triangular shape, so $[p(T)]=\begin{pmatrix}p(\lambda_0)&*\\0&p(B)\end{pmatrix}$. The induction hypothesis applied to $B$ and step 2.1 gives $\chi_{p(B)}(y)=\prod_{0<i<n}(y-p(\lambda_i))$. [step 1.2, step 2.1, ih, L1]

4.1 Applying [L5] to step 3.1 yields $\chi_{p(T)}(y)=(y-p(\lambda_0))\chi_{p(B)}(y)=\prod_{i<n}(y-p(\lambda_i))$. [step 3.1, L2, L5]

5.1 The base case and induction step prove the polynomial identity for every finite dimension. By [L3] and [L7], its roots are the eigenvalues of $p(T)$ and repeated equal values acquire their combined algebraic multiplicity. [step 1.1, step 4.1, L3, L7, discharge-induction] ∎
