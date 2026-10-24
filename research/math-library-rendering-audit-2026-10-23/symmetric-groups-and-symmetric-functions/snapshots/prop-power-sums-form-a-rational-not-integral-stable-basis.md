---
id: prop-power-sums-form-a-rational-not-integral-stable-basis
kind: proposition
title: Power sums form a rational but not integral stable basis
status: published
origin: pipeline
deps:
  - def-stable-graded-ring-of-symmetric-functions
  - def-partition-young-diagram-and-conjugate-partition
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
  - def-power-sum-and-complete-homogeneous-symmetric-polynomials
justified_by: []
landmark: false
proof_strategy: triangularity
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §2, equations (2.10)–(2.12) and (2.14′), printed pp. 23–25
      url: https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf
    - title: Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics, §9.6, printed pp. 181–183
      url: https://jeremymartinmath.github.io/CombinatoricsNotes.pdf
---

## Statement

For $r\ge1$, let $p_r\in\Lambda^r$ be the compatible sequence of finite
power-sum polynomials $p_r(x_1,\ldots,x_N)=\sum_{i=1}^N x_i^r$
([[def-stable-graded-ring-of-symmetric-functions]],
[[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]). For a
partition $\lambda$, set $p_\lambda:=\prod_i p_{\lambda_i}$
([[def-partition-young-diagram-and-conjugate-partition]]). Write
$\Lambda_{\mathbb Q}:=\mathbb Q\otimes_{\mathbb Z}\Lambda$ and
$\Lambda_{\mathbb Q}^d:=\mathbb Q\otimes_{\mathbb Z}\Lambda^d$. Then
$$\Lambda_{\mathbb Q}=\mathbb Q[p_1,p_2,\ldots],$$
and for every $d\ge0$, the family $\{p_\lambda:\lambda\vdash d\}$ is a
$\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d$. These families are not in
general $\mathbb Z$-bases of $\Lambda^d$: in degree two,
$h_2=\tfrac12(p_{(1,1)}+p_{(2)})$ has nonintegral coordinates in the power-sum
basis.

## Facts & Assumptions

**Given:** The degreewise stable ring, the finite power-sum and complete-homogeneous conventions, the stable complete basis, and the partition indexing convention.

[F1] $\Lambda^d$ is the inverse limit of the degree-$d$ finite symmetric-polynomial parts, and $\Lambda=\bigoplus_{d\ge0}\Lambda^d$ is a graded ring with coordinatewise multiplication and finite degree support ([[def-stable-graded-ring-of-symmetric-functions]]).

[F2] In rank $N$, $p_r=\sum_{i=1}^N x_i^r$ for $r\ge1$, and $h_k$ is the sum of all monomials of total degree $k$, with $h_0=1$ ([[def-power-sum-and-complete-homogeneous-symmetric-polynomials]]).

[F3] The stable $h_r$ freely generate $\Lambda$ over $\mathbb Z$, are algebraically independent, and $\{h_\lambda:\lambda\vdash d\}$ is an integral basis of $\Lambda^d$ ([[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F4] A partition of $d$ is a finite weakly decreasing sequence of positive integers summing to $d$, and for $d=0$ the only partition is $\varnothing$ ([[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** triangularity.

1.1 For each $r\ge1$, setting a newly added variable to zero sends the finite rank-$N$ power sum $\sum_{i=1}^N x_i^r$ to the rank-$(N-1)$ power sum. Hence these are compatible sequences $p_r\in\Lambda^r$ by [F1] and [F2]; the $h_r$ are already the stable homogeneous elements supplied by [F3]. [F1, F2, F3]

1.2 In rank $N$, multiplying the geometric series $\sum_{a_i\ge0}x_i^{a_i}t^{a_i}$ for $1\le i\le N$ shows from [F2] that $H_N(t):=\sum_{k\ge0}h_k(x_1,\ldots,x_N)t^k=\prod_{i=1}^N(1-x_it)^{-1}$. Differentiating this finite product gives $H_N'(t)/H_N(t)=\sum_{i=1}^N x_i/(1-x_it)=\sum_{r\ge1}p_r(x_1,\ldots,x_N)t^{r-1}$. [F2, algebra]

2.1 Write $H(t):=\sum_{n\ge0}h_nt^n$ in $\Lambda_{\mathbb Q}\llbracket t\rrbracket$. The finite identity of step 1.2 holds at every rank, and each coefficient of $H'(t)$, $H(t)$, and $\sum_{r\ge1}p_rt^{r-1}$ is a stable homogeneous sequence by [F1] and step 1.1. Equality of every rank projection therefore gives $H'(t)=H(t)\sum_{r\ge1}p_rt^{r-1}$. Comparing coefficients of $t^{n-1}$ yields the Newton recurrence $n h_n=\sum_{r=1}^n p_rh_{n-r}$ for every $n\ge1$. [F1, step 1.1, step 1.2]

3.1 Since $h_0=1$, step 2.1 can be solved in either direction as $p_n=n h_n-\sum_{r=1}^{n-1}p_rh_{n-r}$ and $h_n=\frac1n\bigl(p_n+\sum_{r=1}^{n-1}p_rh_{n-r}\bigr)$. Induction shows that each $p_n$ is a polynomial in $h_1,\ldots,h_n$ with leading term $n h_n$, and each $h_n$ is a polynomial over $\mathbb Q$ in $p_1,\ldots,p_n$ with leading term $p_n/n$. Because these equations solve the same recurrence for its last unknown and each $n$ is invertible in $\mathbb Q$, induction verifies that the two substitutions are inverse through every finite index. [F3, step 2.1]

4.1 For each finite $m$, the mutually inverse triangular substitutions of step 3.1 identify $\mathbb Q[h_1,\ldots,h_m]$ with $\mathbb Q[p_1,\ldots,p_m]$. By [F3], the $h_r$ are algebraically independent over $\mathbb Z$ and remain so over $\mathbb Q$ by clearing denominators; hence the $p_r$ are algebraically independent and generate $\Lambda_{\mathbb Q}$ after scalar extension, using the graded direct sum [F1]. A degree-$d$ monomial in variables of weights $\deg p_r=r$ is exactly $p_\lambda$ for a partition $\lambda\vdash d$ by [F4]; these monomials therefore form a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d$, including $p_\varnothing=1$ at $d=0$. [F1, F3, F4, step 3.1]

5.1 At $n=1$, step 2.1 gives $h_1=p_1$; at $n=2$ it gives $2h_2=p_1h_1+p_2=p_1^2+p_2$, hence $h_2=\tfrac12(p_{(1,1)}+p_{(2)})$. The element $h_2$ belongs to the integral stable ring by [F2] and [F3], while step 4.1 makes $p_{(1,1)}$ and $p_{(2)}$ a $\mathbb Q$-basis of degree two. Uniqueness of those rational coordinates and their nonintegral values show that $h_2$ is not in their $\mathbb Z$-span, so the power sums do not form an integral basis in degree two. [F1, F2, F3, step 2.1, step 4.1] ∎
