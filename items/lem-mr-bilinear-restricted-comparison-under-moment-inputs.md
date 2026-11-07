---
id: lem-mr-bilinear-restricted-comparison-under-moment-inputs
kind: lemma
title: "Restricted bilinear comparison under explicit moment and long-average inputs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - lem-mr-trapezoidal-mellin-kernel
  - thm-cauchy-schwarz-finite
justified_by: []
aliases: []
sources:
  references:
    - title: "Matomäki and Radziwiłł, Multiplicative Functions in Short Intervals, §10, proof of Theorem 4"
      url: "https://arxiv.org/pdf/1501.04585v4"
---

## Statement

Let $N\ge10$, $x=N^2$, $N\le H_1\le H_2\le x/8$, $T_0\ge1$, and $T_0\le x/H_2$. Let $(a_n)_{n\ge1}$ be a real sequence with $|a_n|\le1$. In particular, it may be $a_n=f(n)\mathbf1_S(n)$ for a multiplicative $f:\mathbb N\to[-1,1]$ and a specified set $S$ of positive integers. Define
$$M_1(s)=\sum_{N\le n\le2N}\frac{a_n}{n^s},\qquad M_2(s)=\sum_{N/3\le n\le3N}\frac{a_n}{n^s},\qquad A=\frac1N\sum_{N\le n\le2N}a_n,$$
$$B(H)=\sum_{\substack{N\le n_1\le2N\\x\le n_1n_2\le x+H}}a_{n_1}a_{n_2}.$$
All sums are over positive integers with closed endpoints. Suppose there is $E\ge0$ such that for $i=1,2$ and every real $T\ge T_0$,
$$(\mathrm M)\qquad\int_{T_0}^{T}|M_i(1+it)|^2\,dt\le E(1+TH_1/x).$$
For each $0<\delta\le1/4$, there is an absolute implied constant in
$$\left|\frac{B(H_1)}{H_1}-\frac{B(H_2)}{H_2}\right|\ll\delta+\frac N{H_1}+\frac{T_0^2H_2}{x}+\frac E\delta.$$
If, additionally, a number $L\ge0$ satisfies both long-average conditions
$$(\mathrm L_1)\qquad\left|\sum_{x/n\le m\le(x+H_2)/n}a_m-A\frac{H_2}{n}\right|\le L\frac{H_2}{n}\quad\text{for every integer }N\le n\le2N,$$
$$(\mathrm L_2)\qquad\left|\sum_{N\le n\le2N}\frac{a_n}{n}-A\log2\right|\le L,$$
then
$$\frac{B(H_1)}{H_1\log2}=A^2+O\left(\delta+\frac N{H_1}+\frac{T_0^2H_2}{x}+\frac E\delta+L\right).$$
The conclusion is conditional on (M), and the square-mean conclusion is also conditional on both (L) conditions. This statement does not assert these conditions for restricted multiplicative functions.

## Statement references

[[lem-mr-trapezoidal-mellin-kernel]]

[Matomäki–Radziwiłł, §10, printed pp. 31–33; Proposition 1, printed p. 23; Lemmas 4–5, printed pp. 13–15](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** All parameters, the sequence and the moment hypothesis (M) in the Statement; assume (L1) and (L2) only for the final square-mean assertion.

[F1] The locally proved one-sided trapezoidal Mellin formula and bounds: [[lem-mr-trapezoidal-mellin-kernel]].

[F2] The real finite-sum Cauchy–Schwarz inequality: [[thm-cauchy-schwarz-finite]]. For continuous nonnegative $u,v$ on a compact interval, apply it to uniform Riemann sums and pass to their limits to obtain $\int uv\le(\int u^2)^{1/2}(\int v^2)^{1/2}$. No measurable-function extension is needed here.

## Proof

1.1 For $j=1,2$, set $v_j=H_j/x$, $\xi_j=\delta v_j$, and let $\eta_j,K_j$ be the one-sided cutoff and transform in F1. Put $S_j=\sum_{N\le n_1\le2N}\sum_{N/3\le n_2\le3N}a_{n_1}a_{n_2}\eta_j(n_1n_2/x)$. On the cutoff support $n_2\in[(1-\delta v_j)N/2,(1+(1+\delta)v_j)N]\subset[N/3,3N]$, so this $n_2$ range loses no nonzero summand. It also contains every term of $B(H_j)$. The two ramps each have product-width $\delta H_j$. For fixed $n_1$, the number of integers in such a segment is at most $\delta H_j/n_1+1$. There are at most $N+1$ choices of $n_1$, and $\sum_{N\le n\le2N}1/n\le2$. Since the weights have modulus at most one, $|S_j-B(H_j)|\le C(\delta H_j+N)$ with an absolute $C$. [F1, given, algebra]

2.1 Finite summation of the absolutely convergent inversion integrals gives $S_j=(2\pi)^{-1}\int_{\mathbb R}M_1(1+it)M_2(1+it)x^{1+it}K_j(1+it)\,dt$. Indeed, both polynomials have uniformly bounded modulus on this line: their absolute coefficient sums are at most $2$ and $9$, respectively, by counting terms and using the smallest allowed denominator. The $t^{-2}$ bound of F1 makes each integral absolutely convergent. Thus splitting into $|t|\le T_0$ and $|t|>T_0$ is legitimate; call these parts $U_j$ and $V_j$. [F1, step 1.1, algebra]

3.1 In $U_j/H_j$, replace $K_j(1+it)$ by $(1+\delta)H_j/x$. The resulting expression $(1+\delta)(2\pi)^{-1}\int_{-T_0}^{T_0}M_1(1+it)M_2(1+it)x^{it}\,dt$ is independent of $j$. The error has modulus at most $C(x/H_j)\int_{-T_0}^{T_0}|t|v_j^2\,dt\le C T_0^2H_j/x$, by the polynomial bounds in step 2.1 and F1. Subtracting therefore gives $|U_1/H_1-U_2/H_2|\le C T_0^2H_2/x$. [F1, step 2.1, algebra]

3.2 For $j=1,2$ put $R_j=x/H_j\ge T_0$. By F2 and (M), $\int_{T_0}^{R_j}|M_1M_2|(1+it)\,dt\le E(1+R_jH_1/x)\le2E$. Here and below $|M_1M_2|(1+it)$ means $|M_1(1+it)M_2(1+it)|$. On this segment F1 gives $(x/H_j)|K_j(1+it)|\le C$, so this part of $V_j/H_j$ is at most $CE$. Real coefficients give $M_i(1-it)=\overline{M_i(1+it)}$ and $K_j(1-it)=\overline{K_j(1+it)}$, so the negative-frequency contribution has the same bound. [F1, F2, given, step 2.1, algebra]

4.1 On the dyadic segment $[2^kR_j,2^{k+1}R_j]$ for $k\ge0$, F2 and (M) give $\int|M_1M_2|\le E(1+2^{k+1}R_jH_1/x)$. The last kernel bound of F1 gives $(x/H_j)|K_j(1+it)|\le C R_j^2/(\delta t^2)\le C\delta^{-1}2^{-2k}$. Consequently the sum of the positive tails is at most $CE\delta^{-1}\sum_{k\ge0}(2^{-2k}+2^{1-k}H_1/H_j)\le CE/\delta$. The explicit geometric series converges; the finite partial bounds and absolute convergence from step 2.1 justify the improper limit. Negative tails have equal modulus bounds by step 3.1. Hence $|V_j/H_j|\le CE/\delta$. [F1, F2, given, step 2.1, step 3.2, algebra]

5.1 Combine steps 3.1 and 4.1, and then remove smoothing by step 1.1. Since $H_2\ge H_1$ and $\delta\le1/4$, this gives the first asserted comparison, with error $C(\delta+N/H_1+T_0^2H_2/x+E/\delta)$. This part has used neither long-average condition. [step 1.1, step 3.1, step 4.1, algebra]

6.1 Now assume both long-average conditions in the Statement. Summing the first against $a_n/H_2$ gives $B(H_2)/H_2=A\sum_{N\le n\le2N}a_n/n+O(L\sum_{N\le n\le2N}1/n)=A^2\log2+O(L)$ by the second condition, because $|A|\le(N+1)/N\le2$ and the harmonic sum is at most $2$. Apply step 5.1 and divide by the positive absolute constant $\log2$. This proves the second assertion with precisely the additional assumptions stated. [given, step 5.1, algebra] ∎

## Remarks

For the intended application $H_1=h\sqrt{x}$, the arithmetic endpoint error is $N/H_1=1/h$. Enlarging the second polynomial's range to $[N/3,3N]$ ensures no support loss on either smoothing ramp. Obtaining (M) for this polynomial from dyadic restricted estimates requires a common globally defined set $S$, compatible scale choices, and a finite decomposition of that entire range. The published proposition cannot simply be declared to apply to a new range or a newly defined scale-dependent set. These are outstanding analytic inputs, not conclusions of this draft.
