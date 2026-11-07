---
dependency_level: 2
id: lem-ramare-perron-dyadic-factorization-with-square-errors
kind: lemma
title: Corrected Ramaré/Perron factorization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- lem-finite-imaginary-perron-interval-kernel
- thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
- thm-canonical-prime-factorisation
- def-countable-choice
- thm-lebesgue-measure-is-a-complete-measure
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
justified_by: []
proof_strategy: direct
sources:
  references:
  - title: Siddarth Menon, Improved Bounds for Multiplicative Functions in Almost All Short Intervals; local adapted proof with explicit endpoint and parameter corrections
    url: https://arxiv.org/pdf/2607.15574v1
---

## Statement

Assume the Axiom of Countable Choice. Let $X\ge10$, $3\le P\le Q\le3X$, $|a_n|,|b_n|,|c_p|\le1$, and assume $a_{mp}=b_mc_p$ whenever $P\le p\le Q$ and $p\nmid m$. Let $\omega(m)$ count distinct prime divisors in $[P,Q]$. Use the disjoint bins $[e^v,e^{v+1})\cap[P,Q]$, with integer $v$ for which they are nonempty, and put

$$Q_v(s)=\sum_{p\text{ in bin }v}c_pp^{-s},\qquad R_v(s)=\sum_{Xe^{-v}/4\le m\le4Xe^{-v}}\frac{b_m}{1+\omega(m)}m^{-s},$$

$$F(s)=\sum_{X\le n\le3X,\ \omega(n)>0}a_nn^{-s}.$$

Let $2\le D\le\min(P,X)$, let $1\le T\le X$, and let $\mathcal T\subset[-T,T]$ be measurable. Then

$$\int_{\mathcal T}|F(1+it)|^2dt\ll \log(2D)\log(2Q/P)\sum_v\int_{-D}^D\left|\frac{3^{iu}-1}{u}\right|\int_{\mathcal T+u}|Q_v(1+it)R_v(1+it)|^2dt\,du+\frac1D.$$

## Statement references

[[lem-finite-imaginary-perron-interval-kernel]]

[[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[[thm-canonical-prime-factorisation]]

[[def-countable-choice]]

[[thm-lebesgue-measure-is-a-complete-measure]]

[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Facts & Assumptions

**Given:** All data and hypotheses in the Statement.

[F1] The local supplier [[lem-finite-imaginary-perron-interval-kernel]] gives its stated result under its stated hypotheses.

[F2] The local supplier [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]] gives its stated result under its stated hypotheses.

[F3] The local supplier [[thm-canonical-prime-factorisation]] gives its stated result under its stated hypotheses.

[F4] The local supplier [[def-countable-choice]] gives its stated result under its stated hypotheses.

[F5] The local supplier [[thm-lebesgue-measure-is-a-complete-measure]] gives its stated result under its stated hypotheses.

[F6] The local supplier [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] gives its stated result under its stated hypotheses.

[F7] Under Countable Choice, bounded Borel Riemann integrands on boxes have equal Lebesgue integrals. ([[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]])

## Proof

1.1 First restrict the products $pm$ in $\sum_v Q_vR_v$ to $[X,3X]$. The displayed $m$ range contains every relevant $m=n/p$, since $p\in[e^v,e^{v+1})$ and $e<4$. For an $n$ with no squared prime factor from $[P,Q]$, every prime divisor in that range has exponent one, so $p\nmid n/p$, $a_n=b_{n/p}c_p$, and $\omega(n/p)+1=\omega(n)$. Its coefficient in the restricted sum is exactly $a_n$. More generally, at any $n$ the sum of the absolute coefficient majorants is at most $$\sum_{p\mid n,\ P\le p\le Q}\frac1{1+\omega(n/p)}=\frac{k_1}{k}+\frac{k_2}{k+1}\le1,$$ where $k=\omega(n)>0$, and $k_1,k_2$ count primes of exponent one and at least two. Thus the discrepancy has coefficients of modulus at most $2$, supported where some $p^2\mid n$ with $p\ge P$. The number of those $n\in[X,3X]$ is at most $\sum_{p\ge P,\ p^2\le3X}\lfloor3X/p^2\rfloor\ll X/P$. The polynomial square is continuous and bounded on $[-T,T]$, so [F7] identifies its Riemann and Lebesgue integrals. For [F2], put $v=t+T$ and $U=2T\ge2$; the polynomial $\sum_n d_nn^{-it}$ becomes $\sum_n(d_nn^{iT})n^{-iv}$ on $[0,U]$. The coefficient square norm is unchanged because $|n^{iT}|=1$. Hence [F2] bounds the resulting square-error polynomial on the $1$-line by $O(1/P)$. [given, F1, F2, F3, F4, F5, F6, F7, algebra]

2.1 Apply [F1] to each coefficient of the unrestricted polynomial $G(s)=\sum_vQ_v(s)R_v(s)$. Its support is in $[X/4,4eX]$, and the same $k_1/k+k_2/(k+1)$ bound shows each coefficient has absolute value at most $1$. Multiplication by $J_D(n)$ gives exactly $$\frac1{2\pi}\int_{-D}^D X^{iu}\frac{3^{iu}-1}{iu}\sum_vQ_v(s+iu)R_v(s+iu)\,du.$$ The discrepancy from the restriction $[X,3X]$ has coefficient-square sum $O(X/D)$ by [F1]. Its support remains $[X/4,4eX]$, including the terms outside the original interval; no false claim that truncation errors are supported only on $[X,3X]$ is made. The accepted continuous mean-value estimate therefore bounds its $1$-line integral by $O(1/D)$, since $T\le X$. Combine with the square error above and $D\le P$. [given, F1, F2, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 Finally $\int_{-D}^D|(3^{iu}-1)/u|\,du\ll\log(2D)$, using $|3^{iu}-1|\le\min(2,|u|\log3)$. Weighted Cauchy–Schwarz in $u$ and ordinary Cauchy–Schwarz over the at most $C\log(2Q/P)$ bins bound the squared main integral. Integrate over $\mathcal T$; the integrand is measurable and bounded on the finite rectangle, so Fubini on the two finite Lebesgue interval spaces permits the interchange. Change $t$ to $t+u$ to obtain the claimed translated sets. This proves the result with both exact coprimality and all endpoint and out-of-interval errors accounted for. [given, F1, F2, F3, F4, F5, F6, F7, step 2.1, algebra] ∎
