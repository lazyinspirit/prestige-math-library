---
id: prop-omega-conjugates-schur-functions
kind: proposition
title: The omega involution conjugates Schur functions
status: draft
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - prop-elementary-and-complete-generating-series-identity
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2, equations (2.6)–(2.7), (2.10), (2.10′), and (2.13), printed pp. 21–24; §3, equation (3.8), printed pp. 42–43
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.5, printed pp. 180–181
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

Let $\omega:\Lambda\to\Lambda$ be the graded $\mathbb Z$-algebra endomorphism
determined by $\omega(e_r)=h_r$ for every $r\ge1$. Then $\omega$ is an
involution and
$$\omega(h_r)=e_r,\qquad \omega(p_r)=(-1)^{r-1}p_r\text{ in }\Lambda_{\mathbb Q}\quad(r\ge1),\qquad \omega(s_\lambda)=s_{\lambda'}\quad\text{for every partition }\lambda.$$

## Facts & Assumptions

**Given:** The stable graded ring, the free stable elementary and complete generators, the finite reciprocal-series identity, the stable power sums, partition conjugation, and both Jacobi–Trudi formulas.

[F1] The degreewise inverse-limit ring $\Lambda=\bigoplus_{d\ge0}\Lambda^d$ has coordinatewise multiplication and finite degree support ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] The stable elements satisfy $\Lambda=\mathbb Z[e_1,e_2,\ldots]$, and the $e_r$ are algebraically independent generators; the $h_r$ are also stable homogeneous elements ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F3] In each finite rank, $E(-t)H(t)=1$, where $E(-t)=\prod_i(1-x_it)$ and $H(t)=\sum_{k\ge0}h_kt^k$ ([[prop-elementary-and-complete-generating-series-identity]]).

[F4] For $r\ge1$, $p_r\in\Lambda^r$ is the compatible sequence of finite power sums $p_r(x_1,\ldots,x_N)=\sum_{i=1}^N x_i^r$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]).

[F5] Partition conjugation is an involution: $\lambda''=\lambda$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F6] For every partition $\mu$, $s_\mu=\det(h_{\mu_i-i+j})=\det(e_{\mu'_i-i+j})$ for all allowed determinant sizes, with zero padding and negative-index terms zero ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

## Proof

**Proof technique:** direct.

1.1 By [F3], each finite-rank coefficient of $E(-t)H(t)-1$ is zero. By [F1] and [F2], these are projections of stable coefficients, so equality of every projection gives $E(-t)H(t)=1$ in $\Lambda\llbracket t\rrbracket$. For finite rank $N\ge0$, write $H_N(t)=\sum_{k\ge0}h_k(x_1,\ldots,x_N)t^k$ and $p_r^{(N)}=\sum_{i=1}^N x_i^r$. The finite identity [F3] gives $H_N(t)=\prod_{i=1}^N(1-x_it)^{-1}$. Differentiating this finite product and expanding each geometric series gives $tH_N'(t)/H_N(t)=\sum_{i=1}^N x_it/(1-x_it)=\sum_{r\ge1}p_r^{(N)}t^r$. Each coefficient is stable by [F1], [F2], and [F4], so equality of all rank projections gives $tH'(t)/H(t)=\sum_{r\ge1}p_rt^r$ in $\Lambda_{\mathbb Q}\llbracket t\rrbracket$, where $H(t)=\sum_{k\ge0}h_kt^k$ and $H(t)$ is invertible because its constant term is $1$. [F1, F2, F3, F4, algebra]

1.2 Since $\Lambda=\mathbb Z[e_1,e_2,\ldots]$ freely by [F2], replacing each polynomial generator $e_r$ by the stable element $h_r\in\Lambda^r$ defines a unique unital graded $\mathbb Z$-algebra endomorphism $\omega$ of $\Lambda$. [F1, F2]

2.1 The coefficient of $t^n$ in the stable identity of step 1.1 gives $\sum_{i=0}^n(-1)^ie_ih_{n-i}=0$ for each $n\ge1$. Applying $\omega$ and using $\omega(e_i)=h_i$ gives $\omega(h_n)+\sum_{i=1}^n(-1)^ih_i\omega(h_{n-i})=0$. Reversing the index in the original recurrence also gives $e_n+\sum_{i=1}^n(-1)^ih_ie_{n-i}=0$. Starting with $\omega(h_0)=1=e_0$, induction on $n$ makes these last two sums identical after the leading term, so $\omega(h_n)=e_n$. Therefore $\omega^2(e_n)=e_n$ for every free generator; hence $\omega^2$ is the identity on $\Lambda$ and $\omega$ is a ring automorphism. It sends $0$ to $0$ and $1$ to $1$. [step 1.1, step 1.2]

3.1 For a partition $\lambda$, apply $\omega$ to the $h$ Jacobi–Trudi determinant in [F6]; for nonnegative indices step 2.1 gives $\omega(h_k)=e_k$, and for negative indices both are zero by [F6] and $\omega(0)=0$. Multiplicativity and additivity therefore give $\omega(s_\lambda)=\det(e_{\lambda_i-i+j})$. Apply the dual formula in [F6] to $\lambda'$ with determinant size $r=\ell(\lambda)$, which is allowed because $\ell((\lambda')')=\ell(\lambda)$ and [F5] identifies $(\lambda')'=\lambda$. Thus this determinant is $s_{\lambda'}$, including at the minimal allowed size. The empty case gives $\omega(1)=1=s_\varnothing$. For $\lambda=(1)$ the size-one determinant gives $\omega(s_{(1)})=e_1=h_1=s_{(1)}$, where $e_1=h_1$ is the coefficient of $t$ in the stable identity of step 1.1. [F5, F6, step 1.1, step 1.2, step 2.1, algebra]

4.1 Extend $\omega$ to $\Lambda_{\mathbb Q}$ and apply it coefficientwise to the logarithmic-derivative identity of step 1.1. By step 2.1, $\omega(H(t))=E(t):=\sum_{k\ge0}e_kt^k$, and a coefficientwise ring map commutes with formal differentiation and inverses of series with constant term $1$; hence $tE'(t)/E(t)=\sum_{r\ge1}\omega(p_r)t^r$. At rank $N$, replacing $t$ by $-t$ in [F3] gives $E_N(t)=\prod_{i=1}^N(1+x_it)$, so $tE_N'(t)/E_N(t)=\sum_i x_it/(1+x_it)=\sum_{r\ge1}(-1)^{r-1}p_r^{(N)}t^r$. Each coefficient is stable by [F1], [F2], and [F4]; therefore $tE'(t)/E(t)=\sum_{r\ge1}(-1)^{r-1}p_rt^r$ in $\Lambda_{\mathbb Q}\llbracket t\rrbracket$. Comparing coefficients proves $\omega(p_r)=(-1)^{r-1}p_r$ for every $r\ge1$, including the endpoint $r=1$. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎
