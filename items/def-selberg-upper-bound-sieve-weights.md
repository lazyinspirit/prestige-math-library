---
id: def-selberg-upper-bound-sieve-weights
kind: definition
title: "Selberg quadratic upper-sieve weights and their lcm form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-sieve-sequence-local-density-and-remainders
  - def-number-theoretic-mobius-function
  - def-prime
  - thm-canonical-prime-factorisation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 13, §13.2"
      url: "https://kskedlaya.org/ant/chap-selberg.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §2"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: n/a
---

## Definition

Assume $0<g(p)<1$ for every prime $p\in\mathcal P$ with $p<z$, and let
$y>1$. Define the finite, divisor-closed set

$$\mathcal D(y,z):=\{d\mid P(z):d<\sqrt y\},$$

Every divisor of $P(z)$ is squarefree because $P(z)$ is a product of distinct
primes.

Define the multiplicative function $h$ on the squarefree divisors of $P(z)$ by

$$h(1):=1,\qquad h(d):=\prod_{p\mid d}\frac{g(p)}{1-g(p)}.$$

The Selberg normalizing sum is

$$H(y,z):=\sum_{d\in\mathcal D(y,z)}h(d).$$

It is positive because $1\in\mathcal D(y,z)$ and $h(1)=1$. For
$d\in\mathcal D(y,z)$ define

$$\rho(d):=\frac{\mu(d)h(d)}{g(d)H(y,z)}
\sum_{\substack{m\mid P(z)\\dm<\sqrt y\\(m,d)=1}}h(m),$$

and set $\rho(d)=0$ for squarefree $d\mid P(z)$ outside $\mathcal D(y,z)$.
Every denominator is nonzero, and the sums are finite. For each positive
integer $q$, the lcm-form upper-sieve coefficient is

$$\lambda^+(q):=\sum_{\substack{d,e\in\mathcal D(y,z)\\[d,e]=q}}\rho(d)\rho(e),$$

where $[d,e]$ denotes the least positive common multiple of $d$ and $e$.

## Definition references

[[def-sieve-sequence-local-density-and-remainders]]

[[def-number-theoretic-mobius-function]]

[[def-prime]]

[[thm-canonical-prime-factorisation]]

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 13, §13.2](https://kskedlaya.org/ant/chap-selberg.html)

[Heath-Brown, *Lectures on sieves*, §2](https://arxiv.org/pdf/math/0209360)
