---
id: thm-divisor-function-subpolynomial-bound
kind: theorem
title: "The divisor-counting function is subpolynomial"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-divisor-counting-function, thm-canonical-prime-factorisation, def-p-adic-valuation, lem-p-adic-valuation-basic, def-divides-in-z, lem-divisibility-basic, def-real-power, thm-real-power-laws, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, thm-exponential-beats-every-polynomial, lem-convergent-implies-bounded]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§2, discussion preceding the truncated Voronoï formula, printed pp. 49–50"
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§3, the divisor estimate used in the circle argument"
verification:
  precheck: pending
---

## Statement

For every real $\varepsilon>0$ there is a constant $C_\varepsilon>0$ such that, for every positive integer $n$, the number $d(n)$ of positive divisors of $n$ satisfies
$$d(n)\le C_\varepsilon n^\varepsilon.$$

## Statement references

[Ivić, Chapter 3, §2, discussion preceding the truncated formula](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

[Miller and Schmid, §3](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** A positive integer $n$ and a real $\varepsilon>0$.

[F1] [[def-divisor-counting-function]]: $d(n)=\tau(n)$ is the number of positive integer divisors of $n$.

[F2] [[thm-canonical-prime-factorisation]]: $n$ has a finite injective list of prime divisors $p_0,\ldots,p_{r-1}$ and exponents $a_i=v_{p_i}(n)$ such that $n=\prod_{i<r}p_i^{a_i}$; the list covers every prime divisor and the exponent vector is determined by the integer.

[F3] [[def-p-adic-valuation]] and [[lem-p-adic-valuation-basic]]: for a prime $p$ and positive integer $m$, $v_p(m)$ is the greatest $k\in\mathbb N$ with $p^k\mid m$, and $p^k\mid m$ exactly when $k\le v_p(m)$.

[F4] [[def-divides-in-z]] and [[lem-divisibility-basic]]: $a\mid b$ means $b=ac$ for an integer $c$, and divisibility is transitive.

[F5] [[def-real-power]] and [[thm-real-power-laws]]: for $u>0$ and $s\in\mathbb R$, $u^s=\exp(s\log u)$ and $(u^s)^t=u^{st}$.

[F6] [[thm-natural-logarithm-laws]] and [[thm-exponential-is-strictly-increasing]]: both $\log$ and $\exp$ are strictly increasing. Hence $u\mapsto u^s=\exp(s\log u)$ is increasing for every $s>0$.

[F7] [[thm-exponential-beats-every-polynomial]] and [[lem-convergent-implies-bounded]]: if $c>0$, then $(a+1)\exp(-ca)\to0$ as the natural number $a\to\infty$, and this sequence is bounded.

## Proof

1.1 Choose the factorization from [F2], writing $n=\prod_{i<r}p_i^{a_i}$. If $m$ is a positive divisor of $n$, every prime divisor $q$ of $m$ also divides $n$ by [F4], so it is one of the listed $p_i$. Apply [F2] to $m$ using that same covering list to write $m=\prod_{i<r}p_i^{b_i}$. From $p_i^{b_i}\mid m\mid n$, [F3] gives $0\le b_i\le a_i$. The uniqueness clause in [F2] makes the exponent vector unique, so the map from positive divisors to vectors $(b_i)$ is injective and
$$d(n)\le\prod_{i<r}(a_i+1).$$ [F1, F2, F3, F4, given, choose]

2.1 Put $P:=2^{2/\varepsilon}$. For every natural $a$, $a+1\le2^a$: equality holds at $a=0$, and if it holds at $a$ then $2^{a+1}\ge2a+2\ge a+2$. Every listed prime satisfies $p_i\ge2$. If $a_i=0$, then $p_i^{\varepsilon a_i/2}=1$; if $a_i>0$, [F6] gives $p_i^{\varepsilon a_i/2}\ge1$. Thus in either case, by [F5], $p_i^{\varepsilon a_i}=(p_i^{\varepsilon a_i/2})^2\ge p_i^{\varepsilon a_i/2}$. If $p_i\ge P$, monotonicity in the base from [F6] and the exponent law [F5] give $p_i^{\varepsilon/2}\ge P^{\varepsilon/2}=2$, hence $p_i^{\varepsilon a_i/2}\ge2^{a_i}$. Therefore $a_i+1\le2^{a_i}\le p_i^{\varepsilon a_i/2}\le p_i^{\varepsilon a_i}$. [F2, F5, F6, given, algebra, induction]

3.1 Fix a prime $p<P$. Then $c:=(\varepsilon/2)\log p>0$ by [F6], and [F5] gives $p^{\varepsilon a/2}=\exp(ca)$. By [F7], the sequence $(a+1)/p^{\varepsilon a/2}$ is bounded; choose $C_{p,\varepsilon}\ge1$ with $a+1\le C_{p,\varepsilon}p^{\varepsilon a/2}$ for every natural $a$. There are only finitely many primes $p<P$, since they lie among the finitely many positive integers below $P$. Multiplying the finitely many constants for these small primes gives a finite $C_\varepsilon:=\prod_{p<P}C_{p,\varepsilon}$, with empty product $1$. [F5, F6, F7, given, choose]

4.1 In the product in step 1.1, each listed prime occurs at most once. For a prime at least $P$, step 2.1 bounds its factor by $p_i^{\varepsilon a_i}$; for a prime below $P$, step 3.1 bounds its factor by $C_{p_i,\varepsilon}p_i^{\varepsilon a_i/2}$, and step 2.1's comparison $p_i^{\varepsilon a_i/2}\le p_i^{\varepsilon a_i}$ applies to every listed prime. The small-prime constants multiply to at most $C_\varepsilon$. Therefore
$$d(n)\le C_\varepsilon\prod_{i<r}p_i^{\varepsilon a_i}=C_\varepsilon n^\varepsilon,$$
which proves the claim. [F2, step 1.1, step 2.1, step 3.1, algebra] ∎
