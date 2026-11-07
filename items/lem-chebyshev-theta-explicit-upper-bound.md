---
id: lem-chebyshev-theta-explicit-upper-bound
kind: lemma
title: "An explicit upper bound for Chebyshev's theta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-chebyshev-theta-function
  - lem-central-binomial-coefficient-prime-valuation
  - thm-binomial-theorem
  - thm-binomial-closed-formula
  - thm-fundamental-theorem-of-arithmetic
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "K. Soundararajan, Quantum Unique Ergodicity for the modular surface"
      url: "https://arxiv.org/pdf/0901.4060v1"
      locator: "§3, use of the Chebyshev upper bound; the primorial argument is proved in thm-chebyshev-theta-linear-bounds, proof step 1.1."
    - title: "Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, Arizona Winter School lecture notes"
      url: "https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf"
      locator: "§§1–2, pp. 8–12: elementary Chebyshev theta bounds."
---

## Statement

For every real $x\ge2$, Chebyshev's theta function
$$\theta(x)=\sum_{p\le x}\log p$$
satisfies
$$\theta(x)\le2x\log2.$$

## Statement references

[K. Soundararajan, Quantum Unique Ergodicity for the modular surface, §3, printed pp. 5–6.](https://arxiv.org/pdf/0901.4060v1)

[Manfred Einsiedler, Arithmetic Quantum Unique Ergodicity, §§1–2, pp. 8–12.](https://swc-math.github.io/aws/2010/2010EinsiedlerLectureNotes1.pdf)

## Facts & Assumptions

**Given:** A real number $x\ge2$.

[F1] For every integer $n\ge1$, each prime $p$ with $n<p\le2n$ divides $\binom{2n}{n}$ ([[lem-central-binomial-coefficient-prime-valuation]]).

[F2] $\sum_{k=0}^{N}\binom Nk=2^N$ for every natural $N$ ([[thm-binomial-theorem]]).

[F3] The binomial coefficient has its factorial formula, so
$\binom{2m+2}{m+1}=2\binom{2m+1}{m}$ and
$\binom{2m+1}{m}=\binom{2m+1}{m+1}$ ([[thm-binomial-closed-formula]]).

[F4] Every positive integer has a unique factorization into primes ([[thm-fundamental-theorem-of-arithmetic]]).

[F5] $\theta(x)=\sum_{p\le x}\log p$; $\log$ is increasing, satisfies $\log(ab)=\log a+\log b$, and $\log4=2\log2>0$ ([[def-chebyshev-theta-function]], [[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 For real $t\ge2$, put $P(t)=\prod_{p\le t}p$, a finite nonempty product. We first prove $P(n)\le4^{n-1}$ for every integer $n\ge2$ by induction. It holds at $n=2$, since $P(2)=2\le4$. If $n\ge3$ is composite, let $q<n$ be the largest prime at most $n$; then $P(n)=P(q)\le4^{q-1}\le4^{n-1}$ by the induction hypothesis. If $n=q$ is an odd prime, write $q=2m+1$. Then $$P(q)=P(m+1)\prod_{m+1<p\le2m+1}p.$$ For each prime in the latter product, $m+1<p\le2(m+1)$, so [F1] gives $p\mid\binom{2m+2}{m+1}=2\binom{2m+1}{m}$. Since $p\ge3$, $p$ is coprime to $2$, and therefore divides $\binom{2m+1}{m}$. The primes are pairwise coprime, so [F4] implies their product divides that binomial coefficient. By [F2] and the equal middle terms in [F3], $$2\binom{2m+1}{m}\le2^{2m+1},\qquad \binom{2m+1}{m}\le2^{2m}=4^m.$$ The induction hypothesis gives $P(m+1)\le4^m$, and hence $P(q)\le4^m4^m=4^{q-1}$. This completes the induction. [F1, F2, F3, F4, induction]

2.1 For real $x\ge2$, let $q$ be the largest prime at most $x$; it exists because the primes at most $x$ form a finite nonempty set. Then $P(x)=P(q)\le4^{q-1}$ by step 1.1. By monotonicity and the product law in [F5], $$\theta(x)=\log P(x)\le(q-1)\log4\le(x-1)\log4=2(x-1)\log2<2x\log2.$$ This proves the stated bound. [F5, step 1.1, choose, algebra] ∎

