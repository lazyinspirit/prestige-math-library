---
id: lem-menon-first-prime-frequency-bound
kind: lemma
title: "First prime-frequency bound at Menon's small exponent"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - lem-ramare-short-bin-factorization-without-frequency-shifts
  - thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
  - thm-canonical-prime-factorisation
  - thm-cauchy-schwarz-finite
sources:
  references:
    - title: "Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals"
      url: "https://arxiv.org/pdf/2607.15574v1"
      locator: "Proposition 3.1 proof, equations (3.4), (3.6), (3.7), printed pp. 26–27; adapted with matching support endpoints and explicit alpha dependence"
axiom_use: "None; all sums and frequency interval decompositions are finite."
---

## Statement

Let $X\ge10$, $3\le P<Q\le3X$, $1\le T\le X$, $2\le c\le3$, and fix $0<\alpha<1/2$. Let $|a_n|,|b_m|,|c_p|\le1$, with $a_{mp}=b_mc_p$ whenever $p\nmid m$ and $p\in[P,Q]$. Let $\omega(m)$ count distinct prime divisors in $[P,Q]$. Put
$$D=(\log(2Q))^{1/3}P^{-2\alpha/3},\qquad H=\max\{1,D^{-1}\},\qquad F(s)=\sum_{\substack{X\le n\le cX\\\omega(n)>0}}a_nn^{-s}.$$
Index by the integers $v$ for which $[e^{v/H},e^{(v+1)/H})\cap[P,Q]$ contains a prime, and set
$$Q_v(s)=\sum_{\substack{p\in[P,Q]\\e^{v/H}\le p<e^{(v+1)/H}}}c_pp^{-s},\qquad R_v(s)=\sum_{Xe^{-v/H}\le m\le cXe^{-v/H}}\frac{b_m}{1+\omega(m)}m^{-s}.$$
Suppose $\mathcal E\subset[-T,T]$ is a finite union of compact intervals and isolated points and every bin satisfies $|Q_v(1+it)|\le e^{-\alpha v/H}$ on $\mathcal E$. Then
$$\int_{\mathcal E}|F(1+it)|^2dt\ll_\alpha\left(1+\frac{TQ}{X}\right)\frac{(\log(2Q))^{1/3}}{P^{2\alpha/3}}+\frac1P.$$
The constant depends only on $\alpha$. In particular, for $\alpha=(\varepsilon-3\eta)/2>0$, the denominator is $P^{\varepsilon/3-\eta}$, as in Menon's first frequency regime. This lemma makes no claim on the other frequency regimes.

## Facts & Assumptions

**Given:** The data, algebraic coefficient relation, and bin bounds in the Statement.

[F1] For support $[X,2X]$, the short-bin factorization compares $F$ with $\sum_vQ_vR_v$, with coefficient error confined to endpoint bands and integers divisible by a prime square. Its square-integral error is $O(H^{-1}+P^{-1})$ for $H\le X$, $T\le X$. We extend its endpoint argument explicitly below. [[lem-ramare-short-bin-factorization-without-frequency-shifts]]

[F2] For a polynomial $\sum_{n\le N}d_nn^{-it}$ and $U\ge2$, its integral square on $[0,U]$ is $O((N+U)\sum|d_n|^2)$, with an absolute constant. [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[F3] Positive integers have unique prime factorizations. [[thm-canonical-prime-factorisation]]

[F4] For real finite sums, Cauchy–Schwarz gives $(\sum_{j=1}^r x_j)^2\le r\sum_{j=1}^r x_j^2$. Applied to $x_j=|z_j|$ after the triangle inequality, this yields $|\sum z_j|^2\le r\sum|z_j|^2$. [[thm-cauchy-schwarz-finite]]

## Proof

1.1 We have $1\le H\le X$: indeed $D^{-1}=P^{2\alpha/3}/(\log(2Q))^{1/3}\le(3X)^{1/3}<X$. Translating $t$ by $T$ multiplies each coefficient of a Dirichlet polynomial by a unit complex number, so [F2] applies on $[-T,T]$ with $U=2T$. Also $\sum_{X\le n\le cX}|a_n/n|^2\ll X^{-1}$, giving $\int_{-T}^T|F(1+it)|^2dt\ll1+T/X$. If $D\ge1$, this is already bounded by the claimed right side. Henceforth $D<1$, so $H=D^{-1}$. [F2, given, algebra]

1.2 Put $G(s)=\sum_vQ_v(s)R_v(s)$. We give the endpoint extension of [F1] for $c\in[2,3]$. Every product $pm$ in $G$ lies in $[X,cXe^{1/H}]$. For $k=\omega(n)>0$, divide its prime divisors in $[P,Q]$ into $k_1$ occurring to exponent one and $k_2$ occurring to exponent at least two. The absolute coefficient majorant in $G$ is at most $k_1/k+k_2/(k+1)\le1$, by [F3]. If $Xe^{1/H}<n\le cX$ and none of those primes occurs squared, every $p\mid n$ from its bin has $Xe^{-v/H}\le n/p\le cXe^{-v/H}$, and each contributes $a_n/k$ by the given relation. Thus the coefficient equals $a_n$ at these interior integers; if $\omega(n)=0$, both coefficients vanish. [F1, F3, given, algebra]

2.1 Consequently $F-G$ has coefficients bounded by two, supported on the endpoint bands $[X,Xe^{1/H}]$, $[cX,cXe^{1/H}]$ and the integers $n\le cX$ divisible by some $p^2$, $p\ge P$. The bands contain $O(X/H+1)=O(X/H)$ integers, because $H\le X$. The square-divisible set has at most $cX\sum_{k\ge\lceil P\rceil}k^{-2}\ll X/P$ integers, by comparison with the integral of $u^{-2}$. Every nonzero error coefficient is at an index between $X$ and $ceX$, so its coefficient square norm after the $n^{-1}$ weight is $O((H^{-1}+P^{-1})/X)$. Apply [F2] with $N=\lceil ceX\rceil$, $U=2T$, as in step 1.1, to obtain $\int_{\mathcal E}|F-G|^2\ll H^{-1}+P^{-1}$. [F2, step 1.1, step 1.2, given, algebra]

3.1 There are $O(H\log(2Q/P))$ nonempty bins. Finite Cauchy–Schwarz on their sum, followed by $|F|^2\le2|G|^2+2|F-G|^2$, gives $$\int_{\mathcal E}|F(1+it)|^2dt\ll H\log(2Q/P)\sum_v\int_{\mathcal E}|Q_v(1+it)R_v(1+it)|^2dt+H^{-1}+P^{-1}.$$ This uses precisely the same coefficient comparison as [F1], with the upper endpoint $cX$ used in both polynomials. All integrals are over finitely many intervals. [F1, F4, step 1.2, step 2.1, algebra]

4.1 Write $Y_v=Xe^{-v/H}\ge X/Q\ge1/3$. Since $R_v$ is supported in $[Y_v,cY_v]$, its coefficient square norm on the $1$-line is $O(Y_v^{-1})$. For $Y_v\ge1$ this follows by counting $O(Y_v)$ terms bounded by $Y_v^{-2}$; for $1/3\le Y_v<1$ it follows by counting the at most three possible integers directly. Therefore [F2], with $N=\max\{1,\lceil cY_v\rceil\}=O(Y_v)$, gives $\int_{-T}^T|R_v(1+it)|^2dt\ll1+T/Y_v\ll1+TQ/X$. The bin hypothesis, enlargement of a nonnegative integral, and step 3.1 now give $$\int_{\mathcal E}|F|^2\ll H\log(2Q/P)(1+TQ/X)\sum_v e^{-2\alpha v/H}+H^{-1}+P^{-1}.$$ [F2, step 1.1, step 3.1, given, algebra]

5.1 A nonempty bin has $v>H\log P-1$. The geometric series majorant therefore gives $$\sum_v e^{-2\alpha v/H}\le\frac{e^{2\alpha/H}P^{-2\alpha}}{1-e^{-2\alpha/H}}\ll_\alpha HP^{-2\alpha}.$$ For completeness, with $u=2\alpha/H\le1$, $1-e^{-u}=\int_0^u e^{-w}dw\ge u/e$, which proves the uniform bound in $H$. Since $\log(2Q/P)\le\log(2Q)$ and $H=D^{-1}$, we have $H^2\log(2Q)P^{-2\alpha}=D$ and $H^{-1}=D$. Substitute in step 4.1, and combine with the $D\ge1$ case in step 1.1. This is the asserted estimate. [step 1.1, step 4.1, given, algebra] ∎

## Authoring scope

This supplies the first-range estimate (3.4), with the harmless equivalent $\log(2Q)$ in place of $\log Q$, for every fixed positive Menon exponent. It neither proves the parameter summation for (3.5) nor estimates the residual set $\mathcal U$. It cannot yet supply Proposition 3.1 or the parent theorem.
