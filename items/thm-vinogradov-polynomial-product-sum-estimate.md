---
id: thm-vinogradov-polynomial-product-sum-estimate
kind: theorem
title: "Vinogradov's polynomial product-sum estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-vinogradov-mean-value-Jsk
  - thm-vinogradov-mean-value-is-solution-count
  - lem-vinogradov-local-congruence-toolkit
  - lem-vinogradov-exponential-sum-toolkit
  - thm-holder-finite-real-exponents
  - def-exponential-character-e
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.7"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 54–56, complete proof of Theorem 24.7."
---

## Statement

Write $e(x):=\exp(2\pi i x)$ for real $x$.

For $U\ge1$, $J_{b,k}(U)$ denotes the $2b$-th torus mean of the degree-$k$ exponential sum, equivalently the count of equal power-sum pairs of $b$-tuples in $[1,U]$.

Let $k,b\ge1$ be integers with $b\ge k$. Let $f(n)=\sum_{j=1}^k\alpha_jn^j$ with real $\alpha_j$. Suppose that for each $j$ there are coprime integers $a_j,q_j$ with $q_j\ge1$ and $|\alpha_j-a_j/q_j|\le q_j^{-2}$. For real numbers $1\le X\le X'\le2X$ and $1\le Y\le Y'\le2Y$, put
$$T:=\sum_{X<\ell\le X'}\sum_{Y<m\le Y'}e(f(\ell m)).$$
Then, with an absolute implied constant,
$$|T|\ll XY\left(\frac{J_{b,k}(2X)J_{b,k}(2Y)}{(4XY)^{2b-\frac12k(k+1)}}\right)^{1/(4b^2)}\prod_{j=1}^k\left(\frac1{q_j}+\frac1{X^j}+\frac1{Y^j}+\frac{q_j}{X^jY^j}\right)^{1/(4b^2)}.$$

## Statement references

[Montgomery–Vaughan, Theorem 24.7 and complete proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[[lem-integer-part]]

## Facts & Assumptions

**Given:** $k,b\ge1$, $b\ge k$, the polynomial $f$, reduced approximants $a_j/q_j$, and the stated intervals.

[F1] $J_{b,k}(X)$ is the number of equal-power-sum solutions and its integral representation is the moment of $f_{k,X}$ ([[def-vinogradov-mean-value-Jsk]], [[thm-vinogradov-mean-value-is-solution-count]]).

[F2] For any fixed vector $h\in\mathbb Z^k$, the number of pairs in an interval of at most $\lfloor X\rfloor$ integers with power-sum difference $h$ is at most $J_{b,k}(X)$ ([[lem-vinogradov-local-congruence-toolkit]]).

[F3] For rational approximants $a/q$, the weighted spacing sum is $\ll GH/q+G+H+q$ ([[lem-vinogradov-exponential-sum-toolkit]]).

[F4] Finite Hölder inequality applies to the finite sums below ([[thm-holder-finite-real-exponents]]).

[F5] $e(u+v)=e(u)e(v)$ and $|e(u)|=1$ ([[def-exponential-character-e]]).

[F6] The floor is the greatest integer at most its argument; the ceiling is the least integer at least its argument, with $x\le\lceil x\rceil<x+1$ ([[lem-integer-part]]).

## Proof

**Proof technique:** raise the product sum to moments, collect power sums, and apply the rational spacing estimate.

1.1 There are at most $2X$ integers $\ell$ in the first interval. Hölder [F4] gives $$|T|^{2b}\le(2X)^{2b-1}\sum_{X<\ell\le2X}\left|\sum_{Y<m\le Y'}e(f(\ell m))\right|^{2b}.$$ Expanding the moment with [F5], set $F_j(m)=\sum_{i=1}^bm_i^j-\sum_{i=b+1}^{2b}m_i^j$. A second Hölder application gives $$|T|^{4b^2}\le(4XY)^{4b^2-2b}\sum_{Y<m_1,\ldots,m_{2b}\le2Y}\left|\sum_{X<\ell\le2X}e\!\left(\sum_{j=1}^k\alpha_jF_j(m)\ell^j\right)\right|^{2b}.$$ [F1, F4, F5, algebra]

1.2 Group the $m$-tuples by $h=(F_1(m),\ldots,F_k(m))$. Each group has size at most $J_{b,k}(2Y)$ by [F2], and $|h_j|\le b(2Y)^j$. With $H_j=2\lceil b(2Y)^j\rceil$, the triangular weights $2(1-|h_j|/H_j)$ are at least $1$ on this range. Thus the sum over $h$ is at most $$C J_{b,k}(2Y)\sum_{|h_j|<H_j}\prod_j2\left(1-\frac{|h_j|}{H_j}\right)\left|\sum_{X<\ell\le2X}e\!\left(\sum_j\alpha_jh_j\ell^j\right)\right|^{2b}.$$ Expanding this last moment in $\ell$ and summing the triangular Fourier weights gives a product of Fejér kernels. For each $j$ the corresponding kernel is $2H_j^{-1}|\sum_{u<H_j}e(u\alpha_jF_j(\ell))|^2$; the geometric-progression bound in [F3] bounds it by $C\min(H_j,(H_j\|\alpha_jF_j(\ell)\|_{\mathbb T}^2)^{-1})$. [F1, F2, F3, F5, F6, algebra]

2.1 Group the resulting $\ell$-tuples by their power-sum differences $g_j=F_j(\ell)$, for which $|g_j|\le b(2X)^j$. The number in each group is at most $J_{b,k}(2X)$ by [F2]. Apply [F3] with the integer $G_j=\lceil b(2X)^j\rceil$ and the already integer $H_j=2\lceil b(2Y)^j\rceil$. By [F6], $b(2X)^j\le G_j\le2b(2X)^j$, so rounding changes only an absolute factor in each coordinate. Since $$\frac{G_jH_j}{q_j}+G_j+H_j+q_j\ll b^2(4XY)^j\left(\frac1{q_j}+\frac1{X^j}+\frac1{Y^j}+\frac{q_j}{X^jY^j}\right),$$ we obtain $$|T|^{4b^2}\ll(4XY)^{4b^2-2b}J_{b,k}(2Y)J_{b,k}(2X)(4XY)^{\frac12k(k+1)}\prod_{j=1}^k\left(\frac1{q_j}+\frac1{X^j}+\frac1{Y^j}+\frac{q_j}{X^jY^j}\right),$$ the factor $C_1^k(4b^2)^k$ from the $k$ coordinate estimates becomes $C_1^{k/(4b^2)}(4b^2)^{k/(4b^2)}=O(1)$ because $b\ge k$, so the implied constant is absolute. Rearranging yields the asserted estimate. [step 1.1, step 1.2, F1, F2, F3, F4, F6, algebra] ∎

