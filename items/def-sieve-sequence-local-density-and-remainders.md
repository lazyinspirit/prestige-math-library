---
id: def-sieve-sequence-local-density-and-remainders
kind: definition
title: "Sieve sequences, local densities, and remainder terms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-arithmetic-function
  - def-prime
  - def-number-theoretic-mobius-function
  - thm-canonical-prime-factorisation
  - def-integers-modulo-n
  - thm-chinese-remainder-theorem
  - thm-standard-representatives-modulo-n
  - thm-subset-of-a-finite-set
  - thm-product-rule
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 12, §12.1"
      url: "https://kskedlaya.org/ant/chap-brun.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §2"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: n/a
---

## Definition

Let $a$ be an arithmetic function on the positive integers with finite support
contained in ${1,\ldots,N\}$, where $N\ge1$, and suppose $a(n)$ is a
nonnegative real number for every $n$. Let $z>1$ be real, let $\mathcal P$ be
a set of primes, and put

$$P(z):=\prod_{\substack{p\in\mathcal P\\p<z}}p.$$

For each prime $p\in\mathcal P$ with $p<z$, choose a set of forbidden residue
classes $\Omega_p\subseteq\mathbb Z/p\mathbb Z$. For every squarefree divisor
$d\mid P(z)$, define

$$A_d:=\sum_{\substack{1\le n\le N\\[n]_p\in\Omega_p\text{ for every }p\mid d}}a(n),\qquad
g(1):=1,\qquad g(d):=\prod_{p\mid d}\frac{|\Omega_p|}{p}.$$

Thus $g$ is multiplicative on the squarefree divisors of $P(z)$ and its prime
values are the local proportions of forbidden residues. Given a real main scale
$X$, the remainder $r_d$ is defined by $A_d=g(d)X+r_d$ for each such $d$; no
size bound on $r_d$ is part of this definition. All displayed products and
sums are finite. Here squarefree means $\mu(d)\ne0$, equivalently no prime
square divides $d$; canonical prime factorisation writes such a $d$ as a product
of its distinct prime divisors. By the Chinese remainder theorem, the local
conditions for those prime divisors specify exactly $\prod_{p\mid d}|\Omega_p|$
residue classes modulo $d$, so $g(d)$ is their proportion among all $d$ residue
classes.

## Definition references

[[def-arithmetic-function]]

[[def-prime]]

[[def-number-theoretic-mobius-function]]

[[thm-canonical-prime-factorisation]]

[[def-integers-modulo-n]]

[[thm-chinese-remainder-theorem]]

[[thm-standard-representatives-modulo-n]]

[[thm-subset-of-a-finite-set]]

[[thm-product-rule]]

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 12, §12.1](https://kskedlaya.org/ant/chap-brun.html)

[Heath-Brown, *Lectures on sieves*, §2](https://arxiv.org/pdf/math/0209360)
