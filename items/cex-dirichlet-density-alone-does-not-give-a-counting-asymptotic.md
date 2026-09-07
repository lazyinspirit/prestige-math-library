---
id: cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic
title: "Dirichlet density alone does not give a counting asymptotic"
kind: counterexample
status: draft
origin: pipeline
deps: [thm-riemann-zeta-continuation-to-the-right-half-plane, thm-euler-product-for-riemann-zeta, thm-primes-residue-class-dirichlet-density, cor-prime-number-theorem, thm-chebyshev-psi-prime-number-theorem-error]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a74.2 Definitions 4.3\u20134.4, Example 4.5; Exercise 4.5.3"
      url: https://kskedlaya.org/ant/chap-primes-in-ap.html
proof_strategy: direct argument
---

## Statement refuted

False inference: existence of a Dirichlet density forces an ordinary counting asymptotic with that density. Let
$$S=\bigcup_{k\ge0}([10^k,2\cdot10^k)\cap\mathbb N),\qquad S_{\mathbb P}=S\cap\mathbb P.$$
Both S among the positive integers and $S_{\mathbb P}$ among the primes have Dirichlet density $d=\log2/\log10$, but their relative counting ratios along $10^m$ and $2\cdot10^m$ tend respectively to $1/9$ and $5/9$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-riemann-zeta-continuation-to-the-right-half-plane]]: For every complex number $s$ with $\operatorname{Re}s>0$ and $s\ne1$, $\zeta(s)=\frac{s}{s-1}-s\int_1^\infty \{x\}x^{-s-1}\,dx,$ where $\{x\}=x-\lfloor x\rfloor$ is the fractional part. The integral defines a holomorphic function on $\operatorname{Re}s>0$, so the right-hand side is meromorphic there with a single simple pole at $s=1$ of residue $1$.

[F2] [[thm-euler-product-for-riemann-zeta]]: For every $s\in\mathbb C$ with $\operatorname{Re}s>1$, $\zeta(s)=\prod_p \frac{1}{1-p^{-s}},$ where the product ranges over the primes and converges absolutely and locally uniformly on $\operatorname{Re}s>1$.

[F3] [[thm-primes-residue-class-dirichlet-density]]: Let $q\ge1$ and $(a,q)=1$. Then the set of primes $p\equiv a\pmod q$ has relative Dirichlet density $1/\varphi(q)$ among the primes: $\sum_{\substack{p\equiv a\,(q)}}p^{-s} =\frac1{\varphi(q)}\log\frac1{s-1}+O(1)\qquad(s\downarrow1,\ s>1).$

[F4] [[cor-prime-number-theorem]]: As $x\to\infty$, $\pi(x)\sim x/\log x,\qquad\theta(x)\sim x,\qquad\psi(x)\sim x.$ These three asymptotic assertions are equivalent.

[F5] [[thm-chebyshev-psi-prime-number-theorem-error]]: There is an absolute $c>0$ such that for $x\ge2$, $\psi(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$

## Counterexample

1.1 Write $s=1+\epsilon>1$. For a decreasing function $t^{-s}$, the discrepancy between its sum and integral on the kth block is at most $10^{-ks}$. Summing these discrepancies is O(1) uniformly as $\epsilon\downarrow0$. The integrals form a geometric series, giving $\sum_{n\in S}n^{-s}=(1-2^{-\epsilon})/[\epsilon(1-10^{-\epsilon})]+O(1)$. Since $\epsilon\zeta(1+\epsilon)\to1$, the relative density is $\log2/\log10$. [F1, algebra]

1.2 For primes, the Euler logarithm gives $\sum_p p^{-s}=\log(1/\epsilon)+O(1)$: all terms of exponent at least two sum to at most $\sum_{n\ge2}\sum_{j\ge2}n^{-j}<\infty$, and the zeta pole determines its logarithm. Finite sets have zero relative density, and finite additivity for disjoint sets follows by taking limits of their finite sum identities. The established progression density theorem is an instance of this weighted limit; it does not itself supply an unweighted limit. [F1, F2, F3]

1.3 The quantitative psi theorem gives $\theta(x)=x+O(xe^{-c\sqrt{\log x}})$ by subtracting higher prime powers (at most $\sum_{j=2}^{\lfloor\log_2x\rfloor}x^{1/j}\log x=O(\sqrt x\log^2x)$). Summing the identity $1=\log p/\log x+\log p\int_p^xdt/(t\log^2t)$ and splitting at square root x then gives $\pi(x)=\operatorname{Li}(x)+E(x)$ with $E(x)=O(xe^{-c'\sqrt{\log x}})$; the constant $2/\log2$ is harmless here. On each decade block, Stieltjes integration by parts of $x^{-s}/\log x$ against $\theta(x)-x$, or of $x^{-s}$ against E, shows $$\sum_{p\in S}p^{-s}=\int_2^\infty w(\log x)\frac{x^{-s}}{\log x}\,dx+O(1),$$ uniformly for $1<s\le2$. Indeed all block endpoint errors are bounded by $C\sum_{k\ge1}e^{-c'\sqrt{k\log10}}$, and the interior errors by $C\int_2^\infty e^{-c'\sqrt{\log x}}dx/x$, both finite. Here w is the periodic indicator of $[0,\log2)$ modulo $\log10$; the first partial block changes only O(1). [F5, algebra]

2.1 Up to an endpoint error at most one, the counts at $10^m$ and $2\cdot10^m$ are respectively $(10^m-1)/9$ and $(10^{m+1}-1)/9$. Dividing by the two endpoints yields $1/9$ and $5/9$. Thus an integer counting asymptotic already fails despite the density limit. [step 1.1, algebra]

2.2 Set $y=\log x$. The primitive of $w(y)-d$ is bounded because its integral over a period is zero. Integration by parts against $e^{-\epsilon y}/y$ therefore bounds its contribution by O(1), uniformly as epsilon tends to zero. The mean contribution is $d\int_{\log2}^\infty e^{-\epsilon y}dy/y=d\log(1/\epsilon)+O(1)$: split at $1/\epsilon$ and substitute $\epsilon y$ on the tail. Combining with the prime denominator proves the claimed relative Dirichlet density. [step 1.2, step 1.3]

3.1 For the prime counting limits, fix J. At $X=10^m$, the last J completed blocks, indexed $k=m-j$ with $1\le j\le J$, have counts $\pi(2\cdot10^k)-\pi(10^k)\sim10^k/\log(10^k)$. Relative to $\pi(X)\sim X/\log X$, their limits sum to $\sum_{j=1}^J10^{-j}$. Earlier blocks contribute at most $\pi(10^{m-J})/\pi(10^m)\to10^{-J}$. Let J tend to infinity to get $1/9$. At $X=2\cdot10^m$, the current block contributes relative limit $1/2$, and the preceding blocks contribute $(1/2)\sum_{j\ge1}10^{-j}=1/18$, totaling $5/9$. Endpoints are composite for m positive, so they add no ambiguity. These unequal limits refute the inference for primes too. [F4, step 2.2] ∎
