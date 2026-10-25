---
id: ex-degree-three-stable-symmetric-function-bases
kind: example
title: The five standard symmetric-function bases in degree three
status: published
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - def-elementary-symmetric-polynomials
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
  - def-monomial-symmetric-polynomials
  - thm-monomial-symmetric-polynomials-form-a-basis
  - thm-monomial-symmetric-functions-form-the-integral-stable-basis
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - thm-schur-functions-form-an-orthonormal-integral-basis
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2, equations (2.1)–(2.8) and (2.10)–(2.14′), printed pp. 17–25; §3, equation (3.4), printed p. 41
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §§9.4–9.6, pp. 179–183, and §9.8, pp. 187–190
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Example

Write every $m$, $e$, $h$, $p$ and $s$ element in $\Lambda^3$ in the ordered
monomial basis $(m_3,m_{21},m_{111})$, with their transition matrices and
integral versus rational behavior.

## Facts & Assumptions

**Given:** The degreewise stable ring, partition indexing, the finite rank-three orbit-sum conventions, and the stable integral and rational basis results.

[F1] The degree-$d$ stable component is the inverse limit of the finite-rank degree-$d$ components under specialization of added variables to zero ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] The partitions of $3$ are the finite weakly decreasing positive sequences of sum $3$; the empty partition has degree zero ([[def-partition-young-diagram-and-conjugate-partition]]).

[F3] In finite rank, $e_k$ is the sum of products indexed by $k$-element subsets of variables ([[def-elementary-symmetric-polynomials]]).

[F4] In finite rank, $p_k$ is the sum of the $k$th powers of the variables ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F5] In finite rank, $h_k$ is the sum of all monomials of total degree $k$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F6] The finite monomial symmetric polynomial is the sum of the distinct monomials whose exponent tuples lie in the variable-permutation orbit of its partition ([[def-monomial-symmetric-polynomials]]).

[F7] In rank $N$, the $m_\lambda$ indexed by partitions of length at most $N$ form a $\mathbb Z$-basis of the finite symmetric polynomials ([[thm-monomial-symmetric-polynomials-form-a-basis]]).

[F8] In each degree $d$, the stable orbit sums $m_\lambda$ indexed by $\lambda\vdash d$ form a $\mathbb Z$-basis of $\Lambda^d$ and project to their finite orbit sums ([[thm-monomial-symmetric-functions-form-the-integral-stable-basis]]).

[F9] In each degree, both $\{e_\lambda:\lambda\vdash d\}$ and $\{h_\lambda:\lambda\vdash d\}$ are $\mathbb Z$-bases of $\Lambda^d$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F10] For every integer $d\ge0$, the $p_\lambda$ indexed by $\lambda\vdash d$ form a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

[F11] The Jacobi–Trudi and dual Jacobi–Trudi determinants express $s_\lambda$ using the $h$ and $e$ functions, with zero padding and the conventions $h_0=e_0=1$ and $h_k=e_k=0$ for $k<0$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F12] For every $d$, the stable Schur functions indexed by partitions of $d$ form a $\mathbb Z$-basis of $\Lambda^d$ ([[thm-schur-functions-form-an-orthonormal-integral-basis]]).

## Verification

**Proof technique:** direct.

1.1 The partitions of $3$ are $(3),(2,1),(1,1,1)$, all of length at most $3$. For every $N\ge3$, [F7] gives the rank-$N$ finite orbit-sum basis and [F8] identifies its labels with the stable monomial basis; the specialization maps preserve each labelled orbit sum. Thus projection to rank $3$ is an isomorphism in degree $3$, so the finite calculations below determine the stable coordinates. [F1, F2, F7, F8]

2.1 In three variables, the orbit sums are $m_3=\sum_i x_i^3$, $m_{21}=\sum_{i\ne j}x_i^2x_j$, and $m_{111}=x_1x_2x_3$. Each monomial of type $(3)$ or $(2,1)$ occurs once in $m_2m_1$; $m_{11}m_1$ counts each type-$(2,1)$ monomial once and the all-distinct monomial three times; $m_1^3$ counts the patterns $(3),(2,1),(1,1,1)$ with multiplicities $1,3,6$. [F6, step 1.1, algebra]

$$m_2m_1=m_3+m_{21},\qquad m_{11}m_1=m_{21}+3m_{111},\qquad m_1^3=m_3+3m_{21}+6m_{111}.$$

3.1 The finite subset definition gives $e_1=m_1$, $e_2=m_{11}$, and $e_3=m_{111}$. Multiplication using step 2.1 then gives the three degree-three elementary products. [F3, F9, step 2.1, algebra]

$$e_3=m_{111},\qquad e_{21}=e_2e_1=m_{21}+3m_{111},\qquad e_{111}=e_1^3=m_3+3m_{21}+6m_{111}.$$

3.2 The complete functions list all degree-$k$ monomials, while the power sums are the sums of pure $k$th powers. Thus $h_1=m_1$, $h_2=m_2+m_{11}$, and $h_3=m_3+m_{21}+m_{111}$; multiplying and using the orbit counts yields the remaining complete and power-sum products. [F4, F5, F9, step 2.1, algebra]

$$h_3=m_3+m_{21}+m_{111},\qquad h_{21}=h_2h_1=m_3+2m_{21}+3m_{111},\qquad h_{111}=h_1^3=m_3+3m_{21}+6m_{111}.$$

$$p_3=m_3,\qquad p_{21}=p_2p_1=m_3+m_{21},\qquad p_{111}=p_1^3=m_3+3m_{21}+6m_{111}.$$

4.1 Jacobi–Trudi at sizes one and two gives $s_3=h_3$ and $s_{21}=h_2h_1-h_3$; dual Jacobi–Trudi at size one gives $s_{111}=e_3$. Substitution from steps 3.1 and 3.2 yields the three monomial coordinates. [F11, step 3.1, step 3.2, algebra]

$$s_3=m_3+m_{21}+m_{111},\qquad s_{21}=m_{21}+2m_{111},\qquad s_{111}=m_{111}.$$

5.1 With rows labelled $(3),(2,1),(1,1,1)$ and columns ordered $(m_3,m_{21},m_{111})$, the rows of each matrix are the displayed coordinates from steps 3.1, 3.2, and 4.1. Their determinants show that the $m,e,h,s$ matrices are unimodular, while the $p$ matrix has nonzero determinant $6$. The $p$ rows therefore form a rational basis; an explicit nonintegral coordinate for $h_3$ also shows failure of integral spanning. [F8, F9, F10, F12, step 3.1, step 3.2, step 4.1, algebra]

$$M^{(m)}=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},\quad E=\begin{pmatrix}0&0&1\\0&1&3\\1&3&6\end{pmatrix},\quad H=\begin{pmatrix}1&1&1\\1&2&3\\1&3&6\end{pmatrix}.$$

$$P=\begin{pmatrix}1&0&0\\1&1&0\\1&3&6\end{pmatrix},\quad S=\begin{pmatrix}1&1&1\\0&1&2\\0&0&1\end{pmatrix},\quad (\det M^{(m)},\det E,\det H,\det P,\det S)=(1,-1,1,6,1).$$

$$h_3=\frac13p_3+\frac12p_{21}+\frac16p_{111}.$$

6.1 The degree-three claim has no empty-partition row because $\varnothing$ has degree zero; zero has the all-zero coordinate vector. The one-part label $(3)$ is the first row of every matrix, and repeated parts occur in the $(1,1,1)$ row. Degree $3$ and rank $3$ are the claimed degree endpoint and threshold rank. All orbit and product counts use finite sets, so no choice is made; no iff assertion occurs. [F1, F2, F6, F7, step 1.1, step 5.1, algebra] ∎
