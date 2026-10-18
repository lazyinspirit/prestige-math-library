---
id: lem-hp-analytic-polynomial-approximation-on-a-triangle
kind: lemma
title: Analytic derivative bounds give exponential polynomial approximation on a triangle
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Yanchen He, Paul Houston, Christoph Schwab, and Thomas P. Wihler, Exponential Convergence of hp-ILGFEM, version 1
      url: https://arxiv.org/pdf/2404.18569
      locator: "§§2.3 and 4.1, PDF pp. 5–11: analytic corner classes and exponential hp approximation context. The polynomial-mask construction below is independent and supplies its local approximation step."
    - title: Shen and Tang, Spectral and High-Order Methods with Applications
      url: https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf
      locator: "Chapter 1, §1.8, printed pp. 61–67: polynomial approximation estimates and the analytic convergence discussion; the multivariate mask proof below is local."
---

## Statement

Let $S$ be the closed reference triangle $\overline T$, where $T=\{x,y>0,x+y<1\}$, or the closed interval $[0,1]$, and let $f:S\to\mathbb R$ be real-valued. Write $\mathbb P_p(S)$ for restrictions of real polynomials of total degree at most $p$ on the triangle and degree at most $p$ on the interval. Say that $f$ is smooth up to $S$ when every partial derivative on the interior has a continuous extension to $S$. Suppose that for some $M>0$ and $A\ge1$,

$$
\|D^\alpha f\|_{L^\infty(S)}\le M A^{|\alpha|}|\alpha|!\qquad\text{for every multi-index }\alpha.
$$

Use $\|g\|_{W^{1,\infty}(S)}:=\|g\|_{L^\infty(S)}+\sum_{i=1}^{\dim S}\|\partial_i g\|_{L^\infty(S)}$. Then constants $C,b>0$, depending only on $A$ and the fixed reference domain, satisfy

$$
\inf_{q\in\mathbb P_p(S)}\|f-q\|_{W^{1,\infty}(S)}\le CM e^{-bp}\qquad(p\ge1).
$$

For the interval branch there is also an endpoint-preserving polynomial $J_pf\in\mathbb P_p([0,1])$ whose derivative is the $L^2$ orthogonal projection of $f'$ onto $\mathbb P_{p-1}$. It satisfies $\|(J_pf)'\|_2\le\|f'\|_2$ and $\|f-J_pf\|_{H^1}\le CM e^{-bp}$ after changing $C,b$ by constants depending only on $A$.

## Facts & Assumptions

**Given:** The fixed reference interval or triangle, the smoothness and factorial derivative bound in the statement, and $p\ge1$.

[F1] Taylor's formula with Lagrange remainder holds along every segment contained in an open convex set. ([[thm-multivariable-taylor-formula-with-lagrange-remainder]])

[F2] Cauchy–Schwarz bounds the integral of a derivative over an interval of length one by its $L^2$ norm. ([[thm-cauchy-schwarz-in-an-inner-product-space]])

[F3] Multi-index order, factorial, monomial powers, and canonical partial derivatives have the conventions in the cited definition. ([[def-ck-and-multi-index-notation-in-several-variables]])

## Proof

1.1 For $0<\tau<1$ and integer $n\ge1$ define $B_{n,\tau}(t)=\sum_{j=\lceil n\tau\rceil}^n\binom njt^j(1-t)^{n-j}$. Then $0\le B\le1$, $\deg B\le n$, and $|B'|\le n$. If $t\le\tau-\delta$ for fixed $\delta>0$, Chernoff's bound follows directly from $1_{j\ge n\tau}\le e^{z(j-n\tau)}$ for $z>0$: $B_{n,\tau}(t)\le e^{-zn\tau}(1-t+te^z)^n.$ For sufficiently small fixed $z$, the exponent per $n$ is negative uniformly because its derivative at $z=0$ is $t-\tau\le-\delta$. Applying the same argument to the complementary lower tail gives exponential smallness of $1-B$ on $t\ge\tau+\delta$. Differentiation telescopes to one binomial atom times $n$; away from the threshold its probability is bounded by the same tail estimate with gap $\delta/2$ for all sufficiently large $n$, and increasing the constant covers the finitely many smaller $n$. Thus $B$ and $1-B$ switch from exponentially small to $1+O(e^{-cn})$ across a strip of fixed width, and their derivatives outside that strip are $O(ne^{-cn})$. [given, algebra]

2.1 Choose $0<\rho<1/(32A)$ and a finite coordinate-grid cover of $S$ by boxes of radius $\rho$ with centers $a_i\in S$, $1\le i\le m$. In each coordinate form a left increasing binomial factor with threshold $a_{i,j}-3\rho/2$ and a right decreasing factor with threshold $a_{i,j}+3\rho/2$; omit the left factor when its threshold is at most zero and the right factor when its threshold is at least one. Their product $b_i$ has degree at most $4n$, lies in $[0,1]$, equals $1+O(e^{-cn})$ on the inner box of radius $\rho$ and its first derivatives there are $O(ne^{-cn})$; outside the outer box of radius $2\rho$ its value and first derivatives are $O(ne^{-cn})$. The omitted boundary factors require no suppression on a side where the outer box does not meet $S$. [step 1.1, construct]

3.1 Let $T_{i,s}$ be the total-degree-$s$ Taylor polynomial at $a_i$. When $a_i$ is on the boundary, take limits of interior centers; all derivatives extend continuously to $S$. On the intersection of the outer box and $S$, convexity keeps the Taylor segment inside the triangle, so [F1] and the multinomial formula give $|f-T_{i,s}|+|\nabla(f-T_{i,s})|\le CM(s+1)(4A\rho)^s\le CM2^{-s}$ after enlarging $C$ for small $s$. On all of $S$, the coefficient formula for $T_{i,s}$ gives $|T_{i,s}|+|\nabla T_{i,s}|\le CM(s+1)^2D^s$ for a fixed $D>1$ depending only on $A$. [F1, F3, step 2.1, given, algebra]

3.2 Set $w_i=b_i\prod_{j<i}(1-b_j)$ and $w_0=\prod_{j\le m}(1-b_j)$. Then $\sum_{i=0}^m w_i=1$ and $0\le w_i\le1$. At every point of $S$ some inner box applies, so one factor $1-b_i$, together with its first derivatives, is exponentially small there; the product rule and $|b_j'|\le Cn$ give $\|w_0\|_{W^{1,\infty}(S)}\le Cne^{-cn}$. Outside the outer box for a fixed $i$, the same product rule gives $|w_i|+|\nabla w_i|\le Cne^{-cn}$. [step 2.1, algebra]

4.1 Put $q=\sum_{i=1}^m w_iT_{i,s}$. Since $f-q=w_0f+\sum_iw_i(f-T_{i,s})$, the near-box and far-box bounds of steps 3.1 and 3.2 give $\|f-q\|_{W^{1,\infty}(S)}\le CM\{n2^{-s}+n(s+1)^2D^se^{-cn}\}.$ Choose fixed $\varepsilon>0$ with $\varepsilon\le1$ and $\varepsilon\log D<c/2$, and let $s=\lfloor\varepsilon n\rfloor$. Then the right side is at most $CM e^{-b_0n}$. Each $w_i$ has degree at most $4mn$, so $q$ has total degree at most $4mn+s\le(4m+1)n$. Choose $n=\lfloor p/(4m+1)\rfloor$; for the finitely many $p$ with $n=0$, the zero polynomial and an enlarged constant handle the claim. This proves the exponential estimate for every $p\ge1$. [step 3.2, step 3.1, algebra, construct]

5.1 On the interval let $P$ be the $L^2$ orthogonal projection of $f'$ onto $\mathbb P_{p-1}$ and put $J_pf(t)=f(0)+\int_0^tP(s)ds$. The positive-definite finite polynomial Gram matrix gives a unique projection; Pythagoras gives $\|P\|_2\le\|f'\|_2$ and $\|f'-P\|_2\le\|f'-r\|_2$ for every $r\in\mathbb P_{p-1}$. Orthogonality to constants gives $J_pf(1)=f(1)$. The derivatives of $f'$ satisfy a factorial bound with fixed constants $M'=MA$ and $A'=2A$, since $(j+1)!\le2^j j!$ for $j\ge1$. For $p\ge2$, apply step 4.1 to $f'$ with degree $p-1$; best approximation of the $L^2$ projection then gives $\|f'-P\|_2\le CMe^{-b(p-1)}$, which is at most $C'Me^{-b'p}$ after changing constants. For $p=1$, the derivative contraction and the bound $\|f'\|_2\le MA$ give the same asserted estimate after enlarging $C'$. Finally $f-J_pf=\int_0^t(f'-P)$ and [F2] bounds its $L^2$ norm by $\|f'-P\|_2$. The derivative and value bounds prove the stated interval estimate. [F2, step 4.1, given, algebra] ∎
