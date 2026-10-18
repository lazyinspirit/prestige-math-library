---
id: lem-hp-analytic-polynomial-approximation-on-a-triangle
kind: lemma
title: Analytic derivative bounds give exponential polynomial approximation on a triangle
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [thm-multivariable-taylor-formula-with-lagrange-remainder]
proof_strategy: direct
provenance: {statement: ai-altered, proof: ai-altered}
sources:
  references:
    - title: He, Houston, Schwab, and Wihler, Exponential Convergence of hp-ILGFEM
      url: https://arxiv.org/pdf/2404.18569
      locator: "Definition 1 and Theorem 2 supply the analytic approximation context; the elementary polynomial-mask proof below is independent."
---

## Statement

Let $S$ be the closed reference triangle, or the unit interval. Suppose $f$ is smooth up to its boundary and, for all multi-indices $\alpha$, $\|D^\alpha f\|_\infty\le M A^{|\alpha|}|\alpha|!$, where $A\ge1$. Then constants $C,b>0$, depending only on $A$ and the reference domain, satisfy
$$\inf_{q\in\mathbb P_p}\|f-q\|_{W^{1,\infty}(S)}\le CM e^{-bp}\qquad(p\ge1).$$
On an interval, there is also an endpoint-preserving degree-$p$ polynomial $J_pf$ with $(J_pf)'$ the $L^2$ orthogonal projection of $f'$ onto $\mathbb P_{p-1}$. It satisfies $\|(J_pf)'\|_2\le\|f'\|_2$ and $\|f-J_pf\|_{H^1}\le CM e^{-bp}$ under the analytic hypothesis. No extension of $f$ to a large box is assumed.

## Facts & Assumptions

**Given:** The reference triangle or interval, the stated smoothness and derivative bounds, and $p\ge1$.

[F1] [[thm-multivariable-taylor-formula-with-lagrange-remainder]] gives Taylor remainder bounds on each segment in the convex domain.

## Proof

1.1 For $0<\tau<1$ put $B_{n,\tau}(t)=\sum_{j=\lceil n\tau\rceil}^n\binom njt^j(1-t)^{n-j}$ on $[0,1]$. Thus $0\le B\le1$ and $\deg B\le n$. For fixed $\delta>0$, there are $c,C>0$ independent of $n$ such that $|B|+n^{-1}|B'|\le Ce^{-cn}$ on $t\le\tau-\delta$ and $|1-B|+n^{-1}|B'|\le Ce^{-cn}$ on $t\ge\tau+\delta$. Indeed, for $t\le\tau-\delta$ and $z>0$, the binomial sum is at most $e^{-zn\tau}(1-t+te^z)^n$; choosing a sufficiently small fixed $z>0$ gives a negative exponent uniformly, since its derivative at $z=0$ is $t-\tau\le-\delta$. Apply the same argument to the complementary lower tail for the other inequality. Differentiation telescopes to $B'=n\binom{n-1}{\lceil n\tau\rceil-1}t^{\lceil n\tau\rceil-1}(1-t)^{n-\lceil n\tau\rceil}$; away from the threshold the corresponding binomial atom is bounded by the same tail estimate with $n-1$ and gap $\delta/2$. Increasing $C$ covers the finitely many small $n$. Everywhere $|B'|\le n$. [given, algebra]

1.2 Choose $0<\rho<1/(32A)$ and finitely many points $a_i\in S$, $1\le i\le m$, whose coordinate boxes of radius $\rho$ cover $S$. This can be done by a finite grid and choosing, for each grid box meeting $S$, one point in its intersection; a sufficiently fine grid gives the cover. For each coordinate form a left increasing binomial factor with threshold $a_{i,j}-3\rho/2$ and a right decreasing one with threshold $a_{i,j}+3\rho/2$. If the left threshold is negative, omit that factor; if the right exceeds one, omit it. Their product $b_i$ has degree at most $4n$ in dimension two (at most $2n$ on an interval), lies in $[0,1]$, is $1+O(e^{-cn})$ on the inner box of radius $\rho$, and, together with its first derivatives, is $O(ne^{-cn})$ outside the outer box of radius $2\rho$. The omitted factors require no suppression on the corresponding side of $[0,1]$. All constants are uniform over this fixed finite cover. [step 1.1, construct]

2.1 Put $w_i=b_i\prod_{j<i}(1-b_j)$ and $w_0=\prod_{j\le m}(1-b_j)$. Then $\sum_iw_i+w_0=1$, $0\le w_i\le1$, and all first derivatives are $O(n)$. At every point some inner box applies, so that a factor $1-b_i$, with its first derivatives, is exponentially small there; consequently $\|w_0\|_{W^{1,\infty}(S)}\le Cne^{-cn}$. Outside the outer box for $i$, $\|w_i\|$ and its first derivatives are likewise bounded pointwise by $Cne^{-cn}$. [step 1.2, algebra]

2.2 Let $T_{i,s}$ be the Taylor polynomial of $f$ at $a_i$ of total degree $s$. On the intersection of the outer box and $S$, convexity keeps the Taylor segment inside $S$. The derivative bounds and the multinomial identity give $|f-T_{i,s}|+|\nabla(f-T_{i,s})|\le CM(s+1)(4A\rho)^s\le CM2^{-s}$, after adjusting $C$ for small $s$. On all of $S$, the coefficient formula gives $|T_{i,s}|+|\nabla T_{i,s}|\le CM(s+1)^2D^s$ for a fixed $D>1$ depending only on $A$. These bounds include boundary centers by taking limits from the interior. [F1, given, algebra]

3.1 Set $q=\sum_iw_iT_{i,s}$. The exact identity $f-q=w_0f+\sum_iw_i(f-T_{i,s})$ and the preceding near-box and far-box bounds imply $\|f-q\|_{W^{1,\infty}}\le CM[n2^{-s}+n(s+1)^2D^se^{-cn}]$. Choose fixed $\varepsilon>0$ with $\varepsilon\le1$ and $\varepsilon\log D<c/2$, and take $s=\lfloor\varepsilon n\rfloor$. This gives $CM e^{-b_0n}$ after absorbing polynomial factors. Since $\deg q\le4mn+s$, choose $n=\lfloor p/(4m+1)\rfloor$; the finitely many small $p$ are covered by the zero polynomial and an enlarged $C$. This proves the asserted exponential estimate for every $p\ge1$. [step 2.1, step 2.2, algebra, construct]

4.1 On the interval let $P$ be the $L^2$ polynomial projection of $f'$ onto $\mathbb P_{p-1}$ and put $J_pf(t)=f(0)+\int_0^tP$. The projection exists uniquely by the positive definite finite polynomial Gram matrix. Orthogonality to constants proves $J_pf(1)=f(1)$; orthogonality also gives $\|P\|_2\le\|f'\|_2$ and $\|f'-P\|_2\le\|f'-r\|_2$ for every $r\in\mathbb P_{p-1}$. The derivative bounds for $f'$ have the same form with larger fixed $A,M$ because $(j+1)!\le2^{j+1}j!$. Apply step 3.1 to $f'$ and use $\|f-J_pf\|_2\le\|f'-P\|_2$, which follows from the integral formula and Cauchy–Schwarz. This proves the interval claims. [step 3.1, given, algebra] ∎
