---
id: def-chen-kuehn-weighted-sifted-sum
kind: definition
title: "Kuhn weight and weighted sifted sum in Chen's argument"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-prime-factor-count-with-multiplicity
  - lem-chen-singular-series-specialization
  - def-sieve-sequence-local-density-and-remainders
  - def-prime
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapter 12, Theorem 12.2 (full-text copy hosted by the University of Toledo)"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, Lemma 9"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
verification:
  precheck: n/a
---

## Definition

Let $x\ge3$, let $h$ be an even integer with $0<|h|\le x$, and let
$2<u<v$ and $\lambda\ge2$ be fixed real numbers. Let
$\mathcal P_h:=\{q:q\text{ is prime and }q\nmid h\}$ and

$$P_h(z):=\prod_{\substack{q\in\mathcal P_h\\q<z}}q.$$

For a positive integer $m$, define the Kuhn weight

$$K_{h;u,v,\lambda}(m):=1-\frac1\lambda \sum_{\substack{q\in\mathcal P_h\\x^{1/v}\le q<x^{1/u}\\q\mid m}}1.$$

The weighted sifted sum over prime translates is

$$W_h(x;u,v,\lambda):= \sum_{\substack{p\le x\\p\text{ prime}\\p+h\ne0\\(|p+h|,P_h(x^{1/v}))=1}} K_{h;u,v,\lambda}(|p+h|).$$

Also define the truncated weighted sum

$$W_h^{\le x}(x;u,v,\lambda):= \sum_{\substack{p\le x\\p\text{ prime}\\0<|p+h|\le x\\(|p+h|,P_h(x^{1/v}))=1}} K_{h;u,v,\lambda}(|p+h|).$$

Each prime $p\le x$ contributes at most once, and the absolute value is used
for negative translates. The local factor used in this definition is Chen's
normalization $C(h)$ from the even-shift singular-series specialization; the
ordinary two-prime tuple singular series is $2C(h)$.

## Definition references

[[def-prime-factor-count-with-multiplicity|Prime-factor count with multiplicity]]

[[lem-chen-singular-series-specialization|Chen's normalized even-shift singular series]]

[[def-sieve-sequence-local-density-and-remainders|Sieve sequences and local densities]]

Richert, *Lectures on Sieve Methods*, Chapter 12, Theorem 12.2

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*, Lemma 9

## Facts & Assumptions

**Given:** The parameters $x,h,u,v,\lambda$ and definitions in the Definition.

[F1] [[def-prime-factor-count-with-multiplicity]]: $P_2$ consists of integers $m>1$ with at most two prime factors counted with multiplicity.

[F2] [[lem-chen-singular-series-specialization]]: $C(h)$ is half the ordinary two-shift singular series for $\{0,h\}$ and is given by the explicit positive Euler product in that item.

[F3] [[def-sieve-sequence-local-density-and-remainders]]: a sifted sum is formed from a finite nonnegative sequence by removing its prescribed local prime divisors, with remainder terms recorded separately from its main scale.

[F4] [[def-prime]]: the summation variable $p$ ranges over positive prime integers.
