---
id: thm-jacobi-trudi-and-dual-jacobi-trudi-identities
kind: theorem
title: Jacobi–Trudi and dual Jacobi–Trudi identities
status: draft
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - def-stable-schur-function-by-bialternants
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - prop-elementary-and-complete-generating-series-identity
  - def-elementary-symmetric-polynomials
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §§2–3, equations (2.9′), (3.4)–(3.7), printed pp. 22–23 and 41–42
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.8, printed pp. 187–190
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

For every partition $\lambda$, let $s_\lambda\in\Lambda$ be the stable Schur
function defined by bialternants
([[def-stable-schur-function-by-bialternants]]). For any integers
$r\ge\ell(\lambda)$ and $c\ge\ell(\lambda')$, pad $\lambda$ and $\lambda'$
with zero parts to lengths $r$ and $c$, respectively. Then
$$s_\lambda=\det\bigl(h_{\lambda_i-i+j}\bigr)_{1\le i,j\le r}=\det\bigl(e_{\lambda'_i-i+j}\bigr)_{1\le i,j\le c},$$
where $h_k,e_k\in\Lambda$ are the stable complete and elementary functions
([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]],
[[def-elementary-symmetric-polynomials]],
[[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]). In these
determinants use $h_0=e_0=1$, set $h_k=e_k=0$ for $k<0$, and take the empty
determinant to be $1$.

## Facts & Assumptions

**Given:** The stable graded ring, partition conjugation, the bialternant definition of $s_\lambda$, stable $e_r,h_r$, and their finite-rank conventions.

[F1] Each $\Lambda^d$ is the inverse limit of the degree-$d$ finite symmetric-polynomial parts, and $\Lambda=\bigoplus_{d\ge0}\Lambda^d$ has coordinatewise multiplication ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] The conjugate partition has parts $\lambda'_j=\#\{i:\lambda_i\ge j\}$, its length is $\lambda_1$, and $\varnothing'=\varnothing$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] For $N\ge\ell(\lambda)$, the finite Schur polynomial is the bialternant quotient $a_{\lambda+\delta_N}/a_{\delta_N}$, and its compatible rank sequence defines $s_\lambda\in\Lambda^{|\lambda|}$ ([[def-stable-schur-function-by-bialternants]]).

[F4] The finite sequences $e_r,h_r$ specialize compatibly to stable elements, have $e_0=h_0=1$, and the $h_r$ are algebraically independent generators of $\Lambda$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F5] In rank $N$, $e_q$ is the sum of squarefree monomials indexed by the $q$-element subsets, with $e_0=1$ and $e_q=0$ for $q>N$ ([[def-elementary-symmetric-polynomials]]).

[F6] In rank $N$, $h_k$ is the sum of all monomials of total degree $k$, with $h_0=1$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F7] In every finite rank, $E(-t)H(t)=1$, with $E(-t)=\prod_{i=1}^N(1-x_it)$ and $H(t)=\sum_{k\ge0}h_kt^k$ ([[prop-elementary-and-complete-generating-series-identity]]).

## Proof

**Proof technique:** direct.

1.1 For each $n\ge1$, take the coefficient of $t^n$ in the finite identity [F7] at every rank $N$. By [F4] and [F5], these coefficients are the rank projections of the stable products $\sum_{i=0}^n(-1)^ie_ih_{n-i}$. Since all projections vanish, the inverse-limit element is zero by [F1]; the constant coefficient is $e_0h_0=1$. Hence $E(-t)H(t)=1$ coefficientwise in $\Lambda\llbracket t\rrbracket$. [F1, F4, F5, F7]

1.2 Fix a finite rank $N\ge1$ and let $e_q^{(k)}$ be the elementary polynomial in the variables other than $x_k$. By [F5] and [F7], $H_N(t)\sum_{q=0}^{N-1}(-1)^qe_q^{(k)}t^q=(1-x_kt)^{-1}$. For $\alpha\in\mathbb N^N$, define $A_\alpha=(x_k^{\alpha_i})_{i,k}$, $M_{j,k}=(-1)^{N-j}e_{N-j}^{(k)}$, and $(H_\alpha)_{i,j}=h_{\alpha_i-N+j}$. Taking the coefficient of $t^{\alpha_i}$ gives $A_\alpha=H_\alpha M$. [F5, F6, F7, algebra]

2.1 If $\lambda=\varnothing$, then $s_\lambda=1$ by [F3], and either determinant is upper unitriangular or empty, hence equals $1$. Otherwise fix any finite rank $N\ge r\ge\ell(\lambda)\ge1$. Put $\delta_N=(N-1,\ldots,0)$ and $\alpha_i=\lambda_i+N-i$. For $\alpha=\delta_N$, $H_{\delta_N}$ is upper triangular with diagonal $1$, so $\det M=\det A_{\delta_N}=a_{\delta_N}\ne0$. For $\alpha=\lambda+\delta_N$, $\det A_\alpha$ is the bialternant numerator and $H_\alpha=(h_{\lambda_i-i+j})_{i,j}$. Taking determinants in $A_\alpha=H_\alpha M$ and using $\det M=\det A_{\delta_N}$ gives $\det A_\alpha/\det A_{\delta_N}=\det H_\alpha$; by [F3] this is the rank-$N$ Schur polynomial. Appending a zero part to $\lambda$ changes the determinant to $\begin{pmatrix}B&v\\0&1\end{pmatrix}$, so its value is independent of determinant size; hence for every rank $N\ge r$ the size-$r$ determinant equals the rank-$N$ Schur polynomial. Compatibility gives equality in $\Lambda$. [F1, F2, F3, step 1.2]

2.2 For the chosen sizes $r,c$, index matrices by $0,\ldots,r+c-1$ and set $U_{a,b}=h_{b-a}$ and $V_{a,b}=(-1)^{b-a}e_{b-a}$ when $b\ge a$, with both entries zero when $b<a$. Step 1.1 gives $UV=I$ coefficientwise; both matrices are upper unitriangular, so $V=U^{-1}$ and $\det U=1$. [F1, F4, step 1.1]

3.1 If $\lambda=\varnothing$, each determinant is upper unitriangular, or empty, and equals $1$. Otherwise pad $\lambda$ and $\lambda'$ with zero parts to the chosen sizes and set $I=\{\lambda_i+r-i:1\le i\le r\}$ and $J=\{r-i:1\le i\le r\}$. In increasing order, the minor $U_{J,I}$ is the transpose of $(h_{\lambda_i-i+j})$ with both orders reversed, so $\det U_{J,I}=\det(h_{\lambda_i-i+j})$. Its complements are $J^c=\{r+j-1:1\le j\le c\}$ and $I^c=\{r-1+j-\lambda'_j:1\le j\le c\}$. The listed $I^c$ indices are strictly increasing and lie in $\{0,\ldots,r+c-1\}$. None equals $\lambda_i+r-i$, since equality would give $\lambda_i+\lambda'_j=i+j-1$: if $j\le\lambda_i$ the left side is at least $i+j$, and if $j>\lambda_i$ it is at most $i+j-2$. The two sets have $r+c$ distinct indices in total and are therefore complementary. At rank $N\ge\ell(\lambda)$, the bialternant numerator and denominator are nonzero: the strictly decreasing exponents give distinct monomials in the numerator determinant, and the Vandermonde denominator is nonzero. Thus $s_\lambda\ne0$; by [F4], $\Lambda$ is a domain. Over $K=\operatorname{Frac}(\Lambda)$, $A=U_{J,I}$ is invertible by step 2.1. Reorder rows as $J,J^c$ and columns as $I,I^c$, giving $\widetilde U=\begin{pmatrix}A&B\\C&D\end{pmatrix}$. Block elimination gives $\det\widetilde U=\det A\det(D-CA^{-1}B)$, while the lower-right block of $\widetilde U^{-1}$ is $(D-CA^{-1}B)^{-1}$. Thus $\det A=\det\widetilde U\det(V_{I^c,J^c})$. Moving an increasing index set $S$ of size $r$ to the front has sign $(-1)^{\sum S-r(r-1)/2}$; the row and column reorderings therefore give $\det\widetilde U=(-1)^{\sum I+\sum J}\det U$. Since $\sum I+\sum J=|\lambda|+r(r-1)$ and $\det U=1$, this sign is $(-1)^{|\lambda|}$. The complementary minor has entries $V_{r-1+i-\lambda'_i,r+j-1}=(-1)^{\lambda'_i-i+j}e_{\lambda'_i-i+j}$; a negative subscript gives zero by the stated convention. Factoring row and column signs contributes $(-1)^{\sum_i\lambda'_i-\sum_i i+\sum_j j}=(-1)^{|\lambda|}$, which cancels the permutation sign. Therefore $\det(h_{\lambda_i-i+j})=\det(e_{\lambda'_i-i+j})$. For $\lambda=(1)$ and $r=c=1$, these are $h_1$ and $e_1$, each the sum of the variables by [F5] and [F6]. [F1, F2, F3, F4, step 2.1, step 2.2, algebra] ∎
