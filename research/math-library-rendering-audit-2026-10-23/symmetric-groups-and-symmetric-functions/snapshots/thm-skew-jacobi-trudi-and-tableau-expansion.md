---
id: thm-skew-jacobi-trudi-and-tableau-expansion
kind: theorem
title: Skew Jacobi–Trudi and tableau expansion
status: published
origin: pipeline
deps:
  - def-skew-schur-function-by-hall-adjointness
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - def-stable-schur-function-by-bialternants
  - def-bidegree-completed-symmetric-function-tensor-product
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - thm-schur-functions-form-an-orthonormal-integral-basis
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - thm-cauchy-kernel-has-power-complete-and-schur-expansions
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-09-30
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2 equation (2.5), p. 21; §3 equations (3.1), (3.4), pp. 40–41; §4 equations (4.2)–(4.3), pp. 62–63; §5 equations (5.1), (5.4), (5.7), (5.9)–(5.12), pp. 69–73
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
---

## Statement

If $\mu\subseteq\lambda$, then for every integer
$r\ge\max(\ell(\lambda),\ell(\mu))$, padding both partitions with zeros to
length $r$ gives
$$s_{\lambda/\mu}=\det\bigl(h_{\lambda_i-\mu_j-i+j}\bigr)_{1\le i,j\le r}=\sum_T x^{\operatorname{wt}(T)},$$
where $h_k=0$ for $k<0$ and $T$ ranges over the semistandard skew tableaux of
shape $\lambda/\mu$ (rows weakly increasing and columns strictly increasing).
If $\mu\not\subseteq\lambda$, then $s_{\lambda/\mu}=0$.

## Facts & Assumptions

**Given:** The graded stable ring, Hall-adjoint definition of skew Schur
functions, the Schur basis and Cauchy expansions, finite bialternants and
complete functions, and the skew-tableau conventions.

[F1] In the English diagram, row $i$ of $[\lambda]$ has $\lambda_i$ boxes;
thus $[\mu]\subseteq[\lambda]$ exactly when $\mu_i\le\lambda_i$ for every
row after padding by zeros ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] Each $\Lambda^d$ is an inverse limit of finite-rank homogeneous
components, multiplication is rankwise, and $\Lambda$ is their direct sum
([[def-stable-graded-ring-of-symmetric-functions]]).

[F3] For $d=|\lambda|-|\mu|\ge0$,
$s_{\lambda/\mu}=\sum_{\nu\vdash d}\langle s_\lambda,s_\mu s_\nu\rangle_Hs_\nu$;
when $d<0$ it is zero ([[def-skew-schur-function-by-hall-adjointness]]).

[F4] The Schur functions form an integral basis in each degree and satisfy
$\langle s_\lambda,s_\rho\rangle_H=\delta_{\lambda\rho}$
([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F5] In the bidegree completion,
$\Omega(X,Y)=\sum_\alpha h_\alpha(X)m_\alpha(Y)=\sum_\rho s_\rho(X)s_\rho(Y)$,
with each sum taken degree by degree
([[thm-cauchy-kernel-has-power-complete-and-schur-expansions]]).

[F6] The Cauchy kernel is
$\Omega(X,Y)=\prod_{x\in X,y\in Y}(1-xy)^{-1}$, interpreted by bidegree
([[def-bidegree-completed-symmetric-function-tensor-product]]).

[F7] For $N\ge\ell(\rho)$,
$s_\rho(y_1,\ldots,y_N)=a_{\rho+\delta_N}(y)/a_{\delta_N}(y)$, where
$\delta_N=(N-1,\ldots,0)$ and
$a_{\rho+\delta_N}=\det(y_i^{\rho_j+N-j})$
([[def-stable-schur-function-by-bialternants]]).

[F8] In $N$ variables, $h_k$ is the sum of all monomials of total degree $k$;
in particular $h_k(t)=t^k$ for $k\ge0$
([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F9] The complete-function determinant convention is $h_0=1$ and
$h_k=0$ for $k<0$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F10] A semistandard skew tableau fills $[\lambda/\mu]$ with positive
integers weakly increasing along rows and strictly increasing down columns;
its weight records the entry multiplicities
([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F11] A horizontal strip has at most one box in each column
([[def-skew-diagram-and-semistandard-skew-tableau]]).

## Proof

**Proof technique:** direct.

1.1 For any fixed partition $\mu$, the defining coefficients in [F3] and Schur orthonormality in [F4] give $s_\mu(Y)s_\nu(Y)=\sum_\lambda\langle s_\lambda,s_\mu s_\nu\rangle_Hs_\lambda(Y)$; substituting this expansion into the left side below and using the Schur Cauchy expansion in [F5] yields the skew reproducing identity, with all rearrangements finite in each degree. [F2, F3, F4, F5, algebra]

$$\sum_\lambda s_{\lambda/\mu}(X)s_\lambda(Y)=s_\mu(Y)\Omega(X,Y).$$

2.1 Choose $N\ge\max(|\lambda|,\ell(\mu))$ and multiply the rank-$N$ specialization of step 1.1 by $a_{\delta_N}(Y)$. Only partitions $\rho\vdash|\lambda|$ contribute to the coefficient of $y^{\lambda+\delta_N}$, and each has length at most $N$; since $\lambda+\delta_N$ is strictly decreasing, that monomial occurs in $a_{\rho+\delta_N}$ only for $\rho=\lambda$, with coefficient one. Thus the left coefficient is $s_{\lambda/\mu}$. On the right, expand $s_\mu(Y)a_{\delta_N}(Y)=a_{\mu+\delta_N}(Y)$ and the finite product kernel in [F6] using [F8]. Coefficient extraction gives the determinant below, with negative subscripts omitted by [F9]. Appending a zero part to both partitions changes its matrix to $\begin{pmatrix}A&v\\0&1\end{pmatrix}$, so the determinant is unchanged; therefore the formula holds for every allowed size $r$. [F2, F5, F6, F7, F8, F9, step 1.1, algebra]

$$a_{\mu+\delta_N}(Y)=\sum_{\sigma\in S_N}\operatorname{sgn}(\sigma)\prod_{i=1}^N y_i^{\mu_{\sigma(i)}+N-\sigma(i)},\qquad \Omega(X,Y)=\sum_{a_1,\ldots,a_N\ge0}\Bigl(\prod_{i=1}^N h_{a_i}(X)\Bigr)y_1^{a_1}\cdots y_N^{a_N}.$$

$$[y^{\lambda+\delta_N}]\bigl(a_{\mu+\delta_N}(Y)\Omega(X,Y)\bigr)=\sum_{\sigma\in S_N}\operatorname{sgn}(\sigma)\prod_{i=1}^N h_{\lambda_i-\mu_{\sigma(i)}-i+\sigma(i)}(X)=\det\bigl(h_{\lambda_i-\mu_j-i+j}\bigr)_{1\le i,j\le N}.$$

2.2 For disjoint alphabets $X,Y,Z$, apply step 1.1 to $X\sqcup Y$ and use the product factorization in [F6]; applying step 1.1 separately to $X$ and $Y$ gives the second equality. Comparing coefficients in the Schur basis [F4] proves the finite-degree splitting identity. [F2, F4, F6, step 1.1, algebra]

$$\sum_\lambda s_{\lambda/\mu}(X\sqcup Y)s_\lambda(Z)=s_\mu(Z)\Omega(X,Z)\Omega(Y,Z)=\sum_{\lambda,\nu}s_{\lambda/\nu}(X)s_{\nu/\mu}(Y)s_\lambda(Z).$$

$$s_{\lambda/\mu}(X\sqcup Y)=\sum_\nu s_{\lambda/\nu}(X)s_{\nu/\mu}(Y).$$

3.1 If $\mu\not\subseteq\lambda$, choose $q$ with $\mu_q>\lambda_q$ after padding both partitions to the determinant size $r$. For every $i\ge q$ and $j\le q$, $\lambda_i-\mu_j-i+j\le\lambda_q-\mu_q<0$, so [F9] makes the bottom-left block of the determinant zero, with $(r-q+1)+q=r+1$ rows-plus-columns. Every determinant permutation would have to assign those $r-q+1$ bottom rows to only $r-q$ columns, which is impossible; hence the determinant is zero, and step 2.1 gives $s_{\lambda/\mu}=0$. [F1, F9, step 2.1, algebra]

4.1 For one variable $t$, specialize the determinant from step 2.1 and use [F8]–[F9]. If $\mu\subseteq\lambda$, put $a_i=\lambda_i-i$ and $b_j=\mu_j-j$; after factoring powers of $t$ from rows and columns the determinant is $t^{|\lambda|-|\mu|}\det(C)$, where $C_{ij}=1$ if $a_i\ge b_j$ and $0$ otherwise. The sequences $a_i,b_j$ strictly decrease, so each row of $C$ is a suffix of ones with a nondecreasing threshold; its determinant is $1$ exactly when the thresholds are $1,2,\ldots,r$, and otherwise a row is zero or two rows coincide. The threshold condition is $\lambda_i\ge\mu_i$ and $\lambda_i\le\mu_{i-1}$ for $i>1$, equivalently $\lambda_i\ge\mu_i\ge\lambda_{i+1}$ after reindexing and padding. This says $\lambda/\mu$ has at most one box in each column: a violation puts boxes in two adjacent rows of the same column, and any two skew boxes in one column force such a violation. Thus the determinant is nonzero exactly for a horizontal strip by [F10]–[F11], and its value is $t^{|\lambda|-|\mu|}$. Noncontainment was handled in step 3.1. [F1, F8, F9, F10, F11, step 2.1, step 3.1, algebra]

$$s_{\lambda/\mu}(t)=\begin{cases}t^{|\lambda|-|\mu|},&\lambda/\mu\text{ is a horizontal strip},\\0,&\text{otherwise.}\end{cases}$$

5.1 Iterating the splitting identity of step 2.2 across $x_1,\ldots,x_N$ expresses the rank-$N$ specialization as a sum over chains $\mu=\nu^{(0)}\subseteq\nu^{(1)}\subseteq\cdots\subseteq\nu^{(N)}=\lambda$ of products $\prod_{i=1}^N s_{\nu^{(i)}/\nu^{(i-1)}}(x_i)$. By step 4.1 each nonzero factor corresponds to a horizontal strip. Filling that strip with $i$ gives a semistandard tableau: nested partition shapes make rows weakly increasing, and the horizontal-strip condition makes columns strictly increasing. Conversely, in any semistandard skew tableau the cells with entries at most $i$ form a partition shape $\nu^{(i)}$, and the cells labeled $i$ form a horizontal strip, so this is a bijection. The product is its weight monomial, hence the finite-rank identity holds; setting an added variable to zero removes exactly the tableaux that use it, so these identities give the stable tableau expansion. [F2, F10, F11, step 2.2, step 4.1, algebra]

$$s_{\lambda/\mu}(x_1,\ldots,x_N)=\sum_T x^{\operatorname{wt}(T)}.$$

6.1 When $\lambda=\mu$, the determinant is upper triangular with diagonal $h_0=1$, and the empty skew diagram has its unique empty tableau of weight zero and monomial $1$. For the one-box shape $(1)/\varnothing$, the determinant and the tableaux both give $h_1=\sum_i x_i$. If $|\lambda|<|\mu|$, [F3] defines the skew function to be zero; other noncontainment gives zero by step 3.1. Padding proves every minimum and larger determinant size; finite partition chains and fillings use no choice. The assertion is by cases, not an iff statement. [F1, F2, F3, F8, F9, F10, step 3.1, step 4.1, step 5.1, algebra] ∎
