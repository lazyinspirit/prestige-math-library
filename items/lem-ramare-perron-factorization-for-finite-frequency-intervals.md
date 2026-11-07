---
id: lem-ramare-perron-factorization-for-finite-frequency-intervals
kind: lemma
title: Ramaré–Perron factorization on finite frequency intervals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
axiom_use: No choice axiom is used; frequency sets and all integrations are finite unions of compact Riemann intervals.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-finite-imaginary-perron-interval-kernel
- thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
- thm-canonical-prime-factorisation
- thm-riemann-fubini-on-product-rectangles
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Lemma 12 and Section 8. This finite-frequency, choice-free Ramaré–Perron argument is supplied locally.
---

## Statement

Let $X\ge10$, $3\le P\le Q\le3X$, $H\ge1$, $|a_n|,|b_n|,|c_p|\le1$, and $a_{mp}=b_mc_p$ whenever $P\le p\le Q$ and $p\nmid m$. Let $\omega(m)$ count distinct prime divisors in $[P,Q]$. Use all nonempty bins $[e^{v/H},e^{(v+1)/H})\cap[P,Q]$, indexed by integers $v$, and put
$$Q_v(s)=\sum_{p\text{ in bin }v}c_pp^{-s},\qquad R_v(s)=\sum_{Xe^{-v/H}/4\le m\le4Xe^{-v/H}}\frac{b_m}{1+\omega(m)}m^{-s},$$
$$F(s)=\sum_{X\le n\le3X,\ \omega(n)>0}a_nn^{-s}.$$
Let $2\le D\le\min(P,X)$, $1\le T\le X$, and let $\mathcal T\subset[-T,T]$ be a finite union of compact intervals and isolated points. Then
$$\int_{\mathcal T}|F(1+it)|^2dt\ll\log(2D)H\log(2Q/P)\sum_v\int_{-D}^D\left|\frac{3^{iu}-1}{u}\right|\int_{\mathcal T+u}|Q_v(1+it)R_v(1+it)|^2dt\,du+\frac1D.$$
All integrals are finite Riemann integrals, isolated points contribute zero, and the implied constant is absolute. No countable choice is assumed and no general measurable-frequency statement is asserted.

## Facts & Assumptions

**Given:** The data and finite frequency set in the Statement.

[F1] The finite imaginary Perron kernel approximates the indicator of $[X,3X]$, and for $X/4\le n\le4eX$ the sum of its squared coefficient errors is $O(X/D)$. [[lem-finite-imaginary-perron-interval-kernel]]

[F2] For $T\ge2$ and $Q(t)=\sum_{n\le N}d_nn^{-it}$, the continuous mean-square bound is $\int_0^T|Q(t)|^2dt\ll(N+T)\sum_{n\le N}|d_n|^2$. [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[F3] Positive integers have unique prime factorizations. [[thm-canonical-prime-factorisation]]

[F4] Riemann integrals on finite product rectangles may be interchanged. [[thm-riemann-fubini-on-product-rectangles]]

## Proof

1.1 Restrict the products $pm$ in $\sum_vQ_vR_v$ to $[X,3X]$. Every relevant $m=n/p$ is included because $p\in[e^{v/H},e^{(v+1)/H})$ and $e^{1/H}\le e<4$. When no prime in $[P,Q]$ occurs squared in $n$, the displayed coefficient identity and $1+\omega(n/p)=\omega(n)$ make the restricted coefficient exactly $a_n$. At any $n$ with $k=\omega(n)>0$, its absolute coefficient majorant is at most $$\sum_{p\mid n,\ P\le p\le Q}\frac1{1+\omega(n/p)}=\frac{k_1}{k}+\frac{k_2}{k+1}\le1,$$ where $k_1,k_2$ count primes with exponent respectively one and at least two. Thus the difference has coefficients of modulus at most two and is supported where some $p^2\mid n$ with $p\ge P$. There are $O(X/P)$ such $n$ by $\sum_{p\ge P}\lfloor3X/p^2\rfloor\ll X/P$. To apply [F2] on $[-T,T]$, put $v=t+T$ and $U=2T\ge2$. For any coefficients $d_n$, $\sum_n d_nn^{-it}=\sum_n(d_nn^{iT})n^{-iv}$, and $|d_nn^{iT}|=|d_n|$. Thus [F2] bounds the integral over $[-T,T]$ by $O((N+2T)\sum_n|d_n|^2)$ with the unchanged coefficient norm. Applying this to the difference, it contributes $O(1/P)$ to the square integral, since its coefficients on the $1$-line have square sum $O(1/(XP))$ and $T\le X$. [F2, F3, given, algebra]

2.1 Let $G(s)=\sum_vQ_v(s)R_v(s)$ without restricting products. Its support lies in $[X/4,4eX]$, and the same majorant from step 1.1 bounds every coefficient by one. Multiplication by the [F1] kernel yields $$\sum_n g_nn^{-s}J_D(n)=\frac1{2\pi}\int_{-D}^DX^{iu}\frac{3^{iu}-1}{iu}\sum_vQ_v(s+iu)R_v(s+iu)du.$$ The coefficient-square sum of the difference from the restriction $[X,3X]$ is $O(X/D)$; its support remains in the full interval $[X/4,4eX]$. By [F2] with the same translation and norm preservation as in step 1.1, its $1$-line square integral over $[-T,T]$ is $O(1/D)$. Since $D\le P$, this also absorbs step 1.1. [F1, F2, step 1.1, given, algebra]

3.1 The compact kernel satisfies $\int_{-D}^D|(3^{iu}-1)/u|du\ll\log(2D)$. Weighted Cauchy–Schwarz in $u$ and ordinary Cauchy–Schwarz over at most $CH\log(2Q/P)$ bins bound the squared main term from step 2.1. For each fixed interval component of $\mathcal T$, its integrand is continuous on a finite rectangle; [F4] permits exchanging the $t$ and $u$ integrals. Translate $t$ by $u$ and sum the finitely many components; isolated points contribute zero. This gives exactly the displayed bound, with no general measurable-set or choice premise. [F4, step 2.1, given, algebra] ∎
