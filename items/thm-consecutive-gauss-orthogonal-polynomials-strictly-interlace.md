---
id: thm-consecutive-gauss-orthogonal-polynomials-strictly-interlace
kind: theorem
title: "Consecutive Gaussian orthogonal polynomials and Jacobi truncations strictly interlace"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - lem-gauss-monic-three-term-recurrence
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - thm-jacobi-matrix-spectrum-equals-gauss-nodes
  - cor-continuous-image-of-an-interval-is-an-interval
  - thm-algebra-of-continuous-functions
  - thm-reals-ordered-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
dependency_level: 6
---

## Statement

Let $(a,b,m,r,\mu)$ be Gaussian moment data with $r\ge2m-1$ and monic orthogonal polynomials $p_0,\ldots,p_m$. For every $1\le j<m$, write the roots of $p_j$ as $x_1<\cdots<x_j$ and those of $p_{j+1}$ as $y_1<\cdots<y_{j+1}$. Then
$$a<y_1<x_1<y_2<x_2<\cdots<y_j<x_j<y_{j+1}<b.$$
Equivalently, the spectra of consecutive leading principal Jacobi truncations $J_j,J_{j+1}$ strictly interlace. If $m=1$, there is no pair of positive consecutive degrees and the assertion is vacuous.

## Facts & Assumptions

**Given:** The moment data and its monic orthogonal family.

[F1] [[def-gauss-moment-data]] and [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]] permit the same measure at each smaller quadrature order $k\le m$, retaining moments through $2k-1$; uniqueness identifies each shorter orthogonal family with the prefix $p_0,\ldots,p_k$.

[F2] [[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]] gives $k$ simple roots in $(a,b)$ and the monic factorization of $p_k$ for each $1\le k\le m$.

[F3] [[lem-gauss-monic-three-term-recurrence]] gives $p_{j+1}(X)=(X-\alpha_j)p_j(X)-\beta_jp_{j-1}(X)$ with $\beta_j>0$ for $1\le j<m$, and $p_0=1$.

[F4] [[cor-continuous-image-of-an-interval-is-an-interval]] and [[thm-algebra-of-continuous-functions]] imply that a real polynomial taking opposite signs at two points has a root strictly between them.

[F5] [[thm-reals-ordered-field]] gives the sign rules for the finite products in the monic factorization.

[F6] [[thm-jacobi-matrix-spectrum-equals-gauss-nodes]] identifies the spectrum of $J_k$ with the roots of $p_k$; its coefficients are the same prefix recurrence coefficients.

## Proof

1.1 The reduced-order uses in [F1] are valid: the original support has at least $m+1\ge k+1$ points and the absolute moments through $2k-1$ are among those assumed. By [F2], every $p_k$ has the stated simple roots and monic factorization. If $m=1$, there is no pair to prove. For the remaining case $m\ge2$, take $j=1$; if $x_1$ is the root of $p_1$, [F3] gives $p_2(x_1)=-\beta_1<0$. At both $a$ and $b$, the degree-two monic factorization [F2] gives $p_2(a)>0$ and $p_2(b)>0$. By [F4] there is one root on each side of $x_1$ inside $(a,b)$, proving the first pair when $m\ge2$. [given, F1, F2, F3, F4, F5, algebra]

1.2 For $2\le j<m$, assume the roots of $p_{j-1}$ strictly interlace those $x_1<\cdots<x_j$ of $p_j$. At $x_i$, exactly $j-i$ roots of the monic polynomial $p_{j-1}$ lie to its right and none equals it. Its factorization [F2] therefore makes its sign $(-1)^{j-i}$. By [F3], the sign of $p_{j+1}(x_i)=-\beta_jp_{j-1}(x_i)$ is $(-1)^{j-i+1}$. These signs alternate, so [F4] supplies a root in each $(x_i,x_{i+1})$. Also [F2] gives sign $(-1)^{j+1}$ for $p_{j+1}(a)$ and positive sign for $p_{j+1}(b)$; these are opposite to the signs $(-1)^j$ at $x_1$ and $-1$ at $x_j$. Thus [F4] supplies an additional root in each of $(a,x_1)$ and $(x_j,b)$. [F2, F3, F4, F5, given, algebra]

2.1 These $j+1$ disjoint intervals contain $j+1$ distinct roots, and [F2] says there are exactly that many. They therefore exhaust the roots of $p_{j+1}$ in the required order. Starting with step 1.1, finite induction through step 1.2 proves every pair through $p_m$. By [F6], the same ordered roots are the eigenvalues of the leading principal truncations, since their recurrence coefficients are identical prefixes. This proves the spectral assertion as well; when $m=1$ the quantified pair set is empty. [F1, F2, F6, step 1.1, step 1.2, induction, algebra] ∎
