---
id: lem-chen-singular-series-specialization
kind: lemma
title: "Chen's even-shift singular series as the two-tuple singular series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-prime-tuple-singular-series
  - def-admissible-prime-tuple
  - lem-prime-tuple-singular-series-converges
  - def-prime
  - def-unit-group-modulo-n-and-euler-totient
  - cor-totient-at-one-and-at-a-prime
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, introduction"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "Goldston, Pintz, and Yıldırım, Primes in Tuples I, Section 1"
      url: "https://www.renyi.hu/~pintz/0508185.pdf"
---

## Statement

For a fixed nonzero even integer $h$, put $H_h=\{0,h\}$. Let
$\nu_{H_h}(p)$ be the number of distinct residue classes represented by
$H_h$ modulo $p$, and let $\mathfrak S(H_h)$ be the Hardy–Littlewood singular
series of these two shifts, with local factor
$(1-\nu_{H_h}(p)/p)/(1-1/p)^2$. Then $H_h$ is admissible,
$\mathfrak S(H_h)$ converges absolutely and is positive, and its Chen
normalization

$$C(h):=\tfrac12\mathfrak S(H_h)$$

is

$$C(h)=\prod_{p>2}\left(1-\frac1{(p-1)^2}\right) \prod_{\substack{p\mid h\\p>2}}\frac{p-1}{p-2}.$$

Thus the local factor at $2$ in the ordinary two-prime tuple singular series is
the factor $2$ removed by the Chen normalization.

## Statement references

[[def-prime-tuple-singular-series|Hardy–Littlewood singular series]]

[[def-admissible-prime-tuple|Admissible prime tuple]]

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*, introduction

Goldston, Pintz, and Yıldırım, *Primes in Tuples I*, Section 2, author-hosted arXiv v1 full text

## Facts & Assumptions

**Given:** A fixed nonzero even integer $h$ and the two-element shift set
$H_h=\{0,h\}$.

[F1] [[def-admissible-prime-tuple]]: a finite set $H$ is admissible when $\nu_H(p)<p$ for every prime $p$, where $\nu_H(p)$ counts the distinct residues represented by its shifts modulo $p$.

[F2] [[def-prime-tuple-singular-series]]: for an admissible $k$-element shift set $H$, the singular series is the product of local factors $(1-\nu_H(p)/p)/(\varphi(p)/p)^k$.

[L1] [[lem-prime-tuple-singular-series-converges]]: for admissible $H$, the partial products of its local factors converge to a finite strictly positive real number.

[F3] [[def-prime]]: every prime is an integer greater than $1$ with positive divisors $1$ and itself.

[F4] [[def-unit-group-modulo-n-and-euler-totient]]: $\varphi(n)$ is the cardinality of the unit group modulo the positive integer $n$.

[F5] [[cor-totient-at-one-and-at-a-prime]]: if $p$ is prime, then $\varphi(p)=p-1$.

## Proof

**Given:** A fixed nonzero even integer $h$ and the two-element shift set
$H_h=\{0,h\}$.

[F1] [[def-admissible-prime-tuple]]: a finite set $H$ is admissible when $\nu_H(p)<p$ for every prime $p$, where $\nu_H(p)$ counts the distinct residues represented by its shifts modulo $p$.

[F2] [[def-prime-tuple-singular-series]]: for an admissible $k$-element shift set $H$, the singular series is the product of local factors $(1-\nu_H(p)/p)/(\varphi(p)/p)^k$.

[L1] [[lem-prime-tuple-singular-series-converges]]: for admissible $H$, the partial products of its local factors converge to a finite strictly positive real number.

[F3] [[def-prime]]: every prime is an integer greater than $1$ with positive divisors $1$ and itself.

[F4] [[def-unit-group-modulo-n-and-euler-totient]]: $\varphi(n)$ is the cardinality of the unit group modulo the positive integer $n$.

[F5] [[cor-totient-at-one-and-at-a-prime]]: if $p$ is prime, then $\varphi(p)=p-1$.



**Given:** The fixed nonzero even integer $h$, the tuple $H_h$, and the supplier interfaces [F1]–[F5].

1.1 Modulo $2$, both elements of $H_h$ are congruent to $0$, so $|H_h\bmod 2|=1<2$. For every odd prime $p$, the set $H_h\bmod p$ has at most two elements, and hence has fewer than $p$ elements. By [F1], $H_h$ is admissible. [given, F1, choose]

1.2 If $p>2$ divides $h$, then $H_h\bmod p=\{0\}$ and $|H_h\bmod p|=1$. If $p>2$ does not divide $h$, then $0$ and $h$ give distinct residues and $|H_h\bmod p|=2$. [given, F3, algebra]

1.3 At $p=2$, $\nu_{H_h}(2)=1$, so the local factor in [F2], using [F5], is $(1-1/2)/(1-1/2)^2=2$. For $p>2$ with $p\nmid h$, $\nu_{H_h}(p)=2$ and it is
$(1-2/p)/(1-1/p)^2=p(p-2)/(p-1)^2=1-1/(p-1)^2$. [F2, F5, step 1.2, algebra]

2.1 For $p>2$ with $p\mid h$, $\nu_{H_h}(p)=1$, so the factor is $(1-1/p)/(1-1/p)^2=p/(p-1)$. Relative to the generic factor from step 1.3, this multiplies it by $(p-1)/(p-2)$. [F2, F5, step 1.2, step 1.3, algebra]

3.1 Multiplying the local factors from steps 1.3 and 2.1 gives $\mathfrak S(H_h)=2C(h)$ with the displayed formula for $C(h)$. The generic product converges absolutely because $\sum_{p>2}(p-1)^{-2}\le\sum_{m\ge2}m^{-2}<\infty$; the block $2^j\le m<2^{j+1}$ contributes at most $2^j2^{-2j}=2^{-j}$. Each factor is positive, and the correction product has only finitely many factors because $h$ has finitely many prime divisors. Thus $C(h)>0$, consistently with [L1]. [L1, step 1.3, step 2.1, algebra] ∎
