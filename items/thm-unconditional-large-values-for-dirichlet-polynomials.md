---
id: thm-unconditional-large-values-for-dirichlet-polynomials
kind: theorem
title: "Unconditional Large-Values Bound for Dirichlet Polynomials"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-one-separated-dirichlet-polynomial-samples
  - thm-montgomery-vaughan-weighted-large-values-mean-square
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - thm-intermediate-value
justified_by: []
aliases: []
forward_refs: []
dependency_level: 2
proof_strategy: direct
sources:
  references:
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, §27.1, Theorem 27.4 and proof"
      url: "https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf"
    - title: "E. Assing, Topics in Analytic Number Theory, Theorem 15 and proof"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf"
---

## Statement

Let $N\ge1$ be an integer, let $T\ge2$, and let $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ with $a_n\in\mathbb C$. Let $t_1,\ldots,t_R\in[0,T]$ be pairwise distinct and 1-separated, meaning $|t_r-t_q|\ge1$ for $r\ne q$, and put $G:=\sum_{n=1}^{N}|a_n|^2$. If $V>0$ and $|D(it_r)|\ge V$ for every $r$, then
$$R\ll \frac{NG}{V^2}+\frac{NTG^3(\log T)^2}{V^6},$$
with an absolute implied constant.

## Statement references

[Montgomery–Vaughan, Theorem 27.4 and proof](https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf)

[Assing, Theorem 15, final large-values estimate](https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf)

## Facts & Assumptions

**Given:** A positive integer $N$, $T\ge2$, coefficients $a_1,\ldots,a_N\in\mathbb C$, a finite 1-separated set $\{t_1,\ldots,t_R\}\subset[0,T]$, and a real $V>0$.

[F1] [[def-one-separated-dirichlet-polynomial-samples]]: $D(s)=\sum_{n=1}^{N}a_n n^{-s}$, $G=\sum_{n=1}^{N}|a_n|^2$, and the sample points lie in $[0,T]$ and are 1-separated.

[F2] [[thm-montgomery-vaughan-weighted-large-values-mean-square]]: for every $U\ge2$, coefficients $b_1,\ldots,b_N\in\mathbb C$, and finite 1-separated set $\{u_1,\ldots,u_m\}\subset[0,U]$, the corresponding polynomial $P(s)=\sum_{n=1}^N b_n n^{-s}$ satisfies $\sum_{j=1}^m|P(iu_j)|^2\le C_0(N+m\sqrt U\log U)\sum_{n=1}^N|b_n|^2$ for an absolute $C_0$.

[F3] The natural logarithm is continuous and has derivative $1/U$ for $U>0$; product differentiation, the mean-value theorem and the intermediate-value theorem apply on compact intervals. The square-root derivative follows by rationalizing its difference quotient: $(\sqrt U)'=1/(2\sqrt U)$ for $U>0$. [[thm-logarithm-derivative-and-integral]] [[thm-algebra-of-derivatives]] [[cor-mean-value-theorem]] [[thm-intermediate-value]]

## Proof

**Given:** A positive integer $N$, $T\ge2$, coefficients $a_1,\ldots,a_N\in\mathbb C$, a finite 1-separated set $\{t_1,\ldots,t_R\}\subset[0,T]$, and a real $V>0$.

[F1] [[def-one-separated-dirichlet-polynomial-samples]]: $D(s)=\sum_{n=1}^{N}a_n n^{-s}$, $G=\sum_{n=1}^{N}|a_n|^2$, and the sample points lie in $[0,T]$ and are 1-separated.

[F2] [[thm-montgomery-vaughan-weighted-large-values-mean-square]]: for every $U\ge2$, coefficients $b_1,\ldots,b_N\in\mathbb C$, and finite 1-separated set $\{u_1,\ldots,u_m\}\subset[0,U]$, the corresponding polynomial $P(s)=\sum_{n=1}^N b_n n^{-s}$ satisfies $\sum_{j=1}^m|P(iu_j)|^2\le C_0(N+m\sqrt U\log U)\sum_{n=1}^N|b_n|^2$ for an absolute $C_0$.

[F3] The natural logarithm is continuous and has derivative $1/U$ for $U>0$; product differentiation, the mean-value theorem and the intermediate-value theorem apply on compact intervals. The square-root derivative follows by rationalizing its difference quotient: $(\sqrt U)'=1/(2\sqrt U)$ for $U>0$. [[thm-logarithm-derivative-and-integral]] [[thm-algebra-of-derivatives]] [[cor-mean-value-theorem]] [[thm-intermediate-value]]



1.1 If $G=0$, every coefficient is zero, so $D=0$ and $R=0$. Otherwise choose an absolute $C_1>2C_0\sqrt2\log2$. If $V^2\le C_1G$, order the sample points increasingly; adjacent gaps are at least one, so $T\ge t_R-t_1\ge R-1$ and $R\le T+1\le2T$. Also $NTG^3(\log T)^2/V^6\ge NT(\log2)^2/C_1^3$ since $N\ge1$; hence the claimed bound follows after enlarging its absolute constant. [F1, given, algebra]

2.1 Suppose $G>0$ and $V^2>C_1G$. The function $H(U):=\sqrt U\log U$ is continuous, has derivative $H'(U)=(\log U+2)/(2\sqrt U)>0$ on $[2,\infty)$, and is unbounded since $H(U)\ge\sqrt U\log2$ for $U\ge2$. By [F3], the mean-value theorem makes $H$ strictly increasing, while the intermediate-value theorem gives existence at the stated target; the choice of $C_1$ therefore gives a unique $U>2$ satisfying $V^2=2C_0H(U)G$. If $U\ge T$, applying [F2] to the full sample set gives $V^2R\le C_0NG+C_0R\sqrt T\log T\,G\le C_0NG+V^2R/2$; therefore $R\le2C_0NG/V^2$. [F1, F2, F3, step 1.1, choose, algebra]

3.1 If $U<T$, partition $[0,T]$ into $K:=\lceil T/U\rceil$ half-open intervals of length at most $U$, assigning the right endpoint $T$ to the last interval. For each interval starting at $b$, replace $D(s)$ by $D_b(s):=D(s+ib)=\sum_{n\le N}(a_n n^{-ib})n^{-s}$; its coefficient square norm is still $G$ because $|n^{-ib}|=1$, and its translated sample points lie in $[0,U]$ and remain 1-separated because translation preserves pairwise differences. If $R_j$ points in this interval satisfy the threshold, [F2] gives $V^2R_j\le C_0(N+R_j\sqrt U\log U)G= C_0NG+V^2R_j/2$, so $R_j\le2C_0NG/V^2$. [F1, F2, step 2.1, construct, algebra]

4.1 Summing over the intervals yields $R\le2C_0(1+T/U)NG/V^2$. The first term is $O(NG/V^2)$. From the defining equation for $U$, $U(\log U)^2=V^4/(4C_0^2G^2)$, so the second term is $O(TNG^3(\log U)^2/V^6)\le O(TNG^3(\log T)^2/V^6)$ because $U<T$. This proves the statement. [step 2.1, step 3.1, algebra] ∎
