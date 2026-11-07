---
id: thm-stadlmann-bounded-many-prime-gap-growth
kind: theorem
title: "Stadlmann’s bound H_m≪exp(3.8075m)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps: [thm-stadlmann-harman-prime-minorant, thm-harman-minorant-prime-gap-growth-criterion, def-liminf-consecutive-prime-gap-hm, def-smooth-modulus-exponent-of-distribution]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "Theorem 2 and §2.2.1, printed pp. 3 and 9–10"
    - title: "R. C. Baker and A. J. Irving, Bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1505.01815v1"
      locator: "§1, Lemma 1"
---

## Statement

For every integer $m\ge1$, the prime-gap constant $H_m=\liminf_{n\to\infty}(p_{n+m}-p_n)$ satisfies
$$H_m\ll\exp(3.8075m).$$

## Statement references

[[def-liminf-consecutive-prime-gap-hm|The limit-inferior prime-gap constants H_m]]

[[thm-stadlmann-harman-prime-minorant|Stadlmann's explicit Harman prime minorant]]

[[thm-harman-minorant-prime-gap-growth-criterion|Harman–Maynard growth criterion from a prime minorant]]

[Stadlmann, Theorem 2](https://arxiv.org/pdf/2309.00425v3)

## Facts & Assumptions

**Given:** The prime-gap constants, the explicit prime minorant, and the general minorant growth criterion.

[F1] [[thm-stadlmann-harman-prime-minorant]]: the explicit real-valued function satisfies $\rho(n;x)\le1_{\mathbb P}(n)$ for every positive integer $n$; on $[x,2x]$ its nonzero values have all prime factors at least $x^{0.19038}$, it has smooth-modulus exponent $\theta=0.5253$, and its mass is at least $(1-2\cdot10^{-5}+o(1))x/\log x$.

[F2] [[thm-harman-minorant-prime-gap-growth-criterion]]: these hypotheses imply $H_m\ll_{c_0}\exp(c_0m)$ for every $c_0>2/(\theta(1-c_1))$.

[F3] [[def-smooth-modulus-exponent-of-distribution]]: multiplying the sequence by a scalar depending only on $x$ and lying in $[0,1]$ preserves its exponent of distribution, since every progression discrepancy is multiplied by that scalar.

## Proof

1.1 Put $X=x/\log x$, $S(x)=\sum_{x\le n\le2x}\rho(n;x)$, and $c_1=3\cdot10^{-5}$. By [F1], for all sufficiently large $x$ the asymptotic error is greater than $-5\cdot10^{-6}$, so $S(x)\ge(1-2.5\cdot10^{-5})X>(1-c_1)X>0$. Define $t_x=(1-c_1)X/S(x)$ and $\widetilde\rho(n;x)=t_x\rho(n;x)1_{[x,2x]}(n)$. Then $0<t_x<1$, the new sequence is supported on $[x,2x]$, and its mass is exactly $(1-c_1)X$. [given, F1, choose, algebra]

1.2 Write $3.8075=1523/400$, $0.5253=5253/10000$, and $1-c_1=99997/100000$. Then $$3.8075\cdot0.5253\cdot(1-c_1)=\frac{800007899043}{400000000000}>2,$$ so $3.8075>2/(0.5253(1-c_1))$. [given, algebra]

2.1 The cutoff and minorant properties in [F1] pass to $\widetilde\rho$: outside $[x,2x]$ it is zero, while inside it is a scalar in $(0,1)$ times $\rho$; because $t_x>0$, its nonzero values inside the interval occur at exactly the original nonzero values, so the prime-factor cutoff persists. If $\rho\le0$ then $\widetilde\rho\le0$, and if $0<\rho\le1_{\mathbb P}$ then $\widetilde\rho\le1_{\mathbb P}$; outside the interval $0\le1_{\mathbb P}$. Its exponent of distribution remains $0.5253$ by [F3], because each interval discrepancy is multiplied by $t_x\le1$. Since $x^{0.19038}>x^{0.19}$ for $x>1$, [F2] applies with $\xi=0.19$, $\theta=0.5253$, and $c_1=3\cdot10^{-5}$. [F1, F2, F3, step 1.1, algebra]

3.1 By [F2] with $c_0=3.8075$, the normalized minorant gives $H_m\ll\exp(3.8075m)$ for every integer $m\ge1$. [F1, F2, step 1.1, step 2.1, step 1.2, algebra] ∎

## Proof status

The local normalization and parameter application are complete. The explicit minorant and generic criterion are the declared inputs to this complete local deduction; their own proofs are separate obligations and are not asserted here.
