---
id: lem-menon-arbitrary-width-bin-factorization
kind: lemma
title: "Matching-endpoint short-bin factorization at arbitrary admitted width"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
axiom_use: "Finite sums and integrals on finitely many compact intervals are used."
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-ramare-short-bin-factorization-without-frequency-shifts, thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials, thm-canonical-prime-factorisation, thm-cauchy-schwarz-finite]
sources:
  references:
    - title: "Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals"
      url: "https://arxiv.org/pdf/2607.15574v1"
      locator: "Proposition 3.1 proof, equations (3.4), (3.6), (3.7); extracted local matching-endpoint argument."
---

## Statement

Let $X\ge10$, $3\le P<Q\le3X$, $1\le T\le X$, $2\le c\le3$, and $1\le H\le X$. Let $|a_n|,|b_m|,|c_p|\le1$ and $a_{mp}=b_mc_p$ whenever $p\nmid m$ and $p\in[P,Q]$. Let $\omega(m)$ count distinct prime divisors in $[P,Q]$. Set
$$F(s)=\sum_{\substack{X\le n\le cX\\\omega(n)>0}}a_nn^{-s},\quad Q_v(s)=\sum_{\substack{p\in[P,Q]\\e^{v/H}\le p<e^{(v+1)/H}}}c_pp^{-s},\quad R_v(s)=\sum_{Xe^{-v/H}\le m\le cXe^{-v/H}}\frac{b_m}{1+\omega(m)}m^{-s},$$
where the sum over $v$ includes only nonempty prime bins. For every finite union $E\subset[-T,T]$ of compact intervals and isolated points,
$$\int_E|F(1+it)|^2dt\ll H\log(2Q/P)\sum_v\int_E|Q_v(1+it)R_v(1+it)|^2dt+H^{-1}+P^{-1}.$$
The implied constant is absolute. No bin smallness hypothesis is assumed.

## Statement references

[Menon, Proposition 3.1 proof, equations (3.4), (3.6), (3.7)](https://arxiv.org/pdf/2607.15574v1)

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] The short-bin factorization compares $F$ with $\sum_vQ_vR_v$, with coefficient error confined to endpoint bands and prime-square multiples. [[lem-ramare-short-bin-factorization-without-frequency-shifts]]

[F2] The continuous mean square of a Dirichlet polynomial is $O((N+U)\sum|d_n|^2)$ on any interval of length $U\ge2$. [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[F3] Positive integers have unique prime factorization. [[thm-canonical-prime-factorisation]]

[F4] Finite Cauchy–Schwarz applies to absolute values. [[thm-cauchy-schwarz-finite]]

## Proof

1.1 By translating $t$, [F2] applies on $[-T,T]$ with $U=2T$. [F2, given, algebra]

1.2 Put $G(s)=\sum_vQ_v(s)R_v(s)$. We give the endpoint extension of [F1] for $c\in[2,3]$. Every product $pm$ in $G$ lies in $[X,cXe^{1/H}]$. For $k=\omega(n)>0$, divide its prime divisors in $[P,Q]$ into $k_1$ occurring to exponent one and $k_2$ occurring to exponent at least two. The absolute coefficient majorant in $G$ is at most $k_1/k+k_2/(k+1)\le1$, by [F3]. If $Xe^{1/H}<n\le cX$ and none of those primes occurs squared, every $p\mid n$ from its bin has $Xe^{-v/H}\le n/p\le cXe^{-v/H}$, and each contributes $a_n/k$ by the given relation. Thus the coefficient equals $a_n$ at these interior integers; if $\omega(n)=0$, both coefficients vanish. [F1, F3, given, algebra]

2.1 Consequently $F-G$ has coefficients bounded by two, supported on the endpoint bands $[X,Xe^{1/H}]$, $[cX,cXe^{1/H}]$ and the integers $n\le cX$ divisible by some $p^2$, $p\ge P$. The bands contain $O(X/H+1)=O(X/H)$ integers, because $H\le X$. The square-divisible set has at most $cX\sum_{k\ge\lceil P\rceil}k^{-2}\ll X/P$ integers, by comparison with the integral of $u^{-2}$. Every nonzero error coefficient is at an index between $X$ and $ceX$, so its coefficient square norm after the $n^{-1}$ weight is $O((H^{-1}+P^{-1})/X)$. Apply [F2] with $N=\lceil ceX\rceil$, $U=2T$, as in step 1.1, to obtain $\int_{\mathcal E}|F-G|^2\ll H^{-1}+P^{-1}$. [F2, step 1.1, step 1.2, given, algebra]

3.1 There are $O(H\log(2Q/P))$ nonempty bins. Finite Cauchy–Schwarz on their sum, followed by $|F|^2\le2|G|^2+2|F-G|^2$, gives $$\int_{\mathcal E}|F(1+it)|^2dt\ll H\log(2Q/P)\sum_v\int_{\mathcal E}|Q_v(1+it)R_v(1+it)|^2dt+H^{-1}+P^{-1}.$$ This uses precisely the same coefficient comparison as [F1], with the upper endpoint $cX$ used in both polynomials. All integrals are over finitely many intervals. [F1, F4, step 1.2, step 2.1, algebra] ∎
