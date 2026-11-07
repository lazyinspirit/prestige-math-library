---
id: lem-ramare-short-bin-factorization-without-frequency-shifts
kind: lemma
title: Ramaré short-bin factorization without frequency shifts
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
axiom_use: No choice axiom is used; frequency sets are finite unions of compact intervals.
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
- thm-canonical-prime-factorisation
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Lemma 12, printed pp. 19–20. The finite-frequency proof and the explicit H≤X endpoint restriction are supplied locally.
---

## Statement

Let $X\ge10$, $3\le P\le Q\le3X$, $1\le H\le X$, and $|a_n|,|b_n|,|c_p|\le1$. Assume $a_{mp}=b_mc_p$ whenever $P\le p\le Q$ and $p\nmid m$. Let $\omega(m)$ count distinct prime divisors in $[P,Q]$. For the nonempty bins $[e^{v/H},e^{(v+1)/H})\cap[P,Q]$, indexed by integers $v$, put
$$Q_v(s)=\sum_{p\text{ in bin }v}c_pp^{-s},\qquad R_v(s)=\sum_{Xe^{-v/H}\le m\le2Xe^{-v/H}}\frac{b_m}{1+\omega(m)}m^{-s},$$
$$F(s)=\sum_{X\le n\le2X,\ \omega(n)>0}a_nn^{-s}.$$
If $1\le T\le X$ and $\mathcal T\subset[-T,T]$ is a finite union of compact intervals and isolated points, then
$$\int_{\mathcal T}|F(1+it)|^2dt\ll H\log(2Q/P)\sum_v\int_{\mathcal T}|Q_v(1+it)R_v(1+it)|^2dt+\frac1H+\frac1P,$$
with an absolute implied constant. No frequency enlargement, general measurable-set theorem, or choice axiom is assumed.

## Facts & Assumptions

**Given:** The data and finite frequency set in the Statement.

[F1] The continuous Dirichlet-polynomial mean-square bound is $\int_0^U|\sum_{n\le N}d_nn^{-it}|^2dt\ll(N+U)\sum_{n\le N}|d_n|^2$ for $U\ge2$. [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[F2] Positive integers have unique prime factorizations. [[thm-canonical-prime-factorisation]]

## Proof

1.1 Put $G(s)=\sum_vQ_v(s)R_v(s)$. Every product $pm$ in $G$ lies in $[X,2e^{1/H}X]\subset[X,2eX]$. For any positive integer $n$ with $k=\omega(n)>0$, its absolute coefficient majorant in $G$ is at most $$\sum_{p\mid n,\ P\le p\le Q}\frac1{1+\omega(n/p)}=\frac{k_1}{k}+\frac{k_2}{k+1}\le1,$$ where $k_1,k_2$ count the prime divisors with exponent one and at least two. If $X e^{1/H}<n\le2X$ and no prime in $[P,Q]$ occurs squared in $n$, then every $m=n/p$ lies in the indicated $R_v$ range, because $p\in[e^{v/H},e^{(v+1)/H})$; moreover $1+\omega(n/p)=\omega(n)$ and $b_{n/p}c_p=a_n$. Thus the coefficient of $G$ is exactly $a_n$ there. [F2, given, algebra]

2.1 The difference $F-G$ has coefficients of modulus at most two, and is supported in the boundary intervals $[X,Xe^{1/H}]$ and $[2X,2Xe^{1/H}]$ or on integers in $[X,2X]$ divisible by $p^2$ for some $p\ge P$. Since $e^{1/H}-1\ll1/H$ and $H\le X$, the two boundary intervals contain $O(X/H)$ integers, including real endpoint effects. The square-divisible set has size $O(X/P)$ by $\sum_{p\ge P}\lfloor2X/p^2\rfloor\ll X/P$. All such integers lie between $X$ and $2eX$. Their coefficients on the $1$-line therefore have total squared norm $O((1/H+1/P)/X)$. For [F1], set $v=t+T$ and $U=2T\ge2$: a polynomial $\sum_n d_nn^{-it}$ becomes $\sum_n(d_nn^{iT})n^{-iv}$ on $[0,U]$. Its coefficient square norm is unchanged because $|n^{iT}|=1$. Applying [F1] with this translation on $[-T,T]$ gives $$\int_{\mathcal T}|F(1+it)-G(1+it)|^2dt\ll\frac1H+\frac1P,$$ since $T\le X$. [F1, step 1.1, given, algebra]

3.1 There are at most $CH\log(2Q/P)$ nonempty bins. Finite Cauchy–Schwarz gives $|G(s)|^2\le CH\log(2Q/P)\sum_v|Q_v(s)R_v(s)|^2$ at each point. Integrate over the finitely many components of $\mathcal T$, use step 2.1 and $|F|^2\le2|G|^2+2|F-G|^2$, and absorb the factor two. Isolated points contribute zero. This proves the stated estimate without shifting the frequency set. [step 2.1, given, algebra] ∎
