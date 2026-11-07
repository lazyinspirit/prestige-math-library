---
id: thm-harman-minorant-prime-gap-growth-criterion
kind: theorem
title: "Harman–Maynard criterion from a prime minorant with smooth-modulus distribution"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps: [def-smooth-modulus-exponent-of-distribution, def-liminf-consecutive-prime-gap-hm, thm-maynard-simplex-growth-bound]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "R. C. Baker and A. J. Irving, Bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1505.01815v1"
      locator: "§1, Lemma 1; complete minorant application in §4"
    - title: "James Maynard, Small gaps between primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Definition (1.3), Theorem 1.1 and Proposition 4.1; multidimensional sieve weights"
---

## Statement

Fix $\xi>0$, $0<c_1<1$, and $\theta>0$. Suppose that for every sufficiently large real $x$ there is a real-valued function $\rho(n;x)$ supported on $x\le n\le2x$ such that (i) $\rho(n;x)\le1_{\mathbb P}(n)$ for every positive integer $n$, (ii) whenever $\rho(n;x)\ne0$, every prime factor of $n$ exceeds $x^\xi$, (iii) $\rho(\cdot;x)$ has exponent of distribution $\theta$ to squarefree smooth moduli, and (iv)
$$\sum_{x\le n\le2x}\rho(n;x)=\left(1-c_1+o(1)\right)\frac{x}{\log x}$$
as $x\to\infty$. Then for every real $c_0>2/(\theta(1-c_1))$ there is a constant $C_{c_0}>0$ such that, for all integers $m\ge1$,
$$H_m\le C_{c_0}\exp(c_0m),$$
where $H_m=\liminf_{n\to\infty}(p_{n+m}-p_n)$ for the increasing sequence of positive primes.

## Statement references

[[def-smooth-modulus-exponent-of-distribution|Exponent of distribution to squarefree smooth moduli]]

[[def-liminf-consecutive-prime-gap-hm|The limit-inferior prime-gap constants H_m]]

[[thm-maynard-simplex-growth-bound|Maynard’s logarithmic lower bound for M_k]]

[Baker–Irving, Lemma 1](https://arxiv.org/pdf/1505.01815v1)

[Maynard, Theorem 1.1 and Proposition 4.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf)

## Facts & Assumptions

**Given:** A minorant $\rho$, its smooth-modulus exponent $\theta$, its prime-factor cutoff $x^\xi$, its mass deficit $c_1$, and the prime-gap constants $H_m$.

[F1] [[def-smooth-modulus-exponent-of-distribution]]: exponent $\theta$ means an arbitrary fixed logarithmic saving in the averaged discrepancy over squarefree $x^\delta$-smooth moduli up to $x^{\theta-\varepsilon}$ for a suitable $\delta(\varepsilon)>0$.

[F2] [[def-liminf-consecutive-prime-gap-hm]]: $H_m=\liminf_{n\to\infty}(p_{n+m}-p_n)$, with the limit inferior in $[0,+\infty]$.

[F3] [[thm-maynard-simplex-growth-bound]]: for all sufficiently large integers $k$, $M_k>\log k-2\log\log k-2$ for Maynard's simplex variational quantity.

## Proof obligation

Baker–Irving reduce the claim to a modified multidimensional-sieve asymptotic with one prime minorant factor. Their Lemma 14 says its proof is “almost identical” to Polymath's §§4.3–4.4; a full local derivation of those weighted asymptotics, pre-sieving, detection inequality, and enlarged-support comparison has not been supplied. The source statement and exact hypotheses are retained, but the theorem remains escalated.
